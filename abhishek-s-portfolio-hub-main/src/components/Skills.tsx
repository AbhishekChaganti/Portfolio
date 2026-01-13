import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Database, Server, Terminal, GitBranch, 
  Layers, Braces, Container
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Front-end',
    icon: Code2,
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS/SCSS', level: 85 },
      { name: 'JavaScript', level: 40 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    title: 'Back-end',
    icon: Server,
    skills: [
      { name: 'Django', level: 95 },
      { name: 'Django REST', level: 60 },
      { name: 'Python', level: 92 },
      { name: 'Auth/Authz', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 62 },
      { name: 'SQLite', level: 88 },
      { name: 'Django ORM', level: 90 },
      { name: 'Query Optimization', level: 75 },
    ],
  },
  {
    title: 'Languages',
    icon: Braces,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 75 },
      { name: 'JavaScript', level: 40 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Architecture',
    icon: Layers,
    skills: [
      { name: 'MVT Pattern', level: 90 },
      { name: 'Microservices', level: 75 },
      { name: 'REST API Design', level: 88 },
      { name: 'Clean Code', level: 85 },
    ],
  },
  {
    title: 'Tools',
    icon: Terminal,
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'Vercel', level: 75 },
      { name: 'VS Code', level: 92 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-primary mono">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-cyan-glow rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary mono text-xl mr-2">02.</span>
            Skills & Expertise
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-xl p-6 card-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        > 
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
