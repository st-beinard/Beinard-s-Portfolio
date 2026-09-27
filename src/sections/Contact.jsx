import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { Code2, BriefcaseBusiness, Mail, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

function Contact() {
  const [state, handleSubmit] = useForm('mwlponjg')

  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-slate-900 dark:bg-white" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
              Contact
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Let&apos;s Connect
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            I am open to opportunities where I can apply my skills, continue
            learning, and contribute to real-world projects.
          </p>
        </div>

        <motion.div
          className="grid gap-10 lg:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div>
            <div className="space-y-5">
              <a
                href="mailto:beinardariel.reginaldo@gmail.com"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    beinardariel.reginaldo@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/beireginaldo"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                  <FaLinkedin size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    linkedin.com/in/beireginaldo
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/st-beinard"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-white"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                  <FaGithub size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    GitHub
                  </p>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    github.com/st-beinard
                  </p>
                </div>
              </a>

              <div className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Santa Rosa, Laguna, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-slate-900 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-white md:p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Send Me a Message
            </h3>

            {state.succeeded ? (
              <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-5 text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-300">
                <p className="font-semibold">Message sent successfully!</p>
                <p className="mt-1 text-sm">
                  Thank you for reaching out. I will get back to you as soon
                  as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#F0F5F3]0 focus:ring-2 focus:ring-[#E2ECE9] dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-[#6F9B94] dark:focus:ring-[#1F3532]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#F0F5F3]0 focus:ring-2 focus:ring-[#E2ECE9] dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-[#6F9B94] dark:focus:ring-[#1F3532]"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-600 dark:text-red-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#F0F5F3]0 focus:ring-2 focus:ring-[#E2ECE9] dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-[#6F9B94] dark:focus:ring-[#1F3532]"
                  />

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-2 text-sm text-red-600 dark:text-red-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Send
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>

                {state.errors && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact