import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  MessageCircle,
  Clock,
  Shield,
  ChevronRight,
  FileText,
  Users,
  Scale,
  Globe,
  Briefcase,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
import ConsultationForm from "@/components/ConsultationForm";

export const metadata: Metadata = {
  title: "Immigration Lawyers in Sydney | Sydney Lawyer Firm",
  description:
    "Clear guidance for visas, citizenship, and immigration matters — with a straightforward consultation process.",
};

const services = [
  {
    icon: Globe,
    title: "Citizenship Applications",
    desc: "Guidance through eligibility, applications, and the citizenship process for individuals and families in Sydney.",
  },
  {
    icon: Users,
    title: "Partner Visas",
    desc: "Support for partner visa applications, including evidence preparation and responding to requests for further information.",
  },
  {
    icon: Briefcase,
    title: "Skilled Visas",
    desc: "Assistance with skilled visa pathways, skills assessments, and nomination processes.",
  },
  {
    icon: Scale,
    title: "Employer / Work Visas",
    desc: "Helping businesses and employees navigate employer-sponsored visa pathways and compliance obligations.",
  },
  {
    icon: AlertTriangle,
    title: "Visa Refusals & Appeals",
    desc: "If your visa or citizenship application was refused, we assess options and advise on next steps including tribunal review.",
  },
  {
    icon: HelpCircle,
    title: "Other Immigration Matters",
    desc: "Bridging visas, protection matters, ministerial intervention requests, and other complex immigration issues.",
  },
];

const faqs = [
  { q: "How long does a citizenship application take?", a: "Processing times vary depending on the Department's current workload. We can advise on expected timelines during consultation." },
  { q: "Can you help if my visa is refused?", a: "Yes. We assess the reasons for refusal and advise on options including tribunal review and Federal Court appeals." },
  { q: "Can you assist with urgent matters?", a: "Yes. Contact us immediately if you have urgent deadlines — we prioritise time-sensitive matters." },
  { q: "What happens after I submit an enquiry?", a: "We review your enquiry within 1 business day and a team member contacts you to discuss your situation." },
  { q: "Do you offer online booking?", a: "You can request a consultation via our form or WhatsApp. We arrange a suitable time to discuss your matter." },
  { q: "Do you serve clients outside Sydney?", a: "Yes. We assist clients across Australia and internationally through remote consultations." },
];

export default function ImmigrationLawPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a2e] text-white py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-[#1a1a2e]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <MapPin size={14} className="text-[#D4A843]" /> Sydney, NSW
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold max-w-2xl mb-4">
            Immigration Lawyers in Sydney
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mb-8">
            Clear guidance for visas, citizenship, and immigration matters — with a straightforward consultation process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Request a Consultation
            </Link>
            <a href="https://wa.me/61447150899" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2" target="_blank">
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">How We Can Help</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We assist with a broad range of immigration matters for individuals, families, and employers in Sydney.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <s.icon size={28} className="text-[#8B6914] mb-3" />
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                <Link href="/contact" className="text-[#8B6914] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                  Request a Consultation <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Situations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-6">Common Situations We Handle</h2>
          <ul className="space-y-3">
            {[
              "Not sure which visa pathway applies to your circumstances",
              "Deadlines approaching for a visa or citizenship application",
              "Requests for further information from the Department",
              "Refusal decisions and understanding your next steps",
              "Complex personal circumstances affecting your application",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <ChevronRight size={16} className="text-[#8B6914] mt-1 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "Send an Enquiry", desc: "Use the form below or WhatsApp us with details about your immigration matter.", icon: FileText },
              { n: "2", title: "We Review & Contact You", desc: "Our team reviews your enquiry and gets in touch to discuss your situation.", icon: Users },
              { n: "3", title: "Consultation + Next Steps", desc: "We provide clear advice on your options and recommend a pathway forward.", icon: Shield },
              { n: "4", title: "Ongoing Support", desc: "If required, we continue to assist you through the process from lodgement to outcome.", icon: Clock },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 bg-[#8B6914] text-white rounded-xl flex items-center justify-center mx-auto mb-3 font-bold">
                  {step.n}
                </div>
                <h3 className="font-bold mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-8 text-center">Immigration FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold flex justify-between items-center hover:bg-gray-50">
                  {faq.q}
                  <ChevronRight size={18} className="text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
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
