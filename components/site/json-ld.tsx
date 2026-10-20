import { siteConfig } from "@/lib/site-config";

/** Dados estruturados (schema.org) para o Google entender o escritório. */
export function JsonLd() {
  const { contact, address } = siteConfig;
  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: "Rua Domiciano Santana, 960 – Santa Cruz",
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.postalCode,
    addressCountry: "BR",
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Attorney"],
        "@id": `${siteConfig.url}/#escritorio`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: `${siteConfig.url}/fachada.jpg`,
        logo: `${siteConfig.url}/logo.png`,
        telephone: contact.landline.tel,
        email: contact.email,
        address: postalAddress,
        areaServed: [
          { "@type": "City", name: "Avaré" },
          { "@type": "AdministrativeArea", name: "Região de Avaré – SP" },
        ],
        knowsAbout: siteConfig.practiceAreas.map((a) => a.fullName),
        contactPoint: [
          { "@type": "ContactPoint", telephone: contact.landline.tel, contactType: "customer service", availableLanguage: "Portuguese" },
          { "@type": "ContactPoint", telephone: contact.mobile1.tel, contactType: "customer service", availableLanguage: "Portuguese" },
          { "@type": "ContactPoint", telephone: contact.mobile2.tel, contactType: "customer service", availableLanguage: "Portuguese" },
        ],
        founder: { "@id": `${siteConfig.url}/#joao-silvestre-sobrinho` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#joao-silvestre-sobrinho`,
        name: "João Silvestre Sobrinho",
        honorificPrefix: "Dr.",
        jobTitle: "Advogado",
        identifier: { "@type": "PropertyValue", propertyID: "OAB/SP", value: "303.347" },
        worksFor: { "@id": `${siteConfig.url}/#escritorio` },
        address: postalAddress,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
