import { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Contact Us | Sydney Lawyer Firm",
  description: "Get in touch with Sydney Lawyer. Request a consultation or contact us via WhatsApp, phone, or email.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your legal matter? Reach out below and we will get back to you within 1 business day.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#8B6914]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-gray-600 text-sm">35 Alice Street<br />Auburn NSW 2144<br />Sydney, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#8B6914]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:0447150899" className="text-gray-600 text-sm hover:text-[#8B6914]">0447 150 899</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#8B6914]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@sydneylawyerfirm.com.au" className="text-gray-600 text-sm hover:text-[#8B6914]">info@sydneylawyerfirm.com.au</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a href="https://wa.me/61447150899" target="_blank" className="text-gray-600 text-sm hover:text-green-600">Message us on WhatsApp →</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#8B6914]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday – Friday: 9:00 AM – 5:30 PM<br />Saturday – Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0!2d151.0330!3d-33.8490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bcf8e0000000%3A0x0!2s35%20Alice%20St%2C%20Auburn%20NSW%202144!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>

            {/* Form */}
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
