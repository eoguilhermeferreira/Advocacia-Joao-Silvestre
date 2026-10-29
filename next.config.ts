import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // O otimizador de imagens da Vercel tem cota no plano Hobby (compartilhada
    // entre todos os projetos da conta). Quando ela acaba, as imagens quebram
    // (erro 402). Por isso as imagens já são salvas otimizadas em /public
    // (WebP, no tamanho certo) e servidas direto, sem passar pelo otimizador.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
