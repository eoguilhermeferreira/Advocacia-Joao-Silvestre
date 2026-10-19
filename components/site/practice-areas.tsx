import {
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  LandmarkIcon,
  ReceiptTextIcon,
  ScrollTextIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import { siteConfig, type PracticeAreaId } from "@/lib/site-config";
import { whatsappAreaUrl } from "@/lib/whatsapp";
import { Reveal } from "./reveal";

const icons: Record<PracticeAreaId, LucideIcon> = {
  civel: ScrollTextIcon,
  familia: UsersIcon,
  previdenciario: LandmarkIcon,
  trabalhista: BriefcaseBusinessIcon,
  tributario: ReceiptTextIcon,
};

export function PracticeAreas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      className="border-y border-ink/10 bg-paper-deep px-5 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Grade: bloco de introdução + 5 áreas = 6 células */}
        <ul className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
          <li className="flex flex-col justify-between gap-6 bg-ink p-8 text-cream sm:p-10">
            <Reveal>
              <p className="eyebrow text-gold">Áreas de atuação</p>
              <h2 id="areas-title" className="mt-4 text-[2.125rem] text-cream sm:text-[2.5rem]">
                Em que o escritório pode orientar você
              </h2>
            </Reveal>
            <p className="text-[0.9375rem] leading-relaxed text-muted-cream">
              Veja abaixo, em linguagem simples, os tipos de situação atendidos em cada área. Se não tiver certeza de
              onde o seu caso se encaixa, é só perguntar.
            </p>
          </li>

          {siteConfig.practiceAreas.map((area, i) => {
            const Icon = icons[area.id];
            return (
              <Reveal
                as="li"
                key={area.id}
                delay={(i % 3) * 90}
                className="group flex flex-col bg-paper p-8 transition-colors duration-300 hover:bg-white sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-bronze/50 text-bronze transition-colors duration-300 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink">
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span aria-hidden="true" className="font-serif text-lg text-ink/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-[1.75rem] text-ink">{area.name}</h3>
                <p className="mt-1 text-sm font-semibold text-bronze-ink">{area.seoPhrase}</p>
                <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted-ink">{area.description}</p>

                <a
                  href={whatsappAreaUrl(area)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-1.5 self-start rounded-sm text-sm font-semibold text-bronze-ink underline decoration-bronze/40 underline-offset-4 transition-colors hover:text-ink hover:decoration-bronze"
                >
                  Falar sobre este assunto
                  <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                  <span className="sr-only">
                    {" "}
                    — {area.fullName}, pelo WhatsApp (abre em nova aba)
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
