"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Navigation, MessageSquare, Send, Loader2, Car, Bus, Train } from "lucide-react"

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Contact Us</h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-3xl mx-auto">
              Get in touch with us for reservations, inquiries, or any assistance you need. We're here to help make your
              experience exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-white/50 to-stone-50/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Location Card */}
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <MapPin className="w-6 h-6 text-[#9d6c41]" />
                    <span>Visit Us</span>
                  </CardTitle>
                  <CardDescription>Located in the heart of Yaba, Lagos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Address</h4>
                      <p className="text-gray-600">
                        Pako B/stop, 37a Ibukun Olu Street
                        <br />
                        Akoka, Yaba, Lagos 102216
                        <br />
                        Nigeria
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Landmarks</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Near University of Lagos (UNILAG)</li>
                        <li>• Close to Yaba Tech</li>
                        <li>• 5 minutes from Yaba Bus Stop</li>
                        <li>• Opposite First Bank, Akoka Branch</li>
                      </ul>
                    </div>
                  </div>

                  <Button
                    className="w-full hover:scale-105 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: "#9d6c41" }}
                    onClick={() => {
                      // Open Google Maps with the address
                      const address = "37a Ibukun Olu Street, Akoka, Yaba, Lagos, Nigeria"
                      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
                      window.open(mapsUrl, "_blank")
                    }}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-[#9d6c41]" />
                    <span>Contact Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+234 901 234 5678</p>
                        <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">hello@lustrolagos.com</p>
                        <p className="text-gray-600">reservations@lustrolagos.com</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">Operating Hours</p>
                        <div className="text-gray-600 space-y-1">
                          <p>Restaurant:</p>
                          <p>Mon - Thu: 11:00 AM - 11:00 PM</p>
                          <p>Fri - Sun: 11:00 AM - 12:00 AM</p>
                          <p className="mt-2">Shortlets: 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transportation */}
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-[#9d6c41]" />
                    <span>How to Get Here</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Car className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">By Car</p>
                        <p className="text-sm text-gray-600">Free parking available on-site</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Bus className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">By Bus</p>
                        <p className="text-sm text-gray-600">Yaba Bus Stop (5 minutes walk)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Train className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">By Train</p>
                        <p className="text-sm text-gray-600">Yaba Train Station (10 minutes walk)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <MessageSquare className="w-6 h-6 text-[#9d6c41]" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Have a question or special request? We'd love to hear from you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const inquiryId = `LUS-INQ-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    console.log("Contact form submitted:", { ...formData, inquiryId })
    alert(`Message sent successfully! Your inquiry ID is: ${inquiryId}. We'll get back to you within 24 hours.`)

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="backdrop-blur-sm bg-white/80 border-white/20"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="backdrop-blur-sm bg-white/80 border-white/20"
            placeholder="+234 xxx xxx xxxx"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="backdrop-blur-sm bg-white/80 border-white/20"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <Label htmlFor="inquiryType">Type of Inquiry</Label>
        <Select
          value={formData.inquiryType}
          onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
        >
          <SelectTrigger className="backdrop-blur-sm bg-white/80 border-white/20">
            <SelectValue placeholder="Select inquiry type" />
          </SelectTrigger>
          <SelectContent className="backdrop-blur-md bg-white/95">
            <SelectItem value="reservation">Restaurant Reservation</SelectItem>
            <SelectItem value="shortlet">Shortlet Booking</SelectItem>
            <SelectItem value="event">Event Planning</SelectItem>
            <SelectItem value="catering">Catering Services</SelectItem>
            <SelectItem value="feedback">Feedback</SelectItem>
            <SelectItem value="general">General Inquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="backdrop-blur-sm bg-white/80 border-white/20"
          placeholder="Brief description of your inquiry"
          required
        />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please provide details about your inquiry..."
          className="backdrop-blur-sm bg-white/80 border-white/20 min-h-[120px]"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full hover:scale-105 transition-all duration-300 shadow-lg text-lg py-3"
        style={{ backgroundColor: "#9d6c41" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Message...</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </div>
        )}
      </Button>
    </form>
  )
}
