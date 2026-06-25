'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './page.module.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const WELCOME_MESSAGE = "Hi there. I'm Sofia, and I help people figure out if and how Soltura can help them. Before we get into the details—what's the main thing you're trying to figure out around AI right now?"

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: WELCOME_MESSAGE },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showNextSteps, setShowNextSteps] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

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

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.message },
      ])

      if (data.showNextSteps) {
        setShowNextSteps(true)
      }
    } catch (err) {
      console.error(err)
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, something went wrong on my end. Could you try again?",
        },
      ])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <span className={styles.label}>Work with us</span>
          <h1 className={styles.heading}>Let&apos;s talk about what you&apos;re building.</h1>
          <p className={styles.sub}>
            This isn&apos;t a sales call—it&apos;s a real conversation. Tell Sofia what you&apos;re trying to solve, and she&apos;ll help figure out if we&apos;re the right fit.
          </p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>◎</span>
              <div>
                <strong>30 minutes</strong>
                <span>Typical intake conversation</span>
              </div>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>◈</span>
              <div>
                <strong>No pitch</strong>
                <span>We only take projects we can win</span>
              </div>
            </div>
            <div className={styles.detail}>
              <span className={styles.detailIcon}>◉</span>
              <div>
                <strong>Fast response</strong>
                <span>We follow up within 24 hours</span>
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
              <div className={styles.messageBubble}>
                {msg.content}
              </div>
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

          {showNextSteps && (
            <div className={styles.nextSteps}>
              <h3>What happens next</h3>
              <ol>
                <li>Sofia shares your conversation summary with our founding team</li>
                <li>A founder reviews your situation within 24 hours</li>
                <li>If there&apos;s a fit, they&apos;ll reach out to schedule a call</li>
              </ol>
              <p>You can also reach us directly at <a href="mailto:hello@soltura.ai">hello@soltura.ai</a></p>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

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
      </div>
    </div>
  )
}
