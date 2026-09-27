import { motion } from 'framer-motion'
import { GraduationCap, CalendarDays, MapPin } from 'lucide-react'

function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Cavite State University - Carmona Campus',
      date: 'Graduated 2026',
      location: 'Carmona, Cavite',
    },
    {
      degree: 'TVL - Information and Communications Technology (ICT)',
      school: 'AMA Computer College - Biñan, Laguna',
      date: 'Graduated 2020',
      location: 'Biñan, Laguna',
    },
  ]

  return (
    <section
      id="education"
      className="bg-white px-6 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-slate-900 dark:bg-white" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
              Education
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Educational Background
          </h2>
        </div>

        <motion.div 
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: {},
                visible: {
                transition: {
                    staggerChildren: 0.15,
                },
                },
            }}
        >
          {education.map((item) => (
            <motion.article
              key={item.degree}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-slate-900 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-white"              variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0 },
                }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                <GraduationCap size={25} />
              </div>

              <h3 className="mt-6 text-xl font-bold leading-7 text-slate-900 dark:text-white">
                {item.degree}
              </h3>

              <p className="mt-3 font-semibold text-[#3F6F68] dark:text-[#6F9B94]">
                {item.school}
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education