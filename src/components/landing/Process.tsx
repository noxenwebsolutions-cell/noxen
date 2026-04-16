const steps = [
  {
    n: "01",
    title: "Me escribes",
    body: "Lo esencial: qué vendes, dónde estás, objetivo y referencias si las tienes.",
  },
  {
    n: "02",
    title: "Te propongo una solución",
    body: "Estructura, tono y prioridades. Sin tecnicismos: tú decides y avanzamos.",
  },
  {
    n: "03",
    title: "La tienes online en 72h",
    body: "Implementación limpia, revisión corta y publicación. Lista para captar contactos.",
  },
] as const;

export function Process() {
  return (
    <section id="proceso" className="relative border-y border-white/[0.06] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="nx-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
            Proceso
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
            Tres pasos. Cero humo.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
            Sin comités eternos. Lo importante es publicar rápido, medir y ajustar con datos
            reales de tu gente.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-4 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.22),transparent_70%)]" />
              <div className="relative">
                <p className="font-display text-xs font-extrabold tracking-[0.32em] text-nx-neon">
                  {s.n}
                </p>
                <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-nx-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
