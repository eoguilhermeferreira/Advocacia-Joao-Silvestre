/** Itens da navegação rápida (sidebar e menu do celular). */
export const navItems = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "areas", label: "Áreas de Atuação" },
  { id: "advogados", label: "Advogado" },
  { id: "contato", label: "Contato" },
] as const;

export type NavId = (typeof navItems)[number]["id"];
