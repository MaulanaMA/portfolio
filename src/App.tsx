import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './sections/Hero/HeroSection';
import { AboutSection } from './sections/About/AboutSection';
import { SkillsSection } from './sections/Skills/SkillsSection';
import { CurrentlyLearningSection } from './sections/Learning/CurrentlyLearningSection';
import { ExperienceSection } from './sections/Experience/ExperienceSection';
import { ProjectsSection } from './sections/Projects/ProjectsSection';
import { EducationSection } from './sections/Education/EducationSection';
import { ServicesSection } from './sections/Services/ServicesSection';
import { ContactSection } from './sections/Contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/common/BackToTop';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark-bg text-slate-100 light:bg-light-bg light:text-slate-900 font-sans selection:bg-brand-blue selection:text-white transition-colors duration-300">
        {/* Scroll Progress Bar at very top */}
        <ScrollProgress />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <CurrentlyLearningSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ServicesSection />
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Back to Top Button */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
