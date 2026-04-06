const fs = require('fs');
const path = require('path');

const servicesFile = path.join(__dirname, 'src', 'data', 'services.js');

let servicesContent = fs.readFileSync(servicesFile, 'utf8');

const newServices = `
  'aeo': {
    title: 'Answer Engine Optimisation (AEO)',
    metaTitle: 'AEO Services for Construction | Optimise for AI Audio & Voice',
    metaDescription: 'Future-proof your construction brand with Answer Engine Optimisation. We secure your position in AI-driven answers like ChatGPT, Perplexity, and Google AI Overviews.',
    h1: 'Answer Engine Optimisation for Construction',
    intro: 'Search is evolving. Buyers are no longer just typing keywords; they are asking complex questions to AI engines.',
    intro2: 'At Digilari Construction, we optimise your technical content so that when a project manager asks an AI tool for the "best commercial structural steel supplier," your brand is the definitive answer.',
    sections: [
      {
        tocTitle: 'What is AEO?',
        title: 'Beyond Traditional Search',
        content: 'AEO focuses on structuring your content to directly and concisely answer user queries, making it the perfect source for AI overviews and voice search.'
      }
    ],
    cta: 'Optimise for AI Search Today'
  },
  'email-marketing': {
    title: 'B2B Email Marketing for Construction',
    metaTitle: 'Email Marketing for Commercial Construction Leads',
    metaDescription: 'Nurture your construction pipeline with targeted, high-value email marketing campaigns designed for B2B sales cycles.',
    h1: 'Email Marketing That Closes Construction Deals',
    intro: 'A list of prospects is useless if you do not actively engage them.',
    intro2: 'We build automated, value-driven email sequences that keep your construction brand top-of-mind throughout the long B2B procurement cycle.',
    sections: [
      {
        tocTitle: 'Nurture Sequences',
        title: 'Automated Lead Nurturing',
        content: 'From the moment an estimator downloads a technical spec sheet, our GoHighLevel automations ensure they receive relevant follow-up content until they are ready to request a quote.'
      }
    ],
    cta: 'Automate Your Pipeline'
  },
  'geo': {
    title: 'Generative Engine Optimisation (GEO)',
    metaTitle: 'GEO Services | Generative Engine Optimisation for Construction',
    metaDescription: 'Adapt to the AI search landscape with Generative Engine Optimisation. Digilari ensures your brand is cited by LLMs and AI Overviews.',
    h1: 'Generative Engine Optimisation (GEO)',
    intro: 'Standard SEO is no longer enough. You need to be the source that AI generative engines trust and cite.',
    intro2: 'We implement GEO strategies that build topical authority, ensuring your brand is prominently featured when buyers use AI to research construction suppliers.',
    sections: [
      {
        tocTitle: 'The GEO Difference',
        title: 'Adapting to LLMs',
        content: 'We focus on entity recognition, comprehensive topic coverage, and structured data to make your site the preferred reference for Large Language Models.'
      }
    ],
    cta: 'Dominate Generative Search'
  },
  'lead-generation': {
    title: 'Construction Lead Generation',
    metaTitle: 'B2B Lead Generation for Commercial Construction',
    metaDescription: 'Fill your pipeline with high-value commercial construction leads. We use targeted inbound strategies to attract project managers and specifiers.',
    h1: 'High-Value Lead Generation for Suppliers',
    intro: 'We don\'t just drive traffic; we drive highly qualified commercial inquiries.',
    intro2: 'Our end-to-end lead generation systems combine SEO, Paid Media, and CRO to consistently deliver technical buyers to your sales team.',
    sections: [
      {
        tocTitle: 'Quality Over Quantity',
        title: 'Targeting Decision Makers',
        content: 'We filter out the noise and residential inquiries, focusing strictly on B2B leads that move the needle for your business.'
      }
    ],
    cta: 'Start Generating Qualified Leads'
  },
  'roi-marketing-services': {
    title: 'ROI Marketing Services',
    metaTitle: 'Accountable ROI Marketing for Construction Businesses',
    metaDescription: 'Marketing is an investment. Digilari Construction delivers accountable ROI marketing services tied directly to your commercial growth.',
    h1: 'Marketing Tied to Your Bottom Line',
    intro: 'Tired of vanity metrics? So are we.',
    intro2: 'We measure success in signed contracts and pipeline value, not just clicks and impressions.',
    sections: [
      {
        tocTitle: 'Full Accountability',
        title: 'The Digital Results Guarantee',
        content: 'We stand by our work. Our management fees are tied to mutually agreed performance KPIs, ensuring our goals are perfectly aligned with your growth.'
      }
    ],
    cta: 'Partner for Guaranteed Results'
  },
  'smm': {
    title: 'Social Media Marketing (SMM)',
    metaTitle: 'B2B Social Media Marketing for Construction',
    metaDescription: 'Expert LinkedIn B2B social media marketing for commercial construction suppliers. Build authority and engage with industry decision-makers.',
    h1: 'B2B Social Media That Builds Authority',
    intro: 'Social media in construction isn\'t about going viral; it\'s about industry presence.',
    intro2: 'We utilize platforms like LinkedIn to position your key personnel as thought leaders and put your brand directly in front of project decision-makers.',
    sections: [
      {
        tocTitle: 'Logical Targeting',
        title: 'LinkedIn Lead Generation',
        content: 'We craft targeted outreach and content strategies on LinkedIn to bypass gatekeepers and connect directly with commercial estimators and architects.'
      }
    ],
    cta: 'Build Your Industry Presence'
  },
  'seo-migration': {
    title: 'Website SEO Migration Support',
    metaTitle: 'Seamless Website SEO Migrations for Construction Brands',
    metaDescription: 'Protect your organic traffic during a website rebuild. Digilari offers expert SEO migration support for construction suppliers.',
    h1: 'Protect Your Rankings During a Redesign',
    intro: 'Launching a new website is risky. Without proper planning, you can lose years of organic SEO equity overnight.',
    intro2: 'We manage the entire SEO migration process, from 301 redirect mapping to post-launch technical audits, ensuring zero drop in your lead flow.',
    sections: [
      {
        tocTitle: 'Risk Mitigation',
        title: 'Flawless Migration Process',
        content: 'We meticulously map your old URLs, preserve your valuable backlinks, and ensure search engines seamlessly transition to your new site architecture.'
      }
    ],
    cta: 'Secure Your SEO Migration'
  },
  'zero-click-search': {
    title: 'Zero Click Search Marketing',
    metaTitle: 'Zero Click Search Marketing for Construction',
    metaDescription: 'Win the search results before the click. Digilari helps construction brands dominate featured snippets and Zero Click searches.',
    h1: 'Winning in a Zero-Click World',
    intro: 'Users don\'t always need to click your website to see your brand. Often, the answer is right there on the search results page.',
    intro2: 'We optimise your digital profile—from Google Business Profiles to Featured Snippets—so you capture attention and convey authority without relying on a site visit.',
    sections: [
      {
        tocTitle: 'Featured Snippets',
        title: 'Dominating Position Zero',
        content: 'By formatting your technical content correctly, we aim to secure the highly visible "Position Zero" snippets, making you the undisputed authority for construction queries.'
      }
    ],
    cta: 'Optimise for Zero Click'
  }`;

