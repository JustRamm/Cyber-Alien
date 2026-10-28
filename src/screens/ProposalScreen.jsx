import React, { useState } from 'react';
import { useRouter } from '../router/RouterContext';

export default function ProposalScreen() {
  const { navigate } = useRouter();

  const [selectedServices, setSelectedServices] = useState(['Web Architecture']);
  const [selectedBudget, setSelectedBudget] = useState('$25,000 - $50,000');
  const [selectedTimeline, setSelectedTimeline] = useState('Q3 Cycle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    brief: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const services = [
    'Web Architecture',
    'Radical Brand World',
    '3D & CGI Motion',
    'Headless CMS',
    'Custom Software',
    'Social Growth Engine'
  ];

  const budgets = [
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const timelines = [
    'Immediate (< 2 Weeks)',
    'Q3 Cycle',
    'Q4 Cycle',
    'Flexible Exploration'
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

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      navigate('/confirmed');
    }, 600);
  }

  return (
    <main style={{ width: '100%', paddingTop: '7rem', backgroundColor: 'var(--surface)' }}>
      <section className="section-padding container-max">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <div className="badge-dispatch" style={{ marginBottom: 'var(--space-md)' }}>
            <span className="beacon-dot animate-ping-radar"></span>
            <span className="font-label-caps">Transmission Configurator // Studio Bookings</span>
          </div>
          <h1 className="font-headline-lg">Initiate A Project Proposal</h1>
          <p className="font-body-lg" style={{ maxWidth: '640px', margin: 'var(--space-sm) auto 0' }}>
            Tell us about your venture, engineering parameters, and timeline. We respond with a dedicated scope blueprint within 24 hours.
          </p>
        </div>

        {/* Configurator Form */}
        <div
          className="card-cream"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            padding: 'var(--space-2xl)',
            borderRadius: 'var(--rounded-xl)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            {/* 1. Services Selection */}
            <div>
              <label className="font-label-caps" style={{ color: 'var(--text-primary)', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                01 // Select Core Domains (Multi-Select)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {services.map((s) => {
                  const active = selectedServices.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      className={`filter-chip ${active ? 'active' : ''}`}
                      onClick={() => toggleService(s)}
                    >
                      {active ? '✓ ' : '+ '} {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Budget Allocation */}
            <div>
              <label className="font-label-caps" style={{ color: 'var(--text-primary)', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                02 // Estimated Capital Bracket (USD)
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {budgets.map((b) => {
                  const active = selectedBudget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      className={`filter-chip ${active ? 'active' : ''}`}
                      onClick={() => setSelectedBudget(b)}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Timeline */}
            <div>
              <label className="font-label-caps" style={{ color: 'var(--text-primary)', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                03 // Deployment Timeline
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {timelines.map((t) => {
                  const active = selectedTimeline === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      className={`filter-chip ${active ? 'active' : ''}`}
                      onClick={() => setSelectedTimeline(t)}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Text Inputs */}
            <div>
              <label className="font-label-caps" style={{ color: 'var(--text-primary)', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>
                04 // Contact Telemetry & Parameters
              </label>
              <div className="grid-12" style={{ gap: 'var(--space-md)' }}>
                <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
                  <div className="form-group">
                    <span className="font-label-caps">Your Full Name *</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      className="input-pill"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div className="col-span-12" style={{ gridColumn: 'span 6' }}>
                  <div className="form-group">
                    <span className="font-label-caps">Organization / Project *</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Synapse Ltd"
                      className="input-pill"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="col-span-12" style={{ gridColumn: 'span 12' }}>
                  <div className="form-group">
                    <span className="font-label-caps">Terminal Email Address *</span>
                    <input
                      type="email"
                      required
                      placeholder="elena@synapse.network"
                      className="input-pill"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="col-span-12" style={{ gridColumn: 'span 12' }}>
                  <div className="form-group">
                    <span className="font-label-caps">Project Brief & Strategic Objectives *</span>
                    <textarea
                      required
                      placeholder="Describe your current architecture, brand ambition, or target launch parameters..."
                      className="textarea-pill"
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--border-subtle)' }}>
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-secondary"
                style={{ minWidth: '220px' }}
              >
                {submitting ? (
                  <span>Transmitting Brief...</span>
                ) : (
                  <>
                    <span>Transmit Brief</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>send</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

