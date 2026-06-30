// Team member bios for the /team/:memberId routes. `img` matches the filenames in
// public/images/team-members. `homeName` matches the name used in the Home page
// "Meet the Experts" grid so those cards can link to the right profile.

export const teamData = {
  'sean-brown': {
    name: 'Sean Brown',
    homeName: 'Sean Brown',
    role: 'Founder & Managing Director',
    img: 'CEO - Sean Brown.jpeg',
    metaTitle: 'Sean Brown – Founder & Managing Director | Digilari Construction',
    metaDescription: 'Meet Sean Brown, Founder and Managing Director of Digilari, a digital marketing agency that challenges conventional strategies to drive real business growth.',
    bio: [
      'Sean Brown is the visionary behind Digilari, a digital marketing agency that challenges conventional strategies to drive real business growth. With a career spanning sales acceleration at Salmat, strategic market expansions at Adshel, and agile business solutions at Spicers Retreats, Sean has cultivated a deep understanding of media, technology, and customer engagement.',
      'At Digilari, he leads a team committed to pushing the boundaries of digital marketing, leveraging data, storytelling, and innovative platforms to craft campaigns that genuinely resonate with audiences. Sean believes in building meaningful relationships, ensuring customers remain at the heart of every strategy. By embracing authenticity and adaptability, he encourages businesses to break free from “business as usual” and explore new growth opportunities.',
      'His approach is simple: stay inventive, challenge the status quo, and move with speed and confidence. While Digilari may take a boutique approach, its ambitions are global.'
    ],
    expertise: [
      { title: 'Strategic Digital Marketing', desc: 'Crafting data-driven marketing strategies that deliver measurable growth.' },
      { title: 'Sales & Market Expansion', desc: 'Driving revenue growth through innovative sales and business development tactics.' },
      { title: 'Customer Engagement & Experience', desc: 'Creating marketing campaigns that build lasting customer relationships.' },
      { title: 'Business Leadership & Growth', desc: 'Leading teams and companies toward sustainable success in a competitive digital landscape.' },
      { title: 'Technology & Innovation', desc: 'Staying ahead of digital trends to harness the latest tools for maximum impact.' }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/seanbrown5/',
      twitter: 'https://x.com/seancbrown',
      email: 's.brown@digilari.com.au'
    }
  },

  'sheng-yang': {
    name: 'Hui-Sheng Yang',
    homeName: 'Hui-Sheng Yang',
    role: 'GEO/SEO Strategist & AI Engineer',
    img: 'AEO Strategist & AI Engineer - Hui-Sheng Yang.jpeg',
    metaTitle: 'Hui-Sheng Yang – GEO/SEO Strategist | Digilari Construction',
    metaDescription: 'Meet Hui-Sheng Yang, an experienced GEO/SEO strategist specialising in competitor analysis, content planning, and generative engine optimisation.',
    bio: [
      'Hui-Sheng Yang is an experienced GEO/SEO strategist with a strong foundation in on-page, off-page, and technical SEO. With over three years in the field, Hui-Sheng specialises in competitor analysis, content planning, and generative engine optimisation (GEO), effectively positioning businesses to capitalise on evolving search trends and AI-driven platforms. Sheng’s strategic insights have consistently driven substantial lead generation and significant revenue growth.',
      'A proven track record backs Hui-Sheng’s expertise, including a 300% year-on-year revenue increase for a hitch supplier through precise keyword targeting, audience optimisation, and innovative GEO strategies. Additionally, Sheng has extensive experience in conversion rate optimisation (CRO) and navigation optimisation, with structured navigation strategies consistently delivering 30–40% improvements in conversion rates.',
      'Hui-Sheng’s data-driven approach ensures that websites not only attract traffic but also convert visitors into customers effectively.'
    ],
    expertise: [
      { title: 'Content SEO', desc: 'Enhancing content strategy to improve search visibility and engagement.' },
      { title: 'Conversion Rate Optimisation (CRO)', desc: 'Implementing strategies to increase user engagement and lead conversions.' },
      { title: 'Navigation Optimisation', desc: 'Structuring site navigation to improve user experience and boost conversions.' }
    ],
    guides: [
      { title: 'Bing SEO', href: 'https://digilari.com.au/articles/bing-seo/' },
      { title: 'Understanding Google’s Quality Score', href: 'https://digilari.com.au/articles/understanding-googles-quality-score/' },
      { title: 'Canonical URL', href: 'https://digilari.com.au/articles/canonical-url/' }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/hui-sheng-yang',
      email: 's.yang@digilari.com.au'
    }
  },

  'celine-merto': {
    name: 'Celine Rose Merto',
    homeName: 'Celine Rose Merto',
    role: 'Lead Graphic Designer & Social Media Specialist',
    img: 'Lead Graphic Designer & Social Media Specialist - Celine Rose Merto.jpeg',
    metaTitle: 'Celine Merto – Lead Graphic Designer & Social Media Specialist | Digilari Construction',
    metaDescription: 'Meet Celine Merto, an experienced graphic designer specialising in UI/UX design, branding, digital illustration, and web design.',
    bio: [
      'Celine Merto is an experienced graphic designer with a passion for creating visually compelling and strategically effective designs. Specialising in UI/UX design, branding, digital illustration, and web design, Celine ensures every project balances aesthetic appeal with functionality.',
      'With a meticulous approach to design, Celine excels in transforming complex ideas into engaging, user-friendly experiences. Whether developing intuitive user interfaces, crafting distinctive brand identities, or designing dynamic websites, Celine is committed to delivering solutions that enhance user engagement and brand impact.',
      'Beyond design, Celine enjoys exploring new coffee shops and spending time by the ocean. For Celine, design is more than a profession, it is a way to bring clarity, creativity, and innovation into the digital space.'
    ],
    expertise: [
      { title: 'UI/UX Design', desc: 'Developing user-centred designs with intuitive interfaces and seamless functionality.' },
      { title: 'Brand Identity', desc: 'Creating cohesive and impactful brand visuals that reflect a business’s core identity.' },
      { title: 'Web Design', desc: 'Designing responsive, engaging websites that integrate aesthetics with user experience.' },
      { title: 'Prototyping', desc: 'Building interactive prototypes to refine and iterate design concepts.' },
      { title: 'Illustration', desc: 'Enhancing projects with custom illustrations for a unique and personalised touch.' }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/celinemerto/',
      instagram: 'https://www.instagram.com/baaaddesign/',
      email: 'c.merto@digilari.com.au'
    }
  },

  'roger-duran': {
    name: 'Roger Duran Jr',
    homeName: 'Roger Duran',
    role: 'Web Developer',
    img: 'Web Developer - Roger Duran.jpeg',
    metaTitle: 'Roger Duran Jr – Web Developer | Digilari Construction',
    metaDescription: 'Meet Roger Duran Jr, a skilled web developer and designer crafting high-performing, visually appealing web pages.',
    bio: [
      'Roger Duran Jr is a skilled web developer and designer who thrives on crafting high-performing, visually appealing web pages. With a passion for solving complex problems, he excels at transforming technical challenges into seamless, functional solutions that enhance user experiences. His meticulous approach ensures that every project is not only visually refined but also optimised for performance and efficiency.',
      'Beyond coding, Roger is an avid traveller and photographer, drawing creative inspiration from diverse cultures and landscapes. His love for exploration keeps his work fresh and innovative. When he is not immersed in development tasks, he unwinds with Marvel movies and thrillers, whether at the cinema or streaming on Netflix.'
    ],
    expertise: [
      { title: 'Web Development', desc: 'Building high-performing, responsive websites with seamless functionality.' },
      { title: 'Web Design', desc: 'Creating visually engaging, user-friendly digital experiences.' }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/rogerduran/',
      email: 'r.duran@digilari.com.au'
    }
  },

  'bridie-conroy': {
    name: 'Bridie Conroy',
    homeName: 'Bridie Conroy',
    role: 'Account Manager',
    img: 'Account Manager - Bridie Conroy.jpeg',
    metaTitle: 'Bridie Conroy – Account Manager | Digilari Construction',
    metaDescription: 'Meet Bridie Conroy, Account Manager at Digilari, keeping construction clients aligned, informed, and on track toward their growth goals.',
    bio: [
      'Bridie Conroy is an Account Manager at Digilari, the connective tissue between our clients and the specialists delivering their campaigns. She keeps projects aligned, communication clear, and momentum high across every engagement.',
      'Full profile coming soon.'
    ],
    expertise: [
      { title: 'Account Management', desc: 'Owning the client relationship end to end, from onboarding through to ongoing growth.' },
      { title: 'Project Coordination', desc: 'Keeping strategy, creative, and delivery teams aligned and on schedule.' },
      { title: 'Client Communication', desc: 'Clear, proactive reporting so clients always know where things stand.' }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/bridie-conroy-0999bb122/',
      email: 'marketing@digilari.com.au'
    }
  },

  'kane-estonina': {
    name: 'Kane Estonina',
    homeName: 'Kane Estonina',
    role: 'Web Developer',
    img: 'Web Developer - Kane Estonina.svg',
    metaTitle: 'Kane Estonina – Web Developer | Digilari Construction',
    metaDescription: 'Meet Kane Estonina, Web Developer at Digilari, building high-performing, conversion-focused websites for construction clients.',
    bio: [
      'Kane Estonina is a Web Developer at Digilari, building fast, reliable, conversion-focused websites that turn traffic into qualified leads for our construction clients.',
      'Full profile coming soon.'
    ],
    expertise: [
      { title: 'Web Development', desc: 'Building high-performing, responsive websites with clean, maintainable code.' },
      { title: 'Performance Optimisation', desc: 'Tuning site speed and Core Web Vitals for both users and search engines.' }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/kane-estonina/',
      email: 'marketing@digilari.com.au'
    }
  },

  'marcela-vildoza': {
    name: 'Marcela Vildoza',
    homeName: 'Marcela Vildoza',
    role: 'Paid Media Specialist',
    img: 'Paid Media Specialist - Marcela Vildoza.jpeg',
    metaTitle: 'Marcela Vildoza – Paid Media Specialist | Digilari Construction',
    metaDescription: 'Meet Marcela Vildoza, Paid Media Specialist at Digilari, running high-intent Google and paid social campaigns for construction clients.',
    bio: [
      'Marcela Vildoza is a Paid Media Specialist at Digilari, planning and managing high-intent paid campaigns across Google, Meta, and LinkedIn that put construction brands in front of ready-to-buy decision-makers.',
      'Full profile coming soon.'
    ],
    expertise: [
      { title: 'Google Ads Management', desc: 'Search, Display, and Performance Max campaigns built around commercial intent.' },
      { title: 'Paid Social', desc: 'Targeted Meta and LinkedIn campaigns that reach the right buying committees.' },
      { title: 'Performance & ROAS', desc: 'Optimising spend against qualified leads and return on ad spend, not vanity clicks.' }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/marcelavildozamarketing/',
      email: 'marketing@digilari.com.au'
    }
  },

  'dorisa-ramos': {
    name: 'Dorisa Ramos',
    homeName: 'Dorisa Ramos',
    role: 'Social Media Specialist',
    img: 'Social Media Specialist - Dorisa Ramos.jpeg',
    metaTitle: 'Dorisa Ramos – Social Media Specialist | Digilari Construction',
    metaDescription: 'Meet Dorisa Ramos, a Social Media Specialist with over three years of experience crafting strategies that bring brands to life online.',
    bio: [
      'Dorisa Ramos is a Social Media Specialist with over three years of experience in crafting strategies that bring brands to life online. From content creation to community management, she has worked across platforms including Facebook, Instagram, LinkedIn, TikTok, Twitter, and YouTube, helping brands grow, engage, and connect with their audiences in meaningful ways.',
      'Dorisa thrives on turning ideas into scroll-stopping content, staying ahead of social media trends, and using data-driven insights to refine strategies. Whether working on organic reach or paid campaigns, she focuses on results-driven approaches that maximise impact. Beyond analytics, her passion lies in storytelling, creating content that feels authentic and resonates with people.',
      'Staying ahead in the fast-moving digital landscape is what excites her. Always exploring new ways to drive engagement, spark conversations, and make brands stand out, Dorisa is committed to delivering innovative and effective social media strategies.'
    ],
    expertise: [
      { title: 'Organic Social Media Growth', desc: 'Building brand communities and increasing engagement through strategic content.' },
      { title: 'Content Creation & Storytelling', desc: 'Crafting compelling content that connects with audiences across multiple platforms.' },
      { title: 'Data-Driven Strategy', desc: 'Leveraging insights and analytics to optimise social media performance.' },
      { title: 'Platform Expertise', desc: 'Managing brand presence on Facebook, Instagram, LinkedIn, TikTok, Twitter, and YouTube.' },
      { title: 'Trend Analysis & Strategy Adaptation', desc: 'Staying ahead of digital trends to keep brands relevant and competitive.' }
    ],
    links: {
      linkedin: 'https://www.linkedin.com/in/dorisa-ramos-9a84ab209/',
      email: 'dramos@digilari.com.au'
    }
  }
};
