import { StrategicValue, ServiceOffer, WorkflowStep } from './types';

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
