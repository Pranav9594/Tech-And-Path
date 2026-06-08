"use client"

import { useMemo } from "react"
import { CodeBlock } from "./code-block"

interface MarkdownRendererProps {
  content: string
}

interface ParsedBlock {
  type: "text" | "code"
  content: string
  language?: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const blocks = useMemo(() => parseMarkdown(content), [content])

  return (
    <div className="prose prose-sm max-w-none text-inherit">
      {blocks.map((block, index) => {
        if (block.type === "code") {
          return <CodeBlock key={index} code={block.content} language={block.language || "text"} />
        }

        return (
          <div
            key={index}
            className="text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(block.content) }}
          />
        )
      })}
    </div>
  )
}

function parseMarkdown(content: string): ParsedBlock[] {
  const blocks: ParsedBlock[] = []
  const codeBlockRegex = /```(\w*)\n([\s\S]*?)```/g

  let lastIndex = 0
  let match

  while ((match = codeBlockRegex.exec(content)) !== null) {
    // Add text before the code block
    if (match.index > lastIndex) {
      const textContent = content.slice(lastIndex, match.index).trim()
      if (textContent) {
        blocks.push({ type: "text", content: textContent })
      }
    }

    // Add the code block
    blocks.push({
      type: "code",
      language: match[1] || "text",
      content: match[2].trim(),
    })

    lastIndex = match.index + match[0].length
  }

  // Add remaining text
  if (lastIndex < content.length) {
    const textContent = content.slice(lastIndex).trim()
    if (textContent) {
      blocks.push({ type: "text", content: textContent })
    }
  }

  return blocks
}

function formatInlineMarkdown(text: string): string {
  return (
    text
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // Inline code
      .replace(
        /`([^`]+)`/g,
        '<code class="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-code-foreground">$1</code>',
      )
      // Line breaks
      .replace(/\n/g, "<br />")
      // Headers
      .replace(/^### (.*?)$/gm, '<h3 class="text-base font-semibold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*?)$/gm, '<h2 class="text-lg font-semibold mt-4 mb-2">$1</h2>')
      .replace(/^# (.*?)$/gm, '<h1 class="text-xl font-semibold mt-4 mb-2">$1</h1>')
      // Lists
      .replace(/^- (.*?)$/gm, '<li class="ml-4 list-disc">$1</li>')
      .replace(/^(\d+)\. (.*?)$/gm, '<li class="ml-4 list-decimal">$2</li>')
  )
}
