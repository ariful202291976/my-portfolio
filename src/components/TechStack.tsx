'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const techStack = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️', color: '#61DAFB' },
        { name: 'Next.js', icon: '▲', color: '#ffffff' },
        { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
        { name: 'Tailwind', icon: '🎨', color: '#06B6D4' },
        { name: 'Redux', icon: '🔄', color: '#764ABC' },
        { name: 'HTML5', icon: '🌐', color: '#E34F26' },
        { name: 'CSS3', icon: '🎭', color: '#1572B6' },
        { name: 'JavaScript', icon: 'JS', color: '#F7DF1E' },
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '🟢', color: '#339933' },
        { name: 'Express', icon: '⚡', color: '#ffffff' },
        { name: 'MongoDB', icon: '🍃', color: '#47A248' },
        { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
      ]
    },
    {
      category: 'Tools & Others',
      technologies: [
        { name: 'Git', icon: '📦', color: '#F05032' },
        { name: 'GitHub', icon: '🐙', color: '#ffffff' },
        { name: 'Vercel', icon: '▲', color: '#ffffff' },
        { name: 'VS Code', icon: '💻', color: '#007ACC' },
        { name: 'Figma', icon: '🎨', color: '#F24E1E' },
        { name: 'Postman', icon: '📮', color: '#FF6C37' },
      ]
    }
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
            Tech Stack
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>

          <div className="space-y-12">
            {techStack.map((stack, stackIndex) => (
              <div key={stackIndex}>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  {stack.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                  {stack.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: stackIndex * 0.2 + techIndex * 0.1 
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div 
                          className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300"
                          style={{ 
                            filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.3))'
                          }}
                        >
                          {tech.icon}
                        </div>
                        <h4 
                          className="font-semibold text-lg group-hover:text-yellow-400 transition-colors duration-300"
                          style={{ color: tech.color }}
                        >
                          {tech.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <div className="text-gray-400">Frontend Technologies</div>
            </div>
            <div className="bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4+</div>
              <div className="text-gray-400">Backend Technologies</div>
            </div>
            <div className="bg-neutral-950 rounded-lg p-6 border border-yellow-500/20 text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">6+</div>
              <div className="text-gray-400">Development Tools</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}