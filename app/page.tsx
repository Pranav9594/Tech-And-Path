import { ChatInterface } from "@/components/chat-interface"
import { CometBackground } from "@/components/comet-background"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CometBackground />
      <div className="relative z-10">
        <ChatInterface />
      </div>
    </main>
  )
}
