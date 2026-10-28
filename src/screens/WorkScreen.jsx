import React, { useState } from 'react';
import { useRouter } from '../router/RouterContext';

export default function WorkScreen() {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'obsidian',
      title: 'Project Obsidian',
      category: ['web'],
      catLabel: 'WEB ARCHITECTURE // THREE.JS',
      meta: '2025 // 0.18s RENDER',
      desc: 'Decentralized cloud telemetry and high-concurrency node visualizer built with WebGL shader pipelines and real-time biometric state synchronization.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvfnBrPJQHTuzy83gmhTfcYlQlYnj0-BJMaP3mh5FFcE495AJMGvA04Rld_XkYhD8pgv4_oZjnGzIpwRiL3PKUJTK9DcuPDVwqFWpnEeXeZDkFk3XjDetTgFBjHXi4eoTQnSPPn9IPaCrDlZJ_4k84Lqh9VkpXrFw5c89Kn6wqVg8i1P3mTjr8AHZBGm2dnPm1_npMpvq7gua_eK2WTjDVxDJA7OiL2-5O2aHsMbdX',
      cols: 'span 8',
      dark: true,
      hasCaseStudy: true
    },
    {
      id: 'starlet',
      title: 'STARLET 5.0',
      category: ['web', 'impact'],
      catLabel: 'With Mind Empowered',
      meta: '2025 // +340% TVL',
      desc: 'Transmedia STEM acceleration network empowering 18,000+ adolescent girls through spatial curriculum and peer-to-peer micro-grants.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAITkuQiVQWeZrAs7pR6TVqI3kpwsC0-hEHJoXSb7uNGUwQUH_WUJf273f3PWrHxSSZBYPoItWqgAE6N1iu5hLSeMLjjhR_7ClbVpeF39SPU7xkOK-3gElGZsLWUdXW0udBr0E-aVDfbJTLxXJxJidyCfN0eyxNkqJ_6Inn7ni31lY3zbH9ltiAvqzIWqoAZK4kTJvarVmxXeMP6_6Dhf3EqNbzqe22x2mkkFW5XhQQ',
      cols: 'span 4',
      dark: false
    },
    {
      id: 'neokinetic',
      title: 'Neo-Kinetic Studio',
      category: ['branding'],
      catLabel: 'BRANDING // 3D HARDWARE',
      meta: '2024 // SITE OF THE DAY',
      desc: 'Comprehensive brand identity, generative packaging design, and parametric WebGL product customizer for precision electronic acoustic hardware.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADU3TXaw6DiDatblDZAgzY6LF6jBxkTO37Sj0EBx8q5JgU4M-WOQoc-0VWC3b14TpmVBNDba2G0ocUoRX40dSvkq1vU5BFt1xOls1Yfv_Peu-IYWUlaqcgb7U0kfEkkMEyvz9ZgDX-IfRdA4Ofo3S8sxHwB2Yjjhd91ObA0FnvGXTKKuoiwp6IVTI8I-E6UTQ1QCH3SObNfqmwi8CZYRI9PjESZQdhhAh41ymeUXSy',
      cols: 'span 5',
      dark: false
    },
    {
      id: 'chronovault',
      title: 'Chrono Vault',
      category: ['video'],
      catLabel: 'VIDEO // UNREAL ENGINE 5',
      meta: 'CGI MOTION // 60FPS',
      desc: 'Speculative AAA transmedia world-building teaser and interactive story prologue rendered natively via ray-traced cinematic simulations.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmsnEGp8zgQL0pToVRJxnCruS-_OKgPR4FSYSeNlVRkAFHrvs_gNmq-dCvupCE4ooF7F5Xn_qp0LQmO1j4gHX5KTw29q-JDKTtdWkD_RoH4495P1kj0NpGiGEtLc_N7FgSbeL9q9urrUUitFmgajPZE-VRWuXLH6QuwG699t0UmBmOmSvCORNMeCzaUYL-SHI-5NgvyrZG_GFocLIdXoWqO0GLhJwsH-Bje3-gYRW3',
      cols: 'span 7',
      dark: true
    },
    {
      id: 'dhriti',
      title: 'Dhriti',
      category: ['web', 'impact'],
      catLabel: 'With Mind Empowered',
      meta: '2025 // MOBILE HUB',
      desc: 'Adolescent cognitive resilience and emotional regulation suite featuring tactile haptic feedback mechanisms and zero-knowledge privacy protocols.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX-LWZSblngk_dwuHmgwBxLyiXnBiVyJoQR9drC19KCqnpuqWwY7C76UxPKBqYEFF9-J-d_evDlBTlZCd5XwDt9fX4PsrCL0n2dWYJ6AtM82lT8s2i4AAUBFF6PupEnlM5EkZ8xkccHDdWWZCYRwidRednZLBo7oIPiPoBucQsp4M2pYnlXlUQYIMkfzzMC-3_NieWNDwxaiBWcPiyF83OvkC61JZ_OifF_nOA7ZIz',
      cols: 'span 4',
      dark: false
    },
    {
      id: 'aurabotanica',
      title: 'Aura Botanica',
      category: ['graphics', 'branding'],
      catLabel: 'PACKAGING // IDENTITY',
      meta: 'D&AD GRAPHITE PENCIL',
      desc: 'Regenerative bio-cosmetics brand identity, structural biodegradable packaging architecture, and global editorial campaign guidelines.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFKROKqs-NAFppvCvbbs141VyC1DluISNFUKdloeLVWYkK4es4ds92Seqd-HhQ6KwF6ibEIlU77RoQMvVTZlJxuCbZDNG_rXKjtpAlwmpvirwp0WeqKXrL7jGpULQmlebXXej-vHUnEsiFSgqKjV70DO66DN7cQ8SLmk5Tkvjkm_e8ofTXZAuU324y5RfQ2GDd1kqcLirx67V-nxBITbyvsScEFDnik25rEsyxDIov',
      cols: 'span 4',
      dark: false
    },
    {
      id: 'words',
      title: 'Words of Wisdom',
      category: ['web', 'impact'],
      catLabel: 'With Mind Empowered',
      meta: '2024 // UNESCO RECOGNITION',
      desc: 'Living generational oral storytelling repository preserving endangered regional dialect narratives with spatial interactive soundscapes.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBavRdhWcLQXFG-kD9KnimjkZANq3lTo1wZCP-FDqUBnOHnPyE2bpkT5-NmuUGKo-SLsBGgCINupPAN0_YJycjtVnHFK8aY0dc8DCGHgsGwIBlyqB-giM-_6pCoYSdNZXqHmkuJuTBbtgRiP0STNcVtMp-NO3lWIDx5AkVZuUDVic_tVigATU-4uaq73OWTvJo2QGztK-IjPbxdvYZLABFXD8YDFWqE2QmSIPSKQ7f4',
      cols: 'span 4',
      dark: false
    },
    {
      id: 'hyperion',
      title: 'Hyperion Audio',
      category: ['web'],
      catLabel: 'WEB AUDIO API // RUST WASM',
      meta: '2025 // 32-BIT FLOAT',
      desc: 'Browser-native polyphonic synthesizer running low-latency WebAssembly audio DSP kernels with real-time vector graphics visualization and MIDI over WebBluetooth.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVndFLVDRohD6oOlvnWBTPDWLiFTPsOTxRxdUifZSs8svXi38HBJHjB6eYNA6ZKPi_u7ConZ_hWhTd322M5gOJP5lyKup9sUfZNEQ6CFE9BCE5oleZNimVudCbvLaxm2vhan3X9Go6WggkJGLFBawmgix8q9HKoqaBl9PxlTtYQuONXZpSowAKO_qliDgZ7bdFB5xYr0mXLetzbUlBnBz5-7FqYjT3yuAd4FfxvGc1',
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
                  {p.hasCaseStudy ? (
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
      </section>
    </main>
  );
}

