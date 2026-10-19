import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./whatsapp-icon";

/** Botão flutuante do WhatsApp, fixo no canto inferior direito. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Advocacia João Silvestre Sobrinho pelo WhatsApp (abre em nova aba)"
      className="wa-pulse fixed right-4 bottom-4 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 focus-visible:outline-offset-4 sm:right-6 sm:bottom-6 sm:size-16"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <WhatsAppIcon className="size-8 sm:size-9" />
    </a>
  );
}
