import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const groq = createGroq({ apiKey: process.env.GROQ_API_KEY! });
  const { text } = await generateText({
    model: groq('llama-3.1-70b-versatile'),
    prompt: 'You are SheetMagic, an AI for spreadsheets. Respond helpfully to queries like "Clean messy data".',
  });
  return Response.json({ text });
}
