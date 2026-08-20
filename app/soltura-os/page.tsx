import Link from 'next/link'
import ProductTour from '../../components/ProductTour'
import styles from './page.module.css'

const features = [
  {
    label: 'Sales floor monitoring',
    sentence: 'Know the moment inventory hits zero and backstock is ready.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 10a6 6 0 0112 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10z" />
        <path d="M10 19a2 2 0 004 0" />
      </svg>
    ),
  },
  {
    label: 'Transaction anomaly detection',
    sentence: 'Flag large sales, return errors, and suspicious activity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    label: 'Compliance audit support',
    sentence: 'Surface adjustment errors before they become audit findings.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="6" y="4" width="12" height="17" rx="1.5" />
        <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
        <polyline points="9 13 11 15 15 10" />
      </svg>
    ),
  },
]

export default function SolturaOsPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <span className={`eyebrow ${styles.heroEyebrow}`}>Soltura OS</span>
          <h1 className={styles.headline}>Inventory intelligence built for how dispensaries actually operate.</h1>
          <p className={styles.subline}>Three focused workspaces. Every event surfaced in real time.</p>
        </div>
      </section>

      {/* Product Tour */}
      <ProductTour />

      {/* Feature List */}
      <section className={styles.features}>
        <div className={styles.inner}>
          <div className={styles.tileGrid}>
            {features.map((f) => (
              <div key={f.label} className={styles.tile}>
                <div className={styles.tileIcon}>{f.icon}</div>
                <h3 className={styles.tileLabel}>{f.label}</h3>
                <p className={styles.tileSentence}>{f.sentence}</p>
              </div>
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
