export const PERSONAL_INFO = {
  name: 'Hari Om',
  title: 'AI Systems Engineer · Distributed Infrastructure',
  location: 'Bengaluru, India · Open to Remote & Relocation (UK/US)',
  email: 'omhari1472@gmail.com',
  github: 'https://github.com/omhari1472',
  linkedin: 'https://www.linkedin.com/in/om-hari/',
  bio: "I build backend systems and AI agents that operate at production scale. Currently running a 100,000+ email/day dispatch engine and an AI orchestration layer for a London-based outreach startup. Open to senior backend, infrastructure, and AI engineering roles at US/UK startups.",
} as const;

export const STATS = [
  {
    label: 'Emails / Day',
    value: '100k+',
    description: 'Dispatch Engine at Scale',
  },
  {
    label: 'Chrome Users',
    value: '3k+',
    description: 'Across Published Extensions',
  },
  {
    label: 'Workflow Reduction',
    value: '90%',
    description: 'Via AI Automation',
  },
  {
    label: 'Availability',
    value: 'Remote',
    description: 'Open to UK / US Relocation',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: PERSONAL_INFO.github,
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: PERSONAL_INFO.linkedin,
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: 'Mail',
  },
] as const;
