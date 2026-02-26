import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Office of the Okuapehene | Akuapem State",
  description:
    "Official website of His Royal Majesty Okuapehene Oseadeeyo Kwasi Akuffo III, King of the Akuapem State and 26th Occupant of the Ofori Kuma Stool. Driving socio-economic development, cultural preservation, and innovation across the Akuapem Traditional Area.",
  keywords: [
    "Okuapehene",
    "Oseadeeyo Kwasi Akuffo III",
    "Akuapem",
    "Akropong",
    "Ofori Kuma Stool",
    "Ghana",
    "Chieftaincy",
    "Akan",
    "Eastern Region",
    "Odwira",
    "Traditional Authority",
    "Akuapem State",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
