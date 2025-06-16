import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-stone-50">{children}</div>
        </CartProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
