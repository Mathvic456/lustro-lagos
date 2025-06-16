"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wifi, Car, Bed, Users, Loader2, MapPin, Clock, Star } from "lucide-react"
import type { BookingData } from "@/types"

export default function ShortletsPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Shortlet Apartments</h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-3xl mx-auto">
              Comfortable, fully-furnished apartments perfect for business trips, vacations, or extended stays in the
              heart of Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Apartments Section */}
      <section className="py-16 bg-gradient-to-b from-white/50 to-stone-50/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Apartments</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our selection of premium apartments, each designed with your comfort and convenience in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Studio Apartment */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 border border-white/20 hover:scale-105">
              <div className="h-64 bg-gradient-to-br from-[#9d6c41] to-amber-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
                  Studio Apartment
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-[#9d6c41] font-semibold">Most Popular</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span>Studio Apartment</span>
                  <Badge style={{ backgroundColor: "#9d6c41" }} className="text-white shadow-lg text-lg px-3 py-1">
                    ₦45,000/night
                  </Badge>
                </CardTitle>
                <CardDescription className="text-base">
                  Perfect for solo travelers or couples seeking comfort and convenience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-[#9d6c41]" />
                    <span className="text-sm font-medium">1-2 Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-[#9d6c41]" />
                    <span className="text-sm font-medium">Queen Bed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-[#9d6c41]" />
                    <span className="text-sm font-medium">Free WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-[#9d6c41]" />
                    <span className="text-sm font-medium">Free Parking</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Amenities & Features</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Air conditioning & heating</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Kitchenette with appliances</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Private bathroom with bathtub</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Flat-screen TV with satellite</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Washing machine</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>24/7 security</span>
                    </li>
                  </ul>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full hover:scale-105 transition-all duration-300 shadow-lg text-lg py-3"
                      style={{ backgroundColor: "#9d6c41" }}
                    >
                      Book Studio Apartment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
                    <DialogHeader>
                      <DialogTitle>Book Studio Apartment</DialogTitle>
                      <DialogDescription>Fill in your details to book this apartment</DialogDescription>
                    </DialogHeader>
                    <BookingForm apartmentType="Studio Apartment" price={45000} />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* One Bedroom Apartment */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 border border-white/20 hover:scale-105">
              <div className="h-64 bg-gradient-to-br from-amber-600 to-[#9d6c41] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
                  One Bedroom
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-[#9d6c41] font-semibold">Premium</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  <span>One Bedroom Apartment</span>
                  <Badge style={{ backgroundColor: "#9d6c41" }} className="text-white shadow-lg text-lg px-3 py-1">
                    ₦75,000/night
                  </Badge>
                </CardTitle>
                <CardDescription className="text-base">
                  Spacious apartment perfect for families or groups seeking luxury
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-[#9d6c41]" />
                    <span className="text-sm font-medium">2-4 Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-[#9d6c41]" />
                    <span className="text-sm font-medium">King Bed + Sofa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-5 h-5 text-[#9d6c41]" />
                    <span className="text-sm font-medium">Free WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-5 h-5 text-[#9d6c41]" />
                    <span className="text-sm font-medium">Free Parking</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Amenities & Features</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Separate bedroom and living area</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Full kitchen with dining space</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Balcony with city view</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Premium amenities & toiletries</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>24/7 power supply</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#9d6c41]" />
                      <span>Concierge service</span>
                    </li>
                  </ul>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full hover:scale-105 transition-all duration-300 shadow-lg text-lg py-3"
                      style={{ backgroundColor: "#9d6c41" }}
                    >
                      Book One Bedroom
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
                    <DialogHeader>
                      <DialogTitle>Book One Bedroom Apartment</DialogTitle>
                      <DialogDescription>Fill in your details to book this apartment</DialogDescription>
                    </DialogHeader>
                    <BookingForm apartmentType="One Bedroom Apartment" price={75000} />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#9d6c41]" />
                  <span>Prime Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Located in the heart of Yaba, Lagos, with easy access to business districts, shopping centers, and
                  entertainment venues.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#9d6c41]" />
                  <span>Flexible Check-in</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  24/7 check-in available with advance notice. Early check-in and late check-out options available upon
                  request.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-[#9d6c41]" />
                  <span>Premium Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dedicated customer service, housekeeping, maintenance support, and local area assistance throughout
                  your stay.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

function BookingForm({ apartmentType, price }: { apartmentType: string; price: number }) {
  const [formData, setFormData] = useState<BookingData>({
    apartmentType,
    checkIn: "",
    checkOut: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [bookingDetails, setBookingDetails] = useState<any>(null)

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0
    const checkIn = new Date(formData.checkIn)
    const checkOut = new Date(formData.checkOut)
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const totalAmount = calculateNights() * price

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowAvailabilityModal(true)

    // Simulate availability check
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Simulate availability result (90% chance of being available)
    const isAvailable = Math.random() > 0.1

    if (isAvailable) {
      const bookingId = `LUS-BOOK-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
      setBookingDetails({
        ...formData,
        bookingId,
        nights: calculateNights(),
        totalAmount,
        pricePerNight: price,
      })
      setIsSubmitting(false)
      setShowAvailabilityModal(false)
      setShowPaymentModal(true)
    } else {
      setIsSubmitting(false)
      // Will show unavailable modal
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="checkIn">Check-in Date</Label>
            <Input
              id="checkIn"
              type="date"
              value={formData.checkIn}
              onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
              className="backdrop-blur-sm bg-white/80 border-white/20"
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </div>
          <div>
            <Label htmlFor="checkOut">Check-out Date</Label>
            <Input
              id="checkOut"
              type="date"
              value={formData.checkOut}
              onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
              className="backdrop-blur-sm bg-white/80 border-white/20"
              min={formData.checkIn || new Date().toISOString().split("T")[0]}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="guests">Number of Guests</Label>
          <Select
            value={formData.guests.toString()}
            onValueChange={(value) => setFormData({ ...formData, guests: Number.parseInt(value) })}
          >
            <SelectTrigger className="backdrop-blur-sm bg-white/80 border-white/20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="backdrop-blur-md bg-white/95">
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
              <SelectItem value="3">3 Guests</SelectItem>
              <SelectItem value="4">4 Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="backdrop-blur-sm bg-white/80 border-white/20"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="backdrop-blur-sm bg-white/80 border-white/20"
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
            required
          />
        </div>

        <div>
          <Label htmlFor="specialRequests">Special Requests</Label>
          <Textarea
            id="specialRequests"
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            placeholder="Any special requirements or requests..."
            className="backdrop-blur-sm bg-white/80 border-white/20"
          />
        </div>

        {calculateNights() > 0 && (
          <div className="backdrop-blur-sm bg-gray-50/80 p-4 rounded-lg border border-white/20">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Rate per night:</span>
                <span>₦{price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Number of nights:</span>
                <span>{calculateNights()}</span>
              </div>
              <div className="flex justify-between font-bold text-[#9d6c41] border-t pt-2">
                <span>Total Amount:</span>
                <span>₦{totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        <Button
          type="submit"
          className="w-full hover:scale-105 transition-all duration-300 shadow-lg"
          style={{ backgroundColor: "#9d6c41" }}
          disabled={isSubmitting || calculateNights() === 0}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Checking Availability...</span>
            </div>
          ) : (
            "Check Availability & Book"
          )}
        </Button>
      </form>

      {/* Availability Check Modal */}
      <AvailabilityModal
        isOpen={showAvailabilityModal}
        apartmentType={apartmentType}
        checkIn={formData.checkIn}
        checkOut={formData.checkOut}
        nights={calculateNights()}
      />

      {/* Payment Modal */}
      {bookingDetails && (
        <BookingPaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          bookingDetails={bookingDetails}
        />
      )}
    </>
  )
}

// Availability Check Modal Component
function AvailabilityModal({
  isOpen,
  apartmentType,
  checkIn,
  checkOut,
  nights,
}: {
  isOpen: boolean
  apartmentType: string
  checkIn: string
  checkOut: string
  nights: number
}) {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-md backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Loader2 className="w-5 h-5 animate-spin text-[#9d6c41]" />
            <span>Checking Availability</span>
          </DialogTitle>
        </DialogHeader>
        <div className="py-6 text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#9d6c41] to-amber-700 rounded-full flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-white" />
          </div>
          <div className="space-y-2">
            <p className="font-medium">Searching for available rooms...</p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>Apartment:</strong> {apartmentType}
              </p>
              <p>
                <strong>Check-in:</strong> {new Date(checkIn).toLocaleDateString()}
              </p>
              <p>
                <strong>Check-out:</strong> {new Date(checkOut).toLocaleDateString()}
              </p>
              <p>
                <strong>Duration:</strong> {nights} night{nights > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-[#9d6c41] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#9d6c41] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-[#9d6c41] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Booking Payment Modal Component
function BookingPaymentModal({
  isOpen,
  onClose,
  bookingDetails,
}: {
  isOpen: boolean
  onClose: () => void
  bookingDetails: any
}) {
  const [paymentData, setPaymentData] = useState({
    paymentMethod: "card" as "card" | "transfer",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [receiptId, setReceiptId] = useState("")

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const paymentReceiptId = `LUS-PAY-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    setReceiptId(paymentReceiptId)
    setIsProcessing(false)
    setShowSuccessModal(true)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Complete Your Booking</DialogTitle>
            <DialogDescription>Your room is available! Complete payment to confirm your booking.</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Booking Summary */}
            <div className="backdrop-blur-sm bg-green-50/80 p-4 rounded-lg border border-green-200/50">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-800">Room Available!</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Booking ID:</span>
                  <span className="font-mono">{bookingDetails.bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Apartment:</span>
                  <span>{bookingDetails.apartmentType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guest:</span>
                  <span>{bookingDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span>{new Date(bookingDetails.checkIn).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span>{new Date(bookingDetails.checkOut).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nights:</span>
                  <span>{bookingDetails.nights}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span>{bookingDetails.guests}</span>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="backdrop-blur-sm bg-gray-50/80 p-4 rounded-lg border border-white/20">
              <h4 className="font-semibold mb-3">Payment Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Rate per night:</span>
                  <span>₦{bookingDetails.pricePerNight.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Number of nights:</span>
                  <span>{bookingDetails.nights}</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-[#9d6c41] border-t pt-2">
                  <span>Total Amount:</span>
                  <span>₦{bookingDetails.totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <Label>Payment Method</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <Button
                    type="button"
                    variant={paymentData.paymentMethod === "card" ? "default" : "outline"}
                    onClick={() => setPaymentData({ ...paymentData, paymentMethod: "card" })}
                    className={paymentData.paymentMethod === "card" ? "bg-[#9d6c41]" : ""}
                  >
                    Card Payment
                  </Button>
                  <Button
                    type="button"
                    variant={paymentData.paymentMethod === "transfer" ? "default" : "outline"}
                    onClick={() => setPaymentData({ ...paymentData, paymentMethod: "transfer" })}
                    className={paymentData.paymentMethod === "transfer" ? "bg-[#9d6c41]" : ""}
                  >
                    Bank Transfer
                  </Button>
                </div>
              </div>

              {paymentData.paymentMethod === "card" && (
                <div className="space-y-3 animate-in slide-in-from-top duration-300">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                      className="backdrop-blur-sm bg-white/80 border-white/20"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={paymentData.expiryDate}
                        onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                        className="backdrop-blur-sm bg-white/80 border-white/20"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                        className="backdrop-blur-sm bg-white/80 border-white/20"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentData.paymentMethod === "transfer" && (
                <div className="backdrop-blur-sm bg-blue-50/80 p-4 rounded-lg border border-white/20 animate-in slide-in-from-top duration-300">
                  <h4 className="font-semibold mb-2">Bank Transfer Details</h4>
                  <div className="text-sm space-y-1">
                    <p>
                      <strong>Bank:</strong> First Bank of Nigeria
                    </p>
                    <p>
                      <strong>Account Name:</strong> Lustro Lagos Limited
                    </p>
                    <p>
                      <strong>Account Number:</strong> 1234567890
                    </p>
                    <p>
                      <strong>Amount:</strong> ₦{bookingDetails.totalAmount.toLocaleString()}
                    </p>
                    <p>
                      <strong>Reference:</strong> {bookingDetails.bookingId}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Please make the transfer and click "Complete Booking" below. Your booking will be confirmed once
                    payment is received.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full hover:scale-105 transition-all duration-300 shadow-lg text-lg py-3"
                style={{ backgroundColor: "#9d6c41" }}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Payment...</span>
                  </div>
                ) : (
                  `Pay ₦${bookingDetails.totalAmount.toLocaleString()}`
                )}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <BookingSuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false)
          onClose()
        }}
        bookingDetails={bookingDetails}
        receiptId={receiptId}
        paymentData={paymentData}
      />
    </>
  )
}

// Booking Success Modal Component
function BookingSuccessModal({
  isOpen,
  onClose,
  bookingDetails,
  receiptId,
  paymentData,
}: {
  isOpen: boolean
  onClose: () => void
  bookingDetails: any
  receiptId: string
  paymentData: any
}) {
  const generatePDFReceipt = async () => {
    try {
      // Dynamic import of jsPDF
      const { jsPDF } = await import("jspdf")

      // Create new PDF document
      const doc = new jsPDF()

      // Set colors
      const primaryColor = [157, 108, 65] // #9d6c41
      const darkGray = [51, 51, 51]
      const lightGray = [128, 128, 128]

      // Header
      doc.setFillColor(...primaryColor)
      doc.rect(0, 0, 210, 40, "F")

      // Company Logo/Name
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(24)
      doc.setFont("helvetica", "bold")
      doc.text("LUSTRO LAGOS", 20, 25)

      doc.setFontSize(12)
      doc.setFont("helvetica", "normal")
      doc.text("Restaurant & Shortlets", 20, 32)

      // Receipt title
      doc.setTextColor(...darkGray)
      doc.setFontSize(18)
      doc.setFont("helvetica", "bold")
      doc.text("BOOKING CONFIRMATION & RECEIPT", 20, 55)

      // Date and receipt info
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 65)
      doc.text(`Receipt ID: ${receiptId}`, 20, 72)
      doc.text(`Booking ID: ${bookingDetails.bookingId}`, 20, 79)

      // Divider line
      doc.setDrawColor(...primaryColor)
      doc.setLineWidth(0.5)
      doc.line(20, 85, 190, 85)

      // Guest Information Section
      let yPos = 95
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("GUEST INFORMATION", 20, yPos)

      yPos += 10
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(...darkGray)
      doc.text(`Name: ${bookingDetails.name}`, 20, yPos)
      yPos += 7
      doc.text(`Email: ${bookingDetails.email}`, 20, yPos)
      yPos += 7
      doc.text(`Phone: ${bookingDetails.phone}`, 20, yPos)
      yPos += 7
      doc.text(`Number of Guests: ${bookingDetails.guests}`, 20, yPos)

      // Accommodation Details Section
      yPos += 15
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("ACCOMMODATION DETAILS", 20, yPos)

      yPos += 10
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(...darkGray)
      doc.text(`Apartment Type: ${bookingDetails.apartmentType}`, 20, yPos)
      yPos += 7
      doc.text(
        `Check-in: ${new Date(bookingDetails.checkIn).toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`,
        20,
        yPos,
      )
      yPos += 7
      doc.text(
        `Check-out: ${new Date(bookingDetails.checkOut).toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`,
        20,
        yPos,
      )
      yPos += 7
      doc.text(`Duration: ${bookingDetails.nights} night${bookingDetails.nights > 1 ? "s" : ""}`, 20, yPos)

      if (bookingDetails.specialRequests) {
        yPos += 7
        doc.text(`Special Requests: ${bookingDetails.specialRequests}`, 20, yPos)
      }

      // Payment Details Section
      yPos += 15
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("PAYMENT DETAILS", 20, yPos)

      yPos += 10
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(...darkGray)
      doc.text(`Rate per night:`, 20, yPos)
      doc.text(`₦${bookingDetails.pricePerNight.toLocaleString()}`, 150, yPos)
      yPos += 7
      doc.text(`Number of nights:`, 20, yPos)
      doc.text(`${bookingDetails.nights}`, 150, yPos)
      yPos += 7
      doc.text(`Payment Method:`, 20, yPos)
      doc.text(`${paymentData.paymentMethod === "card" ? "Credit/Debit Card" : "Bank Transfer"}`, 150, yPos)

      // Total amount box
      yPos += 10
      doc.setFillColor(245, 245, 245)
      doc.rect(20, yPos - 5, 170, 15, "F")
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("TOTAL AMOUNT PAID:", 25, yPos + 5)
      doc.text(`₦${bookingDetails.totalAmount.toLocaleString()}`, 150, yPos + 5)

      // Important Information Section
      yPos += 25
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("IMPORTANT INFORMATION", 20, yPos)

      yPos += 10
      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(...darkGray)

      const importantInfo = [
        "• Check-in time: 2:00 PM onwards",
        "• Check-out time: 12:00 PM",
        "• Valid ID required at check-in",
        "• 24/7 reception available for assistance",
        "• Free WiFi and parking included",
        "• Detailed check-in instructions will be sent 24 hours before arrival",
      ]

      importantInfo.forEach((info) => {
        doc.text(info, 20, yPos)
        yPos += 6
      })

      // Contact Information
      yPos += 10
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("CONTACT INFORMATION", 20, yPos)

      yPos += 10
      doc.setFontSize(9)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(...darkGray)
      doc.text("Address: 37a Ibukun Olu Street, Akoka, Yaba, Lagos", 20, yPos)
      yPos += 6
      doc.text("Phone: +234 901 234 5678", 20, yPos)
      yPos += 6
      doc.text("Email: hello@lustrolagos.com", 20, yPos)
      yPos += 6
      doc.text("Website: www.lustrolagos.com", 20, yPos)

      // Footer
      yPos += 15
      doc.setFillColor(...primaryColor)
      doc.rect(0, yPos, 210, 20, "F")
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text("Thank you for choosing Lustro Lagos!", 20, yPos + 12)
      doc.text(`Generated on: ${new Date().toLocaleString()}`, 120, yPos + 12)

      // Save the PDF
      const fileName = `Lustro-Lagos-Receipt-${bookingDetails.bookingId}-${new Date().toISOString().split("T")[0]}.pdf`
      doc.save(fileName)

      // Show success notification
      showDownloadNotification()
    } catch (error) {
      console.error("Error generating PDF:", error)
      // Fallback to text download if PDF generation fails
      generateTextReceipt()
    }
  }

  const generateTextReceipt = () => {
    const receiptContent = `
═══════════════════════════════════════════════════════════════
                        LUSTRO LAGOS
                   Restaurant & Shortlets
              37a Ibukun Olu Street, Akoka, Yaba, Lagos
                    Phone: +234 901 234 5678
                   Email: hello@lustrolagos.com
═══════════════════════════════════════════════════════════════

                      BOOKING CONFIRMATION
                         & RECEIPT

Date: ${new Date().toLocaleString()}
Receipt Type: Shortlet Booking Confirmation

═══════════════════════════════════════════════════════════════
BOOKING DETAILS
═══════════════════════════════════════════════════════════════

Booking Reference: ${bookingDetails.bookingId}
Payment Reference: ${receiptId}

Guest Information:
  Name: ${bookingDetails.name}
  Email: ${bookingDetails.email}
  Phone: ${bookingDetails.phone}
  Number of Guests: ${bookingDetails.guests}

Accommodation Details:
  Apartment Type: ${bookingDetails.apartmentType}
  Check-in Date: ${new Date(bookingDetails.checkIn).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
  Check-out Date: ${new Date(bookingDetails.checkOut).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })}
  Duration: ${bookingDetails.nights} night${bookingDetails.nights > 1 ? "s" : ""}

Special Requests:
  ${bookingDetails.specialRequests || "None"}

═══════════════════════════════════════════════════════════════
PAYMENT BREAKDOWN
═══════════════════════════════════════════════════════════════

Rate per night:                    ₦${bookingDetails.pricePerNight.toLocaleString()}
Number of nights:                   ${bookingDetails.nights}
                                   ─────────────────────────────
TOTAL AMOUNT PAID:                 ₦${bookingDetails.totalAmount.toLocaleString()}

Payment Method: ${paymentData.paymentMethod === "card" ? "Credit/Debit Card" : "Bank Transfer"}
Payment Status: CONFIRMED
Transaction Date: ${new Date().toLocaleString()}

═══════════════════════════════════════════════════════════════
                    www.lustrolagos.com
═══════════════════════════════════════════════════════════════
    `.trim()

    const blob = new Blob([receiptContent], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `Lustro-Lagos-Receipt-${bookingDetails.bookingId}-${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    showDownloadNotification()
  }

  const showDownloadNotification = () => {
    const downloadNotification = document.createElement("div")
    downloadNotification.className =
      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-in slide-in-from-top duration-300"
    downloadNotification.innerHTML = `
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        <span>Receipt downloaded successfully!</span>
      </div>
    `
    document.body.appendChild(downloadNotification)

    setTimeout(() => {
      if (downloadNotification.parentNode) {
        downloadNotification.parentNode.removeChild(downloadNotification)
      }
    }, 3000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-green-600">Booking Confirmed!</DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-6 py-4">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Your booking is confirmed!</h3>
              <p className="text-gray-600">We've sent a confirmation email to {bookingDetails.email}</p>
            </div>

            <div className="backdrop-blur-sm bg-gray-50/80 p-4 rounded-lg border border-white/20 text-left">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Booking ID:</span>
                  <span className="font-mono">{bookingDetails.bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Payment ID:</span>
                  <span className="font-mono">{receiptId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Apartment:</span>
                  <span>{bookingDetails.apartmentType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Check-in:</span>
                  <span>{new Date(bookingDetails.checkIn).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Check-out:</span>
                  <span>{new Date(bookingDetails.checkOut).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-[#9d6c41] border-t pt-2">
                  <span>Total Paid:</span>
                  <span>₦{bookingDetails.totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>📧 Confirmation email sent</p>
              <p>📱 SMS confirmation sent to {bookingDetails.phone}</p>
              <p>🏠 Check-in instructions will be sent 24 hours before arrival</p>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={onClose}
              className="w-full hover:scale-105 transition-all duration-300 shadow-lg"
              style={{ backgroundColor: "#9d6c41" }}
            >
              Done
            </Button>
            <Button variant="outline" onClick={generatePDFReceipt} className="w-full">
              📄 Download PDF Receipt
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
