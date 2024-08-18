import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Favicons from "@/components/Favicons";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tolik's Website",
  description: "Tolik Pylypchuk's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Favicons />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
