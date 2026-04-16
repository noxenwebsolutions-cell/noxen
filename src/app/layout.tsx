import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noxen.studio"),
  title: "Noxen — Web Solutions para negocios locales",
  description:
    "Landing pages premium, rápidas y orientadas a conversión. Diseño serio, entrega en 72h.",
  openGraph: {
    title: "Noxen — Web Solutions para negocios locales",
    description:
      "Landing pages premium, rápidas y orientadas a conversión. Diseño serio, entrega en 72h.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-dvh overflow-x-hidden">
        <div className="nx-noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
