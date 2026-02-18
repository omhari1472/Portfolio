'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
        className={cn(
          'rounded-full transition-all duration-500 px-4 py-2',
          'border border-white/10 backdrop-blur-xl',
          isScrolled ? 'bg-white/8 shadow-xl shadow-black/20 border-white/15' : 'bg-white/5'
        )}
      >
        <div className="flex items-center gap-1">
          {/* Logo */}
          <motion.button
            type="button"
            onClick={() => handleNavClick('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-accent-cyan bg-clip-text text-transparent px-3 py-1.5 mr-1"
          >
            HO
          </motion.button>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-white/20 mr-1" />

          {/* Desktop nav items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300',
                  activeSection === item.href.substring(1) ? 'text-white' : 'text-muted-foreground hover:text-white'
                )}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-primary"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden ml-1 p-1.5 rounded-full text-muted-foreground hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="mt-2 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/8 p-2 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  'block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-primary text-white'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                )}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
