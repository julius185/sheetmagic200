import { useChat } from 'ai/react';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat', // Groq-powered endpoint
  });

  return (
    <div className="flex flex-col h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">SheetMagic AI</h1>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((m) => (
          <div key={m.id} className={`mb-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask: Forecast sales in column A..."
          className="flex-1 p-2 border rounded-l"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded-r">Send</button>
      </form>
    </div>
  );
}
