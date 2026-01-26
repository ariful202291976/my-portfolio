'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      title: 'Associate Programmer (Frontend)',
      company: 'Chuty Bangladesh Pvt. Ltd.',
      period: 'Oct 2023 – Jul 2024',
      location: 'Chittagong, Bangladesh',
      responsibilities: [
        'Developed responsive, high-performance user interfaces using React.js',
        'Collaborated with cross-functional teams following agile methodologies',
        'Improved application performance and code maintainability through best practices',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'Brand AtoZ',
      period: 'Dec 2022 – Jul 2023',
      location: 'Dhaka, Chattogram',
      responsibilities: [
        'Built interactive web applications using React.js and modern JavaScript',
        'Delivered responsive designs across multiple devices and browsers',
        'Streamlined development workflows with component-based architecture',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-neutral-950 rounded-lg border border-yellow-500/20 p-6 md:p-8 hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
                    <Briefcase className="text-yellow-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-yellow-400 mb-1">{exp.company}</p>
                    <p className="text-gray-400 mb-4">
                      {exp.period} • {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-yellow-400 mr-2">▹</span>
                          <span className="text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}