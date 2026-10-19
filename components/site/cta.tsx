import { PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";

type CtaProps = {
  title: string;
  text: string;
  /** Texto do botão do WhatsApp */
  label: string;
  /** Mensagem já preenchida no WhatsApp */
  message?: string;
  /** Mostra também o botão "Ligar" para o telefone fixo */
  showPhone?: boolean;
  className?: string;
};

function WhatsAppButton({ label, message }: { label: string; message?: string }) {
  return (
    <Button asChild size="lg">
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="size-5" />
        {label}
        <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
      </a>
    </Button>
  );
}

/**
 * Chamada para contato dentro de uma seção clara.
 * Tom informativo (Provimento 205/2021 da OAB): sem urgência nem promessa de resultado.
 */
export function InlineCta({ title, text, label, message, showPhone = false, className }: CtaProps) {
  return (
    // @container: o layout se adapta à largura do bloco, não da tela
    // (no "Sobre" o bloco fica numa coluna estreita mesmo no desktop).
    <Reveal className={cn("@container border border-ink/10 border-l-2 border-l-bronze bg-paper", className)}>
      <div className="flex flex-col gap-6 p-6 sm:p-8 @2xl:flex-row @2xl:items-center @2xl:justify-between">
        <div className="max-w-xl">
          <p className="font-serif text-2xl leading-snug font-medium text-ink">{title}</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-ink">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <WhatsAppButton label={label} message={message} />
          {showPhone && (
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${siteConfig.contact.landline.tel}`}>
                <PhoneIcon aria-hidden="true" />
                Ligar
                <span className="sr-only"> para {siteConfig.contact.landline.display}</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/** Faixa escura de largura total com chamada para contato. */
export function CtaBand({ title, text, label, message }: Omit<CtaProps, "showPhone" | "className">) {
  return (
    <section
      aria-labelledby="cta-faixa-title"
      className="texture-grain bg-ink px-5 py-16 text-cream sm:px-10 lg:px-16 lg:py-20 xl:px-24"
    >
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div aria-hidden="true" className="mb-5 h-px w-16 bg-bronze" />
          <h2 id="cta-faixa-title" className="text-[2rem] text-cream sm:text-[2.5rem]">
            {title}
          </h2>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-cream">{text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <WhatsAppButton label={label} message={message} />
          <Button asChild size="lg" variant="outlineDark">
            <a href={`tel:${siteConfig.contact.landline.tel}`}>
              <PhoneIcon aria-hidden="true" />
              Ligar: {siteConfig.contact.landline.display}
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
