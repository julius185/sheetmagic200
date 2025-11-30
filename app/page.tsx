'use client';

import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">SheetMagic AI</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <div className="h-64 overflow-y-auto mb-4 border rounded p-4 bg-gray-100">
          {messages.map((m) => (
            <div key={m.id} className={`mb-4 p-3 rounded ${m.role === 'user' ? 'bg-blue-100 text-right' : 'bg-green-100'}`}>
              <strong>{m.role === 'user' ? 'You:' : 'SheetMagic:'}</strong>
              <p className="mt-1">{m.content}</p>
            </div>
          ))}
          {messages.length === 0 && (
            <p className="text-gray-500 italic text-center">Type a prompt like "Clean 10k messy rows in Excel" to start...</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask SheetMagic: Clean 10k messy rows in Excel..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
