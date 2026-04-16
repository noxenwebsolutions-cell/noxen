import { whatsappHref } from "@/lib/site";
import { CtaButton } from "./CtaButton";
import { LogoMark } from "./LogoMark";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-nx-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
        <LogoMark size="md" />
        <div className="flex items-center gap-2 sm:gap-3">
          <CtaButton
            href="#para-quien"
            variant="ghost"
            className="hidden px-3 py-2.5 text-sm sm:inline-flex"
          >
            Para quién
          </CtaButton>
          <CtaButton
            href={whatsappHref()}
            variant="primary"
            className="px-4 py-2.5 text-sm sm:px-5 sm:py-3"
            target="_blank"
            rel="noreferrer"
          >
            Pedir propuesta
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
