'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { slideUp, staggerContainer } from '@/lib/animations';
import { PERSONAL_INFO } from '@/src/data/constants';

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden relative py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-primary/10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-accent-cyan/10" />

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
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Email Card */}
            <motion.div
              variants={slideUp}
              className="p-8 rounded-2xl transition-all duration-300 glass hover:bg-white/10 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Email Me</h3>
                <p className="mb-4 text-muted-foreground">Drop me a line anytime</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-6 py-2 font-medium text-white rounded-lg transition-all duration-300 bg-gradient-primary hover:shadow-lg hover:shadow-primary/50"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              variants={slideUp}
              className="p-8 rounded-2xl transition-all duration-300 glass hover:bg-white/10 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 bg-gradient-to-r rounded-xl from-blue-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">LinkedIn</h3>
                <p className="mb-4 text-muted-foreground">Let's connect professionally</p>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 font-medium text-white bg-gradient-to-r rounded-lg transition-all duration-300 from-blue-500 to-blue-600 hover:shadow-lg hover:shadow-blue-500/50"
                >
                  Connect
                </a>
              </div>
            </motion.div>

            {/* GitHub Card */}
            <motion.div
              variants={slideUp}
              className="p-8 rounded-2xl transition-all duration-300 glass hover:bg-white/10 group md:col-span-2 lg:col-span-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 bg-gradient-to-r rounded-xl from-gray-700 to-gray-800 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">GitHub</h3>
                <p className="mb-4 text-muted-foreground">Check out my code</p>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 font-medium text-white bg-gradient-to-r rounded-lg transition-all duration-300 from-gray-700 to-gray-800 hover:shadow-lg hover:shadow-gray-700/50"
                >
                  View Profile
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideUp}
            className="mt-12 p-8 rounded-2xl text-center glass"
          >
            <div className="flex justify-center items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium">{PERSONAL_INFO.location}</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a great
              conversation about technology and innovation. Feel free to reach out through any of the channels above!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}