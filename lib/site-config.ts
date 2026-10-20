/**
 * ============================================================================
 *  CONFIGURAÇÃO CENTRAL DO SITE
 * ============================================================================
 *  Todos os dados de contato, advogados e áreas de atuação ficam AQUI.
 *  Para trocar telefone, e-mail, endereço, fotos ou textos dos advogados,
 *  edite apenas este arquivo — o resto do site se atualiza sozinho.
 *
 *  Itens pendentes estão marcados com "TODO: preencher".
 * ============================================================================
 */

/**
 * Endereço público do site (usado em SEO, sitemap e Open Graph).
 * Na Vercel, defina a variável de ambiente NEXT_PUBLIC_SITE_URL com o
 * domínio final (ex.: https://www.seudominio.com.br).
 * TODO: preencher quando o domínio estiver definido.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export type PracticeAreaId =
  | "civel"
  | "familia"
  | "previdenciario"
  | "trabalhista"
  | "tributario";

export type PracticeArea = {
  id: PracticeAreaId;
  /** Nome curto, usado no select do formulário e nas etiquetas */
  name: string;
  /** Nome completo do ramo do Direito, usado na mensagem do WhatsApp */
  fullName: string;
  /** Frase de busca natural (SEO), exibida no card */
  seoPhrase: string;
  /** Texto do card: 2 a 3 linhas, linguagem simples */
  description: string;
};

export type Lawyer = {
  id: string;
  name: string;
  /** Ex.: "OAB/SP 303.347". Deixe null enquanto não tiver o número. */
  oab: string | null;
  /**
   * Caminho da foto dentro de /public (ex.: "/joao.jpg").
   * Enquanto for null, o site mostra um quadro neutro com as iniciais.
   */
  photo: string | null;
  initials: string;
  areas: PracticeAreaId[];
  bio: string[];
};

