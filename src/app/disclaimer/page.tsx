import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Sydney Lawyer Firm",
  description: "Legal disclaimer for Sydney Lawyer Firm website.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-[#1a1a2e] text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-3xl font-bold">Disclaimer</h1>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose text-gray-700">
          <h2>General Information Only</h2>
          <p>The information provided on this website is for general informational purposes only. It is not intended to be, and should not be taken as, legal advice. Every legal situation is different, and you should seek professional legal advice specific to your circumstances.</p>

          <h2>No Solicitor-Client Relationship</h2>
          <p>Accessing this website, using the consultation request form, or contacting us via WhatsApp or email does not create a solicitor-client relationship. A solicitor-client relationship is only formed when we have agreed to act for you and you have received written confirmation of our engagement.</p>

          <h2>No Guarantee of Outcomes</h2>
          <p>While we strive to provide accurate and up-to-date information, we make no representations or warranties about the accuracy, completeness, or suitability of the information on this website. Past results do not guarantee future outcomes.</p>

          <h2>External Links</h2>
          <p>This website may contain links to external websites. We are not responsible for the content or privacy practices of those websites.</p>

          <h2>Liability</h2>
          <p>To the maximum extent permitted by law, Sydney Lawyer Firm excludes all liability for any loss or damage arising from your use of this website or reliance on any information provided on it.</p>

          <h2>Contact</h2>
          <p>If you have any questions about this disclaimer, please contact us at <a href="mailto:info@sydneylawyerfirm.com.au">info@sydneylawyerfirm.com.au</a>.</p>
        </div>
      </section>
    </>
  );
}
