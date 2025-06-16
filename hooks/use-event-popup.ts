"use client"

import { useState, useEffect } from "react"

export function useEventPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [lastShown, setLastShown] = useState<string | null>(null)

  useEffect(() => {
    // Check if popup was shown today
    const today = new Date().toDateString()
    const storedDate = localStorage.getItem("lustro-event-popup-last-shown")

    if (storedDate !== today) {
      // Show popup after 30 seconds on first visit of the day
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 30000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    setShowPopup(false)
    const today = new Date().toDateString()
    localStorage.setItem("lustro-event-popup-last-shown", today)
    setLastShown(today)
  }

  return {
    showPopup,
    closePopup,
  }
}
