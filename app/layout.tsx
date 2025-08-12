import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { SiteDate } from "@/contants";
import "./globals.css";
import ScrollTop from "@/Components/ScrollTop";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SiteDate.homepage.title}`,
    default: SiteDate.homepage.title,
  },
  description: "Your premium movers for a seamless relocation experience",
  keywords: [...SiteDate.homepage.keyword],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.className} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
