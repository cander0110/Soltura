import Link from 'next/link'
import styles from './page.module.css'

const stats = [
  { value: '15+', label: 'Years combined industry experience' },
  { value: '4', label: 'Founders' },
  { value: '1', label: 'Focused product' },
]

const team = [
  { name: 'Liam Cox', role: 'CEO & CIO' },
  { name: 'Connor Anderson', role: 'CFO' },
  { name: 'Chris Mudd', role: 'CTO' },
  { name: 'Joe Perzanowski', role: 'COO' },
]

const principles = [
  'We build for the problem, not the market.',
  'We do not write to your system without approval.',
  'We started in dispensaries. We know what the job actually looks like.',
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={`eyebrow ${styles.heroEyebrow}`}>About Soltura</span>
          <h1 className={styles.headline}>Built by people who have been in the room.</h1>
          <p className={styles.subline}>Four founders. Deep industry roots. One focused product.</p>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={`${styles.inner} ${styles.statsGrid}`}>
          {stats.map((s) => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.statNum}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className={styles.inner}>
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
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company / Approach */}
      <section className={styles.company}>
        <div className={`${styles.inner} ${styles.companyGrid}`}>
          <div className={styles.companyLeft}>
            <span className="eyebrow">Our Approach</span>
            <h2 className={styles.companyHeadline}>Narrow focus. Real results.</h2>
            <p className={styles.companyBody}>
              We started with the inventory problems dispensaries told us were costing them the most time. Soltura OS is the result — a product built from operational experience, not assumptions.
            </p>
          </div>
          <div className={styles.companyRight}>
            {principles.map((p) => (
              <p className={styles.principle} key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Let us talk about what your operation needs.</h2>
          <div className={styles.ctaButtons}>
            <Link href="/demo" className={styles.ctaPrimary}>Start the Conversation</Link>
            <a href="mailto:hello@soltura.ai" className={styles.ctaEmail}>or email us directly</a>
          </div>
        </div>
      </section>
    </div>
  )
}
