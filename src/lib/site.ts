/** Enlaces de contacto — ajusta a tu número y mensaje real */
export const site = {
  name: "Noxen",
  tagline: "Web Solutions",
  email: "hola@noxen.studio",
  instagram: "https://www.instagram.com/noxen.studio",
  whatsappPhone: "34600000000",
  whatsappMessage:
    "Hola Noxen, quiero una propuesta para mi negocio. Me interesa una landing.",
} as const;

export function whatsappHref(): string {
  const q = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.whatsappPhone}?text=${q}`;
}
