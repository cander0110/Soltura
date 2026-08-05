import Link from 'next/link'
import styles from './page.module.css'

const features = [
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

export default function SolturaOsPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <span className={styles.eyebrow}>Our Product</span>
          <h1 className={styles.headline}>Soltura OS</h1>
          <p className={styles.subheadline}>Inventory intelligence for Dutchie-based dispensaries.</p>
          <p className={styles.body}>
            Soltura OS integrates directly with your existing Dutchie instance — adding real-time monitoring, automated alerts, and compliance flagging without changing your current workflow.
          </p>
          <Link href="/demo" className={styles.headerCta}>Request a Demo</Link>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live feed visual */}
      <section className={styles.visual}>
        <div className={styles.visualInner}>
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

      {/* Closing CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>See if Soltura OS fits your operation.</h2>
          <Link href="/demo" className={styles.ctaButton}>Request a Demo</Link>
        </div>
      </section>
    </div>
  )
}
