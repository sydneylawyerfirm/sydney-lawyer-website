"use client";

import { useState } from "react";
import { MessageCircle, Clock, Shield, MapPin } from "lucide-react";

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    email: "",
    phone: "",
    preferredContact: "email",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We&apos;ve received your enquiry and will get back to you within 1 business day (Mon-Fri).
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        {/* Info badges */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <Clock size={14} /> Within 1 business day (Mon-Fri)
          </div>
          <div className="flex items-center gap-1.5">
            <Shield size={14} /> Confidential
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} /> Sydney-Based
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full ${
                s <= step ? "bg-[#8B6914]" : "bg-gray-200"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-2">
            Step {step} of 4
          </span>
        </div>

        <h3 className="text-lg font-bold mb-4">Request a Free 15-Minute Visa Inquiry</h3>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <p className="text-gray-600 mb-4">What do you need help with?</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    value: "immigration",
                    label: "Immigration Law",
                    desc: "Citizenship, visas, appeals",
                  },
                  {
                    value: "property",
                    label: "Property Law",
                    desc: "Conveyancing, leases, contracts",
                  },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, service: opt.value });
                      setStep(2);
                    }}
                    className={`text-left p-4 rounded-xl border-2 transition-all hover:border-[#8B6914] ${
                      formData.service === opt.value
                        ? "border-[#8B6914] bg-[#8B6914]/5"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="font-semibold">{opt.label}</div>
                    <div className="text-sm text-gray-500">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-2">Your contact details</p>
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => formData.name && formData.email && setStep(3)}
                  className="flex-1 px-6 py-3 bg-[#8B6914] text-white rounded-lg hover:bg-[#6B5010] font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-2">
                How would you prefer us to contact you?
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["email", "phone", "whatsapp"].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, preferredContact: method });
                      setStep(4);
                    }}
                    className={`p-3 rounded-xl border-2 capitalize transition-all hover:border-[#8B6914] ${
                      formData.preferredContact === method
                        ? "border-[#8B6914] bg-[#8B6914]/5"
                        : "border-gray-200"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
              >
                Back
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <p className="text-gray-600 mb-2">
                Tell us briefly about your situation (optional)
              </p>
              <textarea
                placeholder="Describe your legal matter..."
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6914]"
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#8B6914] text-white rounded-lg hover:bg-[#6B5010] font-semibold"
                >
                  Submit Request
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Prefer to chat directly?{" "}
          <a
            href="https://wa.me/61447150899"
            className="text-[#8B6914] font-medium hover:underline inline-flex items-center gap-1"
            target="_blank"
          >
            <MessageCircle size={14} /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
