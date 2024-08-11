import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Flashcards",
  description:
    "An application designed to effectively assist the buddy group in preparing for the upcoming progress reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="flex flex-col relative min-h-dvh">
          <Header />
          <main className="flex-1 py-8">{children}</main>
          {/* Background Pattern */}
          <div className="fixed inset-0 w-full h-full -z-10 bg-pattern" />
          <ScrollToTopButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
