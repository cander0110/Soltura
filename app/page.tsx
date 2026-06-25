import Link from 'next/link'
import styles from './page.module.css'

const services = [
  {
    icon: '◈',
    title: 'AI Strategy',
    description: 'We map your organization\'s AI opportunity landscape—identifying where AI creates real leverage, where it doesn\'t, and what to build in what order.',
    bullets: ['Opportunity assessment', 'Build vs. buy analysis', 'Roadmap development'],
  },
  {
    icon: '◉',
    title: 'Implementation',
    description: 'From prototype to production. We build the integrations, pipelines, and systems that put AI to work inside your actual workflows.',
    bullets: ['Custom AI integrations', 'LLM workflow design', 'Production deployment'],
  },
  {
    icon: '◎',
    title: 'Team Training',
    description: 'The organizations that win with AI are the ones where everyone knows how to use it. We train your teams to think in AI—not just use tools.',
    bullets: ['Hands-on workshops', 'Prompt engineering', 'AI literacy programs'],
  },
]

const approachSteps = [
  {
    number: '01',
    title: 'Understand before we build',
    body: 'We spend the first two weeks embedded in your operations—watching how work actually gets done, where time goes, where quality breaks down. Most AI failures start with a wrong diagnosis.',
  },
  {
    number: '02',
    title: 'Build for the actual user',
    body: 'Every system we build is designed around the person using it. That means fast feedback loops, interfaces that fit existing habits, and outputs that are immediately actionable.',
  },
  {
    number: '03',
    title: 'Deploy with accountability',
    body: 'We stay engaged through go-live and beyond. We track what\'s working, fix what isn\'t, and refine until your team is genuinely dependent on what we built—because it works.',
  },
  {
    number: '04',
    title: 'Transfer, don\'t create dependency',
    body: 'Our goal is to leave you more capable, not more reliant on consultants. Every engagement ends with documentation, training, and systems your team can run and extend themselves.',
  },
]

const team = [
  {
    name: 'Alex Rivera',
    role: 'Co-founder & CEO',
    bio: 'Former ML lead at two Series B startups. Built AI systems used by 50M+ people.',
  },
  {
    name: 'Jordan Chen',
    role: 'Co-founder & CTO',
    bio: 'Previously at Anthropic. Expert in LLM systems and production AI infrastructure.',
  },
  {
    name: 'Sam Okafor',
    role: 'Co-founder & Head of Strategy',
    bio: 'Ex-McKinsey digital practice. Bridges business strategy and AI implementation.',
  },
  {
    name: 'Taylor Marsh',
    role: 'Co-founder & Head of Design',
    bio: 'Built AI products at Notion and Linear. Believes great AI is invisible AI.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>AI Consulting</span>
            <h1 className={styles.heroHeadline}>
              The AI gap between <em>knowing</em> and <em>doing</em> is where we work.
            </h1>
            <p className={styles.heroSub}>
              Soltura helps ambitious organizations move from AI curiosity to AI advantage. We build the systems, train the teams, and stay until it works.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn-primary">Start the conversation</Link>
              <Link href="/soltura-os" className="btn-secondary">See Soltura OS →</Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardDot} />
              <div className={styles.heroCardLines}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className={styles.heroCardShadow} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.label}>What we do</span>
            <h2 className={styles.sectionTitle}>Three ways we create impact</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.description}</p>
                <ul className={styles.serviceBullets}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className={styles.approach}>
        <div className="container">
          <div className={styles.approachLayout}>
            <div className={styles.approachLeft}>
              <span className={styles.label}>How we work</span>
              <h2 className={styles.sectionTitle}>A methodology built on what actually works</h2>
              <p className={styles.approachIntro}>
                Most AI projects fail not because the technology is wrong, but because the process is. We've built our approach around the failure patterns we've seen—and eliminated them.
              </p>
              <Link href="/contact" className="btn-primary">Work with us</Link>
            </div>
            <div className={styles.approachRight}>
              {approachSteps.map((step) => (
                <div key={step.number} className={styles.approachStep}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepBody}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className={styles.team}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.label}>Who we are</span>
            <h2 className={styles.sectionTitle}>Practitioners, not theorists</h2>
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

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Ready to stop waiting on AI?</h2>
            <p className={styles.ctaBody}>
              Tell us what you're trying to build. We'll tell you honestly if and how we can help.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn-ghost">Start a conversation</Link>
              <Link href="/soltura-os" className={styles.ctaSecondary}>Try Soltura OS →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
