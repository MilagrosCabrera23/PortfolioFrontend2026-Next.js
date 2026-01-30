import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Fira_Code } from "next/font/google";
import {Footer} from "@/app/components/layout/footer";
import {Navbar} from "@/app/components/layout/navbar";

export const metadata: Metadata = {
  title: "Cabrera Milagros - Portfolio",
  description: "Portfolio de Milagros Cabrera - Desarrolladora Full Stack",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["200", "900"] });

const montserrat = Montserrat({
  subsets: ["latin"], variable: "--font-montserrat", weight: ["200", "700"]
});

const fira = Fira_Code({
  subsets: ["latin"], variable: "--font-fira", weight: ["300", "700"]
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
} ) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${fira.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
