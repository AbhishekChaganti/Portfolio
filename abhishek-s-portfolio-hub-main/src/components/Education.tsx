import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    specialization: 'Artificial Intelligence & Machine Learning',
    institution: 'Aditya College of Engineering & Technology',
    period: '2022 - Present',
    gpa: '7.75 / 10',
    status: 'In Progress',
  },
  {
    degree: 'Junior College (MPC)',
    specialization: 'Mathematics, Physics, Chemistry',
    institution: 'Higher Secondary Education',
    period: '2020 - 2022',
    gpa: '9.35 / 10',
    status: 'Completed',
  },
  {
    degree: '10th Standard',
    specialization: 'Secondary School Education',
    institution: 'High School',
    period: '2020',
    gpa: '9.31 / 10',
    status: 'Completed',
  },
];

const certifications = [
  {
    name: 'Python Programming',
    issuer: 'HackerRank',
    icon: '🐍',
  },
  {
    name: 'Machine Learning',
    issuer: 'Udemy',
    icon: '🤖',
  },
  {
    name: 'Deep Learning',
    issuer: 'Scaler',
    icon: '🧠',
  },
  {
    name: 'Docker Fundamentals',
    issuer: 'LinkedIn Learning',
    icon: '🐳',
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary mono text-xl mr-2">05.</span>
            Education & Certifications
          </h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12 pb-8 last:pb-0"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  <div className="glass rounded-xl p-5">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <span className={`px-2 py-1 text-xs rounded-full mono ${
                        edu.status === 'In Progress' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <p className="text-primary text-sm mb-1">{edu.specialization}</p>
                    <p className="text-muted-foreground text-sm mb-3">{edu.institution}</p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-medium">
                        <BookOpen className="w-4 h-4" />
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-4 card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: 'Telugu', level: 'Native' },
                  { lang: 'English', level: 'B1' },
                  { lang: 'Hindi', level: 'Beginner' },
                ].map(({ lang, level }) => (
                  <div key={lang} className="glass rounded-lg px-4 py-2">
                    <span className="text-foreground font-medium">{lang}</span>
                    <span className="text-muted-foreground text-sm ml-2">({level})</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
