import type { Metadata } from "next";
import "./globals.css";
import { Bebas_Neue, Montserrat, Bungee_Outline } from "next/font/google";

const bungee = Bungee_Outline({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bungee",
});

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Robust Habit",
  description: "Supere seus limites, transforme-se em sua melhor versão!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebas_neue.variable} ${bungee.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
