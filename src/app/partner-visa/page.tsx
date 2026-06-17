import { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Heart, Clock, Shield, CheckCircle, Users, FileText, Globe, ChevronRight } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Partner Visa Australia | Subclass 820/801, 309/100 & 300 | Sydney Lawyer",
  description: "Expert help with Partner Visa applications. Onshore, offshore, and Prospective Marriage visas. Free 15-minute visa inquiry.",
};

const visaTypes = [
  {
    subclass: "820 / 801",
    title: "Onshore Partner Visa",
    desc: "For applicants who are currently in Australia. Apply while living with your partner in Australia.",
    details: [
      "You must be in Australia when you apply",
      "Initially granted a temporary visa (Subclass 820)",
      "After approximately 2 years, eligible for permanent visa (Subclass 801)",
      "Allows you to work, study, and access Medicare while waiting",
      "De facto and married couples eligible",
    ],
    color: "rose",
    bgClass: "bg-rose-50",
    borderClass: "border-rose-200",
    iconColor: "text-rose-600",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    subclass: "309 / 100",
    title: "Offshore Partner Visa",
    desc: "For applicants who are outside Australia at the time of application and when the visa is decided.",
    details: [
      "You must be outside Australia when you apply and when decided",
      "Initially granted a temporary visa (Subclass 309)",
      "After approximately 2 years, eligible for permanent visa (Subclass 100)",
      "Can travel to and from Australia while the application is being processed",
      "De facto and married couples eligible",
    ],
    color: "violet",
    bgClass: "bg-violet-50",
    borderClass: "border-violet-200",
    iconColor: "text-violet-600",
    badgeColor: "bg-violet-100 text-violet-700",
  },
  {
    subclass: "300",
    title: "Prospective Marriage Visa",
    desc: "For partners who intend to marry their Australian partner and then apply for a Partner Visa.",
    details: [
      "You must be outside Australia when you apply",
      "Allows you to enter Australia and marry within 9 months",
      "After marriage, apply for the onshore Partner Visa (820/801)",
      "Must demonstrate a genuine intention to marry",
      "Both partners must be free to marry at time of application",
    ],
    color: "amber",
    bgClass: "bg-amber-50",
    borderClass: "border-amber-200",
    iconColor: "text-amber-600",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];

export default function PartnerVisaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-600 via-rose-700 to-rose-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529634597503-139d3726fed5?q=80&w=2000')" }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">💕</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bring Your Partner <span className="text-amber-300 italic">Home</span> to Australia
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            We help couples navigate the Partner Visa process — whether you&apos;re onshore, offshore, or planning to marry. Expert legal guidance from start to finish.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">💍 Subclass 820/801</span>
            <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">✈️ Subclass 309/100</span>
            <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm">💒 Subclass 300</span>
          </div>
          <Link href="#apply" className="inline-block bg-white text-rose-700 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
            Request Free 15-Min Visa Inquiry →
          </Link>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-white/60">
            <a href="https://wa.me/61447150899" className="flex items-center gap-1 hover:text-white" target="_blank"><MessageCircle size={14} /> WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* 3 Visa Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Three Partner Visa Pathways</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            The right visa depends on where you are and your relationship status. We help you choose the best pathway.
          </p>

          <div className="space-y-8">
            {visaTypes.map((visa) => (
              <div key={visa.subclass} className={`${visa.bgClass} border ${visa.borderClass} rounded-2xl overflow-hidden`}>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <span className={`inline-block ${visa.badgeColor} px-3 py-1 rounded-full text-sm font-semibold mb-3`}>
                        Subclass {visa.subclass}
                      </span>
                      <h3 className="font-serif text-2xl font-bold mb-3">{visa.title}</h3>
                      <p className="text-gray-700 mb-6">{visa.desc}</p>
                      <h4 className="font-bold text-sm mb-3 text-gray-800">Key Details:</h4>
                      <ul className="space-y-2">
                        {visa.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <CheckCircle size={16} className={`${visa.iconColor} mt-0.5 flex-shrink-0`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which visa is right? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Which Partner Visa is Right for You?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-3xl mb-3">🇦🇺</div>
              <h3 className="font-bold mb-2">In Australia Now?</h3>
              <p className="text-gray-600 text-sm mb-3">Apply for the Onshore Partner Visa (820/801) while living with your partner.</p>
              <Link href="#apply" className="text-rose-600 text-sm font-semibold hover:underline">Get Started →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-3xl mb-3">🌏</div>
              <h3 className="font-bold mb-2">Outside Australia?</h3>
              <p className="text-gray-600 text-sm mb-3">Apply for the Offshore Partner Visa (309/100) from your home country.</p>
              <Link href="#apply" className="text-violet-600 text-sm font-semibold hover:underline">Get Started →</Link>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-3xl mb-3">💒</div>
              <h3 className="font-bold mb-2">Planning to Marry?</h3>
              <p className="text-gray-600 text-sm mb-3">Apply for the Prospective Marriage Visa (300) and marry in Australia.</p>
              <Link href="#apply" className="text-amber-600 text-sm font-semibold hover:underline">Get Started →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What you need to prove */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">What You Need to Demonstrate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Heart, title: "Genuine Relationship", desc: "Evidence that your relationship is genuine and continuing — including shared finances, social recognition, and future plans." },
              { icon: Users, title: "Sponsor Eligibility", desc: "Your Australian partner must be eligible to sponsor you — including character and previous sponsorship history checks." },
              { icon: FileText, title: "Supporting Documents", desc: "Comprehensive documentation including statutory declarations, relationship history, photos, and communications evidence." },
              { icon: Shield, title: "Health & Character", desc: "Meeting health and character requirements, including medical examinations and police clearances." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-rose-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-16 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">How We Help Couples</h2>
          <div className="space-y-6">
            {[
              { n: "1", title: "Free 15-Minute Visa Inquiry", desc: "We discuss your situation, assess your eligibility, and advise on the best visa pathway for your circumstances." },
              { n: "2", title: "Evidence & Document Preparation", desc: "We help you gather and present compelling evidence of your genuine relationship, including statutory declarations." },
              { n: "3", title: "Application Lodgement", desc: "We prepare and lodge your complete application with the Department of Home Affairs to maximise your chances." },
              { n: "4", title: "Ongoing Support to Decision", desc: "We manage all correspondence, respond to requests for further information, and support you until a decision is made." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 items-start bg-white rounded-xl p-6">
                <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.n}</div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common questions */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: "How long does a Partner Visa take to process?", a: "Processing times vary significantly depending on the visa subclass and individual circumstances. The temporary visa is usually processed faster, with the permanent visa following approximately 2 years later." },
              { q: "Can I work in Australia while waiting for my Partner Visa?", a: "Yes. If you hold a temporary partner visa (820 or 309), you have full work rights in Australia." },
              { q: "Do we need to be married to apply?", a: "No. De facto couples can also apply for a Partner Visa. You need to demonstrate that you have been in a de facto relationship for at least 12 months, unless there are compelling circumstances." },
              { q: "What if my Partner Visa is refused?", a: "We can advise on appeal options including review at the Administrative Review Tribunal (ART) and, if necessary, Federal Court judicial review." },
              { q: "Can I include my children in the application?", a: "Yes. Dependent children can be included in your Partner Visa application as secondary applicants." },
              { q: "What evidence do I need to prove our relationship is genuine?", a: "Evidence typically includes financial documents (joint accounts, shared expenses), household evidence, social recognition (photos, declarations from friends/family), and evidence of commitment (future plans, shared responsibilities)." },
            ].map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-50">
                  {faq.q}
                  <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-4" />
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
              <h2 className="font-serif text-3xl font-bold mb-4">Request a Free 15-Minute Visa Inquiry</h2>
              <p className="text-gray-600 mb-6">
                Let us help you and your partner navigate the visa process. Tell us about your situation and we will be in touch.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-rose-500" /> Free 15-minute visa inquiry</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-rose-500" /> All 3 partner visa types covered</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-rose-500" /> Response within 1 business day</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Globe size={16} className="text-rose-500" /> Assisting couples worldwide</div>
              </div>
              <div className="bg-rose-50 rounded-xl p-4 border border-rose-200">
                <p className="text-sm text-rose-800"><strong>Sydney Lawyer</strong><br />
                <a href="https://wa.me/61447150899" className="hover:underline font-bold">💬 WhatsApp Us</a><br />
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
