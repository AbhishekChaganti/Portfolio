import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Django Backend Developer | Full-Stack Enthusiast | AIML Student';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-glow/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-row-reverse max-w-7xl items-center gap-10 md:gap-12">
          {/* Profile Photo */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative w-80 h-100 md:w-90 md:h-85 group">
              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-glow to-primary rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
              
              {/* Photo container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/50 bg-card">
                <img
                  src={profilePhoto}
                  alt="Abhishek Chaganti"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-cyan-glow/30 rounded-xl -z-10" />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="max-w-5xl text-left">
            <motion.p
              className="mono text-primary text-sm md:text-base mt-5 mb-4"
              variants={itemVariants}
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
              variants={itemVariants}
            >
              Chaganti Purna Ganga{' '}
              <span className="text-gradient">Abhishek</span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-6"
              variants={itemVariants}
            >
              I build things for the web.
            </motion.h2>

            <motion.div
              className="h-8 md:h-10 mb-8 overflow-hidden"
              variants={itemVariants}
            >
              <p className="mono text-sm md:text-base text-muted-foreground">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-blink" />
              </p>
            </motion.div>

            <motion.p
              className="text-muted-foreground max-w-xl mb-12 text-justify md:text-lg leading-relaxed"
              variants={itemVariants}
            >
              I'm a Computer Science student specializing in AI/ML, passionate about building 
              scalable backend systems and REST APIs. Currently focused on Django and cloud technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-12"
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className="btn-primary"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px hsl(var(--primary) / 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center md:justify-start"
              variants={itemVariants}
            >
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
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
