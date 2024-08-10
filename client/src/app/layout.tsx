import type { Metadata } from "next";
import "./globals.css";
import { Inter, Josefin_Sans, Rye } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const fontjosefin = josefinSans.className;
const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rye",
});
export const fontrye = rye.className;
const metadata: Metadata = {
  title: "Farm Mate",
  description: "Your one stop destination for all things related farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontjosefin}>{children}</body>
    </html>
  );
}
