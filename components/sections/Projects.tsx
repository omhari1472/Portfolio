'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { slideUp, staggerContainer } from '@/lib/animations';

const projects = [
  {
    id: 'research-sync',
    title: 'Research Sync',
    description:
      'Personal project: Collaborative research platform with real-time multi-user editing, custom version control, and Google Scholar integration. Features auto-save and document segmentation.',
    impact: '20% productivity increase',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'Quill.js'],
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
    type: 'personal',
    hasDemo: true,
  },
  {
    id: 'google-calendar-npm',
    title: 'Google Calendar Client (NPM)',
    description:
      'Personal NPM package for seamless Google Calendar integration with auto-refresh token management. Zero external dependencies, built for production use. Published 4 days ago with 150+ downloads.',
    impact: '150+ downloads in 4 days',
    tags: ['NPM', 'Google Calendar API', 'Node.js', 'TypeScript'],
    gradient: 'from-green-500 to-teal-500',
    featured: true,
    type: 'personal',
    hasDemo: true,
    demoUrl: 'https://www.npmjs.com/package/google-calendar-client',
  },
  {
    id: 'linkedin-extension',
    title: 'NxtJob AI LinkedIn Optimizer',
    description:
      'Chrome extension built with Plasmo framework using Shadow DOM. AI-powered LinkedIn optimization with job tracking, profile enhancement, and networking tools. Featured on Chrome Web Store with 4.6★ rating and 3,000+ users.',
    impact: '4.6★ rating, 3,000+ users',
    tags: ['Chrome Extension', 'Plasmo', 'AI/ML', 'Shadow DOM'],
    gradient: 'from-blue-600 to-indigo-500',
    featured: true,
    type: 'company',
    hasDemo: true,
    demoUrl: 'https://chromewebstore.google.com/detail/oedechpcnjolalnpghbibmadgfjgaopm',
  },
  {
    id: 'whatsapp-extension',
    title: 'WAsurge - WhatsApp CRM Extension',
    description:
      'Chrome extension that transforms WhatsApp Web into a powerful CRM. Features bulk messaging, contact management, CSV uploads, and progress tracking. Built with Plasmo and Shadow DOM. Perfect 5.0★ rating with 282+ users.',
    impact: '5.0★ rating, 282+ users',
    tags: ['Chrome Extension', 'Plasmo', 'CRM', 'Shadow DOM'],
    gradient: 'from-green-600 to-emerald-500',
    featured: true,
    type: 'company',
    hasDemo: true,
    demoUrl: 'https://chromewebstore.google.com/detail/bdnjmmbbchjkbnmbphchknkalfakofnj',
  },
  {
    id: 'payment-gateway',
    title: 'NxtJob Payment Platform',
    description:
      'Production payment platform supporting multiple Indian gateways (PhonePe, Paytm, Razorpay, Cashfree, Stripe). Features automated invoicing, subscription management, and access control for job platform services.',
    impact: '25% efficiency boost',
    tags: ['Node.js', 'Payment APIs', 'Automation'],
    gradient: 'from-indigo-500 to-purple-500',
    type: 'company',
    hasDemo: true,
    demoUrl: 'https://pay.nxtjob.ai/ignite',
  },
  {
    id: 'omega',
    title: 'Omega (AI Job Platform)',
    description:
      'Enterprise AI platform for job analysis, skill mapping, and resume generation. Proprietary product with advanced LLM integration and RAG techniques.',
    impact: '90% time reduction (30 days → 3-5 days)',
    tags: ['AI/ML', 'Next.js', 'Node.js', 'OpenAI', 'RAG'],
    gradient: 'from-purple-500 to-pink-500',
    type: 'company-private',
    hasDemo: false,
  },
  {
    id: 'erp-crm',
    title: 'Enterprise ERP & CRM',
    description:
      'In-house role-based enterprise system with file management, calendar integration, and workflow automation. Handles 10K+ monthly records with advanced data synchronization.',
    impact: '30% operational efficiency',
    tags: ['React', 'Node.js', 'MySQL', 'Drizzle ORM'],
    gradient: 'from-emerald-500 to-teal-500',
    type: 'company-private',
    hasDemo: false,
  },
];

const categories = ['All', 'Personal', 'Company Public', 'Company Private', 'Chrome Extension', 'AI/ML'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : selectedCategory === 'Personal'
        ? projects.filter((project) => project.type === 'personal')
        : selectedCategory === 'Company Public'
          ? projects.filter((project) => project.type === 'company')
          : selectedCategory === 'Company Private'
            ? projects.filter((project) => project.type === 'company-private')
            : projects.filter((project) => project.tags.includes(selectedCategory));


  return (
    <section id="projects" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-accent-cyan/10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-accent-pink/10" />

      <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl font-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Building innovative solutions that drive real business impact
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg shadow-primary/50'
                  : 'glass text-muted-foreground hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
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
                className={`glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6">
                  {/* Title & Badges */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold transition-all group-hover:text-gradient">{project.title}</h3>
                    <div className="flex gap-2 flex-col items-end">
                      {project.featured && (
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                          Featured
                        </span>
                      )}
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          project.type === 'personal'
                            ? 'bg-blue-500/20 text-blue-400'
                            : project.type === 'open-source'
                              ? 'bg-green-500/20 text-green-400'
                              : project.type === 'company'
                                ? 'bg-purple-500/20 text-purple-400'
                                : 'bg-orange-500/20 text-orange-400'
                        }`}
                      >
                        {project.type === 'personal'
                          ? 'Personal'
                          : project.type === 'open-source'
                            ? 'Open Source'
                            : project.type === 'company'
                              ? 'Public'
                              : 'Private'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{project.description}</p>

                  {/* Impact Badge */}
                  <div className="flex gap-2 items-center mb-4">
                    <TrendingUp className="w-4 h-4 text-accent-cyan" />
                    <span className="text-sm font-semibold text-accent-cyan">{project.impact}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {project.hasDemo ? (
                      <a
                        href={project.demoUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 gap-2 justify-center items-center px-4 py-2 font-medium text-white rounded-lg transition-all duration-300 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.tags.includes('NPM')
                          ? 'View on NPM'
                          : project.tags.includes('Chrome Extension')
                            ? 'View Extension'
                            : project.tags.includes('Payment APIs')
                              ? 'View Platform'
                              : 'View Demo'}
                      </a>
                    ) : (
                      <div className="flex flex-1 gap-2 justify-center items-center px-4 py-2 font-medium text-muted-foreground rounded-lg bg-white/5">
                        <span className="text-sm">Proprietary Project</span>
                      </div>
                    )}
                  </div>
                </div>
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
