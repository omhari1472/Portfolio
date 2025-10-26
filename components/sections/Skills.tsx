'use client';

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
  },
];

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full blur-3xl bg-primary/10" />
      <div className="absolute right-0 bottom-1/3 w-96 h-96 rounded-full blur-3xl bg-accent-cyan/10" />

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
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
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
            <motion.div
              key={category.id}
              variants={slideUp}
              className="p-8 rounded-2xl transition-all duration-300 glass hover:bg-white/10"
            >
              {/* Category Header */}
              <div className="flex gap-3 items-center mb-6">
                <div className={`h-1 w-12 bg-gradient-to-r ${category.gradient} rounded-full`} />
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-4 rounded-xl border transition-all duration-300 bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-2 text-2xl">{skill.icon}</div>
                      <span className="text-sm font-medium text-white">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
