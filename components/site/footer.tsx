import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { CurrentYear } from "./current-year";

const { contact, address } = siteConfig;

export function Footer() {
  return (
    <footer className="texture-grain bg-ink px-5 pt-16 pb-28 text-muted-cream sm:px-10 lg:px-16 lg:pb-12 xl:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex items-start gap-4">
            <Image src="/logo-claro.png" alt="" width={72} height={64} className="h-auto w-[4.5rem] shrink-0" />
            <div>
              <p className="font-serif text-2xl leading-tight font-semibold text-gold">{siteConfig.name}</p>
              <p className="mt-2 text-sm tracking-[0.14em] uppercase">João Silvestre Sobrinho · OAB/SP 303.347</p>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold tracking-[0.14em] text-cream uppercase">
              Endereço
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed">
              {address.street}
              <br />
              {address.neighborhood}, {address.city} – {address.state}
              <br />
              CEP {address.postalCode}
            </p>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold tracking-[0.14em] text-cream uppercase">
              Contato
            </h2>
            <ul className="mt-3 space-y-1 text-[0.9375rem]">
              <li>
                <a className="inline-flex min-h-8 items-center hover:text-cream" href={`tel:${contact.landline.tel}`}>
                  {contact.landline.display}
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-8 items-center hover:text-cream" href={`tel:${contact.mobile1.tel}`}>
                  {contact.mobile1.display} (WhatsApp)
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-8 items-center hover:text-cream" href={`tel:${contact.mobile2.tel}`}>
                  {contact.mobile2.display}
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-8 items-center break-all hover:text-cream" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div aria-hidden="true" className="my-10 h-px bg-bronze/30" />

        {/* Aviso legal (Código de Ética e Provimento 205/2021 da OAB) */}
        <p className="max-w-3xl text-sm leading-relaxed">
          As informações deste site têm caráter meramente informativo e não constituem aconselhamento jurídico. Cada
          situação deve ser analisada individualmente por um advogado.
        </p>

        <div className="mt-6 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {siteConfig.name}. Todos os direitos reservados.
          </p>
          <Link href="/politica-de-privacidade" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-cream">
            Política de Privacidade
          </Link>
        </div>

        {/* Crédito da agência que desenvolveu o site */}
        <div className="mt-8 flex items-center justify-center gap-3 border-t border-cream/10 pt-6 text-xs tracking-[0.12em] uppercase sm:justify-start">
          <span>Desenvolvido por</span>
          <Image
            src="/nodex.png"
            alt="Nodex – Agência de Marketing Digital"
            width={640}
            height={131}
            sizes="120px"
            className="h-auto w-[7.5rem]"
          />
        </div>
      </div>
    </footer>
  );
}
