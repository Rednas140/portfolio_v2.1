import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";

import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio Sander Verhoeven",
  description:
    "Het portfolio van Sander Verhoeven, een junior front-end developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${syne.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
