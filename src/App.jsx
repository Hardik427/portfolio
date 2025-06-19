import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // FadeInSection utility
  const FadeInSection = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef();
    useEffect(() => {
      const observer = new window.IntersectionObserver(
        ([entry]) => entry.isIntersecting && setIsVisible(true),
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => ref.current && observer.unobserve(ref.current);
    }, []);
    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 overflow-x-hidden">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Hero FadeInSection={FadeInSection} scrollToSection={scrollToSection} />
      <About FadeInSection={FadeInSection} />
      <Projects FadeInSection={FadeInSection} />
      <Skills FadeInSection={FadeInSection} />
      <Experience FadeInSection={FadeInSection} />
      <Contact FadeInSection={FadeInSection} />
      <Footer />
    </div>
  );
};

export default App;