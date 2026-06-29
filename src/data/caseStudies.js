// Case study data. The CaseStudyPage renders richer fields (categories, challengeList,
// solution, resultsNarrative, keyAchievements) gracefully when present, and falls back
// to the simpler challenge/conclusion fields for the original entries.

export const caseStudiesData = {
  'topdrill': {
    title: 'Topdrill Case Study',
    metaTitle: 'Case Study: Topdrill | Digilari Construction',
    metaDescription: 'See how Digilari powered Topdrill’s recruitment growth with a segmented LinkedIn and Google Ads strategy, delivering a 2.89% CTR across mining-focused audiences.',
    h1: 'Powering Topdrill’s Recruitment Growth',
    subhead: 'A segmented, multi-channel recruitment campaign for one of Australia’s most respected drilling contractors.',
    industry: 'Mining',
    categories: ['Paid Ads', 'CRO', 'SEO'],
    intro: 'Topdrill is one of Australia’s most respected drilling contractors, known for its strong on-site culture, reliable crews, and long-standing relationships across the mining sector. As the company continued to grow and take on new projects, the need for a steady stream of skilled operators and keen newcomers ready to enter the industry became more important than ever.',
    challenge: 'Recruitment in the mining sector is inherently competitive, and Topdrill’s rapid growth intensified the need to fill roles quickly and consistently. Skilled drillers were in high demand across the industry, while entry-level candidates often lacked clarity on how to enter mining. FIFO requirements further limited the available talent pool. With multiple active sites and short hiring windows, delayed recruitment directly impacted operations.',
    challengeList: [
      'Engaging experienced operators seeking recognition, stability, and improved conditions',
      'Reaching inexperienced candidates looking for training, guidance, and a clear pathway into mining',
      'Cutting through a crowded recruitment market with limited FIFO-ready talent',
      'Delivering a strong volume of qualified applicants quickly without compromising lead quality'
    ],
    solution: [
      {
        title: 'LinkedIn Ads',
        content: 'Our primary recruitment channel, structured around two ad groups: experienced (drillers, supervisors, operators) and inexperienced (entry-level job seekers and career-changers). Each segment was kept tightly aligned with its own messaging, creative, and dedicated landing page.'
      },
      {
        title: 'Google Ads',
        content: 'A reinforcement layer rather than a volume play. We retargeted traffic from the Topdrill Careers page and new recruitment landing pages, plus a lightweight Display and Gmail component, keeping the brand visible to engaged candidates and reducing application drop-off.'
      },
      {
        title: 'Landing Page Optimisation',
        content: 'Dedicated, audience-specific landing pages for experienced and inexperienced candidates, built to convert intent into completed applications across short hiring windows.'
      }
    ],
    resultsNarrative: 'The targeted, multi-channel recruitment approach delivered measurable improvements in candidate engagement and application behaviour across both experienced and inexperienced audiences. By separating messaging, landing pages, and retargeting flows, Topdrill achieved stronger intent signals and more efficient performance across paid media channels.',
    keyAchievements: [
      'LinkedIn generated 2,461 clicks from 85,024 impressions, delivering a 2.89% CTR and confirming strong relevance among mining-focused audiences.',
      'Video ads outperformed static formats across both segments, with the experienced audience achieving the highest engagement and strongest intent signals.',
      'Google Ads reinforced the funnel at a 4.97% CTR and a low $0.65 CPC, supporting application completion rather than volume-led acquisition.',
      'Retargeting maintained visibility among engaged candidates, reducing drop-off through short hiring windows.'
    ],
    results: [
      { metric: '+2.89%', label: 'Click-Through Rate YoY' },
      { metric: '+15.9%', label: 'Audience Penetration YoY' },
      { metric: '+4.97%', label: 'Engagement Rate YoY' }
    ],
    conclusion: 'This performance validated the importance of audience segmentation, experience-specific messaging, and clear channel roles in recruitment campaigns, enabling Topdrill to move faster on hiring needs while maintaining lead quality across multiple sites and regions.'
  },

  'tyredoctor': {
    title: 'Tyre Doctor Case Study',
    metaTitle: 'Case Study: Tyre Doctor | Digilari Construction',
    metaDescription: 'Read how Digilari achieved top 10 keyword rankings for Tyre Doctor, growing organic new users by 84% and lifting conversion rates across the earthmoving and mining sectors.',
    h1: 'Achieving Top 10 Keyword Rankings and Boosting User Engagement',
    subhead: 'A full-funnel SEO, CRO, and paid strategy for a leading earthmoving and mining tyre specialist.',
    industry: 'Mining',
    categories: ['SEO', 'CRO', 'Paid Ads'],
    intro: 'Tyre Doctor is a leading provider of tyre and wheel solutions, specialising in servicing the earthmoving and mining industries across Australia. With a strong focus on quality products and exceptional customer service, Tyre Doctor offers OTR (Off-The-Road) tyres, loader tyres, and crane tyres, backed by expert knowledge and a commitment to safety and environmental sustainability.',
    challenge: 'Tyre Doctor faced high competition for industry-specific keywords, difficulty converting organic traffic into leads, and a range of technical SEO issues affecting site speed and mobile usability.',
    challengeList: [
      'High competition for industry terms like “loader tyres,” “haul road,” and “solid filled tyres,” plus localised terms such as “tyres Leeton” and “Singleton tyre service.”',
      'Converting diverse organic traffic into leads amid high bounce rates and low session durations.',
      'Creating content that resonated with both search engines and a varied target audience.',
      'Improving underperforming pages and resolving technical issues like site speed and mobile optimisation.'
    ],
    solution: [
      {
        title: 'Keyword Optimisation',
        content: 'Optimised content for high-impact keywords with improving rankings, such as “blackwater tyres,” “loader tyres,” and “tyres Leeton.” Employed long-tail and location-specific phrases to target niche markets and reduce competition.'
      },
      {
        title: 'Enhanced Content Strategy',
        content: 'Developed comprehensive service pages addressing common queries like “tyre repair,” “rim certification,” and “tyre life comparison,” with compelling headlines and meta descriptions to improve click-through rates.'
      },
      {
        title: 'User Engagement Initiatives',
        content: 'Implemented request forms, quote submissions, and contact options to capture leads, supported by engaging multimedia content including videos and infographics.'
      },
      {
        title: 'Technical SEO Improvements',
        content: 'Optimised site speed and mobile responsiveness and ran regular SEO audits to identify and fix technical issues promptly.'
      }
    ],
    resultsNarrative: 'The comprehensive optimisation strategy delivered top 10 rankings for priority keywords, strong organic and referral traffic growth, and dramatic improvements in lead-generating conversions.',
    keyAchievements: [
      'Achieved top 10 rankings for key terms including “blackwater tyres,” “loader tyres,” and “tyres Leeton.”',
      'Increased new user acquisition by 84%, with higher session durations and lower bounce rates.',
      'Boosted contact form submissions by 4,350% and request-a-quote submissions by 400%.',
      'Grew direct and referral traffic, indicating improved brand recognition and referral partnerships.'
    ],
    results: [
      { metric: '+84%', label: 'Organic Traffic YoY' },
      { metric: '+141%', label: 'Conversions YoY' },
      { metric: '+78%', label: 'Conversion Rate YoY' }
    ],
    conclusion: 'By combining keyword-led content, conversion-focused UX, and technical SEO, Tyre Doctor significantly improved organic visibility and turned more visitors into qualified leads across the earthmoving and mining sectors.'
  },

  'three-springs-farm': {
    title: 'Three Springs Farm Case Study',
    metaTitle: 'Case Study: Three Springs Farm | Digilari Construction',
    metaDescription: 'See how Digilari grew Three Springs Farm’s paid revenue by 230% YoY through Google Ads optimisation, strategic bidding, and Performance Max campaigns.',
    h1: 'Harvesting Growth with Targeted Paid Ads',
    subhead: 'Driving paid search revenue for a certified organic medicinal herb producer.',
    industry: 'Agriculture',
    categories: ['Paid Ads'],
    intro: 'Nestled in Australia’s Northern Rivers, Three Springs Farm is a certified organic producer focused on medicinal herbs and sustainable farming. Their flagship product, Complete•3 Turmeric Liquid Extract, reflects a “food as medicine” philosophy that brings together traditional knowledge and scientific backing.',
    challenge: 'Three Springs Farm faced substantial obstacles in digital advertising, primarily high conversion costs that restricted ad visibility and effectiveness. The challenge was twofold: enhancing ad delivery to reach a wider yet targeted audience within a tight budget, and addressing gaps in online customer engagement.',
    solution: [
      {
        title: 'Google Ads Optimisation',
        content: 'Conducted rigorous ad copy testing to identify messaging that engaged the target audience effectively.'
      },
      {
        title: 'Strategic Bid Adjustments',
        content: 'Implemented strategic bid adjustments to maximise reach without overspending, optimising visibility among high-intent users.'
      },
      {
        title: 'Performance Max Campaigns',
        content: 'Launched through a newly established Google Merchant Centre account, allowing products to appear in Google Shopping. Machine learning distributed ads across multiple channels for better targeting and efficiency.'
      }
    ],
    resultsNarrative: 'The optimised campaigns produced significant gains across paid search metrics, converting more clicks into sales while improving overall engagement.',
    keyAchievements: [
      'Year-over-year revenue from paid ads surged by 230%.',
      'Paid search sessions increased by 96%, demonstrating heightened visibility and engagement.',
      'Key events triggered by paid search users grew by 112%.'
    ],
    results: [
      { metric: '+96%', label: 'Paid Search Traffic YoY' },
      { metric: '+230%', label: 'Revenue YoY' },
      { metric: '+112%', label: 'Key Events YoY' }
    ],
    conclusion: 'Through disciplined Google Ads optimisation, strategic bidding, and Performance Max, Three Springs Farm dramatically improved the efficiency and return of its paid search investment.'
  },

  'scholz-electrical': {
    title: 'Scholz Electrical Case Study',
    metaTitle: 'Case Study: Scholz Electrical | Digilari Construction',
    metaDescription: 'Read how Digilari reduced Scholz Electrical’s reliance on PPC, lifting conversions 56.7% YoY and securing 20 new top 10 keyword rankings through SEO and sales alignment.',
    h1: 'Electrifying Scholz’s Digital Growth',
    subhead: 'Reducing PPC dependency and stabilising lead flow for an established electrical services provider.',
    industry: 'Trades & Services',
    categories: ['SEO', 'CRO', 'Paid Ads'],
    intro: 'Scholz Electrical, established in 1970 and led by veteran Michael Scholz, excels in delivering superior electrical services with a focus on customer satisfaction and environmental responsibility. Offering a skilled team and solar solutions, they prioritise quality, respect, and sustainability in every project.',
    challenge: 'Heavily reliant on pay-per-click advertising, Scholz Electrical encountered significant challenges in maintaining consistent business operations.',
    challengeList: [
      'Fluctuations in booked tasks, with peaks and troughs and an increase in irrelevant enquiries.',
      'Underwhelming organic performance, with poor or non-existent rankings for target keywords.',
      'Duplicate content and navigational errors across the website.',
      'A need to integrate marketing and sales processes to improve sales funnel transparency.'
    ],
    solution: [
      {
        title: 'Search Engine Optimisation',
        content: 'Enhanced service pages with a “related projects” section, optimised content to cover relevant queries, improved homepage and mobile navigation, added certifications to the header and footer, and applied local SEO to the Google Business Profile.'
      },
      {
        title: 'Paid Ads Optimisation',
        content: 'Restructured PPC campaigns to improve conversion quality and lower cost per acquisition, refining targeting to cost-effective Brisbane suburbs where Scholz could efficiently service calls.'
      },
      {
        title: 'Sales & Marketing Alignment',
        content: 'Integrated HubSpot to streamline alignment between sales and marketing, clarifying optimisations and accelerating the transition from prospect to client.'
      }
    ],
    resultsNarrative: 'The multi-faceted approach drove substantial improvements across traffic, conversions, and SEO rankings, stabilising business fluctuations and reducing dependency on paid search.',
    keyAchievements: [
      'Cross-channel sessions increased by 15.5% YoY.',
      'Conversions rose by 56.7% YoY and the conversion rate improved by 42.5% YoY.',
      'Achieved 20 new top 10 ranking keywords for target service offerings.'
    ],
    results: [
      { metric: '+16%', label: 'Organic Traffic YoY' },
      { metric: '+57%', label: 'Key Event (Conv.) YoY' },
      { metric: '+43%', label: 'Conversion Rate YoY' }
    ],
    conclusion: 'These enhancements stabilised business fluctuations and positioned Scholz Electrical for sustained growth with reduced dependency on pay-per-click strategies.'
  },

  'ozhitch': {
    title: 'OzHitch Case Study',
    metaTitle: 'Case Study: OzHitch | Digilari Construction',
    metaDescription: 'See how Digilari grew OzHitch organic traffic by 50% YoY and lifted sales by 327.5% through technical SEO, GBP optimisation, and targeted content.',
    h1: 'Driving Success Off-Road: Boosting Visibility and Sales for OzHitch',
    subhead: 'Turning irrelevant traffic into qualified, high-converting leads for an off-road towing manufacturer.',
    industry: 'Manufacturing',
    categories: ['SEO', 'CRO'],
    intro: 'OzHitch offers robust off-road trailer and caravan couplings designed for Australian 4x4 enthusiasts. Featuring self-aligning technology and built to exceed Australian safety standards, OzHitch provides durable, versatile, easy-to-use towing solutions, backed by exceptional after-sales service.',
    challenge: 'OzHitch faced significant challenges generating quality leads from organic traffic, driven by keyword irrelevance and technical barriers within the website structure.',
    challengeList: [
      'Ranking for irrelevant keywords that diverted potentially valuable customer traffic.',
      'A plethora of broken links and numerous 404 error pages.',
      'Widespread duplicate content obstructing Google’s ability to index the site efficiently.'
    ],
    solution: [
      {
        title: 'Google Business Profile Optimisation',
        content: 'Optimised the Google Business Profile, particularly the product list, to draw more relevant traffic.'
      },
      {
        title: 'On-Page SEO',
        content: 'Introduced schema markup on product pages and developed content targeting long-tail, buyer-journey queries to capture more specific, qualified leads.'
      },
      {
        title: 'Technical Fixes',
        content: 'Overhauled the website backend: fixed broken links, resolved 404 errors, eliminated duplicate content via canonical tags, and updated the sitemap and redirects to streamline indexing.'
      }
    ],
    resultsNarrative: 'The strategic optimisations yielded substantial improvements in performance, with notable gains for targeted keywords such as “offroad trailer hitch” and “4×4 trailer hitch” that aligned directly with OzHitch’s core offerings.',
    keyAchievements: [
      '26 keywords newly ranked at the top of search results.',
      'A 50% increase in sessions from organic traffic year over year.',
      'Sales surged by 327.5%, underscoring the effectiveness of the targeted strategy.'
    ],
    results: [
      { metric: '+50%', label: 'Organic Traffic YoY' },
      { metric: '+328%', label: 'Conversions YoY' },
      { metric: '+3624%', label: 'Conversion Rate YoY' }
    ],
    conclusion: 'By aligning keyword targeting with core offerings and resolving deep technical issues, OzHitch transformed its organic channel into a powerful driver of both visibility and profitability.'
  },

  'elite-liquid-waste': {
    title: 'Elite Liquid Waste Case Study',
    metaTitle: 'Case Study: Elite Liquid Waste | Digilari Construction',
    metaDescription: 'Read how Digilari grew Elite Liquid Waste organic sessions by 42.2% YoY and lifted conversions by 74.2% through content SEO, structural fixes, and CRO.',
    h1: 'Transforming Challenges into Opportunities',
    subhead: 'Rescuing a new website’s rankings and conversions for a growing liquid waste operator.',
    industry: 'Industrial Services',
    categories: ['SEO', 'CRO'],
    intro: 'Elite Liquid Waste began with a single custom-built vacuum truck and has grown to a fleet of 10 advanced vehicles. This owner-operated company excels in liquid waste services, offering trucks from 5,000 to 28,000 litres for diverse needs, ensuring prompt, reliable service across waste management projects.',
    challenge: 'Elite Liquid Waste faced significant challenges with its new website, which suffered from poor rankings and low conversion rates.',
    challengeList: [
      'Newly added service pages did not rank well for relevant keywords.',
      'The absence of clear calls to action led to disappointing conversion metrics.',
      'Structural problems such as multiple H1 tags confused search engine indexing.'
    ],
    solution: [
      {
        title: 'Content SEO',
        content: 'Optimised service page content to target specific keywords, updated metadata, introduced FAQ sections from keyword research and sales-team questions, and created additional pages to fill content gaps around commercial liquid waste types.'
      },
      {
        title: 'Fixing H1 Issues',
        content: 'Resolved the issue of multiple H1 tags to improve HTML structure and indexing clarity.'
      },
      {
        title: 'Conversion Rate Optimisation',
        content: 'Integrated prominent CTA buttons and banners across the website to improve user engagement and conversion potential.'
      }
    ],
    resultsNarrative: 'The targeted SEO strategy led to significant improvements in website performance, addressing the initial challenges and setting a strong foundation for ongoing digital success.',
    keyAchievements: [
      'Organic search sessions increased by 42.2% YoY, with a 12.6% rise in engagement rates.',
      'Conversions soared by 74.2% and the conversion rate climbed by 32%.',
      'Four new keywords related to liquid waste removal now rank in the top 10.',
      'Newly optimised service pages achieved first-page rankings, improving lead quality.'
    ],
    results: [
      { metric: '+42%', label: 'Organic Traffic YoY' },
      { metric: '+74%', label: 'Key Events (Conv.) YoY' },
      { metric: '+32%', label: 'Conversion Rate YoY' }
    ],
    conclusion: 'By fixing structural issues, deepening content, and sharpening calls to action, Elite Liquid Waste turned an underperforming new website into a reliable source of qualified leads.'
  },

  'duracube': {
    title: 'Duracube Case Study',
    metaTitle: 'Case Study: Duracube | Digilari Construction',
    metaDescription: 'See how Digilari Construction helped Duracube achieve a 51.6% Increase in New Users QoQ and 50.38% increase in organic traffic.',
    h1: 'Achieving Significant Growth: 51.6% Increase in New Users QoQ',
    subhead: 'A national SEO and content strategy for a leading wet area joinery manufacturer.',
    industry: 'Construction',
    categories: ['SEO', 'CRO'],
    intro: 'Duracube, a leading provider of wet area joinery solutions, engaged in a comprehensive digital marketing strategy to enhance its online presence, drive traffic, and increase conversions.',
    challenge: 'Duracube needed to optimise its content for a diverse set of keywords related to bathroom and toilet partitions, compact laminate, and accessibility standards. They also faced challenges in technical SEO, local search visibility across multiple regions (Melbourne, Sydney, Brisbane, Adelaide), and accurately tracking web traffic and user behaviour.',
    solution: [
      {
        title: 'Keyword Optimisation & Content Strategy',
        content: 'Implemented a targeted keyword strategy focusing on high-traffic and niche keywords such as "disabled toilet standards australia" and "toilet partitions brisbane". Created content addressing frequently asked questions and user search intent.'
      },
      {
        title: 'Technical SEO Improvements',
        content: 'Conducted technical audits and implemented fixes for site speed, mobile usability, and crawl errors. Added schema markup for local businesses and sitelinks searchbox to enhance search visibility.'
      },
      {
        title: 'Local SEO & Content Marketing',
        content: 'Developed a content plan focusing on localised keywords such as "toilet partitions sydney". Published case studies, how-to guides, and industry news to engage the local audience.'
      }
    ],
    results: [
      { metric: '+50.38%', label: 'Organic Traffic Increase' },
      { metric: '+51.6%', label: 'New Users QoQ' }
    ],
    conclusion: 'Through a comprehensive optimisation strategy, Duracube achieved top rankings for targeted keywords, enhanced user engagement, and significantly improved their technical SEO health.'
  },

  'rcr-services': {
    title: 'RCR Services Case Study',
    metaTitle: 'Case Study: RCR Services | Digilari Construction',
    metaDescription: 'Read how Digilari Construction boosted visibility for RCR Services, resulting in a 190% surge in events and dropping bounce rates by 28%.',
    h1: 'How RCR Services Boosted Visibility and Engagement',
    subhead: 'Winning competitive commercial roofing search across four states.',
    industry: 'Construction',
    categories: ['SEO', 'CRO'],
    intro: 'RCR Services, a leader in commercial and industrial roofing and concrete remediation, engaged Digilari to stand out in a highly competitive digital landscape across Melbourne, Adelaide, Sydney, and Newcastle.',
    challenge: 'RCR faced intense keyword competition for commercial roof repair terms. They needed to ensure content was fully optimised, improve local SEO rankings in specific service areas, and accurately track performance metrics to guide ongoing campaigns.',
    solution: [
      {
        title: 'Comprehensive Keyword Strategy',
        content: 'Targeted top keywords like "commercial roof repair" and long-tail terms like "commercial roof repair near me" to capture local search intent, while optimising content density across key service pages.'
      },
      {
        title: 'Content Enhancement',
        content: 'Developed engaging, informative blog posts and service pages addressing customer pain points. Ensured all content was SEO-friendly with appropriate meta tags and keyword usage based on competitor analysis.'
      },
      {
        title: 'Local SEO Tactics',
        content: 'Tailored content to highlight services in Adelaide, Sydney, and Newcastle. Improved local citations and added location-specific case studies to build trust in key local markets.'
      }
    ],
    results: [
      { metric: '+135%', label: 'Engagement Time per User' },
      { metric: '+190%', label: 'Event Count Surge' }
    ],
    conclusion: 'By refining their local SEO and publishing high-value content such as the Concrete Spalling Repair Guide (driving 4% of traffic), RCR Services tripled their top-10 keyword rankings and achieved exceptional market penetration.'
  }
};
