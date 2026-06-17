import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Briefcase, FileText, Shield, CheckCircle, Users, Building2, ArrowRight, ChevronRight, Scale, Clock, BookOpen, Handshake, RefreshCw, AlertTriangle } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Commercial & Business Law | Sydney Lawyer",
  description: "Expert commercial law advice — contracts review, business liability, retainer agreements, commercial leases, and lease renewals. Sydney-based solicitors.",
};

export default function CommercialLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a2e] text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 to-[#1a1a2e]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#8B6914]/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 text-[#D4A843] border border-[#8B6914]/30">
              <Briefcase size={16} /> BUSINESS ADVISORY
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Commercial &<br />
              <span className="text-[#D4A843]">Business Law</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
              Practical legal advice for businesses of all sizes — from contract reviews and commercial leases to liability protection and retainer arrangements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="#apply" className="bg-[#8B6914] hover:bg-[#7a5c12] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
                Get Business Legal Advice →
              </Link>
              <a href="https://wa.me/61447150899" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2" target="_blank">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Commercial Law Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide clear, actionable legal advice across the key areas that matter to your business.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contracts Review */}
            <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#8B6914]/40 transition-all">
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white p-6">
                <FileText size={28} className="mb-3" />
                <h3 className="text-xl font-bold">Contracts Review</h3>
                <p className="text-white/70 text-sm mt-1">Protect your interests before you sign</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Before signing any commercial agreement, a thorough legal review can save you from costly disputes and unexpected obligations. We review contracts with a sharp eye for risk.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Supply and service agreements</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Partnership and joint venture agreements</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Shareholder and director agreements</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Franchise agreements</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Terms and conditions for your business</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Non-disclosure and confidentiality agreements</li>
                </ul>
              </div>
            </div>

            {/* Liabilities */}
            <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#8B6914]/40 transition-all">
              <div className="bg-gradient-to-r from-red-700 to-red-800 text-white p-6">
                <Shield size={28} className="mb-3" />
                <h3 className="text-xl font-bold">Business Liabilities</h3>
                <p className="text-white/70 text-sm mt-1">Understand and manage your risk</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Every business carries risk. We help you understand your legal exposure and put protections in place — before problems arise, not after.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Personal liability of directors and officers</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Limitation of liability clauses</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Indemnity and insurance requirements</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Consumer law and Australian Consumer Law (ACL) compliance</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Dispute resolution and liability caps</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Risk assessment and mitigation strategies</li>
                </ul>
              </div>
            </div>

            {/* Retainers */}
            <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#8B6914]/40 transition-all">
              <div className="bg-gradient-to-r from-[#8B6914] to-[#a07d1a] text-white p-6">
                <Handshake size={28} className="mb-3" />
                <h3 className="text-xl font-bold">Retainer Agreements</h3>
                <p className="text-white/70 text-sm mt-1">Ongoing legal support for your business</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  A retainer arrangement gives your business access to reliable legal advice whenever you need it — without the overhead of in-house counsel.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Drafting and reviewing retainer terms</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Fixed-fee retainer packages tailored to your needs</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> On-call legal advice for day-to-day issues</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Contract review and approval as part of your workflow</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Priority response times</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Regular compliance check-ins</li>
                </ul>
              </div>
            </div>

            {/* Commercial Leases */}
            <div className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#8B6914]/40 transition-all">
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6">
                <Building2 size={28} className="mb-3" />
                <h3 className="text-xl font-bold">Commercial Leases & Renewals</h3>
                <p className="text-white/70 text-sm mt-1">Negotiate, review, and secure your lease</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Your lease is one of the biggest commitments your business will make. We ensure the terms are fair, clear, and protect your interests — whether you are signing new or renewing.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> New commercial lease review and negotiation</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Lease renewals and option exercise</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Rent review mechanisms and market rent disputes</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Make-good and fitout obligations</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Sublease and assignment of lease</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-[#8B6914] mt-0.5 flex-shrink-0" /> Retail leases and <em>Retail Leases Act 1994</em> (NSW) compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why businesses choose us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Why Businesses Choose Sydney Lawyer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Scale, title: "Practical Advice", desc: "We give you clear, actionable guidance — not pages of legal jargon. We focus on what matters for your business." },
              { icon: Clock, title: "Responsive Service", desc: "We understand that business moves fast. Reach us via WhatsApp or email and get timely advice when you need it." },
              { icon: Users, title: "Business-Minded Lawyers", desc: "We understand the realities of running a business. Our advice balances legal protection with commercial practicality." },
              { icon: BookOpen, title: "NSW Expertise", desc: "Based in Sydney with deep knowledge of NSW commercial legislation, including the Retail Leases Act and Conveyancing Act." },
              { icon: Shield, title: "Risk-First Approach", desc: "We identify risks before they become problems, helping you avoid disputes and costly litigation." },
              { icon: Handshake, title: "Long-Term Relationships", desc: "Many clients work with us on an ongoing retainer basis. We become an extension of your team." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-md transition-shadow">
                <item.icon size={24} className="text-[#8B6914] mb-3" />
                <h3 className="font-bold mb-1 text-sm">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common situations */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Common Situations We Help With</h2>
          <p className="text-center text-gray-600 mb-10">If any of these sound familiar, we can help.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "You have been asked to sign a contract and want it reviewed before committing",
              "Your commercial lease is coming up for renewal and you want to renegotiate terms",
              "You are starting a new business and need contracts, terms, or agreements drafted",
              "A supplier or customer dispute is escalating and you need legal guidance",
              "You want to understand your personal liability as a director or business owner",
              "You need ongoing legal support but cannot justify a full-time in-house lawyer",
              "You are taking on a new commercial premises and need the lease reviewed",
              "A party to your contract has breached their obligations and you need advice",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                <CheckCircle size={18} className="text-[#8B6914] mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Lease Spotlight */}
      <section className="py-16 bg-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Commercial Lease Review</h2>
          <p className="text-center text-gray-400 mb-10">Key things we check in every commercial lease</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Rent and Outgoings", desc: "Base rent, outgoings, GST, and how increases are calculated (CPI, market review, or fixed)." },
              { title: "Lease Term and Options", desc: "Initial term, renewal options, and how to exercise them correctly to protect your tenancy." },
              { title: "Make-Good Obligations", desc: "What you must do when you leave — reinstate, remove fitout, or negotiate a make-good waiver." },
              { title: "Permitted Use", desc: "Ensuring the permitted use clause covers your business activities and any planned changes." },
              { title: "Assignment and Subletting", desc: "Your rights to assign the lease or sublet part of the premises if your situation changes." },
              { title: "Default and Termination", desc: "What triggers a default, cure periods, and your rights if the landlord seeks to terminate." },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h3 className="font-bold mb-1 text-[#D4A843]">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Commercial Law FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "How much does a contract review cost?", a: "We offer transparent, fixed-fee quotes for contract reviews. The cost depends on the complexity and length of the contract. Contact us with the document and we will provide a quote before starting." },
              { q: "How long does a contract review take?", a: "For standard contracts, we typically provide our review within 2–3 business days. Urgent reviews can be arranged — just let us know your timeline." },
              { q: "Can you draft contracts for my business?", a: "Yes. We draft a wide range of commercial agreements, including service agreements, supply contracts, terms and conditions, partnership agreements, and more — all tailored to your business." },
              { q: "What should I look for in a commercial lease?", a: "Key things to check include the rent and outgoings, lease term and renewal options, make-good obligations, permitted use, and any personal guarantees. We review all of these and more." },
              { q: "Do you help with lease disputes?", a: "Yes. Whether it is a rent dispute, breach of lease, or disagreement about make-good, we can advise you on your rights and options under the lease and NSW legislation." },
              { q: "What is a retainer agreement?", a: "A retainer is an ongoing arrangement where you pay a regular fee for access to legal advice as needed. It is cost-effective for businesses that need regular legal input but do not want to hire in-house." },
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-50">
                  {faq.q}
                  <ArrowRight size={16} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Get Business Legal Advice</h2>
              <p className="text-gray-600 mb-6">
                Tell us about your business legal matter and we will get back to you with clear, practical advice. No obligation.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-[#8B6914]" /> Free 15-minute initial inquiry</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><FileText size={16} className="text-[#8B6914]" /> Fixed-fee quotes for contract reviews</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Handshake size={16} className="text-[#8B6914]" /> Retainer packages available</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Building2 size={16} className="text-[#8B6914]" /> Commercial lease specialists</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-sm text-gray-700"><strong>Sydney Lawyer</strong><br />35 Alice Street, Auburn NSW 2144<br />
                <a href="https://wa.me/61447150899" className="hover:underline font-bold text-green-700">💬 WhatsApp: 0447 150 899</a><br />
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