// Inject new services before the last closing brace
const updatedServicesContent = servicesContent.replace(/};\s*$/, `,\n${newServices}\n};`);

fs.writeFileSync(servicesFile, updatedServicesContent);

const pagesContent = `export const pagesData = {
  'faqs': {
    title: 'Frequently Asked Questions',
    metaTitle: 'FAQs | Digilari Construction',
    metaDescription: 'Answers to common questions about our construction marketing services, the Digital Partner Program, and the Digital Results Guarantee.',
    h1: 'Frequently Asked Questions',
    content: \`
## How long does it take to see results from SEO?
SEO is a long-term investment, especially in competitive commercial construction sectors. Generally, you can expect to see meaningful improvements in rankings and traffic within 4-6 months, though initial technical fixes can yield quicker wins.

## What is the Digital Results Guarantee?
The Digital Results Guarantee ties our success to yours. If we agree on specific KPI targets and fail to meet them within the designated timeframe, we pause our management fees until the targets are hit.

## Do you work with residential builders?
While our strategies can work for any business, we exclusively partner with commercial construction suppliers, subcontractors, and specialists who handle high-value, long-cycle B2B sales.
    \`
  },
  'why-digilari': {
    title: 'Why Digilari Construction',
    metaTitle: 'Why Choose Digilari Construction | Specialist B2B Agency',
    metaDescription: 'We are not a generic agency. We are a specialist B2B digital growth partner exclusively for the commercial construction sector.',
    h1: 'Why Digilari Construction?',
    content: \`
## Specialised Expertise
We don't do e-commerce. We don't do local cafes. We only do commercial construction. We understand your sales cycles, your profit margins, and how to speak to architects and project managers.

## Total Accountability
With our proprietary Digital Results Guarantee, we put our own revenue on the line to prove we can grow yours.

## Senior Strategy, Always
You will never be handed off to a junior account manager. Every strategy is developed and overseen by seasoned performance marketing experts.
    \`
  },
  'digital-marketing-partner-program': {
    title: 'Digital Marketing Partner Program',
    metaTitle: 'The Digital Partner Program | Digilari Construction',
    metaDescription: 'An embedded marketing partnership for construction businesses ready to scale. View the Digilari Digital Partner Program details.',
    h1: 'The Digital Partner Program',
    content: \`
We believe the traditional agency model is broken. That's why we created the Digital Partner Program.

## embedded True Partnership
Instead of billing you by the hour for random tasks, we integrate deeply with your business. We become your outsourced Chief Marketing Officer and execution team, fully aligned with your revenue goals.

## Value-Based Pricing
Our fees reflect the value we deliver, not just the time we spend. As your business scales and our systems compound, our management costs adapt to ensure mutual profitability.
    \`
  },
  'digital-results-guarantee': {
    title: 'Digital Results Guarantee',
    metaTitle: 'The Digital Results Guarantee | Digilari Construction',
    metaDescription: 'We put our money where our mouth is. Learn about Digilari Construction\\'s Digital Results Guarantee for qualified B2B partners.',
    h1: 'The Digital Results Guarantee',
    content: \`
## We Put Our Revenue on the Line
Marketing shouldn't be a gamble. For qualified partners, we offer the Digital Results Guarantee.

1. **Agree on Targets:** We establish clear, mutually agreed-upon KPIs (e.g., a specific number of qualified leads or organic traffic milestones).
2. **Execute the Strategy:** We implement our comprehensive GEO, Paid Media, and CRO campaigns.
3. **Accountability:** If we don't hit the agreed targets within the specified timeframe, we pause our management fees and work for free until we do.

It's that simple. We believe in our data-driven approach, and we're willing to back it up financially.
    \`
  },
  'marketing-terms': {
    title: 'Marketing Glossary & Terms',
    metaTitle: 'Construction Marketing Glossary | Digilari Construction',
    metaDescription: 'A glossary of digital marketing terms explained for the commercial construction industry.',
    h1: 'Digital Marketing Terms for Construction',
    content: \`
## AEO (Answer Engine Optimisation)
Optimising content to provide direct answers to AI models and voice search queries.

## CRO (Conversion Rate Optimisation)
The systematic process of increasing the percentage of website visitors who take a desired action (like requesting a quote).

## GEO (Generative Engine Optimisation)
Strategies designed to ensure a brand is referenced and cited by generative AI models like ChatGPT and Google AI Overviews.

## ICP (Ideal Customer Profile)
A detailed description of the perfect company you want to sell to, including firmographics like company size, sector, and common pain points.
    \`
  },
  'our-process': {
    title: 'Our Process',
    metaTitle: 'Our Process | Digilari Digital Partner Program',
    metaDescription: 'Learn how Digilari Construction builds your digital marketing engine from the ground up and transitions into a long-term, embedded partnership.',
    h1: 'Our Process — The Digilari Digital Partner Program',
    content: \`
## Phase 1 — Foundations & Ramp (Months 1-6)
"We do the heavy lifting first."

The first 6 months is an intensive setup and ramp period where Digilari builds your complete digital marketing engine from the ground up. This phase is priced at a full-service management retainer reflecting the volume of setup work involved.

### Our Process Steps (Phase 1):
1. **Full Digital Audit & Competitor Analysis**: Comprehensive review of your current standing and construction sector competitor analysis.
2. **ICP Definition & Buyer Journey Mapping**: Defining Ideal Customer Profiles and mapping buyer journeys specifically for B2B construction sales cycles.
3. **Website Conversion Architecture**: Review and optimisation of your website to ensure it converts visitors into leads.
4. **Content Marketing Foundation**: Establishment of pillar content, sector-specific blogs, technical articles, and detailed case studies.
5. **SEO & GEO Strategy Build-out**: Targeting project managers, procurement leads, and specifiers through organic and AI-generated search results.
6. **Paid Media Launch**: Setup and launch of hyper-targeted Google Ads and/or LinkedIn Ads.
7. **GHL Marketing Automation**: CRM pipeline setup, lead capture automation, and nurture sequence build using GoHighLevel.
8. **Reporting Dashboard**: Configuration of a reporting dashboard for full marketing ROI visibility from day one.

## Phase 2 — The Partner Phase (Month 7+)
"Once the engine is running, we shift to true partnership."

From Month 7, once the digital foundation is established and delivering results, Digilari transitions to a reduced monthly management fee structure. We act as a genuine embedded marketing partner — not a vendor — with a shared focus on continuous improvement, lead quality, and commercial outcomes.

### Phase 2 Characteristics:
*   **Compounding Results**: The hard work in Phase 1 means Phase 2 compounds — results keep improving without starting from scratch.
*   **Performance-Based Confidence**: Reduced fees reflect our confidence in the system we've built together.
*   **Senior Strategy**: Senior strategy on every account — no juniors managing your budget.
*   **Mutual Growth**: "We grow when you grow — that's what a real marketing partner looks like."
    \`
  }
};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'pages.js'), pagesContent);

console.log('Successfully updated services.js and created pages.js');
