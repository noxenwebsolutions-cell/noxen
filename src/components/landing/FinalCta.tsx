import { whatsappHref } from "@/lib/site";
import { CtaButton } from "./CtaButton";

export function FinalCta() {
  return (
    <section id="contacto" className="relative pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-gradient-to-br from-nx-panel/90 via-nx-ink/85 to-nx-black shadow-[0_40px_140px_-60px_rgba(168,85,247,0.7)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.32),transparent_70%)] blur-2xl" />
            <div className="absolute -right-28 bottom-[-160px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(232,121,249,0.14),transparent_72%)] blur-2xl" />
            <div className="nx-grid absolute inset-0 opacity-35" />
          </div>

          <div className="relative grid gap-10 p-10 sm:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-nx-fuchsia/90">
                Cierre
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.55rem] text-balance">
                Si tu negocio no transmite confianza online, estás perdiendo clientes.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-nx-muted sm:text-lg text-balance">
                La gente decide en segundos. Una landing bien hecha no adorna: ordena tu
                oferta, reduce fricción y te hace parecer el negocio serio que ya eres en la
                calle.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
                <p className="text-sm font-semibold text-white">Hablemos con intención</p>
                <p className="mt-2 text-sm leading-relaxed text-nx-muted">
                  Dime qué vendes, dónde estás y qué quieres conseguir (reservas, llamadas,
                  visitas). Te respondo con una propuesta clara.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <CtaButton
                    href={whatsappHref()}
                    variant="primary"
                    className="w-full"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Escribir por WhatsApp
                  </CtaButton>
                  <CtaButton href="#oferta" variant="secondary" className="w-full">
                    Ver oferta
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
