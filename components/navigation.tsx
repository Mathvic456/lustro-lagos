"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Menu, X, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CartComponent } from "./cart"
import { PaymentForm } from "./payment-form"
import type { CartItem } from "@/types"
import Image from "next/image"

interface NavigationProps {
  cart: CartItem[]
  updateCartItemQuantity: (cartId: string, newQuantity: number) => void
  removeFromCart: (cartId: string) => void
  clearCart: () => void
  onCheckout: () => void
}

export function Navigation({ cart, updateCartItemQuantity, removeFromCart, clearCart, onCheckout }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const handleCheckoutCart = () => {
    if (cart.length === 0) return
    setIsCartOpen(false)
    setIsPaymentOpen(true)
    onCheckout()
  }

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Events", href: "/events" },
    { name: "Shortlets", href: "/shortlets" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reservations", href: "/reservations" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav className="backdrop-blur-md bg-white/80 shadow-lg border-b border-white/20 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div
                className={`flex items-center space-x-3 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="relative w-12 h-8 flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lustro.jpg-NtxtycpFOdnsjCjbtsbSmFAsUdR3Ic.jpeg"
                    alt="Lustro Lagos Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-gray-600">Restaurant & Shortlets</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center space-x-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
              }`}
            >
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-[#9d6c41] transition-all duration-300 hover:scale-105 relative group ${
                    pathname === item.href ? "text-[#9d6c41] font-semibold" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#9d6c41] transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-2">
              {/* Cart Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative backdrop-blur-sm bg-white/20 hover:bg-white/30 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5" />
                {getCartItemCount() > 0 && (
                  <Badge
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    style={{ backgroundColor: "#9d6c41" }}
                  >
                    {getCartItemCount()}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="backdrop-blur-sm bg-white/20 hover:bg-white/30 transition-all duration-300"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden border-t backdrop-blur-md bg-white/90 transition-all duration-500 ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-gray-700 hover:text-[#9d6c41] transition-all duration-300 hover:bg-white/50 rounded-lg ${
                    pathname === item.href ? "text-[#9d6c41] bg-white/30 font-semibold" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Cart Dialog */}
      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Your Cart ({getCartItemCount()} items)</span>
            </DialogTitle>
            <DialogDescription>Review your items and proceed to checkout</DialogDescription>
          </DialogHeader>
          <CartComponent
            cart={cart}
            updateQuantity={updateCartItemQuantity}
            removeItem={removeFromCart}
            onCheckout={handleCheckoutCart}
            onClearCart={clearCart}
          />
        </DialogContent>
      </Dialog>

      {/* Payment Dialog */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Checkout</DialogTitle>
            <DialogDescription className="text-gray-600">Complete your order</DialogDescription>
          </DialogHeader>
          <PaymentForm
            cartItems={cart}
            onClose={() => {
              setIsPaymentOpen(false)
              clearCart()
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
