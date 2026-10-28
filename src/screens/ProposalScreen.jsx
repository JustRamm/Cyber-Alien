import React, { useState } from 'react';
import { useRouter } from '../router/RouterContext';

export default function ProposalScreen() {
  const { navigate } = useRouter();

  const [selectedServices, setSelectedServices] = useState(['Web Design & Architecture']);
  const [selectedBudget, setSelectedBudget] = useState('$25k - $50k');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    scope: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const services = [
    'Web Design & Architecture',
    'Branding & Identity',
    'Custom Development (Next.js / WebGL)',
    'Anchor Video & CGI',
    'Social Media Growth',
    'Game & Interactive'
  ];

  const budgets = [
    '< $10k',
    '$10k - $25k',
    '$25k - $50k',
    '$50k - $100k+'
  ];

  function toggleService(s) {
    if (selectedServices.includes(s)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(item => item !== s));
      }
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText('hello@cyberaliens.in');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    
    // Package submission telemetry for confirmation screen
    const submissionData = {
      name: formData.name.trim() || 'Sarah Jenkins',
      email: formData.email.trim() || 'sarah.jenkins@studio.io',
      company: formData.company.trim() || 'Studio IO',
      capabilities: selectedServices.length > 0 ? selectedServices : ['Web Design & WebGL', 'Brand Identity & Systems', 'Headless Next.js'],
      budget: selectedBudget ? `${selectedBudget} (Series A / Scaling)` : '$25,000 - $50,000 USD (Series A / Scaling)',
      targetWindow: 'Thursday, Apr 02, 2026 • 10:00 AM - 11:30 AM PST',
      scope: formData.scope.trim() || 'Looking to architect a modular WebGL interactive product showcase and headless CMS ahead of our Q3 product keynote.',
      id: `CA-${Math.floor(1000 + Math.random() * 9000)}`
    };

    try {
      sessionStorage.setItem('cyberalien_submission', JSON.stringify(submissionData));
    } catch (err) {
      console.warn('Could not save submission to sessionStorage', err);
    }

    setTimeout(() => {
      navigate('/confirmed');
    }, 400);
  }

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <section className="section-padding container-max">
        <div className="grid-12" style={{ alignItems: 'flex-start' }}>
          
          {/* =========================================================
              LEFT COLUMN: STUDIO DISPATCH & CONTACT OVERVIEW
              ========================================================= */}
          <div className="col-span-12" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            
            {/* Top Status Pill */}
            <div className="badge-pill-dark" style={{ alignSelf: 'flex-start', background: '#0a0a0a' }}>
              <span className="beacon-dot animate-ping-radar"></span>
              <span className="font-label-caps" style={{ color: '#fff', letterSpacing: '0.12em' }}>
                TRANSMISSION OPEN // STUDIO BOOKING Q1-Q2 2026
              </span>
            </div>

            {/* Huge Headline in Syne */}
            <div>
              <h1
                className="font-display-xl"
                style={{
                  fontSize: 'clamp(44px, 5vw, 68px)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  fontWeight: 800,
                  marginBottom: 'var(--space-md)'
                }}
              >
                TELL US ABOUT YOUR PROJECT
              </h1>
              <p className="font-body-md" style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                We partner with ambitious founders, tech innovators, and culture disruptors to design and engineer category-defining digital experiences. Have an idea, rebrand, or complex web platform? Let's discuss.
              </p>
            </div>

            {/* Direct Transmission Card */}
            <div className="card-cream" style={{ backgroundColor: 'var(--surface-container)', padding: 'var(--space-lg)' }}>
              <span className="font-label-caps" style={{ color: 'var(--outline)', display: 'block', marginBottom: '4px' }}>
                DIRECT TRANSMISSION
              </span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <a
                  href="mailto:hello@cyberaliens.in"
                  className="font-headline-sm"
                  style={{ color: 'var(--text-primary)', fontSize: '20px', fontWeight: 'bold' }}
                >
                  hello@cyberaliens.in
                </a>
                <button
                  type="button"
                  aria-label="Copy Email"
                  onClick={handleCopyEmail}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: copiedEmail ? 'var(--accent-coral)' : 'var(--surface-container-high)',
                    color: copiedEmail ? '#fff' : 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                    {copiedEmail ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--outline)', fontSize: '13px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
                <span>Average response time: &lt; 2 hours during studio cycles.</span>
              </div>
            </div>

            {/* What Happens Next Card */}
            <div className="card-cream" style={{ backgroundColor: 'var(--surface-container)', padding: 'var(--space-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)' }}>
                <span className="font-label-caps" style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>
                  WHAT HAPPENS NEXT
                </span>
                <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
                  3 STEPS
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', shrink: 0 }}>
                    01
                  </div>
                  <div>
                    <h3 className="font-headline-sm" style={{ fontSize: '14px', marginBottom: '2px' }}>Fast triage & initial review</h3>
                    <p className="font-body-sm" style={{ fontSize: '13px' }}>We analyze your brief and technical scope within 24 hours.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', shrink: 0 }}>
                    02
                  </div>
                  <div>
                    <h3 className="font-headline-sm" style={{ fontSize: '14px', marginBottom: '2px' }}>Dedicated private WhatsApp / Slack channel</h3>
                    <p className="font-body-sm" style={{ fontSize: '13px' }}>Instant real-time comms with our design partners and technical leads.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', shrink: 0 }}>
                    03
                  </div>
                  <div>
                    <h3 className="font-headline-sm" style={{ fontSize: '14px', marginBottom: '2px' }}>Collaborative onboarding form & NDA</h3>
                    <p className="font-body-sm" style={{ fontSize: '13px' }}>Swift scoping document to establish milestones, budget lock, and kickoff schedule.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mind Empowered Reinvestment Notice */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: 'var(--space-md)',
                borderRadius: 'var(--rounded-lg)',
                backgroundColor: 'rgba(244, 63, 94, 0.08)',
                border: '1px solid rgba(244, 63, 94, 0.2)'
              }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent-coral)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', shrink: 0 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>volunteer_activism</span>
              </div>
              <p className="font-body-sm" style={{ fontSize: '13px', color: 'var(--text-primary)', margin: 0 }}>
                <strong style={{ color: 'var(--accent-coral)' }}>15% of all studio engagement revenues</strong> directly fund our partnership with <strong>Mind Empowered</strong>.
              </p>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: THE FLOATING PROJECT INQUIRY FORM CARD
              ========================================================= */}
          <div className="col-span-12" style={{ gridColumn: 'span 7' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 'var(--rounded-xl)',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                boxShadow: '0 24px 64px -12px rgba(17, 17, 17, 0.1), 0 8px 24px -4px rgba(17, 17, 17, 0.04)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Form Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="beacon-dot animate-pulse-soft"></span>
                  <span className="font-headline-sm" style={{ fontSize: '16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    PROJECT INQUIRY
                  </span>
                </div>
                <div className="badge-dispatch" style={{ background: 'var(--surface-container-low)', padding: '4px 12px' }}>
                  <span className="font-label-caps" style={{ color: 'var(--outline)' }}>EST. TIME: 2 MIN</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                {/* Name & Email Row */}
                <div className="grid-12" style={{ gap: 'var(--space-md)' }}>
                  <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
                    <div className="form-group">
                      <span className="font-label-caps" style={{ fontWeight: 'bold' }}>YOUR NAME *</span>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Rivera"
                        className="input-pill"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ backgroundColor: 'var(--surface-container-low)' }}
                      />
                    </div>
                  </div>

                  <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
                    <div className="form-group">
                      <span className="font-label-caps" style={{ fontWeight: 'bold' }}>WORK EMAIL *</span>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        className="input-pill"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ backgroundColor: 'var(--surface-container-low)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name */}
                <div className="form-group">
                  <span className="font-label-caps" style={{ fontWeight: 'bold' }}>COMPANY OR PROJECT NAME</span>
                  <input
                    type="text"
                    placeholder="e.g. Obsidian Labs"
                    className="input-pill"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ backgroundColor: 'var(--surface-container-low)' }}
                  />
                </div>

                {/* Services Needed */}
                <div>
                  <span className="font-label-caps" style={{ fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>
                    SERVICES NEEDED
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {services.map((s) => {
                      const isSelected = selectedServices.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          className={`filter-chip ${isSelected ? 'active' : ''}`}
                          onClick={() => toggleService(s)}
                          style={{
                            backgroundColor: isSelected ? 'var(--primary)' : 'var(--surface-container-low)',
                            color: isSelected ? '#ffffff' : 'var(--text-primary)',
                            borderColor: isSelected ? 'var(--primary)' : 'transparent',
                            borderRadius: 'var(--rounded-full)',
                            padding: '8px 18px'
                          }}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Estimated Budget Range */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="font-label-caps" style={{ fontWeight: 'bold' }}>
                      ESTIMATED BUDGET RANGE
                    </span>
                    <span className="font-label-caps" style={{ color: 'var(--accent-coral)', fontWeight: 'bold' }}>
                      FLEXIBLE ALLOCATION
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                    {budgets.map((b) => {
                      const isSelected = selectedBudget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          className={`filter-chip ${isSelected ? 'active' : ''}`}
                          onClick={() => setSelectedBudget(b)}
                          style={{
                            backgroundColor: isSelected ? 'var(--primary)' : 'var(--surface-container-low)',
                            color: isSelected ? '#ffffff' : 'var(--text-primary)',
                            borderColor: isSelected ? 'var(--primary)' : 'transparent',
                            borderRadius: 'var(--rounded-full)',
                            padding: '10px 14px',
                            textAlign: 'center'
                          }}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Details */}
                <div className="form-group">
                  <span className="font-label-caps" style={{ fontWeight: 'bold' }}>PROJECT DETAILS / SCOPE *</span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your vision, timeline, goals, and any reference links..."
                    className="textarea-pill"
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    style={{ backgroundColor: 'var(--surface-container-low)' }}
                  ></textarea>
                </div>

                {/* Drag and drop RFP or Pitch Deck */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                      setFileName(e.dataTransfer.files[0].name);
                    }
                  }}
                  style={{
                    border: `1.5px dashed ${dragOver ? 'var(--accent-coral)' : 'var(--outline-variant)'}`,
                    borderRadius: 'var(--rounded-lg)',
                    padding: 'var(--space-lg)',
                    backgroundColor: dragOver ? 'rgba(244, 63, 94, 0.04)' : 'var(--surface-container-low)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)'
                  }}
                  onClick={() => document.getElementById('rfp-file-input').click()}
                >
                  <input
                    type="file"
                    id="rfp-file-input"
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                  />
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-container)', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>upload_file</span>
                  </div>
                  <p className="font-body-sm" style={{ fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {fileName ? `Attached: ${fileName}` : 'Have an RFP or pitch deck? Drag & drop or attach files'}
                  </p>
                  <p className="font-label-caps" style={{ color: 'var(--outline)' }}>
                    PDF, FIGMA, ZIP UP TO 50MB
                  </p>
                </div>

                {/* Send Request Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    height: '56px',
                    borderRadius: 'var(--rounded-full)',
                    backgroundColor: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  {submitting ? (
                    <span>DISPATCHING TRANSMISSION...</span>
                  ) : (
                    <>
                      <span>SEND REQUEST</span>
                      <span className="beacon-dot"></span>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                    </>
                  )}
                </button>

                {/* NDA footer notice */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: 'var(--outline)', fontSize: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px', color: 'var(--accent-coral)' }}>lock</span>
                  <span>Strict NDA protected. We respect your confidentiality. Zero spam guaranteed.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
