import { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, ChevronRight, Globe, Plane, Briefcase, Sun, CheckCircle, Clock } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Working Holiday Visa Australia (417 & 462) | Sydney Lawyer",
  description: "Work, travel and explore Australia for up to 12 months with a Working Holiday Visa. Expert legal assistance from $200 deposit.",
};

const countries = [
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "USA", flag: "🇺🇸" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Chile", flag: "🇨🇱" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Spain", flag: "🇪🇸" },
];

const benefits = [
  { icon: Briefcase, title: "Work & Earn", desc: "Work for any employer in Australia for up to 12 months. Fund your travels and gain international experience." },
  { icon: Plane, title: "Travel Freely", desc: "Explore Australia's stunning landscapes, beaches, and cities with full freedom of movement." },
  { icon: Sun, title: "Extend Your Stay", desc: "You may be eligible for a 2nd or 3rd year visa by completing specified work in regional Australia." },
  { icon: Globe, title: "Study Options", desc: "Study or train for up to 4 months during your working holiday." },
];

export default function WorkingHolidayVisaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2000')" }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🇦🇺</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Your Australian <span className="text-amber-300 italic">Adventure</span> Starts Here
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Work, travel and explore Australia for up to 12 months with a Working Holiday Visa. We handle the paperwork — you pack your bags.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">✅ Subclass 417 & 462</span>
            <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">🌏 Fast Processing</span>
            <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">💬 Free 15-Min Inquiry</span>
          </div>
          <Link href="#apply" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
            Request Free 15-Min Visa Inquiry →
          </Link>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-white/60">
            <a href="tel:0447150899" className="flex items-center gap-1 hover:text-white"><Phone size={14} /> 0447 150 899</a>
            <a href="https://wa.me/61447150899" className="flex items-center gap-1 hover:text-white" target="_blank"><MessageCircle size={14} /> WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Are You From One of These Countries?</h2>
          <p className="text-gray-600 text-center mb-10">Australia has Working Holiday agreements with many countries. Check if you&apos;re eligible.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries.map((c) => (
              <div key={c.name} className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{c.flag}</div>
                <div className="text-sm font-medium">{c.name}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t see your country? <Link href="/contact" className="text-[#8B6914] font-semibold hover:underline">Contact us</Link> — many more countries are eligible.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Why a Working Holiday Visa?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 flex gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <b.icon size={24} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Basic Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Be 18-30 years old (or 18-35 for some countries)",
              "Hold a valid passport from an eligible country",
              "Have sufficient funds (approx. AUD $5,000)",
              "Meet health and character requirements",
              "Not have previously held a WHV (for first application)",
              "Have adequate health insurance",
            ].map((req, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{req}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-8">
            Requirements vary by country and visa subclass. We&apos;ll assess your full eligibility during consultation.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">How We Help You</h2>
          <div className="space-y-6">
            {[
              { n: "1", title: "Free Eligibility Check", desc: "We assess your eligibility and advise on the right visa subclass for your situation." },
              { n: "2", title: "Document Preparation", desc: "We guide you through gathering all required documents and ensure everything meets standards." },
              { n: "3", title: "Application Lodgement", desc: "We prepare and lodge your application with the Department of Home Affairs." },
              { n: "4", title: "Ongoing Support", desc: "We handle any requests for additional information and keep you updated until the visa is granted." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 items-start bg-white rounded-xl p-6">
                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.n}</div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Start Your Application Today</h2>
              <p className="text-gray-600 mb-6">
                Get expert help with your Working Holiday Visa application. We make the process simple and stress-free.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-teal-500" /> Free 15-minute visa inquiry</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-teal-500" /> Expert eligibility assessment</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-teal-500" /> Response within 1 business day</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Clock size={16} className="text-teal-500" /> Mon-Fri 9:00 AM - 5:30 PM</div>
              </div>
              <div className="bg-teal-50 rounded-xl p-4">
                <p className="text-sm text-teal-800"><strong>Sydney Lawyer</strong><br />35 Alice Street, Auburn NSW 2144<br />
                <a href="tel:0447150899" className="hover:underline">📞 0447 150 899</a><br />
                <a href="mailto:info@sydneylawyerfirm.com.au" className="hover:underline">✉️ info@sydneylawyerfirm.com.au</a></p>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
