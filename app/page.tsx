"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  MapPin,
  Phone,
  Clock,
  Bed,
  Users,
  CreditCard,
  Banknote,
  CheckCircle,
  Loader2,
  Plus,
  Minus,
  ShoppingCart,
  Trash2,
  Star,
  Utensils,
  Camera,
} from "lucide-react"
import Link from "next/link"

interface OrderItem {
  id: string
  name: string
  price: number
  category: string
  description: string
}

interface CartItem extends OrderItem {
  quantity: number
  cartId: string
}

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

interface BookingData {
  apartmentType: string
  checkIn: string
  checkOut: string
  guests: number
  name: string
  email: string
  phone: string
  specialRequests: string
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-[#9d6c41] to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div
            className={`max-w-3xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">Welcome to Lustro Lagos</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md max-w-2xl">
              Experience exceptional dining and comfortable stays in the heart of Yaba, Lagos. Where culinary excellence
              meets hospitality perfection.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-white/90 text-[#9d6c41] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm text-lg px-8 py-4"
              >
                <Link href="/menu" className="flex items-center space-x-2">
                  <Utensils className="w-5 h-5" />
                  <span>Explore Menu</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/90 text-[#9d6c41] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm text-lg px-8 py-4"
              >
                <Link href="/shortlets" className="flex items-center space-x-2">
                  <Bed className="w-5 h-5" />
                  <span>Book Stay</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white/50 to-stone-50/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Lustro Lagos</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our establishment, Lustro Lagos has been a beacon of culinary excellence and hospitality in Yaba,
                Lagos. We pride ourselves on serving exceptional cuisine crafted from the finest ingredients, while
                providing comfortable accommodations for travelers and locals alike.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to quality, service, and creating memorable experiences has made us a preferred
                destination for food enthusiasts and travelers seeking comfort and luxury in the heart of Lagos.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#9d6c41] mb-2">5+</div>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#9d6c41] mb-2">10K+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="aspect-square bg-gradient-to-br from-[#9d6c41] to-amber-700 rounded-2xl flex items-center justify-center text-white font-semibold text-2xl shadow-2xl">
                About Us Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Images Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-stone-50/50 to-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Experience Lustro Lagos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From our exquisite dining spaces to our comfortable accommodations, every corner of Lustro Lagos is
              designed to provide you with an unforgettable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Fine Dining", description: "Elegant restaurant atmosphere" },
              { title: "Luxury Suites", description: "Comfortable shortlet apartments" },
              { title: "Culinary Excellence", description: "Chef's signature dishes" },
              { title: "Modern Amenities", description: "State-of-the-art facilities" },
              { title: "Event Spaces", description: "Perfect for celebrations" },
              { title: "City Views", description: "Stunning Lagos skyline" },
            ].map((item, index) => (
              <Card
                key={item.title}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 border border-white/20 hover:scale-105 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-[#9d6c41] to-amber-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-white/80" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="hover:scale-105 transition-all duration-300 shadow-lg text-lg px-8 py-4"
              style={{ backgroundColor: "#9d6c41" }}
            >
              <Link href="/gallery" className="flex items-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>View Full Gallery</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white/50 to-stone-50/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of services designed to cater to all your dining and accommodation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Utensils,
                title: "Restaurant & Dining",
                description:
                  "Experience our diverse menu featuring local and international cuisines, crafted by expert chefs using the finest ingredients.",
                features: ["Fine Dining", "Takeaway", "Delivery", "Catering"],
                link: "/menu",
              },
              {
                icon: Bed,
                title: "Shortlet Apartments",
                description:
                  "Comfortable, fully-furnished apartments perfect for business trips, vacations, or extended stays in Lagos.",
                features: ["Studio Apartments", "One Bedroom", "24/7 Security", "Free WiFi"],
                link: "/shortlets",
              },
              {
                icon: Users,
                title: "Event Services",
                description:
                  "Host your special occasions with us. From intimate dinners to corporate events, we provide exceptional service.",
                features: ["Private Dining", "Corporate Events", "Celebrations", "Custom Menus"],
                link: "/reservations",
              },
            ].map((service, index) => (
              <Card
                key={service.title}
                className={`hover:shadow-2xl transition-all duration-500 backdrop-blur-md bg-white/80 border border-white/20 hover:scale-105 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "#9d6c41" }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-[#9d6c41]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full hover:scale-105 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: "#9d6c41" }}
                  >
                    <Link href={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branches and Locations Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-stone-50/50 to-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conveniently located in the heart of Yaba, Lagos, we're easily accessible and perfectly positioned for
              both business and leisure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <Card className="backdrop-blur-md bg-white/80 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <MapPin className="w-6 h-6 text-[#9d6c41]" />
                    <span>Lustro Lagos - Yaba</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-600">
                          Pako B/stop, 37a Ibukun Olu Street
                          <br />
                          Akoka, Yaba, Lagos 102216, Nigeria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-semibold">Operating Hours</p>
                        <div className="text-gray-600 space-y-1">
                          <p>Restaurant:</p>
                          <p>Mon - Thu: 11:00 AM - 11:00 PM</p>
                          <p>Fri - Sun: 11:00 AM - 12:00 AM</p>
                          <p className="mt-2">Shortlets: 24/7</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#9d6c41] mt-1" />
                      <div>
                        <p className="font-semibold">Contact</p>
                        <div className="text-gray-600 space-y-1">
                          <p>+234 901 234 5678</p>
                          <p>hello@lustrolagos.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Button
                      className="flex-1 hover:scale-105 transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: "#9d6c41" }}
                    >
                      <Link href="/contact">Get Directions</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-[#9d6c41] text-[#9d6c41] hover:bg-[#9d6c41] hover:text-white hover:scale-105 transition-all duration-300"
                    >
                      <Link href="/reservations">Make Reservation</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="aspect-square bg-gradient-to-br from-[#9d6c41] to-amber-700 rounded-2xl flex items-center justify-center text-white font-semibold text-2xl shadow-2xl">
                Interactive Map
                <br />
                (Coming Soon)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#9d6c41] to-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-3xl mx-auto">
              Whether you're craving exceptional cuisine or need comfortable accommodation, Lustro Lagos is here to
              exceed your expectations.
            </p> q
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-white/90 text-[#9d6c41] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm text-lg px-8 py-4"
              >
                <Link href="/menu">Order Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/90 text-[#9d6c41] hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm text-lg px-8 py-4"
              >
                <Link href="/reservations">Book Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CartComponent({
  cart,
  updateQuantity,
  removeItem,
  onCheckout,
  onClearCart,
}: {
  cart: CartItem[]
  updateQuantity: (cartId: string, quantity: number) => void
  removeItem: (cartId: string) => void
  onCheckout: () => void
  onClearCart: () => void
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-500 mb-4">Your cart is empty</p>
        <p className="text-sm text-gray-400">Add some delicious items from our menu!</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Cart Items */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {cart.map((item) => (
          <div
            key={item.cartId}
            className="flex items-center space-x-3 p-3 backdrop-blur-sm bg-gray-50/80 rounded-lg border border-white/20"
          >
            <div className="flex-1">
              <h4 className="font-medium text-sm">{item.name}</h4>
              <p className="text-xs text-gray-600">{item.description}</p>
              <p className="text-sm font-semibold text-[#9d6c41]">₦{item.price.toLocaleString()} each</p>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                className="h-6 w-6 p-0"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-sm font-medium min-w-[1.5rem] text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                className="h-6 w-6 p-0"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>

            <div className="text-right">
              <p className="text-sm font-semibold">₦{(item.price * item.quantity).toLocaleString()}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(item.cartId)}
                className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-xl text-[#9d6c41]">₦{total.toLocaleString()}</span>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={onClearCart}
            className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
          >
            Clear Cart
          </Button>
          <Button
            onClick={onCheckout}
            className="flex-1 hover:scale-105 transition-all duration-300 shadow-lg"
            style={{ backgroundColor: "#9d6c41" }}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

function PaymentForm({
  item,
  cartItems,
  onClose,
}: {
  item?: OrderItem | null
  cartItems?: CartItem[]
  onClose: () => void
}) {
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
        <Button
          onClick={onClose}
          className="w-full hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: "#9d6c41" }}
        >
          Close
        </Button>
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
              <div className="flex-1">
                <p className="font-medium text-sm">{orderItem.name}</p>
                <p className="text-xs text-gray-600">{orderItem.description}</p>
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

      {/* Total */}
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const bookingId = `LUS-BOOK-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    console.log("Booking submitted:", { ...formData, bookingId })
    alert(`Booking request submitted! Your booking ID is: ${bookingId}. We will contact you shortly to confirm.`)
    setIsSubmitting(false)
  }

  return (
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

      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span>Rate per night:</span>
          <span className="font-bold text-[#9d6c41]">₦{price.toLocaleString()}</span>
        </div>
        <Button
          type="submit"
          className="w-full hover:scale-105 transition-all duration-300 shadow-lg"
          style={{ backgroundColor: "#9d6c41" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </div>
          ) : (
            "Submit Booking Request"
          )}
        </Button>
      </div>
    </form>
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const reservationId = `LUS-RES-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    console.log("Reservation submitted:", { ...formData, reservationId })
    alert(`Reservation request submitted! Your reservation ID is: ${reservationId}. We will contact you to confirm.`)
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="date">Date</Label>
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
          <Label htmlFor="time">Time</Label>
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
            <SelectValue placeholder="Select guests" />
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
          placeholder="Dietary restrictions, special occasions, seating preferences..."
          className="backdrop-blur-sm bg-white/80 border-white/20"
        />
      </div>

      <Button
        type="submit"
        className="w-full hover:scale-105 transition-all duration-300 shadow-lg"
        style={{ backgroundColor: "#9d6c41" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Making Reservation...</span>
          </div>
        ) : (
          "Make Reservation"
        )}
      </Button>
    </form>
  )
}
