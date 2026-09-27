import { Code2, BriefcaseBusiness, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              Beinard Ariel G. Reginaldo
            </p>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Information Technology Graduate | IT Support & Web Development
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/st-beinard"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              <FaGithub
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://linkedin.com/in/beireginaldo"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              <FaLinkedin
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="mailto:beinardariel.reginaldo@gmail.com"
              aria-label="Email"
              className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
            >
              <Mail
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © 2026 Beinard Ariel G. Reginaldo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer