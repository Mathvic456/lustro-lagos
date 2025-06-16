"use client"

import { useState } from "react"
import type { CartItem, OrderItem } from "@/types"

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: OrderItem, quantity = 1) => {
    const cartId = `${item.id}-${Date.now()}`
    const cartItem: CartItem = { ...item, quantity, cartId }

    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id)

      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += quantity
        return updatedCart
      } else {
        // Add new item to cart
        return [...prevCart, cartItem]
      }
    })
  }

  const removeFromCart = (cartId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId))
  }

  const updateCartItemQuantity = (cartId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartId)
      return
    }

    setCart((prevCart) => prevCart.map((item) => (item.cartId === cartId ? { ...item, quantity: newQuantity } : item)))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  }
}
