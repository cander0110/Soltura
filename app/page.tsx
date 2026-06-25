import Link from 'next/link'
import styles from './page.module.css'

const problems = [
  'Hours lost to manual counts every week',
  'Compliance violations from undetected variances',
  'Audit prep that takes days, not minutes',
  'No early warning before a discrepancy becomes a fine',
]

const phases = [
  {
    number: '01',
    title: 'Understand your operation',
    body: 'We start by mapping exactly where your inventory process breaks down—manual handoffs, system gaps, compliance blind spots. Most problems are visible in the first walkthrough.',
  },
  {
    number: '02',
    title: 'Deploy Soltura OS',
    body: 'We configure and integrate Soltura OS into your existing workflow. Compliance tracking, variance detection, and reporting all run automatically from day one.',
  },
  {
    number: '03',
    title: 'Run it with you',
    body: 'We stay hands-on through the first 30 days. You get a system that works and a team that knows how to run it—no lingering dependency on us.',
  },
]

const team = [
  {
    name: 'Alex Rivera',
    role: 'Co-founder & CEO',
    bio: 'Former ops lead at three cannabis MSOs. Knows exactly where compliance breaks down at scale.',
  },
  {
    name: 'Jordan Chen',
    role: 'Co-founder & CTO',
    bio: 'Built inventory systems used across 200+ retail locations. Expert in real-time sync and audit trails.',
  },
  {
    name: 'Sam Okafor',
    role: 'Co-founder & Head of Strategy',
    bio: 'Ex-McKinsey, cannabis practice. Helps operators translate regulation into repeatable process.',
  },
  {
    name: 'Taylor Marsh',
    role: 'Co-founder & Head of Product',
    bio: 'Designed compliance tools at Metrc and BioTrackTHC. Believes software should disappear into the workflow.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Soltura OS</span>
            <h1 className={styles.heroHeadline}>
              Inventory Control Shouldn&apos;t Require a Team
            </h1>
            <p className={styles.heroSub}>
              Soltura OS automates compliance tracking and variance detection so your team focuses on operations.
            </p>
            <Link href="/demo" className="btn-primary">Talk to us</Link>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <svg viewBox="0 0 440 340" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroSvg}>
              {/* Shelf / product stack */}
              <rect x="60" y="200" width="320" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
              <rect x="60" y="260" width="320" height="8" rx="4" fill="rgba(255,255,255,0.08)" />

              {/* Products on shelf */}
              <rect x="80" y="160" width="36" height="40" rx="4" fill="rgba(196,168,130,0.5)" />
              <rect x="124" y="150" width="36" height="50" rx="4" fill="rgba(196,168,130,0.35)" />
              <rect x="168" y="165" width="36" height="35" rx="4" fill="rgba(196,168,130,0.5)" />
              <rect x="212" y="155" width="36" height="45" rx="4" fill="rgba(196,168,130,0.3)" />
              <rect x="256" y="162" width="36" height="38" rx="4" fill="rgba(196,168,130,0.45)" />
              <rect x="300" y="148" width="36" height="52" rx="4" fill="rgba(196,168,130,0.35)" />

              {/* Manual clipboard — before state */}
              <g opacity="0.6">
                <rect x="68" y="48" width="80" height="96" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                <rect x="92" y="40" width="32" height="16" rx="4" fill="rgba(255,255,255,0.15)" />
                <line x1="82" y1="74" x2="134" y2="74" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="82" y1="88" x2="128" y2="88" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="82" y1="102" x2="134" y2="102" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="82" y1="116" x2="118" y2="116" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* Arrow / transform */}
              <path d="M185 92 L200 92 M196 87 L202 92 L196 97" stroke="rgba(196,168,130,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Soltura OS dashboard card */}
              <rect x="214" y="44" width="148" height="104" rx="8" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
              {/* Card header */}
              <rect x="214" y="44" width="148" height="28" rx="8" fill="rgba(255,255,255,0.06)" />
              <circle cx="230" cy="58" r="5" fill="rgba(196,168,130,0.7)" />
              <line x1="242" y1="55" x2="280" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="242" y1="62" x2="268" y2="62" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
              {/* Status rows */}
              <circle cx="230" cy="86" r="4" fill="rgba(74,222,128,0.8)" />
              <line x1="242" y1="86" x2="298" y2="86" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="230" cy="104" r="4" fill="rgba(74,222,128,0.8)" />
              <line x1="242" y1="104" x2="290" y2="104" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="230" cy="122" r="4" fill="rgba(251,191,36,0.8)" />
              <line x1="242" y1="122" x2="295" y2="122" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />

              {/* Connecting line from card to shelf */}
              <path d="M288 148 L288 162" stroke="rgba(196,168,130,0.3)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Variance alert badge */}
              <rect x="292" y="220" width="88" height="30" rx="6" fill="rgba(196,168,130,0.2)" stroke="rgba(196,168,130,0.5)" strokeWidth="1" />
              <line x1="306" y1="235" x2="326" y2="235" stroke="rgba(196,168,130,0.8)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="306" y1="243" x2="368" y2="243" stroke="rgba(196,168,130,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className={styles.problem}>
        <div className="container">
          <span className={styles.label}>Why manual inventory fails</span>
          <ul className={styles.problemList}>
            {problems.map((p) => (
              <li key={p} className={styles.problemItem}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Soltura OS Teaser */}
      <section id="product" className={styles.product}>
        <div className="container">
          <div className={styles.productInner}>
            <div className={styles.productLeft}>
              <span className={styles.label}>Soltura OS</span>
              <h2 className={styles.productTitle}>The Inventory Layer You&apos;re Building Anyway</h2>
              <p className={styles.productBody}>
                We&apos;re building this. See it in action, or let&apos;s talk about your specific situation.
              </p>
              <Link href="/soltura-os" className="btn-secondary">Explore Soltura OS →</Link>
            </div>
            <div className={styles.productFeatures}>
              <div className={styles.featureRow}>
                <span className={styles.featureIcon}>◎</span>
                <div>
                  <strong>Automated compliance tracking</strong>
                  <p>Continuous reconciliation against Metrc and your POS. Variances surface before they become violations.</p>
                </div>
              </div>
              <div className={styles.featureRow}>
                <span className={styles.featureIcon}>◈</span>
                <div>
                  <strong>Variance detection at the SKU level</strong>
                  <p>Know exactly which products, locations, and shifts have discrepancies—without a manual count.</p>
                </div>
              </div>
              <div className={styles.featureRow}>
                <span className={styles.featureIcon}>◉</span>
                <div>
                  <strong>Audit-ready reporting in one click</strong>
                  <p>Generate the exact documentation your state requires. No reformatting, no scrambling.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="approach" className={styles.approach}>
        <div className="container">
          <div className={styles.approachHeader}>
            <span className={styles.label}>How we work</span>
            <h2 className={styles.sectionTitle}>Three phases. Ninety days to running.</h2>
          </div>
          <div className={styles.phases}>
            {phases.map((phase) => (
              <div key={phase.number} className={styles.phase}>
                <span className={styles.phaseNumber}>{phase.number}</span>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseBody}>{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className={styles.team}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.label}>Who we are</span>
            <h2 className={styles.sectionTitle}>Built by operators, for operators</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Ready to fix your inventory?</h2>
            <p className={styles.ctaBody}>
              Tell us where your process breaks down. We&apos;ll show you exactly how Soltura OS addresses it.
            </p>
            <Link href="/demo" className="btn-ghost">Schedule a conversation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
