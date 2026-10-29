import React, { useState, useEffect } from 'react';
import { useRouter } from '../router/RouterContext';

export default function ConfirmationScreen() {
  const { navigate } = useRouter();

  const [submission, setSubmission] = useState({
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@studio.io',
    company: 'Studio IO',
    capabilities: ['Web Design & WebGL', 'Brand Identity & Systems', 'Headless Next.js'],
    budget: '$25,000 - $50,000 USD (Series A / Scaling)',
    targetWindow: 'Thursday, Apr 02, 2026 • 10:00 AM - 11:30 AM PST',
    scope: 'Looking to architect a modular WebGL interactive product showcase and headless CMS ahead of our Q3 product keynote.',
    id: 'CA-9481'
  });

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('cyberalien_submission');
      if (stored) {
        const parsed = JSON.parse(stored);
        setSubmission(prev => ({
          name: parsed.name || prev.name,
          email: parsed.email || prev.email,
          company: parsed.company || prev.company,
          capabilities: (parsed.capabilities && parsed.capabilities.length > 0) ? parsed.capabilities : prev.capabilities,
          budget: parsed.budget || prev.budget,
          targetWindow: parsed.targetWindow || prev.targetWindow,
          scope: parsed.scope || prev.scope,
          id: parsed.id || prev.id
        }));
      }
    } catch (e) {
      // fallback gracefully to default design mockup values
    }
  }, []);

  return (
    <main style={{ width: '100%', minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '6rem', backgroundColor: 'var(--surface)' }}>
      <div className="container-max" style={{ padding: '0 var(--space-md)' }}>

        {/* =========================================================
            HEADER CONFIRMATION HERO
            ========================================================= */}
        <section style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Telemetry Status Pill */}
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
              marginBottom: '1.75rem'
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
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--text-secondary)'
              }}
            >
              TRANSMISSION CONFIRMED // PROTOCOL 2026.08
            </span>
          </div>

          {/* Crimson Checkmark Circular Badge with Radiant Halo */}
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#e11d48',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 0 32px rgba(225, 29, 72, 0.45), 0 4px 16px rgba(225, 29, 72, 0.3)',
              marginBottom: '1.5rem',
              animation: 'beaconPulse 2.5s infinite'
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Display Headline */}
          <h1
            className="font-display-xl"
            style={{
              fontSize: 'clamp(38px, 5.2vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: 'var(--text-primary)',
              margin: '0 0 1rem 0'
            }}
          >
            We got your request.
          </h1>

          {/* Subtitle Telemetry Context */}
          <p
            className="font-body-md"
            style={{
              color: 'var(--text-secondary)',
              fontSize: '15.5px',
              maxWidth: '620px',
              lineHeight: 1.6,
              margin: '0 auto'
            }}
          >
            Thanks, <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{submission.name}</strong>. A member of our studio team will evaluate your telemetry and reply within 24 hours at{' '}
            <span style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              {submission.email}
            </span>.
          </p>
        </section>

        {/* =========================================================
            CARD 1: YOUR REQUEST // DISPATCH LOGGED
            ========================================================= */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto 5.5rem auto',
            background: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)'
          }}
        >
          {/* Card Top Sub-Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.4rem',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <span
              className="font-label-caps"
              style={{
                color: 'var(--accent-coral)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em'
              }}
            >
              // DISPATCH LOGGED
            </span>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#FAF9F5',
                border: '1px solid var(--border-subtle)',
                borderRadius: '9999px',
                padding: '4px 12px',
                fontSize: '11px',
                color: 'var(--text-secondary)',
                fontWeight: 600
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
              <span>ID: {submission.id}</span>
            </div>
          </div>

          <h2
            className="font-headline-sm"
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: '0 0 1.5rem 0'
            }}
          >
            Your request
          </h2>

          {/* Inner Spec Table Container */}
          <div
            style={{
              background: '#FAF9F5',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px',
              overflow: 'hidden'
            }}
          >
            {/* ROW 1: CAPABILITIES */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(120px, 25%, 160px) 1fr',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(17, 17, 17, 0.06)',
                alignItems: 'center'
              }}
            >
              <span
                className="font-label-caps"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--text-secondary)'
                }}
              >
                CAPABILITIES
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {submission.capabilities.map((cap, i) => (
                  <span
                    key={i}
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '9999px',
                      padding: '5px 14px',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* ROW 2: ESTIMATED SCOPE */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(120px, 25%, 160px) 1fr',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(17, 17, 17, 0.06)',
                alignItems: 'center'
              }}
            >
              <span
                className="font-label-caps"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--text-secondary)'
                }}
              >
                ESTIMATED SCOPE
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--accent-coral)', display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                    <line x1="7" y1="7" x2="7.01" y2="7"/>
                  </svg>
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {submission.budget.split('(')[0]?.trim() || submission.budget}
                </span>
                {submission.budget.includes('(') && (
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    ({submission.budget.split('(')[1]}
                  </span>
                )}
              </div>
            </div>

            {/* ROW 3: TARGET WINDOW */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(120px, 25%, 160px) 1fr',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(17, 17, 17, 0.06)',
                alignItems: 'center'
              }}
            >
              <span
                className="font-label-caps"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--text-secondary)'
                }}
              >
                TARGET WINDOW
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--accent-coral)', display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </span>
                <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {submission.targetWindow}
                </span>
              </div>
            </div>

            {/* ROW 4: BRIEF ABSTRACT */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(120px, 25%, 160px) 1fr',
                padding: '16px 20px',
                alignItems: 'flex-start'
              }}
            >
              <span
                className="font-label-caps"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--text-secondary)',
                  paddingTop: '6px'
                }}
              >
                BRIEF ABSTRACT
              </span>
              <div
                style={{
                  background: '#FFFFFF',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  fontSize: '13px',
                  lineHeight: 1.55,
                  color: 'var(--text-primary)',
                  fontStyle: 'normal'
                }}
              >
                "{submission.scope}"
              </div>
            </div>
          </div>

          {/* Email Confirmation Notice */}
          <div
            style={{
              marginTop: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '12.5px',
              color: 'var(--text-secondary)',
              textAlign: 'center'
            }}
          >
            <span style={{ color: 'var(--accent-coral)', display: 'inline-flex', alignItems: 'center' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            <span>A confirmation receipt and calendar hold was also dispatched to your email.</span>
          </div>
        </div>

        {/* =========================================================
            SECTION 2: WHAT HAPPENS NEXT // EXECUTION CADENCE
            ========================================================= */}
        <section className="container-max" style={{ margin: '0 auto 6rem auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span
              className="font-label-caps"
              style={{
                color: 'var(--accent-coral)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              // EXECUTION CADENCE
            </span>
            <h2
              className="font-display-xl"
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                margin: '0 0 10px 0'
              }}
            >
              What happens next
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                margin: '0 auto',
                lineHeight: 1.55
              }}
            >
              Every inquiry passes directly through our core technical directors. No automated run-arounds.
            </p>
          </div>

          {/* 3 Step Cadence Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {/* STAGE 01 */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 16px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#e11d48',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    01
                  </div>
                  <span
                    style={{
                      background: '#FFE4E6',
                      color: '#BE123C',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      textTransform: 'uppercase'
                    }}
                  >
                    IN REVIEW
                  </span>
                </div>

                <h3
                  className="font-headline-sm"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 8px 0'
                  }}
                >
                  We review your requirements
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
                  Our creative directors and technical leads review your specs and feasibility within 12-24 hours.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--accent-coral)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>ACTIVE STAGE</span>
              </div>
            </div>

            {/* STAGE 02 */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 16px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#F0EFEA',
                      color: 'var(--text-primary)',
                      fontSize: '13px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    02
                  </div>
                  <span
                    style={{
                      background: '#F0EFEA',
                      color: 'var(--text-secondary)',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      textTransform: 'uppercase'
                    }}
                  >
                    STAGE 02
                  </span>
                </div>

                <h3
                  className="font-headline-sm"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 8px 0'
                  }}
                >
                  We reply with call slots
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
                  You'll receive calendar invites and a direct Google Meet / Zoom link tailored to your team's timezone.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>TARGET: &lt; 24H</span>
              </div>
            </div>

            {/* STAGE 03 */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 16px rgba(0,0,0,0.02)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#F0EFEA',
                      color: 'var(--text-primary)',
                      fontSize: '13px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    03
                  </div>
                  <span
                    style={{
                      background: '#F0EFEA',
                      color: 'var(--text-secondary)',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      textTransform: 'uppercase'
                    }}
                  >
                    STAGE 03
                  </span>
                </div>

                <h3
                  className="font-headline-sm"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 8px 0'
                  }}
                >
                  We discuss & send proposal
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 2rem 0' }}>
                  A collaborative 30-minute discovery session followed by a fixed-scope sprint roadmap and commercial estimate.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--text-secondary)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.06em'
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                </svg>
                <span>SCOPE CRADLE PHASE</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: EXPLORE IN THE MEANTIME // STUDIO TELEMETRY
            ========================================================= */}
        <section className="container-max" style={{ margin: '0 auto 4.5rem auto' }}>
          
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <span
                className="font-label-caps"
                style={{
                  color: 'var(--accent-coral)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  display: 'block',
                  marginBottom: '6px'
                }}
              >
                // STUDIO TELEMETRY
              </span>
              <h2
                className="font-display-xl"
                style={{
                  fontSize: 'clamp(28px, 3.8vw, 40px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  margin: 0
                }}
              >
                Explore in the meantime
              </h2>
            </div>

            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                maxWidth: '360px',
                lineHeight: 1.55,
                margin: 0
              }}
            >
              Familiarize yourself with our engineering standards, deployment cadences, and design systems.
            </p>
          </div>

          {/* 3 Bento Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}
          >
            {/* BENTO CARD 1: DARK MONOLITH ARTIFACTS */}
            <div
              onClick={() => navigate('/work')}
              style={{
                background: '#0B0D11',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '24px 24px 18px 24px',
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform var(--transition-fast), border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(244, 63, 94, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    className="font-label-caps"
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    CASE STUDIES
                  </span>
                  <span style={{ color: 'var(--accent-coral)' }}>↗</span>
                </div>

                <h3
                  className="font-headline-sm"
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: '0 0 8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Explore Flagship Artifacts →
                </h3>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.65)',
                    lineHeight: 1.55,
                    margin: '0 0 16px 0'
                  }}
                >
                  Immersive 3D environments, generative systems, and high-conversion enterprise platforms.
                </p>
              </div>

              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '140px',
                  width: '100%',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <img
                  src="/images/obsidian-topology.jpg"
                  alt="Flagship Telemetry Artifact"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>

            {/* BENTO CARD 2: METHODOLOGY */}
            <div
              onClick={() => navigate('/', 'process')}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform var(--transition-fast), border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(17, 17, 17, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span
                    className="font-label-caps"
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    METHODOLOGY
                  </span>
                  <span style={{ color: 'var(--text-primary)' }}>↗</span>
                </div>

                <h3
                  className="font-headline-sm"
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: '0 0 8px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  The 4-Stage Sprint Trajectory →
                </h3>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    margin: '0 0 20px 0'
                  }}
                >
                  How we compress six months of legacy agency bloat into rapid, high-cadence production cycles without sacrificing rigor.
                </p>
              </div>

              {/* Metric Box */}
              <div
                style={{
                  background: '#FAF9F5',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '12px 14px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Velocity Metric</span>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-coral)' }}>4.2x Faster</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-primary)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Direct engineers-to-founder cadence</span>
                </div>
              </div>
            </div>

            {/* BENTO CARD 3: CHAT ON WHATSAPP */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform var(--transition-fast), border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#10B981',
                        display: 'inline-block'
                      }}
                    />
                    <span
                      className="font-label-caps"
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#10B981'
                      }}
                    >
                      INSTANT CONNECT
                    </span>
                  </div>
                  <span style={{ color: 'var(--text-primary)' }}>↗</span>
                </div>

                <a
                  href="https://wa.me/919999999999?text=Hello%20Cyber%20Aliens%2C%20inquiring%20about%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <h3
                    className="font-headline-sm"
                    style={{
                      fontSize: '19px',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      margin: '0 0 8px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    Chat on WhatsApp →
                  </h3>
                </a>

                <p
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    margin: '0 0 20px 0'
                  }}
                >
                  Need immediate feedback or managing urgent RFP deadlines? Ping studio operations directly for real-time dispatch.
                </p>
              </div>

              {/* WhatsApp Action Box */}
              <a
                href="https://wa.me/919999999999?text=Hello%20Cyber%20Aliens%2C%20inquiring%20about%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  background: '#F0FDF4',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#DCFCE7',
                      color: '#15803D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.58c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.22-.16-.47-.28z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Studio Ops Channel
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                      &lt;5min response interval
                    </div>
                  </div>
                </div>
                <span style={{ color: '#15803D', fontSize: '15px' }}>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            RETURN BUTTON: BACK TO HOME
            ========================================================= */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 24px',
              borderRadius: '9999px',
              background: '#FFFFFF',
              border: '1px solid var(--border-light)',
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
              transition: 'all var(--transition-fast)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F0EFEA';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ fontSize: '15px' }}>←</span>
            <span>Back to home</span>
          </button>
        </div>

      </div>
    </main>
  );
}
