import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"]
});



export const metadata: Metadata = {
  title: "Vacation Photo Slider",
  description: "Vacation photo slider landing page",
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
