import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Soltura</span>
          <p className={styles.tagline}>AI Solutions & Technology Consulting</p>
          <p className={styles.location}>Annapolis, Maryland</p>
        </div>

        <nav className={styles.nav}>
          <Link href="/#about" className={styles.navLink}>About</Link>
          <Link href="/soltura-os" className={styles.navLink}>Soltura OS</Link>
          <Link href="/#team" className={styles.navLink}>Team</Link>
          <Link href="/demo" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.ctaWrap}>
          <Link href="/demo" className={styles.ctaButton}>Get in Touch</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 Soltura, LLC. All rights reserved.</p>
        <Link href="/privacy" className={styles.privacy}>Privacy</Link>
      </div>
    </footer>
  )
}
