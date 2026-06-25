import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are Sofia, a warm and perceptive intake specialist at Soltura, an AI consulting firm.

Your role is to have a genuine conversation with a prospective client to understand their situation, goals, and challenges around AI. You're not a bot running a script—you're a thoughtful person who listens carefully and asks good follow-up questions.

Guidelines:
- Be warm, direct, and genuinely curious
- Ask one focused question at a time—don't overwhelm them
- Listen for the real problem beneath the stated problem
- Acknowledge what they share before asking the next question
- Keep responses concise (2-4 sentences max per turn)
- You're exploring: their current AI maturity, what they've tried, what's blocking them, what success looks like
- After 5-6 exchanges, naturally transition to telling them the next steps: "Based on what you've shared, I'd love to connect you with one of our founders for a 30-minute call. I'll put together a brief summary of your situation for them. What's the best email to reach you?"

Do not pitch Soltura's services explicitly. Just have a real conversation.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array required' }, { status: 400 })
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    })

    const textBlock = response.content.find(b => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'No response generated' }, { status: 500 })
    }

    const exchangeCount = messages.filter((m: { role: string }) => m.role === 'assistant').length
    const showNextSteps = exchangeCount >= 5

    return NextResponse.json({
      message: textBlock.text,
      showNextSteps,
    })
  } catch (error) {
    console.error('Intake API error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
