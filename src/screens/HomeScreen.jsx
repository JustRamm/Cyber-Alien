
import React, { useState, useRef } from 'react';
import { useRouter } from '../router/RouterContext';
import TiltCard from '../components/common/TiltCard';

export default function HomeScreen() {
  const { navigate } = useRouter();

  // Mobile Services Horizontal Carousel State
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const servicesTrackRef = useRef(null);

  const handleServicesScroll = (e) => {
    const track = e.currentTarget;
    const scrollLeft = track.scrollLeft;
    const items = track.querySelectorAll('.services-card-item');
    if (!items || items.length === 0) return;
    const cardWidth = items[0].offsetWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const slideIndex = Math.min(items.length - 1, Math.max(0, Math.round(scrollLeft / step)));
    setActiveServiceSlide(slideIndex);
  };

  const scrollToServiceSlide = (index) => {
    if (!servicesTrackRef.current) return;
    const track = servicesTrackRef.current;
    const items = track.querySelectorAll('.services-card-item');
    if (items[index]) {
      items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActiveServiceSlide(index);
    }
  };

  // Mobile Three Partners Carousel State
  const [activePartnerSlide, setActivePartnerSlide] = useState(0);
  const partnersTrackRef = useRef(null);

  const handlePartnersScroll = (e) => {
    const track = e.currentTarget;
    const scrollLeft = track.scrollLeft;
    const items = track.querySelectorAll('.partner-card-item');
    if (!items || items.length === 0) return;
    const cardWidth = items[0].offsetWidth;
    const gap = 16;
    const step = cardWidth + gap;
    const slideIndex = Math.min(items.length - 1, Math.max(0, Math.round(scrollLeft / step)));
    setActivePartnerSlide(slideIndex);
  };

  const scrollToPartnerSlide = (index) => {
    if (!partnersTrackRef.current) return;
    const track = partnersTrackRef.current;
    const items = track.querySelectorAll('.partner-card-item');
    if (items[index]) {
      items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setActivePartnerSlide(index);
    }
  };


  // Frame 4 Interactive Terminal State
  const [activeStep, setActiveStep] = useState(0);
  const timelineSteps = [
    {
      num: '01',
      title: 'Brand Identity',
      desc: 'Memorable brand identities that set the tone for your online presence, build trust, and tell your unique story.',
      prompt: 'Drafting brand guidelines, typography system, and vector logo assets...'
    },
    {
      num: '02',
      title: 'Web Design',
      desc: 'Modern, conversion-focused websites that turn your traffic into customers and become your primary sales tool.',
      prompt: 'Assembling responsive page layouts, mobile navigation, and user journeys...'
    },
    {
      num: '03',
      title: 'Custom & WordPress Development',
      desc: 'Fast, secure, SEO-friendly WordPress builds and custom platforms engineered to meet your exact business needs.',
      prompt: 'Developing approved designs into clean, fast, and SEO-optimized code...'
    },
    {
      num: '04',
      title: 'Marketing, Games & Video',
      desc: 'High-engagement social media creatives, on-camera anchor videos, and interactive educational mini-games.',
      prompt: 'Finalizing social media campaign creatives, video masters, and interactive game modules...'
    }
  ];

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      {/* FRAME 1: HERO MONOLITH */}
      <section
        className="section-padding container-max"
        style={{
          position: 'relative',
          paddingTop: 'var(--space-xl)',
          paddingBottom: 'var(--space-2xl)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Display Title */}
        <h1
          className="font-display-xl"
          style={{
            maxWidth: '1240px',
            marginBottom: 'var(--space-md)',
            color: 'var(--primary)'
          }}
        >
          We design and build brands that stand out
        </h1>

        <p
          className="font-body-lg"
          style={{
            maxWidth: '720px',
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
        </div>

        {/* Cinematic Hero Monolith Showcase (Expands Wide across 1536px canvas) */}
        <TiltCard
          className="card-monolith hero-monolith-card zoomable-image"
          data-cursor="zoom"
          maxTilt={3.5}
          scale={1.008}
          isDark={true}
          style={{
            width: '100%',
            maxWidth: '100%',
            borderRadius: 'var(--rounded-xl)',
            padding: 0,
            aspectRatio: '21/9',
            minHeight: '400px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            alt="Hero Monolith Setup"
            src="/images/hero-monolith.jpg"
            data-cursor="zoom"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </TiltCard>
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
            {Array.from({ length: 16 }).map((_, idx) => (
              <React.Fragment key={idx}>
                <span className="font-label-caps" style={{ fontSize: '12px', letterSpacing: '0.24em', color: 'var(--outline)', fontWeight: 'bold' }}>
                  CYBER ALIEN
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
          <span className="font-label-caps reveal-fade" style={{ color: 'var(--accent-coral)', display: 'block', marginBottom: 'var(--space-xs)' }}>
            WHAT WE OFFER AT CYBER ALIENS
          </span>
          <h2 className="font-headline-lg reveal-headline">Our solutions that elevate your brand</h2>
          <p className="font-body-md reveal-fade" style={{ maxWidth: '640px', margin: 'var(--space-sm) auto 0' }}>
            We offer high quality design and development services tailored to your needs.
          </p>
        </div>

        {/* 6-Card Mosaic Grid (Horizontal Swipeable Carousel on Mobile) */}
        <div
          ref={servicesTrackRef}
          onScroll={handleServicesScroll}
          className="services-mosaic-grid grid-12 reveal-stagger"
        >
          {/* 1. Web Design Card (7 cols on desktop, slide 1 on mobile) */}
          <div className="services-card-item col-span-12 reveal-card" style={{ gridColumn: 'span 7' }}>
            <TiltCard
              className="card-cream"
              maxTilt={4.5}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <div className="services-card-img-wrap" style={{ aspectRatio: '16/10', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Web Design"
                  src="/images/services-web.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  <span className="beacon-dot animate-pulse-soft"></span>
                  <span className="font-label-caps">Web Design</span>
                </div>
                {/* 100% Performance Pill */}
                <div
                  className="services-perf-pill"
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    padding: '0.75rem 1.25rem',
                    borderRadius: 'var(--rounded-full)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)', fontSize: '20px' }}>language</span>
                    <span className="font-label-caps" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>CONVERSION-FOCUSED WEB ARCHITECTURE</span>
                  </div>
                  <div className="performance-pill-bar" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '90px', height: '8px', background: 'var(--surface-container-high)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: '100%', height: '100%', background: 'var(--accent-coral)', borderRadius: '9999px' }}></div>
                    </div>
                    <span className="font-label-caps" style={{ fontWeight: 'bold' }}>100%</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <div>
                  <h3 className="font-headline-sm">Your website will become your best sales tool</h3>
                  <p className="font-body-sm" style={{ marginTop: '4px' }}>We design modern, conversion-focused websites that guide visitors into taking action.</p>
                </div>
                <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)' }}>arrow_forward</span>
              </div>
            </TiltCard>
          </div>

          {/* 2 & 3. Column (WordPress & Branding) */}
          <div className="services-cards-subgroup col-span-12 reveal-card" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {/* 2. WordPress CMS */}
            <div className="services-card-item services-subcard">
              <TiltCard
                className="card-cream"
                maxTilt={5}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-coral-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-coral)' }}>
                        <span className="material-symbols-outlined">sync</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm" style={{ fontSize: '18px' }}>WordPress Development</h4>
                        <p className="font-label-caps">Modern &amp; Professional Website</p>
                      </div>
                    </div>
                    <span className="beacon-dot animate-ping-radar"></span>
                  </div>
                  <div style={{ background: 'var(--surface)', padding: '12px 16px', borderRadius: 'var(--rounded-DEFAULT)', marginBottom: 'var(--space-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span className="font-label-caps">Fast, Secure &amp; SEO-Optimized</span>
                      <span className="font-label-caps" style={{ fontWeight: 'bold' }}>100% Ready</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'var(--surface-container-high)', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: '100%', height: '100%', background: 'var(--accent-coral)' }}></div>
                    </div>
                  </div>
                </div>
                <p className="font-body-sm" style={{ marginTop: 'auto' }}>We turn your approved designs into a fast, secure, SEO-friendly WordPress website that is effortless to update.</p>
              </TiltCard>
            </div>

            {/* 3. Brand Monolith Card */}
            <div className="services-card-item services-subcard">
              <TiltCard
                className="card-monolith"
                maxTilt={5}
                isDark={true}
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div className="services-card-img-wrap" style={{ aspectRatio: '16/9', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                  <img
                    alt="Branding and Identity"
                    src="/images/services-brand.jpg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="badge-pill-dark" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    <span className="font-label-caps">Branding</span>
                  </div>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <h3 className="font-headline-sm" style={{ color: 'var(--text-inverse)' }}>Bring your brand story to life in your website</h3>
                  <p className="font-body-sm" style={{ color: 'var(--on-primary-container)', marginTop: '4px' }}>
                    We create brand identities that make your business memorable and set the tone for your online presence.
                  </p>
                </div>
              </TiltCard>
            </div>
          </div>

          {/* 4. Graphic Design Card */}
          <div className="services-card-item col-span-12 reveal-card" style={{ gridColumn: 'span 4' }}>
            <TiltCard
              className="card-cream"
              maxTilt={5.5}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <div className="services-card-img-wrap" style={{ aspectRatio: '1/1', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Graphic Design"
                  src="/images/services-packaging.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-dispatch" style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(250,249,245,0.9)' }}>
                  <span className="font-label-caps">Graphic Design</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <h3 className="font-headline-sm">Your dedicated graphic design support team</h3>
                <p className="font-body-sm" style={{ marginTop: '4px' }}>Posters, flyers, banners, social media graphics — we create everything you need, whenever you need it.</p>
              </div>
            </TiltCard>
          </div>

          {/* 5. Anchor Video Production Card */}
          <div className="services-card-item col-span-12 reveal-card" style={{ gridColumn: 'span 4' }}>
            <TiltCard
              className="card-cream"
              maxTilt={5.5}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <div className="services-card-img-wrap" style={{ aspectRatio: '1/1', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Anchor Video Production"
                  src="/images/services-video.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                  <span className="beacon-dot"></span>
                  <span className="font-label-caps">Anchor Video Production</span>
                </div>
                <div className="badge-pill-dark" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <span className="font-label-caps">STUDIO HD // ON-CAMERA</span>
                </div>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <h3 className="font-headline-sm">Create powerful, on-camera anchor videos</h3>
                <p className="font-body-sm" style={{ marginTop: '4px' }}>From scripting to editing, we handle everything to deliver clean, engaging videos optimized for social media and ads.</p>
              </div>
            </TiltCard>
          </div>

          {/* 6. Social Media & Interactive Card */}
          <div className="services-card-item col-span-12 reveal-card" style={{ gridColumn: 'span 4' }}>
            <TiltCard
              className="card-cream"
              maxTilt={5.5}
              style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: 'var(--surface-container-high)' }}
            >
              <div>
                <div className="badge-dispatch" style={{ background: 'var(--surface)', marginBottom: 'var(--space-md)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--accent-coral)', fontSize: '18px' }}>campaign</span>
                  <span className="font-label-caps">Social Media &amp; Interactive</span>
                </div>
                <h3 className="font-headline-sm">Social media marketing that grows your business</h3>
                <p className="font-body-sm" style={{ marginTop: '4px' }}>We manage your social media content and ads to help you reach more people and drive business growth, plus custom web applications and interactive games.</p>
              </div>

              {/* Verified Partnership Callout */}
              <div style={{ background: 'var(--surface)', padding: 'var(--space-md)', borderRadius: 'var(--rounded-DEFAULT)', marginTop: 'var(--space-md)', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <img
                    alt="Mind Empowered Logo"
                    src="/brand/mind-empowered.png"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      objectFit: 'contain',
                      background: '#FFFFFF',
                      padding: '2px',
                      border: '1px solid var(--border-subtle)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <p className="font-label-caps" style={{ fontWeight: 'bold' }}>Mind Empowered Partner</p>
                    <p className="font-body-sm" style={{ fontSize: '11px', color: 'var(--outline)' }}>Verified Collaboration</p>
                  </div>
                </div>
                <p className="font-body-sm" style={{ fontStyle: 'italic' }}>
                  &ldquo;Through this collaboration, we deliver high-quality digital solutions and interactive web platforms that drive real impact.&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-coral)', marginTop: '8px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                  <span className="font-label-caps">Verified Development Partnership</span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Mobile Swipe Pagination & Dot Tracker */}
        <div className="services-mobile-pagination">
          <div className="services-mobile-swipe-hint">
            <span className="material-symbols-outlined animate-pulse-soft" style={{ fontSize: '16px', color: 'var(--accent-coral)' }}>swipe</span>
            <span className="font-label-caps" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
              Swipe to explore ({activeServiceSlide + 1} of 6)
            </span>
          </div>
          <div className="services-mobile-dots">
            {[0, 1, 2, 3, 4, 5].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToServiceSlide(idx)}
                className={`services-dot ${activeServiceSlide === idx ? 'active' : ''}`}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FRAME 4: SYSTEM METHODOLOGY TIMELINE */}
      <section className="section-padding" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <div className="container-max grid-12" style={{ alignItems: 'center' }}>
          {/* Left Column: Interactive Timeline */}
          <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
            <span className="font-label-caps reveal-fade" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
              System Methodology
            </span>
            <h2 className="font-headline-lg reveal-headline" style={{ marginTop: '8px', marginBottom: 'var(--space-xl)' }}>
              Design that converts.<br />Code that scales.
            </h2>

            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {/* Vertical timeline line passing through the exact mathematical center of dots */}
              <div
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '12px',
                  bottom: '24px',
                  width: '2px',
                  background: 'var(--outline-variant)',
                  transform: 'translateX(-50%)',
                  zIndex: 0
                }}
              ></div>

              {timelineSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      cursor: 'pointer',
                      opacity: isActive ? 1 : 0.55,
                      transition: 'opacity var(--transition-fast)',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {/* Fixed 32px column for dot to guarantee exact 16px center alignment with vertical line */}
                    <div
                      style={{
                        width: '32px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? 'var(--accent-coral)' : 'var(--outline)',
                          boxShadow: isActive ? '0 0 0 4px var(--accent-coral-dim)' : 'none',
                          transition: 'all var(--transition-fast)'
                        }}
                      ></div>
                    </div>

                    <div>
                      <h3 className="font-headline-sm" style={{ color: isActive ? 'var(--primary)' : 'var(--outline)' }}>
                        {step.num}. {step.title}
                      </h3>
                      <p className="font-body-md" style={{ marginTop: '4px' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Studio Terminal Direct Input Simulation */}
          <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
            <div
              className="studio-terminal-frame"
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'var(--space-md)', flexWrap: 'wrap' }}>
                <div className="badge-pill-dark" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid var(--border-glass)', padding: '6px 14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <img
                    alt="Mind Empowered"
                    src="/brand/mind-empowered.png"
                    style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'contain', background: '#FFFFFF', padding: '1px' }}
                  />
                  <span className="font-label-caps" style={{ color: '#FFFFFF' }}>Our Development Partnership</span>
                  <span className="beacon-dot animate-ping-radar" style={{ width: '6px', height: '6px', marginLeft: '4px' }}></span>
                </div>
              </div>
              <h2 className="font-headline-lg" style={{ color: 'var(--text-inverse)', marginBottom: 'var(--space-md)' }}>
                Cyber Aliens × Mind Empowered
              </h2>
              <p className="font-body-lg" style={{ color: 'var(--tertiary-fixed)', maxWidth: '580px', marginBottom: 'var(--space-xl)', lineHeight: 1.6 }}>
                Cyber Aliens works in partnership with <strong style={{ color: '#fff' }}>Mind Empowered</strong>, a non-profit organization. Through this collaboration, we deliver high-quality digital solutions while generating sustainable revenue to support the NGO’s mission. The projects include work completed by both Cyber Aliens and Mind Empowered.
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

            <div className="partnership-metrics-col col-span-12" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', padding: 'var(--space-lg)', borderRadius: 'var(--rounded-lg)', border: '1px solid var(--border-glass)' }}>
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

              <div style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', padding: 'var(--space-md) var(--space-lg)', borderRadius: 'var(--rounded-lg)', border: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            <span className="font-label-caps reveal-fade" style={{ color: 'var(--accent-coral)', display: 'block', marginBottom: 'var(--space-xs)' }}>
              Portfolio Archive
            </span>
            <h2 className="font-headline-lg reveal-headline">Selected work</h2>
          </div>
          <button className="btn btn-surface btn-sm" onClick={() => navigate('/work')}>
            <span>View All Work</span>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </button>
        </div>

        <div className="grid-12 reveal-stagger">
          {/* 1. Dhriti (7 cols) */}
          <div className="col-span-12 reveal-card" style={{ gridColumn: 'span 7' }}>
            <div className="card-cream" data-cursor="explore" style={{ height: '100%', cursor: 'pointer' }} onClick={() => navigate('/work')}>
              <div style={{ aspectRatio: '16/10', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Dhriti"
                  src="/projects/dhriti/cover.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="font-label-caps">Youth Mental Health // Resilience</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="font-headline-sm">Dhriti</h3>
                  <p className="font-body-sm" style={{ marginTop: '4px' }}>Kerala's first community-led youth mental health festival & empowerment platform, dismantling stigma through art, workshops, and human connection.</p>
                </div>
                <span className="font-label-caps" style={{ color: 'var(--outline)' }}>2025</span>
              </div>
            </div>
          </div>

          {/* 2. Roseann Atelier (5 cols) */}
          <div className="col-span-12 reveal-card" style={{ gridColumn: 'span 5' }}>
            <div className="card-cream" data-cursor="explore" style={{ height: '100%', cursor: 'pointer' }} onClick={() => navigate('/work')}>
              <div style={{ aspectRatio: '16/10', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', position: 'relative', marginBottom: 'var(--space-md)' }}>
                <img
                  alt="Roseann Atelier"
                  src="/projects/roseann/cover.jpg"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="badge-pill-dark" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                  <span className="font-label-caps">Haute Joaillerie // Atelier</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="font-headline-sm">Roseann Atelier</h3>
                  <p className="font-body-sm" style={{ marginTop: '4px' }}>Bespoke structural design sanctuary and digital flagship celebrating gothic geometry and architectural jewelry.</p>
                </div>
                <span className="font-label-caps" style={{ color: 'var(--outline)' }}>2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FRAME 7: PROCESS (HOW CYBER ALIENS WORK) */}
      <section id="process" className="section-padding" style={{ backgroundColor: 'var(--surface-container-low)' }}>
        <div className="container-max">
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <span className="font-label-caps reveal-fade" style={{ color: 'var(--accent-coral)', display: 'block', marginBottom: 'var(--space-xs)' }}>
              // HOW CYBER ALIENS WORK
            </span>
            <h2 className="font-headline-lg reveal-headline">What happens when you come onboard</h2>
            <p className="font-body-md reveal-fade" style={{ color: 'var(--text-secondary)', marginTop: '6px' }}>
              Our clear and efficient process for every project.
            </p>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
            {[
              { num: '01', title: 'Kickoff Meeting', desc: 'We initiate the process with a call to understand your business goals, target audience, and outcomes. You join our WhatsApp group, fill out a quick onboarding form and we are ready to start.' },
              { num: '02', title: 'Discovery Phase & Wireframing', desc: 'We research your brand, competitors, and market. Based on this, we prepare the right strategy — whether it’s for a website, graphics, videos, or marketing.' },
              { num: '03', title: 'Design', desc: 'Our team creates the initial designs, concepts, wireframes, or scripts depending on the service. You review everything and share your feedback.', active: true },
              { num: '04', title: 'Build, Produce, or Execute', desc: 'We bring your project to life — developing your website, delivering final designs, producing videos, and managing your social media and ads.' },
              { num: '05', title: 'Delivery, Launch & Support', desc: 'Once approved, we deliver the final output, launch your website, or activate your campaigns. We provide ongoing support and assistance as needed.' }
            ].map((step) => (
              <div
                key={step.num}
                className="reveal-card"
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

      {/* FRAME 8: ABOUT STUDIO & LEADERSHIP TRIAD */}
      <section id="about" className="section-padding container-max">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
              marginBottom: '1.25rem'
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-coral)',
                display: 'inline-block'
              }}
            />
            <span
              className="font-label-caps"
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: 'var(--text-secondary)'
              }}
            >
              // CORE STUDIO COLLECTIVE
            </span>
          </div>

          <h2
            className="font-display-xl"
            style={{
              fontSize: 'clamp(34px, 4.5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              margin: '0 0 1rem 0'
            }}
          >
            Three partners.<br />Zero agency bloat.
          </h2>

          <p
            className="font-body-md"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '16px',
              maxWidth: '640px',
              lineHeight: 1.6,
              margin: '0 auto'
            }}
          >
            Cyber Aliens is deliberately engineered as a lean, senior-only collective. Every architecture decision, brand archetype, and WebGL shader pipeline is authored and executed directly by our three principal partners.
          </p>
        </div>

        {/* 3 Team Member Cards Grid (Horizontal Swipeable Carousel on Mobile) */}
        <div
          ref={partnersTrackRef}
          onScroll={handlePartnersScroll}
          className="partners-carousel-track"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
            marginBottom: 'var(--space-2xl)'
          }}
        >
          {/* MEMBER 1: SAI SURESH */}
          <div
            className="partner-card-item"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              transition: 'transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(17, 17, 17, 0.2)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.02)';
            }}
          >
            <div>
              {/* Architectural Avatar Frame */}
              <div
                style={{
                  height: '220px',
                  borderRadius: '16px',
                  background: 'radial-gradient(circle at 70% 30%, #1c1d24 0%, #0c0d12 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Background Crosshairs & Grid Lines */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', top: '12px', right: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', bottom: '12px', right: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>

                {/* Concentric Vector Geometry */}
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 100 100"
                  style={{ position: 'absolute', opacity: 0.12 }}
                >
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="3 3"/>
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#FFFFFF" strokeWidth="0.6"/>
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#FFFFFF" strokeWidth="0.5"/>
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#FFFFFF" strokeWidth="0.5"/>
                </svg>

                {/* Stylized Monogram */}
                <span
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '64px',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: '#FFFFFF',
                    position: 'relative',
                    zIndex: 2,
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}
                >
                  SS
                </span>

                {/* Top Corner Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '14px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: 'var(--accent-coral)',
                    fontWeight: 700
                  }}
                >
                  01 // FOUNDER
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '14px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: 'rgba(255,255,255,0.7)'
                  }}
                >
                  INDIA HQ • UTC+5:30
                </div>

                {/* Bottom Status Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '14px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-coral)' }}></span>
                  <span style={{ fontSize: '10px', color: '#FFFFFF', fontWeight: 600, letterSpacing: '0.06em' }}>
                    CREATIVE TECH & ARCHITECTURE
                  </span>
                </div>
              </div>

              {/* Name & Title */}
              <h3
                className="font-headline-sm"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: '0 0 4px 0'
                }}
              >
                Sai Suresh
              </h3>
              <p
                className="font-label-caps"
                style={{
                  color: 'var(--accent-coral)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  marginBottom: '12px'
                }}
              >
                FOUNDING LEAD // SYSTEMS & CREATIVE ARCHITECT
              </p>

              {/* Bio */}
              <p
                style={{
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '18px'
                }}
              >
                Founder of Cyber Aliens. Directs creative technology, full-stack systems engineering, and conversion-focused web architecture for fast-growing global brands and high-impact social initiatives.
              </p>

              {/* Stack Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {['Full-Stack Web', 'Next.js & WebGL', 'Brand Systems', 'Conversion Ops'].map((s, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      background: 'var(--surface-container-low)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '9999px',
                      padding: '4px 10px',
                      color: 'var(--text-primary)',
                      fontWeight: 500
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Social / Direct Link */}
            <div
              style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px'
              }}
            >
              <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>LEAD SPRINT: ACTIVE</span>
              <a
                href="#proposal"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Direct Dispatch</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* MEMBER 2: KAI TAKAHASHI */}
          <div
            className="partner-card-item"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              transition: 'transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(17, 17, 17, 0.2)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.02)';
            }}
          >
            <div>
              {/* Architectural Avatar Frame */}
              <div
                style={{
                  height: '220px',
                  borderRadius: '16px',
                  background: 'radial-gradient(circle at 30% 70%, #1f1b24 0%, #0c0d12 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Background Crosshairs & Grid Lines */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', top: '12px', right: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', bottom: '12px', right: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>

                {/* Concentric Vector Geometry */}
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 100 100"
                  style={{ position: 'absolute', opacity: 0.12 }}
                >
                  <polygon points="50,5 95,90 5,90" fill="none" stroke="#FFFFFF" strokeWidth="0.8"/>
                  <circle cx="50" cy="60" r="25" fill="none" stroke="#FFFFFF" strokeWidth="0.6"/>
                  <line x1="0" y1="60" x2="100" y2="60" stroke="#FFFFFF" strokeWidth="0.5"/>
                </svg>

                {/* Stylized Monogram */}
                <span
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '64px',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: '#FFFFFF',
                    position: 'relative',
                    zIndex: 2,
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}
                >
                  KT
                </span>

                {/* Top Corner Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '14px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: 'var(--accent-coral)',
                    fontWeight: 700
                  }}
                >
                  02 // ENG
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '14px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: 'rgba(255,255,255,0.7)'
                  }}
                >
                  TOKYO • UTC+9
                </div>

                {/* Bottom Status Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '14px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10B981' }}></span>
                  <span style={{ fontSize: '10px', color: '#FFFFFF', fontWeight: 600, letterSpacing: '0.06em' }}>
                    SYSTEMS ARCHITECTURE & WASM
                  </span>
                </div>
              </div>

              {/* Name & Title */}
              <h3
                className="font-headline-sm"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: '0 0 4px 0'
                }}
              >
                Kai Takahashi
              </h3>
              <p
                className="font-label-caps"
                style={{
                  color: 'var(--accent-coral)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  marginBottom: '12px'
                }}
              >
                FOUNDING PARTNER // TECHNICAL PRINCIPAL
              </p>

              {/* Bio */}
              <p
                style={{
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '18px'
                }}
              >
                Specializes in low-latency WebAssembly audio DSP kernels, custom GLSL shader choreography, and high-concurrency headless Next.js platforms built for resilient micro-second responsiveness.
              </p>

              {/* Stack Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {['Rust / WASM', 'GLSL Shaders', 'Next.js 15', 'Web Audio API'].map((s, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      background: 'var(--surface-container-low)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '9999px',
                      padding: '4px 10px',
                      color: 'var(--text-primary)',
                      fontWeight: 500
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Social / Direct Link */}
            <div
              style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px'
              }}
            >
              <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>ENGINEERING LEAD</span>
              <a
                href="#proposal"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Direct Dispatch</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* MEMBER 3: ELENA ROSTOVA */}
          <div
            className="partner-card-item"
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              transition: 'transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = 'rgba(17, 17, 17, 0.2)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.02)';
            }}
          >
            <div>
              {/* Architectural Avatar Frame */}
              <div
                style={{
                  height: '220px',
                  borderRadius: '16px',
                  background: 'radial-gradient(circle at 60% 70%, #241c1f 0%, #0c0d12 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                {/* Background Crosshairs & Grid Lines */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', top: '12px', right: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>
                <div style={{ position: 'absolute', bottom: '12px', right: '12px', color: 'rgba(255,255,255,0.2)', fontSize: '12px', fontFamily: 'monospace' }}>+</div>

                {/* Concentric Vector Geometry */}
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 100 100"
                  style={{ position: 'absolute', opacity: 0.12 }}
                >
                  <rect x="15" y="15" width="70" height="70" rx="10" fill="none" stroke="#FFFFFF" strokeWidth="0.8"/>
                  <circle cx="50" cy="50" r="22" fill="none" stroke="#FFFFFF" strokeWidth="0.6"/>
                  <line x1="15" y1="15" x2="85" y2="85" stroke="#FFFFFF" strokeWidth="0.5"/>
                </svg>

                {/* Stylized Monogram */}
                <span
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '64px',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: '#FFFFFF',
                    position: 'relative',
                    zIndex: 2,
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                  }}
                >
                  ER
                </span>

                {/* Top Corner Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '14px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: 'var(--accent-coral)',
                    fontWeight: 700
                  }}
                >
                  03 // STRAT
                </div>

                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '14px',
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    fontSize: '10px',
                    fontFamily: 'monospace',
                    color: 'rgba(255,255,255,0.7)'
                  }}
                >
                  SF • UTC-8
                </div>

                {/* Bottom Status Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '14px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '9999px',
                    padding: '3px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-coral)' }}></span>
                  <span style={{ fontSize: '10px', color: '#FFFFFF', fontWeight: 600, letterSpacing: '0.06em' }}>
                    PRODUCT STRATEGY & IMPACT
                  </span>
                </div>
              </div>

              {/* Name & Title */}
              <h3
                className="font-headline-sm"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  margin: '0 0 4px 0'
                }}
              >
                Elena Rostova
              </h3>
              <p
                className="font-label-caps"
                style={{
                  color: 'var(--accent-coral)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  marginBottom: '12px'
                }}
              >
                PARTNER // DIGITAL PRODUCT STRATEGY
              </p>

              {/* Bio */}
              <p
                style={{
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  marginBottom: '18px'
                }}
              >
                Bridges speculative human-computer interaction research with commercial roadmap execution. Spearheads institutional partnerships and youth equity initiatives with Mind Empowered.
              </p>

              {/* Stack Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {['HCI Research', 'Product Roadmaps', 'Impact Governance', 'Behavioral Systems'].map((s, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      background: 'var(--surface-container-low)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '9999px',
                      padding: '4px 10px',
                      color: 'var(--text-primary)',
                      fontWeight: 500
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Social / Direct Link */}
            <div
              style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '12px'
              }}
            >
              <span style={{ color: 'var(--text-secondary)', fontFamily: 'monospace' }}>STRATEGY LEAD</span>
              <a
                href="#proposal"
                style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Direct Dispatch</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        
        {/* Mobile Partners Swipe Pagination & Dot Tracker */}
        <div className="partners-mobile-pagination">
          <div className="partners-mobile-swipe-hint">
            <span className="material-symbols-outlined animate-pulse-soft" style={{ fontSize: '16px', color: 'var(--accent-coral)' }}>swipe</span>
            <span className="font-label-caps" style={{ fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
              Swipe to explore partners ({activePartnerSlide + 1} of 3)
            </span>
          </div>
          <div className="partners-mobile-dots">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToPartnerSlide(idx)}
                className={`partners-dot ${activePartnerSlide === idx ? 'active' : ''}`}
                aria-label={`Go to partner ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Operating Model Telemetry Strip */}
        <div
          style={{
            background: 'var(--surface-container-low)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '24px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-coral)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>handshake</span>
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-primary)' }}>
                100% Direct Partner Execution
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Zero junior handoffs or outsourced offshore layers.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-coral)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>speed</span>
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Max 4 Active Deployments
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Strict quarter caps to ensure relentless craft and velocity.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-coral)'
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>bolt</span>
            </div>
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Direct Slack / Signal Comms
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Sub-2 hour partner response during production cycles.
              </div>
            </div>
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
              cat: 'Conversion Ops // 5 min read',
              date: 'NOVEMBER 30, 2025 • ARCHITECTURE',
              title: 'Why Most Business Websites Fail (And How CyberAliens Builds Sites That Convert)',
              author: 'SAI SURESH',
              img: '/images/insight-webgl.jpg'
            },
            {
              cat: 'Brand Systems // 4 min read',
              date: 'MAY 13, 2025 • IDENTITY CRITIQUE',
              title: 'What Your Website Says About You (Before You Even Say a Word)',
              author: 'SAI SURESH',
              img: '/images/insight-hardware.jpg'
            },
            {
              cat: 'Engineering // 6 min read',
              date: 'APRIL 11, 2025 • TECH PERSPECTIVE',
              title: 'Why Custom Web Architecture Beats Generic Templates Every Time',
              author: 'SAI SURESH',
              img: '/images/insight-impact.jpg'
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
      <section className="section-padding container-max" style={{ paddingTop: 0 }}>
        <div
          className="card-monolith"
          style={{
            width: '100%',
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

