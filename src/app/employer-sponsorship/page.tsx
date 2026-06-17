import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Briefcase, Globe, MapPin, Clock, Shield, CheckCircle, FileText, Users, Building2, ArrowRight, ChevronRight } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Employer Sponsorship Visa | Sydney Lawyer",
  description: "Expert help with employer-sponsored visas — Subclass 482 (TSS), 494 (Regional), and 186 (ENS). For employers and employees in Australia.",
};

export default function EmployerSponsorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a2e] text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-[#1a1a2e]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 text-blue-300 border border-blue-500/30">
              <Briefcase size={16} /> FOR EMPLOYERS & EMPLOYEES
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Employer Sponsorship<br />
              <span className="text-blue-400">Visa Pathways</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
              Whether you&apos;re a business looking to sponsor a skilled worker, or an employee seeking sponsorship — we guide you through every step of the process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="#apply" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
                Get Started →
              </Link>
              <a href="https://wa.me/61447150899" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2" target="_blank">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Visa Pathways */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Employer Sponsorship Visa Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Australia offers several visa pathways for employers to sponsor skilled workers. Here are the main options we help with.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* TSS 482 */}
            <div className="border-2 border-blue-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="text-sm font-semibold mb-1 opacity-80">SUBCLASS 482</div>
                <h3 className="text-xl font-bold">Temporary Skill Shortage (TSS)</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  The most common employer sponsorship visa. Allows businesses to sponsor overseas workers for up to 4 years.
                </p>
                <h4 className="font-semibold text-sm mb-2">Two streams:</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-blue-600 mt-0.5 flex-shrink-0" /> <strong>Short-Term</strong> — up to 2 years (renewable once)</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-blue-600 mt-0.5 flex-shrink-0" /> <strong>Medium-Term</strong> — up to 4 years, pathway to permanent residency</li>
                </ul>
                <h4 className="font-semibold text-sm mb-2">Key requirements:</h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" /> Occupation on the skills list</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" /> Skills assessment (if required)</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" /> 2 years relevant work experience</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" /> English language ability</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" /> Approved sponsor (employer)</li>
                </ul>
              </div>
            </div>

            {/* Regional 494 */}
            <div className="border-2 border-emerald-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6">
                <div className="text-sm font-semibold mb-1 opacity-80">SUBCLASS 494</div>
                <h3 className="text-xl font-bold">Skilled Employer Sponsored Regional</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  For businesses in regional Australia. Leads to permanent residency after 3 years of work in a regional area.
                </p>
                <h4 className="font-semibold text-sm mb-2">Key benefits:</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" /> 5-year visa with PR pathway via Subclass 191</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Priority processing for regional employers</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Broader range of eligible occupations</li>
                </ul>
                <h4 className="font-semibold text-sm mb-2">Key requirements:</h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Employer in a designated regional area</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Occupation on the relevant skills list</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Skills assessment</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" /> 3 years relevant work experience</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-emerald-600 mt-0.5 flex-shrink-0" /> English language competency</li>
                </ul>
              </div>
            </div>

            {/* ENS 186 */}
            <div className="border-2 border-purple-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">PERMANENT</div>
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                <div className="text-sm font-semibold mb-1 opacity-80">SUBCLASS 186</div>
                <h3 className="text-xl font-bold">Employer Nomination Scheme (ENS)</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  A <strong>permanent residence</strong> visa for skilled workers nominated by their employer.
                </p>
                <h4 className="font-semibold text-sm mb-2">Three streams:</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-600 mt-0.5 flex-shrink-0" /> <strong>Temporary Residence Transition</strong> — for 482 holders after 2–3 years</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-600 mt-0.5 flex-shrink-0" /> <strong>Direct Entry</strong> — for applicants not on a 482 visa</li>
                  <li className="flex items-start gap-2"><ChevronRight size={14} className="text-purple-600 mt-0.5 flex-shrink-0" /> <strong>Labour Agreement</strong> — under an industry labour agreement</li>
                </ul>
                <h4 className="font-semibold text-sm mb-2">Key requirements:</h4>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-purple-600 mt-0.5 flex-shrink-0" /> Nominated by an approved employer</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-purple-600 mt-0.5 flex-shrink-0" /> Skills assessment (Direct Entry)</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-purple-600 mt-0.5 flex-shrink-0" /> English language competency</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-purple-600 mt-0.5 flex-shrink-0" /> Under 45 (some exemptions apply)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers vs Employees */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">How We Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* For Employers */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                <Building2 size={28} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Employers</h3>
              <p className="text-gray-600 text-sm mb-4">Need to bring in a skilled worker from overseas? We handle the entire sponsorship process.</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" /> Become an approved sponsor (Standard Business Sponsor application)</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" /> Labour Market Testing (LMT) requirements</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" /> Nomination application for the position</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" /> Compliance with sponsor obligations</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" /> Annual Market Salary Rate (AMSR) advice</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" /> Transition to permanent residence (186) for your workers</li>
              </ul>
            </div>

            {/* For Employees */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-5">
                <Users size={28} className="text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Employees / Visa Applicants</h3>
              <p className="text-gray-600 text-sm mb-4">Have a potential sponsor or already on a 482? We help you navigate the visa process.</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Skills assessment applications</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Visa application preparation and lodgement</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /> English language test guidance</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Health and character requirements</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Pathway to permanent residency (482 → 186)</li>
                <li className="flex items-start gap-2"><CheckCircle size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" /> Refusal or nomination rejection — <Link href="/tribunal-review" className="text-blue-600 hover:underline">tribunal review</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">The Sponsorship Process</h2>
          <p className="text-center text-gray-600 mb-12">For most employer-sponsored visas, there are three stages. We manage all three.</p>
          <div className="space-y-6">
            {[
              { n: "1", title: "Sponsor Approval", desc: "The employer applies to become a Standard Business Sponsor (if not already approved). We prepare the application and ensure all compliance requirements are met.", colour: "bg-blue-600" },
              { n: "2", title: "Nomination", desc: "The employer nominates the specific position and the overseas worker. We prepare the nomination application, including Labour Market Testing evidence and salary documentation.", colour: "bg-blue-600" },
              { n: "3", title: "Visa Application", desc: "The worker applies for the visa. We prepare a complete application with skills assessment, English test results, health checks, police clearances, and supporting documents.", colour: "bg-blue-600" },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 items-start bg-gray-50 rounded-xl p-6">
                <div className={`w-10 h-10 ${step.colour} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`}>{step.n}</div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway visual */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Your Pathway to Permanent Residence</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-white rounded-xl p-6 border-2 border-blue-300 text-center flex-1">
              <div className="text-sm text-blue-600 font-semibold">STEP 1</div>
              <div className="text-lg font-bold mt-1">TSS Visa (482)</div>
              <div className="text-sm text-gray-500 mt-1">Temporary — up to 4 years</div>
            </div>
            <ArrowRight size={24} className="text-blue-400 rotate-90 md:rotate-0" />
            <div className="bg-white rounded-xl p-6 border-2 border-blue-300 text-center flex-1">
              <div className="text-sm text-blue-600 font-semibold">STEP 2</div>
              <div className="text-lg font-bold mt-1">Work for 2–3 years</div>
              <div className="text-sm text-gray-500 mt-1">With the same sponsor</div>
            </div>
            <ArrowRight size={24} className="text-blue-400 rotate-90 md:rotate-0" />
            <div className="bg-white rounded-xl p-6 border-2 border-purple-400 text-center flex-1 shadow-lg">
              <div className="text-sm text-purple-600 font-semibold">STEP 3</div>
              <div className="text-lg font-bold mt-1">ENS Visa (186)</div>
              <div className="text-sm text-gray-500 mt-1">Permanent Residence ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Employer Sponsorship FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "Who can sponsor a worker?", a: "Any Australian business can apply to become an approved sponsor (Standard Business Sponsor). The business must be lawfully operating, have no adverse information, and demonstrate a genuine need for the position." },
              { q: "What occupations are eligible?", a: "The position must be on the relevant skilled occupation list. The short-term list covers a range of occupations for the 482 short-term stream, while the medium and long-term list provides more options and a pathway to permanent residency." },
              { q: "How long does the process take?", a: "Processing times vary, but you can generally expect 1–3 months for sponsor approval, 1–2 months for the nomination, and 2–6 months for the visa application. We can advise on current processing times for your specific situation." },
              { q: "Can a small business sponsor a worker?", a: "Yes. There is no minimum business size requirement. Small businesses, including sole traders, can apply to become sponsors. We help small businesses navigate the process effectively." },
              { q: "What are the employer's obligations?", a: "Sponsors must pay the market salary rate, provide equivalent terms and conditions, keep records, cooperate with inspectors, and not recover certain costs from the worker. We provide compliance guidance." },
              { q: "What if the nomination or visa is refused?", a: "You may be able to seek review at the Administrative Review Tribunal (ART). We can assess your case and advise on options." },
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
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
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Discuss Your Sponsorship Options</h2>
              <p className="text-gray-600 mb-6">
                Whether you&apos;re an employer looking to sponsor a worker, or an employee seeking sponsorship — we can help you understand your options and manage the process.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-blue-500" /> Free 15-minute initial inquiry</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Briefcase size={16} className="text-blue-500" /> Help for both employers and employees</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Globe size={16} className="text-blue-500" /> All employer-sponsored visa subclasses</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Shield size={16} className="text-blue-500" /> Compliance and obligations guidance</div>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
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
