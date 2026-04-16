import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold tracking-tight transition will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-nx-neon)] sm:min-h-0";

const variants = {
  primary: `${base} bg-gradient-to-br from-[#e879f9] via-[#a855f7] to-[#5b21b6] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_20px_60px_-22px_rgba(168,85,247,0.65)] hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14)_inset,0_24px_70px_-18px_rgba(168,85,247,0.75)] active:brightness-95`,
  secondary: `${base} border border-white/10 bg-white/[0.03] text-nx-fog shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] hover:border-white/16 hover:bg-white/[0.06] hover:shadow-[0_14px_40px_-28px_rgba(168,85,247,0.35)]`,
  ghost: `${base} border border-transparent text-nx-soft hover:border-white/10 hover:bg-white/[0.04]`,
} as const;

type Variant = keyof typeof variants;

type Props = Omit<ComponentProps<typeof Link>, "className"> & {
  className?: string;
  variant?: Variant;
};

export function CtaButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <Link className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
