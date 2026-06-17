import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Sydney Lawyer Firm",
  description: "Terms of use for Sydney Lawyer Firm website.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold">Terms of Use</h1>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose text-gray-700">
          <p><strong>Effective Date:</strong> 1 January 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the Sydney Lawyer Firm website (sydneylawyerfirm.com.au), you agree to be bound by these Terms of Use. If you do not agree with these terms, please do not use this website.</p>

          <h2>2. Use of Website</h2>
          <p>This website is provided for informational purposes only. You may use this website for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorised access to any part of the website</li>
            <li>Use the website to transmit harmful or malicious content</li>
            <li>Reproduce, distribute, or modify any content without our written consent</li>
          </ul>

          <h2>3. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of Sydney Lawyer Firm or its content providers and is protected by Australian and international copyright laws.</p>

          <h2>4. Consultation Requests</h2>
          <p>Submitting a consultation request through this website does not create a solicitor-client relationship. We will review your enquiry and contact you to discuss whether we can assist with your matter.</p>

          <h2>5. Privacy</h2>
          <p>Your use of this website is also governed by our <a href="/privacy">Privacy Policy</a>. Please review it to understand how we collect and use your information.</p>

          <h2>6. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Sydney Lawyer Firm is not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.</p>

          <h2>7. Changes to Terms</h2>
          <p>We may update these Terms of Use from time to time. Any changes will be posted on this page with an updated effective date.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms of Use are governed by the laws of New South Wales, Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of New South Wales.</p>

          <h2>9. Contact</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@sydneylawyerfirm.com.au">info@sydneylawyerfirm.com.au</a>.</p>
        </div>
      </section>
    </>
  );
}
