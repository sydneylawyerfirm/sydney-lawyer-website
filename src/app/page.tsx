import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  Clock,
  Scale,
  Home as HomeIcon,
  ChevronRight,
  FileText,
  Users,
  Shield,
  Globe,
  Gavel,
  Heart,
} from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#1a1a2e] text-white min-h-[600px] flex items-center">
        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#1a1a2e]/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <MapPin size={14} className="text-[#D4A843]" />
            Sydney, NSW
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-bold max-w-2xl leading-tight mb-6">
            Immigration & Property Lawyers in Sydney
          </h1>

          <p className="text-lg text-gray-300 max-w-xl mb-8">
            Clear guidance for visas, citizenship, conveyancing, and leases —
            with a consultation process designed to be straightforward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Free 15-Min Visa Inquiry
            </Link>
            <a
              href="https://wa.me/61447150899"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              target="_blank"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock size={14} />
            We respond within 1 business day (Mon–Fri).
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Our Practice Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on two key areas of law to deliver depth of knowledge and
              attentive service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Immigration */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <Scale size={32} className="text-[#8B6914] mb-4" />
              <h3 className="text-xl font-bold mb-4">Immigration Law</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#8B6914]" />
                  Australian Citizenship applications
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#8B6914]" />
                  Skilled & Partner Visas
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#8B6914]" />
                  Visa Refusals & Appeals
                </li>
              </ul>
              <Link
                href="/immigration-law"
                className="text-[#8B6914] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Explore Immigration Law <ChevronRight size={16} />
              </Link>
            </div>

            {/* Property */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <HomeIcon size={32} className="text-[#8B6914] mb-4" />
              <h3 className="text-xl font-bold mb-4">Property Law</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#8B6914]" />
                  Buying & Selling Property
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#8B6914]" />
                  Lease Agreements
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-[#8B6914]" />
                  Contract Review
                </li>
              </ul>
              <Link
                href="/property-law"
                className="text-[#8B6914] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Explore Property Law <ChevronRight size={16} />
              </Link>
            </div>
          </div>

          {/* New Services Banner */}
          <div className="mt-12 grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link
              href="/partner-visa"
              className="bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Heart size={24} className="mb-2" />
              <h4 className="font-bold">Partner Visa</h4>
              <p className="text-sm text-white/80">
                Subclass 820/801, 309/100 & 300
              </p>
            </Link>
            <Link
              href="/working-holiday-visa"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Globe size={24} className="mb-2" />
              <h4 className="font-bold">Working Holiday Visa</h4>
              <p className="text-sm text-white/80">
                Subclass 417 & 462 applications
              </p>
            </Link>
            <Link
              href="/tourist-visa"
              className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Users size={24} className="mb-2" />
              <h4 className="font-bold">Tourist Visa</h4>
              <p className="text-sm text-white/80">
                Subclass 600 visitor visas
              </p>
            </Link>
            <Link
              href="/federal-court-appeal"
              className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-xl p-5 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Gavel size={24} className="mb-2" />
              <h4 className="font-bold">Federal Court Appeal</h4>
              <p className="text-sm text-white/80">
                Visa refused? Fight back in court
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">
              Getting started is simple. We have designed our process to be
              straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Send an Enquiry",
                desc: "Submit a consultation request or message us on WhatsApp with a brief outline of your situation.",
                icon: FileText,
              },
              {
                step: "02",
                title: "We Review & Contact You",
                desc: "We review your details and arrange a conversation to understand your needs and outline options.",
                icon: Users,
              },
              {
                step: "03",
                title: "Consultation + Next Steps",
                desc: "Receive a clear plan with transparent advice. We handle the legal work so you can focus on what matters.",
                icon: Shield,
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#8B6914] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Quick answers to common questions about working with us.
          </p>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to visit your office in person?",
                a: "No. We can conduct consultations via phone, video call, or WhatsApp. In-person meetings are available at our Sydney office if preferred.",
              },
              {
                q: "How long does the consultation process take?",
                a: "We respond to enquiries within 1 business day. The initial consultation typically takes 30-60 minutes depending on your matter.",
              },
              {
                q: "Do you serve clients outside Sydney?",
                a: "Yes. While we are based in Sydney, we assist clients across Australia and internationally through remote consultations.",
              },
              {
                q: "Is the initial inquiry free?",
                a: "Yes. We offer a free 15-minute visa inquiry to discuss your situation and outline your options. No obligation.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="cursor-pointer px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-50">
                  {faq.q}
                  <ChevronRight
                    size={18}
                    className="text-gray-400 group-open:rotate-90 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link
              href="/faqs"
              className="text-[#8B6914] font-semibold hover:underline"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">
                Request a Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Tell us about your situation and we will get back to you within
                1 business day (Mon–Fri). No obligation, no jargon.
              </p>
              <div className="space-y-4">
                <h3 className="font-bold">What Happens Next</h3>
                {[
                  "We review your enquiry within 1 business day.",
                  "A team member contacts you via your preferred method.",
                  "We discuss your situation and outline your options.",
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-[#8B6914] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="text-gray-600 text-sm">{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
