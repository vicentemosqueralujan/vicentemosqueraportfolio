import { content } from "@/config";
import { defaultLocale } from "@/i18n/translations";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  const hasProjects = content[defaultLocale].projects.items.length > 0;
  const hasExperience = content[defaultLocale].experience.items.length > 0;
  const hasEducation = content[defaultLocale].education.items.length > 0;

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
