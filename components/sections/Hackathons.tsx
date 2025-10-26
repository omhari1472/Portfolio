'use client';

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
      <div className="absolute left-0 top-1/4 w-96 h-96 rounded-full blur-3xl bg-accent-pink/10" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 rounded-full blur-3xl bg-accent-cyan/10" />

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
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
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
              className="p-8 rounded-2xl transition-all duration-300 glass hover:bg-white/10"
            >
              {/* Gradient Bar */}
              <div className={`h-1 w-20 bg-gradient-to-r ${hackathon.gradient} rounded-full mb-6`} />

              {/* Header */}
              <div className="flex flex-col mb-6 md:flex-row md:items-start md:justify-between">
                <div className="flex flex-1 gap-4 items-start">
                  <div className={`p-3 glass rounded-xl bg-gradient-to-r ${hackathon.gradient}`}>
                    <hackathon.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-bold">{hackathon.name}</h3>
                    <div className="flex flex-wrap gap-4 items-center mb-2">
                      <span className="font-semibold text-primary">{hackathon.project}</span>
                      <span className="px-3 py-1 text-sm font-semibold rounded-full bg-accent-cyan/20 text-accent-cyan">
                        {hackathon.position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 text-muted-foreground">{hackathon.description}</p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="mb-3 text-lg font-semibold">Key Contributions:</h4>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {hackathon.achievements.map((achievement) => (
                    <li key={achievement.substring(0, 30)} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1 text-primary">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {hackathon.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
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
                className="p-6 rounded-2xl transition-all duration-300 glass hover:bg-white/10"
              >
                <div className={`inline-block p-3 glass rounded-xl bg-gradient-to-r ${achievement.gradient} mb-4`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-2 text-xl font-bold">{achievement.title}</h4>
                <p className="mb-2 text-muted-foreground">{achievement.description}</p>
                <span className="font-semibold text-accent-cyan">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
