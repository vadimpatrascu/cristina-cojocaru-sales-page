import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

/* TODO: update name */
export const metadata: Metadata = {
  title: "Cum să te eliberezi de datorii, CONȘTIENT? | Cristina Cojocaru & Violeta Botezatu",
  description:
    "Primul program din România care combină numerologia cu instrumente din coaching. 6 săptămâni de transformare profundă a relației tale cu banii. 28 martie – 9 mai 2026.",
  openGraph: {
    title: "Cum să te eliberezi de datorii, CONȘTIENT?",
    description:
      "Primul program din România care combină numerologia cu instrumente din coaching.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
