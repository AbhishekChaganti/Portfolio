import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Software Development Intern',
    company: 'APSSDC',
    companyFull: 'Andhra Pradesh State Skill Development Corporation',
    location: 'Andhra Pradesh, India',
    period: 'May 2025 - July 2025',
    description: 'Contributed to building scalable backend services using Django and Django REST Framework.',
    achievements: [
      'Developed and deployed scalable backend services using Django and Django REST Framework, supporting 1,000+ concurrent users',
      'Implemented secure authentication and role-based authorization flows, reducing unauthorized access risks by 20%',
      'Optimized ORM queries and database schema, achieving 25% faster read/write operations',
      'Refactored legacy code modules to improve maintainability, cutting average API response latency by 20%',
    ],
    technologies: ['Django', 'Django REST Framework', 'Python', 'MySQL', 'Docker'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary mono text-xl mr-2">03.</span>
            Work Experience
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        {/* Experience Card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-xl p-6 card-hover">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {experiences[0].title}
              </h3>
              <a
                href="#"
                className="text-primary hover:underline inline-flex items-center gap-1 text-lg font-medium"
              >
                {experiences[0].company}
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-sm text-muted-foreground mt-1">{experiences[0].companyFull}</p>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-primary" />
                {experiences[0].period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary" />
                {experiences[0].location}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4">{experiences[0].description}</p>

            {/* Achievements */}
            <ul className="space-y-2 mb-6">
              {experiences[0].achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1.5">▹</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {experiences[0].technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* More Experience CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            Currently seeking new opportunities to grow and contribute
          </p>
          <a href="#contact" className="btn-outline inline-flex">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
