import React, { useState } from 'react';
import { useRouter } from '../router/RouterContext';

export default function ImpactScreen() {
  const { navigate } = useRouter();
  const [openPillar, setOpenPillar] = useState(0);

  const pillars = [
    {
      num: '01',
      title: 'Digital Equity & Spatial Curriculum',
      summary: 'Democratizing high-end 3D & software literacy for underrepresented young engineers.',
      detail: 'Through our STARLET 5.0 partnership, we deploy lightweight browser-native WebGL engineering simulators capable of executing on low-spec hardware, ensuring geographic and socioeconomic factors never constrain technical potential.'
    },
    {
      num: '02',
      title: 'Mind & Cognitive Resilience',
      summary: 'Tactile, non-punitive digital health tools engineered for adolescent emotional regulation.',
      detail: 'In collaboration with Mind Empowered clinical practitioners, we build software like Dhriti that replaces punitive screen-time metrics with restorative haptic grounding techniques and zero-knowledge privacy standards.'
    },
    {
      num: '03',
      title: 'Living Generational Archives',
      summary: 'Preserving endangered oral dialects and cultural knowledge via interactive transmedia.',
      detail: 'Our Words of Wisdom initiative leverages spatial audio engineering and decentralized web archives to preserve oral histories from elders across indigenous communities, making ancestral wisdom immortal and accessible.'
    }
  ];

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <section className="section-padding container-max">
        
        {/* Top Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <div className="badge-pill-dark" style={{ display: 'inline-flex', marginBottom: 'var(--space-md)' }}>
            <span className="beacon-dot animate-ping-radar"></span>
            <span className="font-label-caps" style={{ color: '#fff' }}>SOCIAL IMPACT // MIND EMPOWERED ALLIANCE</span>
          </div>
          <h1 className="font-headline-lg" style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', maxWidth: '900px', margin: '0 auto var(--space-md)' }}>
            Engineering digital futures.<br />Anchoring human equity.
          </h1>
          <p className="font-body-lg" style={{ maxWidth: '680px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Cyber Aliens dedicates structural resources and studio revenue toward grassroots technological literacy, youth mental health resilience, and generational digital empowerment.
          </p>
        </div>

        {/* Manifesto Callout Monolith matching image copy 9.png */}
        <div
          className="card-monolith"
          style={{
            padding: 'var(--space-2xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)',
            marginBottom: 'var(--space-3xl)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)', letterSpacing: '0.15em', display: 'block', marginBottom: '12px' }}>
              OUR MANIFESTO
            </span>
            <blockquote style={{ fontFamily: 'var(--font-headline)', fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.4, color: '#fff', fontWeight: 600, fontStyle: 'italic', marginBottom: 'var(--space-md)' }}>
              "Intellectual curiosity shouldn't only serve market cap. We dedicate our creative and technical firepower to democratizing technology access, mental resilience, and generational literacy."
            </blockquote>
            <p className="font-label-caps" style={{ color: 'var(--tertiary-fixed)', letterSpacing: '0.1em' }}>
              CYBER ALIENS ETHOS // JOINT CHARTER WITH MIND EMPOWERED
            </p>
          </div>
        </div>

        {/* 3 Core Impact Metrics */}
        <div className="grid-12" style={{ marginBottom: 'var(--space-3xl)' }}>
          {[
            { metric: '100%', label: 'Partner Reinvestment', sub: 'Of all joint studio initiatives directed straight to youth hardware grants and educational infrastructure.' },
            { metric: '1,400+', label: 'Students Mentored', sub: 'Young leaders trained across spatial computing, software engineering, and digital art curricula.' },
            { metric: '18,000+', label: 'Global Community Reach', sub: 'Adolescent participants engaged across STARLET 5.0 and Dhriti mindfulness platforms worldwide.' }
          ].map((item, idx) => (
            <div key={idx} className="col-span-12" style={{ gridColumn: 'span 4' }}>
              <div className="card-cream" style={{ textAlign: 'center', padding: 'var(--space-xl)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span className="font-display-xl" style={{ fontSize: 'clamp(44px, 5vw, 64px)', lineHeight: '1.1', color: 'var(--primary)', display: 'block' }}>
                  {item.metric}
                </span>
                <div>
                  <h3 className="font-headline-sm" style={{ marginTop: '8px', marginBottom: '8px' }}>{item.label}</h3>
                  <p className="font-body-sm" style={{ color: 'var(--text-secondary)' }}>{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Accordion: Strategic Alliance Pillars */}
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
              ALLIANCE ARCHITECTURE
            </span>
            <h2 className="font-headline-md" style={{ marginTop: '6px' }}>
              Three Pillars of Tangible Impact
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="card-cream"
                style={{
                  padding: 'var(--space-lg) var(--space-xl)',
                  cursor: 'pointer',
                  border: openPillar === idx ? '1px solid var(--accent-coral)' : '1px solid var(--border-subtle)',
                  transition: 'all var(--transition-fast)'
                }}
                onClick={() => setOpenPillar(openPillar === idx ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <span className="font-label-caps" style={{ color: openPillar === idx ? 'var(--accent-coral)' : 'var(--outline)', fontWeight: 'bold' }}>
                      {pillar.num}
                    </span>
                    <h3 className="font-headline-sm" style={{ fontSize: '18px', margin: 0 }}>
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined" style={{ transform: openPillar === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
                    expand_more
                  </span>
                </div>

                {openPillar === idx && (
                  <div style={{ marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
                    <p className="font-body-md" style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 600 }}>
                      {pillar.summary}
                    </p>
                    <p className="font-body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {pillar.detail}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The Mind Empowered Spotlight Monolith */}
        <div
          className="card-monolith"
          style={{
            padding: 'var(--space-3xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)',
            marginBottom: 'var(--space-3xl)'
          }}
        >
          <div className="grid-12" style={{ alignItems: 'center', rowGap: 'var(--space-xl)' }}>
            <div className="col-span-12" style={{ gridColumn: 'span 7' }}>
              <div className="badge-pill-dark" style={{ marginBottom: 'var(--space-md)' }}>
                <span className="beacon-dot"></span>
                <span className="font-label-caps">Featured Strategic Alliance</span>
              </div>
              <h2 className="font-headline-lg" style={{ color: '#fff', marginBottom: 'var(--space-md)' }}>
                Mind Empowered
              </h2>
              <p className="font-body-lg" style={{ color: 'var(--tertiary-fixed)', maxWidth: '580px', marginBottom: 'var(--space-xl)' }}>
                Mind Empowered is an international youth wellness and digital agency movement. Together, we deploy intuitive, human-centered digital interfaces that help young people navigate mental health stigmas and acquire transformative tech competencies.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <button className="btn btn-secondary" onClick={() => navigate('/proposal')}>
                  <span>Commission An Impact Project</span>
                </button>
              </div>
            </div>

            <div className="col-span-12" style={{ gridColumn: 'span 5' }}>
              <div style={{ aspectRatio: '4/3', borderRadius: 'var(--rounded-lg)', overflow: 'hidden', border: '1px solid var(--border-glass)' }}>
                <img
                  alt="Mind Empowered Youth Learning Workshop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAITkuQiVQWeZrAs7pR6TVqI3kpwsC0-hEHJoXSb7uNGUwQUH_WUJf273f3PWrHxSSZBYPoItWqgAE6N1iu5hLSeMLjjhR_7ClbVpeF39SPU7xkOK-3gElGZsLWUdXW0udBr0E-aVDfbJTLxXJxJidyCfN0eyxNkqJ_6Inn7ni31lY3zbH9ltiAvqzIWqoAZK4kTJvarVmxXeMP6_6Dhf3EqNbzqe22x2mkkFW5XhQQ"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Co-Created Impact Artifacts */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h2 className="font-headline-md" style={{ marginBottom: 'var(--space-lg)' }}>Co-Created Impact Artifacts</h2>
          <div className="grid-12">
            {[
              {
                title: 'STARLET 5.0',
                role: 'Transmedia STEM Curriculum',
                desc: 'Web-based interactive engineering laboratory designed for young women entering computational research and deep tech.',
                link: '/work'
              },
              {
                title: 'Dhriti Mindfulness Hub',
                role: 'Cognitive Resilience Mobile App',
                desc: 'Tactile, non-punitive emotional grounding suite built for adolescent stress relief and focus conditioning.',
                link: '/work'
              },
              {
                title: 'Words of Wisdom',
                role: 'Indigenous Oral Archive',
                desc: 'Interactive sound repository capturing multi-generational wisdom in endangered indigenous dialects.',
                link: '/work'
              }
            ].map((art, idx) => (
              <div key={idx} className="col-span-12" style={{ gridColumn: 'span 4' }}>
                <div className="card-cream" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span className="font-label-caps" style={{ color: 'var(--accent-coral)' }}>{art.role}</span>
                    <h3 className="font-headline-sm" style={{ marginTop: '4px', marginBottom: '8px' }}>{art.title}</h3>
                    <p className="font-body-sm">{art.desc}</p>
                  </div>
                  <div style={{ marginTop: 'var(--space-lg)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
                    <button className="btn btn-surface btn-sm" onClick={() => navigate(art.link)}>
                      <span>Explore Artifact</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
