'use client';

import { Github, Heart, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background-secondary border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient mb-4">Hari Om</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer & AI Engineer building innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/omhari1472"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/om-hari/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:omhari1472@gmail.com"
                className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:bg-white/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground mt-4">
              <a href="mailto:omhari1472@gmail.com" className="hover:text-primary transition-colors">
                omhari1472@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground">Bengaluru, Karnataka, India</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {currentYear} Hari Om. All rights reserved.</p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </footer>
  );
}
