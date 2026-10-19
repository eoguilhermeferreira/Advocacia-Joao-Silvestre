import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { CtaBand } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { JsonLd } from "@/components/site/json-ld";
import { Lawyers } from "@/components/site/lawyers";
import { PracticeAreas } from "@/components/site/practice-areas";
import { SiteNav } from "@/components/site/site-nav";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-sm focus:bg-cream focus:px-4 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <SiteNav />
      <div className="lg:pl-68">
        <main id="conteudo">
          <Hero />
          <About />
          <PracticeAreas />
          <Lawyers />
          {/* CTA 3 */}
          <CtaBand
            title="Atendimento presencial em Avaré"
            text="Venha até o escritório, no bairro Santa Cruz, ou comece a conversa pelo WhatsApp."
            label="Falar no WhatsApp"
          />
          <Contact />
        </main>
        <Footer />
      </div>
      <WhatsAppFloat />
      <JsonLd />
    </>
  );
}
