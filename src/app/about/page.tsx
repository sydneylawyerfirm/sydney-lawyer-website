import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Shield, Users, Heart, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Sydney Lawyer Firm",
  description: "Personalized legal expertise in immigration and property law, guided by Principal Lawyer Nora Mosa.",
};

const values = [
  { icon: Shield, title: "Integrity", desc: "We are honest, transparent, and ethical in everything we do. You can trust us to give you straightforward advice." },
  { icon: Heart, title: "Client Focus", desc: "Your goals drive our work. We listen carefully, communicate clearly, and tailor our approach to your unique situation." },
  { icon: BookOpen, title: "Diligence", desc: "We are thorough and detail-oriented. Every application, contract, and case receives our full attention and care." },
  { icon: Users, title: "Knowledge", desc: "We maintain deep expertise in immigration and property law, staying current with legislative and policy changes." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Our Firm</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Personalized legal expertise in immigration and property law, guided by Principal Lawyer Nora Mosa.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-6">Our Approach</h2>
          <div className="prose text-gray-700 space-y-4">
            <p>We believe legal services should be accessible, clear, and dependable. Our firm was built on the principle that every client deserves to understand their options and feel confident in the legal process.</p>
            <p>Rather than spreading ourselves across every area of law, we focus on immigration and property. This allows us to maintain deep knowledge and deliver better outcomes for the people we serve.</p>
            <p>Based in Sydney, we work with individuals, families, and businesses navigating Australian immigration pathways or property transactions. Whether you are applying for citizenship, buying your first home, or reviewing a commercial lease, we provide calm, professional guidance every step of the way.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-10 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 flex gap-4">
                <div className="w-12 h-12 bg-[#8B6914]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <v.icon size={24} className="text-[#8B6914]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nora Mosa */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-32 h-32 bg-[#8B6914]/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users size={48} className="text-[#8B6914]" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold mb-1">Nora Mosa</h2>
                <p className="text-[#8B6914] font-medium mb-4">Principal Lawyer</p>
                <p className="text-gray-600 mb-4">
                  Specialized expertise in immigration and property law, committed to delivering clear, practical legal guidance tailored to your needs.
                </p>
                <h3 className="font-bold mb-2">Background</h3>
                <p className="text-gray-600 text-sm mb-4">
                  With extensive experience in both immigration and property law, Nora has built a reputation for providing pragmatic, client-focused legal solutions. She takes the time to understand each client&apos;s unique circumstances and works closely with them to achieve the best possible outcomes.
                </p>
                <h3 className="font-bold mb-2">Specializations</h3>
                <ul className="text-gray-600 text-sm space-y-1 mb-4">
                  <li>• Visa applications and immigration compliance</li>
                  <li>• Citizenship and permanent residency matters</li>
                  <li>• Residential and commercial property transactions</li>
                  <li>• Contract review and lease negotiations</li>
                </ul>
                <h3 className="font-bold mb-2">Approach</h3>
                <p className="text-gray-600 text-sm">
                  Nora believes in clear communication and proactive advice. She keeps you informed at every step and ensures you fully understand your options before making decisions. Your success is her priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold mb-4">Ready to Work With Nora?</h2>
          <p className="text-gray-600 mb-6">Get expert legal guidance tailored to your situation. Reach out for a consultation or message us directly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#1a1a2e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a2a4e] transition-colors">Request a Consultation</Link>
            <a href="https://wa.me/61447150899" className="border border-[#1a1a2e] text-[#1a1a2e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2" target="_blank"><MessageCircle size={18} /> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
