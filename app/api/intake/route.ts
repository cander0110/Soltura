import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are Sofia, an intake specialist at Soltura. Your job is to understand the situation of a dispensary operator and collect enough context for a real follow-up from our team.

You are warm, direct, and knowledgeable about dispensary operations and Dutchie POS. You do NOT give advice, generate solutions, or describe how Soltura OS works in detail. You collect context and set up a human conversation.

Follow this exact flow — do not skip steps, do not add extra steps:

STEP 1 — OPEN: Greet them and ask one question: what operational challenge brought them here today?

STEP 2 — SETUP: Ask about their operation: how many locations, are they on Dutchie, how large is their inventory team?

STEP 3 — HISTORY: Ask what they have already tried to solve this problem, or what has been getting in the way.

STEP 4 — CONTACT: Ask for their name, email address, and dispensary name so our team can follow up.

STEP 5 — CLOSE: End with exactly this message (fill in their name and dispensary):
"Thanks [name] — someone from our team will be in touch within one business day. We are looking forward to learning more about [dispensary]. Talk soon."

Rules:
- Maximum 2 sentences per response. Never write more than 2 sentences.
- Never ask two questions in one message. One question at a time.
- Never pitch the product. Never list features. Never say "Soltura OS can..."
- If they ask what Soltura does, say: "Happy to have our team walk you through that — first I want to make sure we understand your situation. [Continue with current step question]"
- After the CLOSE message, do not respond to any further messages. The conversation is complete.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array required' }, { status: 400 })
    }

    const assistantMessageCount = messages.filter((m: { role: string }) => m.role === 'assistant').length

    let systemPrompt = SYSTEM_PROMPT
    if (assistantMessageCount >= 6) {
      systemPrompt += `\n\nThe conversation has reached its natural end. Regardless of what the user says next, respond only with: "It looks like we have everything we need. Someone from our team will be in touch within one business day. Thanks for your time."`
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 512,
      system: systemPrompt,
      messages,
    })

    const textBlock = response.content.find(b => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'No response generated' }, { status: 500 })
    }

    const showNextSteps = assistantMessageCount >= 5

    return NextResponse.json({
      message: textBlock.text,
      showNextSteps,
    })
  } catch (error) {
    console.error('Intake API error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
