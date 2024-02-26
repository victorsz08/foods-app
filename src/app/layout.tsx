import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Suspense } from "react";
import Loading from "./(pages)/search/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutri Finder",
  description: "Buscador de Alimentos - Valores energéticos de alimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Header/>  
        {children}
      <Footer/>
      </body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3068788226321043"></script>
    </html>
  );
}
