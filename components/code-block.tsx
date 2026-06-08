"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-3 overflow-hidden rounded-lg border border-border">
      <div className="flex items-center justify-between bg-code-bg px-4 py-2">
        <span className="font-mono text-xs text-muted-foreground">{language}</span>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs transition-colors",
            "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto bg-code-bg p-4">
        <code className="font-mono text-sm text-code-foreground">{code}</code>
      </pre>
    </div>
  )
}
