import type { Metadata } from 'next'
import { Syne, Poppins } from 'next/font/google'
import './main.css'
import { AOSInit } from './aos'

const syne = Syne({ subsets:['latin'], variable: '--font-syne', });
const poppins = Poppins({ weight: '400', subsets:['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'Portfolio Sander Verhoeven',
  description: 'Het portfolio van Sander Verhoeven een junior front-end developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <AOSInit></AOSInit>
      <body className={`${syne.variable} ${poppins.variable} all:unset`}>{children}</body>
    </html>
  )
}
