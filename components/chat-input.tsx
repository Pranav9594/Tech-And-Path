"use client"

import type React from "react"
import type { FormEvent } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ChatInputProps {
  input: string
  isLoading: boolean
  onInputChange: (value: string) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function ChatInput({ input, isLoading, onInputChange, onSubmit }: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() && !isLoading) {
        const form = e.currentTarget.form
        if (form) {
          form.requestSubmit()
        }
      }
    }
  }

  return (
    <div className="border-t border-border bg-card p-4">
      <form onSubmit={onSubmit} className="mx-auto max-w-3xl">
        <div className="flex items-end gap-3 rounded-2xl border border-border bg-background p-2 shadow-sm focus-within:ring-2 focus-within:ring-primary/20">
          <textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isLoading ? "Waiting for response..." : "Type your message..."}
            rows={1}
            className={cn(
              "max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-3 py-2 text-sm",
              "placeholder:text-muted-foreground focus:outline-none",
              isLoading && "opacity-50 cursor-not-allowed",
            )}
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            className="h-10 w-10 shrink-0 rounded-xl"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">{isLoading ? "Sending..." : "Send message"}</span>
          </Button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          {isLoading ? "Generating response..." : "Press Enter to send, Shift+Enter for new line"}
        </p>
      </form>
    </div>
  )
}
