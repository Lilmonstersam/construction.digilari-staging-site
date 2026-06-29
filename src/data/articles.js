// Article content for the Knowledge Hub. Body is an ordered list of blocks the
// ArticlePage renderer understands: heading (h2/h3), paragraph, list, quote, table,
// callout, and stat-row. Headings with `toc: true` populate the sticky table of contents.

export const articlesData = {
  'digital-agency-costs': {
    title: 'How Much Should You Pay for a Digital Marketing Agency in 2026?',
    metaTitle: 'How Much Does Digital Marketing Cost? [2026 Prices Guide] | Digilari',
    metaDescription: 'How much should a digital marketing agency charge in Australia in 2026? Find out the average rates, retainers, and budget allocation for effective marketing strategies.',
    category: 'Agency',
    readTime: '9 min read',
    publishedLabel: 'Updated February 2026',
    heroImage: 'https://digilari.com.au/wp-content/uploads/2020/02/Web-elements-1024x683.png',
    author: {
      name: 'Sean Brown',
      role: 'Founder & Managing Director, Digilari',
      img: 'CEO - Sean Brown.jpeg',
      bio: 'Sean Brown is the visionary behind Digilari, a digital marketing agency that challenges conventional strategies to drive real business growth. With a career spanning sales acceleration, market expansion, and agile business solutions, Sean leads a team committed to pushing the boundaries of digital marketing.',
      slug: 'sean-brown'
    },
    intro: 'In 2026, digital marketing is no longer an “expense”, it is a critical infrastructure investment. If you aren’t measuring it through a Digital Results Guarantee (DRG) framework, you’re likely paying a “Mistake Tax” on ineffective strategy. Here is the 2026 breakdown of what it actually costs to drive industrial growth in Australia.',
    body: [
      { type: 'heading', level: 2, id: 'market-rates', toc: true, text: 'What should a digital marketing agency charge in 2026?' },
      { type: 'paragraph', text: 'There are a couple of schools of thought here. Firstly, are you looking for an hourly rate or a value-based arrangement? Hiring an agency gives you access to skilled experts who know how to get the most out of your budget, across content creation, SEO, social media, and paid advertising management. It also frees up your time. The downside is agency fees, which vary depending on the services offered.' },
      { type: 'quote', text: 'B2B companies usually spend between 2% and 5% of their revenue on marketing, while for B2C companies the proportion is often higher, between 5% and 10%.', cite: 'What is the average marketing budget for a small business, BDC' },

      { type: 'heading', level: 2, id: 'hourly-rates', toc: true, text: 'The expert benchmark: hourly and daily rates' },
      { type: 'paragraph', text: 'Human capital is your most significant variable. In 2026, the gap between “generalist execution” and “strategic leadership” has widened. For industrial firms, hiring cheap execution usually leads to expensive remediation later.' },
      {
        type: 'table',
        head: ['Professional Tier', 'Hourly Rate (AUD)', 'Daily Rate (AUD)', 'Strategic Value'],
        rows: [
          ['Execution Specialist', '$50 – $100', '$350 – $800', 'Tactical tasks, reporting, basic SEO'],
          ['Senior Strategist', '$175 – $300', '$1,300 – $2,200', 'Growth strategy, CRM architecture, AEO'],
          ['Technical Industrial Agency', '$250 – $500', '$1,900 – $3,800', 'High-intent B2B procurement mastery']
        ]
      },

      { type: 'heading', level: 2, id: 'value-based', toc: true, text: 'The rule of three: monthly retainer pillars' },
      { type: 'paragraph', text: 'Most Australian agencies have moved to value-based pricing focused on output rather than hours.' },
      {
        type: 'list',
        items: [
          'Basic Presence ($2,000 – $5,000/mo): Foundational SEO, 1–2 channels, and basic lead tracking.',
          'Growth-Focused SME ($5,000 – $15,000/mo): Multi-channel (SEO + PPC + AEO), CRM automation, and lead scoring.',
          'Enterprise Authority ($15,000 – $80,000+/mo): Full-funnel strategy, global SEO, and complex attribution modelling.'
        ]
      },
      {
        type: 'stat-row',
        stats: [
          { value: '8% – 15%', label: 'B2B Industrial', note: 'Necessary to navigate complex, long-duration sales cycles.' },
          { value: '10% – 20%', label: 'B2C Companies', note: 'Increased to maintain visibility in a saturated generative search landscape.' }
        ]
      },

      { type: 'heading', level: 2, id: 'agency-vs-inhouse', toc: true, text: 'The brutal truth: agency vs in-house' },
      { type: 'paragraph', text: 'The “break-even” point for moving in-house in 2026 is a monthly agency spend of $8,000 to $10,000. However, the hidden on-costs of employment in Australia often negate the perceived savings.' },
      {
        type: 'list',
        items: [
          'Base salary: Digital Marketing Specialists now command $90,000 – $110,000, while Managers reach $110,000 – $150,000.',
          'Superannuation: 12% mandatory contribution as of July 2025.',
          'Payroll tax: ~5.45% in NSW (for wages over $1.2M).',
          'Recruitment & setup: $15,000 – $25,000 in fees plus $3,000 – $6,000 for equipment and software.'
        ]
      },
      { type: 'callout', text: 'The verdict: a small team of three ($65k base each) actually costs your business $283,550 – $318,950 annually once overheads are factored in.' },

      { type: 'heading', level: 2, id: 'channel-benchmarks', toc: true, text: 'Channel-specific performance benchmarks' },
      { type: 'paragraph', text: 'In the “Backbone Industries,” volume is vanity. We focus on commercial and transactional intent. Traditional SEO is now augmented by Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO) to ensure your technical specs are cited by AI models like ChatGPT and Perplexity.' },
      {
        type: 'list',
        items: [
          'Authority SEO: $5,000+ per month for technical schema and digital PR.',
          'AEO/GEO programs: dedicated AI visibility services start at $3,000 – $15,000+ per month. A one-time AI Readiness Audit typically costs $2,000 – $10,000.',
          'Logistics & transport: ~$585 CPL. Mining & oil/gas: ~$635 – $770 CPL. Manufacturing: ~$550 CPL.',
          'PPC management: $1,000 – $5,000/mo or 10–20% of ad spend.'
        ]
      },

      { type: 'heading', level: 2, id: 'tech-tax', toc: true, text: 'The technology tax: subscriptions & CRM' },
      { type: 'paragraph', text: 'A high-performance stack requires the best tools. These are fixed monthly costs for any serious operator.' },
      {
        type: 'list',
        items: [
          'Ahrefs: Lite ($129/mo), Standard ($249/mo), Advanced ($449/mo), Enterprise ($1,499/mo).',
          'Semrush: Pro ($139.95/mo), Guru ($249.95/mo), Business ($499.95/mo).',
          'HubSpot: Professional starts at $800/mo; Enterprise at $3,600/mo.',
          'Salesforce: Implementation for a growing SMB ranges from $25,000 to $75,000, with monthly licences between $165 and $500 per user.'
        ]
      },

      { type: 'heading', level: 2, id: 'budget-framework', toc: true, text: 'Summary: where should your dollars go?' },
      { type: 'paragraph', text: 'For companies with long, complex sales cycles, we recommend the 40-30-20-10 Budget Framework:' },
      {
        type: 'list',
        items: [
          '40% Digital Advertising: for immediate pipeline lift and high-intent capture.',
          '30% Content & SEO: for building long-term authority and “They Ask, You Answer” trust.',
          '20% Events & Sales Enablement: to support face-to-face procurement.',
          '10% Tech & Tools: to maintain your CRM “Source of Truth.”'
        ]
      },
      { type: 'paragraph', text: 'Stop wasting money on agencies that can’t speak the language of an engineer or a procurement officer. The cheaper the hourly rate, the lower the quality of people any agency can attract, and the more likely you end up paying for expensive remediation down the line.' }
    ],
    related: [
      {
        title: 'In-House Marketing vs. Agency Marketing: Making the Right Choice',
        excerpt: 'Are you a business owner contemplating whether to handle your marketing in-house or outsource? Weigh the trade-offs.',
        href: 'https://digilari.com.au/articles/in-house-marketing-vs-agency-marketing/'
      },
      {
        title: 'Digital Partner Program: Hourly-Based vs Value-Based Fee',
        excerpt: 'The Digital Partner Program (DPP) was designed to give clients peace of mind around how agency fees are structured.',
        href: 'https://digilari.com.au/articles/digital-marketing-partner-program/'
      },
      {
        title: 'Navigating the New Wave: Embracing GEO',
        excerpt: 'How Generative Engine Optimisation is reshaping the way industrial brands earn visibility in AI-driven search.',
        href: 'https://digilari.com.au/articles/navigating-the-new-wave-embracing-generative-engine-optimisation-geo/'
      }
    ]
  }
};
