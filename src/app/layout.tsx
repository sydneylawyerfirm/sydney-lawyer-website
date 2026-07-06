import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CZGWPDB3N1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZGWPDB3N1');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
