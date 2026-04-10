'use client';

import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { slideUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, Play, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 'ai-orchestration-agent',
    title: 'AI Outbound Orchestration Agent',
    description:
      'An AI agent that collapses a 4-service outbound sales pipeline into a single natural language prompt. Routes autonomously across data sourcing, contact enrichment, inbox warmup, and sequence execution — replacing ~2 hours of manual campaign setup.',
    impact: 'One prompt → full campaign live · 4 services orchestrated end-to-end',
    tags: ['AI Agent', 'LLM', 'Tool Routing', 'NestJS', 'TypeScript'],
    gradient: 'from-violet-500 to-fuchsia-500',
    featured: true,
    type: 'company-private',
    hasDemo: false,
    // demoVideo: 'https://loom.com/share/your-loom-id-here',  ← paste Loom URL when ready
    size: 'large',
  },
  {
    id: 'surtur-engine',
    title: 'Surtur — Email Dispatch & Warmup Engine',
    description:
      'Distributed email infrastructure processing 100,000+ emails/day across rotating mailboxes. Multi-queue event architecture with connection pooling, token lifecycle management, bounce detection, and real-time deliverability scoring.',
    impact: '100,000+ emails/day · 5-queue pipeline · hundreds of mailboxes in production',
    tags: ['NestJS', 'Redis', 'BullMQ', 'IMAP', 'OAuth2', 'TypeScript'],
    gradient: 'from-orange-500 to-amber-400',
    featured: true,
    type: 'company-private',
    hasDemo: false,
    // demoVideo: 'https://loom.com/share/your-loom-id-here',  ← paste Loom URL when ready
    size: 'large',
  },
  {
    id: 'nxtjob-chrome-suite',
    title: 'NxtJob AI Chrome Extension Suite',
    description:
      'AI-powered LinkedIn productivity extension — LLM-generated profile copy, RAG-based chat replies, and job tracking board. Built with Plasmo and Shadow DOM injection for reliable operation inside LinkedIn\'s dynamic React UI.',
    impact: '3,000+ installs · 4.6★ Chrome Web Store · 500+ daily active users',
    tags: ['Plasmo', 'TypeScript', 'LLM', 'RAG', 'Shadow DOM'],
    gradient: 'from-blue-500 to-indigo-500',
    featured: true,
    type: 'company',
    hasDemo: true,
    demoUrl: 'https://chromewebstore.google.com/detail/oedechpcnjolalnpghbibmadgfjgaopm',
    size: 'normal',
  },
  {
    id: 'narad-ext',
    title: 'Narad — WhatsApp Bulk Sender & CRM',
    description:
      'My own WhatsApp outreach extension with anti-ban safe mode, bulk messaging, contact management, CSV import, and campaign tracking. Built with Plasmo, Redux Persist, and Zod — designed for reliability at scale.',
    impact: 'Personal product · launching on Chrome Web Store',
    tags: ['Plasmo', 'TypeScript', 'Redux', 'Zod', 'Chrome Extension'],
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
    type: 'personal',
    hasDemo: false,
    size: 'normal',
  },
  {
    id: 'postly-ext',
    title: 'Postly — LinkedIn AI Post Writer',
    description:
      'My own LinkedIn AI writing assistant with content calendar and engagement tracking. AI-generated post drafts, scheduling, and performance analytics — built entirely independently.',
    impact: 'Personal product · launching on Chrome Web Store',
    tags: ['Plasmo', 'TypeScript', 'AI/ML', 'Chrome Extension'],
    gradient: 'from-blue-400 to-indigo-400',
    featured: false,
    type: 'personal',
    hasDemo: false,
    size: 'normal',
  },
  {
    id: 'google-calendar-npm',
    title: 'Google Calendar Client (NPM)',
    description:
      'Zero-dependency TypeScript NPM package for Google Calendar API with OAuth2 auto-refresh token management and full event CRUD. Published and maintained independently.',
    impact: '150+ downloads in first 4 days after publish',
    tags: ['TypeScript', 'OAuth2', 'NPM', 'Google Calendar API'],
    gradient: 'from-teal-500 to-cyan-500',
    featured: false,
    type: 'personal',
    hasDemo: true,
    demoUrl: 'https://www.npmjs.com/package/google-calendar-client',
    size: 'normal',
  },
  {
    id: 'omega',
    title: 'Omega — AI Resume Engine',
    description:
      'LLM + RAG pipeline for job-specific resume generation and skill mapping. Reduced resume creation from 30 days to 3–5 days for 500+ users. Integrated into NxtJob\'s core product flow.',
    impact: '90% time reduction · 500+ users · production',
    tags: ['LLM', 'RAG', 'Next.js', 'Node.js', 'OpenAI'],
    gradient: 'from-purple-500 to-pink-500',
    featured: false,
    type: 'company-private',
    hasDemo: false,
    size: 'normal',
  },
  {
    id: 'erp-crm',
    title: 'Role-based ERP & CRM Backend',
    description:
      'Multi-tenant backend with Google Calendar sync (sub-200ms updates), Google Drive-like file system, AWS SES automation, and support for 100+ concurrent users across 10,000+ monthly records.',
    impact: '30% efficiency gain · 50% redundant email reduction via SES',
    tags: ['Node.js', 'MySQL', 'Drizzle ORM', 'AWS SES', 'TypeScript'],
    gradient: 'from-cyan-500 to-blue-500',
    featured: false,
    type: 'company-private',
    hasDemo: false,
    size: 'normal',
  },
];

