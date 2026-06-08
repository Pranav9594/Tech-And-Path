import Groq from "groq-sdk"

interface Message {
  role: "user" | "assistant" | "system"
  content: string
}

// Delay Groq client initialization until request time so missing env vars
// don't crash the server during module evaluation.

const SYSTEM_PROMPT = `You are NIMO, a concise and helpful AI coding assistant. You communicate clearly and use Markdown formatting when appropriate.

Guidelines:
- Be helpful, friendly, and professional
- Use code blocks with language specification for any code examples
- Keep responses focused and avoid unnecessary verbosity
- When explaining code, be clear and educational
- Format lists, headers, and emphasis using proper Markdown syntax`

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json()

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      const errMsg = "The GROQ_API_KEY environment variable is missing. Set GROQ_API_KEY in your environment or provide an apiKey when instantiating Groq."
      console.error(errMsg)

      // Provide a graceful streamed fallback so the frontend can display
      // a helpful assistant message instead of throwing on a 500.
      const fallbackText =
        "GROQ API key missing — please set GROQ_API_KEY in .env.local or your environment to enable real completions."

      const readable = new ReadableStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(fallbackText)}\n`))
          controller.close()
        },
      })

      return new Response(readable, {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      })
    }

    const groq = new Groq({ apiKey })

    if (!messages || messages.length === 0) {
      return new Response("No messages provided", { status: 400 })
    }

    const stream = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      stream: true,
    })

    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content ?? ""
          if (text) {
            controller.enqueue(new TextEncoder().encode(`0:${JSON.stringify(text)}\n`))
          }
        }
        controller.close()
      },
    })

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error("Chat API error:", message)
    return new Response(message, { status: 500 })
  }
}
