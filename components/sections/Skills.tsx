'use client';

import { Marquee } from '@/components/ui/Marquee';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { slideUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '🎬' },
      { name: 'Redux', icon: '🔄' },
    ],
    gradient: 'from-blue-500 to-cyan-500',
    spotlightColor: 'rgba(59,130,246,0.12)',
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express', icon: '🚀' },
      { name: 'Cloudflare Workers', icon: '☁️' },
      { name: 'Drizzle ORM', icon: '🗄️' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'MongoDB', icon: '🍃' },
    ],
    gradient: 'from-green-500 to-teal-500',
    spotlightColor: 'rgba(20,184,166,0.12)',
  },
  {
    id: 'ai-ml',
    title: 'AI/ML',
    skills: [
      { name: 'LLM Integration', icon: '🤖' },
      { name: 'RAG', icon: '🧠' },
      { name: 'OpenAI APIs', icon: '🔮' },
      { name: 'Prompt Engineering', icon: '✍️' },
    ],
    gradient: 'from-purple-500 to-pink-500',
    spotlightColor: 'rgba(139,92,246,0.14)',
  },
  {
    id: 'tools',
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'AWS SES', icon: '☁️' },
      { name: 'Socket.IO', icon: '🔌' },
      { name: 'Google APIs', icon: '🔍' },
      { name: 'Mapbox', icon: '🗺️' },
      { name: 'Azure', icon: '🔵' },
    ],
    gradient: 'from-orange-500 to-red-500',
    spotlightColor: 'rgba(249,115,22,0.12)',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <motion.div
        className="absolute left-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 20, -10, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -20, 10, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 4 }}
      />

      <div className="container relative px-4 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideUp}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl font-heading">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <motion.div
            className="mx-auto mt-3 h-px w-20 bg-gradient-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.id} variants={slideUp} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
              <SpotlightCard
                className="p-8 rounded-2xl glass-elite h-full"
                spotlightColor={category.spotlightColor}
              >
                {/* Category Header */}
                <div className="flex gap-3 items-center mb-6">
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${category.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  />
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                {/* Marquee skill rows */}
                <div className="space-y-3">
                  <Marquee speed="normal" pauseOnHover>
                    {category.skills.slice(0, Math.ceil(category.skills.length / 2)).map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-200 cursor-default flex-shrink-0"
                      >
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-sm font-medium text-white whitespace-nowrap">{skill.name}</span>
                      </div>
                    ))}
                  </Marquee>
                  {category.skills.length > 3 && (
                    <Marquee speed="normal" reverse pauseOnHover>
                      {category.skills.slice(Math.ceil(category.skills.length / 2)).map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-200 cursor-default flex-shrink-0"
                        >
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-sm font-medium text-white whitespace-nowrap">{skill.name}</span>
                        </div>
                      ))}
                    </Marquee>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
