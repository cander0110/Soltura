'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          Soltura
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link href="/#problem" className={styles.link} onClick={() => setMenuOpen(false)}>Problem</Link>
          <Link href="/#approach" className={styles.link} onClick={() => setMenuOpen(false)}>How We Work</Link>
          <Link href="/#team" className={styles.link} onClick={() => setMenuOpen(false)}>Team</Link>
          <Link href="/soltura-os" className={styles.link} onClick={() => setMenuOpen(false)}>Soltura OS</Link>
          <Link href="/demo" className={styles.cta} onClick={() => setMenuOpen(false)}>Schedule a Demo</Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.bar1open : styles.bar1} />
          <span className={menuOpen ? styles.bar2open : styles.bar2} />
          <span className={menuOpen ? styles.bar3open : styles.bar3} />
        </button>
      </div>
    </nav>
  )
}
