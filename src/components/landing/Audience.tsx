const segments = [
  {
    title: "Gimnasios",
    body: "Planes, horarios y reservas con una estética que refuerza disciplina y confianza.",
    tag: "Fitness",
  },
  {
    title: "Clínicas",
    body: "Orden, calma y credibilidad: servicios claros y un contacto fácil para nuevos pacientes.",
    tag: "Salud",
  },
  {
    title: "Barberías",
    body: "Look fuerte, booking simple y una vitrina que iguala el nivel del servicio.",
    tag: "Estilo",
  },
  {
    title: "Restaurantes",
    body: "Carta legible, ubicación clara y un CTA que empuja a reservar o pedir sin fricción.",
    tag: "Hostelería",
  },
  {
    title: "Marcas personales",
    body: "Autoridad sin postureo: propuesta clara, portfolio limpio y camino directo al DM.",
    tag: "Local",
  },
] as const;

export function Audience() {
  return (
    <section id="para-quien" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.16),transparent_72%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-fuchsia/90">
              Para quién es
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
              Negocios locales que necesitan verse serios online, ya.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
              Si compites en proximidad, la confianza se gana en segundos. La web tiene que
              explicar qué haces, por qué eres bueno y cómo reservar o escribirte, sin marear.
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-nx-muted lg:text-right">
            Si no apareces en la lista pero eres local y quieres una landing sólida, el
            enfoque encaja igual.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {segments.map((s, idx) => (
            <article
              key={s.title}
              className={[
                "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/14",
                idx === 0 ? "md:col-span-7" : "",
                idx === 1 ? "md:col-span-5" : "",
                idx === 2 ? "md:col-span-5" : "",
                idx === 3 ? "md:col-span-7" : "",
                idx === 4 ? "md:col-span-12" : "",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.12),transparent_70%)]" />
              </div>
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
                    {s.tag}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-nx-muted">
                    {s.body}
                  </p>
                </div>
                <span className="shrink-0 rounded-lg border border-white/10 bg-nx-panel/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-nx-soft">
                  Local
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
