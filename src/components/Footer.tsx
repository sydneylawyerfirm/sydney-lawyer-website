import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* CTA Band */}
      <div className="bg-[#8B6914] py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Ready to Discuss Your Legal Matter?
          </h2>
          <p className="text-white/80 mb-6">
            Get in touch today. Our team is here to help you navigate
            immigration and property law with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Free 15-Min Visa Inquiry
            </Link>
            <a
              href="https://wa.me/61447150899"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              target="_blank"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-serif text-xl font-bold text-[#D4A843] mb-2">
              SYDNEY LAWYER
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Serving clients across Sydney, NSW with trusted immigration and
              property law expertise.
            </p>
            <p className="text-xs text-gray-500">ABN: 95 692 434 816</p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Practice Areas</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/immigration-law"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  Immigration Law
                </Link>
              </li>
              <li>
                <Link
                  href="/property-law"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  Property Law
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-visa"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  Partner Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/working-holiday-visa"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  Working Holiday Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/tourist-visa"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  Tourist Visa
                </Link>
              </li>
              <li>
                <Link
                  href="/federal-court-appeal"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  Federal Court Appeal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-[#D4A843] transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="https://wa.me/61447150899"
                  className="hover:text-[#D4A843] transition-colors flex items-center gap-2"
                  target="_blank"
                >
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sydneylawyerfirm.com.au"
                  className="hover:text-[#D4A843] transition-colors flex items-center gap-2"
                >
                  <Mail size={14} /> info@sydneylawyerfirm.com.au
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} /> Sydney, NSW, Australia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Sydney Lawyer Firm. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-gray-300">
              Disclaimer
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/61447150899"
        target="_blank"
        className="whatsapp-float"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </footer>
  );
}
