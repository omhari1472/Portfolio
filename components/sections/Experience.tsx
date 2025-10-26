'use client';

import { slideUp, staggerContainer } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 'nxtjob-sde',
    company: 'NxtJob.ai',
    location: 'Bengaluru, Karnataka',
    role: 'Software Development Engineer',
    period: 'June 2025 - Present',
    type: 'Full-time',
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
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Building impactful solutions at NxtJob.ai</p>
        </motion.div>

        {/* Experience Timeline */}
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
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              {/* Header with Gradient Bar */}
              <div className={`h-1 w-20 bg-gradient-to-r ${exp.gradient} rounded-full mb-6`} />

              {/* Company & Role */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-accent-cyan">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-4">Key Achievements:</h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement.substring(0, 30)} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
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
