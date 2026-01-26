'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-lg flex items-center justify-center border border-yellow-500/20">
                <div className="text-center">
                  <div className="w-64 h-64 rounded-full mx-auto mb-4 border-4 border-yellow-400/30 overflow-hidden relative">
                    <Image 
                      src="/images/ariful.jpg" 
                      alt="Ariful Islam"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Full-Stack Developer & Problem Solver
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate Full-Stack Developer with 2 years of professional experience 
                building responsive web applications. I recently completed my Master's in Software 
                Engineering from Memorial University of Newfoundland, where I specialized in 
                scalable architecture and modern web technologies.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                My journey began with a Bachelor's in Computer Science and Engineering, and I've 
                since worked with companies like Chuty Bangladesh and Brand AtoZ, where I honed 
                my skills in React.js, Next.js, and Node.js.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm driven by the challenge of creating intuitive user experiences and writing 
                clean, maintainable code. Whether it's building e-commerce platforms with 
                recommendation systems or healthcare appointment systems, I focus on delivering 
                solutions that are both technically sound and user-friendly.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-900 p-4 rounded-lg border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-400 mb-2">Education</h4>
                  <p className="text-white text-sm">Master's in Software Engineering</p>
                  <p className="text-gray-400 text-sm">Memorial University</p>
                </div>
                <div className="bg-neutral-900 p-4 rounded-lg border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-400 mb-2">Experience</h4>
                  <p className="text-white text-sm">2+ Years Professional</p>
                  <p className="text-gray-400 text-sm">Frontend & Full-Stack</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}