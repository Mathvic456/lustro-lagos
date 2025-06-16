"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useCartContext } from "@/components/cart-provider"
import { PaymentForm } from "@/components/payment-form"
import { Search, Filter, ShoppingCart, Star } from "lucide-react"
import type { OrderItem } from "@/types"

export default function MenuPage() {
  const [selectedItem, setSelectedItem] = useState<OrderItem | null>(null)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [menuType, setMenuType] = useState("food")
  const { addToCart } = useCartContext()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleOrderNow = (item: OrderItem) => {
    setSelectedItem(item)
    setIsPaymentOpen(true)
  }

  const allMenuItems = {
    food: {
      starters: [
        {
          id: "st1",
          name: "Lustro Wings",
          description: "Spicy buffalo wings with blue cheese dip",
          price: 8500,
          popular: true,
        },
        { id: "st2", name: "Calamari Rings", description: "Crispy squid rings with marinara sauce", price: 12000 },
        { id: "st3", name: "Beef Samosas", description: "Crispy pastry filled with spiced beef", price: 6500 },
        { id: "st4", name: "Chicken Quesadilla", description: "Grilled tortilla with chicken and cheese", price: 9500 },
        { id: "st5", name: "Prawn Cocktail", description: "Fresh prawns with cocktail sauce", price: 15000 },
      ],
      mains: [
        {
          id: "mn1",
          name: "Lustro Jollof Rice",
          description: "Signature jollof with premium ingredients",
          price: 12000,
          popular: true,
        },
        { id: "mn2", name: "Creamy Alfredo Pasta", description: "Rich cream sauce with grilled chicken", price: 18500 },
        { id: "mn3", name: "Ribeye Steak", description: "Premium ribeye with garlic butter", price: 28000 },
        { id: "mn4", name: "Grilled Chicken", description: "Whole chicken marinated and grilled", price: 15000 },
        { id: "mn5", name: "Seafood Linguine", description: "Mixed seafood in white wine sauce", price: 22000 },
        { id: "mn6", name: "BBQ Ribs", description: "Slow-cooked ribs with BBQ sauce", price: 22000 },
        { id: "mn7", name: "Fish Tacos", description: "Beer-battered fish with cabbage slaw", price: 8500 },
        { id: "mn8", name: "Coconut Rice", description: "Fragrant rice cooked in coconut milk", price: 10500 },
      ],
      platters: [
        {
          id: "pl1",
          name: "BFF Platter",
          description: "Jollof rice, peppered chicken, gizzard & fries",
          price: 25000,
          popular: true,
        },
        { id: "pl2", name: "Lustro Mega Platter", description: "Mixed grill with sides for sharing", price: 35000 },
        { id: "pl3", name: "Seafood Platter", description: "Grilled fish, prawns, and calamari", price: 28000 },
        { id: "pl4", name: "Family Feast", description: "Complete meal for 4-6 people", price: 45000 },
      ],
      sides: [
        { id: "sd1", name: "French Fries", description: "Crispy golden fries", price: 4500 },
        { id: "sd2", name: "Coleslaw", description: "Fresh cabbage and carrot salad", price: 3500 },
        {
          id: "sd3",
          name: "Grilled Vegetables",
          description: "Seasonal vegetables grilled to perfection",
          price: 5500,
        },
        { id: "sd4", name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 3000 },
      ],
    },
    drinks: {
      cocktails: [
        {
          id: "ck1",
          name: "Lustro Signature",
          description: "House special with premium spirits",
          price: 8000,
          popular: true,
        },
        { id: "ck2", name: "Mojito", description: "Classic mint and lime cocktail", price: 6500 },
        { id: "ck3", name: "Cosmopolitan", description: "Vodka, cranberry, and lime", price: 7000 },
        { id: "ck4", name: "Old Fashioned", description: "Whiskey with bitters and orange", price: 7500 },
      ],
      wines: [
        { id: "wn1", name: "House White Wine", description: "Premium selection by the glass", price: 4500 },
        { id: "wn2", name: "House Red Wine", description: "Full-bodied red wine", price: 4500 },
        { id: "wn3", name: "Champagne", description: "Sparkling wine for celebrations", price: 12000 },
      ],
      beers: [
        { id: "br1", name: "Local Beer", description: "Star, Gulder, or Trophy", price: 2500 },
        { id: "br2", name: "Imported Beer", description: "Heineken, Corona, or Budweiser", price: 3500 },
        { id: "br3", name: "Craft Beer", description: "Artisanal local craft beer", price: 4000 },
      ],
      nonAlcoholic: [
        { id: "na1", name: "Fresh Juice", description: "Orange, pineapple, or watermelon", price: 3500 },
        { id: "na2", name: "Smoothies", description: "Mixed fruit smoothies", price: 4500 },
        { id: "na3", name: "Soft Drinks", description: "Coke, Pepsi, Sprite, Fanta", price: 2000 },
        { id: "na4", name: "Coffee/Tea", description: "Freshly brewed coffee or tea", price: 2500 },
      ],
    },
  }

  // Get all items for current menu type
  const getCurrentItems = () => {
    const items = allMenuItems[menuType as keyof typeof allMenuItems]
    let allItems: any[] = []

    Object.entries(items).forEach(([category, categoryItems]) => {
      allItems = [...allItems, ...categoryItems.map((item) => ({ ...item, category }))]
    })

    return allItems
  }

  // Filter items based on category and search
  const getFilteredItems = () => {
    let items = getCurrentItems()

    if (selectedCategory !== "all") {
      items = items.filter((item) => item.category === selectedCategory)
    }

    if (searchQuery) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    return items
  }

  const getCategoryOptions = () => {
    const items = allMenuItems[menuType as keyof typeof allMenuItems]
    return Object.keys(items).map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
    }))
  }

  const filteredItems = getFilteredItems()
  const popularItems = getCurrentItems().filter((item) => item.popular)

  return (
    <div className="min-h-screen">
      {/* Payment Dialog */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/95 border border-white/20 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Order & Payment</DialogTitle>
            <DialogDescription className="text-gray-600">
              Complete your order for {selectedItem?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedItem && (
            <PaymentForm
              item={selectedItem}
              onClose={() => {
                setIsPaymentOpen(false)
                setSelectedItem(null)
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#9d6c41] to-amber-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">Our Menu</h1>
            <p className="text-base md:text-lg mb-6 drop-shadow-md max-w-2xl mx-auto">
              Discover our carefully crafted dishes and premium beverages
            </p>
          </div>
        </div>
      </section>

      {/* Menu Controls */}
      <section className="py-6 bg-white/90 backdrop-blur-sm sticky top-16 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Menu Type Toggle */}
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => {
                  setMenuType("food")
                  setSelectedCategory("all")
                  setSearchQuery("")
                }}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  menuType === "food" ? "bg-[#9d6c41] text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Food
              </button>
              <button
                onClick={() => {
                  setMenuType("drinks")
                  setSelectedCategory("all")
                  setSearchQuery("")
                }}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  menuType === "drinks" ? "bg-[#9d6c41] text-white shadow-lg" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Drinks
              </button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/80 border-gray-200"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-40 pl-10 bg-white/80 border-gray-200">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Items</SelectItem>
                  {getCategoryOptions().map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      {selectedCategory === "all" && !searchQuery && (
        <section className="py-8 bg-gradient-to-b from-amber-50/50 to-white/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-5 h-5 text-[#9d6c41] mr-2" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Popular Items</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {popularItems.map((item, index) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  isVisible={isVisible}
                  onAddToCart={() => addToCart({ ...item })}
                  onOrderNow={() => handleOrderNow({ ...item })}
                  isPopular={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Menu Items Section */}
      <section className="py-8 bg-gradient-to-b from-white/50 to-stone-50/50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
              {selectedCategory === "all"
                ? `All ${menuType.charAt(0).toUpperCase() + menuType.slice(1)}`
                : getCategoryOptions().find((opt) => opt.value === selectedCategory)?.label || "Menu Items"}
            </h2>
            <p className="text-gray-600 text-center mt-2">
              {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredItems.map((item, index) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  index={index}
                  isVisible={isVisible}
                  onAddToCart={() => addToCart({ ...item })}
                  onOrderNow={() => handleOrderNow({ ...item })}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

// Separate component for menu item cards
function MenuItemCard({
  item,
  index,
  isVisible,
  onAddToCart,
  onOrderNow,
  isPopular = false,
}: {
  item: any
  index: number
  isVisible: boolean
  onAddToCart: () => void
  onOrderNow: () => void
  isPopular?: boolean
}) {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-500 backdrop-blur-md bg-white/90 border border-white/20 hover:scale-[1.02] hover:bg-white ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <CardHeader className="pb-3 relative">
        {isPopular && (
          <div className="absolute -top-2 -right-2 bg-[#9d6c41] text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Star className="w-3 h-3 mr-1" />
            Popular
          </div>
        )}
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base font-semibold leading-tight mb-1 group-hover:text-[#9d6c41] transition-colors">
              {item.name}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {item.description}
            </CardDescription>
          </div>
          <Badge
            style={{ backgroundColor: "#9d6c41" }}
            className="text-white shadow-lg backdrop-blur-sm text-sm px-2 py-1 whitespace-nowrap flex-shrink-0"
          >
            ₦{item.price.toLocaleString()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={onAddToCart}
            className="flex-1 border-[#9d6c41] text-[#9d6c41] hover:bg-[#9d6c41] hover:text-white transition-all duration-300 text-xs"
          >
            <ShoppingCart className="w-3 h-3 mr-1" />
            Add
          </Button>
          <Button
            size="sm"
            onClick={onOrderNow}
            className="flex-1 hover:scale-105 transition-all duration-300 shadow-lg text-xs"
            style={{ backgroundColor: "#9d6c41" }}
          >
            Order Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
