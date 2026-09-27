import { motion } from 'framer-motion'
import {
  Code2,
  Layers3,
  Database,
  Brain,
  Target,
} from 'lucide-react'

function Skills() {
  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['C++', 'JavaScript', 'HTML/CSS', 'Python', 'Java'],
    },
    {
      title: 'Frameworks & Development Tools',
      icon: Layers3,
      skills: [
        'React',
        'Laravel',
        'Bootstrap',
        'Firebase',
        'Firestore',
        'Cloud Functions',
        'Node.js',
        'XAMPP',
        'Git',
        'Visual Studio',
        'VS Code',
      ],
    },
    {
      title: 'Development & Technical Knowledge',
      icon: Database,
      skills: [
        'MySQL',
        'NoSQL',
        'RESTful API Development',
        'CRUD-based System Design',
        'Version Control',
        'Component-Based Architecture',
        'Agile',
      ],
    },
    {
      title: 'Professional Skills',
      icon: Brain,
      skills: [
        'Analytical Thinking',
        'Problem Solving',
        'Technical Troubleshooting',
        'Fast Learning',
        'Communication',
        'Collaboration',
      ],
    },
    {
      title: 'Areas of Interest',
      icon: Target,
      skills: [
        'Software Development',
        'Web Development',
        'IT Support',
        'Technical Troubleshooting',
        'Continuous Learning',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="bg-slate-50 px-6 py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-slate-900 dark:bg-white" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
              Skills
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Technical & Professional Skills
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            A combination of technical knowledge, development tools, and
            professional skills developed through academic projects, hands-on
            experience, and continuous learning.
          </p>
        </div>

        <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                hidden: {},
                visible: {
                transition: {
                    staggerChildren: 0.12,
                },
                },
            }}
        >
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <motion.div
                  key={group.title}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-slate-900 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950 dark:hover:border-white"
              >

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills