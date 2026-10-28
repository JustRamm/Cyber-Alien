import React from 'react';
import { useRouter } from '../router/RouterContext';

export default function CaseStudyScreen() {
  const { navigate } = useRouter();

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <article className="section-padding container-max">
        {/* Back Link */}
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <button
            className="btn btn-surface btn-sm"
            onClick={() => navigate('/work')}
            style={{ borderRadius: 'var(--rounded-full)' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            <span>Back to Selected Work</span>
          </button>
        </div>

        {/* Hero Meta Header */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <div className="badge-pill-dark" style={{ marginBottom: 'var(--space-md)' }}>
            <span className="beacon-dot animate-ping-radar"></span>
            <span className="font-label-caps">Flagship Web Architecture // Next.js + Three.js</span>
          </div>
          <h1 className="font-headline-lg">
            Project Obsidian: Decentralized Telemetry Console
          </h1>
          <p className="font-body-lg" style={{ maxWidth: '780px', marginTop: 'var(--space-md)' }}>
            Engineering a zero-latency, browser-native 3D node topology visualizer capable of mapping 100,000+ simultaneous cryptographic compute events in real time.
          </p>
        </div>

        {/* Spec Monolith Grid */}
        <div
          className="card-monolith"
          style={{
            padding: 'var(--space-xl)',
            marginBottom: 'var(--space-3xl)',
            borderRadius: 'var(--rounded-xl)'
          }}
        >
          <div className="grid-12" style={{ textAlign: 'left' }}>
            <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
              <span className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>Client</span>
              <p className="font-headline-sm" style={{ color: '#fff', fontSize: '18px', marginTop: '4px' }}>Obsidian Labs Inc.</p>
            </div>
            <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
              <span className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>Timeline</span>
              <p className="font-headline-sm" style={{ color: '#fff', fontSize: '18px', marginTop: '4px' }}>16 Weeks (Q1-Q2 2025)</p>
            </div>
            <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
              <span className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>Core Stack</span>
              <p className="font-headline-sm" style={{ color: '#fff', fontSize: '18px', marginTop: '4px' }}>WebGL, Three.js, Rust WASM</p>
            </div>
            <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
              <span className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>Benchmark</span>
              <p className="font-headline-sm" style={{ color: 'var(--accent-coral)', fontSize: '18px', marginTop: '4px' }}>60 FPS // &lt; 14ms</p>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div style={{ borderRadius: 'var(--rounded-xl)', overflow: 'hidden', marginBottom: 'var(--space-3xl)', boxShadow: 'var(--shadow-monolith)' }}>
          <img
            alt="Obsidian Telemetry Hardware & Display"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvfnBrPJQHTuzy83gmhTfcYlQlYnj0-BJMaP3mh5FFcE495AJMGvA04Rld_XkYhD8pgv4_oZjnGzIpwRiL3PKUJTK9DcuPDVwqFWpnEeXeZDkFk3XjDetTgFBjHXi4eoTQnSPPn9IPaCrDlZJ_4k84Lqh9VkpXrFw5c89Kn6wqVg8i1P3mTjr8AHZBGm2dnPm1_npMpvq7gua_eK2WTjDVxDJA7OiL2-5O2aHsMbdX"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Deep Dive Narrative */}
        <div className="grid-12" style={{ marginBottom: 'var(--space-3xl)' }}>
          <div className="col-span-12" style={{ gridColumn: 'span 4' }}>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)' }}>The Objective</span>
            <h2 className="font-headline-sm" style={{ marginTop: '6px' }}>Making Invisible Compute Tangible</h2>
          </div>
          <div className="col-span-12" style={{ gridColumn: 'span 8' }}>
            <p className="font-body-md" style={{ marginBottom: '16px' }}>
              Cryptographic networks are notoriously abstract. Obsidian Labs approached Cyber Aliens to build a flagship operational terminal that would bridge low-level distributed RPC networks with visceral, tactile hardware ergonomics.
            </p>
            <p className="font-body-md">
              We developed custom GLSL fragment shaders simulating volumetric atmospheric depth, coupled with an instanced mesh renderer in WebAssembly that streams live transaction data with zero garbage-collection latency spikes.
            </p>
          </div>
        </div>

        {/* Additional Architecture Gallery */}
        <div className="grid-12" style={{ marginBottom: 'var(--space-3xl)' }}>
          <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
            <div className="card-cream">
              <img
                alt="Obsidian Architecture Detail 1"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb1-rmIu1TWa9ZYZen4xWDh5eEnVmjNR2K0NQhvIDGkcOsT8-XZ4g81FJMPm78DJFsO6psrFsXdee7_TVANm2dbBvv8H21anMbOa4RUVwI-i4XX9X3Q3jk6_0uG7PRrz0jGsOeOfku2NP-EVin59LyPZRa1sxTyK32OaL2EBDsIdSO0_pjq7Ok824noXxyom09SAd3rHlo2toy6tnAucRJaAXNpC_n7SRNsz-kRl2W"
                style={{ width: '100%', borderRadius: 'var(--rounded-DEFAULT)', marginBottom: 'var(--space-md)' }}
              />
              <h3 className="font-headline-sm">Shader Compute Topology</h3>
              <p className="font-body-sm" style={{ marginTop: '4px' }}>Real-time instanced buffers rendering dynamic vertex waves across 100k nodes.</p>
            </div>
          </div>
          <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
            <div className="card-cream">
              <img
                alt="Obsidian Architecture Detail 2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI1ZssrpnnHUs3u90lSbqaC-3noLyElTmc0tNKi1BFqYmt9gLnDa2ow8kIVrveQvlaUG48sD8tMIDdNtZ4CPMfxwdmxY5pzKNieriLt5NM1eez8B7Wwtx1b0uye4KlyLaZwB_i9XLAtyA25tzbTtId5fO3VmJIjIlVGNpu6HCEEkuKz1lT9qJ0AoDiMf0SywR6_sshuWEPcfJ5IItYd3wxPkBv4cXV6Wh9zycOO6eQ"
                style={{ width: '100%', borderRadius: 'var(--rounded-DEFAULT)', marginBottom: 'var(--space-md)' }}
              />
              <h3 className="font-headline-sm">Physical Brand World</h3>
              <p className="font-body-sm" style={{ marginTop: '4px' }}>Debossed letterpress packaging and tactile keycard access credentials.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="card-monolith" style={{ textAlign: 'center', padding: 'var(--space-2xl) var(--space-xl)' }}>
          <h2 className="font-headline-md" style={{ color: '#fff', marginBottom: 'var(--space-md)' }}>
            Need comparable technical firepower?
          </h2>
          <button className="btn btn-secondary" onClick={() => navigate('/proposal')}>
            <span>Commission A Similar Architecture</span>
          </button>
        </div>
      </article>
    </main>
  );
}

