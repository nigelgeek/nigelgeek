import { StrategicValue, ServiceOffer, WorkflowStep, PortfolioWork } from './types';

export const STRATEGIC_VALUES: StrategicValue[] = [
  {
    id: 'value-1',
    title: 'Strategic Vision',
    description: 'Every solution is designed with scalability and long-term value in mind, not just code, but a digital strategy.',
    iconName: 'LayoutGrid',
  },
  {
    id: 'value-2',
    title: 'Technical Depth',
    description: 'Years of hands-on experience across networking, cloud, and software systems ensure every project runs with precision.',
    iconName: 'Activity',
  },
  {
    id: 'value-3',
    title: 'Innovation-Driven',
    description: 'I integrate modern tools and AI capabilities to keep your business ahead of the curve.',
    iconName: 'Sparkles',
  },
];

export const SERVICE_OFFERS: ServiceOffer[] = [
  {
    id: 'service-1',
    number: '01',
    title: 'Web Development',
    description: 'Build powerful, secure, and scalable web solutions that work seamlessly across devices. Optimized for performance and visibility.',
    tags: ['REACT', 'NODE.JS','WORDPRESS'],
    iconName: 'Code',
  },
  {
    id: 'service-2',
    number: '02',
    title: 'IT Consultancy',
    description: 'Transform your technology infrastructure with expert guidance on cybersecurity, systems design, and process optimization.',
    tags: ['SECURITY', 'ARCHITECTURE', 'AUDIT', 'CLOUD'],
    iconName: 'ShieldAlert',
  },
  {
    id: 'service-3',
    number: '03',
    title: 'AI Automation',
    description: 'Leverage artificial intelligence to automate workflows and reduce costs. I design AI agents and intelligent automation pipelines.',
    tags: ['LLM', 'WORKFLOW', 'AGENTS', 'ORCHESTRATION'],
    iconName: 'Bot',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'step-1',
    number: '01',
    title: 'Discovery',
    description: 'Understanding your goals, pain points, and desired outcomes.',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Design',
    description: 'Creating tailored blueprints, technical architecture, workflows, and user flow designs.',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Development',
    description: 'Building, testing, and integrating solutions that perform reliably in real-world conditions.',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Launch & Support',
    description: 'Deployment, optimization, and ongoing maintenance to ensure consistent results.',
  },
];

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: 'work-1',
    title: 'Lynchpin Global',
    description: 'Corporate platform for a private equity firm, showcasing alternative investment strategies and business ventures with a polished, trust-driven presence.',
    url: 'https://lynchpinglobal.com/',
    category: 'Corporate',
    tags: ['WORDPRESS', 'CORPORATE', 'RESPONSIVE'],
    year: '2024',
  },
  {
    id: 'work-2',
    title: 'French with Chantelle',
    description: 'Warm, conversion-focused site for a French language tutor, built to attract learners and make booking lessons effortless.',
    url: 'https://www.frenchwithchantelle.com/',
    category: 'Education',
    tags: ['WORDPRESS', 'EDUCATION', 'LEAD GEN'],
    year: '2024',
  },
  {
    id: 'work-3',
    title: 'Accra College of Medicine',
    description: 'Institutional website for one of Ghana\'s first private medical universities, presenting academic programs, admissions, and campus life with credibility and clarity.',
    url: 'https://acm.edu.gh/',
    category: 'Education',
    tags: ['WORDPRESS', 'INSTITUTIONAL', 'EVENTS'],
    year: '2024',
  },
  {
    id: 'work-4',
    title: 'OAA 1980',
    description: 'Alumni association platform for the Old Achimotan Association, preserving legacy, connecting members, and celebrating decades of shared history.',
    url: 'https://oaa80.org/',
    category: 'Community',
    tags: ['WORDPRESS', 'COMMUNITY', 'MEMBERSHIP'],
    year: '2024',
  },
  {
    id: 'work-5',
    title: 'Anidaso 360',
    description: 'Purpose-driven site for a non-profit empowering marginalized communities through education, advocacy, and global citizenship.',
    url: 'https://anidaso360.com/',
    category: 'Non-Profit',
    tags: ['WORDPRESS', 'NON-PROFIT', 'IMPACT'],
    year: '2024',
  },
  {
    id: 'work-6',
    title: 'African Towers',
    description: 'Industrial web presence for a power infrastructure company, communicating Power-as-a-Service offerings with clarity and authority.',
    url: 'https://africantowers.com/',
    category: 'Industrial',
    tags: ['WORDPRESS', 'INDUSTRIAL', 'B2B'],
    year: '2024',
  },
  {
    id: 'work-7',
    title: 'SDR Global',
    description: 'Modern Next.js platform for a sales development solutions firm, built for performance, lead generation, and global reach.',
    url: 'https://www.sdrglobal.io/',
    category: 'SaaS / B2B',
    tags: ['NEXT.JS', 'REACT', 'PERFORMANCE'],
    year: '2024',
  },
];
