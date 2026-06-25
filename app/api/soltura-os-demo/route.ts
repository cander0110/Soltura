import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are Soltura OS, an AI system that helps organizations identify and design AI solutions for their specific problems.

Given a problem description, generate a structured solution preview with the following sections:

1. **Problem Diagnosis** — A clear reframing of the core problem (2-3 sentences)
2. **Proposed Solution** — The AI approach that would work best, explained concisely
3. **Key Components** — 3-4 bullet points on what the system would include
4. **Expected Outcomes** — What changes for the team or organization
5. **Implementation Path** — High-level 3-phase roadmap with rough timeframes

Format your response using markdown. Be specific and practical—avoid generic AI buzzwords. Write as if you've already thought deeply about this specific problem.

Keep the entire response under 400 words.`

export async function POST(req: NextRequest) {
  try {
    const { problemDescription } = await req.json()

    if (!problemDescription || typeof problemDescription !== 'string') {
      return NextResponse.json({ error: 'problemDescription required' }, { status: 400 })
    }

    if (problemDescription.trim().length < 20) {
      return NextResponse.json({ error: 'Please describe your problem in more detail' }, { status: 400 })
    }

    const response = await client.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `Here is the problem we need to solve:\n\n${problemDescription}`,
        },
      ],
    })

    const textBlock = response.content.find(b => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      return NextResponse.json({ error: 'No solution generated' }, { status: 500 })
    }

    return NextResponse.json({ solution: textBlock.text })
  } catch (error) {
    console.error('Soltura OS API error:', error)
    return NextResponse.json({ error: 'Failed to generate solution' }, { status: 500 })
  }
}
