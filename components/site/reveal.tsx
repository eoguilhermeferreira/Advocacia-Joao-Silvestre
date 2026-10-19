"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
} from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  /** Atraso em ms, para entradas em sequência */
  delay?: number;
} & ComponentPropsWithoutRef<T>;

/**
 * Faz o conteúdo surgir com um fade/slide discreto quando entra na tela.
 * Respeita prefers-reduced-motion (ver globals.css) e não esconde nada sem JS.
 */
export function Reveal<T extends ElementType = "div">({ as, delay = 0, style, ...props }: RevealProps<T>) {
  const Comp = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Comp
      ref={ref}
      data-reveal=""
      data-visible={visible}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as CSSProperties}
      {...props}
    />
  );
}