export const siteConfig = {
  url: siteUrl,
  name: "Advocacia Dr. João Silvestre Sobrinho",
  shortName: "Advocacia Dr. João Silvestre",
  city: "Avaré",
  state: "SP",

  // ---------------------------------------------------------------------------
  // CONTATO
  // ---------------------------------------------------------------------------
  contact: {
    /** Telefone fixo */
    landline: { display: "(14) 3733-4700", tel: "+551437334700" },
    /** Celular 1 — também é o WhatsApp do site */
    mobile1: { display: "(14) 99638-4909", tel: "+5514996384909" },
    /** Celular 2 */
    mobile2: { display: "(14) 99108-4333", tel: "+5514991084333" },
    email: "jss7668@hotmail.com",
    /** Número usado em todos os links do WhatsApp (só dígitos, com 55 + DDD) */
    whatsapp: "5514996384909",
  },

  address: {
    street: "Rua Domiciano Santana, nº 960",
    neighborhood: "Bairro Santa Cruz",
    city: "Avaré",
    state: "SP",
    postalCode: "18700-080",
    /** Linha única, usada no mapa e no rodapé */
    full: "Rua Domiciano Santana, nº 960, Bairro Santa Cruz, Avaré – SP, CEP 18700-080",
    /** Texto usado para buscar o endereço no Google Maps */
    mapsQuery: "Rua Domiciano Santana, 960, Santa Cruz, Avaré - SP, 18700-080",
  },

  // ---------------------------------------------------------------------------
  // MENSAGENS PADRÃO DO WHATSAPP
  // ---------------------------------------------------------------------------
  whatsappMessages: {
    default:
      "Olá! Vim pelo site da Advocacia Dr. João Silvestre Sobrinho e gostaria de agendar um atendimento.",
    /** Usada no CTA abaixo das áreas, para quem não encontrou o próprio caso */
    question:
      "Olá! Vim pelo site da Advocacia Dr. João Silvestre Sobrinho e gostaria de tirar uma dúvida sobre a minha situação.",
    /** {area} é substituído pelo nome completo da área */
    area: "Olá! Vim pelo site da Advocacia Dr. João Silvestre Sobrinho e gostaria de falar sobre um assunto de {area}.",
  },

  // ---------------------------------------------------------------------------
  // ÁREAS DE ATUAÇÃO
  // TODO: revisar com o Dr. João se os exemplos de cada área correspondem
  // aos atendimentos que o escritório realmente faz.
  // ---------------------------------------------------------------------------
  practiceAreas: [
    {
      id: "civel",
      name: "Cível",
      fullName: "Direito Cível",
      seoPhrase: "Advogado cível em Avaré",
      description:
        "Contratos, cobranças, indenizações, imóveis, problemas com compras e serviços. Para quem precisa resolver um conflito ou quer orientação antes de assinar um documento.",
    },
    {
      id: "familia",
      name: "Família",
      fullName: "Direito de Família",
      seoPhrase: "Advogado de família em Avaré",
      description:
        "Divórcio, pensão alimentícia, guarda e convivência com os filhos, inventário e partilha de bens. Assuntos delicados, tratados com discrição e respeito.",
    },
    {
      id: "previdenciario",
      name: "Previdenciário",
      fullName: "Direito Previdenciário",
      seoPhrase: "Advogado previdenciário em Avaré",
      description:
        "Aposentadorias, auxílio por incapacidade, pensão por morte, BPC/LOAS e revisão de benefícios do INSS. Ajuda para entender os requisitos e organizar a documentação.",
    },
    {
      id: "trabalhista",
      name: "Trabalhista",
      fullName: "Direito Trabalhista",
      seoPhrase: "Advogado trabalhista em Avaré",
      description:
        "Verbas rescisórias, horas extras, registro em carteira, acidentes e doenças do trabalho. Orientação sobre direitos e deveres na relação de emprego.",
    },
    {
      id: "tributario",
      name: "Tributário",
      fullName: "Direito Tributário",
      seoPhrase: "Advogado tributário em Avaré",
      description:
        "Dívidas com a Receita, a Prefeitura ou o Estado, execuções fiscais, parcelamentos e questões de IPTU, ITCMD e outros tributos, para pessoas e empresas.",
    },
  ] satisfies PracticeArea[],

  // ---------------------------------------------------------------------------
  // ADVOGADOS
  // ---------------------------------------------------------------------------
  lawyers: [
    {
      id: "joao",
      name: "Dr. João Silvestre Sobrinho",
      oab: "OAB/SP 303.347",
      // TODO: preencher — salve a foto em /public/joao.jpg e troque para "/joao.jpg"
      photo: null,
      initials: "JS",
      // TODO: confirmar se o Dr. João atua pessoalmente em todas as áreas
      areas: ["civel", "familia", "previdenciario", "trabalhista", "tributario"],
      bio: [
        "Advogado responsável pela Advocacia Dr. João Silvestre Sobrinho, em Avaré. Atende pessoas, famílias e empresas de Avaré e região nas áreas cível, de família, previdenciária, trabalhista e tributária.",
        "Seu trabalho parte de uma conversa franca: entender a situação, analisar os documentos e explicar as alternativas possíveis em linguagem clara.",
      ],
    },
    {
      id: "rubens",
      name: "Rubens de Oliveira",
      // TODO: preencher — ex.: "OAB/SP 000.000". Enquanto for null, a linha da OAB não aparece.
      // ATENÇÃO: pelas regras da OAB, publique o site com o número preenchido.
      oab: null,
      // TODO: preencher — salve a foto em /public/rubens.jpg e troque para "/rubens.jpg"
      photo: null,
      initials: "RO",
      // TODO: preencher com as áreas em que o Dr. Rubens atua
      areas: [],
      // TODO: preencher a mini-bio do Dr. Rubens
      bio: [
        "Advogado integrante da equipe da Advocacia Dr. João Silvestre Sobrinho, em Avaré.",
      ],
    },
  ] as Lawyer[],

  // ---------------------------------------------------------------------------
  // FORMAÇÃO DO DR. JOÃO (seção "Sobre")
  // TODO: preencher — ex.: ["Bacharel em Direito pela ...", "Pós-graduado em ..."]
  // Enquanto a lista estiver vazia, o bloco "Formação" não aparece no site.
  // ---------------------------------------------------------------------------
  education: [] as string[],
};

export type SiteConfig = typeof siteConfig;
