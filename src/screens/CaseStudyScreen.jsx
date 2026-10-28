import React from 'react';
import { useRouter } from '../router/RouterContext';

export default function CaseStudyScreen() {
  const { navigate } = useRouter();

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <article className="section-padding container-max">
        
        {/* Top Breadcrumb & Metadata Navigation */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2xl)', gap: '12px' }}>
          <button
            className="btn btn-surface btn-sm"
            onClick={() => navigate('/work')}
            style={{ borderRadius: 'var(--rounded-full)', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            <span className="font-label-caps" style={{ fontWeight: 'bold' }}>ALL ARTIFACTS</span>
          </button>

          <div className="badge-pill-dark">
            <span className="beacon-dot animate-ping-radar"></span>
            <span className="font-label-caps" style={{ color: '#fff' }}>WEB ARCHITECTURE // 2025 DEPLOYMENT</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
            CASE STUDY // FLAGSHIP 01
          </span>
          <h1 className="font-headline-lg" style={{ fontSize: 'clamp(36px, 5vw, 68px)', marginTop: '8px', marginBottom: 'var(--space-md)' }}>
            Project Obsidian
          </h1>
          <p className="font-body-lg" style={{ maxWidth: '820px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Decentralized high-throughput compute topology &amp; telemetry console engineered for next-generation cryptographic networks. Zero-latency WebGL shaders rendering 100,000+ live transactions.
          </p>
        </div>

        {/* 4 Stat Cards Grid (including Coral Highlighted Latency card) */}
        <div className="grid-12" style={{ marginBottom: 'var(--space-3xl)' }}>
          
          {/* Stat 1: Throughput */}
          <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
            <div className="card-cream" style={{ height: '100%', padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="font-label-caps" style={{ color: 'var(--outline)', letterSpacing: '0.12em' }}>THROUGHPUT INCREASE</span>
                <p className="font-display-lg" style={{ fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--primary)', margin: '12px 0 6px' }}>
                  +340%
                </p>
              </div>
              <p className="font-body-sm" style={{ color: 'var(--text-secondary)' }}>
                Versus legacy distributed RPC polling architecture.
              </p>
            </div>
          </div>

          {/* Stat 2: Render Latency (Crimson / Coral Accent Card) */}
          <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
            <div
              style={{
                height: '100%',
                padding: 'var(--space-xl)',
                backgroundColor: 'var(--accent-coral)',
                borderRadius: 'var(--rounded-lg)',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 30px rgba(244, 63, 94, 0.25)'
              }}
            >
              <div>
                <span className="font-label-caps" style={{ color: 'rgba(255,255,255,0.85)', letterSpacing: '0.12em' }}>FRAME RENDER LATENCY</span>
                <p className="font-display-lg" style={{ fontSize: 'clamp(36px, 4vw, 56px)', color: '#fff', margin: '12px 0 6px' }}>
                  14ms
                </p>
              </div>
              <p className="font-body-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Locked at 60 FPS with zero garbage collection stutter.
              </p>
            </div>
          </div>

          {/* Stat 3: Uptime */}
          <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
            <div className="card-cream" style={{ height: '100%', padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="font-label-caps" style={{ color: 'var(--outline)', letterSpacing: '0.12em' }}>NODE UPTIME</span>
                <p className="font-display-lg" style={{ fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--primary)', margin: '12px 0 6px' }}>
                  99.98%
                </p>
              </div>
              <p className="font-body-sm" style={{ color: 'var(--text-secondary)' }}>
                Continuous multi-region fallback across 12 distributed clusters.
              </p>
            </div>
          </div>

          {/* Stat 4: Nodes */}
          <div className="col-span-12" style={{ gridColumn: 'span 3' }}>
            <div className="card-cream" style={{ height: '100%', padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="font-label-caps" style={{ color: 'var(--outline)', letterSpacing: '0.12em' }}>STREAMED NODES</span>
                <p className="font-display-lg" style={{ fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--primary)', margin: '12px 0 6px' }}>
                  100K+
                </p>
              </div>
              <p className="font-body-sm" style={{ color: 'var(--text-secondary)' }}>
                Simultaneously mapped nodes in instanced WebGL geometry.
              </p>
            </div>
          </div>
        </div>

        {/* Specifications Strip Monolith */}
        <div
          className="card-monolith"
          style={{
            padding: 'var(--space-xl)',
            marginBottom: 'var(--space-3xl)',
            borderRadius: 'var(--rounded-xl)'
          }}
        >
          <div className="grid-12" style={{ textAlign: 'left', rowGap: 'var(--space-md)' }}>
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
              <span className="font-label-caps" style={{ color: 'var(--on-primary-container)' }}>Studio Scope</span>
              <p className="font-headline-sm" style={{ color: '#fff', fontSize: '18px', marginTop: '4px' }}>Design, WebGL &amp; Engineering</p>
            </div>
          </div>
        </div>

        {/* Hero Showcase Visual */}
        <div style={{ borderRadius: 'var(--rounded-xl)', overflow: 'hidden', marginBottom: 'var(--space-3xl)', boxShadow: 'var(--shadow-monolith)', border: '1px solid var(--border-subtle)' }}>
          <img
            alt="Obsidian Telemetry Hardware & Display"
            src="/images/obsidian-topology.jpg"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Deep Dive Narrative: The Brief & The Execution */}
        <div className="grid-12" style={{ marginBottom: 'var(--space-3xl)', alignItems: 'flex-start' }}>
          <div className="col-span-12" style={{ gridColumn: 'span 4' }}>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
              01 // THE CHALLENGE
            </span>
            <h2 className="font-headline-sm" style={{ fontSize: '28px', marginTop: '8px' }}>
              Making Invisible Compute Tangible
            </h2>
          </div>
          <div className="col-span-12" style={{ gridColumn: 'span 8' }}>
            <p className="font-body-md" style={{ marginBottom: '16px', lineHeight: 1.7, color: 'var(--text-primary)' }}>
              Cryptographic networks are notoriously abstract. Legacy monitoring tools relied on flat 2D dashboards that choked under heavy node rebalancing events. Obsidian Labs approached Cyber Aliens to build an authoritative telemetry terminal that would bridge high-throughput RPC sockets with visceral, tactile hardware ergonomics.
            </p>
            <p className="font-body-md" style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              We developed custom GLSL fragment shaders simulating volumetric atmospheric depth, coupled with an instanced mesh renderer in WebAssembly that streams live transaction data with zero garbage-collection latency spikes. Users can navigate 100,000+ compute nodes at a buttery 60 FPS directly within any modern web browser.
            </p>
          </div>
        </div>

        {/* Bento Gallery: Kinetic Architecture in Practice */}
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
              02 // IMPLEMENTATION
            </span>
            <h2 className="font-headline-md" style={{ marginTop: '6px' }}>
              Kinetic Architecture in Practice
            </h2>
          </div>

          <div className="grid-12">
            {/* Bento Card 1: Dynamic Node Fluid Balancing (span 8) */}
            <div className="col-span-12" style={{ gridColumn: 'span 8' }}>
              <div className="card-cream" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/9', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
                  <img
                    alt="Dynamic Node Fluid Balancing visual"
                    src="/images/bento-fluid-balancing.jpg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="badge-pill-dark" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                  <span className="font-label-caps">TOPOLOGY VISUALIZER</span>
                </div>
                <h3 className="font-headline-sm">Dynamic Node Fluid Balancing</h3>
                <p className="font-body-sm" style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Instanced vertex buffers render real-time mempool stress waves, allowing operators to visually anticipate cryptographic congestion before bottlenecks form.
                </p>
              </div>
            </div>

            {/* Bento Card 2: Multi-Monitor Workstation (span 4) */}
            <div className="col-span-12" style={{ gridColumn: 'span 4' }}>
              <div className="card-cream" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '4/3', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
                  <img
                    alt="Multi-Monitor Command Workstation"
                    src="/images/bento-workstation.jpg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="badge-pill-dark" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                  <span className="font-label-caps">HARDWARE ERGONOMICS</span>
                </div>
                <h3 className="font-headline-sm">Command Workstation</h3>
                <p className="font-body-sm" style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Engineered for ultra-wide multi-display command centres with native hotkey telemetry navigation.
                </p>
              </div>
            </div>

            {/* Bento Card 3: Cross-Platform Responsive Telemetry (span 4) */}
            <div className="col-span-12" style={{ gridColumn: 'span 4' }}>
              <div className="card-cream" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '4/3', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
                  <img
                    alt="Cross-Platform Responsive Telemetry"
                    src="/images/dhriti-mobile.jpg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="badge-pill-dark" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                  <span className="font-label-caps">MOBILE PARITY</span>
                </div>
                <h3 className="font-headline-sm">Field Access Terminal</h3>
                <p className="font-body-sm" style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                  Zero-latency touch interaction with adaptive Level-of-Detail (LOD) downsampling on mobile chipsets.
                </p>
              </div>
            </div>

            {/* Bento Card 4: Dark Void HUD & Shaders (span 8) */}
            <div className="col-span-12" style={{ gridColumn: 'span 8' }}>
              <div className="card-monolith" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/9', borderRadius: 'var(--rounded-DEFAULT)', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
                  <img
                    alt="Dark Void HUD Shaders"
                    src="/images/chronovault-cinematic.jpg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="badge-pill-dark" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                  <span className="font-label-caps">GLSL PIPELINE</span>
                </div>
                <h3 className="font-headline-sm" style={{ color: '#fff' }}>Dark Void HUD &amp; Shaders</h3>
                <p className="font-body-sm" style={{ color: 'var(--on-primary-container)', marginTop: '4px' }}>
                  Bespoke post-processing bloom and chromatic aberration shaders emulate phosphor CRT scanline aesthetics while preserving accessibility standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project / Artifact CTA Card matching image copy 5.png */}
        <div
          className="card-monolith"
          style={{
            padding: 'var(--space-2xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-lg)'
          }}
        >
          <div>
            <div className="badge-pill-dark" style={{ display: 'inline-flex', marginBottom: '8px' }}>
              <span className="font-label-caps" style={{ color: 'var(--accent-coral)' }}>NEXT ARTIFACT</span>
            </div>
            <h2 className="font-headline-md" style={{ color: '#fff' }}>
              Chrono Vault // Speculative AAA Transmedia Teaser
            </h2>
            <p className="font-body-sm" style={{ color: 'var(--tertiary-fixed)', marginTop: '4px' }}>
              Speculative Unreal Engine 5 cinematic world-building and interactive story prologue.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/work')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span>EXPLORE ALL WORK</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </button>
          </div>
        </div>

      </article>
    </main>
  );
}
