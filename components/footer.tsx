import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900/95 backdrop-blur-md text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                style={{ backgroundColor: "#9d6c41" }}
              >
                <span className="text-white font-bold">L</span>
              </div>
              <span className="font-semibold text-lg">Lustro Lagos</span>
            </div>
            <p className="text-sm text-gray-400">
              Experience exceptional dining and comfortable stays in the heart of Yaba, Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "Shortlets", href: "/shortlets" },
                { name: "Gallery", href: "/gallery" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              {[
                "Restaurant Dining",
                "Food Delivery",
                "Shortlet Apartments",
                "Event Catering",
                "Table Reservations",
              ].map((service) => (
                <p key={service} className="text-sm text-gray-400">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>37a Ibukun Olu Street</p>
              <p>Akoka, Yaba, Lagos</p>
              <p>+234 901 234 5678</p>
              <p>hello@lustrolagos.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">© 2024 Lustro Lagos. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/reservations"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Reservations
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
