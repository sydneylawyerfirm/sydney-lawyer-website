"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#8B6914] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-white/80">Immigration & Property Lawyers — Sydney, NSW</span>
          <a
            href="https://wa.me/61447150899"
            className="flex items-center gap-1.5 hover:underline font-medium"
            target="_blank"
          >
            <MessageCircle size={14} /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="text-lg tracking-wider">
                <span className="font-serif text-xl font-bold text-[#8B6914]">
                  SYDNEY LAWYER
                </span>
                <div className="text-[10px] tracking-[0.2em] text-gray-500 -mt-1">
                  IMMIGRATION & PROPERTY LAW
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-[#8B6914] transition-colors"
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="text-sm font-medium text-gray-700 hover:text-[#8B6914] transition-colors flex items-center gap-1">
                  Services <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2 w-56">
                    <Link
                      href="/immigration-law"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Immigration Law
                    </Link>
                    <Link
                      href="/property-law"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Property Law
                    </Link>
                    <Link
                      href="/commercial-law"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Commercial & Business Law
                    </Link>
                    <hr className="my-1 mx-4" />
                    <Link
                      href="/partner-visa"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Partner Visa
                    </Link>
                    <Link
                      href="/working-holiday-visa"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Working Holiday Visa
                    </Link>
                    <Link
                      href="/tourist-visa"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Tourist Visa
                    </Link>
                    <Link
                      href="/employer-sponsorship"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Employer Sponsorship
                    </Link>
                    <hr className="my-1 mx-4" />
                    <Link
                      href="/tribunal-review"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Visa Refused → Tribunal
                    </Link>
                    <Link
                      href="/federal-court-appeal"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B6914]"
                    >
                      Federal Court Appeal
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-[#8B6914] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-[#8B6914] transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/61447150899"
                target="_blank"
                className="text-sm text-green-600 hover:text-green-700 flex items-center gap-1.5 font-medium"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <Link
                href="/contact"
                className="bg-[#1a1a2e] text-white text-sm px-5 py-2.5 rounded-lg hover:bg-[#2a2a4e] transition-colors font-medium"
              >
                Free 15-Min Inquiry
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/immigration-law" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Immigration Law</Link>
            <Link href="/property-law" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Property Law</Link>
            <Link href="/partner-visa" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Partner Visa</Link>
            <Link href="/working-holiday-visa" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Working Holiday Visa</Link>
            <Link href="/tourist-visa" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Tourist Visa</Link>
            <Link href="/employer-sponsorship" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Employer Sponsorship</Link>
            <Link href="/tribunal-review" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Visa Refused → Tribunal</Link>
            <Link href="/federal-court-appeal" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Federal Court Appeal</Link>
            <Link href="/commercial-law" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Commercial & Business Law</Link>
            <Link href="/about" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" className="block text-gray-700 py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
            <hr />
            <a href="https://wa.me/61447150899" target="_blank" className="block bg-green-500 text-white text-center py-3 rounded-lg font-medium" onClick={() => setMobileOpen(false)}>
              💬 WhatsApp Us
            </a>
            <Link href="/contact" className="block bg-[#1a1a2e] text-white text-center py-3 rounded-lg font-medium" onClick={() => setMobileOpen(false)}>
              Free 15-Min Visa Inquiry
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
