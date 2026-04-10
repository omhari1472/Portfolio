'use client';

import { slideUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend & API',
    accent: '#F97316',
    skills: ['NestJS', 'Node.js', 'TypeScript', 'Express', 'Drizzle ORM', 'MySQL', 'MongoDB', 'REST', 'WebSocket'],
  },
  {
    id: 'infrastructure',
    title: 'Distributed Systems',
    accent: '#22D3EE',
    skills: ['Redis', 'BullMQ', 'IMAP / SMTP', 'OAuth2', 'AWS SES', 'Cloudflare Workers', 'Queue Orchestration', 'Multi-tenancy'],
  },
  {
    id: 'ai',
    title: 'AI & Agents',
    accent: '#A78BFA',
    skills: ['LLM Integration', 'RAG Pipelines', 'Agent Orchestration', 'Tool Routing', 'OpenAI API', 'Prompt Engineering', 'Async State Machines'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    accent: '#2DD4BF',
    skills: ['React', 'Next.js', 'SvelteKit', 'Tailwind CSS', 'Framer Motion', 'Plasmo', 'Shadow DOM', 'Chrome Extensions'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0A0A0A, #0D0D0D, #0A0A0A)' }} />

      <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 max-w-12" style={{ background: 'rgba(249,115,22,0.4)' }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: '#F97316', fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
            >
              Stack
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-display uppercase tracking-wide"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif', color: '#F0EDE8' }}
          >
            Skills &{' '}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-3 text-base max-w-xl" style={{ color: '#666' }}>
            Technologies I use to build systems that hold under load.
          </p>
        </motion.div>

        {/* Skill grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', overflow: 'hidden' }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              variants={slideUp}
              className="p-8 group"
              style={{
                background: '#0A0A0A',
                borderRight: idx % 2 === 0 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: category.accent, boxShadow: `0 0 8px ${category.accent}` }} />
                <h3
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: category.accent, fontFamily: 'var(--font-mono), JetBrains Mono, monospace' }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skill tags — clean text labels */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.03 }}
                    className="px-3 py-1.5 text-sm rounded-lg transition-all duration-200 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: '#AAAAAA',
                      fontFamily: 'var(--font-mono), JetBrains Mono, monospace',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${category.accent}40`;
                      el.style.color = category.accent;
                      el.style.background = `${category.accent}08`;
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = 'rgba(255,255,255,0.07)';
                      el.style.color = '#AAAAAA';
                      el.style.background = 'rgba(255,255,255,0.04)';
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
