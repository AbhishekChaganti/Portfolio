import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>

          {/* Social Links */}
          <div className="flex gap-6">
            {[
              { icon: Github, href: 'https://github.com/abhishekchaganti', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chaganti-abhishek/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:abhishekchaganti25@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Credits */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Designed & Built with{' '}
              <Heart className="inline w-4 h-4 text-destructive" fill="currentColor" />{' '}
              by Abhishek Chaganti
            </p>
            <p className="text-xs text-muted-foreground mono">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Tech Stack */}
          <p className="text-xs text-muted-foreground mono">
            Built with React, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
