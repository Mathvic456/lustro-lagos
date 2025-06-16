"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Utensils, Star, Phone, Mail, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ReservationsPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Make a Reservation</h1>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-3xl mx-auto">
              Reserve your table for an unforgettable dining experience at Lustro Lagos. We look forward to serving you.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-16 bg-gradient-to-b from-white/50 to-stone-50/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Reservation Form */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <Calendar className="w-6 h-6 text-[#9d6c41]" />
                    <span>Restaurant Reservation</span>
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill in the details below to reserve your table. We'll confirm your reservation within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ReservationForm />
                </CardContent>
              </Card>
            </div>

            {/* Information Panel */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Operating Hours */}
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-[#9d6c41]" />
                    <span>Operating Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Thursday</span>
                    <span className="text-gray-600">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday - Sunday</span>
                    <span className="text-gray-600">11:00 AM - 12:00 AM</span>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">Last orders are taken 30 minutes before closing time.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Dining Options */}
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Utensils className="w-5 h-5 text-[#9d6c41]" />
                    <span>Dining Options</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Star className="w-4 h-4 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">Main Dining Area</p>
                        <p className="text-sm text-gray-600">Perfect for casual dining and family meals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-4 h-4 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">Private Dining Room</p>
                        <p className="text-sm text-gray-600">Ideal for special occasions and business meetings</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-4 h-4 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">Outdoor Terrace</p>
                        <p className="text-sm text-gray-600">Al fresco dining with city views</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Star className="w-4 h-4 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-medium">Bar & Lounge</p>
                        <p className="text-sm text-gray-600">Cocktails and light bites in a relaxed setting</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-[#9d6c41]" />
                    <span>Need Help?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#9d6c41]" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-sm text-gray-600">+234 901 234 5678</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#9d6c41]" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-sm text-gray-600">reservations@lustrolagos.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">
                      For large groups (8+ people) or special events, please call us directly to discuss your
                      requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ReservationForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [reservationDetails, setReservationDetails] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const reservationId = `LUS-RES-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`

    setReservationDetails({
      ...formData,
      reservationId,
      submissionDate: new Date().toISOString(),
    })

    setIsSubmitting(false)
    setShowPaymentModal(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Preferred Date</Label>
          <Input
            id="date"
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="backdrop-blur-sm bg-white/80 border-white/20"
            required
          />
        </div>
        <div>
          <Label htmlFor="time">Preferred Time</Label>
          <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
            <SelectTrigger className="backdrop-blur-sm bg-white/80 border-white/20">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent className="backdrop-blur-md bg-white/95">
              {[
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
              ].map((time) => (
                <SelectItem key={time} value={time}>
                  {time === "11:00"
                    ? "11:00 AM"
                    : time === "12:00"
                      ? "12:00 PM"
                      : Number.parseInt(time) > 12
                        ? `${Number.parseInt(time) - 12}:00 PM`
                        : `${time}:00 AM`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="guests">Number of Guests</Label>
        <Select value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
          <SelectTrigger className="backdrop-blur-sm bg-white/80 border-white/20">
            <SelectValue placeholder="Select number of guests" />
          </SelectTrigger>
          <SelectContent className="backdrop-blur-md bg-white/95">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num === 8 ? "8+ Guests" : `${num} Guest${num > 1 ? "s" : ""}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

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
            required
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
        <Label htmlFor="specialRequests">Special Requests</Label>
        <Textarea
          id="specialRequests"
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          placeholder="Dietary restrictions, special occasions, seating preferences, accessibility needs..."
          className="backdrop-blur-sm bg-white/80 border-white/20 min-h-[100px]"
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
            <span>Making Reservation...</span>
          </div>
        ) : (
          "Make Reservation"
        )}
        </Button>
    </form>
    {reservationDetails && (
      <ReservationPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        reservationDetails={reservationDetails}
      />
    )}
  </>
  )
}

// Reservation Payment Modal Component
function ReservationPaymentModal({
  isOpen,
  onClose,
  reservationDetails,
}: {
  isOpen: boolean
  onClose: () => void
  reservationDetails: any
}) {
  const [paymentData, setPaymentData] = useState({
    paymentMethod: "card" as "card" | "transfer",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    depositAmount: 10000, // ₦10,000 deposit for reservations
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
            <DialogTitle className="text-xl">Confirm Your Reservation</DialogTitle>
            <DialogDescription>Complete payment to secure your table reservation.</DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Reservation Summary */}
            <div className="backdrop-blur-sm bg-green-50/80 p-4 rounded-lg border border-green-200/50">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-800">Reservation Available!</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Reservation ID:</span>
                  <span className="font-mono">{reservationDetails.reservationId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Guest Name:</span>
                  <span>{reservationDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span>{new Date(reservationDetails.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span>
                    {reservationDetails.time === "11:00"
                      ? "11:00 AM"
                      : reservationDetails.time === "12:00"
                        ? "12:00 PM"
                        : Number.parseInt(reservationDetails.time) > 12
                          ? `${Number.parseInt(reservationDetails.time) - 12}:00 PM`
                          : `${reservationDetails.time}:00 AM`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span>
                    {reservationDetails.guests === "8"
                      ? "8+ Guests"
                      : `${reservationDetails.guests} Guest${Number.parseInt(reservationDetails.guests) > 1 ? "s" : ""}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span>{reservationDetails.phone}</span>
                </div>
              </div>
            </div>

            {/* Payment Summary */}
            <div className="backdrop-blur-sm bg-gray-50/80 p-4 rounded-lg border border-white/20">
              <h4 className="font-semibold mb-3">Payment Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Reservation Deposit:</span>
                  <span>₦{paymentData.depositAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee:</span>
                  <span>₦0</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-[#9d6c41] border-t pt-2">
                  <span>Total Amount:</span>
                  <span>₦{paymentData.depositAmount.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  This deposit secures your reservation. The remaining balance can be paid at the restaurant.
                </p>
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
                      <strong>Amount:</strong> ₦{paymentData.depositAmount.toLocaleString()}
                    </p>
                    <p>
                      <strong>Reference:</strong> {reservationDetails.reservationId}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Please make the transfer and click "Complete Reservation" below.
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
                  `Pay ₦${paymentData.depositAmount.toLocaleString()}`
                )}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <ReservationSuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false)
          onClose()
        }}
        reservationDetails={reservationDetails}
        receiptId={receiptId}
        paymentData={paymentData}
      />
    </>
  )
}

// Reservation Success Modal Component
function ReservationSuccessModal({
  isOpen,
  onClose,
  reservationDetails,
  receiptId,
  paymentData,
}: {
  isOpen: boolean
  onClose: () => void
  reservationDetails: any
  receiptId: string
  paymentData: any
}) {
  const generatePDFReceipt = async () => {
    try {
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF()

      const primaryColor = [157, 108, 65]
      const darkGray = [51, 51, 51]

      // Header
      doc.setFillColor(...primaryColor)
      doc.rect(0, 0, 210, 40, "F")

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
      doc.text("RESERVATION CONFIRMATION & RECEIPT", 20, 55)

      // Date and receipt info
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 65)
      doc.text(`Receipt ID: ${receiptId}`, 20, 72)
      doc.text(`Reservation ID: ${reservationDetails.reservationId}`, 20, 79)

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
      doc.text(`Name: ${reservationDetails.name}`, 20, yPos)
      yPos += 7
      doc.text(`Email: ${reservationDetails.email}`, 20, yPos)
      yPos += 7
      doc.text(`Phone: ${reservationDetails.phone}`, 20, yPos)

      // Reservation Details Section
      yPos += 15
      doc.setFontSize(14)
      doc.setFont("helvetica", "bold")
      doc.setTextColor(...primaryColor)
      doc.text("RESERVATION DETAILS", 20, yPos)

      yPos += 10
      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      doc.setTextColor(...darkGray)
      doc.text(
        `Date: ${new Date(reservationDetails.date).toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`,
        20,
        yPos,
      )
      yPos += 7
      const timeDisplay =
        reservationDetails.time === "11:00"
          ? "11:00 AM"
          : reservationDetails.time === "12:00"
            ? "12:00 PM"
            : Number.parseInt(reservationDetails.time) > 12
              ? `${Number.parseInt(reservationDetails.time) - 12}:00 PM`
              : `${reservationDetails.time}:00 AM`
      doc.text(`Time: ${timeDisplay}`, 20, yPos)
      yPos += 7
      const guestDisplay =
        reservationDetails.guests === "8"
          ? "8+ Guests"
          : `${reservationDetails.guests} Guest${Number.parseInt(reservationDetails.guests) > 1 ? "s" : ""}`
      doc.text(`Number of Guests: ${guestDisplay}`, 20, yPos)

      if (reservationDetails.specialRequests) {
        yPos += 7
        doc.text(`Special Requests: ${reservationDetails.specialRequests}`, 20, yPos)
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
      doc.text(`Reservation Deposit:`, 20, yPos)
      doc.text(`₦${paymentData.depositAmount.toLocaleString()}`, 150, yPos)
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
      doc.text(`₦${paymentData.depositAmount.toLocaleString()}`, 150, yPos + 5)

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
        "• Please arrive 15 minutes before your reservation time",
        "• Reservation will be held for 15 minutes past scheduled time",
        "• Deposit is non-refundable but will be deducted from your final bill",
        "• For changes or cancellations, call us at least 2 hours in advance",
        "• Valid ID may be required upon arrival",
        "• Special dietary requirements can be accommodated with advance notice",
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
      doc.text("Email: reservations@lustrolagos.com", 20, yPos)
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

      const fileName = `Lustro-Lagos-Reservation-${reservationDetails.reservationId}-${new Date().toISOString().split("T")[0]}.pdf`
      doc.save(fileName)

      showDownloadNotification()
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
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
          <DialogTitle className="text-center text-xl text-green-600">Reservation Confirmed!</DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-6 py-4">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Your reservation is confirmed!</h3>
              <p className="text-gray-600">We've sent a confirmation email to {reservationDetails.email}</p>
            </div>

            <div className="backdrop-blur-sm bg-gray-50/80 p-4 rounded-lg border border-white/20 text-left">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Reservation ID:</span>
                  <span className="font-mono">{reservationDetails.reservationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Payment ID:</span>
                  <span className="font-mono">{receiptId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{new Date(reservationDetails.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time:</span>
                  <span>
                    {reservationDetails.time === "11:00"
                      ? "11:00 AM"
                      : reservationDetails.time === "12:00"
                        ? "12:00 PM"
                        : Number.parseInt(reservationDetails.time) > 12
                          ? `${Number.parseInt(reservationDetails.time) - 12}:00 PM`
                          : `${reservationDetails.time}:00 AM`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Guests:</span>
                  <span>
                    {reservationDetails.guests === "8"
                      ? "8+ Guests"
                      : `${reservationDetails.guests} Guest${Number.parseInt(reservationDetails.guests) > 1 ? "s" : ""}`}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-[#9d6c41] border-t pt-2">
                  <span>Deposit Paid:</span>
                  <span>₦{paymentData.depositAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>📧 Confirmation email sent</p>
              <p>📱 SMS reminder will be sent 2 hours before</p>
              <p>🍽️ Please arrive 15 minutes early</p>
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
