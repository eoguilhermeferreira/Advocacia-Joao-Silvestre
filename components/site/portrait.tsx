import Image from "next/image";

import { cn } from "@/lib/utils";

type PortraitProps = {
  name: string;
  initials: string;
  /** Caminho em /public. Se for null, mostra um quadro neutro com as iniciais. */
  photo: string | null;
  className?: string;
  sizes?: string;
};

/** Foto do advogado em moldura com filete bronze. */
export function Portrait({ name, initials, photo, className, sizes = "(min-width: 1024px) 360px, 80vw" }: PortraitProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Filete decorativo deslocado atrás da foto */}
      <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 border border-bronze/60" />
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        {photo ? (
          <Image src={photo} alt={`Foto de ${name}`} fill sizes={sizes} className="object-cover" />
        ) : (
          // TODO: preencher — enquanto não houver foto, exibimos as iniciais
          <div
            role="img"
            aria-label={`Espaço reservado para a foto de ${name}`}
            className="texture-grain flex h-full w-full items-center justify-center"
          >
            <span aria-hidden="true" className="font-serif text-7xl font-semibold tracking-wider text-gold/80">
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
