export interface OrderItem {
  id: string
  name: string
  price: number
  category: string
  description: string
}

export interface CartItem extends OrderItem {
  quantity: number
  cartId: string
}

export interface PaymentData {
  customerName: string
  email: string
  phone: string
  paymentMethod: "card" | "transfer"
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  items: CartItem[]
}

export interface BookingData {
  apartmentType: string
  checkIn: string
  checkOut: string
  guests: number
  name: string
  email: string
  phone: string
  specialRequests: string
}
