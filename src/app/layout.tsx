import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Handbollsdomare – Domarutbildning',
  description:
    'Webbaserad utbildning för handbollsdomare. Lär dig regler, domartecken, positionering och allt du behöver för att döma handboll.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
