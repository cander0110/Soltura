'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const EXAMPLE_PROBLEMS = [
  "Our sales team spends 3 hours a day writing follow-up emails after demos. The quality is inconsistent and we're losing deals.",
  "We have 5 years of customer support tickets but no way to surface patterns or identify recurring issues across teams.",
  "Onboarding new engineers takes 3 months. Most of the knowledge lives in Slack and the heads of senior engineers.",
]

export default function SolturaOsPage() {
  const [problem, setProblem] = useState('')
  const [solution, setSolution] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!problem.trim() || loading) return

    setLoading(true)
    setError('')
    setSolution('')

    try {
      const res = await fetch('/api/soltura-os-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problemDescription: problem }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Request failed')

      setSolution(data.solution)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setProblem('')
    setSolution('')
    setError('')
    setSubmitted(false)
  }

  const useExample = (ex: string) => {
    setProblem(ex)
    setSolution('')
    setError('')
    setSubmitted(false)
  }

  const formatSolution = (text: string) => {
    const lines = text.split('\n')
    return lines.map((line, i) => {
      if (line.startsWith('# ')) {
        return <h1 key={i} className={styles.solH1}>{line.slice(2)}</h1>
      }
      if (line.startsWith('## ') || line.match(/^\*\*[^*]+\*\*$/)) {
        const content = line.startsWith('## ') ? line.slice(3) : line.replace(/\*\*/g, '')
        return <h2 key={i} className={styles.solH2}>{content}</h2>
      }
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return <li key={i} className={styles.solLi}>{line.slice(2)}</li>
      }
      if (line.match(/^\d+\./)) {
        return <li key={i} className={styles.solOli}>{line.replace(/^\d+\.\s*/, '')}</li>
      }
      if (line.trim() === '') {
        return <div key={i} className={styles.solSpacer} />
      }
      const bold = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      return (
        <p
          key={i}
          className={styles.solP}
          dangerouslySetInnerHTML={{ __html: bold }}
        />
      )
    })
  }

  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <span className={styles.badge}>Soltura OS · Preview</span>
          <h1 className={styles.title}>Describe your problem. Get an AI solution in 30 seconds.</h1>
          <p className={styles.subtitle}>
            Soltura OS is our AI-powered diagnostic system. Tell us what&apos;s slowing you down, and it will generate a tailored solution architecture—the same kind of analysis our consultants produce in day-one workshops.
          </p>
        </div>
      </section>

      <div className={`container ${styles.main}`}>
        {!submitted ? (
          <div className={styles.inputSection}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.formLabel} htmlFor="problem">
                Describe the problem you&apos;re trying to solve
              </label>
              <textarea
                id="problem"
                className={styles.textarea}
                value={problem}
                onChange={e => setProblem(e.target.value)}
                placeholder="Be specific. What's the actual pain? Who's affected? What have you tried?"
                rows={5}
                disabled={loading}
              />
              <div className={styles.formActions}>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading || problem.trim().length < 20}
                >
                  {loading ? (
                    <>
                      <span className={styles.spinner} />
                      Analyzing...
                    </>
                  ) : (
                    'Generate Solution Preview →'
                  )}
                </button>
                {problem.trim().length > 0 && problem.trim().length < 20 && (
                  <span className={styles.charHint}>A bit more detail helps us generate a better solution</span>
                )}
              </div>
              {error && <p className={styles.error}>{error}</p>}
            </form>

            <div className={styles.examples}>
              <p className={styles.examplesLabel}>Try an example:</p>
              {EXAMPLE_PROBLEMS.map((ex, i) => (
                <button
                  key={i}
                  className={styles.exampleBtn}
                  onClick={() => useExample(ex)}
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.resultSection}>
            <div className={styles.problemRecap}>
              <span className={styles.problemLabel}>Your problem</span>
              <p className={styles.problemText}>{problem}</p>
            </div>

            <div className={styles.solution}>
              <div className={styles.solutionHeader}>
                <span className={styles.solutionLabel}>AI Solution Preview</span>
                <span className={styles.solutionBadge}>Generated by Soltura OS</span>
              </div>
              <div className={styles.solutionBody}>
                {formatSolution(solution)}
              </div>
            </div>

            <div className={styles.resultActions}>
              <button className={styles.resetBtn} onClick={handleReset}>
                ← Try another problem
              </button>
              <div className={styles.ctaGroup}>
                <p className={styles.ctaText}>Want to turn this into a real project?</p>
                <Link href="/contact" className={styles.ctaBtn}>
                  Talk to our team →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
