const SITE_URL = "https://offshorehiringlaws.com";
const DISCLAIMER =
  "Offshore Hiring Laws is an independent publication. The content on this site is provided for informational purposes only and does not constitute legal advice. Readers should consult qualified legal counsel for guidance on their specific circumstances.";

const JOEL_PERSON = {
  "@type": "Person",
  "@id": `${SITE_URL}/#editor`,
  name: "Joel Deutsch",
  jobTitle: "Editor, Offshore Hiring Laws",
  url: `${SITE_URL}/about`,
  sameAs: [
    "https://www.linkedin.com/in/joel-deutsch-11220915b",
    "https://www.wikidata.org/wiki/Q139807072",
  ],
};

const OHL_PUBLISHER = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Offshore Hiring Laws",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon.png`,
  },
};

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    ...JOEL_PERSON,
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    ...OHL_PUBLISHER,
    editor: JOEL_PERSON,
    sameAs: [
      "https://www.wikidata.org/wiki/Q139807072",
    ],
  };
}

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  jurisdiction: string;
  verifiedAgainst?: string;
  verifiedAsOf?: string;
}

export function generateArticleSchema(opts: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${opts.url}#article`,
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    editor: JOEL_PERSON,
    publisher: OHL_PUBLISHER,
    inLanguage: "en",
    disclaimer: DISCLAIMER,
    about: {
      "@type": "LegalTopic",
      name: opts.jurisdiction,
    },
    ...(opts.verifiedAgainst && opts.verifiedAsOf
      ? {
          creditText: `Verified against ${opts.verifiedAgainst} as of ${opts.verifiedAsOf}`,
        }
      : {}),
  };
}

export function jsonLd(schema: object) {
  return JSON.stringify(schema);
}
