import Link from "next/link";

type Metric = {
  label: string;
  value: string;
  helper?: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const caseStudy = {
  eyebrow: "Credibilidad",
  heading: "Caso real antes de prometerte nada.",
  title: "Trainr",
  subtitle: "Producto publicado · Experiencia premium · Diseño con intención",
  body:
    "Este bloque está diseñado para meter confianza pronto: mini caso, 3 métricas y un testimonio. Si no tienes números confirmados, puedes dejar los valores como “—” y actualizarlo cuando los tengas.",
  href: "https://www.trytrainr.com/",
  metrics: [
    { label: "Acción objetivo", value: "—", helper: "p. ej. clics a WhatsApp / reservas" },
    { label: "Tiempo a acción", value: "—", helper: "p. ej. usuario llega al CTA" },
    { label: "Percepción", value: "—", helper: "claridad + orden + velocidad" },
  ] satisfies Metric[],
  testimonial: {
    quote:
      "Añade aquí un testimonio real (1–2 frases) que refuerce confianza, claridad y facilidad para contactarte.",
    name: "Nombre y apellidos",
    role: "Cargo · Negocio (placeholder)",
  } satisfies Testimonial,
} as const;

function MetricCard({ m }: { m: Metric }) {
  return (
    <div className="rounded-2xl border border-white/[0.1] bg-nx-black/40 px-4 py-3.5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
        {m.label}
      </p>
      <p className="mt-2 font-display text-xl font-semibold text-white">{m.value}</p>
      {m.helper ? (
        <p className="mt-1 text-xs leading-relaxed text-nx-muted">{m.helper}</p>
      ) : null}
    </div>
  );
}

function MiniPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
      <div
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(closest-side,rgba(168,85,247,0.22),transparent_72%)] blur-xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-b from-[#12121a] to-nx-black p-2 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.65)]">
        <div className="flex items-center justify-between gap-2 rounded-xl border border-white/[0.06] bg-nx-card px-3 py-2">
          <div className="flex min-w-0 items-center gap-2">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-emerald-400/25 to-cyan-500/20 text-xs font-semibold text-emerald-200/90 ring-1 ring-white/10">
              T
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-white">Trainr</p>
              <p className="truncate text-[10px] font-medium text-nx-muted">
                Panel · progreso · objetivo
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-lg bg-white/[0.06] px-2 py-1 text-[10px] font-medium text-nx-soft ring-1 ring-white/[0.06]">
            72%
          </span>
        </div>
        <div className="mt-3 space-y-2 rounded-xl border border-white/[0.06] bg-nx-card-hover/40 p-3">
          <div className="flex items-center justify-between text-[10px] font-medium text-nx-muted">
            <span>Semana</span>
            <span className="text-nx-neon">4/5 sesiones</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-400/80 to-cyan-400/70" />
          </div>
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[
              { k: "Pasos", v: "8.2k" },
              { k: "Kcal", v: "420" },
              { k: "Sueño", v: "7h" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-lg border border-white/[0.06] bg-nx-black/50 px-2 py-2 text-center"
              >
                <p className="text-[9px] text-nx-muted">{x.k}</p>
                <p className="mt-0.5 font-display text-sm font-semibold text-white">{x.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-white/[0.08] bg-gradient-to-r from-nx-neon/15 via-transparent to-nx-violet/10 px-3 py-2.5 text-center text-[11px] font-medium text-nx-soft ring-1 ring-white/[0.04]">
          Experiencia cuidada, sin ruido
        </div>
      </div>
    </div>
  );
}

export function EarlyCredibility() {
  return (
    <section
      id="caso-real"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-nx-black to-nx-ink py-16 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-16 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.14),transparent_72%)] blur-2xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
              {caseStudy.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] text-white sm:text-4xl text-balance">
              {caseStudy.heading}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
              {caseStudy.body}
            </p>

            <div className="mt-8 rounded-2xl border border-white/[0.1] bg-nx-card/75 p-6">
              <div className="flex min-w-0 items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
                    Mini caso
                  </p>
                  <p className="mt-2 truncate font-display text-2xl font-bold text-white">
                    {caseStudy.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-nx-soft">{caseStudy.subtitle}</p>
                </div>
                <span className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-soft">
                  publicado
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {caseStudy.metrics.map((m) => (
                  <MetricCard key={m.label} m={m} />
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/[0.1] bg-nx-black/40 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
                  Testimonio (editable)
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  “{caseStudy.testimonial.quote}”
                </p>
                <div className="mt-4 flex min-w-0 items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {caseStudy.testimonial.name}
                    </p>
                    <p className="truncate text-xs font-medium text-nx-muted">
                      {caseStudy.testimonial.role}
                    </p>
                  </div>
                  <Link
                    href={caseStudy.href}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-2xl border border-white/[0.12] bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/[0.18] hover:bg-white/[0.08] active:scale-[0.98]"
                  >
                    Ver caso ↗
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <MiniPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

