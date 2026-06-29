import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>Soltura</span>
          <p className={styles.tagline}>AI Solutions & Technology Consulting</p>
          <p className={styles.location}>Annapolis, Maryland</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h4 className={styles.colHead}>Company</h4>
            <Link href="/#about" className={styles.footLink}>About</Link>
            <Link href="/#what-we-do" className={styles.footLink}>What We Do</Link>
            <Link href="/#team" className={styles.footLink}>Team</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colHead}>Product</h4>
            <Link href="/soltura-os" className={styles.footLink}>Soltura OS</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.colHead}>Contact</h4>
            <Link href="/demo" className={styles.footLink}>Get in Touch</Link>
            <a href="mailto:hello@soltura.ai" className={styles.footLink}>hello@soltura.ai</a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copy}>© {new Date().getFullYear()} Soltura, LLC. All rights reserved.</p>
        <Link href="/privacy" className={styles.privacy}>Privacy</Link>
      </div>
    </footer>
  )
}
