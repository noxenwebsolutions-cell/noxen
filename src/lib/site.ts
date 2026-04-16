/** Contacto y redes — Noxen */
export const site = {
  name: "Noxen",
  tagline: "Web Solutions",
  email: "hola@noxen.studio",
  instagram: "https://www.instagram.com/noxenwebsolutions/?hl=es",
  twitter: "https://x.com/NoxenWebService",
  /** Sin + ni espacios */
  whatsappPhone: "34639966592",
} as const;

/** Mensaje predefinido para WhatsApp (saltos de línea preservados en la URL) */
export const whatsappMessage = `Hola, he visto tu web y me interesa tener una página para mi negocio.

Me gustaría que me expliques cómo trabajas y qué me recomendarías en mi caso.

También he visto algunos de tus proyectos y me gustaría algo en esa línea.

Te dejo mi idea:`;

export const whatsappBaseUrl = `https://wa.me/${site.whatsappPhone}` as const;

/** wa.me con texto codificado (encodeURIComponent) */
export function whatsappHref(): string {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(whatsappMessage)}`;
}
