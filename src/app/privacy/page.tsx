import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sydney Lawyer Firm",
  description: "Privacy policy for Sydney Lawyer Firm.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose text-gray-700">
          <p><strong>Effective Date:</strong> 1 January 2026</p>
          <p>Sydney Lawyer Firm (ABN 95 692 434 816) is committed to protecting the privacy of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).</p>

          <h2>1. Information We Collect</h2>
          <p>We may collect personal information including:</p>
          <ul>
            <li>Name, email address, phone number, and postal address</li>
            <li>Information about your legal matter or enquiry</li>
            <li>Identification documents (passport, driver&apos;s licence, etc.)</li>
            <li>Financial information relevant to your matter</li>
          </ul>

          <h2>2. How We Collect Information</h2>
          <p>We collect information directly from you when you:</p>
          <ul>
            <li>Submit a consultation request via our website</li>
            <li>Contact us by phone, email, or WhatsApp</li>
            <li>Engage us to provide legal services</li>
            <li>Visit our office</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Respond to your enquiry and provide legal advice</li>
            <li>Manage your legal matter</li>
            <li>Communicate with you about our services</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>

          <h2>4. Disclosure of Information</h2>
          <p>We will not disclose your personal information to third parties except:</p>
          <ul>
            <li>With your consent</li>
            <li>Where required or authorised by law</li>
            <li>To relevant government bodies in connection with your legal matter</li>
            <li>To our professional advisers and service providers who assist us in providing our services</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure.</p>

          <h2>6. Access and Correction</h2>
          <p>You have the right to access and correct your personal information held by us. To make a request, please contact us using the details below.</p>

          <h2>7. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or wish to make a complaint, contact us at:</p>
          <p>
            Sydney Lawyer Firm<br />
            Email: <a href="mailto:info@sydneylawyerfirm.com.au">info@sydneylawyerfirm.com.au</a><br />
            WhatsApp: <a href="https://wa.me/61447150899">Message Us</a>
          </p>
        </div>
      </section>
    </>
  );
}
