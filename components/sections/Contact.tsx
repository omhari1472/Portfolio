'use client';

import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { slideUp, staggerContainer } from '@/lib/animations';
import { PERSONAL_INFO } from '@/src/data/constants';

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, -20, 10, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ x: [0, 20, -10, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 4 }}
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <motion.div
            className="mx-auto mt-3 h-px w-20 bg-gradient-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Email Card */}
            <motion.div variants={slideUp} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
              <SpotlightCard className="p-8 rounded-2xl glass-elite group h-full" spotlightColor="rgba(139,92,246,0.18)">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="p-4 mb-4 rounded-xl bg-gradient-primary group-hover:shadow-lg group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-110">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Email Me</h3>
                  <p className="mb-6 text-muted-foreground flex-1">Drop me a line anytime</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="px-6 py-2.5 font-medium text-white rounded-full transition-all duration-300 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div variants={slideUp} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
              <SpotlightCard className="p-8 rounded-2xl glass-elite group h-full" spotlightColor="rgba(59,130,246,0.18)">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="p-4 mb-4 bg-gradient-to-r rounded-xl from-blue-500 to-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">LinkedIn</h3>
                  <p className="mb-6 text-muted-foreground flex-1">Let&apos;s connect professionally</p>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 font-medium text-white bg-gradient-to-r rounded-full transition-all duration-300 from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                  >
                    Connect
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* GitHub Card */}
            <motion.div variants={slideUp} whileHover={{ y: -4, transition: { duration: 0.2 } }} className="md:col-span-2 lg:col-span-1">
              <SpotlightCard className="p-8 rounded-2xl glass-elite group h-full" spotlightColor="rgba(255,255,255,0.07)">
                <div className="flex flex-col items-center text-center h-full">
                  <div className="p-4 mb-4 bg-gradient-to-r rounded-xl from-gray-700 to-gray-800 group-hover:shadow-lg group-hover:shadow-gray-700/40 transition-all duration-300 group-hover:scale-110">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">GitHub</h3>
                  <p className="mb-6 text-muted-foreground flex-1">Check out my code</p>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 font-medium text-white bg-gradient-to-r rounded-full transition-all duration-300 from-gray-700 to-gray-800 hover:shadow-lg hover:shadow-gray-700/50 hover:scale-105"
                  >
                    View Profile
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          </motion.div>

          {/* Location info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideUp}
            className="mt-12"
          >
            <SpotlightCard className="p-8 rounded-2xl glass-elite text-center" spotlightColor="rgba(139,92,246,0.08)">
              <div className="flex justify-center items-center gap-2 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="text-lg font-medium">{PERSONAL_INFO.location}</span>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a great
                conversation about technology and innovation. Feel free to reach out through any of the channels above!
              </p>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
