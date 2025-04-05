import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import Footer from "../components/layout/Footer";
import React from 'react';
import EarthBackground from '../components/three/EarthBackgroundNew'; // Updated import to new component

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <EarthBackground />
      <div id="background"></div>
      {children}
    </div>
  );
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AISE - Association Of Information Science and Engineering",
  description: "Department of Information Science and Engineering. Pioneering the future through innovation and excellence.",
  keywords: "AI, Software Engineering, Department, AISE, Education, University",
};

const Navbar = () => {
  return (
    <nav>
      {/* Add your navbar content here */}
    </nav>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased content-opacity`}>
        <ClientBody>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
