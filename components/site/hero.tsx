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
      className="texture-grain relative isolate flex min-h-[calc(100svh-4rem)] flex-col justify-start overflow-hidden bg-ink px-5 py-14 text-cream sm:justify-center sm:px-10 lg:min-h-svh lg:px-16 lg:py-20 xl:px-24"
    >
      {/*
        Fundo: foto da fachada com sombreado por cima.
        - Celular: a foto aparece inteira (quadrada) no topo, toda coberta por sombreado
          (mais forte embaixo, onde ficam os textos).
        - Tablet/desktop: a foto cobre o hero; o sombreado é forte à esquerda (texto) e leve à direita.
      */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-20 aspect-square sm:inset-0 sm:aspect-auto">
        <Image
          src="/fachada.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) calc(100vw - 17rem), 100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 aspect-square bg-[linear-gradient(180deg,rgb(30_27_25/0.72)_0%,rgb(30_27_25/0.76)_45%,rgb(30_27_25/0.88)_68%,rgb(30_27_25/1)_94%)] sm:inset-0 sm:aspect-auto sm:bg-[linear-gradient(100deg,rgb(30_27_25/0.93)_0%,rgb(30_27_25/0.88)_60%,rgb(30_27_25/0.55)_80%,rgb(30_27_25/0.3)_100%)]"
      />

      <div className="mx-auto w-full max-w-5xl">
        {/* ---------- Marca: logo + nome (um conjunto só) ---------- */}
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Image
            src="/logo-claro.png"
            alt="Logo da Advocacia Dr. João Silvestre Sobrinho: a deusa da justiça, Têmis, segurando a balança"
            width={829}
            height={735}
            priority
            sizes="(min-width: 640px) 176px, 112px"
            className="h-auto w-28 shrink-0 sm:w-44"
          />
          <div className="flex flex-col gap-3">
            <p className="font-serif text-[2.125rem] leading-[1.08] font-medium text-gold sm:text-5xl xl:text-[3.125rem]">
              Advocacia
              <br />
              Dr. João Silvestre Sobrinho
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

          <p className="mt-6 inline-flex items-start gap-2 text-sm text-cream/90">
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
