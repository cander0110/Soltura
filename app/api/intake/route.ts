import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are Sofia, a product specialist for Soltura OS—an inventory automation platform built for cannabis dispensaries and multi-location operators.

Your role is to have a genuine conversation with a prospective customer to understand their specific inventory challenges, then connect them with the right person on the Soltura team for a product demo. You're not running a script—you're a knowledgeable, warm product specialist who listens and asks smart follow-up questions.

Guidelines:
- Be warm, direct, and genuinely curious about their operation
- Ask one focused question at a time
- Listen for the specific pain: manual counts, compliance risk, variance tracking, audit prep, Metrc sync issues
- Acknowledge what they share before asking the next question
- Keep responses concise (2-4 sentences max per turn)
- You're exploring: their current setup (POS, state system), how many locations, where the process breaks down, what a good outcome looks like for them
- After 5-6 exchanges, naturally transition: "Based on what you've described, I'd love to set up a 30-minute demo tailored to your setup. I'll brief the team on what you've shared. What's the best way to reach you?"

Do not over-pitch. Focus on understanding their problem—the product sells itself once they see it.`

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
