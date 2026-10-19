import type { Metadata, Viewport } from "next";
import { EB_Garamond, Source_Sans_3 } from "next/font/google";

import { siteConfig } from "@/lib/site-config";
import "./globals.css";

// Serifa elegante para títulos e sans-serif limpa para o corpo.
// next/font hospeda as fontes junto com o site e aplica display: swap.
// (Cormorant Garamond foi descartada: a versão atual posiciona mal os acentos — í, ê.)
const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const title = "Advogado em Avaré – SP | Advocacia João Silvestre Sobrinho";
const description =
  "Escritório de advocacia em Avaré – SP. Atuação nas áreas cível, de família, previdenciária, trabalhista e tributária. João Silvestre Sobrinho, OAB/SP 303.347. Atendimento presencial e pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  applicationName: siteConfig.name,
  authors: [{ name: "João Silvestre Sobrinho" }],
  alternates: { canonical: "/" },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1e1b19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${garamond.variable} ${sourceSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marca que o JS está ativo: habilita as animações de entrada sem esconder conteúdo de quem não tem JS */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
