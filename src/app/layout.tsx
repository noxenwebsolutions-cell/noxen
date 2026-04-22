import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noxen.studio"),
  title: "Landings en 72h que convierten en clientes — Noxen",
  description:
    "Landings premium para negocios locales: móvil impecable, carga rápida y CTA a WhatsApp. Entrega en 72h con precio claro.",
  openGraph: {
    title: "Landings en 72h que convierten en clientes — Noxen",
    description:
      "Landings premium para negocios locales: móvil impecable, carga rápida y CTA a WhatsApp. Entrega en 72h con precio claro.",
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
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-dvh w-full max-w-full overflow-x-hidden [overflow-x:clip]">
        <div className="nx-noise" aria-hidden />
        {children}
      </body>
    </html>
  );
}
