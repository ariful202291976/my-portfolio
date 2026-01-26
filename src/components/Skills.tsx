'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs'],
    },
    {
      title: 'Databases & Auth',
      skills: ['MongoDB', 'Firebase Authentication'],
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Java', 'Python', 'C', 'C++'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'GitHub Actions', 'Vercel', 'Browser DevTools', 'Redux DevTools'],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
            Technical Skills
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-950 rounded-lg border border-yellow-500/20 p-6 hover:border-yellow-500/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4 border-b-2 border-yellow-400 pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-yellow-400/10 text-yellow-400 text-sm rounded-md border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-neutral-950 rounded-lg border border-yellow-500/20 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              What I Bring to the Table
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/20">
                  <span className="text-3xl">🎯</span>
                </div>
                <h4 className="font-semibold text-yellow-400 mb-2">Problem Solving</h4>
                <p className="text-gray-400 text-sm">
                  Breaking down complex challenges into clean, efficient solutions
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/20">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="font-semibold text-yellow-400 mb-2">Performance</h4>
                <p className="text-gray-400 text-sm">
                  Building fast, responsive applications optimized for user experience
                </p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-400/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/20">
                  <span className="text-3xl">🤝</span>
                </div>
                <h4 className="font-semibold text-yellow-400 mb-2">Collaboration</h4>
                <p className="text-gray-400 text-sm">
                  Working effectively in agile teams to deliver quality results
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}