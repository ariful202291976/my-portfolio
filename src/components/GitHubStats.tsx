'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, GitFork, Star, GitBranch } from 'lucide-react'

export default function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: <Github size={32} />,
      value: '50+',
      label: 'Repositories',
      color: 'yellow'
    },
    {
      icon: <GitBranch size={32} />,
      value: '500+',
      label: 'Contributions',
      color: 'yellow'
    },
    {
      icon: <Star size={32} />,
      value: '20+',
      label: 'Stars Earned',
      color: 'yellow'
    },
    {
      icon: <GitFork size={32} />,
      value: '15+',
      label: 'Forks',
      color: 'yellow'
    }
  ]

  const languages = [
    { name: 'JavaScript', percentage: 45, color: '#F7DF1E' },
    { name: 'TypeScript', percentage: 30, color: '#3178C6' },
    { name: 'Python', percentage: 10, color: '#3776AB' },
    { name: 'Java', percentage: 8, color: '#007396' },
    { name: 'Others', percentage: 7, color: '#6B7280' },
  ]

  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
            GitHub Activity
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            My open-source contributions and coding activity
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black rounded-lg p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-yellow-400 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* GitHub Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black rounded-lg p-6 border border-yellow-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Github className="text-yellow-400" size={24} />
                Contribution Graph
              </h3>
              <div className="aspect-video bg-neutral-950 rounded-lg flex items-center justify-center border border-yellow-500/10">
                <img 
                  src="https://ghchart.rshah.org/fbbf24/ariful202291976"
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto rounded-lg"
                  style={{ filter: 'brightness(1.2)' }}
                />
              </div>
            </motion.div>

            {/* Most Used Languages */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-black rounded-lg p-6 border border-yellow-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                Most Used Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{lang.name}</span>
                      <span className="text-yellow-400 font-semibold">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-900 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* GitHub Profile Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-black rounded-lg p-4 border border-yellow-500/20 overflow-hidden">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=ariful202291976&show_icons=true&theme=dark&bg_color=000000&title_color=fbbf24&text_color=ffffff&icon_color=fbbf24&border_color=fbbf2440"
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-black rounded-lg p-4 border border-yellow-500/20 overflow-hidden">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=ariful202291976&theme=dark&background=000000&ring=fbbf24&fire=fbbf24&currStreakLabel=fbbf24&border=fbbf2440"
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* View GitHub Profile Button */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/ariful202291976"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200"
            >
              <Github size={20} />
              View Full GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}