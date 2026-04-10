'use client';

import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { slideUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 'watevs-sde',
    company: 'OutEngine',
    location: 'London, United Kingdom (Remote)',
    role: 'Software Engineer',
    period: 'February 2026 - Present',
    type: 'Full-time',
    tags: ['NestJS', 'TypeScript', 'Redis', 'BullMQ', 'IMAP', 'OAuth2', 'SvelteKit'],
    achievements: [
      'Built Surtur — a distributed email dispatch and warmup engine processing 100,000+ emails/day across rotating mailboxes, with a 5-queue Redis/BullMQ architecture (send, interact, action, analytics, monitoring)',
      'Engineered IMAP connection pooling with per-account OAuth2 token refresh (mutex-guarded to prevent race conditions) and ImapInteractionApi for inbox placement simulation',
      'Implemented DSN bounce detection (RFC 3464), real-time seed health scoring, per-mailbox deliverability analytics, and webhook-based alerting with cooldown logic',
      'Building an AI orchestration agent that routes a single customer natural language prompt across 4 services — data sourcing, contact enrichment, inbox warmup, and sequence execution — replacing ~2 hours of manual campaign setup',
      'Shipped a SvelteKit ops dashboard for campaign management, sequence builder, seed monitor, and weekly performance reporting — in active production use',
    ],
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    id: 'nxtjob-sde',
    company: 'NxtJob.ai',
    location: 'Bengaluru, Karnataka',
    role: 'Software Development Engineer',
    period: 'June 2025 - January 2026',
    type: 'Full-time',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'LLMs', 'RAG'],
    achievements: [
      'Revamped LinkedIn & WhatsApp Chrome extensions, implementing advanced chat categorization and scheduling, increasing user engagement by 30% among 2K users',
      'Developed an AI Chat Reply system leveraging LLMs + RAG to generate context-aware replies, improving reliability by 40% across 500+ daily active users',
      'Created an AI-powered LinkedIn Optimizer (AI-generated About/Headline, keyword scoring, auto-connection notes), enhancing recruiter response rates',
      'Addressed payment inefficiencies by engineering a multi-gateway transaction platform (PhonePe, Paytm, Razorpay, Cashfree, Stripe), automating invoicing and access control and boosting efficiency by 25%',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'nxtjob-intern',
    company: 'NxtJob.ai',
    location: 'Bengaluru, Karnataka',
    role: 'Software Development Intern',
    period: 'September 2024 - May 2025',
    type: 'Internship',
    tags: ['React', 'MySQL', 'Drizzle ORM', 'AWS SES', 'AI/ML'],
    achievements: [
      'Built Omega — an LLM + RAG pipeline for job-specific resume generation that reduced creation time from 30 days to 3–5 days (90% reduction) for 500+ users; owned the project from concept to production deployment',
      'Built role-based ERP/CRM backend handling 10,000+ monthly records with Google Calendar sync (sub-200ms event updates, 100+ concurrent users) and a Google Drive-like nested file system',
      'Developed AWS SES mail automation engine with engagement tracking, cutting redundant email sends by 50% across the platform',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora blobs — animated */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,0,110,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -20, 10, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 20, -10, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 5 }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12" style={{ background: 'rgba(249,115,22,0.4)' }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: '#F97316', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}>
              Experience
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide mb-3"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif', color: '#F0EDE8' }}
          >
            Work <span className="text-gradient">History</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: '#666' }}>
            Distributed systems, AI agents, and production-grade infrastructure — remote for a London startup
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={slideUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <SpotlightCard className="glass-elite p-8 rounded-2xl group" spotlightColor="rgba(139,92,246,0.1)">
                {/* Animated gradient bar */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${exp.gradient} rounded-full mb-6`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.1 }}
                />

                {/* Company & Role */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-accent-cyan bg-accent-cyan/10 px-3 py-1.5 rounded-full border border-accent-cyan/20">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium text-sm">{exp.period}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-xs font-mono text-accent-cyan rounded-md transition-colors hover:bg-primary/20 cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Achievements — staggered slide-in */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">Key Achievements:</h4>
                  <motion.ul
                    className="space-y-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                  >
                    {exp.achievements.map((achievement) => (
                      <motion.li
                        key={achievement.substring(0, 30)}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                        }}
                        className="flex gap-3 text-muted-foreground"
                      >
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
