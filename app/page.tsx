import { Fragment } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import ProductTour from '../components/ProductTour'

const tiles = [
  {
    label: 'Inventory Intelligence',
    sentence: 'Know what is selling, what is stocking out, and what needs attention before your team does.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="12" width="4" height="9" rx="0.5" />
        <rect x="10" y="7" width="4" height="14" rx="0.5" />
        <rect x="17" y="3" width="4" height="18" rx="0.5" />
      </svg>
    ),
  },
  {
    label: 'Compliance Automation',
    sentence: 'Automated flagging of adjustment errors, movement anomalies, and audit risks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L4 5v6c0 5 3.5 9.74 8 11 4.5-1.26 8-6 8-11V5L12 2z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: 'Dutchie Integration',
    sentence: 'We extend what Dutchie already does — without disrupting what is already working.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M18 6L6 18M8 6v4M16 14v4M5 9h4M15 15h4" />
      </svg>
    ),
  },
  {
    label: 'Audit record accuracy',
    sentence: 'Errors flagged before they become compliance problems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="6" y="4" width="12" height="17" rx="1.5" />
        <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
        <polyline points="9 13 11 15 15 10" />
      </svg>
    ),
  },
  {
    label: 'Automated inventory intelligence',
    sentence: 'Real-time alerts when stock, packages, or returns need attention.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 10a6 6 0 0112 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10z" />
        <path d="M10 19a2 2 0 004 0" />
      </svg>
    ),
  },
  {
    label: 'Operational data visibility',
    sentence: 'Transaction anomalies, shrinkage patterns, and reconciliation gaps — surfaced automatically.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
]

const osFeatures = [
  { label: 'Sales floor monitoring' },
  { label: 'Transaction anomaly detection' },
  { label: 'Compliance audit support' },
]

const liveFeed = [
  { color: 'gold', text: 'Restock alert — Sales Floor A', time: '2m ago' },
  { color: 'green', text: 'Transaction reconciled', time: '14m ago' },
  { color: 'gold', text: 'Adjustment flagged for review', time: '26m ago' },
]

const timelineStats = [
  { label: 'Units sold', value: '9', color: '#22c55e' },
  { label: 'Remove events', value: '5', color: 'var(--tl-critical)' },
  { label: 'Cart clears', value: '2', color: 'var(--tl-warn)' },
  { label: 'Cross-employee', value: '3×', color: 'var(--tl-critical)' },
]

const timelineRows = [
  { time: '9:44 AM', badge: 'info', label: 'INFO', employee: 'Employee A', cross: false, register: 'Register 1', receipt: '0000001' },
  { time: '9:52 AM', badge: 'warn', label: 'WARN', employee: 'Employee B +Employee C', cross: true, register: 'Register 2', receipt: '0000002' },
  { time: '9:56 AM', badge: 'critical', label: 'CRITICAL', employee: 'Employee D → Employee E', cross: true, register: 'Register 3', receipt: '0000003' },
  { time: '12:11 PM', badge: 'info', label: 'INFO', employee: 'Employee F', cross: false, register: 'Register 4', receipt: '0000004', gapAfter: true },
  { time: '2:02 PM', badge: 'critical', label: 'REMOVE', employee: 'Employee G', cross: true, register: 'Register 4', receipt: '0000004' },
  { time: '7:36 PM', badge: 'critical', label: 'REMOVE', employee: 'Employee C', cross: false, register: 'Register 2', receipt: '0000002' },
]

