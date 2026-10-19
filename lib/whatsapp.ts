import { siteConfig, type PracticeArea } from "@/lib/site-config";

/** Monta um link wa.me com a mensagem já codificada. */
export function whatsappUrl(message: string = siteConfig.whatsappMessages.default) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Link do WhatsApp com mensagem citando uma área de atuação. */
export function whatsappAreaUrl(area: Pick<PracticeArea, "fullName">) {
  return whatsappUrl(siteConfig.whatsappMessages.area.replace("{area}", area.fullName));
}
