'use client';

import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import { slideUp, staggerContainer } from '@/lib/animations';

const hackathons = [
  {
    id: 'rvitm-2023',
    name: 'RVITM Hackathon 2023',
    project: 'Backpackers',
    position: 'Top 8 Finalists',
    description:
      'Developed a solution for travelers to manage luggage while exploring destinations. Led backend development and designed interactive map interface using Mapbox plugin.',
    achievements: [
      'Integrated Google Sheets and Google Apps Script for dynamic updates',
      'Real-time luggage storage location finder',
      'Comprehensive business model presentation',
      'Top 8 out of 100+ teams',
    ],
    tech: ['React', 'Node.js', 'Mapbox', 'Google Sheets API', 'Google Apps Script'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: Trophy,
  },
  {
    id: 'vvce-2022',
    name: 'VVCE Hackathon 2022',
    project: 'Queue Management System',
    position: '3rd Prize',
    description:
      'Built an innovative Queue Management System for managing hospital traffic during COVID-19 pandemic. Focused on backend development and API implementation.',
    achievements: [
      'Designed efficient database schemas',
      'Implemented RESTful APIs for queue operations',
      'High-volume traffic handling',
      'Maintained data integrity and user experience',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    gradient: 'from-purple-500 to-pink-500',
    icon: Trophy,
  },
];

const achievements = [
  {
    id: 'gate-2024',
    title: 'GATE 2024',
    description: 'Qualified Graduate Aptitude Test in Engineering',
    year: '2024',
    icon: Award,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 'prmo-2019',
    title: 'PRMO 2019',
    description: 'Qualified Pre-Regional Mathematics Olympiad',
    year: '2019',
    icon: Award,
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <motion.div
        className="absolute left-0 top-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(255,0,110,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 20, -10, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -20, 10, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 5 }}
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
            Hackathons & <span className="text-gradient">Achievements</span>
          </h2>
          <motion.div
            className="mx-auto mt-3 h-px w-20 bg-gradient-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            Competitive coding and problem-solving experiences
          </p>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mx-auto mb-16 space-y-8 max-w-5xl"
        >
          {hackathons.map((hackathon) => (
            <motion.div
              key={hackathon.id}
              variants={slideUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <SpotlightCard className="p-8 rounded-2xl glass-elite" spotlightColor="rgba(139,92,246,0.1)">
                {/* Animated Gradient Bar */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${hackathon.gradient} rounded-full mb-6`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                />

                {/* Header */}
                <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-1 gap-4 items-start">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${hackathon.gradient} flex-shrink-0`}>
                      <hackathon.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-2xl font-bold">{hackathon.name}</h3>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="font-semibold text-primary">{hackathon.project}</span>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 text-sm font-bold rounded-full bg-gradient-to-r from-accent-cyan/20 to-primary/20 border border-accent-cyan/30 text-accent-cyan"
                        >
                          {hackathon.position}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-6 text-muted-foreground">{hackathon.description}</p>

                {/* Achievements — staggered */}
                <div className="mb-6">
                  <h4 className="mb-3 text-lg font-semibold">Key Contributions:</h4>
                  <motion.ul
                    className="grid grid-cols-1 gap-3 md:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                  >
                    {hackathon.achievements.map((achievement) => (
                      <motion.li
                        key={achievement.substring(0, 30)}
                        variants={{
                          hidden: { opacity: 0, x: -15 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                        }}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 text-primary flex-shrink-0">▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {hackathon.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 text-primary/80 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mx-auto max-w-4xl"
        >
          <h3 className="mb-8 text-2xl font-bold text-center md:text-3xl font-heading">
            Other <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={slideUp}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
              >
                <SpotlightCard className="p-6 rounded-2xl glass-elite h-full" spotlightColor="rgba(139,92,246,0.1)">
                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${achievement.gradient} mb-4`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2 text-xl font-bold">{achievement.title}</h4>
                  <p className="mb-2 text-muted-foreground">{achievement.description}</p>
                  <span className="font-semibold text-accent-cyan">{achievement.year}</span>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
