const steps = [
  {
    n: "01",
    title: "Me escribes por WhatsApp",
    body: "Me cuentas tu negocio y qué quieres conseguir: más reservas, más llamadas, más visitas.",
  },
  {
    n: "02",
    title: "Te propongo la web",
    body: "Diseño una estructura pensada para atraer clientes: secciones, mensajes y prioridades claras.",
  },
  {
    n: "03",
    title: "La tienes online en 72h",
    body: "Lista para recibir contactos desde el primer día: rápida, clara y con CTA visibles.",
  },
] as const;

export function Process() {
  return (
    <section id="proceso" className="relative scroll-mt-28 border-y border-white/[0.06] py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="nx-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
            Proceso
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
            Tres pasos, cero humo.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
            Publicas rápido, miras qué responde tu gente y ajustas con datos reales, no con
            opiniones eternas.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-4 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block" />
          {steps.map((s) => (
            <li
              key={s.n}
              className="nx-card-surface group relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.22),transparent_70%)]" />
              <div className="relative">
                <p className="font-display text-xs font-semibold tracking-[0.32em] text-nx-neon">
                  {s.n}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
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
