import type React from "react"
export function CyberGrid() {
  return <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
}

export function ScanLine() {
  return <div className="scan-line" />
}

export function CircuitPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circuit lines */}
      <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
      <div className="absolute top-40 right-20 w-24 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60" />
      <div className="absolute bottom-40 left-1/4 w-40 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />

      {/* Circuit nodes */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div
        className="absolute top-40 right-32 w-2 h-2 bg-green-400 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-40 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Hexagonal elements */}
      <div className="absolute top-60 left-1/2 w-8 h-8 border border-cyan-400 transform rotate-45 opacity-40" />
      <div className="absolute bottom-60 right-1/3 w-6 h-6 border border-green-400 transform rotate-45 opacity-40" />
    </div>
  )
}

export function TerminalWindow({ children, title = "terminal" }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="text-gray-400 text-sm ml-2">{title}</span>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  )
}
