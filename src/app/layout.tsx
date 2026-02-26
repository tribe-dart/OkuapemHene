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
  title: "Okuapemhene | The Royal Palace of Okuapeman",
  description:
    "Official website of the Okuapemhene, paramount chief of the Okuapeman Traditional Area in the Eastern Region of Ghana. Preserving heritage, fostering development, uniting a people.",
  keywords: [
    "Okuapemhene",
    "Okuapeman",
    "Ghana",
    "Akropong",
    "Chieftaincy",
    "Akan",
    "Eastern Region",
    "Odwira",
    "Traditional Authority",
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
