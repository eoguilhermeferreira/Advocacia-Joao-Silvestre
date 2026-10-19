import Image from "next/image";
import { ArrowDownIcon, MapPinIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="texture-grain relative isolate flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden bg-ink px-5 py-14 text-cream sm:px-10 lg:min-h-svh lg:px-16 lg:py-20 xl:px-24"
    >
      {/* Fundo: foto da fachada com sombreado escuro por cima, para o texto ficar legível */}
      <Image
        src="/fachada.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) calc(100vw - 17rem), 100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgb(30_27_25/0.94)_0%,rgb(30_27_25/0.86)_55%,rgb(30_27_25/0.72)_100%)]"
      />

      <div className="mx-auto w-full max-w-5xl">
        {/* ---------- Marca: logo + nome (um conjunto só) ---------- */}
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Image
            src="/logo-claro.png"
            alt="Logo da Advocacia João Silvestre Sobrinho: a deusa da justiça, Têmis, segurando a balança"
            width={829}
            height={735}
            priority
            sizes="(min-width: 640px) 176px, 112px"
            className="h-auto w-28 shrink-0 sm:w-44"
          />
          <div className="flex flex-col gap-3">
            <p className="font-serif text-[2.125rem] leading-[1.08] font-medium text-gold sm:text-5xl xl:text-[3.5rem]">
              Advocacia
              <br />
              João Silvestre Sobrinho
            </p>
            <p className="text-sm tracking-[0.16em] text-muted-cream uppercase">
              OAB/SP 303.347 <span aria-hidden="true">·</span> Avaré – SP
            </p>
          </div>
        </div>

        <div aria-hidden="true" className="my-10 h-px w-24 bg-bronze lg:my-12" />

        {/* ---------- Mensagem ---------- */}
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-[2rem] text-cream sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            Orientação jurídica clara e atenciosa, perto de você.
          </h1>

          <p className="mt-6 font-serif text-xl font-medium tracking-wide text-gold sm:text-2xl">
            Cível · Família · Previdenciário · Trabalhista · Tributário
          </p>

          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-cream sm:text-lg">
            Escritório de advocacia em Avaré, atendendo moradores e empresas de Avaré e região. Ouvimos sua
            situação com calma e explicamos cada etapa em linguagem simples.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" />
                Falar no WhatsApp
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outlineDark">
              <a href="#areas">
                Ver áreas de atuação
                <ArrowDownIcon aria-hidden="true" />
              </a>
            </Button>
          </div>

          <p className="mt-6 inline-flex items-start gap-2 text-sm text-muted-cream">
            <MapPinIcon className="mt-0.5 size-4 shrink-0 text-bronze" aria-hidden="true" />
            <span>
              Atendimento presencial: {siteConfig.address.street}, {siteConfig.address.neighborhood}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
