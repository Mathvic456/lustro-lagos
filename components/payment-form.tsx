"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CheckCircle, Loader2, Plus, Minus, CreditCard, Banknote } from "lucide-react"
import type { CartItem, OrderItem } from "@/types"

interface PaymentData {
  customerName: string
  email: string
  phone: string
  paymentMethod: "card" | "transfer"
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  items: CartItem[]
}

interface PaymentFormProps {
  item?: OrderItem | null
  cartItems?: CartItem[]
  onClose: () => void
}

export function PaymentForm({ item, cartItems, onClose }: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentData>({
    customerName: "",
    email: "",
    phone: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    items: cartItems || (item ? [{ ...item, quantity: 1, cartId: `single-${item.id}` }] : []),
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [receipt, setReceipt] = useState<string | null>(null)

  const handleQuantityChange = (change: number) => {
    if (item && formData.items.length === 1) {
      const newQuantity = Math.max(1, formData.items[0].quantity + change)
      setFormData({
        ...formData,
        items: [{ ...formData.items[0], quantity: newQuantity }],
      })
    }
  }

  const totalAmount = formData.items.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const receiptId = `LUS-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    setReceipt(receiptId)
    setIsProcessing(false)
  }

  if (receipt) {
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
        doc.text("ORDER CONFIRMATION & RECEIPT", 20, 55)

        // Date and receipt info
        doc.setFontSize(10)
        doc.setFont("helvetica", "normal")
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 65)
        doc.text(`Receipt ID: ${receipt}`, 20, 72)
        doc.text(`Order Type: ${item ? "Single Item" : "Multiple Items"}`, 20, 79)

        // Divider line
        doc.setDrawColor(...primaryColor)
        doc.setLineWidth(0.5)
        doc.line(20, 85, 190, 85)

        // Customer Information Section
        let yPos = 95
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(...primaryColor)
        doc.text("CUSTOMER INFORMATION", 20, yPos)

        yPos += 10
        doc.setFontSize(10)
        doc.setFont("helvetica", "normal")
        doc.setTextColor(...darkGray)
        doc.text(`Name: ${formData.customerName}`, 20, yPos)
        yPos += 7
        doc.text(`Email: ${formData.email}`, 20, yPos)
        yPos += 7
        doc.text(`Phone: ${formData.phone}`, 20, yPos)

        // Order Details Section
        yPos += 15
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(...primaryColor)
        doc.text("ORDER DETAILS", 20, yPos)

        yPos += 10
        doc.setFontSize(10)
        doc.setFont("helvetica", "normal")
        doc.setTextColor(...darkGray)

        formData.items.forEach((orderItem, index) => {
          doc.text(`${index + 1}. ${orderItem.name}`, 20, yPos)
          yPos += 5
          doc.text(`   Quantity: ${orderItem.quantity}`, 25, yPos)
          yPos += 5
          doc.text(`   Price per item: ₦${orderItem.price.toLocaleString()}`, 25, yPos)
          yPos += 5
          doc.text(`   Subtotal: ₦${(orderItem.price * orderItem.quantity).toLocaleString()}`, 25, yPos)
          yPos += 8
        })

        // Payment Details Section
        yPos += 5
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(...primaryColor)
        doc.text("PAYMENT DETAILS", 20, yPos)

        yPos += 10
        doc.setFontSize(10)
        doc.setFont("helvetica", "normal")
        doc.setTextColor(...darkGray)
        doc.text(`Payment Method:`, 20, yPos)
        doc.text(`${formData.paymentMethod === "card" ? "Credit/Debit Card" : "Bank Transfer"}`, 150, yPos)
        yPos += 7
        doc.text(`Order Date:`, 20, yPos)
        doc.text(`${new Date().toLocaleDateString()}`, 150, yPos)

        // Total amount box
        yPos += 10
        doc.setFillColor(245, 245, 245)
        doc.rect(20, yPos - 5, 170, 15, "F")
        doc.setFontSize(12)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(...primaryColor)
        doc.text("TOTAL AMOUNT PAID:", 25, yPos + 5)
        doc.text(`₦${totalAmount.toLocaleString()}`, 150, yPos + 5)

        // Important Information Section
        yPos += 25
        doc.setFontSize(14)
        doc.setFont("helvetica", "bold")
        doc.setTextColor(...primaryColor)
        doc.text("ORDER INFORMATION", 20, yPos)

        yPos += 10
        doc.setFontSize(9)
        doc.setFont("helvetica", "normal")
        doc.setTextColor(...darkGray)

        const orderInfo = [
          "• Your order has been confirmed and is being prepared",
          "• Estimated preparation time: 15-30 minutes",
          "• You will receive an SMS when your order is ready",
          "• For delivery orders, our driver will contact you",
          "• For pickup orders, please show this receipt",
          "• Contact us for any changes or inquiries",
        ]

        orderInfo.forEach((info) => {
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

        const fileName = `Lustro-Lagos-Order-${receipt}-${new Date().toISOString().split("T")[0]}.pdf`
        doc.save(fileName)

        // Show success notification
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
      } catch (error) {
        console.error("Error generating PDF:", error)
      }
    }

    return (
      <div className="text-center space-y-4 animate-in fade-in duration-500">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-in zoom-in duration-700" />
        <h3 className="text-xl font-bold text-green-600">Payment Successful!</h3>
        <div className="backdrop-blur-sm bg-gray-50/80 p-4 rounded-lg space-y-2 border border-white/20">
          <p className="font-semibold">Receipt ID: {receipt}</p>
          <div className="text-sm text-gray-600 space-y-1">
            <p className="font-semibold">Items Ordered:</p>
            {formData.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 font-semibold border-t pt-2">
            Total Amount: ₦{totalAmount.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Customer: {formData.customerName}</p>
          <p className="text-sm text-gray-600">Email: {formData.email}</p>
          <p className="text-sm text-gray-600">Phone: {formData.phone}</p>
          <p className="text-sm text-gray-600">
            Payment Method: {formData.paymentMethod === "card" ? "Card" : "Bank Transfer"}
          </p>
          <p className="text-sm text-gray-600">Date: {new Date().toLocaleString()}</p>
        </div>
        <p className="text-sm text-gray-600">
          Your order has been confirmed. You will receive a confirmation email shortly.
        </p>
        <div className="space-y-2">
          <Button
            onClick={onClose}
            className="w-full hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: "#9d6c41" }}
          >
            Close
          </Button>
          <Button variant="outline" onClick={generatePDFReceipt} className="w-full">
            📄 Download PDF Receipt
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Order Summary */}
      <div className="backdrop-blur-sm bg-gray-50/80 p-4 rounded-lg border border-white/20">
        <h4 className="font-semibold mb-2">Order Summary</h4>
        <div className="space-y-2">
          {formData.items.map((orderItem, index) => (
            <div key={index} className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{orderItem.name}</p>
                <p className="text-xs text-gray-600 line-clamp-2">{orderItem.description}</p>
                <p className="text-xs text-gray-600">₦{orderItem.price.toLocaleString()} each</p>
              </div>

              {/* Quantity controls for single item orders */}
              {item && formData.items.length === 1 && (
                <div className="flex items-center space-x-2 mx-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={orderItem.quantity <= 1}
                    className="h-6 w-6 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="text-sm font-medium min-w-[1.5rem] text-center">{orderItem.quantity}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    className="h-6 w-6 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              )}

              {/* For cart items, just show quantity */}
              {!item && (
                <div className="text-right">
                  <span className="text-sm">Qty: {orderItem.quantity}</span>
                </div>
              )}

              <div className="text-right">
                <span className="font-semibold text-sm text-[#9d6c41]">
                  ₦{(orderItem.price * orderItem.quantity).toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg text-[#9d6c41]">₦{totalAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Customer Information */}
      <div className="space-y-3">
        <h4 className="font-semibold">Customer Information</h4>
        <div className="grid grid-cols-1 gap-3">
          <div>
            <Label htmlFor="customerName">Full Name</Label>
            <Input
              id="customerName"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
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
        </div>
      </div>

      {/* Payment Method */}
      <div className="space-y-3">
        <h4 className="font-semibold">Payment Method</h4>
        <RadioGroup
          value={formData.paymentMethod}
          onValueChange={(value: "card" | "transfer") => setFormData({ ...formData, paymentMethod: value })}
        >
          <div className="flex items-center space-x-2 p-3 rounded-lg backdrop-blur-sm bg-white/50 border border-white/20 hover:bg-white/70 transition-all duration-300">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center space-x-2 cursor-pointer">
              <CreditCard className="w-4 h-4" />
              <span>Credit/Debit Card</span>
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg backdrop-blur-sm bg-white/50 border border-white/20 hover:bg-white/70 transition-all duration-300">
            <RadioGroupItem value="transfer" id="transfer" />
            <Label htmlFor="transfer" className="flex items-center space-x-2 cursor-pointer">
              <Banknote className="w-4 h-4" />
              <span>Bank Transfer</span>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Card Details */}
      {formData.paymentMethod === "card" && (
        <div className="space-y-3 animate-in slide-in-from-top duration-300">
          <h4 className="font-semibold">Card Details</h4>
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
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
                value={formData.expiryDate}
                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                className="backdrop-blur-sm bg-white/80 border-white/20"
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                className="backdrop-blur-sm bg-white/80 border-white/20"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* Transfer Details */}
      {formData.paymentMethod === "transfer" && (
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
              <strong>Amount:</strong> ₦{totalAmount.toLocaleString()}
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Please make the transfer and click "Complete Order" below. Your order will be confirmed once payment is
            received.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">Total Amount:</span>
          <span className="font-bold text-lg text-[#9d6c41]">₦{totalAmount.toLocaleString()}</span>
        </div>
        <Button
          type="submit"
          className="w-full hover:scale-105 transition-all duration-300 shadow-lg"
          style={{ backgroundColor: "#9d6c41" }}
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : formData.paymentMethod === "card" ? (
            "Pay Now"
          ) : (
            "Complete Order"
          )}
        </Button>
      </div>
    </form>
  )
}
