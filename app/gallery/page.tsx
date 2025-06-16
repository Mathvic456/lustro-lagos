"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Play, ZoomIn } from "lucide-react"

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#9d6c41] to-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Gallery</h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-3xl mx-auto">
              Take a visual tour of our restaurant, apartments, and the exceptional experiences we offer at Lustro
              Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-stone-50/50 to-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="restaurant" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
              <TabsTrigger
                value="restaurant"
                className="data-[state=active]:bg-[#9d6c41] data-[state=active]:text-white transition-all duration-300"
              >
                Restaurant
              </TabsTrigger>
              <TabsTrigger
                value="apartments"
                className="data-[state=active]:bg-[#9d6c41] data-[state=active]:text-white transition-all duration-300"
              >
                Apartments
              </TabsTrigger>
              <TabsTrigger
                value="events"
                className="data-[state=active]:bg-[#9d6c41] data-[state=active]:text-white transition-all duration-300"
              >
                Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="restaurant">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { title: "Main Dining Area", category: "Interior" },
                  { title: "Chef's Kitchen", category: "Behind the Scenes" },
                  { title: "Private Dining Room", category: "VIP Experience" },
                  { title: "Bar & Lounge", category: "Drinks & Cocktails" },
                  { title: "Outdoor Terrace", category: "Al Fresco Dining" },
                  { title: "Signature Dishes", category: "Culinary Art" },
                  { title: "Wine Collection", category: "Premium Selection" },
                  { title: "Dessert Station", category: "Sweet Endings" },
                  { title: "Live Cooking", category: "Interactive Experience" },
                  { title: "Breakfast Setup", category: "Morning Delights" },
                  { title: "Evening Ambiance", category: "Night Dining" },
                  { title: "Special Occasions", category: "Celebrations" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 border border-white/20 hover:scale-105 cursor-pointer ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-[#9d6c41] to-amber-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                        <p className="text-white/80 text-xs">{item.category}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="apartments">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { title: "Studio Living Area", category: "Cozy Comfort" },
                  { title: "One Bedroom Suite", category: "Spacious Luxury" },
                  { title: "Modern Kitchen", category: "Fully Equipped" },
                  { title: "Bathroom Amenities", category: "Premium Fixtures" },
                  { title: "City View Balcony", category: "Scenic Outlook" },
                  { title: "Work Space", category: "Business Ready" },
                  { title: "Bedroom Comfort", category: "Restful Sleep" },
                  { title: "Living Room", category: "Relaxation Zone" },
                  { title: "Building Exterior", category: "Modern Architecture" },
                  { title: "Reception Area", category: "Welcome Lobby" },
                  { title: "Parking Facility", category: "Secure Parking" },
                  { title: "Building Amenities", category: "Shared Spaces" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 border border-white/20 hover:scale-105 cursor-pointer ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-amber-600 to-[#9d6c41] relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                        <p className="text-white/80 text-xs">{item.category}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {[
                  { title: "Wedding Reception", category: "Special Celebrations", type: "photo" },
                  { title: "Corporate Event", category: "Business Meetings", type: "photo" },
                  { title: "Birthday Party", category: "Personal Celebrations", type: "photo" },
                  { title: "Event Highlights", category: "Video Tour", type: "video" },
                  { title: "Anniversary Dinner", category: "Romantic Occasions", type: "photo" },
                  { title: "Team Building", category: "Corporate Activities", type: "photo" },
                  { title: "Holiday Celebration", category: "Seasonal Events", type: "photo" },
                  { title: "Behind the Scenes", category: "Event Preparation", type: "video" },
                  { title: "Graduation Party", category: "Achievement Celebrations", type: "photo" },
                  { title: "Product Launch", category: "Business Events", type: "photo" },
                  { title: "Cultural Events", category: "Community Gatherings", type: "photo" },
                  { title: "Event Testimonials", category: "Customer Stories", type: "video" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 border border-white/20 hover:scale-105 cursor-pointer ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-purple-600 to-[#9d6c41] relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {item.type === "video" ? (
                          <Play className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <Camera className="w-8 h-8 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                        )}
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                        <p className="text-white/80 text-xs">{item.category}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
