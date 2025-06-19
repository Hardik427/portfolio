import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ scrollToSection }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-fuchsia-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" data-aos="fade-down">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
            Hardik Gondwal
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          B.Tech Computer Science & Engineering Student | Full-Stack Developer | AI/ML Enthusiast
        </p>
        
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Passionate about building scalable web applications with MERN stack and integrating AI/ML solutions 
          to solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-fuchsia-700 transition-colors duration-200 font-semibold"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200 font-semibold"
          >
            Get In Touch
          </button>
        </div>

        <ChevronDown 
          className="mx-auto animate-bounce text-indigo-400 cursor-pointer mt-12" 
          size={32}
          onClick={() => scrollToSection('about')}
          data-aos="fade-up"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default Hero;