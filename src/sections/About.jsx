import { motion } from 'framer-motion'
import { Code2, Wrench, Lightbulb } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'

function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3F6F68] dark:text-[#6F9B94]">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            A little about me
          </h2>
        </div>

        <motion.div
            className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-3xl border border-[#E2ECE9] bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <img
                src={profilePhoto}
                alt="Beinard Ariel G. Reginaldo"
                className="h-72 w-72 rounded-2xl object-cover sm:h-80 sm:w-80"
              />
            </div>
          </div>

          <div>
            <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-300">
              <p>
                I am an Information Technology graduate with a strong interest
                in programming, web development, software engineering, and IT
                support. I enjoy solving technical problems, troubleshooting
                computers, developing applications, and learning new
                technologies.
              </p>

              <p>
                Through my academic projects and hands-on experience, I have
                gained practical knowledge in web development, system
                development, technical troubleshooting, networking, and IT
                support. I enjoy turning problems into practical solutions and
                continuously improving my technical skills.
              </p>

              <p>
                As I begin my professional career, my goal is to gain valuable
                experience in programming and software development while
                continuing to grow as an IT professional. I am open to
                opportunities where I can apply my existing skills, learn from
                experienced professionals, and contribute to real-world
                projects.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
                <Code2 className="text-[#3F6F68] dark:text-[#6F9B94]" size={24} />

                <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">
                  Development
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Building practical web applications and systems.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
                <Wrench
                  className="text-[#3F6F68] dark:text-[#6F9B94]"
                  size={24}
                />

                <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">
                  IT Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Troubleshooting computers, networks, and technical issues.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
                <Lightbulb
                  className="text-[#3F6F68] dark:text-[#6F9B94]"
                  size={24}
                />

                <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">
                  Continuous Learning
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Learning new technologies and improving technical skills.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About