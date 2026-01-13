import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Movie HUB',
    description: 'A comprehensive Django movie platform with 9,000+ titles, advanced search and filtering, user authentication, and personalized watchlists. Optimized database for scale with efficient indexing.',
    technologies: ['Django', 'SQLite', 'Bootstrap', 'Docker', 'JavaScript'],
    github: 'https://github.com/AbhishekChaganti/MovieHUB',
    featured: true,
  },
  {
    title: 'Online Food Ordering System',
    description: 'Full-stack food ordering platform featuring 30+ menu items, responsive UI, shopping cart functionality, and streamlined checkout process achieving 25% faster order completion.',
    technologies: ['Django', 'HTML/CSS', 'JavaScript', 'SQLite', 'Docker'],
    github: 'https://github.com/AbhishekChaganti/Eatzy',
    featured: true,
  },
  {
    title: 'Career Suggestions Platform',
    description: 'AI-powered career guidance system integrated with OpenAI API, serving 500+ user profiles with personalized recommendations. Features normalized database schemas for optimal performance.',
    technologies: ['Django', 'OpenAI API', 'Bootstrap', 'SQLite', 'Docker'],
    github: 'https://github.com/AbhishekChaganti/CareerSegg',
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="glass rounded-xl overflow-hidden card-hover group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-cyan-glow/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Folder className="w-16 h-16 text-primary/30" />
        </div>
        <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mono">
              Featured
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-muted-foreground mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary mono text-xl mr-2">04.</span>
            Featured Projects
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/abhishekchaganti"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
