import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Soltura</span>
          <p className={styles.tagline}>AI consulting for organizations that want to move fast and build right.</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h4 className={styles.colHead}>Company</h4>
            <Link href="/#services" className={styles.footLink}>Services</Link>
            <Link href="/#approach" className={styles.footLink}>Approach</Link>
            <Link href="/#team" className={styles.footLink}>Team</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colHead}>Products</h4>
            <Link href="/soltura-os" className={styles.footLink}>Soltura OS</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colHead}>Connect</h4>
            <Link href="/demo" className={styles.footLink}>Schedule a Demo</Link>
            <a href="mailto:hello@soltura.ai" className={styles.footLink}>hello@soltura.ai</a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {new Date().getFullYear()} Soltura. All rights reserved.</p>
      </div>
    </footer>
  )
}
