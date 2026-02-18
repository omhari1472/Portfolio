'use client';

import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { slideUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 'watevs-sde',
    company: 'Watevs',
    location: 'London, United Kingdom',
    role: 'Software Engineer',
    period: 'February 2026 - Present',
    type: 'Full-time',
    tags: ['Go', 'Svelte', 'ElysiaJS', 'Bun', 'TypeScript'],
    achievements: [
      'Architected and built the Sequencer — a campaign planning engine that lets teams design multi-step cold email sequences with configurable delays, branching conditions, and audience targeting',
      'Engineered high-throughput email dispatch services in Go, enabling reliable bulk delivery with per-recipient personalisation at scale',
      'Developed a reply-tracking pipeline that captures inbound responses, threads them to the originating campaign, and surfaces engagement analytics in real time',
      'Built the campaign management dashboard in Svelte, providing a fast, reactive UI for monitoring sequence progress, open/reply rates, and prospect status',
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
      'Developed a role-based ERP/CRM backend to manage client data and sales pipelines, improving team efficiency by 30% across about 10K monthly records',
      'Built a multi-calendar module with team views and real-time Google Calendar sync, reducing event update times to 200 ms and supporting 100+ concurrent users',
      'Enhanced backend reliability via MySQL transactions + Drizzle ORM, resolving concurrency issues and achieving 20% higher data-sync integrity',
      'Engineered a Google Drive-like file system (nested folders, uploads, drag-and-drop), improving user organization and efficiency by 25%',
      'Integrated LightGallery for live previews of images, PDFs, and Sheets, streamlining document interactions',
      'Developed an AWS SES mail automation engine with engagement tracking, reducing redundant emails by 50%',
      'Built Omega, an AI-driven job scanner and skill mapper that reduced manual resume creation time by 90% (from 30 days to 3–5 days), entirely developed from concept to deployment',
      'Collaborated with designers, QA, and product teams in agile sprints to ensure smooth feature rollouts; mentored interns on debugging and API structuring',
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <motion.div
            className="mx-auto mt-3 h-px w-20 bg-gradient-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Building impactful products across UK startups and AI-powered platforms
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
