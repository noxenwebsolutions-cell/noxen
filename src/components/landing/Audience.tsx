function IconGym() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M6 10h2M16 10h2M8 10h8M8 14h8M10 10v4M14 10v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClinic() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M12 6v12M9 9h6M9 15h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconBarber() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M8 4v16M16 4v16M8 8h8M8 16h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconFood() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M6 10c0-3 2.5-6 6-6s6 3 6 6-2 6-6 7c-4-1-6-4-6-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M9.5 10h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconBrand() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 20c1.8-3.2 5-5 8-5s6.2 1.8 8 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const segments = [
  {
    title: "Gimnasios",
    result: "Más clientes nuevos y más pruebas",
    body: "Oferta clara, horarios y un CTA que empuja a reservar clase de prueba sin fricción.",
    tag: "Fitness",
    icon: IconGym,
  },
  {
    title: "Clínicas",
    result: "Más reservas de tratamientos",
    body: "Servicios entendibles, confianza médica y un camino corto a pedir cita.",
    tag: "Salud",
    icon: IconClinic,
  },
  {
    title: "Barberías",
    result: "Más citas rápidas",
    body: "Portfolio fuerte, tiempos visibles y botón de reserva donde el cliente ya está: el móvil.",
    tag: "Estilo",
    icon: IconBarber,
  },
  {
    title: "Restaurantes",
    result: "Más reservas y más pedidos",
    body: "Carta escaneable, ubicación clara y dos CTAs: mesa o delivery, sin pelearse por atención.",
    tag: "Hostelería",
    icon: IconFood,
  },
  {
    title: "Marcas personales",
    result: "Más consultas y más ventas",
    body: "Propuesta directa, prueba de trabajo y WhatsApp/DM al final de cada bloque importante.",
    tag: "Local",
    icon: IconBrand,
  },
] as const;

export function Audience() {
  return (
    <section
      id="para-quien"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.16),transparent_72%)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-fuchsia/90">
              Para quién es
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              Si vives del barrio, tu web tiene que cerrar la venta en el móvil.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
              Menos texto vacío, más resultado: reservas, mensajes y llamadas. Aquí encajan
              negocios locales que quieren crecer sin complicarse.
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-nx-muted lg:text-right">
            ¿Tu sector no sale aquí? Si tu cliente te busca en Google Maps y acaba en tu web,
            probablemente encaja.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-12">
          {segments.map((s, idx) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className={[
                  "nx-card-surface group relative overflow-hidden p-6 sm:p-7",
                  idx === 0 ? "md:col-span-7" : "",
                  idx === 1 ? "md:col-span-5" : "",
                  idx === 2 ? "md:col-span-5" : "",
                  idx === 3 ? "md:col-span-7" : "",
                  idx === 4 ? "md:col-span-12" : "",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.12),transparent_70%)]" />
                </div>
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/[0.1] bg-nx-card-hover/60 text-nx-neon shadow-[0_0_28px_-12px_rgba(168,85,247,0.5)]">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-nx-muted">
                        {s.tag}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-nx-soft">{s.result}</p>
                      <p className="mt-2 max-w-prose text-sm leading-relaxed text-nx-muted">
                        {s.body}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 self-start rounded-xl border border-white/[0.1] bg-nx-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-nx-neon/95 ring-1 ring-white/[0.04] sm:self-auto">
                    + clientes
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
