export const projects = [
  {
    id: 'ai-orchestration-agent',
    title: 'AI Outbound Orchestration Agent',
    description:
      'An AI agent that collapses a 4-service outbound sales pipeline into a single natural language prompt — routing across data sourcing, contact enrichment, inbox warmup, and sequence execution autonomously.',
    impact: 'Replaces ~2 hours of manual campaign setup with one customer prompt — end-to-end pipeline execution',
    tags: ['AI Agent', 'LLM', 'Tool Routing', 'NestJS', 'TypeScript', 'Multi-Service Orchestration'],
    gradient: 'from-violet-500 to-fuchsia-500',
    featured: true,
  },
  {
    id: 'surtur-engine',
    title: 'Surtur — Email Dispatch & Warmup Engine',
    description:
      'Distributed email infrastructure processing 100,000+ emails/day across rotating mailboxes. 5-queue Redis/BullMQ architecture with IMAP connection pooling, OAuth token management, DSN bounce detection, and real-time deliverability scoring.',
    impact: '100,000+ emails/day · 5-queue event pipeline · hundreds of rotating mailboxes managed in production',
    tags: ['NestJS', 'Redis', 'BullMQ', 'IMAP', 'OAuth2', 'TypeScript', 'SvelteKit'],
    gradient: 'from-orange-500 to-amber-400',
    featured: true,
  },
  {
    id: 'nxtjob-chrome-suite',
    title: 'NxtJob AI Chrome Extension Suite',
    description:
      'AI-powered LinkedIn productivity extension with LLM-generated profile copy, RAG-based chat replies, and job tracking board. Built with Plasmo and Shadow DOM injection for reliable operation inside LinkedIn\'s dynamic React UI.',
    impact: '3,000+ Chrome Web Store installs · 4.6★ rating · 500+ daily active users on AI reply feature',
    tags: ['Plasmo', 'TypeScript', 'LLM', 'RAG', 'Chrome Extensions', 'Shadow DOM'],
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
  },
  {
    id: 'narad-ext',
    title: 'Narad — WhatsApp Bulk Sender & CRM',
    description:
      'My own rebuilt WhatsApp outreach extension with anti-ban safe mode, bulk messaging, contact management, CSV import, and campaign tracking. Built with Plasmo, Redux Persist, and Zod — architected for reliability and scale.',
    impact: 'Personal product · in development · launching on Chrome Web Store',
    tags: ['Plasmo', 'TypeScript', 'Redux', 'Zod', 'Chrome Extensions', 'CRM'],
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
  },
  {
    id: 'postly-ext',
    title: 'Postly — LinkedIn AI Post Writer',
    description:
      'My own LinkedIn AI writing assistant with content calendar and engagement tracking. AI-generated post drafts, scheduling, and performance analytics — built entirely independently.',
    impact: 'Personal product · in development · launching on Chrome Web Store',
    tags: ['Plasmo', 'TypeScript', 'AI/ML', 'LinkedIn API', 'Chrome Extensions'],
    gradient: 'from-blue-400 to-indigo-500',
    featured: false,
  },
  {
    id: 'omega',
    title: 'Omega — AI Job Analysis & Resume Engine',
    description:
      'LLM + RAG pipeline for job-specific resume generation and skill mapping. Integrated into NxtJob\'s core product flow and used by hundreds of active job seekers.',
    impact: 'Reduced resume creation from 30 days to 3–5 days (90% time reduction) for 500+ users',
    tags: ['AI/ML', 'Next.js', 'Node.js', 'LLM', 'RAG', 'TypeScript'],
    gradient: 'from-purple-500 to-pink-500',
    featured: false,
  },
  {
    id: 'google-calendar-npm',
    title: 'Google Calendar Client (NPM Package)',
    description:
      'Zero-dependency TypeScript NPM package for Google Calendar API integration with OAuth2 auto-refresh token management and full event CRUD support.',
    impact: '150+ downloads in first 4 days after publish',
    tags: ['TypeScript', 'Google Calendar API', 'OAuth2', 'NPM', 'Open Source'],
    gradient: 'from-teal-500 to-green-500',
    featured: false,
  },
  {
    id: 'payment-gateway',
    title: 'Multi-Gateway Payment Platform',
    description:
      'Unified payment layer across PhonePe, Paytm, Razorpay, Cashfree, and Stripe with automated invoicing, subscription management, and access control.',
    impact: '25% boost in transactional efficiency · full subscription lifecycle automation',
    tags: ['Node.js', 'TypeScript', 'Stripe', 'Razorpay', 'PhonePe', 'Cashfree'],
    gradient: 'from-indigo-500 to-purple-500',
    featured: false,
  },
  {
    id: 'erp-crm',
    title: 'Role-based ERP & CRM Backend',
    description:
      'Multi-tenant backend with Google Calendar sync (sub-200ms event updates), Google Drive-like file system, AWS SES automation, and support for 100+ concurrent users across 10,000+ monthly records.',
    impact: '30% operational efficiency improvement · 50% reduction in redundant emails via SES automation',
    tags: ['Next.js', 'Node.js', 'MySQL', 'Drizzle ORM', 'AWS SES', 'TypeScript'],
    gradient: 'from-cyan-500 to-blue-500',
    featured: false,
  },
];
