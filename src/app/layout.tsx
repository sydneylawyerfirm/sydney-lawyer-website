import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Sydney Lawyer Firm | Immigration & Property Law",
  description:
    "Sydney-focused immigration and property law services. Request a consultation or WhatsApp us.",
  metadataBase: new URL("https://www.sydneylawyerfirm.com.au"),
  openGraph: {
    title: "Sydney Lawyer Firm | Immigration & Property Law",
    description:
      "Sydney-focused immigration and property law services. Request a consultation or WhatsApp us.",
    siteName: "Sydney Lawyer Firm",
    locale: "en_AU",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
