import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Perpetual Dev - Premium Full-Stack Web Developer",
  description:
    "Perpetual Dev builds calm, modern websites and full-stack web applications with Laravel, Next.js, React, WordPress and Tailwind CSS.",
  icons: {
    icon: "/assets/logo.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
