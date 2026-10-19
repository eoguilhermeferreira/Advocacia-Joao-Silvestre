import Image from "next/image";
import { EyeIcon, LockKeyholeIcon, MessageCircleIcon } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Reveal } from "./reveal";

const values = [
  {
    icon: MessageCircleIcon,
    title: "Escuta atenta",
    text: "Cada situação é ouvida com calma antes de qualquer orientação.",
  },
  {
    icon: EyeIcon,
    title: "Clareza",
    text: "Explicações em linguagem simples, sem juridiquês.",
  },
  {
    icon: LockKeyholeIcon,
    title: "Ética e sigilo",
    text: "Respeito ao cliente e ao Código de Ética da advocacia.",
  },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="bg-paper px-5 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        {/* Foto da fachada do escritório, em moldura com filete bronze */}
        <Reveal className="relative mx-auto w-full max-w-md lg:sticky lg:top-16">
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 border border-bronze/60" />
          <div className="relative aspect-square overflow-hidden bg-ink">
            <Image
              src="/fachada.jpg"
              alt="Fachada do escritório Advocacia João Silvestre Sobrinho, Rua Domiciano Santana, 960, Avaré"
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow text-bronze-ink">Sobre o escritório</p>
            <h2 id="sobre-title" className="mt-4 text-[2.25rem] text-ink sm:text-5xl">
              Advogado em Avaré, com atendimento próximo e pessoal
            </h2>
          </Reveal>

          {/* TODO: revisar os textos abaixo com o Dr. João */}
          <Reveal delay={80} className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-muted-ink">
            <p>
              <strong className="font-semibold text-ink">João Silvestre Sobrinho</strong> é advogado inscrito na{" "}
              <strong className="font-semibold text-ink">OAB/SP sob o nº 303.347</strong> e responsável pela Advocacia
              João Silvestre Sobrinho, no bairro Santa Cruz, em Avaré.
            </p>
            <p>
              O escritório atua nas áreas cível, de família, previdenciária, trabalhista e tributária, atendendo
              pessoas, famílias e empresas de Avaré e região que precisam entender seus direitos antes de decidir qual
              caminho seguir.
            </p>
            <p>
              O atendimento começa por uma conversa franca: ouvir a situação, analisar os documentos e explicar as
              alternativas possíveis, com seus prós e contras. Ao longo do caso, o cliente é mantido informado sobre
              cada passo.
            </p>
            <p>Ética, sigilo e respeito orientam o trabalho, do primeiro contato à conclusão do atendimento.</p>
          </Reveal>

          {siteConfig.education.length > 0 && (
            <Reveal delay={120} className="mt-10">
              <h3 className="text-2xl text-ink">Formação</h3>
              <ul className="mt-4 space-y-2 text-muted-ink">
                {siteConfig.education.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-bronze" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <ul className="mt-12 grid gap-6 border-t border-ink/10 pt-10 sm:grid-cols-3">
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={i * 90}>
                <value.icon className="size-6 text-bronze" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-3 text-xl text-ink">{value.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-ink">{value.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
