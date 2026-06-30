import Link from 'next/link'
import styles from './page.module.css'

const services = [
  {
    title: 'AI-Powered Software',
    body: 'We design and build intelligent systems that surface the information your team needs — when they need it. From real-time monitoring to automated alerts, our software works within your existing infrastructure, not around it.',
  },
  {
    title: 'Dutchie Integration & Optimization',
    body: 'We extend what Dutchie already does. Our solutions connect directly to your existing instance, adding visibility, automation, and control that the platform doesn\'t offer out of the box.',
  },
  {
    title: 'Strategic Technology Consulting',
    body: 'Not every problem needs a new system. Sometimes it needs a clearer view of the one you already have. We work with operations teams to identify gaps, build solutions, and improve how people and technology work together.',
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
    title: 'Real-time transaction monitoring',
    body: 'Catch large transactions, suspicious activity, and return errors as they happen — not at the end of a shift.',
  },
  {
    title: 'Automated restock notifications',
    body: 'Know the moment a sales floor product hits zero and backstock is available to fill it. No more silent stockouts.',
  },
  {
    title: 'Intelligent compliance flagging',
    body: 'Automatically surface missing adjustment comments, package movement errors, and negative inventory events before they compound.',
  },
]

const team = [
  {
    name: 'James Whitfield',
    role: 'CEO & CIO',
    bio: 'Technology leadership and product vision. James drives the strategic direction of Soltura\'s platform and oversees all engineering decisions.',
  },
  {
    name: 'Daniel Marsh',
    role: 'CFO',
    bio: 'Financial strategy and operations. Daniel manages Soltura\'s financial infrastructure and brings an accounting and business background to every engagement.',
  },
  {
    name: 'Ryan Calloway',
    role: 'CTO',
    bio: 'Systems architecture and software development. Ryan leads the technical build of Soltura OS and all client-facing integrations.',
  },
  {
    name: 'Marcus Teller',
    role: 'COO',
    bio: 'Operations and product development. Marcus brings direct dispensary management experience and drives the operational requirements behind Soltura OS.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>AI Solutions & Technology Consulting</span>
            <h1 className={styles.heroHeadline}>
              We build the tools that make your operations run smarter.
            </h1>
            <p className={styles.heroSub}>
              Soltura delivers AI-powered software and strategic consulting for businesses ready to move beyond manual processes. Our first product, Soltura OS, is already changing how dispensaries manage inventory, compliance, and operations.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/soltura-os" className="btn-primary">See Soltura OS →</Link>
              <Link href="/demo" className="btn-secondary">Get in Touch</Link>
            </div>
          </div>
          <div className={styles.heroImageWrap}>
            {/* Photo placeholder — replace with team/location image after shoot */}
            <div className={styles.heroImagePlaceholder} aria-hidden="true">
              <span>Team photo coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className={styles.about}>
        <div className="container">
          <div className={styles.aboutInner}>
            <div className={styles.aboutLeft}>
              <span className={styles.label}>About Soltura</span>
              <h2 className={styles.sectionTitle}>A specialized team. A clear focus.</h2>
            </div>
            <div className={styles.aboutRight}>
              <p className={styles.aboutBody}>
                We are a technology consulting firm and software development company built on one belief: AI should solve real operational problems, not add complexity. Soltura was founded by four professionals with backgrounds spanning dispensary operations, software engineering, financial systems, and technology leadership.
              </p>
              <p className={styles.aboutBody}>
                We partner with businesses to identify where intelligent automation and data visibility create the most value — then we build it.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>15+</span>
                  <span className={styles.statLabel}>Years of combined dispensary operations experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>4</span>
                  <span className={styles.statLabel}>Founders with hands-on industry and technology backgrounds</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>1</span>
                  <span className={styles.statLabel}>Focused product built for the problems that matter most right now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.label}>What We Do</span>
            <h2 className={styles.sectionTitle}>Broad capability. Specific results.</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceBody}>{s.body}</p>
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
        <div className="container">
          <div className={styles.productHeader}>
            <span className={styles.label}>Our Product</span>
            <h2 className={styles.sectionTitle}>Soltura OS — Inventory Intelligence for Dutchie-Based Dispensaries</h2>
            <p className={styles.productSub}>Built for how dispensaries actually operate.</p>
          </div>
          <div className={styles.productInner}>
            <div className={styles.productBody}>
              <p>
                Soltura OS integrates directly with your existing Dutchie instance, extending its capabilities without disrupting your current workflow. Your team gets real-time visibility into the inventory events that matter most — so they can focus on what they do best.
              </p>
            </div>
            <div className={styles.productFeatures}>
              {osFeatures.map((f) => (
                <div key={f.title} className={styles.featureRow}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureBody}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.productCta}>
            <p>Ready to see what Soltura OS can do for your operation?</p>
            <Link href="/demo" className="btn-primary">Request a Demo →</Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className={styles.team}>
        <div className="container">
          <div className={styles.teamHeader}>
            <span className={styles.label}>The Team</span>
            <h2 className={styles.sectionTitle}>Built by people who&apos;ve been in the room.</h2>
            <p className={styles.teamSub}>
              Our founders bring a mix of dispensary operations, software engineering, financial strategy, and technology leadership — which means we understand the problem before we build the solution.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                {/* Photo placeholder — replace with headshot after team shoot */}
                <div className={styles.teamPhoto} aria-hidden="true">
                  <span className={styles.teamInitials}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
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
            <h2 className={styles.ctaTitle}>Let&apos;s talk about what&apos;s possible for your operation.</h2>
            <p className={styles.ctaBody}>
              Whether you&apos;re running a single dispensary or a multi-location group, we&apos;d like to understand your operation before we tell you what we can do for it.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/demo" className="btn-ghost">Start the Conversation →</Link>
              <a href="mailto:hello@soltura.ai" className={styles.ctaEmail}>hello@soltura.ai</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
