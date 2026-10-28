import React, { useState } from 'react';
import { useRouter } from '../router/RouterContext';

export default function HomeScreen() {
  const { navigate } = useRouter();

  // Frame 4 Interactive Terminal State
  const [activeStep, setActiveStep] = useState(0);
  const timelineSteps = [
    {
      num: '01',
      title: 'Brand Identity',
      desc: 'Memorable identities that set the tone for your online presence. From generative typography systems to bespoke hardware packaging.',
      prompt: 'Confirm sprint parameters // Brand token generation...'
    },
    {
      num: '02',
      title: 'Web Design',
      desc: 'Modern, conversion-focused websites that guide visitors into action with cinematic motion choreography and frictionless navigation.',
      prompt: 'Render spatial web layout with 60FPS WebGL shaders...'
    },
    {
      num: '03',
      title: 'Custom Development',
      desc: 'Platforms, robust APIs, and web applications engineered from scratch for your bespoke business logic and security specifications.',
      prompt: 'Deploy containerized edge cluster with zero runtime hitch...'
    },
    {
      num: '04',
      title: 'Marketing and Video',
      desc: 'Social media architecture, targeted campaign visuals, and cinematic anchor films that scale your brand authority on global feeds.',
      prompt: 'Initiate 4K Unreal Engine render pipeline for broadcast...'
    }
  ];

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      {/* FRAME 1: HERO MONOLITH */}
      <section
        style={{
          position: 'relative',
          padding: 'var(--space-xl) var(--margin) var(--space-2xl)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Pre-title Status Badge */}
        <div className="badge-dispatch" style={{ marginBottom: 'var(--space-lg)' }}>
          <span className="beacon-dot animate-ping-radar"></span>
          <span className="font-label-caps" style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>
            Studio Dispatch // Q3 Deployment Ready
          </span>
        </div>

        {/* Display Title */}
        <h1
          className="font-display-xl"
          style={{
            maxWidth: '1000px',
            marginBottom: 'var(--space-md)',
            color: 'var(--primary)'
          }}
        >
          We design and build brands that stand out
        </h1>

        <p
          className="font-body-lg"
          style={{
            maxWidth: '680px',
            marginBottom: 'var(--space-xl)',
            color: 'var(--outline)'
          }}
        >
          A creative design and development studio crafting high-performance websites, brands and visuals.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-3xl)'
          }}
        >
          <button className="btn btn-primary" onClick={() => navigate('/proposal')}>
            <span>Get A Proposal</span>
          </button>
          <button
            className="btn btn-surface"
            onClick={() => {
              const el = document.getElementById('reviews');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ color: 'var(--accent-coral)', fontSize: '20px', fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span>Our Reviews (4.9/5)</span>
          </button>
        </div>

        {/* Cinematic Hero Monolith Showcase */}
        <div
          className="card-monolith"
          style={{
            width: '100%',
            maxWidth: '1150px',
            borderRadius: 'var(--rounded-xl)',
            padding: 0,
            aspectRatio: '21/9',
            minHeight: '380px'
          }}
        >
          <img
            alt="Hero Monolith Setup"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQSZMT7wprBONKa6GfL-DIiRmRNSlJM071YYVP9EkwZUpdRhwEgpPS4HR48-c_WQiIcXNRtASHUsWUhnKV0P_qaLZXrnbTjknkepro7N5kwuXUDKPPcxQ86WszOEQcLLXqS6cmUMHcTydz80FND4xnZ4YNU8zMMdclGmxcV0_irDFICeNpb6P2n-dr72h49mfxyLcwQdOOGI9RF0z8SwY2_zW3JK8isG5q1jI3BI2O"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
            }}
          ></div>

          {/* Top Left Telemetry Tag */}
          <div
            className="badge-pill-dark"
            style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}
          >
            <span className="beacon-dot animate-pulse-soft"></span>
            <span className="font-label-caps" style={{ color: 'var(--text-inverse)' }}>
              CA-STUDIO // PROTOCOL 4.2
            </span>
          </div>

          {/* Bottom Banner */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              textAlign: 'left'
            }}
          >
            <div>
              <p className="font-label-caps" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>
                Interactive System Architecture
              </p>
              <h2 className="font-headline-sm" style={{ color: 'var(--text-inverse)' }}>
                Next-Gen Audio Synthesis Interface
              </h2>
            </div>
            <div className="badge-pill-dark">
              <span className="font-label-caps">Zero Latency WebGL Engine</span>
              <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)', fontSize: '18px' }}>
                verified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FRAME 2: CLIENT MARQUEE TICKER */}
      <section
        style={{
          width: '100%',
          padding: 'var(--space-md) 0',
          backgroundColor: 'var(--surface-container-low)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)'
        }}
      >
        <div className="marquee-container">
          <div className="marquee-track">
            {['Feline Insights', 'Athreya Ayurveda', 'EduSphereNZ', 'Raj Remanan', 'STARLET 5.0', 'Dhriti', 'Feline Insights', 'Athreya Ayurveda', 'EduSphereNZ', 'Raj Remanan', 'STARLET 5.0', 'Dhriti'].map((client, idx) => (
              <React.Fragment key={idx}>
                <span className="font-label-caps" style={{ fontSize: '12px', letterSpacing: '0.22em', color: 'var(--outline)', fontWeight: 'bold' }}>
                  {client}
                </span>
                <span style={{ color: 'var(--accent-coral)', opacity: 0.6, fontWeight: '900' }}>/</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* FRAME 3: SERVICES MOSAIC */}
      <section id="services" className="section-padding container-max">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <span className="font-label-caps" style={{ color: 'var(--accent-coral)', display: 'block', marginBottom: 'var(--space-xs)' }}>
            Domain Specialization
          </span>
          <h2 className="font-headline-lg">Everything your brand needs</h2>
          <p className="font-body-md" style={{ maxWidth: '600px', margin: 'var(--space-sm) auto 0' }}>
            Multidisciplinary design intelligence seamlessly deployed through code and cinematic aesthetics.
          </p>
        </div>

        {/* 6-Card Mosaic Grid */}
        <div className="grid-12">
          {/* 1. Web Design Card (7 cols) */}
          <div className="col-span-12" style={{ gridColumn: 'span 7' }}>
            <div className="card-cream" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '16/10', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Web Design Card"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZeApz9RVK7Ku2c50KIYq3vRQKzzB6ZIAEhpB1XjJlAjW4bXxp2zWG5IJe2nyMo66ZOtWjS7eXvRaBAX0Tj6fkWqk7hz6Rxe6XzJ5yFK6o_rvZMuaxKhVf7c_icURG4lWYe8hhdRMGtgv2GLFtp22hM7H-HcX7hI4XlH41CM8lEbiXkSyhL_3N1lZ8z5L38Usc-r01x1rphkxs9gsLm9kgn5VVOWvsU8RZ2M7WZh5T"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  <span className="beacon-dot animate-pulse-soft"></span>
                  <span className="font-label-caps">Web Design & Architecture</span>
                </div>
                {/* 78% Processing Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(16px)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--rounded-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)', fontSize: '20px' }}>layers</span>
                    <span className="font-label-caps" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>PROCESSING SYSTEM MIGRATION</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '90px', height: '8px', background: 'var(--surface-container-high)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: '78%', height: '100%', background: 'var(--accent-coral)', borderRadius: '9999px' }}></div>
                    </div>
                    <span className="font-label-caps" style={{ fontWeight: 'bold' }}>78%</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 className="font-headline-sm">Spatial Interfaces & High-Load Web Apps</h3>
                  <p className="font-body-sm" style={{ marginTop: '4px' }}>Built with Next.js, WebGL shaders, and ultra-responsive micro-animations.</p>
                </div>
                <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)' }}>arrow_forward</span>
              </div>
            </div>
          </div>

          {/* 2 & 3. Column (5 cols) */}
          <div className="col-span-12" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {/* WordPress CMS */}
            <div className="card-cream">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-coral-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-coral)' }}>
                    <span className="material-symbols-outlined">sync</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm" style={{ fontSize: '18px' }}>Auto-Sync / Connected</h4>
                    <p className="font-label-caps">Enterprise CMS Infrastructure</p>
                  </div>
                </div>
                <span className="beacon-dot animate-ping-radar"></span>
              </div>
              <div style={{ background: 'var(--surface)', padding: '12px 16px', borderRadius: 'var(--rounded-DEFAULT)', marginBottom: 'var(--space-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span className="font-label-caps">Database Integrity</span>
                  <span className="font-label-caps" style={{ fontWeight: 'bold' }}>99.98%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--surface-container-high)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ width: '99.98%', height: '100%', background: 'var(--accent-coral)' }}></div>
                </div>
              </div>
              <p className="font-body-sm">Custom headless WordPress backends engineered with enterprise speed, automated edge caching, and rock-solid publishing ergonomics.</p>
            </div>

            {/* Brand Monolith Card */}
            <div className="card-monolith">
              <div style={{ aspectRatio: '16/9', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Brand Architecture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOXzw0IFD6JQ7qf4lVmY3ychaxDhs811nNr0d2vT-UfWnbSzWEQIxr9DLE5-8kc-jrN10z4ZC0S1NBES_98rCLes0DY6xac7N2OUX4-GGl8N7V_yHP_G6XchFQlInxwopm7PJdp2ZX3a27h5y-uVPRHPisxa3fiSFXfEd7noVhnoC-_9e2oeF_3Lbi50feaYMY6QsChaxaDk1PysWxxKIBMBcDGumj14KhScPshVYK"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <span className="font-label-caps">Brand Identity</span>
                </div>
              </div>
              <h3 className="font-headline-sm" style={{ color: 'var(--text-inverse)' }}>Radical Brand Architecture</h3>
              <p className="font-body-sm" style={{ color: 'var(--on-primary-container)', marginTop: '4px' }}>
                Design languages built to assert presence and withstand market commoditization.
              </p>
            </div>
          </div>

          {/* 4. Graphic & Packaging (4 cols) */}
          <div className="col-span-12" style={{ gridColumn: 'span 4' }}>
            <div className="card-cream" style={{ height: '100%' }}>
              <div style={{ aspectRatio: '1/1', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Packaging"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOZBRpIWZtBQJPcvrkQFlZ3LAVfL-s6TELWDuGRYMD5ICoEcFgmGh2KyUuBr-U87vEl_O7KnLoMcgoyV4cmNQDlgbm7YhWCI4l0AdgfYvLNNOL8leOrYe6CTaL3iIa9EslbC9_OdPYK30WXXM3RxKEi9R9ba3n1692i9uIpZg9jfhykDyM68fA7aRWTWrNMKta8Hp6sja7RCrqJLN6grU2i4sHOxoqj2cF7Tkh7nZi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-dispatch" style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(250,249,245,0.9)' }}>
                  <span className="font-label-caps">Graphic & Packaging</span>
                </div>
              </div>
              <h3 className="font-headline-sm">Packaging & Tactile Collateral</h3>
              <p className="font-body-sm" style={{ marginTop: '4px' }}>Material selection, unboxing experiences, and sculptural design.</p>
            </div>
          </div>

          {/* 5. Video Production (4 cols) */}
          <div className="col-span-12" style={{ gridColumn: 'span 4' }}>
            <div className="card-cream" style={{ height: '100%' }}>
              <div style={{ aspectRatio: '1/1', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Video Suite"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN9PpB06o4qEW4Uhwohk0RNf7otbYGcmWY91HNW_QRema_F3kD0ao9RIB4ZevFXpDB2b_LQeo6cjJhHm48L4xvLQybF9RLPOaDqy24VuxxNIkN5NDJCFfh6WpOnCCOqG-GE7-kFuAIfeJaJ3a0PAnwWAfkhDyTqacMin-SkFZYr0oa8eOTgWG6Np3PhCK-ZJGrikQJZBfAywIE6gsrin66DPj7G1qRPm9s5wPnb8pN"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <span className="beacon-dot"></span>
                  <span className="font-label-caps">Video Production</span>
                </div>
                <div className="badge-pill-dark" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <span className="font-label-caps">REC // 00:04:28:12</span>
                </div>
              </div>
              <h3 className="font-headline-sm">Cinematic 3D & Brand Films</h3>
              <p className="font-body-sm" style={{ marginTop: '4px' }}>Immersive product unveilings, hyper-real CGI animations, and launch reels.</p>
            </div>
          </div>

          {/* 6. Social Media & Growth (4 cols) */}
          <div className="col-span-12" style={{ gridColumn: 'span 4' }}>
            <div className="card-cream" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--surface-container-high)' }}>
              <div>
                <div className="badge-dispatch" style={{ background: 'var(--surface)', marginBottom: 'var(--space-md)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)', fontSize: '18px' }}>campaign</span>
                  <span className="font-label-caps">Social Growth Engine</span>
                </div>
                <h3 className="font-headline-sm">Data-Backed Organic Reach</h3>
                <p className="font-body-sm" style={{ marginTop: '4px' }}>High-velocity social creative suites that convert casual scrollers into loyal customers.</p>
              </div>

              {/* Chat Bubble Snippet */}
              <div style={{ background: 'var(--surface)', padding: 'var(--space-md)', borderRadius: 'var(--rounded-DEFAULT)', marginTop: 'var(--space-md)', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold' }}>
                    CA
                  </div>
                  <div>
                    <p className="font-label-caps" style={{ fontWeight: 'bold' }}>Apex Labs Partner</p>
                    <p className="font-body-sm" style={{ fontSize: '11px', color: 'var(--outline)' }}>Live Transmit</p>
                  </div>
                </div>
                <p className="font-body-sm" style={{ fontStyle: 'italic' }}>
                  "This looks amazing! The engagement velocity spiked 340% within 48 hours of rollout."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-coral)', marginTop: '8px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                  <span className="font-label-caps">Verified Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAME 4: SYSTEM METHODOLOGY TIMELINE */}
      <section style={{ backgroundColor: 'var(--surface-container-low)', padding: 'var(--space-3xl) var(--margin)' }}>
        <div className="container-max grid-12" style={{ alignItems: 'center' }}>
          {/* Left Column: Interactive Timeline */}
          <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
              System Methodology
            </span>
            <h2 className="font-headline-lg" style={{ marginTop: '8px', marginBottom: 'var(--space-xl)' }}>
              Design that converts.<br />Code that scales.
            </h2>

            <div style={{ position: 'relative', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: 'var(--outline-variant)' }}></div>

              {timelineSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                      opacity: isActive ? 1 : 0.55,
                      transition: 'opacity var(--transition-fast)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: '-28px',
                        top: '4px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: isActive ? 'var(--accent-coral)' : 'var(--outline)',
                        boxShadow: isActive ? '0 0 0 4px var(--accent-coral-dim)' : 'none'
                      }}
                    ></div>
                    <h3 className="font-headline-sm" style={{ color: isActive ? 'var(--primary)' : 'var(--outline)' }}>
                      {step.num}. {step.title}
                    </h3>
                    <p className="font-body-md" style={{ marginTop: '4px' }}>
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Studio Terminal Direct Input Simulation */}
          <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
            <div
              style={{
                backgroundColor: 'rgba(226, 227, 223, 0.5)',
                borderRadius: 'var(--rounded-xl)',
                padding: 'var(--space-xl)',
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '4/3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '280px',
                  height: '280px',
                  borderRadius: '50%',
                  background: 'var(--accent-coral-glow)',
                  filter: 'blur(70px)',
                  top: '-40px',
                  right: '-40px'
                }}
              ></div>

              <div
                style={{
                  width: '100%',
                  maxWidth: '440px',
                  backgroundColor: 'var(--surface-container-lowest)',
                  borderRadius: 'var(--rounded-lg)',
                  padding: 'var(--space-lg)',
                  boxShadow: 'var(--shadow-card)',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="beacon-dot"></span>
                    <span className="font-label-caps" style={{ fontWeight: 'bold' }}>Studio Terminal Direct</span>
                  </div>
                  <span className="font-label-caps" style={{ color: 'var(--outline)' }}>SYNC: 100%</span>
                </div>
                <p className="font-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: '16px' }}>
                  "Initiating sprint. Brand tokens, 3D asset pipeline, and responsive architecture models assembled and ready for review."
                </p>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input
                    type="text"
                    readOnly
                    value={timelineSteps[activeStep].prompt}
                    style={{
                      width: '100%',
                      backgroundColor: 'var(--surface-container-low)',
                      borderRadius: 'var(--rounded-full)',
                      padding: '12px 48px 12px 16px',
                      fontSize: '13px',
                      color: 'var(--primary)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  />
                  <button
                    aria-label="Dispatch"
                    style={{
                      position: 'absolute',
                      right: '6px',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-coral)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      cursor: 'pointer'
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAME 5: DESIGN WITH PURPOSE (DARK MONOLITH) */}
      <section className="section-padding container-max">
        <div
          className="card-monolith"
          style={{
            padding: 'var(--space-3xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)'
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-80px',
              bottom: '-80px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-coral-glow)',
              filter: 'blur(100px)',
              pointerEvents: 'none'
            }}
          ></div>

          <div className="grid-12" style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <div className="col-span-12" style={{ gridColumn: 'span 7' }}>
              <div className="badge-pill-dark" style={{ marginBottom: 'var(--space-md)' }}>
                <span className="beacon-dot"></span>
                <span className="font-label-caps" style={{ color: 'var(--secondary-fixed)' }}>Design With Purpose</span>
              </div>
              <h2 className="font-headline-lg" style={{ color: 'var(--text-inverse)', marginBottom: 'var(--space-md)' }}>
                Every project supports a mission.
              </h2>
              <p className="font-body-lg" style={{ color: 'var(--tertiary-fixed)', maxWidth: '580px', marginBottom: 'var(--space-xl)' }}>
                Cyber Aliens partners with <strong style={{ color: '#fff' }}>Mind Empowered</strong>, an international youth wellness non-profit. A designated portion of all studio revenue directly funds digital literacy, mental health initiatives, and community mentorship programs worldwide.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                <button className="btn btn-ghost-dark" onClick={() => navigate('/impact')}>
                  <span>Meet Our Partner</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>north_east</span>
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/impact')}>
                  <span>See The Impact</span>
                </button>
              </div>
            </div>

            <div className="col-span-12" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', padding: 'var(--space-lg)', borderRadius: 'var(--rounded-lg)', border: '1px solid var(--border-glass)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
                  <span className="font-label-caps" style={{ color: 'var(--accent-coral)' }}>Mind Empowered Initiative</span>
                  <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)' }}>volunteer_activism</span>
                </div>
                <div className="font-display-xl" style={{ fontSize: '56px', lineHeight: '60px', color: 'var(--text-inverse)' }}>
                  100%
                </div>
                <p className="font-body-sm" style={{ color: 'var(--tertiary-fixed)', marginTop: '4px' }}>
                  Of partner-built open initiative projects reinvested directly into grassroots youth tech workshops.
                </p>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', padding: 'var(--space-md) var(--space-lg)', borderRadius: 'var(--rounded-lg)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)', fontSize: '24px' }}>public</span>
                  <div>
                    <p className="font-label-md" style={{ color: '#fff', fontWeight: 'bold' }}>Global Impact Metric</p>
                    <p className="font-body-sm" style={{ color: 'var(--tertiary-fixed)', fontSize: '12px' }}>1,400+ Students Mentored to Date</p>
                  </div>
                </div>
                <span className="material-symbols-outlined" style={{ color: 'var(--tertiary-fixed)' }}>arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAME 6: PORTFOLIO ARCHIVE (BENTO GRID) */}
      <section className="section-padding container-max">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-2xl)' }}>
          <div>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)', display: 'block', marginBottom: 'var(--space-xs)' }}>
              Portfolio Archive
            </span>
            <h2 className="font-headline-lg">Selected work</h2>
          </div>
          <button className="btn btn-surface btn-sm" onClick={() => navigate('/work')}>
            <span>View All Work</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </button>
        </div>

        <div className="grid-12">
          {/* 1. Project Obsidian (7 cols) */}
          <div className="col-span-12" style={{ gridColumn: 'span 7' }}>
            <div className="card-cream" style={{ height: '100%', cursor: 'pointer' }} onClick={() => navigate('/case-study')}>
              <div style={{ aspectRatio: '16/10', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Project Obsidian"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb1-rmIu1TWa9ZYZen4xWDh5eEnVmjNR2K0NQhvIDGkcOsT8-XZ4g81FJMPm78DJFsO6psrFsXdee7_TVANm2dbBvv8H21anMbOa4RUVwI-i4XX9X3Q3jk6_0uG7PRrz0jGsOeOfku2NP-EVin59LyPZRa1sxTyK32OaL2EBDsIdSO0_pjq7Ok824noXxyom09SAd3rHlo2toy6tnAucRJaAXNpC_n7SRNsz-kRl2W"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="font-label-caps">Web Design // Next.js</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="font-headline-sm">Project Obsidian</h3>
                  <p className="font-body-sm" style={{ marginTop: '4px' }}>Decentralized cloud network protocol and real-time interaction telemetry console.</p>
                </div>
                <span className="font-label-caps" style={{ color: 'var(--outline)' }}>2025</span>
              </div>
            </div>
          </div>

          {/* 2. Neo-Kinetic Studio (5 cols) */}
          <div className="col-span-12" style={{ gridColumn: 'span 5' }}>
            <div className="card-cream" style={{ height: '100%', cursor: 'pointer' }} onClick={() => navigate('/work')}>
              <div style={{ aspectRatio: '16/10', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Neo-Kinetic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI1ZssrpnnHUs3u90lSbqaC-3noLyElTmc0tNKi1BFqYmt9gLnDa2ow8kIVrveQvlaUG48sD8tMIDdNtZ4CPMfxwdmxY5pzKNieriLt5NM1eez8B7Wwtx1b0uye4KlyLaZwB_i9XLAtyA25tzbTtId5fO3VmJIjIlVGNpu6HCEEkuKz1lT9qJ0AoDiMf0SywR6_sshuWEPcfJ5IItYd3wxPkBv4cXV6Wh9zycOO6eQ"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="font-label-caps">WordPress // E-Commerce</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="font-headline-sm">Neo-Kinetic Studio</h3>
                  <p className="font-body-sm" style={{ marginTop: '4px' }}>Precision audio hardware configurator & global digital store.</p>
                </div>
                <span className="font-label-caps" style={{ color: 'var(--outline)' }}>2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAME 7: PROCESS (5-STEP WORKFLOW) */}
      <section id="process" style={{ backgroundColor: 'var(--surface-container-low)', padding: 'var(--space-3xl) var(--margin)' }}>
        <div className="container-max">
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)', display: 'block', marginBottom: 'var(--space-xs)' }}>
              Studio Workflow
            </span>
            <h2 className="font-headline-lg">How we work</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
            {[
              { num: '01', title: 'Kickoff Meeting', desc: 'Aligning strategic objectives, technological requirements, and commercial goals.' },
              { num: '02', title: 'Discovery & Wireframes', desc: 'Information architecture mapping, high-fidelity UX flows, and interactive mockups.' },
              { num: '03', title: 'Design', desc: 'Precision visual craft, art direction, 3D typography, and custom design systems.', active: true },
              { num: '04', title: 'Build', desc: 'Production code engineering, animation pipelines, API integration, and CMS wiring.' },
              { num: '05', title: 'Delivery & Support', desc: 'Performance hardening, global CDN deployment, documentation handoff, and iteration.' }
            ].map((step) => (
              <div
                key={step.num}
                style={{
                  background: 'var(--surface)',
                  padding: 'var(--space-lg)',
                  borderRadius: 'var(--rounded-DEFAULT)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: step.active ? 'var(--shadow-card)' : 'var(--shadow-subtle)',
                  border: step.active ? '2px solid var(--accent-coral)' : '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <span className="font-headline-sm" style={{ color: step.active ? 'var(--accent-coral)' : 'var(--outline-variant)', display: 'block', marginBottom: 'var(--space-md)' }}>
                    {step.num}
                  </span>
                  <h3 className="font-headline-sm" style={{ fontSize: '18px', marginBottom: '6px' }}>{step.title}</h3>
                  <p className="font-body-sm">{step.desc}</p>
                </div>
                <div style={{ width: '100%', height: '4px', background: step.active ? 'var(--accent-coral)' : 'var(--surface-container)', marginTop: 'var(--space-lg)', borderRadius: '9999px' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAME 8: AIRY LUXURY TESTIMONIAL */}
      <section id="reviews" className="section-padding container-max" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-coral-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-coral)', marginBottom: 'var(--space-xl)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>format_quote</span>
        </div>
        <blockquote className="font-headline-md" style={{ maxWidth: '850px', marginBottom: 'var(--space-2xl)', fontWeight: 400, lineHeight: 1.25 }}>
          “Cyber Aliens took our complex technical architecture and turned it into an unforgettable digital experience. The precision in both design and code is unmatched.”
        </blockquote>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold', marginBottom: '6px' }}>
            SJ
          </div>
          <h3 className="font-headline-sm" style={{ fontSize: '20px' }}>Sarah Jenkins</h3>
          <p className="font-body-sm">Head of Brand & Product, Monad Systems</p>
          <div className="badge-dispatch" style={{ marginTop: '8px' }}>
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="material-symbols-outlined" style={{ color: 'var(--accent-coral)', fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            ))}
            <span className="font-label-caps" style={{ fontWeight: 'bold', marginLeft: '4px' }}>5.0 RATING</span>
          </div>
        </div>
      </section>

      {/* FRAME 9: STUDIO INSIGHTS */}
      <section id="insights" className="section-padding container-max">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-2xl)' }}>
          <div>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)', display: 'block', marginBottom: 'var(--space-xs)' }}>
              Studio Journals
            </span>
            <h2 className="font-headline-lg">Latest insights</h2>
          </div>
        </div>

        <div className="grid-12">
          {[
            {
              cat: 'Engineering // 6 min read',
              date: 'OCTOBER 14, 2025 • DEV LOG #42',
              title: 'Engineering Real-time 3D Experiences in the Browser',
              author: 'ALEXEI VOLKOV',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIoVZWj2_OmRz9RCNAQM5oE5FxYkpJ4bUm5QCUH2rnNwa1VeNUKwZsH1Odnm5-XvFkJ1x-O4GbffqfIRAOHvZv1Q9D6zjaP6JMtcUGaGkRChkGzOep_-Coqn8bmxuRPZ4FovRwnjmxlRR3AR3jF0eV16ian1PoATi8ArCbRpaRivoyRlC-p1HJgWZC2jYmB9blxcEuYshGZTSGT-D7blxjkk9k5f0_qqBfUxPLkz_L'
            },
            {
              cat: 'Design // 4 min read',
              date: 'OCTOBER 02, 2025 • CRITIQUE',
              title: 'The Death of Generic Flat Design: The Age of Tactile Hardware Interfaces',
              author: 'MIRA CHEN',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFr9GvrFlPWkGItysNdBEcIcsf8J6kULqGj5vcUFZrqSK2d1HRgGM2Hu0dS7cwsUSHOp9QeXcyWpvOTYS53BbvqJA3hdvMPdZTF3t9NkvUB0peUxOxvYqHZQTLIVa5hy1iu_IHBmNKoVBCBzBYGCVqYz8m46WxZJSNv1_TT5tBbA62z9e5zJueCp_m4IG-pDMAiCJaO0J1MaQu1in7SWdQduHA-Iv-wCz0JLiXLv2M'
            },
            {
              cat: 'Impact // 5 min read',
              date: 'SEPTEMBER 21, 2025 • INITIATIVE',
              title: 'How Mind Empowered is Reshaping Tech Philanthropy',
              author: 'KAVIN REDDY',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB6xzlvgFUoBl11JupyYIM-QoQwaFah-Ur1sJtotuhPKJKsn3KCLvLtzcsFh0z8bzfYYWlWShb1opIgl_1NQaQoUlodk-mgFWiO4Gdm6R9yl07jklBMb05VQGiSvZgPetbPyx85k6tRuIblZkBnyoPv3tiqglohAN2xdVop5cCrcPsVD9ci8O7TWok4v0k8SPoid5oZS6HEGisgljrWguLBlYS1q7BNNYtbV_dwPpn'
            }
          ].map((post, i) => (
            <div key={i} className="col-span-12" style={{ gridColumn: 'span 4' }}>
              <div className="card-cream" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/10', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="badge-pill-dark" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span className="font-label-caps">{post.cat}</span>
                  </div>
                </div>
                <span className="font-label-caps" style={{ color: 'var(--outline)', marginBottom: '6px' }}>{post.date}</span>
                <h3 className="font-headline-sm" style={{ fontSize: '18px', lineHeight: 1.3, marginBottom: 'var(--space-md)' }}>{post.title}</h3>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-label-caps" style={{ fontWeight: 'bold' }}>{post.author}</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FRAME 10: TRANSMISSION MONOLITH CTA */}
      <section className="container-max" style={{ padding: '0 var(--margin) var(--space-3xl)' }}>
        <div
          className="card-monolith"
          style={{
            padding: 'var(--space-3xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              left: '-80px',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-coral-glow)',
              filter: 'blur(100px)',
              pointerEvents: 'none'
            }}
          ></div>

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px' }}>
            <div className="badge-pill-dark" style={{ marginBottom: 'var(--space-md)' }}>
              <span className="beacon-dot animate-ping-radar"></span>
              <span className="font-label-caps">Initiate Transmission</span>
            </div>
            <h2 className="font-headline-lg" style={{ color: 'var(--text-inverse)', marginBottom: 'var(--space-md)' }}>
              Interested in working together?
            </h2>
            <p className="font-body-lg" style={{ color: 'var(--tertiary-fixed)', marginBottom: 'var(--space-xl)' }}>
              Share your requirements and let's bring your project to life with radical precision and relentless craft.
            </p>
            <button className="btn btn-secondary" onClick={() => navigate('/proposal')}>
              <span>Get A Proposal</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

