'use client';

import { CountUp } from '@/components/ui/CountUp';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { slideUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Award, MapPin, TrendingUp, Users } from 'lucide-react';

const stats = [
  { id: 'emails', icon: TrendingUp, label: 'Emails / Day', value: '100k+', color: 'text-primary' },
  { id: 'users', icon: Users, label: 'Chrome Users', value: '3k+', color: 'text-accent-cyan' },
  { id: 'efficiency', icon: Award, label: 'Workflow Reduction', value: '90%', color: 'text-accent-neon' },
  { id: 'location', icon: MapPin, label: 'Open to Relocation', value: 'UK / US', color: 'text-accent-pink' },
];

const journey = [
  {
    id: 'watevs-2026',
    year: '2026 - Present',
    title: 'Software Engineer',
    company: 'OutEngine, London (Remote)',
    description:
      'Building Surtur — a 100k+/day email dispatch engine with 5-queue Redis/BullMQ architecture, IMAP connection pooling, OAuth token management, and deliverability intelligence. Also building an AI orchestration agent that runs the entire outbound pipeline from a single customer prompt.',
  },
  {
    id: 'sde-2025',
    year: '2025 - 2026',
    title: 'Software Development Engineer',
    company: 'NxtJob.ai, Bengaluru',
    description:
      'Shipped AI-powered Chrome extensions to 3,000+ users (4.6★), built LLM + RAG reply pipelines for 500+ daily active users, and engineered a multi-gateway payment platform across PhonePe, Razorpay, Stripe, and Cashfree.',
  },
  {
    id: 'intern-2024',
    year: '2024 - 2025',
    title: 'Software Development Intern',
    company: 'NxtJob.ai, Bengaluru',
    description:
      'Built Omega — an LLM + RAG resume engine that cut creation time from 30 days to 3–5 days (90% reduction). Also built ERP/CRM backend, AWS SES automation pipeline, and multi-calendar module with Google Calendar sync.',
  },
  {
    id: 'nie-2021',
    year: '2021 - 2025',
    title: 'B.E. in Information Science',
    company: 'NIE Institute of Technology, Mysuru',
    description: 'Graduated with 8.4 CGPA. Codesmith Club member. Started building production systems from second year.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      {/* Aurora blobs — animated */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -20, 10, 0], y: [0, 20, -15, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 20, -10, 0], y: [0, -20, 15, 0], scale: [1, 0.95, 1.1, 1] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 4 }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12" style={{ background: 'rgba(249,115,22,0.4)' }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: '#F97316', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
            >
              About
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide mb-3"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif', color: '#F0EDE8' }}
          >
            Who I <span className="text-gradient">Am</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: '#666' }}>
            Backend systems engineer building distributed infrastructure and AI agents at production scale
          </p>
        </motion.div>

        {/* Stats — giant display numbers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={slideUp}
              className="flex flex-col items-center md:items-start group cursor-default"
            >
              <div
                className="text-6xl md:text-7xl lg:text-8xl mb-2 transition-colors duration-300 group-hover:text-primary"
                style={{
                  fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
                  color: '#F0EDE8',
                  letterSpacing: '0.02em',
                  lineHeight: '0.9',
                }}
              >
                {stat.id === 'emails' ? (
                  <CountUp to={100} suffix="k+" duration={1.5} />
                ) : stat.id === 'users' ? (
                  <CountUp to={3} suffix="k+" duration={1.5} />
                ) : stat.id === 'efficiency' ? (
                  <CountUp to={90} suffix="%" duration={1.5} />
                ) : (
                  stat.value
                )}
              </div>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: '#F97316', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I&apos;m <span className="text-primary font-semibold">Hari Om</span>, a backend-leaning engineer specialising
            in distributed messaging systems and AI-integrated workflows. Currently at{' '}
            <span className="text-primary font-semibold">OutEngine</span> (London), I&apos;m building{' '}
            <span className="text-accent-cyan font-semibold">Surtur</span> — an email dispatch and warmup engine that
            processes 100,000+ emails per day across rotating mailboxes with a 5-queue Redis/BullMQ architecture.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alongside the engine, I&apos;m building an{' '}
            <span className="text-primary font-semibold">AI orchestration agent</span> that replaces manual campaign
            setup with a single natural language prompt — routing across data sourcing, enrichment, inbox warmup, and
            sequence execution. I care about systems that hold under load, code that&apos;s maintainable, and shipping
            things that work in production — not just in demos.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideUp}
            className="text-3xl md:text-4xl uppercase tracking-wide text-center mb-12"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif', color: '#F0EDE8' }}
          >
            The <span className="text-gradient">Timeline</span>
          </motion.h3>

          <div className="relative">
            {/* Track line (faint) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5" />

            {/* Animated draw line */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-accent-cyan to-accent-pink"
              style={{ transformOrigin: 'top' }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* Timeline Items */}
            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={slideUp}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Pulsing timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform -translate-x-1/2 z-10">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                    />
                  </div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <SpotlightCard className="glass-elite p-6 rounded-2xl hover:bg-white/5 transition-all duration-300">
                      <div className="text-primary font-semibold mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <div className="text-accent-cyan mb-3">{item.company}</div>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </SpotlightCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
