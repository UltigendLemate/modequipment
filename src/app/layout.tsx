import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";

import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MOD Equipment",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${mont.variable} ${poppins.variable} z-0`} lang="en">
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      <body className={`${poppins.className} bg-background text-foreground flex flex-col justify-between min-h-screen`}>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
