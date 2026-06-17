import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Sydney Lawyer Firm",
  description: "Legal insights and updates on immigration and property law in Australia.",
};

const posts = [
  {
    title: "Understanding the Partner Visa Process in Australia",
    excerpt: "A comprehensive guide to partner visa applications, including the key requirements, processing times, and what to expect at each stage.",
    date: "2026-05-15",
    category: "Immigration",
    slug: "#",
  },
  {
    title: "First Home Buyer? What You Need to Know About Conveyancing",
    excerpt: "Buying your first home in NSW is exciting, but the legal process can be confusing. Here's what you need to know about conveyancing.",
    date: "2026-04-28",
    category: "Property",
    slug: "#",
  },
  {
    title: "What to Do If Your Visa Application Is Refused",
    excerpt: "A visa refusal can be devastating, but it is not always the end. Learn about your options including merits review and Federal Court appeals.",
    date: "2026-04-10",
    category: "Immigration",
    slug: "#",
  },
  {
    title: "Working Holiday Visa: Your Complete Guide to Living in Australia",
    excerpt: "Everything you need to know about the Working Holiday Visa — eligibility, requirements, and how to extend your stay.",
    date: "2026-03-22",
    category: "Immigration",
    slug: "#",
  },
  {
    title: "Contract Review: Why It Matters Before You Sign",
    excerpt: "Before signing any property contract, a legal review can save you from costly surprises. Here is what we look for.",
    date: "2026-03-05",
    category: "Property",
    slug: "#",
  },
  {
    title: "Employer-Sponsored Visas: A Guide for Businesses",
    excerpt: "Thinking of sponsoring an overseas worker? This guide covers the key visa pathways and employer obligations.",
    date: "2026-02-18",
    category: "Immigration",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-300">Legal insights and updates on immigration and property law.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.category === "Immigration" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar size={12} /> {new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                </div>
                <h2 className="text-lg font-bold mb-2 hover:text-[#8B6914]">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                <Link href={post.slug} className="text-[#8B6914] text-sm font-semibold hover:underline inline-flex items-center gap-1">
                  Read More <ChevronRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
