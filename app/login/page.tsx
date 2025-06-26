"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Mail, RefreshCw } from "lucide-react"
import { signIn, signInWithGoogle, resendConfirmation } from "@/lib/supabase"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [needsConfirmation, setNeedsConfirmation] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [resendSuccess, setResendSuccess] = useState(false)
  const router = useRouter()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setNeedsConfirmation(false)

    const { data, error: authError } = await signIn(email, password)

    if (authError) {
      if (authError.message.includes("Email not confirmed")) {
        setNeedsConfirmation(true)
        setError("Please check your email and click the confirmation link before signing in.")
      } else {
        setError(authError.message)
      }
    } else if (data.user) {
      router.push("/dashboard")
    }

    setLoading(false)
  }

  const handleResendConfirmation = async () => {
    setResendLoading(true)
    setResendSuccess(false)

    const { error: resendError } = await resendConfirmation(email)

    if (resendError) {
      setError(resendError.message)
    } else {
      setResendSuccess(true)
    }

    setResendLoading(false)
  }

  const handleGoogleLogin = async () => {
    setLoading(true)
    setError("")

    const { error: authError } = await signInWithGoogle()

    if (authError) {
      setError(authError.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your Tech and Path account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant={needsConfirmation ? "default" : "destructive"}>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {needsConfirmation && (
            <Alert>
              <AlertDescription className="space-y-3">
                <p>Your email needs to be confirmed before you can sign in.</p>
                {resendSuccess ? (
                  <p className="text-green-600 font-medium">✓ Confirmation email sent! Check your inbox.</p>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleResendConfirmation}
                    disabled={resendLoading}
                    className="w-full"
                  >
                    {resendLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <RefreshCw className="mr-2 h-4 w-4" />
                    )}
                    Resend Confirmation Email
                  </Button>
                )}
              </AlertDescription>
            </Alert>
          )}

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button type="button" variant="outline" className="w-full" onClick={handleGoogleLogin} disabled={loading}>
              <Mail className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">Or continue with email</span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
