import { motion } from 'framer-motion'
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Clock3,
} from 'lucide-react'

function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 px-6 py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-slate-900 dark:bg-white" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
              Experience
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Hands-on Experience
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Practical experience gained through my IT training at Cavite State
            University - Carmona Campus.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-[#B8CEC9] md:block dark:bg-[#274A45]" />

          <motion.article
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-slate-900 hover:shadow-xl md:ml-12 md:p-8 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
            <div className="absolute -left-[3.05rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-slate-50 bg-[#3F6F68] text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 md:flex dark:border-slate-950">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#3F6F68] dark:text-[#6F9B94]">
                  IT Support Trainee
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                  Cavite State University - Carmona Campus
                </h3>

                <p className="mt-1 text-base font-medium text-slate-600 dark:text-slate-300">
                  Division of Information and Instructional Technology (DIIT)
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <span>February 12 - May 4, 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  <span>486 Hours</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Carmona, Cavite</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                Key Responsibilities
              </h4>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {[
                  'Computer troubleshooting and hardware diagnosis',
                  'Computer inventory, serial number recording, and Google Sheets documentation',
                  'AVR and UPS checking and support',
                  'MAC filtering, guest network configuration, and web access management in Room 104',
                  'Development and maintenance of the DIIT Google Site, including information related to the 17 Sustainable Development Goals',
                  'Preparation and organization of accreditation documents for BS Industrial Technology and BS Computer Engineering',
                  'Assistance with DICT Free WiFi activities and campus IT support',
                  'Technical assistance during campus events',
                  'Participation in SecureBuild Extension Program, TechAssist, LEGS, and Job Fair activities',
                ].map((responsibility) => (
                  <div
                    key={responsibility}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-white dark:hover:bg-slate-900"
                  >
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#E2ECE9] bg-[#F0F5F3] p-5 dark:border-[#274A45]/50 dark:bg-[#1F3532]/30">
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Experience Focus
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                The training provided practical exposure to IT support,
                computer troubleshooting, networking-related tasks,
                documentation, technical assistance, and campus IT operations.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default Experience