import { Startup, Sector, StartupStage, StartupType } from '../types';

export const STARTUP_TYPES = [
  'Unicorn', 'Scale-up', 'Early Stage', 'DeepTech', 'Bootstrapped', 'Studio / Incubator'
];

export const STARTUP_STAGES = [
  'Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C+', 'Profitable / Public'
];

export const STARTUP_SECTORS = [
  'AI & DeepTech', 'FinTech & InsurTech', 'B2B SaaS & DevTools', 'HealthTech & Bio',
  'ClimateTech & Green', 'E-Commerce & Retail', 'CyberSecurity', 'HRTech & Work',
  'Web3 & Gaming', 'Mobility & Logistics'
];

export const PARIS_AREAS = [
  'All areas', '1st arrondissement', '2nd arrondissement', '3rd arrondissement',
  '4th arrondissement', '5th arrondissement', '6th arrondissement', '7th arrondissement',
  '8th arrondissement', '9th arrondissement', '10th arrondissement', '11th arrondissement',
  '12th arrondissement', '13th arrondissement', '14th arrondissement', '15th arrondissement',
  '16th arrondissement', '17th arrondissement', '18th arrondissement', '19th arrondissement',
  '20th arrondissement', 'La Défense', 'Station F (13th)', 'Massy (Paris region)', 'Levallois-Perret', 'Aulnay-sous-Bois', 'Paris'
];

