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
    body: "Web clara que transmite confianza desde el primer segundo: qué haces, para quién y por qué deberían elegirte.",
    icon: IconTrust,
  },
  {
    title: "Contacto directo",
    body: "Pensada para que te escriban: WhatsApp visible, formulario simple y cero laberintos para pedir cita o info.",
    icon: IconMessage,
  },
  {
    title: "Móvil impecable",
    body: "Perfecta en móvil: donde entra la mayoría de clientes locales. Botones grandes, textos legibles, CTA siempre a mano.",
    icon: IconMobile,
  },
  {
    title: "Velocidad real",
    body: "Carga rápida para no perder usuarios. Menos peso, mejor sensación de calidad y más gente que llega al botón.",
    icon: IconSpeed,
  },
] as const;

export function Credibility() {
  return (
    <section className="relative border-t border-white/[0.06] bg-gradient-to-b from-nx-black to-nx-ink py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
              Qué construyo contigo
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
              Una landing pensada para traerte más clientes, no para “quedar bonita”.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-nx-muted text-balance lg:col-span-5 lg:text-right">
            Priorizo mensaje, orden y conversión. Lo demás es ruido que no te paga la cuenta.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_16px_50px_-40px_rgba(0,0,0,0.75)] transition duration-300 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.035] hover:shadow-[0_22px_70px_-42px_rgba(168,85,247,0.28)]"
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-nx-fuchsia/70 via-nx-neon/60 to-nx-iris/40 opacity-80" />
                <div className="pl-4">
                  <div className="inline-flex rounded-xl border border-white/10 bg-nx-panel/70 p-3 text-nx-neon shadow-[0_0_40px_-16px_rgba(168,85,247,0.75)] transition group-hover:shadow-[0_0_48px_-12px_rgba(168,85,247,0.9)]">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-nx-muted">{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
