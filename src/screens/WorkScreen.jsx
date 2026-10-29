import React, { useState } from 'react';
import { useRouter } from '../router/RouterContext';

export default function WorkScreen() {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'feline',
      title: 'Feline Insights',
      category: ['web'],
      catLabel: 'MARKET RESEARCH // DATA ARCHITECTURE',
      meta: '2025 // ENTERPRISE PLATFORM',
      desc: 'Global market intelligence and corporate analytics portal with interactive multi-region data visualization and enterprise conversion funnels.',
      link: 'https://felineinsights.com/',
      img: '/images/bento-fluid-balancing.jpg',
      cols: 'span 8',
      dark: true,
      hasCaseStudy: false
    },
    {
      id: 'starlet',
      title: 'STARLET 5.0',
      category: ['web', 'impact'],
      catLabel: 'With Mind Empowered',
      meta: '2025 // +340% ENGAGEMENT',
      desc: 'Transmedia student innovation collective and digital learning platform empowering youth leadership through interactive educational architecture.',
      link: 'https://starlet.mind-empowered.org/',
      img: '/images/starlet-stem.jpg',
      cols: 'span 4',
      dark: false
    },
    {
      id: 'athreya',
      title: 'Athreya Ayurveda Center',
      category: ['web'],
      catLabel: 'HEALTHCARE PORTAL // DIGITAL FLAGSHIP',
      meta: '2024 // GLOBAL BOOKING TELEMETRY',
      desc: 'International wellness retreat and heritage hospital web ecosystem featuring multi-lingual consultation flows and treatment regimen catalogs.',
      link: 'http://theathreya.com',
      img: '/images/bento-workstation.jpg',
      cols: 'span 5',
      dark: false
    },
    {
      id: 'rajremanan',
      title: 'Motion Graphics Portfolio',
      category: ['video'],
      catLabel: 'MOTION GRAPHICS // RAJ REMANAN',
      meta: 'CGI MOTION // 60FPS',
      desc: 'Cinematic visual effects showcase, dynamic typography reels, and studio portfolio architecture for award-winning animator Raj Remanan.',
      link: 'https://rajremanan.co.uk/',
      img: '/images/chronovault-cinematic.jpg',
      cols: 'span 7',
      dark: true
    },
    {
      id: 'dhriti',
      title: 'Dhriti',
      category: ['web', 'impact'],
      catLabel: 'With Mind Empowered',
      meta: '2025 // MENTAL HEALTH HUB',
      desc: 'Adolescent cognitive resilience and emotional regulation suite featuring accessible guided exercises and privacy-preserving tools.',
      link: 'https://dhriti.mind-empowered.org/',
      img: '/images/dhriti-mobile.jpg',
      cols: 'span 4',
      dark: false
    },
    {
      id: 'edusphere',
      title: 'EduSphereNZ',
      category: ['web'],
      catLabel: 'IMMIGRATION & EDUCATION ADVISORY',
      meta: '2024 // GLOBAL ONBOARDING',
      desc: 'New Zealand international education consultancy portal with visa assessment calculators and student counseling booking pipelines.',
      link: 'https://eduspherenz.com/',
      img: '/images/aura-botanica.jpg',
      cols: 'span 4',
      dark: false
    },
    {
      id: 'words',
      title: 'Words of Wisdom',
      category: ['web', 'impact'],
      catLabel: 'With Mind Empowered',
      meta: '2024 // CULTURAL ARCHIVE',
      desc: 'Living generational storytelling repository preserving regional narratives and oral histories with responsive audio-visual archives.',
      link: 'https://words-of-wisdom-eight.vercel.app/',
      img: '/images/words-wisdom.jpg',
      cols: 'span 4',
      dark: false
    },
    {
      id: 'feelingfusion',
      title: 'Feeling Fusion & Little Big Feelings',
      category: ['web', 'impact'],
      catLabel: 'With Mind Empowered',
      meta: '2025 // EMOTIONAL LITERACY',
      desc: 'Digital wellness and emotional intelligence toolkits designed for child psychology, parent counseling, and adolescent developmental support.',
      link: 'https://feeling-fusion.vercel.app/',
      img: '/images/obsidian-topology.jpg',
      cols: 'span 12',
      dark: true
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <section className="section-padding container-max">
        {/* Top Telemetry Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px', marginBottom: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="beacon-dot animate-pulse-soft"></span>
            <span className="font-label-caps" style={{ color: 'var(--on-surface-variant)' }}>
              ARCHIVE COORD // 45.4215° N, 75.6972° W
            </span>
          </div>
          <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
            {filteredProjects.length} SELECTED ARTIFACTS
          </span>
        </div>

        {/* Title */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
            CYBER ALIENS // REPERTORY
          </span>
          <h1 className="font-headline-lg" style={{ marginTop: '6px' }}>
            Selected work & artifacts.
          </h1>
          <p className="font-body-lg" style={{ maxWidth: '640px', marginTop: 'var(--space-sm)' }}>
            A curated index of transmedia systems, next-generation web applications, generative brand worlds, and purpose-driven initiatives built with relentless precision.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'var(--space-2xl)' }}>
          {[
            { label: 'All Projects (08)', val: 'all' },
            { label: 'Web Architecture', val: 'web' },
            { label: 'Branding', val: 'branding' },
            { label: 'Graphics & Objects', val: 'graphics' },
            { label: 'Video & Motion', val: 'video' },
            { label: 'Social Impact Labs', val: 'impact' }
          ].map((cat) => (
            <button
              key={cat.val}
              className={`filter-chip ${filter === cat.val ? 'active' : ''}`}
              onClick={() => setFilter(cat.val)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid-12">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="col-span-12"
              style={{ gridColumn: p.cols }}
            >
              <article
                className={p.dark ? 'card-monolith' : 'card-cream'}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                    <div className="badge-pill-dark">
                      <span className="font-label-caps">{p.catLabel}</span>
                    </div>
                    <span className="font-label-caps" style={{ color: p.dark ? 'var(--on-primary-container)' : 'var(--outline)' }}>
                      {p.meta}
                    </span>
                  </div>

                  <div style={{ aspectRatio: '16/10', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                    <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <h2 className="font-headline-sm" style={{ color: p.dark ? 'var(--text-inverse)' : 'var(--text-primary)' }}>
                    {p.title}
                  </h2>
                  <p className="font-body-sm" style={{ color: p.dark ? 'var(--on-primary-container)' : 'var(--text-secondary)', marginTop: '4px' }}>
                    {p.desc}
                  </p>
                </div>

                <div style={{ paddingTop: 'var(--space-md)', marginTop: 'var(--space-md)', borderTop: p.dark ? '1px solid var(--border-glass)' : '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-label-caps" style={{ color: p.dark ? 'var(--on-primary-container)' : 'var(--outline)' }}>
                    PRECISION SYSTEM
                  </span>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${p.dark ? 'btn-secondary' : 'btn-surface'} btn-sm`}
                      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>Visit Live Platform</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>open_in_new</span>
                    </a>
                  ) : p.hasCaseStudy ? (
                    <button className="btn btn-secondary btn-sm" onClick={() => navigate('/case-study')}>
                      <span>View Case Study</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                    </button>
                  ) : (
                    <button className="btn btn-surface btn-sm" onClick={() => navigate('/proposal')}>
                      <span>Request Brief</span>
                    </button>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Bottom Conversion Monolith matching image copy 4.png & image copy 11.png */}
        <div
          className="card-monolith"
          style={{
            marginTop: 'var(--space-3xl)',
            padding: 'var(--space-3xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          ></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <div className="badge-pill-dark" style={{ display: 'inline-flex', marginBottom: 'var(--space-md)' }}>
              <span className="beacon-dot animate-ping-radar"></span>
              <span className="font-label-caps" style={{ color: '#fff' }}>HAVE A PROJECT IN MIND?</span>
            </div>

            <h2 className="font-headline-lg" style={{ color: '#fff', marginBottom: 'var(--space-md)', fontSize: 'clamp(32px, 5vw, 56px)' }}>
              Let's build something unreal.
            </h2>

            <p className="font-body-lg" style={{ color: 'var(--tertiary-fixed)', marginBottom: 'var(--space-2xl)' }}>
              We partner with ambitious founders, engineering teams, and institutions to engineer category-defining digital artifacts.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-md)' }}>
              <button
                className="btn btn-secondary"
                onClick={() => navigate('/proposal')}
                style={{ height: '52px', padding: '0 32px' }}
              >
                <span>GET A PROPOSAL</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </button>

              <a
                href="mailto:hello@cyberaliens.in?subject=Discovery%20Call%20Request"
                className="btn btn-surface"
                style={{
                  height: '52px',
                  padding: '0 28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#fff',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  textDecoration: 'none'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_today</span>
                <span>SCHEDULE DISCOVERY CALL</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

