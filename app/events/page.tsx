"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, Users, Music, Utensils, Star, Heart, Share2 } from "lucide-react"

interface SpecialEvent {
  id: string
  title: string
  description: string
  fullDescription: string
  date: string
  time: string
  duration: string
  location: string
  price: number
  category: "food" | "entertainment" | "special"
  image: string
  features: string[]
  capacity: number
  recurring: boolean
  popular: boolean
}

const specialEvents: SpecialEvent[] = [
  {
    id: "ev1",
    title: "Taco Tuesday",
    description: "Authentic Mexican tacos with special pricing and live mariachi music",
    fullDescription:
      "Join us every Tuesday for our famous Taco Tuesday! Enjoy authentic Mexican tacos prepared by our expert chefs, featuring fresh ingredients and traditional recipes. The evening includes live mariachi music, special taco platters, and discounted drinks. Perfect for families, friends, and taco lovers!",
    date: "Every Tuesday",
    time: "6:00 PM - 10:00 PM",
    duration: "4 hours",
    location: "Main Dining Area",
    price: 5000,
    category: "food",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Live Mariachi Music",
      "Special Taco Menu",
      "Discounted Drinks",
      "Family Friendly",
      "Authentic Mexican Cuisine",
    ],
    capacity: 80,
    recurring: true,
    popular: true,
  },
  {
    id: "ev2",
    title: "Karaoke Thursday",
    description: "Sing your heart out with our state-of-the-art karaoke system and enjoy special cocktails",
    fullDescription:
      "Thursday nights come alive at Lustro Lagos with our exciting Karaoke Thursday! Showcase your vocal talents with our professional karaoke system featuring thousands of songs in multiple languages. Enjoy special cocktail offers, win prizes for best performances, and create unforgettable memories with friends.",
    date: "Every Thursday",
    time: "7:00 PM - 11:00 PM",
    duration: "4 hours",
    location: "Bar & Lounge",
    price: 3000,
    category: "entertainment",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Professional Karaoke System",
      "Song Contests",
      "Special Cocktails",
      "Prizes & Giveaways",
      "Private Booth Options",
    ],
    capacity: 60,
    recurring: true,
    popular: true,
  },
  {
    id: "ev3",
    title: "Wine & Dine Friday",
    description: "Premium wine tasting paired with gourmet dishes in an elegant setting",
    fullDescription:
      "Experience sophistication every Friday with our Wine & Dine event. Our sommelier will guide you through a curated selection of premium wines perfectly paired with gourmet dishes prepared by our head chef. Learn about wine origins, tasting notes, and perfect food pairings in an intimate setting.",
    date: "Every Friday",
    time: "7:30 PM - 10:30 PM",
    duration: "3 hours",
    location: "Private Dining Room",
    price: 15000,
    category: "special",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Wine Tasting",
      "Gourmet Food Pairing",
      "Expert Sommelier",
      "Educational Experience",
      "Intimate Setting",
    ],
    capacity: 30,
    recurring: true,
    popular: false,
  },
  {
    id: "ev4",
    title: "Sunday Brunch Buffet",
    description: "Lavish brunch buffet with live cooking stations and bottomless mimosas",
    fullDescription:
      "Start your Sunday right with our spectacular brunch buffet! Featuring live cooking stations, fresh pastries, international cuisine, and bottomless mimosas. Our chefs prepare dishes to order while you enjoy the relaxed atmosphere with family and friends. Perfect for celebrations and lazy Sunday mornings.",
    date: "Every Sunday",
    time: "11:00 AM - 3:00 PM",
    duration: "4 hours",
    location: "Main Dining Area & Terrace",
    price: 12000,
    category: "food",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Live Cooking Stations",
      "Bottomless Mimosas",
      "International Buffet",
      "Fresh Pastries",
      "Family Friendly",
    ],
    capacity: 100,
    recurring: true,
    popular: true,
  },
  {
    id: "ev5",
    title: "Jazz Night",
    description: "Smooth jazz performances by local artists with signature cocktails",
    fullDescription:
      "Immerse yourself in the smooth sounds of jazz every second Saturday of the month. Local talented musicians perform classic and contemporary jazz pieces while you enjoy our signature cocktails and light bites. The perfect evening for music lovers and those seeking a sophisticated night out.",
    date: "2nd Saturday of Month",
    time: "8:00 PM - 12:00 AM",
    duration: "4 hours",
    location: "Bar & Lounge",
    price: 8000,
    category: "entertainment",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Live Jazz Music", "Local Artists", "Signature Cocktails", "Intimate Atmosphere", "Music Appreciation"],
    capacity: 50,
    recurring: true,
    popular: false,
  },
  {
    id: "ev6",
    title: "Chef's Table Experience",
    description: "Exclusive dining experience with the chef preparing a custom menu",
    fullDescription:
      "Join our head chef for an exclusive culinary journey at our Chef's Table. Watch as your meal is prepared with precision and artistry while learning about ingredients, techniques, and the inspiration behind each dish. This intimate experience includes wine pairings and personalized attention.",
    date: "Last Friday of Month",
    time: "7:00 PM - 10:00 PM",
    duration: "3 hours",
    location: "Chef's Kitchen",
    price: 25000,
    category: "special",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Exclusive Access", "Custom Menu", "Wine Pairings", "Chef Interaction", "Behind-the-Scenes"],
    capacity: 8,
    recurring: true,
    popular: false,
  },
]

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<SpecialEvent | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFavorite = (eventId: string) => {
    setFavorites((prev) => (prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]))
  }

  const filteredEvents =
    selectedCategory === "all" ? specialEvents : specialEvents.filter((event) => event.category === selectedCategory)

  const popularEvents = specialEvents.filter((event) => event.popular)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#9d6c41] to-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Special Events</h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-3xl mx-auto">
              Join us for exciting weekly events, special dining experiences, and unforgettable entertainment at Lustro
              Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white/90 backdrop-blur-sm sticky top-16 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1 flex flex-wrap gap-1">
              {[
                { value: "all", label: "All Events", icon: Calendar },
                { value: "food", label: "Food Events", icon: Utensils },
                { value: "entertainment", label: "Entertainment", icon: Music },
                { value: "special", label: "Special Experiences", icon: Star },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => setSelectedCategory(value)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === value
                      ? "bg-[#9d6c41] text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Events Section */}
      {selectedCategory === "all" && (
        <section className="py-12 bg-gradient-to-b from-amber-50/50 to-white/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Star className="w-6 h-6 text-[#9d6c41] mr-2" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  isVisible={isVisible}
                  onViewDetails={() => setSelectedEvent(event)}
                  onToggleFavorite={() => toggleFavorite(event.id)}
                  isFavorite={favorites.includes(event.id)}
                  isPopular={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events Section */}
      <section className="py-12 bg-gradient-to-b from-white/50 to-stone-50/50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
              {selectedCategory === "all"
                ? "All Events"
                : selectedCategory === "food"
                  ? "Food Events"
                  : selectedCategory === "entertainment"
                    ? "Entertainment Events"
                    : "Special Experiences"}
            </h2>
            <p className="text-gray-600 text-center">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""} available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                isVisible={isVisible}
                onViewDetails={() => setSelectedEvent(event)}
                onToggleFavorite={() => toggleFavorite(event.id)}
                isFavorite={favorites.includes(event.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">{selectedEvent.title}</DialogTitle>
                <DialogDescription className="text-base text-gray-600">{selectedEvent.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Event Image */}
                <div className="aspect-video bg-gradient-to-br from-[#9d6c41] to-amber-700 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white/80" />
                  </div>
                  {selectedEvent.popular && (
                    <Badge className="absolute top-4 left-4 bg-[#9d6c41] text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 text-white" style={{ backgroundColor: "#9d6c41" }}>
                    ₦{selectedEvent.price.toLocaleString()}
                  </Badge>
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-[#9d6c41]" />
                      <span className="text-sm">{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4 text-[#9d6c41]" />
                      <span className="text-sm">{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#9d6c41]" />
                      <span className="text-sm">{selectedEvent.location}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4 text-[#9d6c41]" />
                      <span className="text-sm">Capacity: {selectedEvent.capacity} people</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4 text-[#9d6c41]" />
                      <span className="text-sm">Duration: {selectedEvent.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Badge variant="outline" className="text-xs">
                        {selectedEvent.category.charAt(0).toUpperCase() + selectedEvent.category.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">About This Event</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedEvent.fullDescription}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">What's Included</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedEvent.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-[#9d6c41]" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Button
                    onClick={() => toggleFavorite(selectedEvent.id)}
                    variant="outline"
                    className="flex-1 border-[#9d6c41] text-[#9d6c41] hover:bg-[#9d6c41] hover:text-white"
                  >
                    <Heart className={`w-4 h-4 mr-2 ${favorites.includes(selectedEvent.id) ? "fill-current" : ""}`} />
                    {favorites.includes(selectedEvent.id) ? "Saved" : "Save Event"}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    className="flex-1 hover:scale-105 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: "#9d6c41" }}
                  >
                    Reserve Spot
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Event Card Component
function EventCard({
  event,
  index,
  isVisible,
  onViewDetails,
  onToggleFavorite,
  isFavorite,
  isPopular = false,
}: {
  event: SpecialEvent
  index: number
  isVisible: boolean
  onViewDetails: () => void
  onToggleFavorite: () => void
  isFavorite: boolean
  isPopular?: boolean
}) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "food":
        return Utensils
      case "entertainment":
        return Music
      case "special":
        return Star
      default:
        return Calendar
    }
  }

  const CategoryIcon = getCategoryIcon(event.category)

  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-500 backdrop-blur-md bg-white/90 border border-white/20 hover:scale-[1.02] hover:bg-white overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-[#9d6c41] to-amber-700 flex items-center justify-center">
          <CategoryIcon className="w-16 h-16 text-white/80" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <div className="flex gap-2">
            {isPopular && (
              <Badge className="bg-[#9d6c41] text-white text-xs px-2 py-1 flex items-center">
                <Star className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
            {event.recurring && <Badge className="bg-blue-500 text-white text-xs px-2 py-1">Recurring</Badge>}
          </div>

          {/* Favorite button */}
          <button
            onClick={onToggleFavorite}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isFavorite ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Price badge */}
        <div className="absolute bottom-3 right-3">
          <Badge
            style={{ backgroundColor: "#9d6c41" }}
            className="text-white shadow-lg backdrop-blur-sm text-sm px-3 py-1"
          >
            ₦{event.price.toLocaleString()}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold leading-tight mb-2 group-hover:text-[#9d6c41] transition-colors">
          {event.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {event.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0 space-y-3">
        {/* Event Details */}
        <div className="space-y-2 text-xs text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="w-3 h-3 text-[#9d6c41]" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3 text-[#9d6c41]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-[#9d6c41]" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={onViewDetails}
          className="w-full hover:scale-105 transition-all duration-300 shadow-lg text-sm"
          style={{ backgroundColor: "#9d6c41" }}
        >
          View Event Details
        </Button>
      </CardContent>
    </Card>
  )
}
