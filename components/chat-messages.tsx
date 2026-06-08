"use client"

import { MessageBubble } from "./message-bubble"
import { TypingIndicator } from "./typing-indicator"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface ChatMessagesProps {
  messages: Message[]
  isLoading: boolean
  onEditMessage?: (messageId: string, newContent: string) => void
}

export function ChatMessages({ messages, isLoading, onEditMessage }: ChatMessagesProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} onEdit={onEditMessage} />
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  )
}
