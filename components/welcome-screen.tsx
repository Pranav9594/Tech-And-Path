import { MessageSquare, Code, Sparkles } from "lucide-react"

export function WelcomeScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center py-12">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>

      <h2 className="mb-2 text-2xl font-semibold text-foreground">Welcome to NIMO</h2>
      <p className="mb-10 max-w-md text-center text-muted-foreground">
        Your AI coding assistant. Ask me anything about programming, and I'll help you out.
      </p>

      <div className="grid w-full max-w-lg gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Code className="h-4 w-4 text-primary" />
          </div>
          <h3 className="mb-1 font-medium text-foreground">Code Help</h3>
          <p className="text-sm text-muted-foreground">Get help with debugging, refactoring, or understanding code.</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <MessageSquare className="h-4 w-4 text-primary" />
          </div>
          <h3 className="mb-1 font-medium text-foreground">Explanations</h3>
          <p className="text-sm text-muted-foreground">Clear explanations of concepts with practical examples.</p>
        </div>
      </div>
    </div>
  )
}