const categories = ['All', 'Infrastructure', 'AI / Agents', 'Chrome Extensions', 'Open Source'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : selectedCategory === 'Infrastructure'
        ? projects.filter((p) => ['surtur-engine', 'erp-crm', 'google-calendar-npm'].includes(p.id))
        : selectedCategory === 'AI / Agents'
          ? projects.filter((p) => ['ai-orchestration-agent', 'omega', 'nxtjob-chrome-suite'].includes(p.id))
          : selectedCategory === 'Chrome Extensions'
            ? projects.filter((p) => p.tags.some((t) => t.includes('Chrome Extension') || t.includes('Plasmo')))
            : selectedCategory === 'Open Source'
              ? projects.filter((p) => p.type === 'personal')
              : projects;

  return (
    <section id="projects" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.3) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,0,110,0.25) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -25, 15, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 5 }}
      />

      <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12" style={{ background: 'rgba(249,115,22,0.4)' }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: '#F97316', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}>
              Projects
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide mb-3"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif', color: '#F0EDE8' }}
          >
            Built in <span className="text-gradient">Production</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: '#666' }}>
            Production systems, AI agents, and independent products — built at scale
          </p>
        </motion.div>

        {/* Category Filter — animated pill */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                selectedCategory === category ? 'text-white' : 'text-muted-foreground hover:text-white'
              }`}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-primary"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  style={{ zIndex: -1 }}
                />
              )}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Bento Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={slideUp}
                layout
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={cn('rounded-2xl overflow-hidden group h-full', project.size === 'large' ? 'lg:col-span-2' : 'col-span-1')}
              >
                <SpotlightCard className="glass rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Animated gradient top bar */}
                  <motion.div
                    className={`h-1.5 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
                  />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Title & Badges */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold transition-all group-hover:text-gradient">{project.title}</h3>
                      <div className="flex gap-2 flex-col items-end ml-2 flex-shrink-0">
                        {project.featured && (
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                            Featured
                          </span>
                        )}
                        <span
                          className={cn(
                            'px-2 py-1 text-xs font-medium rounded-full',
                            project.type === 'personal' && 'bg-teal-500/20 text-teal-400',
                            project.type === 'company' && 'bg-blue-500/20 text-blue-400',
                            project.type === 'company-private' && 'bg-orange-500/20 text-orange-400'
                          )}
                        >
                          {project.type === 'personal' ? 'Own Product' : project.type === 'company' ? 'Live' : 'Proprietary'}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{project.description}</p>

                    {/* Impact Badge */}
                    <div className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 w-fit">
                      <TrendingUp className="w-3.5 h-3.5 text-accent-cyan" />
                      <span className="text-xs font-bold text-accent-cyan tracking-wide">{project.impact}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 text-primary/80 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-auto flex-wrap">
                      {(project as { demoVideo?: string }).demoVideo && (
                        <a
                          href={(project as { demoVideo?: string }).demoVideo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 gap-2 justify-center items-center px-4 py-2 font-medium text-white rounded-lg transition-all duration-300 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 text-sm"
                        >
                          <Play className="w-4 h-4" />
                          Watch Demo
                        </a>
                      )}
                      {project.hasDemo ? (
                        <a
                          href={(project as { demoUrl?: string }).demoUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 gap-2 justify-center items-center px-4 py-2 font-medium text-white rounded-lg transition-all duration-300 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {project.tags.includes('NPM') || project.tags.includes('Google Calendar API')
                            ? 'View on NPM'
                            : project.tags.some((t) => t.includes('Chrome Extension') || t.includes('Plasmo'))
                              ? 'View on Chrome Store'
                              : 'View Demo'}
                        </a>
                      ) : !(project as { demoVideo?: string }).demoVideo && (
                        <div className="flex flex-1 gap-2 justify-center items-center px-4 py-2 font-medium rounded-lg text-sm" style={{ background: 'rgba(255,255,255,0.04)', color: '#555' }}>
                          Proprietary
                        </div>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/omhari1472"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-2 items-center px-8 py-3 font-medium text-white rounded-full transition-all duration-300 glass hover:bg-white/10 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
