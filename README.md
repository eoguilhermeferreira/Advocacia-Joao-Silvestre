# Advocacia João Silvestre Sobrinho — site institucional

Site one-page do escritório **Advocacia João Silvestre Sobrinho** (Avaré – SP), feito em
Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + componentes no padrão shadcn/ui.

## Onde editar

| O que trocar | Arquivo |
| --- | --- |
| Telefones, WhatsApp, e-mail, endereço, mensagens padrão do WhatsApp | `lib/site-config.ts` |
| Advogados (nome, OAB, foto, áreas, mini-bio) | `lib/site-config.ts` → `lawyers` |
| Formação do Dr. João | `lib/site-config.ts` → `education` |
| Textos das áreas de atuação | `lib/site-config.ts` → `practiceAreas` |
| Texto da seção "Sobre" | `components/site/about.tsx` |
| Título e descrição para o Google | `app/layout.tsx` |
| Política de Privacidade | `app/politica-de-privacidade/page.tsx` |
| Cores e fontes | `app/globals.css` e `app/layout.tsx` |

Procure por `TODO: preencher` no código para ver tudo o que ainda falta.

### Pendências (placeholders)

- **Foto do Dr. João**: salve em `public/joao.jpg` (retrato vertical, ~800×1000 px) e troque `photo: null` por `photo: "/joao.jpg"`.
- **Foto do Dr. Rubens**: `public/rubens.jpg` → `photo: "/rubens.jpg"`.
- **OAB do Dr. Rubens**: preencha `oab` (ex.: `"OAB/SP 000.000"`). Enquanto estiver vazio, a linha da OAB não aparece. Pelas regras da OAB, não publique o site sem esse número.
- **Áreas e mini-bio do Dr. Rubens**: `areas` e `bio`.
- **Formação do Dr. João**: lista `education` (o bloco só aparece quando houver itens).
- **Domínio**: defina `NEXT_PUBLIC_SITE_URL` na Vercel (ex.: `https://www.seudominio.com.br`).
- **Revisão de textos**: confirmar com o Dr. João os exemplos de cada área, o texto "Sobre" e a Política de Privacidade.

## Rodar no computador

Requer Node.js 20.9 ou superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

Antes de publicar:

```bash
npm run lint
npm run build
npm start        # testa a versão de produção em http://localhost:3000
```

## Publicar na Vercel

1. Envie este repositório para o GitHub (já está).
2. Em <https://vercel.com/new>, importe o repositório. A Vercel detecta Next.js sozinha; não é preciso mudar nada nas configurações de build.
3. Em **Settings → Environment Variables**, crie `NEXT_PUBLIC_SITE_URL` com o endereço final do site.
4. Em **Settings → Domains**, adicione o domínio do escritório e siga as instruções de DNS.
5. Depois de publicado, cadastre o site no Google Search Console e envie `https://SEU-DOMINIO/sitemap.xml`.

Cada novo commit na branch principal gera um novo deploy automaticamente.

## Regras da OAB aplicadas

Conforme o Código de Ética e Disciplina e o Provimento 205/2021: tom informativo; sem promessa de
resultado, preços, promoções, urgência ou depoimentos; nome e OAB sempre visíveis; aviso de caráter
informativo no rodapé; Política de Privacidade (LGPD).
