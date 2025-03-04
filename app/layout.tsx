import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from 'react';
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome | Alvin Garrin",
  description: "alvingarrin homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
      {/* <body> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
