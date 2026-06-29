'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './page.module.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

type Stage = 'qualifying' | 'final' | 'done'

const WELCOME_MESSAGE = "Hi there. I'm Sofia, an intake specialist at Soltura. Tell me a bit about your operation — what's the core problem you're trying to solve right now?"
const FINAL_PROMPT = "Got it. Anything else you'd like us to know before we follow up?"
const CONFIRMATION_MESSAGE = "Thanks — someone from our team will be in touch within 1 business day."

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: WELCOME_MESSAGE },
  ])
  const [input, setInput] = useState('')
  const [finalInput, setFinalInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [stage, setStage] = useState<Stage>('qualifying')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const finalInputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, stage])

  // Focus final input when stage transitions to 'final'
  useEffect(() => {
    if (stage === 'final') {
      setTimeout(() => finalInputRef.current?.focus(), 100)
    }
  }, [stage])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMessage: Message = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Request failed')

      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])

      if (data.showNextSteps) {
        setStage('final')
      }
    } catch (err) {
      console.error(err)
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Sorry, something went wrong on my end. Could you try again?" },
      ])
    } finally {
      setLoading(false)
      if (stage === 'qualifying') inputRef.current?.focus()
    }
  }

  const sendFinal = () => {
    const text = finalInput.trim()

    // Add user's final message to chat (even if empty, we proceed)
    const withFinal = text
      ? [...messages, { role: 'user' as const, content: text }]
      : messages

    if (text) setMessages(withFinal)
    setFinalInput('')
    setStage('done')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  const handleFinalKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendFinal()
    }
  }

  const reset = () => {
    setMessages([{ role: 'assistant', content: WELCOME_MESSAGE }])
    setInput('')
    setFinalInput('')
    setStage('qualifying')
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <span className={styles.label}>Get in Touch</span>
          <h1 className={styles.heading}>Tell us about your operation.</h1>
          <p className={styles.sub}>
            Sofia will ask you a few questions to understand your needs. If it&apos;s a fit, we&apos;ll follow up directly.
          </p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>◎</span>
              <div>
                <strong>No pitch</strong>
                <span>We understand your operation first</span>
              </div>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>◈</span>
              <div>
                <strong>1 business day</strong>
                <span>Response time from our team</span>
              </div>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>◉</span>
              <div>
                <strong>Real follow-up</strong>
                <span>A person on our team, not an automation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.chatArea}>
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderAvatar}>S</div>
          <div>
            <strong>Sofia</strong>
            <span>Intake Specialist · Soltura</span>
          </div>
          <div className={styles.onlineIndicator} />
        </div>

        <div className={styles.messages}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
            >
              {msg.role === 'assistant' && (
                <div className={styles.messageAvatar}>S</div>
              )}
              <div className={styles.messageBubble}>{msg.content}</div>
            </div>
          ))}

          {loading && (
            <div className={`${styles.message} ${styles.assistantMessage}`}>
              <div className={styles.messageAvatar}>S</div>
              <div className={`${styles.messageBubble} ${styles.typing}`}>
                <span /><span /><span />
              </div>
            </div>
          )}

          {/* Stage 2: Next steps card + final input */}
          {(stage === 'final' || stage === 'done') && (
            <div className={styles.nextSteps}>
              <h3>What happens next</h3>
              <ol>
                <li>Sofia passes your summary to our team</li>
                <li>Someone reviews your situation — not a bot, a person</li>
                <li>We follow up within 1 business day if it looks like a fit</li>
              </ol>
              <p>You can also reach us directly at <a href="mailto:hello@soltura.ai">hello@soltura.ai</a></p>
            </div>
          )}

          {/* Stage 3: Confirmation */}
          {stage === 'done' && (
            <div className={`${styles.message} ${styles.assistantMessage}`}>
              <div className={styles.messageAvatar}>S</div>
              <div className={styles.messageBubble}>{CONFIRMATION_MESSAGE}</div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Stage 1: Main chat input */}
        {stage === 'qualifying' && (
          <>
            <div className={styles.inputArea}>
              <textarea
                ref={inputRef}
                className={styles.input}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                rows={1}
                disabled={loading}
              />
              <button
                className={styles.sendBtn}
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <p className={styles.hint}>Press Enter to send · Shift+Enter for new line</p>
          </>
        )}

        {/* Stage 2: Final optional message */}
        {stage === 'final' && (
          <>
            <div className={styles.finalPrompt}>
              <p className={styles.finalPromptText}>{FINAL_PROMPT}</p>
            </div>
            <div className={styles.inputArea}>
              <textarea
                ref={finalInputRef}
                className={styles.input}
                value={finalInput}
                onChange={e => setFinalInput(e.target.value)}
                onKeyDown={handleFinalKeyDown}
                placeholder="Optional — or just press Send to continue..."
                rows={1}
              />
              <button
                className={styles.sendBtn}
                onClick={sendFinal}
                aria-label="Send final message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <p className={styles.hint}>Press Enter to send · Shift+Enter for new line</p>
          </>
        )}

        {/* Stage 3: Done state with Start Over */}
        {stage === 'done' && (
          <div className={styles.doneFooter}>
            <button className={styles.startOverBtn} onClick={reset}>
              ← Start over
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
