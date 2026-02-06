'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: 'ShopEase',
      subtitle: 'E-commerce Recommendation System',
      description: 'Full-stack e-commerce platform with personalized product recommendations using collaborative and content-based filtering algorithms.',
      features: [
        'Complete shopping experience with cart, checkout, and order management',
        'Stripe payment integration and secure authentication',
        'Admin dashboard for product and order management',
        'Personalized recommendation engine',
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com/ariful202291976/shop-ease',
      live: 'https://shop-ease-online-app.vercel.app/',
      image: '/images/shopease.png',
    },
    {
      title: 'DocEase',
      subtitle: 'Doctor\'s Appointment Booking System',
      description: 'Role-based appointment booking system for patients, doctors, and administrators with real-time scheduling and automated notifications.',
      features: [
        'Scheduling system with conflict prevention',
        'Automated email notification system',
        'Synchronized calendars across multiple user roles',
        'UML-based modeling for scalability',
      ],
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com/abdul-basit780/doc-ease',
      live: 'https://docease.vercel.app/',
      image: '/images/docease.png',
    },
    {
      title: 'Campus Event Management',
      subtitle: 'University Event Platform',
      description: 'Centralized platform for university event creation, management, and registration with role-based workflows.',
      features: [
        'Event creation and registration system',
        'Notification system for event updates',
        'Organizer dashboards with attendance tracking',
        'Role-based access control',
      ],
      tech: ['React', 'Next.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/ariful202291976/event_management',
      live: null,
      image: '/images/event.png',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-neutral-900 rounded-lg border border-yellow-500/20 overflow-hidden hover:border-yellow-500/40 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 flex items-center justify-center border-b border-yellow-500/20 relative overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-yellow-400 text-sm mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <ul className="space-y-1 mb-4">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-400">
                        <span className="text-yellow-400 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-xs rounded-full border border-yellow-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      <Github size={20} />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
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