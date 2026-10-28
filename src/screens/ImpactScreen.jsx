import React from 'react';
import { useRouter } from '../router/RouterContext';

export default function ImpactScreen() {
  const { navigate } = useRouter();

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <section className="section-padding container-max">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <div className="badge-dispatch" style={{ marginBottom: 'var(--space-md)' }}>
            <span className="beacon-dot animate-ping-radar"></span>
            <span className="font-label-caps">Social Impact // Mind Empowered Alliance</span>
          </div>
          <h1 className="font-headline-lg">
            Engineering digital futures.<br />Anchoring human equity.
          </h1>
          <p className="font-body-lg" style={{ maxWidth: '680px', margin: 'var(--space-md) auto 0' }}>
            Cyber Aliens dedicates structural resources and revenue toward grassroots technological literacy, youth mental health resilience, and generational digital empowerment.
          </p>
        </div>

        {/* 3 Core Impact Metrics */}
        <div className="grid-12" style={{ marginBottom: 'var(--space-3xl)' }}>
          {[
            { metric: '100%', label: 'Partner Reinvestment', sub: 'Of all joint studio initiatives directed straight to youth hardware grants and educational infrastructure.' },
            { metric: '1,400+', label: 'Students Mentored', sub: 'Young leaders trained across spatial computing, software engineering, and digital art curricula.' },
            { metric: '18,000+', label: 'Global Community Reach', sub: 'Adolescent participants engaged across STARLET 5.0 and Dhriti mindfulness platforms worldwide.' }
          ].map((item, idx) => (
            <div key={idx} className="col-span-12" style={{ gridColumn: 'span 4' }}>
              <div className="card-cream" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                <span className="font-display-xl" style={{ fontSize: '64px', lineHeight: '68px', color: 'var(--primary)', display: 'block' }}>
                  {item.metric}
                </span>
                <h3 className="font-headline-sm" style={{ marginTop: '8px', marginBottom: '8px' }}>{item.label}</h3>
                <p className="font-body-sm">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* The Mind Empowered Monolith Spotlight */}
        <div
          className="card-monolith"
          style={{
            padding: 'var(--space-3xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)',
            marginBottom: 'var(--space-3xl)'
          }}
        >
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div className="col-span-12" style={{ gridColumn: 'span 7' }}>
              <div className="badge-pill-dark" style={{ marginBottom: 'var(--space-md)' }}>
                <span className="beacon-dot"></span>
                <span className="font-label-caps">Featured Alliance</span>
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

        {/* Impact Artifacts */}
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

