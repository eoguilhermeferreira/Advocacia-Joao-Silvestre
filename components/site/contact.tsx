import { MailIcon, MapPinIcon, PhoneIcon, SmartphoneIcon } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";

const { contact, address } = siteConfig;

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address.mapsQuery)}&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.mapsQuery)}`;

export function Contact() {
  const channels = [
    { icon: PhoneIcon, label: "Telefone fixo", value: contact.landline.display, href: `tel:${contact.landline.tel}` },
    {
      icon: SmartphoneIcon,
      label: "Celular e WhatsApp",
      value: contact.mobile1.display,
      href: `tel:${contact.mobile1.tel}`,
    },
    { icon: SmartphoneIcon, label: "Celular", value: contact.mobile2.display, href: `tel:${contact.mobile2.tel}` },
    { icon: MailIcon, label: "E-mail", value: contact.email, href: `mailto:${contact.email}` },
  ];

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="border-t border-ink/10 bg-paper-deep px-5 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-bronze-ink">Contato</p>
          <h2 id="contato-title" className="mt-4 text-[2.25rem] text-ink sm:text-5xl">
            Fale com o escritório
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-ink">
            Conte brevemente o seu caso pelo formulário, ligue ou venha até o escritório, no bairro Santa Cruz, em
            Avaré. Retornaremos o contato assim que possível.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
          <Reveal className="border border-ink/10 bg-paper p-6 shadow-[0_1px_2px_rgb(30_27_25/0.04)] sm:p-9">
            <h3 className="text-2xl text-ink">Envie sua mensagem</h3>
            <p className="mt-1 mb-7 text-[0.9375rem] text-muted-ink">Todos os campos são obrigatórios.</p>
            <ContactForm />
          </Reveal>

          <Reveal as="aside" delay={100} aria-label="Telefones, e-mail e endereço" className="flex flex-col gap-8">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {channels.map((c) => (
                <li key={c.value}>
                  <a
                    href={c.href}
                    className="group flex min-h-16 items-center gap-4 py-3 transition-colors"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-bronze/50 text-bronze transition-colors group-hover:bg-bronze group-hover:text-ink">
                      <c.icon className="size-[1.125rem]" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs font-semibold tracking-[0.12em] text-muted-ink uppercase">
                        {c.label}
                      </span>
                      <span className="text-lg font-semibold break-words text-ink group-hover:text-bronze-ink">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <address className="flex gap-4 not-italic">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-bronze/50 text-bronze">
                <MapPinIcon className="size-[1.125rem]" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-semibold tracking-[0.12em] text-muted-ink uppercase">Endereço</span>
                <span className="text-[1.0625rem] leading-snug text-ink">
                  {address.street}
                  <br />
                  {address.neighborhood}, {address.city} – {address.state}
                  <br />
                  CEP {address.postalCode}
                </span>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center self-start text-sm font-semibold text-bronze-ink underline underline-offset-4"
                >
                  Abrir rota no Google Maps
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </span>
            </address>
          </Reveal>
        </div>

        {/* Mapa */}
        <Reveal className="relative mt-12 h-80 overflow-hidden border border-ink/10 bg-paper sm:h-96">
          <iframe
            src={mapSrc}
            title={`Mapa: ${address.full}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        </Reveal>
      </div>
    </section>
  );
}
