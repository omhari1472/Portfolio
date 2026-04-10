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
          'border backdrop-blur-xl',
        )}
        style={{
          borderColor: isScrolled ? 'rgba(249,115,22,0.15)' : 'rgba(255,255,255,0.06)',
          background: isScrolled ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0.5)',
          boxShadow: isScrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="flex items-center gap-1">
          {/* Logo */}
          <motion.button
            type="button"
            onClick={() => handleNavClick('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 mr-1 text-gradient"
            style={{ fontFamily: 'var(--font-display), Bebas Neue, sans-serif', fontSize: '22px', letterSpacing: '0.1em' }}
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
                className="relative px-3 py-1.5 text-sm font-medium transition-colors duration-200"
                style={{
                  color: activeSection === item.href.substring(1) ? '#F97316' : '#555555',
                  fontFamily: 'var(--font-mono), JetBrains Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={e => { if (activeSection !== item.href.substring(1)) (e.currentTarget as HTMLElement).style.color = '#AAAAAA'; }}
                onMouseLeave={e => { if (activeSection !== item.href.substring(1)) (e.currentTarget as HTMLElement).style.color = '#555555'; }}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-3 right-3 h-px"
                    style={{ background: '#F97316' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
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
