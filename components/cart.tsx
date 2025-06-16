"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import type { CartItem } from "@/types"

interface CartComponentProps {
  cart: CartItem[]
  updateQuantity: (cartId: string, quantity: number) => void
  removeItem: (cartId: string) => void
  onCheckout: () => void
  onClearCart: () => void
}

export function CartComponent({ cart, updateQuantity, removeItem, onCheckout, onClearCart }: CartComponentProps) {
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
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{item.name}</h4>
              <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
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

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
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
