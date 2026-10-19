import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { Footer } from "@/components/site/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Advocacia João Silvestre Sobrinho, em Avaré – SP, trata os dados enviados pelo site, de acordo com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

// TODO: revisar este texto com o Dr. João antes de publicar.
export default function PrivacyPolicy() {
  const { contact } = siteConfig;
  return (
    <>
      <header className="texture-grain bg-ink px-5 py-6 sm:px-10">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 rounded-sm">
            <Image src="/logo-claro.png" alt="" width={44} height={39} className="h-auto w-11" />
            <span className="font-serif text-lg leading-tight font-semibold text-gold">{siteConfig.name}</span>
          </Link>
        </div>
      </header>

      <main id="conteudo" className="bg-paper px-5 py-16 sm:px-10 lg:py-24">
        <article className="mx-auto max-w-3xl text-[1.0625rem] leading-relaxed text-muted-ink">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-bronze-ink underline underline-offset-4"
          >
            <ArrowLeftIcon className="size-4" aria-hidden="true" />
            Voltar para o site
          </Link>

          <h1 className="mt-6 text-[2.5rem] text-ink sm:text-5xl">Política de Privacidade</h1>
          <p className="mt-4">
            Esta política explica, de forma simples, como a {siteConfig.name} trata as informações enviadas por
            este site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
          </p>

          <h2 className="mt-12 text-3xl text-ink">Quais dados recebemos</h2>
          <p className="mt-3">
            Pelo formulário de contato, você informa nome, e-mail, telefone, a área do assunto e uma mensagem. Esses
            dados não ficam gravados no site: ao clicar em enviar, o formulário apenas monta o texto e abre o
            WhatsApp para você enviar a mensagem ao escritório, se quiser.
          </p>

          <h2 className="mt-10 text-3xl text-ink">Para que usamos</h2>
          <p className="mt-3">
            Os dados recebidos são usados <strong className="text-ink">somente para retornar o seu contato</strong> e
            dar andamento ao atendimento solicitado. Não vendemos, não compartilhamos para fins de propaganda e não
            enviamos mensagens promocionais.
          </p>

          <h2 className="mt-10 text-3xl text-ink">Sigilo profissional</h2>
          <p className="mt-3">
            As informações relatadas ao escritório estão protegidas pelo sigilo profissional do advogado, previsto no
            Estatuto da Advocacia e no Código de Ética e Disciplina da OAB.
          </p>

          <h2 className="mt-10 text-3xl text-ink">Serviços de terceiros</h2>
          <p className="mt-3">
            O envio das mensagens acontece pelo WhatsApp, e o mapa do endereço é exibido pelo Google Maps. Esses
            serviços têm políticas de privacidade próprias.
          </p>

          <h2 className="mt-10 text-3xl text-ink">Seus direitos</h2>
          <p className="mt-3">
            Você pode pedir, a qualquer momento, para confirmar, corrigir ou excluir os seus dados que estejam com o
            escritório. Basta entrar em contato pelo e-mail{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-bronze-ink underline underline-offset-4">
              {contact.email}
            </a>{" "}
            ou pelo telefone{" "}
            <a href={`tel:${contact.landline.tel}`} className="font-semibold text-bronze-ink underline underline-offset-4">
              {contact.landline.display}
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
