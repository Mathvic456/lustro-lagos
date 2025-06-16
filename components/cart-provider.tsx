"use client"

import type React from "react"
import { createContext, useContext } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"
import type { CartItem, OrderItem } from "@/types"

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: OrderItem, quantity?: number) => void
  removeFromCart: (cartId: string) => void
  updateCartItemQuantity: (cartId: string, newQuantity: number) => void
  clearCart: () => void
  getCartTotal: () => number
  getCartItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCartContext() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider")
  }
  return context
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cartHook = useCart()

  const handleCheckout = () => {
    // This will be handled by the Navigation component
  }

  return (
    <CartContext.Provider value={cartHook}>
      <Navigation
        cart={cartHook.cart}
        updateCartItemQuantity={cartHook.updateCartItemQuantity}
        removeFromCart={cartHook.removeFromCart}
        clearCart={cartHook.clearCart}
        onCheckout={handleCheckout}
      />
      <main>{children}</main>
      <Footer />
    </CartContext.Provider>
  )
}