export const PARIS_STARTUPS_DATA: Startup[] = [
  {
    "id": "mistral-ai-15ruedes",
    "name": "Mistral AI (15 Rue des Renaudes)",
    "slug": "mistral-ai",
    "tagline": "Frontier open-weight & commercial generative AI foundation models",
    "description": "Mistral AI is a world-leading artificial intelligence company headquartered in Paris, building open-weight and frontier state-of-the-art large language models including Mistral Large, Codestral, and Pixtral.",
    "type": "DeepTech",
    "stage": "Series A",
    "sector": "AI & DeepTech",
    "area": "17th arrondissement",
    "address": "15 Rue des Renaudes, 75017 Paris, France",
    "coordinates": [
      48.88125,
      2.29615
    ],
    "foundedYear": 2023,
    "fundingTotalEurM": 1040.0,
    "fundingDisplay": "€1.04B+ (Valued €5.8B)",
    "headcount": "100-250",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://mistral.ai",
    "careersUrl": "https://mistral.ai/careers",
    "brandColor": "#FF7000",
    "tags": [
      "Generative AI",
      "LLM",
      "Open Source",
      "Deep Learning",
      "PyTorch"
    ],
    "techStack": [
      "Python",
      "C++",
      "CUDA",
      "Triton",
      "Rust",
      "PyTorch",
      "Next.js"
    ],
    "founders": [],
    "jobs": [
      {
        "title": "AI Engineer, Product",
        "department": "AI & DeepTech",
        "location": "17th arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/mistral.ai/50c74749-9fbc-471f-a647-f6cd22423ccf"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 17,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mistral.ai&sz=128"
  },
  {
    "id": "alan-117quaid",
    "name": "Alan (117 Quai de Valmy)",
    "slug": "alan",
    "tagline": "The personalized healthcare & health insurance companion",
    "description": "Alan is the first independent health insurance licensed in France in over 30 years, pairing transparent digital coverage with AI-driven preventive care tools for businesses and individuals.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "FinTech & InsurTech",
    "area": "10th arrondissement",
    "address": "117 Quai de Valmy, 75010 Paris, France",
    "coordinates": [
      48.8743,
      2.3664
    ],
    "foundedYear": 2016,
    "fundingTotalEurM": 613.0,
    "fundingDisplay": "€613M (Valued €4.0B)",
    "headcount": "600+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://alan.com",
    "careersUrl": "https://alan.com/careers",
    "brandColor": "#059669",
    "tags": [
      "InsurTech",
      "HealthTech",
      "Preventive Care",
      "B2B SaaS",
      "No-Meeting Culture"
    ],
    "techStack": [
      "Python",
      "Flask",
      "React",
      "React Native",
      "PostgreSQL",
      "Docker"
    ],
    "founders": [],
    "jobs": [
      {
        "title": "Marketing Operations",
        "department": "FinTech & InsurTech",
        "location": "10th arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/alan/c1910999-3e09-4d2e-8bac-e8a31eccd438"
      },
      {
        "title": "Software Engineering Intern",
        "department": "FinTech & InsurTech",
        "location": "10th arr.",
        "type": "Internship",
        "url": "https://jobs.ashbyhq.com/alan/7f88aabb-e05f-4f50-89ce-c33ea3ee02df/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 10
  },
  {
    "id": "back-market-199ruech",
    "name": "Back Market (199 Rue Championnet)",
    "slug": "back-market",
    "tagline": "The leading global marketplace for refurbished tech devices",
    "description": "Back Market fights electronic waste by delivering verified refurbished smartphones, laptops, audio gear, and appliances with warranty to millions of consumers.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "18th arrondissement",
    "address": "199 Rue Championnet, 75018 Paris, France",
    "coordinates": [
      48.89655,
      2.3522499999999997
    ],
    "foundedYear": 2014,
    "fundingTotalEurM": 950.0,
    "fundingDisplay": "€950M (Valued €5.1B)",
    "headcount": "700+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://backmarket.fr",
    "careersUrl": "https://careers.backmarket.com",
    "brandColor": "#16A34A",
    "tags": [
      "Circular Economy",
      "Sustainability",
      "Marketplace",
      "E-Commerce",
      "Refurbished"
    ],
    "techStack": [
      "Python",
      "Django",
      "Vue.js",
      "Kubernetes",
      "AWS",
      "Postgres"
    ],
    "founders": [],
    "jobs": [
      {
        "title": "Global Talent Scout",
        "department": "E-Commerce & Retail",
        "location": "18th arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/backmarket/0d996099-3de0-418a-87ff-cc0f4e32407e"
      },
      {
        "title": "Backend Engineer Apprentice / internship pathway",
        "department": "E-Commerce & Retail",
        "location": "18th arr.",
        "type": "Internship",
        "url": "https://jobs.ashbyhq.com/backmarket/fcd2db82-bd03-46aa-929e-ffb4fd94527f"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 18
  },
  {
    "id": "upflow-6466rued",
    "name": "Upflow (64-66 Rue des Archives)",
    "slug": "upflow",
    "tagline": "Leading FinTech & InsurTech company in Paris",
    "description": "Upflow is a verified provider of fintech & insurtech services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "FinTech & InsurTech",
    "area": "3rd arrondissement",
    "address": "64-66 Rue des Archives, 75003 Paris, France",
    "coordinates": [
      48.86965,
      2.35735
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://upflow.io/careers",
    "careersUrl": "https://jobs.ashbyhq.com/upflow/d25957b8-1838-4d2f-b567-9d569289fb68",
    "brandColor": "#2E6F40",
    "tags": [
      "FinTech"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Account Executive – EMEA, English Speaking",
        "department": "FinTech & InsurTech",
        "location": "3rd arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/upflow/d25957b8-1838-4d2f-b567-9d569289fb68"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 3,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=upflow.io&sz=128"
  },
  {
    "id": "inato-14bdmont",
    "name": "Inato (14 Bd Montmartre)",
    "slug": "inato",
    "tagline": "Leading HealthTech & Bio company in Paris",
    "description": "Inato is a verified provider of healthtech & bio services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "HealthTech & Bio",
    "area": "9th arrondissement",
    "address": "14 Bd Montmartre, 75009 Paris, France",
    "coordinates": [
      48.88275,
      2.3333500000000003
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://inato.com/careers",
    "careersUrl": "https://jobs.ashbyhq.com/inato/26983f36-ea51-4c6c-9779-6384171427bf",
    "brandColor": "#2E6F40",
    "tags": [
      "HealthTech"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Senior Analytics Engineer, Product",
        "department": "HealthTech & Bio",
        "location": "9th arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/inato/26983f36-ea51-4c6c-9779-6384171427bf"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=inato.com&sz=128"
  },
  {
    "id": "dust-86avenue",
    "name": "Dust (86 Avenue de Wagram)",
    "slug": "dust",
    "tagline": "Custom AI assistants connected to your company knowledge",
    "description": "Dust enables modern teams to build smart, context-aware AI assistants connected safely to Notion, Slack, Google Drive, and internal data silos.",
    "type": "DeepTech",
    "stage": "Series A",
    "sector": "AI & DeepTech",
    "area": "17th arrondissement",
    "address": "86 Avenue de Wagram, 75017 Paris, France",
    "coordinates": [
      48.8865,
      2.30425
    ],
    "foundedYear": 2023,
    "fundingTotalEurM": 21.0,
    "fundingDisplay": "$21M (Series A - Sequoia)",
    "headcount": "25-50",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://dust.tt",
    "careersUrl": "https://dust.tt/jobs",
    "brandColor": "#2563EB",
    "tags": [
      "Generative AI",
      "AI Agents",
      "Enterprise Search",
      "RAG",
      "LLM Tools"
    ],
    "techStack": [
      "TypeScript",
      "Next.js",
      "Rust",
      "Tailwind",
      "OpenAI",
      "Anthropic",
      "Postgres"
    ],
    "founders": [],
    "jobs": [
      {
        "title": "Senior AI Support Engineer",
        "department": "AI & DeepTech",
        "location": "17th arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/dust/31640a53-7c85-416b-9c95-610445a55e81"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 17,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=dust.tt&sz=128"
  },
  {
    "id": "amo---bump-29boulev",
    "name": "amo / Bump (29 Boulevard desItaliens)",
    "slug": "amo---bump",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "amo / Bump is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "2nd arrondissement",
    "address": "29 Boulevard desItaliens, 75002 Paris, France",
    "coordinates": [
      48.87135,
      2.33725
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.amo.co/careers",
    "careersUrl": "https://jobs.ashbyhq.com/amo/fe22e91f-f148-4502-97ef-9f26438625b3",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "India Content Specialist",
        "department": "E-Commerce & Retail",
        "location": "2nd arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/amo/fe22e91f-f148-4502-97ef-9f26438625b3"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 2,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=amo.co&sz=128"
  },
  {
    "id": "alta-ares-8ruedelv",
    "name": "Alta Ares (8 rue de Lévis)",
    "slug": "alta-ares",
    "tagline": "Leading AI & DeepTech company in Paris",
    "description": "Alta Ares is a verified provider of ai & deeptech services.",
    "type": "DeepTech",
    "stage": "Series A",
    "sector": "AI & DeepTech",
    "area": "17th arrondissement",
    "address": "8 rue de Lévis, 75017 Paris, France",
    "coordinates": [
      48.883649999999996,
      2.3065
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.altaares.com/",
    "careersUrl": "https://jobs.ashbyhq.com/alta-ares/5f198806-3f6b-435d-8538-a0e158d17c29",
    "brandColor": "#2E6F40",
    "tags": [
      "AI"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Talent Acquisition Specialist",
        "department": "AI & DeepTech",
        "location": "17th arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/alta-ares/5f198806-3f6b-435d-8538-a0e158d17c29"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 17,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=altaares.com&sz=128"
  },
  {
    "id": "pivot-144avenu",
    "name": "Pivot (144 Avenue Charles de Gaulle)",
    "slug": "pivot",
    "tagline": "Leading AI & DeepTech company in Paris",
    "description": "Pivot is a verified provider of ai & deeptech services.",
    "type": "DeepTech",
    "stage": "Series A",
    "sector": "AI & DeepTech",
    "area": "Paris",
    "address": "144 Avenue Charles de Gaulle, 92200 Neuilly-sur-Seine, France",
    "coordinates": [
      48.8840339,
      2.2638731
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.pivotapp.ai/careers",
    "careersUrl": "https://jobs.ashbyhq.com/Pivot/fc07565f-d1ac-498e-b920-e9d3e22c1e2c/",
    "brandColor": "#2E6F40",
    "tags": [
      "AI"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Spontaneous application / upcoming roles",
        "department": "AI & DeepTech",
        "location": "Paris",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/Pivot/fc07565f-d1ac-498e-b920-e9d3e22c1e2c/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=pivotapp.ai&sz=128"
  },
  {
    "id": "qonto-18rueden",
    "name": "Qonto (18 Rue de Navarin)",
    "slug": "qonto",
    "tagline": "The leading European all-in-one business finance solution",
    "description": "Qonto simplifies everyday banking, invoicing, bookkeeping, and spend management for SMEs and freelancers across France, Germany, Italy, and Spain.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "FinTech & InsurTech",
    "area": "9th arrondissement",
    "address": "18 Rue de Navarin, 75009 Paris, France",
    "coordinates": [
      48.88065,
      2.34415
    ],
    "foundedYear": 2016,
    "fundingTotalEurM": 622.0,
    "fundingDisplay": "€622M (Valued €4.4B)",
    "headcount": "1,400+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://qonto.com",
    "careersUrl": "https://qonto.com/en/careers",
    "brandColor": "#6B46C1",
    "tags": [
      "FinTech",
      "Neobank",
      "SME Banking",
      "B2B",
      "Invoicing"
    ],
    "techStack": [
      "Ruby on Rails",
      "Go",
      "React",
      "TypeScript",
      "Kubernetes",
      "PostgreSQL"
    ],
    "founders": [],
    "jobs": [
      {
        "title": "Product / Sales / Operations roles",
        "department": "FinTech & InsurTech",
        "location": "9th arr.",
        "type": "Full-time",
        "url": "https://jobs.lever.co/qonto"
      },
      {
        "title": "Talent / Product Marketing internships",
        "department": "FinTech & InsurTech",
        "location": "9th arr.",
        "type": "Internship",
        "url": "https://jobs.lever.co/qonto?commitment=Internship"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=qonto.com&sz=128"
  },
  {
    "id": "blablacar-84avenue",
    "name": "BlaBlaCar (84 Avenue de la République)",
    "slug": "blablacar",
    "tagline": "The world\\",
    "description": "BlaBlaCar connects people looking to travel long distances with drivers going the same way.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "Mobility & Logistics",
    "area": "11th arrondissement",
    "address": "84 Avenue de la République, 75011 Paris, France",
    "coordinates": [
      48.8534,
      2.3853
    ],
    "foundedYear": 2006,
    "fundingTotalEurM": 400.0,
    "fundingDisplay": "€400M+",
    "headcount": "500+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.blablacar.com",
    "careersUrl": "https://www.blablacar.com/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Mobility"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Marketing / Strategy / Product roles",
        "department": "Mobility & Logistics",
        "location": "11th arr.",
        "type": "Full-time",
        "url": "https://jobs.lever.co/blablacar"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 11,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=jobs.blablacar.com&sz=128"
  },
  {
    "id": "malt-18ruegod",
    "name": "Malt (18 Rue Godot de Mauroy)",
    "slug": "malt",
    "tagline": "The largest freelance marketplace in Europe",
    "description": "Malt connects businesses with freelance tech, data, and design experts.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "HRTech & Work",
    "area": "9th arrondissement",
    "address": "18 Rue Godot de Mauroy, 75009 Paris, France",
    "coordinates": [
      48.8725,
      2.3278
    ],
    "foundedYear": 2013,
    "fundingTotalEurM": 100.0,
    "fundingDisplay": "€100M+",
    "headcount": "300+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://www.malt.com",
    "careersUrl": "https://www.malt.com/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Future of Work",
      "SaaS"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Account Management / Data / Security roles",
        "department": "HRTech & Work",
        "location": "9th arr.",
        "type": "Full-time",
        "url": "https://jobs.lever.co/malt"
      },
      {
        "title": "Account Management / Analytics internships",
        "department": "HRTech & Work",
        "location": "9th arr.",
        "type": "Internship",
        "url": "https://jobs.lever.co/malt?commitment=FR%20Intern"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=malt.com&sz=128"
  },
  {
    "id": "doctolib-54quaich",
    "name": "Doctolib (54 Quai Charles Pasqua)",
    "slug": "doctolib",
    "tagline": "Transforming European healthcare access & digital consultations",
    "description": "Doctolib provides healthcare professionals with modern practice management software and connects over 80M European patients with doctors, therapists, and hospitals.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "HealthTech & Bio",
    "area": "Levallois-Perret",
    "address": "54 Quai Charles Pasqua, 92300 Levallois-Perret, France",
    "coordinates": [
      48.8977,
      2.2857
    ],
    "foundedYear": 2013,
    "fundingTotalEurM": 810.0,
    "fundingDisplay": "€810M+ (Valued €5.8B)",
    "headcount": "2,800+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://doctolib.fr",
    "careersUrl": "https://careers.doctolib.fr",
    "brandColor": "#0059C6",
    "tags": [
      "HealthTech",
      "EHR",
      "Telehealth",
      "Marketplace",
      "SaaS"
    ],
    "techStack": [
      "Ruby on Rails",
      "React Native",
      "React",
      "PostgreSQL",
      "AWS"
    ],
    "founders": [],
    "jobs": [
      {
        "title": "Product / Finance / Tech roles",
        "department": "HealthTech & Bio",
        "location": "Levallois-Perret",
        "type": "Full-time",
        "url": "https://careers.doctolib.fr/"
      },
      {
        "title": "Consolidation & Financial Control Internship",
        "department": "HealthTech & Bio",
        "location": "Levallois-Perret",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/fr/companies/doctolib/jobs/stage-consolidation-et-controle-financier-x-f-m-septembre-2026_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=careers.doctolib.fr&sz=128"
  },
  {
    "id": "aircall-11ruesai",
    "name": "Aircall (11 Rue Saint-Georges)",
    "slug": "aircall",
    "tagline": "The cloud-based phone system of choice for modern brands",
    "description": "Aircall offers a cloud-based phone system for support and sales teams.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "11 Rue Saint-Georges, 75009 Paris, France",
    "coordinates": [
      48.871050000000004,
      2.34085
    ],
    "foundedYear": 2014,
    "fundingTotalEurM": 200.0,
    "fundingDisplay": "€200M+",
    "headcount": "600+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://aircall.io",
    "careersUrl": "https://aircall.io/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "SaaS",
      "Communication"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Sales / Engineering / Customer roles",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Full-time",
        "url": "https://aircall.io/careers/"
      },
      {
        "title": "Sales Intern – French Market",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Internship",
        "url": "https://app.welcometothejungle.com/jobs/pziptkOd"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=aircall.io&sz=128"
  },
  {
    "id": "pigment-12ruesai",
    "name": "Pigment (12 Rue Sainte-Cécile)",
    "slug": "pigment",
    "tagline": "Business planning & financial forecasting platform for modern enterprises",
    "description": "Pigment is an intuitive, multi-dimensional business planning platform that replaces static spreadsheets with live collaborative forecasting for Figma, Carta, Deliveroo, and Unilever.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "B2B SaaS & DevTools",
    "area": "9th arrondissement",
    "address": "12 Rue Sainte-Cécile, 75009 Paris, France",
    "coordinates": [
      48.87975,
      2.3422
    ],
    "foundedYear": 2019,
    "fundingTotalEurM": 368.0,
    "fundingDisplay": "$398M (Valued $1B+)",
    "headcount": "400+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://pigment.com",
    "careersUrl": "https://pigment.com/careers",
    "brandColor": "#E11D48",
    "tags": [
      "Business Planning",
      "B2B SaaS",
      "Analytics",
      "Enterprise",
      "FP&A"
    ],
    "techStack": [
      "TypeScript",
      "C#",
      ".NET Core",
      "React",
      "Azure",
      "WebAssembly"
    ],
    "founders": [],
    "jobs": [
      {
        "title": "Sales / Growth / Product roles",
        "department": "B2B SaaS & DevTools",
        "location": "9th arr.",
        "type": "Full-time",
        "url": "https://jobs.lever.co/pigment"
      },
      {
        "title": "Business Development / Growth Marketing Intern",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Internship",
        "url": "https://jobs.lever.co/pigment"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=pigment.com&sz=128"
  },
  {
    "id": "voodoo-20ruedec",
    "name": "Voodoo (20 Rue de Charonne)",
    "slug": "voodoo",
    "tagline": "Creating and publishing hit mobile games and apps",
    "description": "Voodoo is a tech company that creates and publishes mobile games and apps.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "Web3 & Gaming",
    "area": "11th arrondissement",
    "address": "20 Rue de Charonne, 75011 Paris, France",
    "coordinates": [
      48.8579,
      2.3800499999999998
    ],
    "foundedYear": 2013,
    "fundingTotalEurM": 400.0,
    "fundingDisplay": "€400M+",
    "headcount": "500+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://voodoo.io",
    "careersUrl": "https://voodoo.io/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Gaming",
      "Mobile"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Product / Growth / Tech roles",
        "department": "Web3 & Gaming",
        "location": "11th arr.",
        "type": "Full-time",
        "url": "https://voodoo.io/careers"
      },
      {
        "title": "Legal / Growth Monetization internships",
        "department": "Web3 & Gaming",
        "location": "11th arr.",
        "type": "Internship",
        "url": "https://app.welcometothejungle.com/jobs/zjdEzaXo"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 11,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=voodoo.io&sz=128"
  },
  {
    "id": "front-35ruegre",
    "name": "Front (35 Rue Greneta)",
    "slug": "front",
    "tagline": "Leading B2B SaaS & DevTools company in Paris",
    "description": "Front is a verified provider of b2b saas & devtools services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "B2B SaaS & DevTools",
    "area": "2nd arrondissement",
    "address": "35 Rue Greneta, 75002 Paris, France (6th floor), France",
    "coordinates": [
      48.86835,
      2.3437
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 2,
    "websiteUrl": "https://front.com/careers",
    "careersUrl": "https://jobs.ashbyhq.com/frontcareers",
    "brandColor": "#2E6F40",
    "tags": [
      "B2B"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Software Engineering / Product roles",
        "department": "B2B SaaS & DevTools",
        "location": "2nd arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/frontcareers"
      },
      {
        "title": "Software Engineering Intern",
        "department": "B2B SaaS & DevTools",
        "location": "2nd arr.",
        "type": "Internship",
        "url": "https://jobs.ashbyhq.com/frontcareers/1026a32c-f8cc-4eee-992b-bacdf771d9fc"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 2,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=front.com&sz=128"
  },
  {
    "id": "akur8-14rueduz",
    "name": "Akur8 (14 Rue d'Uzès)",
    "slug": "akur8",
    "tagline": "Leading AI & DeepTech company in Paris",
    "description": "Akur8 is a verified provider of ai & deeptech services.",
    "type": "DeepTech",
    "stage": "Series A",
    "sector": "AI & DeepTech",
    "area": "2nd arrondissement",
    "address": "14 Rue d'Uzès, 75002 Paris, France",
    "coordinates": [
      48.86775,
      2.347
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.akur8.com/careers",
    "careersUrl": "https://www.akur8.com/careers",
    "brandColor": "#2E6F40",
    "tags": [
      "AI"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Data / Actuarial / Product roles",
        "department": "AI & DeepTech",
        "location": "2nd arr.",
        "type": "Full-time",
        "url": "https://www.akur8.com/careers"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 2,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=akur8.com&sz=128"
  },
  {
    "id": "sorare-10ruedel",
    "name": "Sorare (10 Rue de la Paix)",
    "slug": "sorare",
    "tagline": "Global fantasy sports platform with officially licensed digital collectibles",
    "description": "Sorare connects fans across football, NBA, and MLB with digital player cards, fantasy league competitions, and real rewards in partnership with 300+ leagues.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "Web3 & Gaming",
    "area": "2nd arrondissement",
    "address": "10 Rue de la Paix, 75002 Paris, France",
    "coordinates": [
      48.87465,
      2.3407
    ],
    "foundedYear": 2018,
    "fundingTotalEurM": 680.0,
    "fundingDisplay": "€680M (Valued €4.3B)",
    "headcount": "150-250",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://sorare.com",
    "careersUrl": "https://sorare.com/careers",
    "brandColor": "#10B981",
    "tags": [
      "Fantasy Sports",
      "Web3",
      "Gaming",
      "Collectibles",
      "Starknet"
    ],
    "techStack": [
      "Ruby on Rails",
      "React",
      "React Native",
      "GraphQL",
      "Starknet / ZK-Rollups"
    ],
    "founders": [],
    "jobs": [
      {
        "title": "Marketing / Product / Tech roles",
        "department": "Web3 & Gaming",
        "location": "2nd arr.",
        "type": "Full-time",
        "url": "https://jobs.ashbyhq.com/sorare"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 2,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=sorare.com&sz=128"
  },
  {
    "id": "scaleway-8ruedela",
    "name": "Scaleway (8 Rue de la Ville-l'Évêque)",
    "slug": "scaleway",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Scaleway is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "8th arrondissement",
    "address": "8 Rue de la Ville-l'Évêque, 75008 Paris, France",
    "coordinates": [
      48.867000000000004,
      2.30825
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.scaleway.com/en/careers/",
    "careersUrl": "https://www.scaleway.com/en/careers/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Cloud / Engineering / Operations roles",
        "department": "E-Commerce & Retail",
        "location": "8th arr.",
        "type": "Full-time",
        "url": "https://www.scaleway.com/en/careers/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 8,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=scaleway.com&sz=128"
  },
  {
    "id": "skello-69ruebea",
    "name": "Skello (69 Rue Beaubourg)",
    "slug": "skello",
    "tagline": "Shift planning and HR management software",
    "description": "Skello provides shift planning and personnel management software.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "HRTech & Work",
    "area": "3rd arrondissement",
    "address": "69 Rue Beaubourg, 75003 Paris, France",
    "coordinates": [
      48.8631,
      2.3538
    ],
    "foundedYear": 2016,
    "fundingTotalEurM": 40.0,
    "fundingDisplay": "€40M",
    "headcount": "150+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.skello.io",
    "careersUrl": "https://www.skello.io/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "HR Tech",
      "SaaS"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Growth Marketing Intern",
        "department": "HRTech & Work",
        "location": "3rd arr.",
        "type": "Internship",
        "url": "https://app.welcometothejungle.com/jobs/30v_UCe_"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 3,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=skello.io&sz=128"
  },
  {
    "id": "quandela-7ruelona",
    "name": "Quandela (7 Rue Léonard de Vinci)",
    "slug": "quandela",
    "tagline": "Photonic quantum computing solutions",
    "description": "Quandela provides photonic quantum computers and access to quantum algorithms.",
    "type": "DeepTech",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Massy (Paris region)",
    "address": "7 Rue Léonard de Vinci, 91300 Massy, France",
    "coordinates": [
      48.728100000000005,
      2.2779000000000003
    ],
    "foundedYear": 2017,
    "fundingTotalEurM": 50.0,
    "fundingDisplay": "€50M",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.quandela.com",
    "careersUrl": "https://www.quandela.com/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Quantum Computing",
      "Deep Tech"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "HR / Business / Marketing internship",
        "department": "E-Commerce & Retail",
        "location": "Massy (Paris region)",
        "type": "Internship",
        "url": "https://app.welcometothejungle.com/jobs/Iqqq3Huo"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=quandela.com&sz=128"
  },
  {
    "id": "daisy-99ruedub",
    "name": "Daisy (99 Rue du Bac)",
    "slug": "daisy",
    "tagline": "SaaS for creator economy",
    "description": "Daisy provides SaaS solutions for the creator economy.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "7th arrondissement",
    "address": "99 Rue du Bac, 75007 Paris, France",
    "coordinates": [
      48.8553,
      2.3244
    ],
    "foundedYear": 2021,
    "fundingTotalEurM": 2.0,
    "fundingDisplay": "€2M",
    "headcount": "10+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://daisyapp.hr",
    "careersUrl": "https://daisyapp.hr/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "SaaS",
      "Creator Economy"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Product Builder / No-code internship",
        "department": "E-Commerce & Retail",
        "location": "7th arr.",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/fr/companies/daisy/jobs/stage-no-code-automatisation-fin-d-etudes-make-api-saas_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 7,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=daisyapp.fr&sz=128"
  },
  {
    "id": "roundtable-60ruefra",
    "name": "Roundtable (60 Rue François 1er)",
    "slug": "roundtable",
    "tagline": "Fintech for private markets",
    "description": "Roundtable is a fintech platform focused on private markets.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "FinTech & InsurTech",
    "area": "8th arrondissement",
    "address": "60 Rue François 1er, 75008 Paris, France",
    "coordinates": [
      48.8718,
      2.30945
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 5.0,
    "fundingDisplay": "€5M",
    "headcount": "30+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://roundtable.eu",
    "careersUrl": "https://roundtable.eu/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Fintech",
      "Private Markets"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Growth Intern",
        "department": "FinTech & InsurTech",
        "location": "8th arr.",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/fr/companies/roundtable/jobs/growth-intern_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 8,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=roundtable.eu&sz=128"
  },
  {
    "id": "rollee-25ruedep",
    "name": "Rollee (25 Rue de Ponthieu)",
    "slug": "rollee",
    "tagline": "Employment data platform",
    "description": "Rollee provides a unified API for employment and income data.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "FinTech & InsurTech",
    "area": "8th arrondissement",
    "address": "25 Rue de Ponthieu, 75008 Paris, France",
    "coordinates": [
      48.874050000000004,
      2.3081
    ],
    "foundedYear": 2021,
    "fundingTotalEurM": 4.0,
    "fundingDisplay": "€4M",
    "headcount": "20+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.rollee.io",
    "careersUrl": "https://www.rollee.io/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Fintech",
      "Employment Data"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Product & Brand Designer Intern",
        "department": "FinTech & InsurTech",
        "location": "8th arr.",
        "type": "Internship",
        "url": "https://app.welcometothejungle.com/jobs/Y7Hz8eaQ"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 8
  },
  {
    "id": "deepomatic-53ruedet",
    "name": "Deepomatic (53 Rue de Turbigo)",
    "slug": "deepomatic",
    "tagline": "Leading AI & DeepTech company in Paris",
    "description": "Deepomatic is a verified provider of ai & deeptech services.",
    "type": "DeepTech",
    "stage": "Series A",
    "sector": "AI & DeepTech",
    "area": "3rd arrondissement",
    "address": "53 Rue de Turbigo, 75003 Paris, France",
    "coordinates": [
      48.8659,
      2.3551
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://deepomatic.com/",
    "careersUrl": "https://app.welcometothejungle.com/jobs/-gN5RXKs/company",
    "brandColor": "#2E6F40",
    "tags": [
      "AI"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Solutions Architect Intern",
        "department": "AI & DeepTech",
        "location": "3rd arr.",
        "type": "Internship",
        "url": "https://app.welcometothejungle.com/jobs/-gN5RXKs/company"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 3,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=deepomatic.com&sz=128"
  },
  {
    "id": "wakeo-6rueaube",
    "name": "Wakeo (6 Rue Auber)",
    "slug": "wakeo",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Wakeo is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "6 Rue Auber, 75009 Paris, France",
    "coordinates": [
      48.8719,
      2.3298
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://wakeo.co/",
    "careersUrl": "https://app.welcometothejungle.com/jobs/ijcz3uZS/company",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Sales Lead Generation Intern",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Internship",
        "url": "https://app.welcometothejungle.com/jobs/ijcz3uZS/company"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=wakeo.co&sz=128"
  },
  {
    "id": "zeplug-10rueduf",
    "name": "ZEPLUG (10 Rue du Faubourg Montmartre)",
    "slug": "zeplug",
    "tagline": "EV Charging solutions",
    "description": "ZEPLUG provides electric vehicle charging infrastructure for residential buildings.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "ClimateTech & Green",
    "area": "9th arrondissement",
    "address": "10 Rue du Faubourg Montmartre, 75009 Paris, France",
    "coordinates": [
      48.87765,
      2.3431
    ],
    "foundedYear": 2014,
    "fundingTotalEurM": 200.0,
    "fundingDisplay": "€200M",
    "headcount": "150+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.zeplug.com",
    "careersUrl": "https://www.zeplug.com/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "EV Charging",
      "Climate Tech"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Automation & Innovation Intern",
        "department": "ClimateTech & Green",
        "location": "9th arr.",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/fr/companies/zeplug/jobs/stage-automatisation-et-innovation_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=zeplug.com&sz=128"
  },
  {
    "id": "neosilver-61ruedel",
    "name": "Neosilver (61 Rue de Lyon)",
    "slug": "neosilver",
    "tagline": "Health and social tech",
    "description": "Neosilver provides social and health tech solutions for seniors.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "12th arrondissement",
    "address": "61 Rue de Lyon, 75012 Paris, France",
    "coordinates": [
      48.84045,
      2.4190500000000004
    ],
    "foundedYear": 2019,
    "fundingTotalEurM": 1.0,
    "fundingDisplay": "€1M",
    "headcount": "20+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://neosilver.fr",
    "careersUrl": "https://neosilver.fr/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Health",
      "Social Tech"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Commercial / Partnerships Internships",
        "department": "E-Commerce & Retail",
        "location": "12th arr.",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/en/companies/neosilver/jobs/stage-commercial-e-marches-publics-aap-ao_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 12
  },
  {
    "id": "estuaire-10ruerau",
    "name": "Estuaire (10 Rue Réaumur)",
    "slug": "estuaire",
    "tagline": "Climate tech for aviation",
    "description": "Estuaire provides data platforms for sustainable aviation.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "ClimateTech & Green",
    "area": "3rd arrondissement",
    "address": "10 Rue Réaumur, 75003 Paris, France",
    "coordinates": [
      48.864850000000004,
      2.35945
    ],
    "foundedYear": 2021,
    "fundingTotalEurM": 2.0,
    "fundingDisplay": "€2M",
    "headcount": "15+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.estuaire.tech",
    "careersUrl": "https://www.estuaire.tech/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Climate Tech",
      "Aviation"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Founders Associate / Aerospace Data Science",
        "department": "ClimateTech & Green",
        "location": "3rd arr.",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/en/companies/estuaire/jobs/founders-associate-internship-or-apprenticeship_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 3
  },
  {
    "id": "blissim-10rueduf",
    "name": "Blissim (10 Rue du Faubourg-Montmartre)",
    "slug": "blissim",
    "tagline": "Leading beauty box and e-commerce platform",
    "description": "Blissim is France\\",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "10 Rue du Faubourg-Montmartre, 75009 Paris, France",
    "coordinates": [
      48.883050000000004,
      2.3389
    ],
    "foundedYear": 2011,
    "fundingTotalEurM": 15.0,
    "fundingDisplay": "€15M",
    "headcount": "100+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://blissim.fr",
    "careersUrl": "https://blissim.fr/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Beauty",
      "E-commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Supply Chain & Data Engineering Intern",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/fr/companies/blissim/jobs/stage-ingenieur-data-amelioration-continue_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=blissim.fr&sz=128"
  },
  {
    "id": "garantme-9ruedesc",
    "name": "Garantme (9 Rue des Colonnes)",
    "slug": "garantme",
    "tagline": "Fintech for insurtech and rental guarantees",
    "description": "Garantme acts as a guarantor for tenants to facilitate their access to housing.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "FinTech & InsurTech",
    "area": "2nd arrondissement",
    "address": "9 Rue des Colonnes, 75002 Paris, France",
    "coordinates": [
      48.8709,
      2.3443
    ],
    "foundedYear": 2017,
    "fundingTotalEurM": 15.0,
    "fundingDisplay": "€15M",
    "headcount": "100+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://garantme.fr",
    "careersUrl": "https://garantme.fr/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Fintech",
      "Insurtech"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Business Development & Sales Intern",
        "department": "FinTech & InsurTech",
        "location": "2nd arr.",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/fr/companies/garantme-1/jobs/business-development-and-sales-stage-6-mois-debut-septembre-2026_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 2,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=garantme.fr&sz=128"
  },
  {
    "id": "tabobine-lafte",
    "name": "TABOBINE (La Fête)",
    "slug": "tabobine",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "TABOBINE is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "8th arrondissement",
    "address": "La Fête, 3 Place de Clichy, 75008 Paris, France",
    "coordinates": [
      48.87585,
      2.3135000000000003
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://tabobine.com/",
    "careersUrl": "https://www.welcometothejungle.com/fr/companies/tabobine/jobs/stage-ingenieur-e-innovation_paris_TABOB_Rlr7lgy",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Innovation Engineer Intern",
        "department": "E-Commerce & Retail",
        "location": "8th arr.",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/fr/companies/tabobine/jobs/stage-ingenieur-e-innovation_paris_TABOB_Rlr7lgy"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 8,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=tabobine.com&sz=128"
  },
  {
    "id": "proton-1parvdel",
    "name": "Proton (1 Parv. de la Défense)",
    "slug": "proton",
    "tagline": "Privacy by default ecosystem",
    "description": "Proton provides privacy-focused email, VPN, calendar, and drive services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "CyberSecurity",
    "area": "Paris",
    "address": "1 Parv. de la Défense, 92800 Puteaux, France",
    "coordinates": [
      48.886050000000004,
      2.2462
    ],
    "foundedYear": 2014,
    "fundingTotalEurM": 2.0,
    "fundingDisplay": "N/A",
    "headcount": "400+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://proton.me",
    "careersUrl": "https://proton.me/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Cybersecurity",
      "Privacy"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "iOS Software Engineer Intern",
        "department": "CyberSecurity",
        "location": "Paris",
        "type": "Internship",
        "url": "https://app.welcometothejungle.com/jobs/ZOukbc16"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=proton.me&sz=128"
  },
  {
    "id": "oneflash-7placede",
    "name": "OneFlash (7 Place de l'Hôtel de Ville)",
    "slug": "oneflash",
    "tagline": "Mobility SaaS",
    "description": "OneFlash provides shared portable batteries network and mobility SaaS.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "Mobility & Logistics",
    "area": "Aulnay-sous-Bois",
    "address": "7 Place de l'Hôtel de Ville, 93600 Aulnay-sous-Bois, France",
    "coordinates": [
      48.93995,
      2.48475
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 1.0,
    "fundingDisplay": "€1M",
    "headcount": "15+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://oneflash.co",
    "careersUrl": "https://oneflash.co/careers",
    "brandColor": "#4f46e5",
    "tags": [
      "Mobility",
      "SaaS"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "International Development / Finance & Operations",
        "department": "Mobility & Logistics",
        "location": "Aulnay-sous-Bois",
        "type": "Internship",
        "url": "https://www.welcometothejungle.com/en/companies/oneflash/jobs/stage-international-development_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false
  },
  {
    "id": "joko-3impasse",
    "name": "Joko (3 impasse de la Planchette)",
    "slug": "joko",
    "tagline": "Leading FinTech & InsurTech company in Paris",
    "description": "Joko is a verified provider of fintech & insurtech services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "FinTech & InsurTech",
    "area": "3rd arrondissement",
    "address": "3 impasse de la Planchette, 75003 Paris, France",
    "coordinates": [
      48.86815,
      2.3648499999999997
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://joko.com/",
    "careersUrl": "https://jobs.ashbyhq.com/joko/6e4e15ea-7d8e-4a02-b175-f536c14c3974",
    "brandColor": "#2E6F40",
    "tags": [
      "FinTech"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Business Associate Intern – Card-Linked",
        "department": "FinTech & InsurTech",
        "location": "3rd arr.",
        "type": "Internship",
        "url": "https://jobs.ashbyhq.com/joko/6e4e15ea-7d8e-4a02-b175-f536c14c3974"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 3,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=joko.com&sz=128"
  },
  {
    "id": "singulier-20ruenic",
    "name": "Singulier (20 rue Nicolo)",
    "slug": "singulier",
    "tagline": "Leading AI & DeepTech company in Paris",
    "description": "Singulier is a verified provider of ai & deeptech services.",
    "type": "DeepTech",
    "stage": "Series A",
    "sector": "AI & DeepTech",
    "area": "16th arrondissement",
    "address": "20 rue Nicolo, 75016 Paris, France",
    "coordinates": [
      48.855,
      2.2603000000000004
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://singulier.co/",
    "careersUrl": "https://apply.workable.com/singulier/j/40E90AAB17",
    "brandColor": "#2E6F40",
    "tags": [
      "AI"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Data Analytics Intern",
        "department": "AI & DeepTech",
        "location": "16th arr.",
        "type": "Internship",
        "url": "https://apply.workable.com/singulier/j/40E90AAB17"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 16,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=singulier.co&sz=128"
  },
  {
    "id": "corma-5parvisa",
    "name": "Corma (5 Parvis Alan Turing)",
    "slug": "corma",
    "tagline": "Leading AI & DeepTech company in Paris",
    "description": "Corma is a verified provider of ai & deeptech services.",
    "type": "DeepTech",
    "stage": "Series A",
    "sector": "AI & DeepTech",
    "area": "13th arrondissement",
    "address": "5 Parvis Alan Turing, 75013 Paris, France",
    "coordinates": [
      48.8340771,
      2.3711573
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://stationf.co/",
    "careersUrl": "https://jobs.stationf.co/companies/corma/jobs/founders-associate-internship-right-hand-to-the-ceo-january-2027_paris",
    "brandColor": "#2E6F40",
    "tags": [
      "AI"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Founders Associate Intern",
        "department": "AI & DeepTech",
        "location": "13th arr.",
        "type": "Internship",
        "url": "https://jobs.stationf.co/companies/corma/jobs/founders-associate-internship-right-hand-to-the-ceo-january-2027_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 13,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=corma.io&sz=128"
  },
  {
    "id": "matr-stationf",
    "name": "MatR (Station F)",
    "slug": "matr",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "MatR is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "13th arrondissement",
    "address": "Station F, 5 Parvis Alan Turing, 75013 Paris, France",
    "coordinates": [
      48.8340771,
      2.3711573
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://stationf.co/",
    "careersUrl": "https://jobs.stationf.co/companies/matr/jobs/sales-development-representative-internship-m-f-x-matr_paris",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Sales Development Representative Intern",
        "department": "E-Commerce & Retail",
        "location": "13th arr.",
        "type": "Internship",
        "url": "https://jobs.stationf.co/companies/matr/jobs/sales-development-representative-internship-m-f-x-matr_paris"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 13,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=matr.co&sz=128"
  },
  {
    "id": "tiktok-21rueduz",
    "name": "TikTok (21 Rue d'Uzès)",
    "slug": "tiktok",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "TikTok is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "2nd arrondissement",
    "address": "21 Rue d'Uzès, 75002 Paris, France",
    "coordinates": [
      48.8707496,
      2.3431555
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.tiktok.com/careers",
    "careersUrl": "https://lifeattiktok.com/search?keyword=TikTok%20Shop%20France",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Account Manager Project Intern – TikTok Shop France",
        "department": "E-Commerce & Retail",
        "location": "2nd arr.",
        "type": "Internship",
        "url": "https://lifeattiktok.com/search?keyword=TikTok%20Shop%20France"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 2,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=tiktok.com&sz=128"
  },
  {
    "id": "mcdonalds-11avenue",
    "name": "McDonald's (11 Avenue de Wagram)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "17th arrondissement",
    "address": "11 Avenue de Wagram, 75017 Paris, France",
    "coordinates": [
      48.8755787,
      2.2961105
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-wagram/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "17th arr.",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-wagram/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 17,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "mcdonalds-192ruede",
    "name": "McDonald's (192 Rue de la Convention)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "15th arrondissement",
    "address": "192 Rue de la Convention, 75015 Paris, France",
    "coordinates": [
      48.8374804,
      2.2956295
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-convention/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "15th arr.",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-convention/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 15,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "mcdonalds-2bouleva",
    "name": "McDonald's (2 Boulevard Poissonnière)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "2 Boulevard Poissonnière, 75009 Paris, France",
    "coordinates": [
      48.8708963,
      2.3476858
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-bonne-nouvelle/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-bonne-nouvelle/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "mcdonalds-208avenu",
    "name": "McDonald's (208 Avenue Jean Jaurès)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "19th arrondissement",
    "address": "208 Avenue Jean Jaurès, 75019 Paris, France",
    "coordinates": [
      48.8885377,
      2.3927627
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-porte-de-pantin/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "19th arr.",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-porte-de-pantin/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 19,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "mcdonalds-353ruede",
    "name": "McDonald's (353 Rue de Belleville)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "19th arrondissement",
    "address": "353 Rue de Belleville, 75019 Paris, France",
    "coordinates": [
      48.8746596,
      2.3872658
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-porte-des-lilas/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "19th arr.",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-porte-des-lilas/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 19,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "mcdonalds-67boulev",
    "name": "McDonald's (67 Boulevard Davout)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "20th arrondissement",
    "address": "67 Boulevard Davout, 75020 Paris, France",
    "coordinates": [
      48.8532616,
      2.4104106
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-porte-montreuil/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "20th arr.",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-porte-montreuil/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 20,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "mcdonalds-77boulev",
    "name": "McDonald's (77 Boulevard Ornano)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "77 Boulevard Ornano, 75865 Paris CEDEX 18, France",
    "coordinates": [
      48.85075,
      2.3560999999999996
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-clignancourt/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-clignancourt/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "mcdonalds-88bisrue",
    "name": "McDonald's (88 bis Rue Parmentier)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "11th arrondissement",
    "address": "88 bis Rue Parmentier, 75011 Paris, France",
    "coordinates": [
      48.8700064,
      2.4138929
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-parmentier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "11th arr.",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-parmentier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 11,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "mcdonalds-911avenu",
    "name": "McDonald's (9–11 Avenue de Choisy)",
    "slug": "mcdonalds",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "McDonald's is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "13th arrondissement",
    "address": "9–11 Avenue de Choisy, 75013 Paris, France",
    "coordinates": [
      48.8210323,
      2.3639553
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://prd-recrute.mcdonalds.fr/nous-rejoindre/etudiants/",
    "careersUrl": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-avenue-de-choisy/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Employé Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "13th arr.",
        "type": "Part-time",
        "url": "https://www.mcdonalds-recrute.fr/nos-restaurants/paris-avenue-de-choisy/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 13,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=mcdonalds.fr&sz=128"
  },
  {
    "id": "five-guys-2bouleva",
    "name": "Five Guys (2 Boulevard Haussmann)",
    "slug": "five-guys",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Five Guys is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "2 Boulevard Haussmann, 75009 Paris, France",
    "coordinates": [
      48.872195,
      2.3399317
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://recrutement.fiveguys.fr/",
    "careersUrl": "https://recrutement.fiveguys.fr/jobs?split_view=true",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Equipier Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Part-time",
        "url": "https://recrutement.fiveguys.fr/jobs?split_view=true"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=recrutement.fiveguys.fr&sz=128"
  },
  {
    "id": "burger-king-93boulev",
    "name": "Burger King (93 Boulevard de Strasbourg)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "10th arrondissement",
    "address": "93 Boulevard de Strasbourg, 75010 Paris, France",
    "coordinates": [
      48.8751752,
      2.3575804
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "10th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 10,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-25rueded",
    "name": "Burger King (25 Rue de Dunkerque)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "10th arrondissement",
    "address": "25 Rue de Dunkerque, 75010 Paris, France",
    "coordinates": [
      48.8799366,
      2.3540537
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "10th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 10,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-20ruedel",
    "name": "Burger King (20 Rue de la Roquette)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "11th arrondissement",
    "address": "20 Rue de la Roquette, 75011 Paris, France",
    "coordinates": [
      48.8539096,
      2.37103
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "11th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 11,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-279avenu",
    "name": "Burger King (279 Avenue Daumesnil)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "12th arrondissement",
    "address": "279 Avenue Daumesnil, 75012 Paris, France",
    "coordinates": [
      48.8358012,
      2.406472
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "12th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 12,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-4avenued",
    "name": "Burger King (4 Avenue du Trône)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "12th arrondissement",
    "address": "4 Avenue du Trône, 75012 Paris, France",
    "coordinates": [
      48.8478313,
      2.3977997
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "12th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 12,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-1ruegeor",
    "name": "Burger King (1 Rue George Balanchine)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "13th arrondissement",
    "address": "1 Rue George Balanchine, 75013 Paris, France",
    "coordinates": [
      48.8366094,
      2.3742132
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "13th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 13,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-7981quai",
    "name": "Burger King (79-81 Quai de la Gare)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "13th arrondissement",
    "address": "79-81 Quai de la Gare, 75013 Paris, France",
    "coordinates": [
      48.8365709,
      2.3742554
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "13th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 13,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-7880aven",
    "name": "Burger King (78-80 Avenue du Général Leclerc)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "14th arrondissement",
    "address": "78-80 Avenue du Général Leclerc, 75014 Paris, France",
    "coordinates": [
      48.8334797,
      2.3317706
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "14th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 14,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-84boulev",
    "name": "Burger King (84 Boulevard du Montparnasse)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "14th arrondissement",
    "address": "84 Boulevard du Montparnasse, 75014 Paris, France",
    "coordinates": [
      48.8428526,
      2.3264343
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "14th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 14,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-7ruelino",
    "name": "Burger King (7 Rue Linois (Immeuble Panoramic))",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "15th arrondissement",
    "address": "7 Rue Linois (Immeuble Panoramic), 75015 Paris, France",
    "coordinates": [
      48.83265,
      2.2868
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "15th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 15,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-286ruede",
    "name": "Burger King (286 Rue de Vaugirard)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "15th arrondissement",
    "address": "286 Rue de Vaugirard, 75015 Paris, France",
    "coordinates": [
      48.8385908,
      2.29876
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "15th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 15,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-18avenue",
    "name": "Burger King (18 Avenue du Président Kennedy)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "16th arrondissement",
    "address": "18 Avenue du Président Kennedy, 75016 Paris, France",
    "coordinates": [
      48.8567464,
      2.2862237
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "16th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 16,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-16ruedet",
    "name": "Burger King (16 Rue de Tilsitt)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "17th arrondissement",
    "address": "16 Rue de Tilsitt, 75017 Paris, France",
    "coordinates": [
      48.8752633,
      2.2957158
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "17th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 17,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-187avenu",
    "name": "Burger King (187 Avenue de Clichy)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "17th arrondissement",
    "address": "187 Avenue de Clichy, 75017 Paris, France",
    "coordinates": [
      48.8941191,
      2.3138201
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "17th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 17,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-3bouleva",
    "name": "Burger King (3 Boulevard Barbès)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "18th arrondissement",
    "address": "3 Boulevard Barbès, 75018 Paris, France",
    "coordinates": [
      48.8841783,
      2.3492448
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "18th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 18,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-2ruepier",
    "name": "Burger King (2 Rue Pierre Lescot)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "1st arrondissement",
    "address": "2 Rue Pierre Lescot, 75001 Paris, France",
    "coordinates": [
      48.8611288,
      2.3479354
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "1st arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 1,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-23placed",
    "name": "Burger King (23 Place de la République)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "3rd arrondissement",
    "address": "23 Place de la République, 75003 Paris, France",
    "coordinates": [
      48.8677699,
      2.3621723
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "3rd arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 3,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-63boulev",
    "name": "Burger King (63 Boulevard Saint-Michel)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "5th arrondissement",
    "address": "63 Boulevard Saint-Michel, 75005 Paris, France",
    "coordinates": [
      48.8474615,
      2.3412126
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "5th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 5,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-124ruela",
    "name": "Burger King (124 Rue La Boétie)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "8th arrondissement",
    "address": "124 Rue La Boétie, 75008 Paris, France",
    "coordinates": [
      48.8710492,
      2.3063295
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "8th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 8,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-36boulev",
    "name": "Burger King (36 Boulevard des Italiens)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "36 Boulevard des Italiens, 75009 Paris, France",
    "coordinates": [
      48.871272,
      2.3349687
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "burger-king-statione",
    "name": "Burger King (Station exterior)",
    "slug": "burger-king",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Burger King is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "Station exterior, 2 Rue d'Amsterdam, 75009 Paris, France",
    "coordinates": [
      48.884100000000004,
      2.34295
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://emploi.burgerking.fr/",
    "careersUrl": "https://emploi.burgerking.fr/nos-metiers/equipier/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Équipier•ère",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Part-time",
        "url": "https://emploi.burgerking.fr/nos-metiers/equipier/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=emploi.burgerking.fr&sz=128"
  },
  {
    "id": "kfc-102terra",
    "name": "KFC (102 Terrasse Boieldieu)",
    "slug": "kfc",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "KFC is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "102 Terrasse Boieldieu, 92800 Puteaux, France",
    "coordinates": [
      48.889231,
      2.2388969
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.kfc.fr/",
    "careersUrl": "https://fr.indeed.com/q-kfc-le-week-end-l-paris-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Equipier Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-kfc-le-week-end-l-paris-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=kfc.fr&sz=128"
  },
  {
    "id": "kfc-117ruesa",
    "name": "KFC (117 Rue Saint-Lazare)",
    "slug": "kfc",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "KFC is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "8th arrondissement",
    "address": "117 Rue Saint-Lazare, 75008 Paris, France",
    "coordinates": [
      48.8753238,
      2.3256897
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.kfc.fr/",
    "careersUrl": "https://fr.indeed.com/q-kfc-%C3%89quipier-polyvalent-l-paris-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Equipier Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "8th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-kfc-%C3%89quipier-polyvalent-l-paris-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 8,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=kfc.fr&sz=128"
  },
  {
    "id": "kfc-16boulev",
    "name": "KFC (16 Boulevard de Clichy)",
    "slug": "kfc",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "KFC is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "18th arrondissement",
    "address": "16 Boulevard de Clichy, 75018 Paris, France",
    "coordinates": [
      48.8825047,
      2.3380928
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.kfc.fr/",
    "careersUrl": "https://fr.indeed.com/q-kfc-l-paris-9e-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Equipier Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "18th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-kfc-l-paris-9e-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 18,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=kfc.fr&sz=128"
  },
  {
    "id": "kfc-76avenue",
    "name": "KFC (76 Avenue d'Italie)",
    "slug": "kfc",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "KFC is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "13th arrondissement",
    "address": "76 Avenue d'Italie, 75013 Paris, France",
    "coordinates": [
      48.826365,
      2.3569298
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.kfc.fr/",
    "careersUrl": "https://fr.indeed.com/emplois?jlid=38ec80440089288&q=equipier+polyvalent+en+temps+partiel+postes&rbl=Paris+%2875%29",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Equipier Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "13th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/emplois?jlid=38ec80440089288&q=equipier+polyvalent+en+temps+partiel+postes&rbl=Paris+%2875%29"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 13,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=kfc.fr&sz=128"
  },
  {
    "id": "kfc-94000crt",
    "name": "KFC (94000 Créteil)",
    "slug": "kfc",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "KFC is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "94000 Créteil, France",
    "coordinates": [
      48.7837981,
      2.4547405
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.kfc.fr/",
    "careersUrl": "https://fr.indeed.com/q-kfc-%C3%89quipier-polyvalent-l-paris-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Equipier Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-kfc-%C3%89quipier-polyvalent-l-paris-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=kfc.fr&sz=128"
  },
  {
    "id": "kfc-94120fon",
    "name": "KFC (94120 Fontenay-sous-Bois)",
    "slug": "kfc",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "KFC is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "94120 Fontenay-sous-Bois, France",
    "coordinates": [
      48.8512058,
      2.4739934
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.kfc.fr/",
    "careersUrl": "https://fr.indeed.com/q-kfc-%C3%89quipier-polyvalent-l-paris-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Equipier Polyvalent",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-kfc-%C3%89quipier-polyvalent-l-paris-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=kfc.fr&sz=128"
  },
  {
    "id": "decathlon-203boule",
    "name": "Decathlon (203 Boulevard Macdonald)",
    "slug": "decathlon",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Decathlon is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "19th arrondissement",
    "address": "203 Boulevard Macdonald, 75019 Paris, France",
    "coordinates": [
      48.8980142,
      2.3723564
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://joinus.decathlon.fr/",
    "careersUrl": "https://joinus.decathlon.fr/fr/annonce/3247217-vendeur-se-cdi-temps-partiel-a-partir-de-septembre-75019-paris?s_o=wttj",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Sales / Customer Service Advisor",
        "department": "E-Commerce & Retail",
        "location": "19th arr.",
        "type": "Part-time",
        "url": "https://joinus.decathlon.fr/fr/annonce/3247217-vendeur-se-cdi-temps-partiel-a-partir-de-septembre-75019-paris?s_o=wttj"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 19,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=joinus.decathlon.fr&sz=128"
  },
  {
    "id": "decathlon-46ruelou",
    "name": "Decathlon (4–6 Rue Louis Armand)",
    "slug": "decathlon",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Decathlon is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "15th arrondissement",
    "address": "4–6 Rue Louis Armand, 75015 Paris, France",
    "coordinates": [
      48.8327836,
      2.2769856
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://joinus.decathlon.fr/",
    "careersUrl": "https://joinus.decathlon.fr/en/annonce/4547765-conseiller-ere-vente-omnicanal-hf-cdi-temps-partiel-75015-paris-15e-arrondissement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Sales / Customer Service Advisor",
        "department": "E-Commerce & Retail",
        "location": "15th arr.",
        "type": "Part-time",
        "url": "https://joinus.decathlon.fr/en/annonce/4547765-conseiller-ere-vente-omnicanal-hf-cdi-temps-partiel-75015-paris-15e-arrondissement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 15,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=joinus.decathlon.fr&sz=128"
  },
  {
    "id": "monoprix-71ruesai",
    "name": "Monoprix (71 Rue Saint-Antoine)",
    "slug": "monoprix",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Monoprix is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "4th arrondissement",
    "address": "71 Rue Saint-Antoine, 75004 Paris, France",
    "coordinates": [
      48.8549,
      2.3622
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://recrutement.monoprix.fr/",
    "careersUrl": "https://fr.indeed.com/viewjob?jk=4a9bcf51dc510310",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Student part-time cashier / store employee",
        "department": "E-Commerce & Retail",
        "location": "4th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/viewjob?jk=4a9bcf51dc510310"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 4,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=recrutement.monoprix.fr&sz=128"
  },
  {
    "id": "carrefour-13rsiden",
    "name": "Carrefour (13 Résidence Martinval)",
    "slug": "carrefour",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Carrefour is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "13 Résidence Martinval, 78240 Chambourcy, France",
    "coordinates": [
      48.9062246,
      2.0297604
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://recrute.carrefour.fr/",
    "careersUrl": "https://fr.indeed.com/q-carrefour-job-%C3%89tudiant-l-paris-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Student commercial employee / cashier",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-carrefour-job-%C3%89tudiant-l-paris-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=recrute.carrefour.fr&sz=128"
  },
  {
    "id": "carrefour-280avenu",
    "name": "Carrefour (280 Avenue Gabriel Péri)",
    "slug": "carrefour",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Carrefour is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "280 Avenue Gabriel Péri, 78360 Montesson, France",
    "coordinates": [
      48.9281528,
      2.1450845
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://recrute.carrefour.fr/",
    "careersUrl": "https://fr.indeed.com/q-carrefour-temps-partiel-l-paris-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Student commercial employee / cashier",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-carrefour-temps-partiel-l-paris-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=recrute.carrefour.fr&sz=128"
  },
  {
    "id": "carrefour-75004par",
    "name": "Carrefour (75004 Paris)",
    "slug": "carrefour",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Carrefour is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "4th arrondissement",
    "address": "75004 Paris, France — exact street address not exposed in current listing, France",
    "coordinates": [
      48.857150000000004,
      2.3501000000000003
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://recrute.carrefour.fr/",
    "careersUrl": "https://fr.indeed.com/viewjob?jk=a8a19fc23ace8b18",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Student commercial employee / cashier",
        "department": "E-Commerce & Retail",
        "location": "4th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/viewjob?jk=a8a19fc23ace8b18"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 4,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=recrute.carrefour.fr&sz=128"
  },
  {
    "id": "carrefour-75006par",
    "name": "Carrefour (75006 Paris)",
    "slug": "carrefour",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Carrefour is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "6th arrondissement",
    "address": "75006 Paris, France — exact street address not exposed in current listing, France",
    "coordinates": [
      48.85515,
      2.3265
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://recrute.carrefour.fr/",
    "careersUrl": "https://fr.indeed.com/q-carrefour-%C3%89tudiant-l-cr%C3%A9teil-%2894%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Student commercial employee / cashier",
        "department": "E-Commerce & Retail",
        "location": "6th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-carrefour-%C3%89tudiant-l-cr%C3%A9teil-%2894%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 6,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=recrute.carrefour.fr&sz=128"
  },
  {
    "id": "carrefour-85routed",
    "name": "Carrefour (85 Route de Provins)",
    "slug": "carrefour",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Carrefour is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "85 Route de Provins, 94490 Ormesson-sur-Marne, France",
    "coordinates": [
      48.7936719,
      2.5543389
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://recrute.carrefour.fr/",
    "careersUrl": "https://fr.indeed.com/q-%C3%89tudiant-carrefour-l-paris-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Student commercial employee / cashier",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-%C3%89tudiant-carrefour-l-paris-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=recrute.carrefour.fr&sz=128"
  },
  {
    "id": "carrefour-routedes",
    "name": "Carrefour (Route des Petits Ponts)",
    "slug": "carrefour",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Carrefour is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Route des Petits Ponts, 93270 Sevran, France",
    "coordinates": [
      48.93945,
      2.53345
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://recrute.carrefour.fr/",
    "careersUrl": "https://fr.indeed.com/q-carrefour-%C3%89tudiant-l-paris-15e-%2875%29-emplois.html",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Student commercial employee / cashier",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://fr.indeed.com/q-carrefour-%C3%89tudiant-l-paris-15e-%2875%29-emplois.html"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=recrute.carrefour.fr&sz=128"
  },
  {
    "id": "franprix-230ruedu",
    "name": "Franprix (230 Rue du Faubourg Saint-Honoré)",
    "slug": "franprix",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Franprix is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "8th arrondissement",
    "address": "230 Rue du Faubourg Saint-Honoré, 75008 Paris, France",
    "coordinates": [
      48.8760275,
      2.3030413
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.franprix.fr/",
    "careersUrl": "https://fr.indeed.com/Paris-%2875%29-Emplois-Monoprix%2C-Franprix%2C-Carrefour",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store / cashier roles",
        "department": "E-Commerce & Retail",
        "location": "8th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/Paris-%2875%29-Emplois-Monoprix%2C-Franprix%2C-Carrefour"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 8,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=franprix.fr&sz=128"
  },
  {
    "id": "franprix-112ruesa",
    "name": "Franprix (112 Rue Saint-Antoine)",
    "slug": "franprix",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Franprix is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "4th arrondissement",
    "address": "112 Rue Saint-Antoine, 75004 Paris, France",
    "coordinates": [
      48.853411,
      2.3674051
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.franprix.fr/",
    "careersUrl": "https://fr.indeed.com/Paris-%2875%29-Emplois-Monoprix%2C-Franprix%2C-Carrefour",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store / cashier roles",
        "department": "E-Commerce & Retail",
        "location": "4th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/Paris-%2875%29-Emplois-Monoprix%2C-Franprix%2C-Carrefour"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 4,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=franprix.fr&sz=128"
  },
  {
    "id": "franprix-86boulev",
    "name": "Franprix (86 Boulevard Saint-Michel)",
    "slug": "franprix",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Franprix is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "5th arrondissement",
    "address": "86 Boulevard Saint-Michel, 75005 Paris, France",
    "coordinates": [
      48.8421352,
      2.3377597
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.franprix.fr/",
    "careersUrl": "https://fr.indeed.com/Paris-%2875%29-Emplois-Monoprix%2C-Franprix%2C-Carrefour",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store / cashier roles",
        "department": "E-Commerce & Retail",
        "location": "5th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/Paris-%2875%29-Emplois-Monoprix%2C-Franprix%2C-Carrefour"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 5,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=franprix.fr&sz=128"
  },
  {
    "id": "franprix-24ruedel",
    "name": "Franprix (24 Rue de l'Arrivée)",
    "slug": "franprix",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Franprix is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "14th arrondissement",
    "address": "24 Rue de l'Arrivée, 75014 Paris, France",
    "coordinates": [
      48.8430366,
      2.3219881
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.franprix.fr/",
    "careersUrl": "https://fr.indeed.com/Paris-%2875%29-Emplois-Monoprix%2C-Franprix%2C-Carrefour",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store / cashier roles",
        "department": "E-Commerce & Retail",
        "location": "14th arr.",
        "type": "Part-time",
        "url": "https://fr.indeed.com/Paris-%2875%29-Emplois-Monoprix%2C-Franprix%2C-Carrefour"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 14,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=franprix.fr&sz=128"
  },
  {
    "id": "lidl-210212av",
    "name": "Lidl (210-212 Avenue du Maine)",
    "slug": "lidl",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Lidl is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "14th arrondissement",
    "address": "210-212 Avenue du Maine, 75014 Paris, France",
    "coordinates": [
      48.8335908,
      2.3245435
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://jobs.lidl.fr/",
    "careersUrl": "https://jobs.lidl.fr/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store / cashier roles",
        "department": "E-Commerce & Retail",
        "location": "14th arr.",
        "type": "Part-time",
        "url": "https://jobs.lidl.fr/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 14,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=lidl.fr&sz=128"
  },
  {
    "id": "lidl-34rueder",
    "name": "Lidl (34 Rue de Reuilly)",
    "slug": "lidl",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Lidl is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "12th arrondissement",
    "address": "34 Rue de Reuilly, 75012 Paris, France",
    "coordinates": [
      48.8416938,
      2.393342
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://jobs.lidl.fr/",
    "careersUrl": "https://jobs.lidl.fr/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store / cashier roles",
        "department": "E-Commerce & Retail",
        "location": "12th arr.",
        "type": "Part-time",
        "url": "https://jobs.lidl.fr/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 12,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=lidl.fr&sz=128"
  },
  {
    "id": "action-bagnolet",
    "name": "Action (Bagnolet (93) — 45 openings)",
    "slug": "action",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Action is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Bagnolet (93) — 45 openings, France",
    "coordinates": [
      48.86335,
      2.34965
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.action.jobs/fr-fr/",
    "careersUrl": "https://www.action.jobs/fr-fr/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store employee",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.action.jobs/fr-fr/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=action.com&sz=128"
  },
  {
    "id": "action-pinaysur",
    "name": "Action (Épinay-sur-Seine (93))",
    "slug": "action",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Action is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Épinay-sur-Seine (93), France",
    "coordinates": [
      48.9525181,
      2.3145039
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.action.jobs/fr-fr/",
    "careersUrl": "https://www.action.jobs/fr-fr/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store employee",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.action.jobs/fr-fr/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=action.com&sz=128"
  },
  {
    "id": "action-asniress",
    "name": "Action (Asnières-sur-Seine (92))",
    "slug": "action",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Action is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Asnières-sur-Seine (92), France",
    "coordinates": [
      48.9105948,
      2.2890454
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.action.jobs/fr-fr/",
    "careersUrl": "https://www.action.jobs/fr-fr/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store employee",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.action.jobs/fr-fr/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=action.com&sz=128"
  },
  {
    "id": "action-houilles",
    "name": "Action (Houilles (78))",
    "slug": "action",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Action is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Houilles (78), France",
    "coordinates": [
      48.9229416,
      2.1868998
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.action.jobs/fr-fr/",
    "careersUrl": "https://www.action.jobs/fr-fr/",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Store employee",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.action.jobs/fr-fr/"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=action.com&sz=128"
  },
  {
    "id": "starbucks-bddescap",
    "name": "Starbucks (Bd des Capucines)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Bd des Capucines, Paris, France",
    "coordinates": [
      48.8701812,
      2.329548
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-avenuede",
    "name": "Starbucks (Avenue de l'Opéra)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Avenue de l'Opéra, Paris, France",
    "coordinates": [
      48.8683671,
      2.3332861
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-ruedelch",
    "name": "Starbucks (Rue de l'Échelle)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Rue de l'Échelle, Paris, France",
    "coordinates": [
      48.8645087,
      2.3347257
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-17bddeva",
    "name": "Starbucks (17 Bd de Vaugirard)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "15th arrondissement",
    "address": "17 Bd de Vaugirard, 75015 Paris, France",
    "coordinates": [
      48.8414513,
      2.3190734
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "15th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 15,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-ruedeber",
    "name": "Starbucks (Rue de Bercy)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Rue de Bercy, Paris, France",
    "coordinates": [
      48.8450637,
      2.3716115
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-4ruedu8m",
    "name": "Starbucks (4 Rue du 8 Mai 1945)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "10th arrondissement",
    "address": "4 Rue du 8 Mai 1945, 75010 Paris, France",
    "coordinates": [
      48.8766112,
      2.3596571
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "10th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 10,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-18rueded",
    "name": "Starbucks (18 Rue de Dunkerque)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "10th arrondissement",
    "address": "18 Rue de Dunkerque, 75010 Paris, France",
    "coordinates": [
      48.8812058,
      2.3544089
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "10th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 10,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-1crderom",
    "name": "Starbucks (1 Cr de Rome)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "8th arrondissement",
    "address": "1 Cr de Rome, 75008 Paris, France",
    "coordinates": [
      48.87225,
      2.3192000000000004
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "8th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 8,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-70bddumo",
    "name": "Starbucks (70 Bd du Montparnasse)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "14th arrondissement",
    "address": "70 Bd du Montparnasse, 75014 Paris, France",
    "coordinates": [
      48.843354,
      2.3249009
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "14th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 14,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-11bddesb",
    "name": "Starbucks (11 Bd de Sébastopol)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "1st arrondissement",
    "address": "11 Bd de Sébastopol, 75001 Paris, France",
    "coordinates": [
      48.8590015,
      2.3482684
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "1st arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 1,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-32bdhaus",
    "name": "Starbucks (32 Bd Haussmann)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "32 Bd Haussmann, 75009 Paris, France",
    "coordinates": [
      48.8728865,
      2.3346436
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-multiple",
    "name": "Starbucks (Multiple active points including level -3 and 1 Passage de La Canopée)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Multiple active points including level -3 and 1 Passage de La Canopée, France",
    "coordinates": [
      48.8524,
      2.3490499999999996
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-67ruelaf",
    "name": "Starbucks (67 Rue La Fayette)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "67 Rue La Fayette, 75009 Paris, France",
    "coordinates": [
      48.8761646,
      2.3446559
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-75001par",
    "name": "Starbucks (75001 Paris)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "1st arrondissement",
    "address": "75001 Paris, France",
    "coordinates": [
      48.8625842,
      2.3364289
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "1st arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 1,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-10rueduh",
    "name": "Starbucks (10 Rue du Havre)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "9th arrondissement",
    "address": "10 Rue du Havre, 75009 Paris, France",
    "coordinates": [
      48.875021,
      2.3268618
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "9th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 9,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-77rueram",
    "name": "Starbucks (77 Rue Rambuteau)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "1st arrondissement",
    "address": "77 Rue Rambuteau, 75001 Paris, France",
    "coordinates": [
      48.8619991,
      2.3497161
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "1st arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 1,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-24bdsain",
    "name": "Starbucks (24 Bd Saint-Michel)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "6th arrondissement",
    "address": "24 Bd Saint-Michel, 75006 Paris, France",
    "coordinates": [
      48.8509335,
      2.3427384
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "6th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 6,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-107avdef",
    "name": "Starbucks (107 Av. de France)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "13th arrondissement",
    "address": "107 Av. de France, 75013 Paris, France",
    "coordinates": [
      48.829903,
      2.3769431
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "13th arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 13,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "starbucks-7bdpoiss",
    "name": "Starbucks (7 Bd Poissonnière)",
    "slug": "starbucks",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Starbucks is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "2nd arrondissement",
    "address": "7 Bd Poissonnière, 75002 Paris, France",
    "coordinates": [
      48.8706981,
      2.3468723
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.starbucks.fr/recrutement",
    "careersUrl": "https://www.starbucks.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Barista / store team",
        "department": "E-Commerce & Retail",
        "location": "2nd arr.",
        "type": "Part-time",
        "url": "https://www.starbucks.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 2,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=starbucks.fr&sz=128"
  },
  {
    "id": "pret-a-manger-34ruedul",
    "name": "Pret A Manger (34 Rue du Louvre)",
    "slug": "pret-a-manger",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Pret A Manger is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "1st arrondissement",
    "address": "34 Rue du Louvre, 75001 Paris, France",
    "coordinates": [
      48.8636,
      2.3409
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.pret.co.uk/en-GB/pret-jobs",
    "careersUrl": "https://www.pret.co.uk/en-GB/pret-jobs",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Team Member / Service",
        "department": "E-Commerce & Retail",
        "location": "1st arr.",
        "type": "Part-time",
        "url": "https://www.pret.co.uk/en-GB/pret-jobs"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "arrondissementNumber": 1,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=pretamanger.fr&sz=128"
  },
  {
    "id": "dominos-pizza-ruetolbi",
    "name": "Domino's Pizza (Rue Tolbiac)",
    "slug": "dominos-pizza",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Domino's Pizza is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Rue Tolbiac, Paris, France",
    "coordinates": [
      48.8298749,
      2.3754891
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.dominos.fr/recrutement",
    "careersUrl": "https://www.dominos.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Delivery / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.dominos.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=dominos.fr&sz=128"
  },
  {
    "id": "dominos-pizza-ruelebon",
    "name": "Domino's Pizza (Rue Lebon)",
    "slug": "dominos-pizza",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Domino's Pizza is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Rue Lebon, Paris, France",
    "coordinates": [
      48.8813524,
      2.2915905
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.dominos.fr/recrutement",
    "careersUrl": "https://www.dominos.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Delivery / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.dominos.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=dominos.fr&sz=128"
  },
  {
    "id": "dominos-pizza-ruelegen",
    "name": "Domino's Pizza (Rue Legendre)",
    "slug": "dominos-pizza",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Domino's Pizza is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Rue Legendre, Paris, France",
    "coordinates": [
      48.8855215,
      2.3165707
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.dominos.fr/recrutement",
    "careersUrl": "https://www.dominos.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Delivery / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.dominos.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=dominos.fr&sz=128"
  },
  {
    "id": "dominos-pizza-ruebosio",
    "name": "Domino's Pizza (Rue Bosio)",
    "slug": "dominos-pizza",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Domino's Pizza is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Rue Bosio, Paris, France",
    "coordinates": [
      48.8492961,
      2.2653828
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.dominos.fr/recrutement",
    "careersUrl": "https://www.dominos.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Delivery / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.dominos.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=dominos.fr&sz=128"
  },
  {
    "id": "dominos-pizza-avenuedu",
    "name": "Domino's Pizza (Avenue du Général Leclerc)",
    "slug": "dominos-pizza",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Domino's Pizza is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Avenue du Général Leclerc, Bourg-la-Reine, France",
    "coordinates": [
      48.7871993,
      2.3184381
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.dominos.fr/recrutement",
    "careersUrl": "https://www.dominos.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Delivery / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.dominos.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=dominos.fr&sz=128"
  },
  {
    "id": "dominos-pizza-ruedepar",
    "name": "Domino's Pizza (Rue de Paris)",
    "slug": "dominos-pizza",
    "tagline": "Leading E-Commerce & Retail company in Paris",
    "description": "Domino's Pizza is a verified provider of e-commerce & retail services.",
    "type": "Scale-up",
    "stage": "Profitable / Public",
    "sector": "E-Commerce & Retail",
    "area": "Paris",
    "address": "Rue de Paris, Bobigny, France",
    "coordinates": [
      48.8544907,
      2.4161968
    ],
    "foundedYear": 2020,
    "fundingTotalEurM": 0.0,
    "fundingDisplay": "",
    "headcount": "50+",
    "hiringNow": true,
    "activeJobsCount": 1,
    "websiteUrl": "https://www.dominos.fr/recrutement",
    "careersUrl": "https://www.dominos.fr/recrutement",
    "brandColor": "#2E6F40",
    "tags": [
      "E-Commerce"
    ],
    "techStack": [],
    "founders": [],
    "jobs": [
      {
        "title": "Delivery / store team",
        "department": "E-Commerce & Retail",
        "location": "Paris",
        "type": "Part-time",
        "url": "https://www.dominos.fr/recrutement"
      }
    ],
    "dateAdded": "2026-08-21T00:00:00.000Z",
    "isBoosted": false,
    "customLogoUrl": "https://www.google.com/s2/favicons?domain=dominos.fr&sz=128"
  }
];
