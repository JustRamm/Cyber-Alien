import React from 'react';
import { useRouter } from '../router/RouterContext';

export default function NotFoundScreen() {
  const { navigate } = useRouter();

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <section className="section-padding container-max" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          className="card-monolith"
          style={{
            maxWidth: '680px',
            width: '100%',
            padding: 'var(--space-3xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)'
          }}
        >
          <div className="badge-pill-dark" style={{ marginBottom: 'var(--space-lg)' }}>
            <span className="beacon-dot animate-ping-radar"></span>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)' }}>ANOMALY DETECTED // 404</span>
          </div>

          <h1 className="font-display-xl" style={{ fontSize: '72px', lineHeight: '76px', color: '#fff', marginBottom: 'var(--space-sm)' }}>
            Signal Lost.
          </h1>

          <p className="font-headline-sm" style={{ color: 'var(--accent-coral)', marginBottom: 'var(--space-md)' }}>
            Page Abducted by Cyber Aliens
          </p>

          <p className="font-body-md" style={{ color: 'var(--tertiary-fixed)', maxWidth: '480px', margin: '0 auto var(--space-2xl)' }}>
            The trajectory vector you requested has vanished into orbital deep space or has been classified under Level 5 encryption.
          </p>

          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>rocket_launch</span>
            <span>Warp Back To Home</span>
          </button>
        </div>
      </section>
    </main>
  );
}

