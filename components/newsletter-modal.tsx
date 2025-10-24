"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

export function NewsletterModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsAnimatingOut(true)
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    handleDismiss()
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-300 ${
        isAnimatingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`bg-background border border-border rounded-lg shadow-2xl max-w-md w-full p-8 relative transform transition-all duration-300 ${
          isAnimatingOut ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isAnimatingOut ? "none" : "slideUp 0.3s ease-out",
        }}
      >
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Sign Up For Newsletter</h2>
          <p className="text-muted-foreground text-sm">
            Get the latest updates on digital nomad life, special offers, and community events delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div className="flex gap-3">
            <Button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
            >
              Subscribe
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleDismiss}
              className="flex-1 border-border text-foreground hover:bg-muted/20 bg-transparent cursor-pointer"
            >
              Maybe Later
            </Button>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
