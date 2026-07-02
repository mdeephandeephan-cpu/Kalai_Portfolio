import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kalaimagal S | AI & Data Science Portfolio",
  description: "B.Tech Artificial Intelligence and Data Science undergraduate portfolio. Web developer, data analyst, and dashboard designer.",
  keywords: "Kalaimagal S, Portfolio, AI, Data Science, Web Developer, React, Data Analytics, Python, Next.js",
  authors: [{ name: "Kalaimagal S" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
