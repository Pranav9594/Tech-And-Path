"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { WelcomeScreen } from "./welcome-screen"

const STORAGE_KEY = "nimo-chat-history"
const SESSIONS_KEY = "nimo-chat-sessions"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface ChatSession {
  id: string
  title: string
  timestamp: number
  messages: Message[]
}

export function ChatInterface() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([])
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const savedSessions = localStorage.getItem(SESSIONS_KEY)
    if (savedSessions) {
      try {
        const parsed = JSON.parse(savedSessions)
        if (Array.isArray(parsed)) {
          setChatSessions(parsed)
        }
      } catch (e) {
        console.error("Failed to parse saved sessions:", e)
      }
    }

    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed)
        }
      } catch (e) {
        console.error("Failed to parse saved messages:", e)
      }
    }
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    if (isHydrated && messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    }
  }, [messages, isHydrated])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(SESSIONS_KEY, JSON.stringify(chatSessions))
    }
  }, [chatSessions, isHydrated])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isLoading])

  const getSessionTitle = (messageList: Message[]): string => {
    const firstUserMessage = messageList.find((m) => m.role === "user")
    if (!firstUserMessage) return "Chat"
    const text = firstUserMessage.content || ""
    if (!text) return "Chat"
    return text.length > 50 ? text.slice(0, 50) + "..." : text
  }

  const sendMessage = useCallback(
    async (userMessage: string) => {
      if (!userMessage.trim() || isLoading) return

      const userMsg: Message = {
        id: Date.now().toString(),
        role: "user",
        content: userMessage.trim(),
      }

      // Build a local message list to avoid relying on possibly-stale state
      const messageList = [...messages, userMsg]
      setMessages((prev) => [...prev, userMsg])
      setIsLoading(true)

      const assistantId = (Date.now() + 1).toString()
      const assistantMsg: Message = {
        id: assistantId,
        role: "assistant",
        content: "",
      }
      setMessages((prev) => [...prev, assistantMsg])

      try {
        abortControllerRef.current = new AbortController()

        await new Promise((resolve) => setTimeout(resolve, 1500))

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: messageList.map((m) => ({ role: m.role, content: m.content })),
          }),
          signal: abortControllerRef.current.signal,
        })

        if (!response.ok) {
          // include response body (if any) for better error visibility
          let bodyText = ""
          try {
            bodyText = await response.text()
          } catch {}
          throw new Error(`HTTP error! status: ${response.status}${bodyText ? ` - ${bodyText}` : ""}`)
        }

        const reader = response.body?.getReader()
        const decoder = new TextDecoder()

        if (!reader) {
          throw new Error("No reader available")
        }

        let fullContent = ""

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          const lines = chunk.split("\n")

          for (const line of lines) {
            if (line.startsWith("0:")) {
              try {
                const text = JSON.parse(line.slice(2))
                fullContent += text
                setMessages((prev) => prev.map((m) => (m.id === assistantId ? { ...m, content: fullContent } : m)))
              } catch {
                // Skip invalid JSON
              }
            }
          }
        }
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          // Request was aborted, do nothing
        } else {
          console.error("Error sending message:", error)
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: "Sorry, I encountered an error. Please try again." } : m,
            ),
          )
        }
      } finally {
        setIsLoading(false)
        abortControllerRef.current = null
      }
    },
    [messages, isLoading],
  )

  const handleClearChat = () => {
    if (messages.length > 0) {
      const title = getSessionTitle(messages)
      const newSession: ChatSession = {
        id: Date.now().toString(),
        title,
        timestamp: Date.now(),
        messages: messages,
      }
      setChatSessions((prev) => [newSession, ...prev].slice(0, 20))
    }

    setMessages([])
    setCurrentSessionId(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const handleLoadSession = (session: ChatSession) => {
    if (messages.length > 0 && currentSessionId !== session.id) {
      const title = getSessionTitle(messages)
      const newSession: ChatSession = {
        id: currentSessionId || Date.now().toString(),
        title,
        timestamp: Date.now(),
        messages: messages,
      }

      setChatSessions((prev) => {
        const filtered = prev.filter((s) => s.id !== currentSessionId)
        return [newSession, ...filtered].slice(0, 20)
      })
    }

    setMessages(session.messages)
    setCurrentSessionId(session.id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session.messages))
  }

  const handleDeleteSession = (id: string) => {
    setChatSessions((prev) => prev.filter((s) => s.id !== id))
  }

  const handleNewChat = () => {
    if (messages.length > 0) {
      const title = getSessionTitle(messages)
      const newSession: ChatSession = {
        id: currentSessionId || Date.now().toString(),
        title,
        timestamp: Date.now(),
        messages: messages,
      }

      setChatSessions((prev) => {
        const filtered = prev.filter((s) => s.id !== currentSessionId)
        return [newSession, ...filtered].slice(0, 20)
      })
    }

    setMessages([])
    setCurrentSessionId(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  const handleEditMessage = (messageId: string, newContent: string) => {
    if (isLoading) return

    const messageIndex = messages.findIndex((m) => m.id === messageId)
    if (messageIndex === -1) return

    const messagesBeforeEdit = messages.slice(0, messageIndex)
    setMessages(messagesBeforeEdit)

    setTimeout(() => {
      sendMessage(newContent)
    }, 50)
  }

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const message = inputValue.trim()
    setInputValue("")
    sendMessage(message)
  }

  const onInputChange = (value: string) => {
    setInputValue(value)
  }

  if (!isHydrated) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-lg font-semibold text-foreground">NIMO</span>
          <span className="text-sm text-muted-foreground">Loading your chat...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col">
      <ChatHeader
        onClear={handleClearChat}
        hasMessages={messages.length > 0}
        chatSessions={chatSessions}
        onLoadSession={handleLoadSession}
        onDeleteSession={handleDeleteSession}
        onNewChat={handleNewChat}
      />

      <div className="chat-scroll flex-1 overflow-y-auto px-4 py-6 md:px-6">
        {messages.length === 0 ? (
          <WelcomeScreen />
        ) : (
          <ChatMessages messages={messages} isLoading={isLoading} onEditMessage={handleEditMessage} />
        )}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput input={inputValue} isLoading={isLoading} onInputChange={onInputChange} onSubmit={onFormSubmit} />
    </div>
  )
}
