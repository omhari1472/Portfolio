'use client';

import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { motion } from 'framer-motion';
import { Award, Calendar, GraduationCap } from 'lucide-react';
import { slideUp, staggerContainer } from '@/lib/animations';

const education = [
  {
    id: 'nie-btech',
    degree: 'B.E. in Information Science Engineering',
    institution: 'NIE Institute of Technology',
    location: 'Mysuru, Karnataka',
    period: '2021 - 2025',
    grade: '8.4 CGPA',
    highlights: [
      'Started building production backend systems from second year',
      'Active member of Codesmith Club — shipped multiple internal tools',
      'Qualified GATE 2024',
      'Top 8 finish at RVITM Hackathon (100+ teams)',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function Education() {
  return (
    <section id="education" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 20, -10, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -15, 10, 0], scale: [1, 0.95, 1.1, 1] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 5 }}
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
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <motion.div
            className="mx-auto mt-3 h-px w-20 bg-gradient-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">Information Science Engineering, NIE Institute of Technology</p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="mx-auto space-y-8 max-w-4xl"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={slideUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <SpotlightCard className="p-8 rounded-2xl glass-elite" spotlightColor="rgba(139,92,246,0.1)">
                {/* Animated Gradient Bar */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${edu.gradient} rounded-full mb-6`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                />

                {/* Header */}
                <div className="flex flex-col mb-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-bold">{edu.degree}</h3>
                    <div className="flex gap-2 items-center mb-2 text-primary">
                      <GraduationCap className="w-5 h-5" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-start mt-4 md:mt-0 md:items-end">
                    <div className="flex gap-2 items-center bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1.5 rounded-full text-accent-cyan">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium text-sm">{edu.period}</span>
                    </div>
                    <div className="flex gap-2 items-center bg-accent-neon/10 border border-accent-neon/25 px-3 py-1.5 rounded-full">
                      <Award className="w-4 h-4 text-accent-neon" />
                      <span className="font-bold text-accent-neon text-sm">{edu.grade}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights — staggered */}
                <div className="mt-6">
                  <motion.ul
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                  >
                    {edu.highlights.map((highlight) => (
                      <motion.li
                        key={highlight.substring(0, 30)}
                        variants={{
                          hidden: { opacity: 0, x: -15 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
                        }}
                        className="flex gap-3 text-muted-foreground text-sm"
                      >
                        <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
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
