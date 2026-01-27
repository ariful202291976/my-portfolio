'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="text-yellow-400">Ariful Islam</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Full-Stack Developer | React & Next.js Specialist
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Building scalable web applications with 2 years of professional experience 
              and a Master's in Software Engineering. Passionate about clean code, 
              exceptional UX, and maintainable architecture.
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <a
                href="#contact"
                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-colors duration-200"
              >
                View Projects
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/ariful202291976"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-ariful-islam-98094623b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arifulislam747630@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Send Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}