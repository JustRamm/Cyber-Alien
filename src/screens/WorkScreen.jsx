import React, { useState, useRef } from 'react';
import { useRouter } from '../router/RouterContext';
import { projects } from '../data/projects';

export default function WorkScreen() {
  const { navigate } = useRouter();
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const gridTopRef = useRef(null);

  const ITEMS_PER_PAGE = 6;

  const categories = [
    { label: `All Artifacts (${projects.length.toString().padStart(2, '0')})`, val: 'all' },
    { label: `Social Impact (${projects.filter(p => p.category.includes('impact')).length.toString().padStart(2, '0')})`, val: 'impact' },
    { label: `Web Platforms (${projects.filter(p => p.category.includes('web')).length.toString().padStart(2, '0')})`, val: 'web' },
    { label: `Interactive & QPR Games (${projects.filter(p => p.category.includes('games')).length.toString().padStart(2, '0')})`, val: 'games' },
    { label: `Brand & Atelier (${projects.filter(p => p.category.includes('branding')).length.toString().padStart(2, '0')})`, val: 'branding' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length);
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
    setCurrentPage(1);
  }

  function handlePageChange(newPage) {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <section className="section-padding container-max">
        {/* Top Telemetry Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px', marginBottom: 'var(--space-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="beacon-dot animate-pulse-soft"></span>
            <span className="font-label-caps" style={{ color: 'var(--on-surface-variant)' }}>
              LIVE REPERTORY // KERALA HQ & GLOBAL DISPATCH
            </span>
          </div>
          <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
            {projects.length} VERIFIED ARCHIVAL NODES
          </span>
        </div>

        {/* Title */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
            // PRODUCTION PORTFOLIO & LABS
          </span>
          <h1 className="font-headline-lg" style={{ marginTop: '6px', fontSize: 'clamp(36px, 5vw, 60px)' }}>
            Selected work & verified deployments.
          </h1>
          <p className="font-body-lg" style={{ maxWidth: '680px', marginTop: 'var(--space-sm)', color: 'var(--text-secondary)' }}>
            Explore live production web architectures, community mental health ecosystems, serious QPR educational simulators, and bespoke luxury digital flagships crafted by Cyber Aliens.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: 'var(--space-xl)' }}>
          {categories.map((cat) => (
            <button
              key={cat.val}
              className={`filter-chip ${filter === cat.val ? 'active' : ''}`}
              onClick={() => handleFilterChange(cat.val)}
              style={{
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Telemetry and Viewport Status */}
        <div
          ref={gridTopRef}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 18px',
            background: 'var(--surface-container-low)',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)',
            marginBottom: 'var(--space-xl)',
            fontSize: '12px',
            fontFamily: 'monospace'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-coral)' }}></span>
            <span>
              SHOWING {filteredProjects.length === 0 ? 0 : startIndex + 1}–{endIndex} OF {filteredProjects.length} NODES
            </span>
          </div>
          <div style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
            PAGE {currentPage.toString().padStart(2, '0')} // {totalPages.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Paginated Bento Grid */}
        <div className="grid-12">
          {paginatedProjects.map((p) => (
            <div
              key={p.id}
              className="col-span-12"
              style={{ gridColumn: p.cols }}
            >
              <article
                className={p.dark ? 'card-monolith' : 'card-cream'}
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
                }}
              >
                <div>
                  {/* Top Meta Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', flexWrap: 'wrap', gap: '8px' }}>
                    <div className="badge-pill-dark" style={{ background: p.dark ? 'rgba(255,255,255,0.1)' : 'var(--primary)' }}>
                      <span className="font-label-caps" style={{ color: '#FFFFFF' }}>{p.catLabel}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="font-label-caps" style={{ color: p.dark ? 'var(--on-primary-container)' : 'var(--outline)', fontSize: '11px' }}>
                        {p.partner}
                      </span>
                      <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 700, fontSize: '11px' }}>
                        {p.year}
                      </span>
                    </div>
                  </div>

                  {/* High-Resolution Screenshot Frame */}
                  <div
                    style={{
                      aspectRatio: '16/10',
                      borderRadius: 'var(--rounded-DEFAULT)',
                      overflow: 'hidden',
                      position: 'relative',
                      marginBottom: 'var(--space-md)',
                      backgroundColor: '#0c0d12',
                      border: p.dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--border-subtle)'
                    }}
                  >
                    <img
                      src={p.img}
                      alt={`${p.title} — ${p.catLabel}. ${p.desc}`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform var(--transition-medium)'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.03)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    {/* Fallback card with styled alt text representation if image is missing */}
                    <div
                      style={{
                        display: 'none',
                        width: '100%',
                        height: '100%',
                        minHeight: '220px',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 'var(--space-lg)',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, #101015 0%, #1a1b24 100%)',
                        color: '#fff'
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '36px', color: 'var(--accent-coral)', marginBottom: '8px' }}>
                        language
                      </span>
                      <span className="font-label-caps" style={{ color: 'var(--accent-coral)', letterSpacing: '0.12em', marginBottom: '6px' }}>
                        {p.catLabel}
                      </span>
                      <h4 className="font-headline-sm" style={{ color: '#ffffff', fontSize: '18px', marginBottom: '4px' }}>
                        {p.title}
                      </h4>
                      <p className="font-body-sm" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', maxWidth: '320px' }}>
                        {p.desc}
                      </p>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(8px)',
                        padding: '3px 10px',
                        borderRadius: '9999px',
                        fontSize: '10px',
                        fontFamily: 'monospace',
                        color: 'rgba(255, 255, 255, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                      }}
                    >
                      LIVE TELEMETRY // {p.meta}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h2 className="font-headline-sm" style={{ color: p.dark ? 'var(--text-inverse)' : 'var(--text-primary)', fontSize: '24px', marginBottom: '8px' }}>
                    {p.title}
                  </h2>
                  <p className="font-body-sm" style={{ color: p.dark ? 'var(--on-primary-container)' : 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>

                {/* Bottom Interactive Actions with Direct Clickable Links */}
                <div
                  style={{
                    paddingTop: 'var(--space-md)',
                    marginTop: 'var(--space-lg)',
                    borderTop: p.dark ? '1px solid var(--border-glass)' : '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="beacon-dot animate-pulse-soft"></span>
                    <span className="font-label-caps" style={{ color: p.dark ? 'var(--on-primary-container)' : 'var(--outline)', fontSize: '11px' }}>
                      DEPLOYED // ONLINE
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${p.dark ? 'btn-surface' : 'btn-secondary'} btn-sm`}
                        style={{
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px'
                        }}
                      >
                        <span>GitHub Code</span>
                        <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>code</span>
                      </a>
                    )}

                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${p.dark ? 'btn-secondary' : 'btn-surface'} btn-sm`}
                      style={{
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        backgroundColor: p.dark ? '#FFFFFF' : 'var(--primary)',
                        color: p.dark ? '#0A0A0A' : '#FFFFFF'
                      }}
                    >
                      <span>Visit Live Platform</span>
                      <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>open_in_new</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Kinetic Void Pagination Controller */}
        {totalPages > 1 && (
          <div
            style={{
              marginTop: 'var(--space-3xl)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                background: '#FFFFFF',
                borderRadius: '9999px',
                border: '1px solid var(--border-subtle)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: 'transparent',
                  color: currentPage === 1 ? 'rgba(0, 0, 0, 0.25)' : 'var(--text-primary)',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  fontSize: '13px',
                  fontWeight: 700,
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
                <span>PREV</span>
              </button>

              {/* Page Number Pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {Array.from({ length: totalPages }, (_, idx) => {
                  const pageNum = idx + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: isActive ? '1px solid #000000' : '1px solid var(--border-subtle)',
                        background: isActive ? '#0A0A0A' : '#FFFFFF',
                        color: isActive ? '#FFFFFF' : 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)',
                        boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
                        position: 'relative'
                      }}
                    >
                      {isActive && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '4px',
                            right: '6px',
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-coral)'
                          }}
                        />
                      )}
                      <span>{pageNum.toString().padStart(2, '0')}</span>
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: 'transparent',
                  color: currentPage === totalPages ? 'rgba(0, 0, 0, 0.25)' : 'var(--text-primary)',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  fontSize: '13px',
                  fontWeight: 700,
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span>NEXT</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </button>
            </div>

            <span
              className="font-label-caps"
              style={{
                fontSize: '11px',
                color: 'var(--text-secondary)',
                letterSpacing: '0.08em'
              }}
            >
              SHOWING PAGE {currentPage} OF {totalPages} • {filteredProjects.length} TOTAL NODES
            </span>
          </div>
        )}

        {/* Bottom Conversion Monolith */}
        <div
          className="card-monolith"
          style={{
            marginTop: 'var(--space-3xl)',
            padding: 'var(--space-3xl) var(--space-xl)',
            borderRadius: 'var(--rounded-xl)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Radial Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(244, 63, 94, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          ></div>

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto' }}>
            <div className="badge-pill-dark" style={{ display: 'inline-flex', marginBottom: 'var(--space-md)' }}>
              <span className="beacon-dot animate-ping-radar"></span>
              <span className="font-label-caps" style={{ color: '#fff' }}>HAVE A PROJECT IN MIND?</span>
            </div>

            <h2 className="font-headline-lg" style={{ color: '#fff', marginBottom: 'var(--space-md)', fontSize: 'clamp(32px, 5vw, 56px)' }}>
              Let's engineer your digital flagship.
            </h2>

            <p className="font-body-lg" style={{ color: 'var(--tertiary-fixed)', marginBottom: 'var(--space-2xl)' }}>
              We partner with ambitious startups, foundations, and enterprises to architect high-conversion web applications, custom design systems, and serious digital games.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-md)' }}>
              <button
                className="btn btn-secondary"
                onClick={() => navigate('/proposal')}
                style={{ height: '52px', padding: '0 32px' }}
              >
                <span>GET A PROPOSAL</span>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
              </button>

              <a
                href="mailto:hello@cyberaliens.in?subject=Discovery%20Call%20Request"
                className="btn btn-surface"
                style={{
                  height: '52px',
                  padding: '0 28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#fff',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_today</span>
                <span>SCHEDULE DISCOVERY CALL</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
