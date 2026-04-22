function IconTrust() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M12 3 5 6v6c0 4.2 2.9 8.1 7 9 4.1-.9 7-4.8 7-9V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9.5 12.5 1.7 1.7 3.8-3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M8 10h8M8 14h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6.5 19.5 8 18h9a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v9.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMobile() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M10 18h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M13 2 4 14h6l-1 8 10-15h-7l1-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const items = [
  {
    title: "Confianza al instante",
    body: "Se entiende en 3 segundos: qué haces, para quién y por qué eres la opción segura.",
    icon: IconTrust,
  },
  {
    title: "Contacto directo",
    body: "WhatsApp y CTAs donde el cliente decide: sin menús, sin laberintos, sin perder intención.",
    icon: IconMessage,
  },
  {
    title: "Móvil impecable",
    body: "Botones grandes, lectura cómoda y jerarquía limpia. El móvil deja de ser un problema.",
    icon: IconMobile,
  },
  {
    title: "Velocidad real",
    body: "Carga rápida y sensación premium. Más gente llega al CTA sin abandonar antes.",
    icon: IconSpeed,
  },
] as const;

export function Credibility() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-nx-black to-nx-ink py-20 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
              Qué construyo contigo
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              Una landing pensada para traerte más clientes, no para “quedar bonita”.
            </h2>
          </div>
          <p className="text-base font-normal leading-relaxed text-nx-muted text-balance lg:col-span-5 lg:text-right">
            Priorizo mensaje, orden y conversión. Lo demás es ruido que no te paga la cuenta.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="nx-card-surface group relative overflow-hidden p-5 pl-4 sm:p-6 sm:pl-5"
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-nx-fuchsia/70 via-nx-neon/60 to-nx-iris/40 opacity-80" />
                <div className="pl-4">
                  <div className="inline-flex rounded-2xl border border-white/[0.1] bg-nx-card-hover/50 p-3 text-nx-neon shadow-[0_0_32px_-14px_rgba(168,85,247,0.45)] transition duration-200 group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.55)]">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-normal leading-relaxed text-nx-muted">
                    {item.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
