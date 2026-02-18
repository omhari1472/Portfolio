'use client';

import { CountUp } from '@/components/ui/CountUp';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { slideUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Award, MapPin, TrendingUp, Users } from 'lucide-react';

const stats = [
  { id: 'cgpa', icon: Award, label: 'CGPA', value: '8.4/10', color: 'text-primary' },
  { id: 'efficiency', icon: TrendingUp, label: 'Efficiency Boost', value: '90%', color: 'text-accent-cyan' },
  { id: 'projects', icon: Users, label: 'Team Projects', value: '15+', color: 'text-accent-neon' },
  { id: 'location', icon: MapPin, label: 'Location', value: 'Bengaluru', color: 'text-accent-pink' },
];

const journey = [
  {
    id: 'watevs-2026',
    year: '2026 - Present',
    title: 'Software Engineer',
    company: 'Watevs, London (Remote)',
    description:
      'Building campaign sequencing and email dispatch infrastructure in Go + Svelte for a UK-based cold outreach startup.',
  },
  {
    id: 'sde-2025',
    year: '2025 - 2026',
    title: 'Software Development Engineer',
    company: 'NxtJob.ai, Bengaluru',
    description:
      'Revamped LinkedIn & WhatsApp Chrome extensions, implementing advanced chat categorization and scheduling, increasing user engagement by 30% among 2K users.',
  },
  {
    id: 'intern-2024',
    year: '2024 - 2025',
    title: 'Software Development Intern',
    company: 'NxtJob.ai, Bengaluru',
    description:
      'Developed a role-based ERP/CRM backend to manage client data and sales pipelines, improving team efficiency by 30% across about 10K monthly records.',
  },
  {
    id: 'nie-2021',
    year: '2021 - 2025',
    title: 'B.E. in Information Science',
    company: 'NIE Institute of Technology, Mysuru',
    description: 'Graduated with 8.4 CGPA. Active member of Codesmith Club. Qualified GATE 2024.',
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <motion.div
            className="mx-auto mt-3 h-px w-16 bg-gradient-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            From Patna to Bengaluru, building innovative solutions that make a difference
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {stats.map((stat) => (
            <SpotlightCard
              key={stat.id}
              className="glass-elite p-6 rounded-2xl group cursor-default"
              spotlightColor="rgba(139,92,246,0.12)"
            >
              <motion.div variants={slideUp}>
                <stat.icon className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform`} />
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.id === 'location' ? (
                    stat.value
                  ) : stat.id === 'cgpa' ? (
                    <CountUp to={8.4} decimals={1} suffix="/10" duration={1.5} />
                  ) : stat.id === 'efficiency' ? (
                    <CountUp to={90} suffix="%" duration={1.5} />
                  ) : stat.id === 'projects' ? (
                    <CountUp to={15} suffix="+" duration={1.5} />
                  ) : (
                    stat.value
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            </SpotlightCard>
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
            I&apos;m <span className="text-primary font-semibold">Hari Om</span>, a passionate Full-Stack Developer and
            AI Engineer from Patna, Bihar. My journey in technology began during my school years when I started
            exploring web development, sparked by my childhood fascination with computer games.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Currently working at <span className="text-primary font-semibold">Watevs</span> (London) and previously at{' '}
            <span className="text-primary font-semibold">NxtJob.ai</span> in Bengaluru, I specialise in building
            scalable web applications and AI-powered solutions. I&apos;ve delivered projects improving efficiency by up
            to 90%, demonstrating my commitment to creating impactful technology solutions.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideUp}
            className="text-2xl md:text-3xl font-heading font-bold text-center mb-12"
          >
            My <span className="text-gradient">Journey</span>
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
