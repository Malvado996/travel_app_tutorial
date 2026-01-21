import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Shey Travel Packages",
  description: "Book Travel Packages",
};

const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserratFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
