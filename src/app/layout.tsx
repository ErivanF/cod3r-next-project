import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-black min-h-screen text-white 2xl:text-lg">
          <div className="bg-purple-950 flex items-center text-center text-white font-bold text-xl pl-4 sm:text-4xl ">
            <Link href="/form" className="border-x-2 p-4">
              Criar usuário
            </Link>
            <Link href="/" className="border-x-2 p-4">
              Lista
            </Link>
          </div>
          <div className="p-12 flex flex-col items-center"> {children}</div>
        </div>
      </body>
    </html>
  );
}
