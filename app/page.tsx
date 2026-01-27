import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Experience from "../src/components/Experience";
import Projects from "../src/components/Projects";
import TechStack from "../src/components/TechStack";
import Timeline from "../src/components/Timeline";
import GitHubStats from "../src/components/GitHubStats";
import Contact from "../src/components/Contact";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Timeline />
      {/* <GitHubStats /> */}
      <Contact />
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; 2026 Md Ariful Islam. All rights reserved.</p>
      </footer>
    </main>
  );
}
