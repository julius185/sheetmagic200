import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const groq = createGroq({ apiKey: process.env.GROQ_API_KEY! });
    const { text } = await generateText({
      model: groq('llama-3.1-70b-versatile'), // Now V1-compatible
      prompt: 'You are SheetMagic, an AI for spreadsheets. Respond helpfully to queries like "Clean messy data".',
    });
    return Response.json({ text });
  } catch (error) {
    return Response.json({ error: 'AI generation failed' }, { status: 500 });
  }
}
