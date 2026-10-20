"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { navItems } from "./nav-items";
import { useActiveSection } from "./use-active-section";
import { WhatsAppIcon } from "./whatsapp-icon";

const sectionIds = navItems.map((item) => item.id);

function NavLinks({
  active,
  onNavigate,
}: {
  active: string;
  onNavigate?: (event: MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onNavigate ? (event) => onNavigate(event, item.id) : undefined}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "group flex min-h-11 items-center gap-3 rounded-sm px-3 py-2 text-[0.9375rem] transition-colors",
                isActive ? "text-cream" : "text-muted-cream hover:text-cream",
              )}
            >
              {/* Marcador da seção ativa: linha bronze que cresce */}
              <span
                aria-hidden="true"
                className={cn(
                  "h-px bg-bronze transition-[width] duration-300 ease-out",
                  isActive ? "w-6" : "w-3 group-hover:w-5 bg-muted-cream/50",
                )}
              />
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function ContactButton({ className }: { className?: string }) {
  return (
    <Button asChild className={className}>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="size-4" />
        Fale conosco
        <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
      </a>
    </Button>
  );
}

/**
 * Navegação rápida.
 * - Desktop (≥1024px): sidebar fixa à esquerda.
 * - Celular/tablet: barra superior com menu hambúrguer (Sheet).
 */
export function SiteNav() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  // Seção escolhida no menu do celular: rolamos só depois que o menu fecha,
  // porque o menu trava a rolagem da página enquanto está aberto.
  const pendingSection = useRef<string | null>(null);

  function handleMobileNavigate(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    pendingSection.current = id;
    setOpen(false);
  }

  function handleSheetClosed(event: Event) {
    const id = pendingSection.current;
    if (!id) return;
    pendingSection.current = null;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      {/* ---------- Sidebar (desktop) ---------- */}
      <aside className="texture-grain fixed inset-y-0 left-0 z-40 hidden w-68 flex-col border-r border-bronze/20 bg-ink px-6 py-8 lg:flex">
        <a href="#inicio" className="flex flex-col items-center gap-3 rounded-sm text-center">
          <Image src="/logo-claro.png" alt="" width={96} height={85} className="h-auto w-24" />
          <span className="font-serif text-xl leading-tight font-semibold text-gold">
            Advocacia
            <br />
            Dr. João Silvestre Sobrinho
          </span>
          <span className="text-xs tracking-[0.14em] text-muted-cream uppercase">OAB/SP 303.347</span>
        </a>

        <div aria-hidden="true" className="mx-auto my-8 h-px w-16 bg-bronze/50" />

        <nav aria-label="Navegação principal">
          <NavLinks active={active} />
        </nav>

        <div className="mt-auto flex flex-col gap-4">
          <ContactButton className="w-full" />
          <a
            href={`tel:${siteConfig.contact.landline.tel}`}
            className="text-center text-sm text-muted-cream transition-colors hover:text-cream"
          >
            {siteConfig.contact.landline.display}
          </a>
        </div>
      </aside>

      {/* ---------- Barra superior (celular e tablet) ---------- */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-3 border-b border-bronze/20 bg-ink/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-ink/85 lg:hidden">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5 rounded-sm">
          <Image src="/logo-claro.png" alt="" width={44} height={39} className="h-auto w-11 shrink-0" />
          <span className="truncate font-serif text-lg leading-tight font-semibold text-gold">
            Advocacia Dr. João Silvestre
          </span>
          <span className="sr-only"> Sobrinho — voltar ao início</span>
        </a>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outlineDark" size="icon" aria-label="Abrir menu de navegação">
              <MenuIcon className="size-5" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="texture-grain px-5 py-6"
            onCloseAutoFocus={handleSheetClosed}
          >
            <div className="flex items-center gap-3 pr-10">
              <Image src="/logo-claro.png" alt="" width={56} height={50} className="h-auto w-14" />
              <div>
                <SheetTitle className="font-serif text-lg leading-tight font-semibold text-gold">
                  Advocacia Dr. João Silvestre Sobrinho
                </SheetTitle>
                <SheetDescription className="text-xs tracking-[0.12em] text-muted-cream uppercase">
                  OAB/SP 303.347
                </SheetDescription>
              </div>
            </div>
            <div aria-hidden="true" className="my-6 h-px w-16 bg-bronze/50" />
            <nav aria-label="Navegação principal (celular)">
              <NavLinks active={active} onNavigate={handleMobileNavigate} />
            </nav>
            <ContactButton className="mt-auto w-full" />
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
