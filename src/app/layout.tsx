import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAVBARBER | Premium Gentlemen's Grooming",
  description: "Experience the ultimate grooming experience at RAVBARBER. Modern styles, classic techniques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-gold selection:text-black bg-white text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}

