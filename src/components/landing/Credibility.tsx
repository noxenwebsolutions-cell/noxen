function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 8.5 9.5 12 12 15.5 14.5 12 12 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt() {
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

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden>
      <path
        d="M12 21a9 9 0 1 0-9-9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 17a5 5 0 1 0-5-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 13h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function IconChat() {
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

const items = [
  {
    title: "Diseño con intención",
    body: "Tipografía, contraste y composición con criterio. Se nota en el detalle, no en el ruido.",
    icon: IconSpark,
  },
  {
    title: "Velocidad perceptible",
    body: "Menos peso, mejor lectura. Tu cliente no espera: si tarda, se va.",
    icon: IconBolt,
  },
  {
    title: "Conversión en el centro",
    body: "Jerarquía clara, prueba social donde toca y un CTA que no hay que buscar.",
    icon: IconTarget,
  },
  {
    title: "Contacto sin drama",
    body: "WhatsApp, DM o formulario: lo ponemos donde a tu gente le apetece escribir.",
    icon: IconChat,
  },
] as const;

export function Credibility() {
  return (
    <section className="relative border-t border-white/[0.06] bg-gradient-to-b from-nx-black to-nx-ink py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-neon/90">
              Propuesta
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
              Noxen no vende “páginas bonitas”. Vende una presencia online que trabaja.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:text-right text-base leading-relaxed text-nx-muted text-balance">
            Micro‑agencia, foco total: una landing bien resuelta vale más que diez páginas
            medias. Menos teatro, más orden, más conversión.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/14"
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-nx-fuchsia/70 via-nx-neon/60 to-nx-iris/40 opacity-80" />
                <div className="pl-4">
                  <div className="inline-flex rounded-xl border border-white/10 bg-nx-panel/70 p-3 text-nx-neon shadow-[0_0_40px_-16px_rgba(168,85,247,0.75)]">
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