const team = [
  { name: 'Liam Cox', role: 'CEO & CIO' },
  { name: 'Connor Anderson', role: 'CFO' },
  { name: 'Chris Mudd', role: 'CTO' },
  { name: 'Joe Perzanowski', role: 'COO' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className="eyebrow">AI Solutions & Technology Consulting</span>
          <h1 className={styles.heroHeadline}>
            We build what your operation is missing.
          </h1>
          <p className={styles.heroSub}>
            Soltura OS gives dispensaries the inventory intelligence Dutchie does not.
          </p>
          <Link href="/soltura-os" className={styles.heroCta}>
            See what we have built <span className={styles.heroCtaArrow}>→</span>
          </Link>
        </div>
        <div className={styles.heroImageWrap}>
          {/* Replace gradient with real team photo — outdoor, natural light, aspect ratio ~3:2 */}
          <div className={styles.heroImagePlaceholder} aria-hidden="true" />
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutInner}>
            <span className="eyebrow">About Soltura</span>
            <h2 className={styles.aboutHeadline}>Built by people who have been in the room.</h2>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>15+</span>
                <span className={styles.statLabel}>Years combined dispensary experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>4</span>
                <span className={styles.statLabel}>Founders</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>1</span>
                <span className={styles.statLabel}>Focused product</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className={styles.whatWeDo}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">What We Do</span>
            <h2 className={styles.whatWeDoHeadline}>What can we build together?</h2>
            <p className={styles.whatWeDoSub}>
              We solve operational problems with AI-powered software and strategic consulting.
            </p>
          </div>
          <div className={styles.tileGrid}>
            {tiles.map((tile) => (
              <div key={tile.label} className={styles.tile}>
                <div className={styles.tileIcon}>{tile.icon}</div>
                <h3 className={styles.tileLabel}>{tile.label}</h3>
                <p className={styles.tileSentence}>{tile.sentence}</p>
              </div>
            ))}
          </div>
          <p className={styles.tileCta}>
            Want to see how we do it? → <Link href="/demo" className={styles.tileCtaLink}>Request a Demo</Link>
          </p>
        </div>
      </section>

      {/* Soltura OS */}
      <section id="soltura-os" className={styles.product}>
        <div className={styles.productContent}>
          <span className="eyebrow">Our Product</span>
          <h2 className={styles.productHeadline}>Soltura OS</h2>
          <p className={styles.productSubheadline}>Inventory intelligence for Dutchie-based dispensaries.</p>
          <p className={styles.productBody}>
            Integrates directly with your Dutchie instance. No workflow changes. No write access to your system.
          </p>
          <div className={styles.featureList}>
            {osFeatures.map((f) => (
              <span key={f.label} className={styles.featureItem}>{f.label}</span>
            ))}
          </div>
          <Link href="/demo" className={styles.productCta}>Request a Demo</Link>
        </div>
        <div className={styles.productVisual}>
          <div className={styles.dashboardMock}>
            <span className={styles.dashboardLabel}>Soltura OS — Live Feed</span>
            {liveFeed.map((item) => (
              <div className={styles.dashboardRow} key={item.text}>
                <span className={`${styles.dashboardDot} ${item.color === 'green' ? styles.dashboardDotGreen : styles.dashboardDotGold}`} />
                <span className={styles.dashboardText}>{item.text}</span>
                <span className={styles.dashboardTime}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See It In Action — investigation timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineHeader}>
          <span className={styles.timelineEyebrow}>See It In Action</span>
          <h2 className={styles.timelineHeadline}>Every event. Every employee. Every second.</h2>
          <p className={styles.timelineSubline}>
            Soltura OS surfaces the full transaction history behind any inventory discrepancy — so investigations take minutes, not hours.
          </p>
        </div>

        <div className="sol-tl">
          <div className="sol-tl-topbar">
            <span className="sol-tl-topbar-left">PACKAGE INVESTIGATION</span>
            <span className="sol-tl-topbar-right">Greenway Dispensary · License MD-00-00000</span>
          </div>

          <div className="sol-tl-pkg-header">
            <div className="sol-tl-pkg-name">Example Brand | Pre Pack — 3.5g Flower</div>
            <div className="sol-tl-pkg-id">1A000000000000X000000000 · August 2026</div>
            <div className="sol-tl-stats">
              {timelineStats.map((s) => (
                <div className="sol-tl-stat" key={s.label}>
                  <div className="sol-tl-stat-label">{s.label}</div>
                  <div className="sol-tl-stat-value" style={{ color: s.color }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sol-tl-summary">
            <span className="sol-tl-summary-badge">AI</span>
            <span className="sol-tl-summary-text">
              17 cart events across 8 employees. Receipt #0000031 — item held 111 min before removal. 3 cross-employee removes flagged.
            </span>
          </div>

          <div className="sol-tl-table">
            <div className="sol-tl-columns">
              <span className="sol-tl-col-head">TIME</span>
              <span className="sol-tl-col-head">ACTION</span>
              <span className="sol-tl-col-head">EMPLOYEE</span>
              <span className="sol-tl-col-head">REGISTER</span>
              <span className="sol-tl-col-head">RECEIPT</span>
            </div>

            {timelineRows.map((row, i) => (
              <Fragment key={i}>
                <div className={`sol-tl-row${row.badge === 'critical' ? ' sol-tl-row-critical' : row.badge === 'warn' ? ' sol-tl-row-warn' : ''}`}>
                  <span className="sol-tl-time">{row.time}</span>
                  <span className={`sol-tl-badge sol-tl-badge-${row.badge}`}>{row.label}</span>
                  <span className="sol-tl-employee">
                    {row.employee}
                    {row.cross && <span className="sol-tl-cross">CROSS-EMP</span>}
                  </span>
                  <span className="sol-tl-register">{row.register}</span>
                  <span className="sol-tl-receipt">{row.receipt}</span>
                </div>
                {row.gapAfter && (
                  <div className="sol-tl-gap">
                    <span className="sol-tl-gap-line" />
                    <span>⚠ 111 min gap — item in open cart</span>
                    <span className="sol-tl-gap-line" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Product Tour */}
      <ProductTour />

      {/* Team */}
      <section id="team" className={styles.team}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className="eyebrow">The Team</span>
            <h2 className={styles.teamHeadline}>The people behind the product.</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                {/* Replace with real headshot — outdoor, natural light */}
                <div className={styles.teamPhoto} aria-hidden="true">
                  <span className={styles.teamInitials}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Let us talk about what your operation needs.</h2>
          <div className={styles.ctaButtons}>
            <Link href="/demo" className={styles.ctaPrimary}>Start the Conversation</Link>
            <a href="mailto:hello@soltura.ai" className={styles.ctaEmail}>or email us directly</a>
          </div>
        </div>
      </section>
    </>
  )
}
