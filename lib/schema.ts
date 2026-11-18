import type { Faq } from "./faqs";
import { CONTACT_EMAIL, CORE_TEAM, INSTAGRAM_URL, LEGAL_NAME, SITE_URL, SSM_NUMBER } from "./site";

// One identifier per entity, shared by every page, so search engines and AI tools resolve
// "UniPact" to a single organization instead of one per page.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const personSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
export const personId = (name: string) => `${SITE_URL}/team#${personSlug(name)}`;

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "UniPact",
      legalName: LEGAL_NAME,
      alternateName: "UniPact Malaysia",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      description:
        "UniPact is a Malaysian company that matches businesses with vetted teams of university students for software development and digital marketing projects, with payment held in escrow until each milestone is approved.",
      identifier: { "@type": "PropertyValue", propertyID: "SSM", value: SSM_NUMBER },
      address: { "@type": "PostalAddress", addressLocality: "Kuala Lumpur", addressCountry: "MY" },
      email: CONTACT_EMAIL,
      contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", email: CONTACT_EMAIL }],
      sameAs: [INSTAGRAM_URL],
      member: CORE_TEAM.map(({ name }) => ({ "@id": personId(name) })),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "UniPact",
      url: `${SITE_URL}/`,
      publisher: { "@id": ORG_ID },
    },
  ],
};

export const providerRef = { "@type": "Organization", "@id": ORG_ID, name: "UniPact" };

export const faqSchema = (items: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});

// A page's own node, tied to the shared website and organization, with its breadcrumb trail.
export function pageSchema({
  path,
  name,
  description,
  language,
  crumbs,
  faqs,
}: {
  path: string;
  name: string;
  description: string;
  language: string;
  crumbs: { name: string; path: string }[];
  faqs?: Faq[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${path}#webpage`,
        url: `${SITE_URL}${path}`,
        name,
        description,
        inLanguage: language,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: `${SITE_URL}${crumb.path}`,
        })),
      },
      ...(faqs ? [faqSchema(faqs)] : []),
    ],
  };
}
