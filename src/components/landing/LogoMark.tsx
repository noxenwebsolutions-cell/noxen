import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
  /** Prioridad de carga (header) */
  priority?: boolean;
  /** Tamaño visual del lockup */
  size?: "sm" | "md";
};

const sizes = {
  sm: "h-9 w-auto sm:h-10",
  md: "h-10 w-auto sm:h-11",
} as const;

export function LogoMark({ className = "", priority = false, size = "sm" }: Props) {
  return (
    <Link
      href="#inicio"
      className={`group inline-flex items-center ${className}`}
      aria-label="Noxen — inicio"
    >
      <span className="relative">
        <span className="pointer-events-none absolute -inset-3 rounded-2xl bg-[radial-gradient(closest-side,rgba(192,132,252,0.22),transparent_72%)] opacity-70 blur-md transition group-hover:opacity-100" />
        <Image
          src="/noxen-logo.png"
          alt="Noxen — Web Solutions"
          width={640}
          height={640}
          priority={priority}
          className={`relative object-contain ${sizes[size]}`}
        />
      </span>
    </Link>
  );
}
