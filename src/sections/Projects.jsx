import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Code2,
  LockKeyhole,
} from 'lucide-react'

import proemsLogin from '../assets/projects/proems/login.png'
import proemsDashboard from '../assets/projects/proems/dashboard.png'
import proemsProjects from '../assets/projects/proems/projects.png'
import proemsAttendance from '../assets/projects/proems/attendance.png'
import proemsReports from '../assets/projects/proems/reports.png'

import barangayLogin from '../assets/projects/barangay/login.png'
import barangayDashboard from '../assets/projects/barangay/dashboard.png'
import barangayPermits from '../assets/projects/barangay/permits.png'
import barangayResidents from '../assets/projects/barangay/residents.png'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const projects = [
    {
      title: 'Project and Event Management System for Pag-Ibig Christian Ministries Inc.',
      role: 'Solo Developer',
      type: 'Thesis / Capstone Project',
      status: 'Completed & Deployed',
      description:
        'A web-based project and event management system developed for Pag-Ibig Christian Ministries Inc. The system helps manage projects, events, tasks, attendance, and reports through a centralized platform.',
      problem:
        'The organization needed a centralized way to manage multiple projects, events, tasks, attendance records, and reports instead of handling these activities across separate processes.',
      solution:
        'Developed a centralized web-based management system that organizes projects, events, tasks, attendance, and reports in one authenticated platform.',
      impact:
        'The system provides a centralized platform for organizing project and event activities, recording attendance, managing tasks, and generating reports. It also provides authenticated access for the organization’s users.',

      technologies: [
        'React',
        'Firebase',
        'Firestore',
        'Firebase Authentication',
        'Cloud Functions',
      ],
      features: [
        'Event Management',
        'Project Management',
        'Task Management',
        'Attendance Recording',
        'Reports',
      ],

      screenshots: [
        {
          image: proemsLogin,
          title: 'Login',
        },
        {
          image: proemsDashboard,
          title: 'Dashboard',
        },
        {
          image: proemsProjects,
          title: 'Project Management',
        },
        {
          image: proemsAttendance,
          title: 'Attendance',
        },
        {
          image: proemsReports,
          title: 'Reports',
        },
      ],


      
      isPrivate: true,
      featured: true,
    },
    {
      title: 'Barangay Management System',
      role: 'Solo Developer',
      type: 'School Project',
      status: 'Prototype / Not Currently Deployed',
      description:
        'A prototype barangay management system designed to organize resident information, barangay permits, and incident reports through a centralized, login-protected web application.',
      technologies: ['Laravel', 'PHP', 'MySQL'],
      features: [
        'Resident Information',
        'Barangay Permits',
        'Incident Reports',
      ],

      screenshots: [
        {
          image: barangayLogin,
          title: 'Login',
        },
        {
          image: barangayDashboard,
          title: 'Dashboard',
        },
        {
          image: barangayResidents,
          title: 'Resident Information',
        },
        {
          image: barangayPermits,
          title: 'Barangay Permits',
        },
      ],


      isPrivate: false,
      featured: false,
    },
  ]

  return (
    <section
      id="projects"
      className="bg-white px-6 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-slate-900 dark:bg-white" />

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300">
              Projects
            </p>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Projects I&apos;ve Built
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Selected academic and real-world projects that demonstrate my
            experience in system development, web technologies, and practical
            problem solving.
          </p>
        </div>

        <motion.div
            className="grid gap-8 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: {},
                visible: {
                transition: {
                    staggerChildren: 0.15,
                },
                },
            }}
            >
          {projects.map((project) => (
            <motion.article
                key={project.title}
                variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`group overflow-hidden rounded-2xl border bg-slate-50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-slate-900 hover:shadow-xl dark:bg-slate-950 dark:hover:border-white ${
                project.featured
                    ? 'border-[#B8CEC9] dark:border-[#274A45]'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
            >
              <div className="h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={
                    project.title.startsWith('Project and Event Management')
                      ? proemsDashboard
                      : barangayDashboard
                  }
                  alt={`${project.title} dashboard`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#E2ECE9] px-3 py-1 text-xs font-semibold text-[#315952] dark:bg-[#1F3532] dark:text-[#9BB9B2]">
                    {project.type}
                  </span>

                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold leading-7 text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#3F6F68] dark:text-[#6F9B94]">
                  {project.role}
                </p>

                <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Technologies
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Key Features
                  </h4>

                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-slate-600 dark:text-slate-400"
                      >
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.isPrivate ? (
                    <button
                      type="button"
                      className="inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-400"
                    >
                      <LockKeyhole size={16} />
                      Client System • Login Required
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex cursor-default items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-400"
                    >
                      <Code2 size={16} />
                      Prototype
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#3F6F68] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#315952]"
                  >
                    <ExternalLink size={16} />
                    View Case Study
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-6 py-8 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-700 dark:bg-slate-900 md:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3F6F68] dark:text-[#6F9B94]">
                    Case Study
                  </p>

                  <h3 className="mt-2 text-2xl font-bold leading-8 text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  Close
                </button>
              </div>

              <div className="mt-8 space-y-7">
                {selectedProject.screenshots &&
                  selectedProject.screenshots.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        System Screenshots
                      </h4>

                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {selectedProject.screenshots.map((screenshot) => (
                          <button
                            key={screenshot.title}
                            type="button"
                            onClick={() => setSelectedImage(screenshot)}
                            className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-left transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-950"
                          >
                            <div className="relative">
                              <img
                                src={screenshot.image}
                                alt={`${selectedProject.title} - ${screenshot.title}`}
                                className="h-56 w-full bg-slate-100 object-contain dark:bg-slate-900"
                              />

                              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-all group-hover:bg-slate-950/30">
                                <span className="rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold text-slate-900 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                                  Click to enlarge
                                </span>
                              </div>
                            </div>

                            <div className="px-4 py-3">
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                                {screenshot.title}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Project Overview
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.problem && (
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Problem
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {selectedProject.problem}
                    </p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Solution
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {selectedProject.solution}
                    </p>
                  </div>
                )}

                {selectedProject.impact && (
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Impact
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}


                


                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    My Role
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {selectedProject.role}. I was responsible for the system
                    development and implementation of the project.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Technologies Used
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Key Features
                  </h4>

                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-lg bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:bg-slate-950 dark:text-slate-400"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedProject.isPrivate && (
                  <div className="rounded-xl border border-[#B8CEC9] bg-[#F0F5F3] p-5 dark:border-[#274A45] dark:bg-[#1F3532]/40">
                    <div className="flex items-start gap-3">
                      <LockKeyhole
                        size={20}
                        className="mt-0.5 shrink-0 text-[#3F6F68] dark:text-[#6F9B94]"
                      />

                      <div>
                        <p className="font-semibold text-[#274A45] dark:text-[#9BB9B2]">
                          Private Client System
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[#274A45] dark:text-[#6F9B94]">
                          The deployed system requires authenticated access.
                          Public login credentials are not provided.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg bg-[#3F6F68] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#315952]"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 px-4 py-8 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative flex max-h-[90vh] max-w-6xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="mb-4 self-end rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition-colors hover:bg-slate-100"
              >
                Close
              </button>

              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] max-w-full rounded-xl bg-white object-contain shadow-2xl"
              />

              <p className="mt-4 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                {selectedImage.title}
              </p>
            </div>
          </div>
        )}


      </div>
    </section>
  )
}

export default Projects