'use client'

import { useState } from 'react'
import styles from './ProductTour.module.css'

const tabs = [
  {
    key: 'overview',
    label: 'Overview',
    image: '/screenshots/dashboard-overview.png',
    caption: 'Daily executive signals — flagged employees, leading issues, and expiring inventory value at a glance.',
  },
  {
    key: 'reconcile',
    label: 'Reconcile',
    image: '/screenshots/dashboard-reconcile.png',
    caption: 'Upload a count file and get instant deterministic findings — 24 of 27 discrepancies explained automatically.',
  },
  {
    key: 'alerts',
    label: 'Alerts',
    image: '/screenshots/dashboard-alerts.png',
    caption: 'Real-time inventory event notifications — restock alerts, package errors, and anomalous transactions as they happen.',
  },
]

export default function ProductTour() {
  const [activeTab, setActiveTab] = useState(tabs[0].key)
  const active = tabs.find((t) => t.key === activeTab) ?? tabs[0]

  return (
    <section className={styles.tour}>
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow">The Product</span>
          <h2 className={styles.headline}>Three views. One complete picture.</h2>
          <p className={styles.subline}>
            Soltura OS organizes your operation into three focused workspaces.
          </p>
        </div>

        <div className={styles.tabRow}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`${styles.tab} ${activeTab === tab.key ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.screenshotWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={active.image} alt={`Soltura OS — ${active.label}`} width="100%" />
        </div>
        <p className={styles.caption}>{active.caption}</p>
      </div>
    </section>
  )
}
