"use client"

import type React from "react"

import { useState } from "react"
import { Bot, Trash2, History, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ChatSession {
  id: string
  title: string
  timestamp: number
  messages: any[]
}

interface ChatHeaderProps {
  onClear: () => void
  hasMessages: boolean
  chatSessions: ChatSession[]
  onLoadSession: (session: ChatSession) => void
  onDeleteSession: (id: string) => void
  onNewChat: () => void
}

export function ChatHeader({
  onClear,
  hasMessages,
  chatSessions,
  onLoadSession,
  onDeleteSession,
  onNewChat,
}: ChatHeaderProps) {
  const [showClearDialog, setShowClearDialog] = useState(false)
  const [showHistoryDialog, setShowHistoryDialog] = useState(false)
  const [showDeleteHistoryDialog, setShowDeleteHistoryDialog] = useState(false)
  const [sessionToDelete, setSessionToDelete] = useState<string | null>(null)

  const handleClearClick = () => {
    setShowClearDialog(true)
  }

  const handleConfirmClear = () => {
    onClear()
    setShowClearDialog(false)
  }

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const handleDeleteHistoryClick = (e: React.MouseEvent, sessionId: string) => {
    e.stopPropagation()
    setSessionToDelete(sessionId)
    setShowDeleteHistoryDialog(true)
  }

  const handleConfirmDeleteHistory = () => {
    if (sessionToDelete) {
      onDeleteSession(sessionToDelete)
      setSessionToDelete(null)
    }
    setShowDeleteHistoryDialog(false)
  }

  return (
    <>
      <header className="flex items-center justify-between border-b border-border bg-card/80 backdrop-blur-sm px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">NIMO</h1>
            <p className="text-xs text-muted-foreground">AI Assistant</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onNewChat} className="text-muted-foreground hover:text-foreground">
            <Plus className="mr-2 h-4 w-4" />
            New Chat
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowHistoryDialog(true)}
            className="text-muted-foreground hover:text-foreground"
          >
            <History className="mr-2 h-4 w-4" />
            History
          </Button>

          {hasMessages && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearClick}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          )}
        </div>
      </header>

      <Dialog open={showClearDialog} onOpenChange={setShowClearDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Clear Chat</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this chat? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowClearDialog(false)}>
              No, Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmClear}>
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showHistoryDialog} onOpenChange={setShowHistoryDialog}>
        <DialogContent className="sm:max-w-lg max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Chat History</DialogTitle>
            <DialogDescription>View and restore your previous conversations</DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[50vh] space-y-2 py-4">
            {chatSessions.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No chat history yet. Start a conversation!</p>
            ) : (
              chatSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer group"
                  onClick={() => {
                    onLoadSession(session)
                    setShowHistoryDialog(false)
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground truncate">{session.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(session.timestamp)} · {session.messages.length} messages
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive"
                    onClick={(e) => handleDeleteHistoryClick(e, session.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showDeleteHistoryDialog} onOpenChange={setShowDeleteHistoryDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete History</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this history? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowDeleteHistoryDialog(false)}>
              No, Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDeleteHistory}>
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
