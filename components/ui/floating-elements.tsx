export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-40 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Floating squares */}
      <div
        className="absolute top-60 left-1/4 w-8 h-8 bg-yellow-200 opacity-20 animate-float transform rotate-45"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-60 right-1/4 w-6 h-6 bg-indigo-200 opacity-20 animate-float transform rotate-45"
        style={{ animationDelay: "2.5s" }}
      />
    </div>
  )
}
