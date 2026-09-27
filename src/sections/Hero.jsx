import { motion } from 'framer-motion'
import { Code2, BriefcaseBusiness, Mail, ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 py-24 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#3F6F68] dark:text-[#6F9B94]">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl dark:text-white">
            Beinard Ariel G. Reginaldo
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-slate-700 sm:text-2xl lg:text-3xl dark:text-slate-300">
            Information Technology Graduate | IT Support &amp; Web Development
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            An Information Technology graduate with hands-on experience in IT
            support, web development, technical troubleshooting, networking,
            and system development.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3F6F68] px-6 py-3 font-semibold text-white transition-all hover:bg-[#315952] hover:shadow-lg"
            >
              View My Projects
              <ArrowDown size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition-all hover:border-[#3F6F68] hover:text-[#3F6F68] dark:border-slate-700 dark:text-slate-200 dark:hover:border-[#6F9B94] dark:hover:text-[#6F9B94]"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/st-beinard"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-600 transition-colors hover:text-[#3F6F68] dark:text-slate-400 dark:hover:text-[#6F9B94]"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/beireginaldo"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-600 transition-colors hover:text-[#3F6F68] dark:text-slate-400 dark:hover:text-[#6F9B94]"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:beinardariel.reginaldo@gmail.com"
              aria-label="Email"
              className="text-slate-600 transition-colors hover:text-[#3F6F68] dark:text-slate-400 dark:hover:text-[#6F9B94]"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero