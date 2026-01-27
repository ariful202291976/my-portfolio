'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react'

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const timelineEvents = [
    {
      year: '2024',
      title: 'Master of Applied Science in Software Engineering',
      organization: 'Memorial University of Newfoundland',
      location: 'St. John\'s, Canada',
      type: 'education',
      description: 'Specialized in scalable architecture and modern web technologies. Completed capstone project on e-commerce recommendation systems.',
      icon: <GraduationCap size={24} />,
      color: 'yellow'
    },
    {
      year: '2023 - 2024',
      title: 'Associate Programmer (Frontend)',
      organization: 'Chuty Bangladesh Pvt. Ltd.',
      location: 'Chittagong, Bangladesh',
      type: 'work',
      description: 'Developed responsive, high-performance user interfaces using React.js. Collaborated with cross-functional teams following agile methodologies.',
      icon: <Briefcase size={24} />,
      color: 'yellow'
    },
    {
      year: '2022 - 2023',
      title: 'Junior Web Developer',
      organization: 'Brand AtoZ',
      location: 'Dhaka, Chattogram',
      type: 'work',
      description: 'Built interactive web applications using React.js and modern JavaScript. Delivered responsive designs across multiple devices and browsers.',
      icon: <Briefcase size={24} />,
      color: 'yellow'
    },
    {
      year: '2022',
      title: 'Fullstack Web Development Certificate',
      organization: 'Programming Hero',
      location: 'Online',
      type: 'certification',
      description: 'Comprehensive training in MERN stack (MongoDB, Express.js, React, Node.js), RESTful APIs, authentication, and deployment.',
      icon: <Award size={24} />,
      color: 'yellow'
    },
    {
      year: '2015 - 2020',
      title: 'Bachelor of Science in Computer Science and Engineering',
      organization: 'Premier University',
      location: 'Chittagong, Bangladesh',
      type: 'education',
      description: 'Foundation in computer science fundamentals, algorithms, data structures, and software engineering principles.',
      icon: <GraduationCap size={24} />,
      color: 'yellow'
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
            My Journey
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A timeline of my education, professional experience, and key milestones
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-500/20 hidden md:block" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}>
                      <div className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''
                      }`}>
                        <div className="bg-yellow-400/10 p-2 rounded-lg border border-yellow-400/20">
                          <div className="text-yellow-400">
                            {event.icon}
                          </div>
                        </div>
                        <span className="text-yellow-400 font-semibold text-sm">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {event.title}
                      </h3>
                      <p className="text-yellow-400 mb-1">
                        {event.organization}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {event.location}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden md:block relative z-10">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-black shadow-lg shadow-yellow-400/20">
                      <div className="text-black">
                        {event.type === 'work' && <Briefcase size={20} />}
                        {event.type === 'education' && <GraduationCap size={20} />}
                        {event.type === 'certification' && <Award size={20} />}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-16 grid md:grid-cols-4 gap-6"
          >
            <div className="bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">2</div>
              <div className="text-gray-400">Degrees Earned</div>
            </div>
            <div className="bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-400">Technologies Mastered</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}