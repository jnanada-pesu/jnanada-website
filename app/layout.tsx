import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./nerd-fonts.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jnanada PESU",
  description: "Official website of Jnanada PESU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
