import localFont from "next/font/local";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const urwGothic = localFont({
  src: [
    {
      path: "./fonts/URWGothic-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/URWGothic-Demi.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-urw-gothic",
});

const adwaitaMono = localFont({
  src: [
    {
      path: "./fonts/AdwaitaMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AdwaitaMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-adwaita-mono",
});

export const metadata: Metadata = {
  title: {
    default:
      "Ikbar Faiz | Astrophysics, Scientific Computing, and Cloud Infrastructure",
    template: "%s | Ikbar Faiz",
  },
  description:
    "Portfolio of Ikbar Faiz, combining curated GitHub projects with ongoing research and infrastructure work across astrophysics, scientific computing, and cloud systems.",
  keywords: [
    "Ikbar Faiz",
    "astrophysics",
    "scientific computing",
    "cloud infrastructure",
    "portfolio",
  ],
  openGraph: {
    title:
      "Ikbar Faiz | Astrophysics, Scientific Computing, and Cloud Infrastructure",
    description:
      "Curated software, research, and infrastructure work across astrophysics, scientific computing, and cloud systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urwGothic.variable} ${adwaitaMono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
