"use client";

import { useEffect, useState } from "react";

/**
 * Ano atual no rodapé. Com o Cache Components ativo, o Next.js não permite
 * `new Date()` durante a pré-geração do HTML, então o ano é preenchido no navegador.
 */
export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- valor só existe no navegador
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span>{year}</span>;
}
