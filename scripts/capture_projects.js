import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const projectList = [
  {
    id: 'dhriti',
    name: 'Dhriti',
    url: 'https://dhriti.mind-empowered.org/',
    repo: null,
    category: ['impact', 'web'],
    catLabel: 'YOUTH MENTAL HEALTH // RESILIENCE',
    partner: 'Mind Empowered'
  },
  {
    id: 'words-of-wisdom',
    name: 'Words of Wisdom',
    url: 'https://words-of-wisdom-eight.vercel.app/',
    repo: null,
    category: ['impact', 'web'],
    catLabel: 'CULTURAL ARCHIVE // ORAL HISTORIES',
    partner: 'Mind Empowered'
  },
  {
    id: 'mind-empowered',
    name: 'Mind Empowered Official Portal',
    url: 'https://mind-empowered.org/',
    repo: 'https://github.com/Mind-Empowered/me-main-website',
    category: ['impact', 'web'],
    catLabel: 'NON-PROFIT // PHILANTHROPY PLATFORM',
    partner: 'Mind Empowered'
  },
  {
    id: 'starlet',
    name: 'Starlet 5.0',
    url: 'https://starlet-phi.vercel.app/',
    repo: null,
    category: ['impact', 'web'],
    catLabel: 'STUDENT LEADERSHIP // STEM ACCELERATION',
    partner: 'Mind Empowered'
  },
  {
    id: 'myth-or-fact',
    name: 'Myth or Fact? | QPR Mini Game',
    url: 'https://myth-vs-fact.vercel.app/',
    repo: null,
    category: ['games', 'impact'],
    catLabel: 'INTERACTIVE QPR // SUICIDE PREVENTION',
    partner: 'Mind Empowered'
  },
  {
    id: 'little-big-feelings',
    name: 'Little Big Feelings',
    url: 'https://little-big-feelings.vercel.app/',
    repo: null,
    category: ['impact', 'web'],
    catLabel: 'CHILD PSYCHOLOGY // EMOTIONAL TOOLKIT',
    partner: 'Mind Empowered'
  },
  {
    id: 'signal-scout',
    name: 'Signal Scout | Urban Compassion System',
    url: 'https://signal-scout-b9v280pke-justramms-projects.vercel.app/',
    repo: null,
    category: ['web', 'impact'],
    catLabel: 'URBAN INTERVENTION // RADAR TELEMETRY',
    partner: 'Cyber Aliens'
  },
  {
    id: 'stickman-rescue',
    name: 'Stickman to the Rescue',
    url: 'https://stickman-to-the-rescue.vercel.app/',
    repo: null,
    category: ['games', 'impact'],
    catLabel: 'SERIOUS GAME // CRISIS INTERVENTION',
    partner: 'Mind Empowered'
  },
  {
    id: 'feeling-fusion',
    name: 'Feeling Fusion',
    url: 'https://feeling-fusion.vercel.app/',
    repo: null,
    category: ['impact', 'web'],
    catLabel: 'EMOTIONAL INTELLIGENCE // AUDIO-VISUAL',
    partner: 'Mind Empowered'
  },
  {
    id: 'roseann',
    name: 'Roseann | Fine Architectural Jewelry',
    url: 'https://rose-ann.vercel.app/',
    repo: null,
    category: ['branding', 'web'],
    catLabel: 'LUXURY ATELIER // GOTHIC ARCHITECTURAL JEWELRY',
    partner: 'Cyber Aliens'
  },
  {
    id: 'leela-driving-school',
    name: 'LEELA Driving School',
    url: 'https://leela-red.vercel.app/',
    repo: null,
    category: ['web', 'branding'],
    catLabel: 'MVD APPROVED // DRIVING ACADEMY ECOSYSTEM',
    partner: 'Cyber Aliens'
  }
];

async function run() {
  console.log('Launching Chrome for inspection and screenshots...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--window-size=1440,900'
    ]
  });

  const results = [];

  for (const item of projectList) {
    const dir = path.join(process.cwd(), 'public', 'projects', item.id);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log(`\n>>> [${item.id}] Navigating to: ${item.url}`);
    let meta = {
      ...item,
      pageTitle: '',
      description: '',
      h1: '',
      screenshotPng: `/projects/${item.id}/cover.png`,
      screenshotJpg: `/projects/${item.id}/cover.jpg`,
      capturedAt: new Date().toISOString()
    };

    try {
      await page.goto(item.url, { waitUntil: 'networkidle2', timeout: 25000 }).catch(async (err) => {
        console.warn(`    Warning on networkidle2: ${err.message}, falling back to domcontentloaded`);
        await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 25000 });
      });

      // Small pause for client animations, fonts, and WebGL renders
      await new Promise(r => setTimeout(r, 2500));

      meta.pageTitle = await page.title();
      meta.description = await page.evaluate(() => {
        const desc = document.querySelector('meta[name="description"]')?.content
          || document.querySelector('meta[property="og:description"]')?.content
          || document.querySelector('p')?.innerText
          || '';
        return desc.slice(0, 300);
      });
      meta.h1 = await page.evaluate(() => {
        return document.querySelector('h1')?.innerText?.replace(/\s+/g, ' ')?.trim() || '';
      });

      const pngPath = path.join(dir, 'cover.png');
      const jpgPath = path.join(dir, 'cover.jpg');

      await page.screenshot({ path: pngPath, fullPage: false });
      await page.screenshot({ path: jpgPath, type: 'jpeg', quality: 85, fullPage: false });

      console.log(`    ✓ Saved: ${pngPath}`);
      console.log(`    Title: "${meta.pageTitle}"`);
      console.log(`    H1: "${meta.h1}"`);
      console.log(`    Desc: "${meta.description.slice(0, 100)}..."`);
    } catch (err) {
      console.error(`    ✗ Error capturing ${item.id}:`, err.message);
    } finally {
      await page.close();
    }

    results.push(meta);
  }

  await browser.close();

  // Save metadata to src/data/projectsData.json
  const dataDir = path.join(process.cwd(), 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(dataDir, 'projectsData.json'),
    JSON.stringify(results, null, 2),
    'utf8'
  );
  console.log(`\nSuccessfully processed all ${results.length} projects! Data saved to src/data/projectsData.json`);
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});

