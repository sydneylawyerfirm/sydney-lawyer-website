import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, AlertTriangle, Clock, Shield, CheckCircle, Scale, FileText, Users, Gavel, XCircle, ArrowRight } from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Visa Rejected? Tribunal Review (ART) | Sydney Lawyer",
  description: "Visa refused by the Department of Home Affairs? You may be able to challenge the decision at the Administrative Review Tribunal (ART). Expert help in Sydney.",
};

export default function TribunalReviewPage() {
  return (
    <>
      {/* Hero — urgent amber/dark theme */}
      <section className="relative bg-[#0f172a] text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-[#0f172a]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6 text-amber-300 border border-amber-500/30">
            <AlertTriangle size={16} /> STRICT DEADLINES APPLY
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Visa Rejected?<br />
            <span className="text-amber-400">Take It to the Tribunal</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            A visa refusal is not the end. You may have the right to a <strong className="text-white">merits review</strong> at the Administrative Review Tribunal (ART) — and get a fresh decision.
          </p>

          {/* Deadline urgency */}
          <div className="bg-amber-600/20 border border-amber-500/30 rounded-2xl p-6 max-w-lg mx-auto mb-8">
            <div className="text-5xl font-bold text-amber-400 mb-2">TIME IS LIMITED</div>
            <p className="text-gray-300">
              Most visa refusals have a <strong className="text-white">21 to 28 day</strong> window to lodge a tribunal application. Some deadlines are as short as <strong className="text-white">7 days</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="#apply" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105">
              Get Urgent Help Now →
            </Link>
            <a href="https://wa.me/61447150899" className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2" target="_blank">
              <MessageCircle size={18} /> WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* What is Tribunal Review */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">What Is a Tribunal Review?</h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              If your visa application has been <strong>refused by the Department of Home Affairs</strong>, you may be able to apply for a <strong>merits review</strong> at the Administrative Review Tribunal (ART) — formerly known as the AAT (Administrative Appeals Tribunal).
            </p>
            <p>
              Unlike a court appeal, a tribunal review is a <strong>fresh look at the facts</strong> of your case. The ART considers your application again from scratch and can make a new decision — including <strong>overturning the refusal</strong> and granting your visa.
            </p>
            <p>
              This is often the most effective way to challenge a visa refusal, as the Tribunal has the power to substitute its own decision for the Department&apos;s.
            </p>
          </div>
        </div>
      </section>

      {/* Refusal vs Tribunal vs Federal Court */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Understanding Your Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-red-200">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <XCircle size={24} className="text-red-600" />
              </div>
              <h3 className="font-bold mb-2 text-red-700">Visa Refused</h3>
              <p className="text-gray-600 text-sm">The Department of Home Affairs has refused your visa application. You receive a decision letter explaining why.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-amber-400 shadow-lg relative">
              <div className="absolute -top-3 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">YOU ARE HERE</div>
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Scale size={24} className="text-amber-600" />
              </div>
              <h3 className="font-bold mb-2 text-amber-700">Tribunal Review (ART)</h3>
              <p className="text-gray-600 text-sm">A fresh merits review of your case. The Tribunal can overturn the refusal and grant your visa. This is your next step.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Gavel size={24} className="text-gray-500" />
              </div>
              <h3 className="font-bold mb-2 text-gray-500">Federal Court Appeal</h3>
              <p className="text-gray-600 text-sm">If the Tribunal also refuses, you may appeal on legal grounds to the Federal Court. <Link href="/federal-court-appeal" className="text-amber-600 hover:underline">Learn more →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa types we can review */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Visa Refusals We Handle at the Tribunal</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Partner Visa Refusal", desc: "Subclass 820/801, 309/100, and 300 refusals — including insufficient relationship evidence.", link: "/partner-visa" },
              { title: "Employer Sponsored Visa Refusal", desc: "Subclass 482, 494, and 186 nomination or visa refusals.", link: "/employer-sponsorship" },
              { title: "Student Visa Refusal or Cancellation", desc: "Subclass 500 refusals, condition breaches, and cancellations under s116.", link: "/immigration-law" },
              { title: "Skilled Visa Refusal", desc: "Subclass 189, 190, and 491 refusals — including skills assessment and points issues.", link: "/immigration-law" },
              { title: "Tourist Visa Refusal", desc: "Subclass 600 refusals, including GTE concerns and financial capacity.", link: "/tourist-visa" },
              { title: "Protection Visa Refusal", desc: "Subclass 866 refusals — refugee and humanitarian protection claims.", link: "/immigration-law" },
              { title: "Working Holiday Visa Issues", desc: "Subclass 417/462 refusals and condition breach issues.", link: "/working-holiday-visa" },
              { title: "Visa Cancellation (s501 / s116)", desc: "Character-based cancellations and condition breach cancellations.", link: "/immigration-law" },
            ].map((item, i) => (
              <Link key={i} href={item.link} className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-amber-300 transition-all group">
                <h3 className="font-bold mb-1 group-hover:text-amber-700">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deadlines */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Key Deadlines</h2>
          <p className="text-center text-gray-600 mb-10">Missing the deadline means losing your right to tribunal review. Act immediately.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { days: "28 days", types: "Most visa refusals if you are in Australia", colour: "bg-green-100 text-green-800 border-green-300" },
              { days: "21 days", types: "Most visa refusals if you are outside Australia", colour: "bg-amber-100 text-amber-800 border-amber-300" },
              { days: "7–9 days", types: "Visa cancellations and bridging visa refusals", colour: "bg-red-100 text-red-800 border-red-300" },
            ].map((d, i) => (
              <div key={i} className={`rounded-xl p-6 border-2 text-center ${d.colour}`}>
                <div className="text-3xl font-bold mb-2">{d.days}</div>
                <p className="text-sm">{d.types}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">Deadlines vary by visa type and circumstances. Check your refusal letter or contact us immediately for your specific deadline.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">How the Tribunal Review Process Works</h2>
          <div className="space-y-6">
            {[
              { n: "1", title: "Send Us Your Refusal Letter", desc: "WhatsApp or email us a copy of your refusal decision. We will review it and advise you on your chances at the tribunal." },
              { n: "2", title: "We Lodge Your Application", desc: "We prepare and lodge your ART application before the deadline, ensuring all requirements are met." },
              { n: "3", title: "Build Your Case", desc: "We gather additional evidence, prepare submissions, and address every reason for refusal in your decision letter." },
              { n: "4", title: "Tribunal Hearing", desc: "We represent you at the hearing (in person or by video). The Tribunal member will ask questions and review the evidence." },
              { n: "5", title: "Decision", desc: "The Tribunal makes a new decision. If successful, your visa is granted. If not, we advise you on further options including Federal Court appeal." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4 items-start bg-gray-50 rounded-xl p-6">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{step.n}</div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Why Choose Sydney Lawyer for Your Tribunal Review</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Scale, title: "Immigration Law Specialists", desc: "We focus on immigration law — this is what we do every day." },
              { icon: Clock, title: "Urgent Deadline Management", desc: "We prioritise deadline-critical matters and can lodge applications quickly." },
              { icon: FileText, title: "Thorough Case Preparation", desc: "We address every reason for refusal with detailed evidence and legal submissions." },
              { icon: Users, title: "Hearing Representation", desc: "We attend the hearing with you and present your case to the Tribunal member." },
              { icon: Shield, title: "Honest Case Assessment", desc: "We give you a realistic assessment of your chances — no false promises." },
              { icon: MessageCircle, title: "Easy Communication", desc: "Reach us anytime via WhatsApp. We keep you updated at every step." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-10">Tribunal Review FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "What is the ART (Administrative Review Tribunal)?", a: "The ART is an independent tribunal that reviews decisions made by the Department of Home Affairs. It replaced the AAT (Administrative Appeals Tribunal) in 2024. The Tribunal conducts a fresh merits review — meaning it looks at the facts of your case again and can make a new decision." },
              { q: "Can the Tribunal actually grant my visa?", a: "Yes. Unlike a court appeal, the Tribunal can substitute the Department's decision with its own. If the Tribunal finds that you meet the visa requirements, it can set aside the refusal and grant your visa." },
              { q: "What if I miss the deadline?", a: "Unfortunately, the Tribunal generally cannot accept late applications. Once the deadline passes, you lose your right to merits review. That is why it is critical to contact us as soon as you receive a refusal." },
              { q: "Do I need to attend the hearing?", a: "In most cases, yes. The Tribunal hearing is your opportunity to present your case and answer questions. We will prepare you for what to expect and represent you at the hearing." },
              { q: "What happens if the Tribunal also refuses?", a: "If the Tribunal affirms the Department's decision, you may be able to appeal to the Federal Court on legal grounds. We can advise you on whether this is a viable option." },
              { q: "Can I stay in Australia while my case is at the Tribunal?", a: "In many cases, yes. If you had a valid visa when you applied and lodged the tribunal application on time, you may be granted a Bridging Visa to remain in Australia while your case is being reviewed." },
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

      {/* Urgency banner */}
      <section className="py-8 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-bold">⚠️ Don&apos;t wait — deadlines can be as short as 7 days. Contact us today.</p>
          <p className="text-sm text-white/80 mt-1">We offer urgent consultations for visa refusal matters.</p>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Get Urgent Help With Your Visa Refusal</h2>
              <p className="text-gray-600 mb-6">
                Send us your refusal letter and we will review it and advise you on your options — including whether a tribunal review is right for your case.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600"><AlertTriangle size={16} className="text-amber-500" /> Strict deadlines — contact us ASAP</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle size={16} className="text-amber-500" /> Free initial case assessment</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Clock size={16} className="text-amber-500" /> Urgent matters prioritised</div>
                <div className="flex items-center gap-2 text-sm text-gray-600"><Users size={16} className="text-amber-500" /> We handle all visa types</div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-4">
                <p className="text-sm font-bold text-amber-900 mb-2">📋 What to send us:</p>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Your visa refusal or cancellation letter</li>
                  <li>• The date you received the decision</li>
                  <li>• Your name and contact details</li>
                </ul>
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
