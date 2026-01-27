import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import About from '../src/components/About'
import Experience from '../src/components/Experience'
import Projects from '../src/components/Projects'
import Skills from '../src/components/Skills'
import Contact from '../src/components/Contact'

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2026 Md Ariful Islam. All rights reserved.</p>
      </footer>
    </main>
  )
}