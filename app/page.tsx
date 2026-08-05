import Link from 'next/link'
import styles from './page.module.css'

const tiles = [
  {
    label: 'Inventory Intelligence',
    sentence: 'Real-time visibility into the stock events your POS captures but doesn\'t surface.',
    href: '#soltura-os',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
        <path d="M4 20V10M12 20V4M20 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Compliance Automation',
    sentence: 'Automated flagging of adjustment errors, movement anomalies, and audit risks.',
    href: '#soltura-os',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
        <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Dutchie Integration',
    sentence: 'We extend what Dutchie already does — without disrupting what\'s already working.',
    href: '#soltura-os',
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
        <path d="M9 3v4M15 3v4M7 7h10v3a5 5 0 01-10 0V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

const howWeDoIt = [
  {
    title: 'Audit record accuracy',
    body: 'LLM-assisted analysis of inventory adjustments and compliance records — flagging errors, missing comments, and high-risk transactions before they become audit problems.',
  },
  {
    title: 'Automated inventory intelligence',
    body: 'Real-time monitoring of stock levels, package movement, and restocking needs — with notifications routed to the right people at the right time, not buried in a report.',
  },
  {
    title: 'Operational data visibility',
    body: 'In-house analytics that surface what your POS system captures but doesn\'t show you — transaction anomalies, shrinkage patterns, and reconciliation gaps across your operation.',
  },
]

const osFeatures = [
  {
    title: 'Sales floor monitoring',
    body: 'Know the moment inventory hits zero and backstock is available.',
  },
  {
    title: 'Transaction anomaly detection',
    body: 'Flag large sales, suspicious activity, and return errors in real time.',
  },
  {
    title: 'Compliance audit support',
    body: 'Surface adjustment errors and package movement issues before they compound.',
  },
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
          <span className={styles.eyebrow}>AI Solutions & Technology Consulting</span>
          <h1 className={styles.heroHeadline}>
            We build what your operation is missing.
          </h1>
          <p className={styles.heroSub}>
            Soltura OS gives dispensaries the inventory intelligence Dutchie doesn&apos;t.
          </p>
          <Link href="/soltura-os" className={styles.heroCta}>
            See what we&apos;ve built <span className={styles.heroCtaArrow}>→</span>
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
            <span className={styles.aboutEyebrow}>About Soltura</span>
            <h2 className={styles.aboutHeadline}>Built by people who&apos;ve been in the room.</h2>
            <p className={styles.aboutBody}>
              Soltura was founded by four professionals with backgrounds in dispensary operations, software engineering, financial strategy, and technology leadership. We understand the problem before we build the solution.
            </p>
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
            <span className={styles.whatWeDoEyebrow}>What We Do</span>
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
                <Link href={tile.href} className={styles.tileLink}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section id="how" className={styles.how}>
        <div className="container">
          <div className={styles.howHeader}>
            <span className={styles.label}>How We Do It</span>
            <h2 className={styles.sectionTitle}>Specific tools. Measurable outcomes.</h2>
            <p className={styles.howIntro}>
              We don&apos;t offer generic solutions. Every engagement starts with understanding your operation — your data, your workflows, your pain points. From there we build or configure systems that address the exact problems costing you time and revenue.
            </p>
          </div>
          <div className={styles.howGrid}>
            {howWeDoIt.map((item) => (
              <div key={item.title} className={styles.howCard}>
                <h3 className={styles.howTitle}>{item.title}</h3>
                <p className={styles.howBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soltura OS */}
      <section id="soltura-os" className={styles.product}>
        <div className={styles.productContent}>
          <span className={styles.productEyebrow}>Our Product</span>
          <h2 className={styles.productHeadline}>Soltura OS</h2>
          <p className={styles.productSubheadline}>Inventory intelligence for Dutchie-based dispensaries.</p>
          <p className={styles.productBody}>
            Soltura OS integrates directly with your existing Dutchie instance — adding real-time monitoring, automated alerts, and compliance flagging without changing your current workflow.
          </p>
          <div className={styles.productFeatures}>
            {osFeatures.map((f) => (
              <div key={f.title} className={styles.featureRow}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
          <Link href="/demo" className={styles.productCta}>Request a Demo</Link>
        </div>
        <div className={styles.productVisual}>
          {/* Replace with real dashboard screenshot */}
          <div className={styles.dashboardMock} aria-hidden="true">
            <span className={styles.dashboardLabel}>Soltura OS — Live Feed</span>
            <div className={styles.dashboardRow}>
              <span className={`${styles.dashboardDot} ${styles.dashboardDotGold}`} />
              <span className={styles.dashboardText}>Restock alert — Sales Floor A</span>
              <span className={styles.dashboardTime}>2m ago</span>
            </div>
            <div className={styles.dashboardRow}>
              <span className={`${styles.dashboardDot} ${styles.dashboardDotGreen}`} />
              <span className={styles.dashboardText}>Transaction reconciled</span>
              <span className={styles.dashboardTime}>14m ago</span>
            </div>
            <div className={styles.dashboardRow}>
              <span className={`${styles.dashboardDot} ${styles.dashboardDotGold}`} />
              <span className={styles.dashboardText}>Adjustment flagged for review</span>
              <span className={styles.dashboardTime}>26m ago</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className={styles.team}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.teamEyebrow}>The Team</span>
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
          <h2 className={styles.ctaTitle}>Let&apos;s talk about what your operation needs.</h2>
          <p className={styles.ctaBody}>
            We&apos;d rather understand your operation before we tell you what we can do for it.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/demo" className={styles.ctaPrimary}>Start the Conversation</Link>
            <a href="mailto:hello@soltura.ai" className={styles.ctaEmail}>or email us directly</a>
          </div>
        </div>
      </section>
    </>
  )
}
