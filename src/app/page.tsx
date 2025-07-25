import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import FacultySection from '../components/sections/FacultySection';
import ProjectsSection from '../components/sections/ProjectsSection';
import BlogSection from '../components/sections/BlogSection';
import AlumniSection from '../components/sections/AlumniSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FacultySection />
      <ProjectsSection />
      <BlogSection />
      <AlumniSection />
      <ContactSection />
    </>
  );
}
