import { Metadata } from "next";
import Link from "next/link";
import { MapPin, MessageCircle, Clock, Shield, ChevronRight, FileText, Users, Home, Building2, FileCheck, Landmark } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Property & Conveyancing Lawyers in Sydney | Sydney Lawyer Firm",
  description: "Clear legal support for buying, selling, contract review, and leases — with a straightforward consultation process.",
};

const services = [
  { icon: Home, title: "Buying Property (NSW)", desc: "From contract review to settlement, we help protect your interests when purchasing residential or commercial property." },
  { icon: Landmark, title: "Selling Property (NSW)", desc: "We prepare and review contracts of sale, manage vendor disclosure requirements, and assist through to settlement." },
  { icon: FileCheck, title: "Contract Review", desc: "Thorough review of property contracts to identify risks, unusual clauses, and areas requiring attention before you sign." },
  { icon: Building2, title: "Residential Leases", desc: "Reviewing and advising on residential lease agreements to help you understand your rights and obligations." },
  { icon: Building2, title: "Commercial Leases", desc: "Drafting, reviewing, and advising on commercial lease terms for landlords and tenants." },
  { icon: FileText, title: "Off-the-Plan Purchases", desc: "Off-the-plan contracts have unique risks. We review key terms and advise you before you commit." },
];

const faqs = [
  { q: "Do I need a lawyer for conveyancing in NSW?", a: "While not legally required, having a solicitor protects your interests during property transactions and helps avoid costly mistakes." },
  { q: "When should I get a contract reviewed?", a: "Before you sign anything. Once contracts are exchanged, you are generally bound by the terms. Have us review the contract as early as possible." },
  { q: "How long does settlement usually take?", a: "Settlement in NSW typically takes 6-8 weeks from exchange, though this can vary depending on the contract terms." },
  { q: "What is 'exchange' and what does it mean?", a: "Exchange is when signed copies of the contract are swapped between buyer and seller. At this point, the agreement becomes legally binding." },
  { q: "Do you assist with leases (residential and commercial)?", a: "Yes. We review and advise on both residential and commercial lease agreements for landlords and tenants." },
  { q: "Do you serve clients outside Sydney?", a: "Yes. While we are based in Sydney, we assist clients across NSW through remote consultations." },
];

export default function PropertyLawPage() {
  return (
    <>
      <section className="relative bg-[#1a1a2e] text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000')" }}>
          <div className="absolute inset-0 bg-[#1a1a2e]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <MapPin size={14} className="text-[#D4A843]" /> Sydney, NSW
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold max-w-2xl mb-4">Property & Conveyancing Lawyers in Sydney</h1>
          <p className="text-lg text-gray-300 max-w-xl mb-8">Clear legal support for buying, selling, contract review, and leases — with a straightforward consultation process.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">Request a Consultation</Link>
            <a href="https://wa.me/61447150899" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2" target="_blank"><MessageCircle size={18} /> WhatsApp Us</a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">How We Can Help</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Comprehensive property law and conveyancing services for Sydney buyers, sellers, landlords, and tenants.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <s.icon size={28} className="text-[#8B6914] mb-3" />
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                <Link href="/contact" className="text-[#8B6914] text-sm font-semibold hover:underline inline-flex items-center gap-1">Request a Consultation <ChevronRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-6">Common Matters We Assist With</h2>
          <ul className="space-y-3">
            {["Reviewing contracts before exchange", "Coordinating settlement steps (with your lender/agent where relevant)", "Explaining key terms, special conditions, and risks", "Leasing: reviewing or drafting key lease terms", "Time-sensitive transactions"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700"><ChevronRight size={16} className="text-[#8B6914] mt-1 flex-shrink-0" />{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Send an Enquiry", desc: "Use the form below or WhatsApp us with details about your property matter." },
              { n: "2", title: "We Review & Contact You", desc: "Our team reviews your enquiry and gets in touch to discuss your situation." },
              { n: "3", title: "Consultation + Next Steps", desc: "We provide clear advice on your options and recommend a pathway forward." },
              { n: "4", title: "Ongoing Support", desc: "If required, we continue to assist you through to settlement or lease completion." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 bg-[#8B6914] text-white rounded-xl flex items-center justify-center mx-auto mb-3 font-bold">{step.n}</div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">Property Law FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-50">{faq.q}<ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform" /></summary>
                <div className="px-6 pb-4 text-gray-600 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Request a Consultation</h2>
              <p className="text-gray-600 mb-6">Fill out the form and our team will review your enquiry. We respond within 1 business day (Mon-Fri).</p>
              <div className="space-y-3 text-sm text-gray-500">
                <div className="flex items-center gap-2"><Clock size={14} /> Response Time: Within 1 business day (Mon-Fri)</div>
                <div className="flex items-center gap-2"><Shield size={14} /> Your enquiry is treated with strict confidence.</div>
                <div className="flex items-center gap-2"><MapPin size={14} /> Our team is based in Sydney, NSW.</div>
              </div>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </section>
    </>
  );
}
