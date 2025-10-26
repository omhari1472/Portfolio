export const PERSONAL_INFO = {
  name: 'Hari Om',
  title: 'Full-Stack Developer & AI Engineer',
  location: 'Bengaluru, Karnataka, India',
  email: 'omhari1472@gmail.com',
  github: 'https://github.com/omhari1472',
  linkedin: 'https://www.linkedin.com/in/om-hari/',
  bio: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
} as const;

export const STATS = [
  {
    label: 'CGPA',
    value: '8.4/10',
    description: 'Academic Excellence',
  },
  {
    label: 'Experience',
    value: '1+ Year',
    description: 'Professional Work',
  },
  {
    label: 'Projects',
    value: '15+',
    description: 'Completed Successfully',
  },
  {
    label: 'Efficiency',
    value: '90%',
    description: 'Improvement Achieved',
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
