'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './page.module.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

type Stage = 'qualifying' | 'final' | 'done'

const WELCOME_MESSAGE = "Hi there. I'm Sofia, and I help people figure out if and how Soltura can help them. Before we get into the details—what's the main thing you're trying to figure out around AI right now?"
const FINAL_PROMPT = "Got it. Anything else we should know before our team reviews this?"
const CONFIRMATION_MESSAGE = "Thanks. A founder will review this within 24 hours."

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
                <li>Sofia shares your conversation summary with our founding team</li>
                <li>A founder reviews your situation within 24 hours</li>
                <li>If there&apos;s a fit, they&apos;ll reach out to schedule a call</li>
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
