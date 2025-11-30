import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const groq = createGroq({ apiKey: process.env.GROQ_API_KEY! });
    const { text } = await generateText({
      model: groq('llama-3.1-70b-versatile') as any, // Type assertion fixes V2/V1 mismatch
      prompt: 'You are SheetMagic, an AI for spreadsheets. Respond helpfully to queries like "Clean messy data".',
    });
    return NextResponse.json({ text });
  } catch (error) {
    console.error('AI Error:', error);
    return NextResponse.json({ error: 'AI generation failed' }, { status: 500 });
  }
}
