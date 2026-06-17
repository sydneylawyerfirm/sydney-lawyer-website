import { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, ChevronRight, Palmtree, Camera, Heart, Users, CheckCircle, Clock } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Tourist Visa Australia (Subclass 600) | Sydney Lawyer",
  description: "Planning to visit Australia? Get expert help with your Tourist Visa (Subclass 600) application. Pacific Islands, Asia & worldwide.",
};

const pacificCountries = [
  { name: "Fiji", flag: "🇫🇯" },
  { name: "Samoa", flag: "🇼🇸" },
  { name: "Tonga", flag: "🇹🇴" },
  { name: "Papua New Guinea", flag: "🇵🇬" },
  { name: "Vanuatu", flag: "🇻🇺" },
  { name: "Solomon Islands", flag: "🇸🇧" },
];

const asianCountries = [
  { name: "China", flag: "🇨🇳" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "India", flag: "🇮🇳" },
];

const experiences = [
  { icon: Palmtree, title: "World-Class Beaches", desc: "From Bondi to the Whitsundays — Australia's coastline is breathtaking." },
  { icon: Camera, title: "Iconic Landmarks", desc: "Sydney Opera House, Great Barrier Reef, Uluru, and so much more." },
  { icon: Heart, title: "Visit Family & Friends", desc: "Reconnect with loved ones living in Australia." },
  { icon: Users, title: "Business & Events", desc: "Attend conferences, business meetings, or special events." },
];

export default function TouristVisaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-500 to-sky-700 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=2000')" }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✈️</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Dreaming of <span className="text-amber-300 italic">Visiting Australia</span>?
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            We make your Tourist Visa (Subclass 600) application simple. Visit family, explore the country, or attend business events.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">🏖️ Subclass 600</span>
            <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">📋 Full Application Support</span>
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

      {/* Pacific Islands */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Pacific Island Nations</h2>
          <p className="text-gray-600 text-center mb-8">We have extensive experience with visitor visa applications from the Pacific region.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {pacificCountries.map((c) => (
              <div key={c.name} className="bg-sky-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{c.flag}</div>
                <div className="text-sm font-medium">{c.name}</div>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-3xl font-bold text-center mb-4">Asian Countries</h2>
          <p className="text-gray-600 text-center mb-8">Expert assistance for visitors from major Asian countries.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {asianCountries.map((c) => (
              <div key={c.name} className="bg-amber-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{c.flag}</div>
                <div className="text-sm font-medium">{c.name}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Applying from another country? <Link href="/contact" className="text-[#8B6914] font-semibold hover:underline">Contact us</Link> — we assist applicants worldwide.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Why Visit Australia?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((e) => (
              <div key={e.title} className="bg-white rounded-xl p-6 flex gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <e.icon size={24} className="text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{e.title}</h3>
                  <p className="text-gray-600 text-sm">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Streams */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Visitor Visa Streams</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tourist Stream", desc: "For holidays, visiting family/friends, or recreational activities in Australia.", color: "sky" },
              { title: "Business Visitor", desc: "For attending meetings, conferences, or exploring business opportunities.", color: "amber" },
              { title: "Sponsored Family", desc: "For visiting family members who are Australian citizens or permanent residents.", color: "teal" },
            ].map((stream) => (
              <div key={stream.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2">{stream.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{stream.desc}</p>
                <Link href="/contact" className="text-[#8B6914] text-sm font-semibold hover:underline inline-flex items-center gap-1">Learn More <ChevronRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">How We Help You</h2>
          <div className="space-y-6">
            {[
              { n: "1", title: "Free Assessment", desc: "We assess your situation and advise on the best visa stream and supporting documents." },
              { n: "2", title: "Document Preparation", desc: "We help you compile all required documents — financial evidence, travel itinerary, and sponsor details." },
              { n: "3", title: "Application Lodgement", desc: "We prepare and lodge your application with the Department of Home Affairs." },
              { n: "4", title: "Ongoing Support", desc: "We manage any requests for additional information and keep you updated until your visa is decided." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 items-start bg-white rounded-xl p-6">
                <div className="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.n}</div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Start Your Visa Application</h2>
              <p className="text-gray-600 mb-6">Get expert help with your Tourist Visa application. We make visiting Australia simple.</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-sky-500" /> Free 15-minute visa inquiry</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-sky-500" /> Expert eligibility assessment</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-sky-500" /> Response within 1 business day</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Clock size={16} className="text-sky-500" /> Mon-Fri 9:00 AM - 5:30 PM</div>
              </div>
              <div className="bg-sky-50 rounded-xl p-4">
                <p className="text-sm text-sky-800"><strong>Sydney Lawyer</strong><br />35 Alice Street, Auburn NSW 2144<br />
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
