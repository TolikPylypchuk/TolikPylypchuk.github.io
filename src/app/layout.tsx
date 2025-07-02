import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import Favicons from "@/components/Favicons";
import ThemeInitializer from "@/components/ThemeInitializer";
import ThemeProvider from "@/components/ThemeProvider";

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
    <html lang="en" suppressHydrationWarning>
      {/*
        suppressHydrationWarning is needed here because of an initialization script
        which injects the current color theme from local storage
      */}

      <head>
        <Favicons />
      </head>

      <body className={raleway.className}>
        <ThemeInitializer />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
