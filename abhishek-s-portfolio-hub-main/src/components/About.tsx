import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const technologies = [
    'Python', 'Django', 'Django REST Framework', 'JavaScript',
    'Docker', 'MySQL', 'Git', 'REST APIs'
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <motion.div
        className="container mx-auto max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className="flex items-center gap-4 mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Text Content */}
          <motion.div className="md:col-span-3 space-y-6" variants={itemVariants}>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Hello! I'm Abhishek, a passionate developer based in{' '}
              <span className="text-primary">Kakinada, India</span>. I'm currently pursuing 
              my B.Tech in Computer Science with a specialization in Artificial Intelligence 
              and Machine Learning at{' '}
              <span className="text-primary">Aditya College of Engineering & Technology</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              My journey in software development started with a curiosity about how web 
              applications work behind the scenes. Today, I specialize in building robust 
              backend systems using Django, creating RESTful APIs, and deploying scalable 
              applications with Docker.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              During my internship at{' '}
              <span className="text-primary">APSSDC</span>, I had the privilege of working 
              on high-traffic backend services, optimizing database queries, and implementing 
              secure authentication systems. I thrive in collaborative environments and 
              am always eager to learn new technologies.
            </p>

            <div className="pt-4">
              <p className="text-foreground font-medium mb-4">
                Technologies I've been working with:
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {technologies.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="glass rounded-xl p-6 space-y-6">
              <div className="relative w-60 h-80 mx-auto group">
                {/* Animated border glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-cyan-glow to-primary rounded-xl opacity-75 blur-[2px] group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
                
                {/* Photo container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden border border-primary/50 bg-card">
                  <img
                    src={profilePhoto}
                    alt="Abhishek Chaganti"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                {[
                  { icon: MapPin, label: 'Location', value: 'Kakinada, India' },
                  { icon: Mail, label: 'Email', value: 'abhishekchaganti25@gmail.com', href: 'mailto:abhishekchaganti25@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 9014874227', href: 'tel:+919014874227' },
                  { icon: Calendar, label: 'Experience', value: 'Software Dev Intern' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-foreground hover:text-primary transition-colors truncate block">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground truncate">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
