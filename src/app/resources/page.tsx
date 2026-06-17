import { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | Sydney Lawyer Firm",
  description: "Free downloadable guides and resources for immigration and property law matters.",
};

const resources = [
  {
    title: "Partner Visa Checklist",
    desc: "A comprehensive checklist of documents and evidence required for partner visa applications (Subclass 820/801, 309/100, 300).",
    category: "Immigration",
  },
  {
    title: "Working Holiday Visa Guide",
    desc: "Everything you need to know before applying for a Working Holiday Visa (Subclass 417 or 462).",
    category: "Immigration",
  },
  {
    title: "First Home Buyer Conveyancing Guide",
    desc: "A step-by-step guide to the conveyancing process in NSW for first home buyers.",
    category: "Property",
  },
  {
    title: "Visa Refusal: Know Your Options",
    desc: "What to do if your visa application has been refused — including merits review and Federal Court appeal options.",
    category: "Immigration",
  },
  {
    title: "Contract of Sale Explained",
    desc: "Understanding the key terms and conditions in a NSW property contract of sale.",
    category: "Property",
  },
  {
    title: "Employer Sponsorship Guide",
    desc: "A practical guide for employers looking to sponsor overseas workers under the employer-sponsored visa program.",
    category: "Immigration",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg text-gray-300">Free guides and resources to help you understand your legal options.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6914]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText size={20} className="text-[#8B6914]" />
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.category === "Immigration" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                      {r.category}
                    </span>
                    <h3 className="font-bold mt-2 mb-1">{r.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{r.desc}</p>
                    <a href="https://wa.me/61447150899" target="_blank" className="text-[#8B6914] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                      <MessageCircle size={14} /> Request via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="font-bold text-lg mb-2">Need personalised advice?</h3>
            <p className="text-gray-600 mb-4 text-sm">Our resources are a starting point. For advice tailored to your situation, get in touch.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="bg-[#1a1a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a2a4e]">Free 15-Min Visa Inquiry</Link>
              <a href="https://wa.me/61447150899" className="border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 inline-flex items-center justify-center gap-2" target="_blank"><MessageCircle size={16} /> WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
