import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";
import { LogoMark } from "./LogoMark";
import { SocialProfileLinks } from "./SocialProfileLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-nx-black pb-32 pt-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <LogoMark size="md" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-nx-muted">
            {site.tagline}: landing pages para negocios locales. Diseño serio, entrega rápida
            y foco en conversión.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:items-end">
          <div className="lg:text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-nx-muted">
              Redes
            </p>
            <SocialProfileLinks />
          </div>

          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <Link
              className="text-nx-soft transition hover:text-white"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </Link>
            <Link
              className="inline-flex items-center gap-2 font-semibold text-nx-neon transition hover:text-white"
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-8 text-xs text-nx-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Noxen. Todos los derechos reservados.</p>
          <p className="text-nx-muted/70">Hecha para negocios locales que quieren crecer online.</p>
        </div>
      </div>
    </footer>
  );
}
