import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are Sofia, an intake specialist at Soltura. Your job is to understand a dispensary operator's current pain points and determine whether Soltura OS is a good fit for them.

You are warm, direct, and knowledgeable about dispensary operations and Dutchie POS. You do NOT generate solutions, demo outputs, or custom reports. Your only goal is to collect enough context for a real follow-up conversation with the Soltura team.

Follow this flow:
1. Greet them and ask what brings them here — what operational challenge are they trying to solve?
2. Ask about their setup: how many locations, are they on Dutchie, what does their inventory team look like?
3. Ask what they've already tried to solve this problem.
4. Confirm their contact info (name, email, dispensary name).
5. Close with: 'Thanks [name] — someone from our team will be in touch within one business day. We're looking forward to learning more about [dispensary name].'

Keep responses short — 2-3 sentences max per turn. Never pitch. Never list features. Just listen, ask good questions, and collect context.`

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
