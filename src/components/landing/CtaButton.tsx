import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-[15px] font-semibold tracking-tight transition-[transform,box-shadow,filter,border-color,background-color] duration-200 ease-out will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-nx-neon)] active:scale-[0.98] sm:min-h-12";

const variants = {
  primary: `${base} bg-gradient-to-br from-[#e879f9] via-[#a855f7] to-[#5b21b6] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_10px_36px_-14px_rgba(168,85,247,0.45)] hover:brightness-[1.06] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_14px_44px_-12px_rgba(168,85,247,0.38)]`,
  secondary: `${base} border border-white/[0.1] bg-white/[0.04] text-nx-fog shadow-[0_4px_24px_-16px_rgba(0,0,0,0.5)] hover:border-white/[0.14] hover:bg-white/[0.07] hover:shadow-[0_8px_32px_-12px_rgba(168,85,247,0.12)]`,
  ghost: `${base} border border-transparent font-medium text-nx-soft hover:border-white/[0.08] hover:bg-white/[0.04]`,
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
