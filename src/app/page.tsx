import { siteConfig } from "@/config";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  const hasProjects = siteConfig.projects.items.length > 0;
  const hasExperience = siteConfig.experience.items.length > 0;
  const hasEducation = siteConfig.education.items.length > 0;

  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      {hasProjects && <Projects />}
      {hasExperience && <Experience />}
      {hasEducation && <Education />}
      <Contact />
      <Footer />
    </main>
  );
}
