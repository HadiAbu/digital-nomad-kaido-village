"use client"

import { useEffect, useState } from "react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("splash-screen-seen")

    if (hasSeenSplash) {
      setShouldRender(false)
      return
    }

    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 50)

    // Auto-hide after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        setShouldRender(false)
        sessionStorage.setItem("splash-screen-seen", "true")
      }, 500)
    }, 3000)
  }, [])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#171F29] transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        <h1
          className={`text-6xl font-bold text-[#DFE5E8] mb-4 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Kaido Village
        </h1>
        <p
          className={`text-xl text-[#913d16] transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Your Digital Nomad Home in Chiang Mai
        </p>
      </div>
    </div>
  )
}
