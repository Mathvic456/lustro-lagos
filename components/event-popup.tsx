"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, X, Star, Utensils, Music } from "lucide-react"
import Link from "next/link"

interface EventPopupProps {
  isOpen: boolean
  onClose: () => void
}

const upcomingEvents = [
  {
    id: "ev1",
    title: "Taco Tuesday",
    description: "Authentic Mexican tacos with live mariachi music",
    date: "Today",
    time: "6:00 PM - 10:00 PM",
    location: "Main Dining Area",
    price: 5000,
    category: "food",
    popular: true,
  },
  {
    id: "ev2",
    title: "Karaoke Thursday",
    description: "Sing your heart out with special cocktails",
    date: "This Thursday",
    time: "7:00 PM - 11:00 PM",
    location: "Bar & Lounge",
    price: 3000,
    category: "entertainment",
    popular: true,
  },
  {
    id: "ev4",
    title: "Sunday Brunch Buffet",
    description: "Lavish brunch buffet with bottomless mimosas",
    date: "This Sunday",
    time: "11:00 AM - 3:00 PM",
    location: "Main Dining Area",
    price: 12000,
    category: "food",
    popular: true,
  },
]

export function EventPopup({ isOpen, onClose }: EventPopupProps) {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const currentEvent = upcomingEvents[currentEventIndex]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "food":
        return Utensils
      case "entertainment":
        return Music
      default:
        return Calendar
    }
  }

  const CategoryIcon = getCategoryIcon(currentEvent.category)

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % upcomingEvents.length)
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-gray-900">🎉 Special Events at Lustro Lagos</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-gray-600">
            Don't miss out on our exciting events happening this week!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Event Card */}
          <Card className="overflow-hidden border border-white/20 bg-white/50">
            {/* Event Image/Icon */}
            <div className="relative h-32 bg-gradient-to-br from-[#9d6c41] to-amber-700 flex items-center justify-center">
              <CategoryIcon className="w-12 h-12 text-white/80" />
              {currentEvent.popular && (
                <Badge className="absolute top-2 left-2 bg-white/90 text-[#9d6c41] text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              )}
              <Badge className="absolute top-2 right-2 text-white text-xs" style={{ backgroundColor: "#9d6c41" }}>
                ₦{currentEvent.price.toLocaleString()}
              </Badge>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{currentEvent.title}</CardTitle>
              <CardDescription className="text-sm">{currentEvent.description}</CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#9d6c41]" />
                  <span>{currentEvent.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#9d6c41]" />
                  <span>{currentEvent.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#9d6c41]" />
                  <span>{currentEvent.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm" onClick={prevEvent} disabled={upcomingEvents.length <= 1}>
              Previous
            </Button>

            <div className="flex space-x-1">
              {upcomingEvents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentEventIndex ? "bg-[#9d6c41]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextEvent} disabled={upcomingEvents.length <= 1}>
              Next
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2">
            <Button
              className="w-full hover:scale-105 transition-all duration-300 shadow-lg"
              style={{ backgroundColor: "#9d6c41" }}
            >
              Reserve Your Spot
            </Button>
            <Link href="/events" onClick={onClose}>
              <Button variant="outline" className="w-full">
                View All Events
              </Button>
            </Link>
          </div>

          {/* Dismiss Options */}
          <div className="text-center">
            <button onClick={onClose} className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Don't show this again today
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
