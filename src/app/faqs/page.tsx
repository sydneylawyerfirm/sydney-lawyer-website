import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs | Sydney Lawyer Firm",
  description: "Frequently asked questions about our immigration and property law services.",
};

const generalFaqs = [
  { q: "Do I need to visit your office in person?", a: "No. We can conduct consultations via phone, video call, or WhatsApp. In-person meetings are available at our Sydney office if preferred." },
  { q: "How long does the consultation process take?", a: "We respond to enquiries within 1 business day. The initial consultation typically takes 30-60 minutes depending on your matter." },
  { q: "Do you serve clients outside Sydney?", a: "Yes. While we are based in Sydney, we assist clients across Australia and internationally through remote consultations." },
  { q: "Is the initial inquiry free?", a: "Yes. We offer a free 15-minute visa inquiry to discuss your situation and outline your options. No obligation." },
  { q: "Do you accept payment plans?", a: "We may be able to offer flexible payment arrangements for certain matters. Contact us to discuss your situation." },
  { q: "How do I get started?", a: "Submit a consultation request via our form or WhatsApp us. We'll review your enquiry and contact you within 1 business day." },
];

const immigrationFaqs = [
  { q: "How long does a citizenship application take?", a: "Processing times vary depending on the Department's current workload. We can advise on expected timelines during consultation." },
  { q: "Can you help if my visa is refused?", a: "Yes. We assess the reasons for refusal and advise on options including tribunal review and Federal Court appeals." },
  { q: "What is the difference between a merits review and judicial review?", a: "A merits review (at the ART) re-examines the decision on its facts. A judicial review (Federal Court) examines whether the decision-maker made a legal error." },
  { q: "Can you assist with urgent immigration matters?", a: "Yes. Contact us immediately if you have urgent deadlines — we prioritise time-sensitive matters." },
  { q: "Do you handle employer-sponsored visas?", a: "Yes. We assist both employers and employees with employer-sponsored visa pathways, compliance, and related matters." },
  { q: "What documents do I need for a visa application?", a: "Required documents vary by visa type. During your consultation, we provide a tailored checklist for your specific application." },
];

const propertyFaqs = [
  { q: "Do I need a lawyer for conveyancing in NSW?", a: "While not legally required, having a solicitor protects your interests during property transactions and helps avoid costly mistakes." },
  { q: "When should I get a contract reviewed?", a: "Before you sign anything. Once contracts are exchanged, you are generally bound by the terms." },
  { q: "How long does settlement usually take?", a: "Settlement in NSW typically takes 6-8 weeks from exchange, though this can vary depending on the contract terms." },
  { q: "What is 'exchange' and what does it mean?", a: "Exchange is when signed copies of the contract are swapped between buyer and seller. At this point, the agreement becomes legally binding." },
  { q: "Do you assist with commercial leases?", a: "Yes. We review and advise on both residential and commercial lease agreements for landlords and tenants." },
  { q: "Can you help with off-the-plan purchases?", a: "Yes. Off-the-plan contracts have unique risks and we review key terms before you commit." },
];

function FAQSection({ title, faqs }: { title: string; faqs: { q: string; a: string }[] }) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
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
  );
}

export default function FAQsPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-300">Quick answers to common questions about working with us.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <FAQSection title="General" faqs={generalFaqs} />
          <FAQSection title="Immigration Law" faqs={immigrationFaqs} />
          <FAQSection title="Property Law" faqs={propertyFaqs} />

          <div className="text-center bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="font-bold text-lg mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4 text-sm">We are happy to help. Reach out anytime.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-[#1a1a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a2a4e]">Contact Us</Link>
              <a href="https://wa.me/61447150899" className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 inline-flex items-center justify-center gap-2" target="_blank"><MessageCircle size={16} /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
