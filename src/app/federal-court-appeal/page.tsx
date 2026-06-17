import { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, AlertTriangle, Gavel, Clock, Shield, CheckCircle, Scale, FileText, Users } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Visa Refused? Federal Court Appeal | Sydney Lawyer",
  description: "Visa refused or ART rejected? You have 35 days to lodge a Federal Court appeal. Expert immigration lawyers in Sydney.",
};

export default function FederalCourtAppealPage() {
  return (
    <>
      {/* Hero — urgent dark theme */}
      <section className="relative bg-[#0f172a] text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-[#0f172a]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 text-red-300 border border-red-500/30">
            <AlertTriangle size={16} /> TIME-SENSITIVE — ACT NOW
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Visa Refused?<br />
            <span className="text-red-400">ART Rejected?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Don&apos;t give up. You may have the right to challenge the decision in the <strong className="text-white">Federal Court of Australia</strong>.
          </p>

          {/* Countdown urgency */}
          <div className="bg-red-600/20 border border-red-500/30 rounded-2xl p-6 max-w-lg mx-auto mb-8">
            <div className="text-5xl font-bold text-red-400 mb-2">35 DAYS</div>
            <p className="text-gray-300">
              You typically have <strong className="text-white">35 days</strong> from the AAT/ART decision to lodge a Federal Court application. Don&apos;t wait.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="#apply" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
              Get Urgent Help Now →
            </Link>
            <a href="tel:0447150899" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
              <Phone size={18} /> Call 0447 150 899
            </a>
          </div>
          <a href="https://wa.me/61447150899" className="text-gray-400 hover:text-white text-sm inline-flex items-center gap-1" target="_blank">
            <MessageCircle size={14} /> Or WhatsApp us now
          </a>
        </div>
      </section>

      {/* What is Federal Court Review */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">What is a Federal Court Appeal?</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              If your visa application was refused by the Department of Home Affairs, and the Administrative Review Tribunal (ART) — formerly AAT — upheld that refusal, you may be able to seek <strong>judicial review</strong> in the Federal Court of Australia.
            </p>
            <p>
              A Federal Court appeal examines whether the Tribunal made a <strong>legal error</strong> in its decision. This is different from a merits review — the Court looks at whether the law was applied correctly.
            </p>
          </div>
        </div>
      </section>

      {/* Common grounds */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Common Grounds for Appeal</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Scale, title: "Jurisdictional Error", desc: "The Tribunal exceeded its powers or failed to exercise its jurisdiction properly." },
              { icon: FileText, title: "Failure to Consider Evidence", desc: "The Tribunal failed to consider relevant evidence or gave weight to irrelevant factors." },
              { icon: Shield, title: "Procedural Fairness", desc: "You were not given a fair hearing or adequate opportunity to present your case." },
              { icon: Gavel, title: "Error of Law", desc: "The Tribunal misinterpreted or misapplied the relevant legislation." },
            ].map((g) => (
              <div key={g.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <g.icon size={28} className="text-red-600 mb-3" />
                <h3 className="font-bold mb-2">{g.title}</h3>
                <p className="text-gray-600 text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">The Federal Court Process</h2>
          <div className="space-y-6">
            {[
              { n: "1", title: "Urgent Case Assessment", desc: "We review your ART/AAT decision and identify potential grounds for judicial review." },
              { n: "2", title: "Lodge Application", desc: "We prepare and file your Federal Court application within the 35-day deadline." },
              { n: "3", title: "Written Submissions", desc: "We prepare detailed legal submissions arguing why the Tribunal's decision should be overturned." },
              { n: "4", title: "Court Hearing", desc: "We represent your case before the Federal Court. If successful, the matter is sent back for reconsideration." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 items-start bg-gray-50 rounded-xl p-6">
                <div className="w-10 h-10 bg-[#0f172a] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.n}</div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Is This Right for You?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Your visa was refused by the Department",
              "The ART/AAT upheld the refusal",
              "You believe the decision contained a legal error",
              "You are within 35 days of the ART decision",
              "You received a partner visa refusal",
              "Your skilled visa nomination was rejected",
              "Your student visa was cancelled",
              "Your protection visa claim was refused",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency banner */}
      <section className="py-8 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-bold">⚠️ The 35-day deadline is strict. Contact us immediately if your ART decision is recent.</p>
          <p className="text-sm text-white/80 mt-1">We offer urgent consultations for time-sensitive matters.</p>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Get Urgent Legal Help</h2>
              <p className="text-gray-600 mb-6">
                Time is critical. Contact us now for an urgent assessment of your Federal Court appeal options.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600"><AlertTriangle size={16} className="text-red-500" /> 35-day deadline — act fast</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-red-500" /> Free initial case assessment</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Clock size={16} className="text-red-500" /> Urgent matters prioritised</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Users size={16} className="text-red-500" /> Experienced immigration lawyers</div>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <p className="text-sm text-red-800"><strong>Sydney Lawyer</strong><br />35 Alice Street, Auburn NSW 2144<br />
                <a href="tel:0447150899" className="hover:underline font-bold">📞 0447 150 899</a><br />
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
