'use client';

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
      'Active member of Codesmith Club',
      'Qualified GATE 2024',
      'Participated in multiple hackathons',
      'Developed several academic and personal projects',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'bes-12th',
    degree: 'Higher Secondary Education (12th)',
    institution: 'British English School',
    location: 'Gaya, Bihar',
    period: '2018 - 2020',
    grade: '68.4%',
    highlights: [
      'Qualified Pre-Regional Mathematics Olympiad (PRMO) 2019',
      'Developed programming skills during COVID-19 pandemic',
      'Explored various technology domains',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'destiny-10th',
    degree: 'Secondary Education (10th)',
    institution: 'Camford Public School',
    location: 'Patna, Bihar',
    period: '2016 - 2018',
    grade: '85.8%',
    highlights: ['Strong academic foundation in mathematics and science', 'Started exploring web development'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 'destiny-early',
    degree: 'Early Education',
    institution: 'CBSE Destiny International School',
    location: 'Patna, Bihar',
    period: 'Till 2016',
    grade: 'Excellent',
    highlights: [
      'Developed interest in computer games and programming',
      'Started learning web development during school years',
    ],
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function Education() {
  return (
    <section id="education" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full blur-3xl bg-accent-cyan/10" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full blur-3xl bg-primary/10" />

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
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">Academic journey from Patna to Mysuru</p>
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
              className="p-8 rounded-2xl transition-all duration-300 glass hover:bg-white/10"
            >
              {/* Gradient Bar */}
              <div className={`h-1 w-20 bg-gradient-to-r ${edu.gradient} rounded-full mb-6`} />

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
                  <div className="flex gap-2 items-center text-accent-cyan">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div className="flex gap-2 items-center text-accent-neon">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">{edu.grade}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6">
                <ul className="space-y-2">
                  {edu.highlights.map((highlight) => (
                    <li key={highlight.substring(0, 30)} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1 text-primary">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
