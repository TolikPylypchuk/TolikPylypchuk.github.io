import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import Favicons from "@/components/Favicons";

import "./reset.css";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

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

      <body className={raleway.className}>{children}</body>
    </html>
  );
}
