import React from 'react';
import { useRouter } from '../router/RouterContext';

export default function ConfirmationScreen() {
  const { navigate } = useRouter();

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <section className="section-padding container-max" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          className="card-monolith"
          style={{
            maxWidth: '720px',
            width: '100%',
            padding: 'var(--space-3xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)'
          }}
        >
          {/* Beacon */}
          <div className="badge-pill-dark" style={{ marginBottom: 'var(--space-xl)', background: 'rgba(255,255,255,0.08)' }}>
            <span className="beacon-dot animate-ping-radar"></span>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)' }}>Transmission Locked & Logged</span>
          </div>

          <h1 className="font-headline-lg" style={{ color: '#fff', marginBottom: 'var(--space-md)' }}>
            Brief Received.<br />Systems Engaged.
          </h1>

          <p className="font-body-lg" style={{ color: 'var(--tertiary-fixed)', maxWidth: '560px', margin: '0 auto var(--space-xl)' }}>
            Your strategic project parameters have been routed directly to the principal partners. Our response window is strictly under 24 hours.
          </p>

          {/* SLA Card */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              borderRadius: 'var(--rounded-lg)',
              padding: 'var(--space-lg)',
              marginBottom: 'var(--space-2xl)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="font-label-caps" style={{ color: 'var(--accent-coral)' }}>TELEMETRY PROTOCOL</span>
              <span className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>STATUS: CONFIRMED</span>
            </div>
            <p className="font-headline-sm" style={{ color: '#fff', fontSize: '18px' }}>
              Standard Partner Review: In Progress
            </p>
            <p className="font-body-sm" style={{ color: 'var(--tertiary-fixed)', marginTop: '4px' }}>
              You will receive a tailored scope breakdown with structural milestones and estimated execution cycles.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-md)' }}>
            <button className="btn btn-secondary" onClick={() => navigate('/')}>
              <span>Return To Studio Home</span>
            </button>
            <button className="btn btn-ghost-dark" onClick={() => navigate('/work')}>
              <span>Explore More Artifacts</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

