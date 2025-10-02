"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import './globals.css';
import { useEffect } from "react";
import { ThemeContextProvider } from "@/hooks/languageContainer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
