const fs = require('fs');
const path = require('path');

const pagesFile = path.join(__dirname, 'src', 'data', 'pages.js');

const pagesContent = `export const pagesData = {
  'faqs': {
    title: 'Frequently Asked Questions',
    metaTitle: 'FAQs | Digilari Construction',
    metaDescription: 'Answers to common questions about our construction marketing services, the Digital Partner Program, and the Digital Results Guarantee.',
    h1: 'Frequently Asked Questions',
    intro: 'Got questions? We have answers. If you can\\'t find what you\\'re looking for, please don\\'t hesitate to reach out to our team.',
    sections: [
      {
        tocTitle: 'SEO Timeline',
        title: 'How long does it take to see results from SEO?',
        content: 'SEO is a long-term investment, especially in competitive commercial construction sectors. Generally, you can expect to see meaningful improvements in rankings and traffic within 4-6 months, though initial technical fixes can yield quicker wins.'
      },
      {
        tocTitle: 'Results Guarantee',
        title: 'What is the Digital Results Guarantee?',
        content: 'The Digital Results Guarantee ties our success to yours. If we agree on specific KPI targets and fail to meet them within the designated timeframe, we pause our management fees until the targets are hit.'
      },
      {
        tocTitle: 'Residential vs Commercial',
        title: 'Do you work with residential builders?',
        content: 'While our strategies can work for any business, we exclusively partner with commercial construction suppliers, subcontractors, and specialists who handle high-value, long-cycle B2B sales.'
      }
    ]
  },
  'why-digilari': {
    title: 'Why Digilari Construction',
    metaTitle: 'Why Choose Digilari Construction | Specialist B2B Agency',
    metaDescription: 'We are not a generic agency. We are a specialist B2B digital growth partner exclusively for the commercial construction sector.',
    h1: 'Why Digilari Construction?',
    intro: 'We are a specialist B2B digital growth partner exclusively for the commercial construction sector.',
    sections: [
      {
        tocTitle: 'Specialised Expertise',
        title: 'Specialised Expertise',
        content: 'We don\\'t do e-commerce. We don\\'t do local cafes. We only do commercial construction. We understand your sales cycles, your profit margins, and how to speak to architects and project managers.'
      },
      {
        tocTitle: 'Total Accountability',
        title: 'Total Accountability',
        content: 'With our proprietary Digital Results Guarantee, we put our own revenue on the line to prove we can grow yours.'
      },
      {
        tocTitle: 'Senior Strategy',
        title: 'Senior Strategy, Always',
        content: 'You will never be handed off to a junior account manager. Every strategy is developed and overseen by seasoned performance marketing experts.'
      }
    ]
  },
  'digital-marketing-partner-program': {
    title: 'Digital Marketing Partner Program',
    metaTitle: 'The Digital Partner Program | Digilari Construction',
    metaDescription: 'An embedded marketing partnership for construction businesses ready to scale. View the Digilari Digital Partner Program details.',
    h1: 'The Digital Partner Program',
    intro: 'We believe the traditional agency model is broken. That\\'s why we created the Digital Partner Program.',
    sections: [
      {
        tocTitle: 'True Partnership',
        title: 'Embedded True Partnership',
        content: 'Instead of billing you by the hour for random tasks, we integrate deeply with your business. We become your outsourced Chief Marketing Officer and execution team, fully aligned with your revenue goals.'
      },
      {
        tocTitle: 'Value-Based Pricing',
        title: 'Value-Based Pricing',
        content: 'Our fees reflect the value we deliver, not just the time we spend. As your business scales and our systems compound, our management costs adapt to ensure mutual profitability.'
      }
    ]
  },
  'digital-results-guarantee': {
    title: 'Digital Results Guarantee',
    metaTitle: 'The Digital Results Guarantee | Digilari Construction',
    metaDescription: 'We put our money where our mouth is. Learn about Digilari Construction\\'s Digital Results Guarantee for qualified B2B partners.',
    h1: 'The Digital Results Guarantee',
    intro: 'Marketing shouldn\\'t be a gamble. For qualified partners, we offer the Digital Results Guarantee.',
    sections: [
      {
        tocTitle: 'Establish Targets',
        title: '1. Agree on Targets',
        content: 'We establish clear, mutually agreed-upon KPIs (e.g., a specific number of qualified leads or organic traffic milestones).'
      },
      {
        tocTitle: 'Execute Strategy',
        title: '2. Execute the Strategy',
        content: 'We implement our comprehensive GEO, Paid Media, and CRO campaigns.'
      },
      {
        tocTitle: 'Accountability',
        title: '3. Accountability',
        content: 'If we don\\'t hit the agreed targets within the specified timeframe, we pause our management fees and work for free until we do. It\\'s that simple. We believe in our data-driven approach, and we\\'re willing to back it up financially.'
      }
    ]
  },
  'marketing-terms': {
    title: 'Marketing Glossary & Terms',
    metaTitle: 'Construction Marketing Glossary | Digilari Construction',
    metaDescription: 'A glossary of digital marketing terms explained for the commercial construction industry.',
    h1: 'Digital Marketing Terms for Construction',
    intro: 'Understanding digital marketing terminology in the commercial construction space.',
    sections: [
      {
        tocTitle: 'AEO',
        title: 'AEO (Answer Engine Optimisation)',
        content: 'Optimising content to provide direct answers to AI models and voice search queries.'
      },
      {
        tocTitle: 'CRO',
        title: 'CRO (Conversion Rate Optimisation)',
        content: 'The systematic process of increasing the percentage of website visitors who take a desired action (like requesting a quote).'
      },
      {
        tocTitle: 'GEO',
        title: 'GEO (Generative Engine Optimisation)',
        content: 'Strategies designed to ensure a brand is referenced and cited by generative AI models like ChatGPT and Google AI Overviews.'
      },
      {
        tocTitle: 'ICP',
        title: 'ICP (Ideal Customer Profile)',
        content: 'A detailed description of the perfect company you want to sell to, including firmographics like company size, sector, and common pain points.'
      }
    ]
  },
  'our-process': {
    title: 'Our Process',
    metaTitle: 'Our Process | Digilari Digital Partner Program',
    metaDescription: 'Learn how Digilari Construction builds your digital marketing engine from the ground up and transitions into a long-term, embedded partnership.',
    h1: 'Our Process — The Digilari Digital Partner Program',
    intro: 'We do the heavy lifting first. Building your digital acquisition engine is phase one. Running it at scale is phase two.',
    sections: [
      {
        tocTitle: 'Phase 1: Foundations',
        title: 'Phase 1 — Foundations & Ramp (Months 1-6)',
        content: 'The first 6 months is an intensive setup and ramp period where Digilari builds your complete digital marketing engine from the ground up. This phase is priced at a full-service management retainer reflecting the volume of setup work involved.',
        subsections: [
          {
            title: 'Audit & Competitors',
            content: 'Full Digital Audit & Competitor Analysis - Comprehensive review of your current standing and construction sector competitor analysis.'
          },
          {
            title: 'ICP Mapping',
            content: 'ICP Definition & Buyer Journey Mapping - Defining Ideal Customer Profiles and mapping buyer journeys specifically for B2B construction sales cycles.'
          },
          {
            title: 'Conversion Architecture',
            content: 'Website Conversion Architecture - Review and optimisation of your website to ensure it converts visitors into leads.'
          },
          {
            title: 'Content Foundations',
            content: 'Content Marketing Foundation - Establishment of pillar content, sector-specific blogs, technical articles, and detailed case studies.'
          },
          {
            title: 'SEO & GEO',
            content: 'SEO & GEO Strategy Build-out - Targeting project managers, procurement leads, and specifiers through organic and AI-generated search results.'
          },
          {
            title: 'Paid Media Launch',
            content: 'Paid Media Launch - Setup and launch of hyper-targeted Google Ads and/or LinkedIn Ads.'
          },
          {
            title: 'GHL Automation',
            content: 'GHL Marketing Automation - CRM pipeline setup, lead capture automation, and nurture sequence build using GoHighLevel.'
          },
          {
            title: 'Reporting',
            content: 'Reporting Dashboard - Configuration of a reporting dashboard for full marketing ROI visibility from day one.'
          }
        ]
      },
      {
        tocTitle: 'Phase 2: Partner',
        title: 'Phase 2 — The Partner Phase (Month 7+)',
        content: 'Once the engine is running, we shift to true partnership. From Month 7, Digilari transitions to a reduced monthly management fee structure. We act as a genuine embedded marketing partner — not a vendor — with a shared focus on continuous improvement, lead quality, and commercial outcomes.',
        subsections: [
          {
            title: 'Compounding Results',
            content: 'The hard work in Phase 1 means Phase 2 compounds — results keep improving without starting from scratch.'
          },
          {
            title: 'Performance-Based',
            content: 'Reduced fees reflect our confidence in the system we\\'ve built together.'
          },
          {
            title: 'Senior Strategy',
            content: 'Senior strategy on every account — no juniors managing your budget.'
          },
          {
            title: 'Mutual Growth',
            content: 'We grow when you grow — that\\'s what a real marketing partner looks like.'
          }
        ]
      }
    ]
  }
};
`;

fs.writeFileSync(pagesFile, pagesContent);

console.log('Successfully created pages.js with structured data.');
