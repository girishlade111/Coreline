import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coreline Venture — Where Ambitious Founders Build",
  description: "A community focused on building a better tomorrow, where ambitious founders build enduring companies.",
  icons: {
    icon: "logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-[#F9FAFB] text-[#111827]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
