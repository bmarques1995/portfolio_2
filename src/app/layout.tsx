"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import './globals.css';
import { ThemeContextProvider } from "@/hooks/themeContext";
import { LanguageContextProvider } from "@/hooks/languageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body>
        <LanguageContextProvider>
          <ThemeContextProvider>
            <Header />
            {children}
            <Footer />
          </ThemeContextProvider>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
