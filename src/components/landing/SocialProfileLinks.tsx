import Link from "next/link";
import { site } from "@/lib/site";

function IconInstagram({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 8.25A3.75 3.75 0 1 1 8.25 12 3.75 3.75 0 0 1 12 8.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M16.95 7.05h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconX({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14.23 4h2.6l-5.68 6.49L18 20h-5.13l-4.01-5.24L5.47 20H2.8l6.07-6.95L2 4h5.27l3.62 4.76L14.23 4Zm-.91 14.38h1.44L8.87 5.57H7.35l5.97 12.81Z" />
    </svg>
  );
}

const chip =
  "inline-flex items-center gap-2.5 rounded-2xl border border-white/[0.1] bg-white/[0.04] px-3.5 py-2.5 text-sm font-medium text-nx-soft shadow-[0_4px_24px_-14px_rgba(0,0,0,0.45)] transition-[transform,box-shadow,border-color,background-color,color] duration-200 hover:border-white/[0.14] hover:bg-white/[0.07] hover:text-white active:scale-[0.98]";

type Props = {
  /** compact: una fila más pequeña para tarjetas */
  variant?: "default" | "compact";
  className?: string;
};

export function SocialProfileLinks({ variant = "default", className = "" }: Props) {
  const wrap =
    variant === "compact"
      ? "flex flex-wrap gap-2"
      : "mt-3 flex flex-wrap gap-2 sm:justify-end";

  return (
    <div className={[wrap, className].filter(Boolean).join(" ")}>
      <Link className={chip} href={site.instagram} target="_blank" rel="noreferrer">
        <IconInstagram />
        Instagram
      </Link>
      <Link className={chip} href={site.twitter} target="_blank" rel="noreferrer">
        <IconX />
        X (Twitter)
      </Link>
    </div>
  );
}
