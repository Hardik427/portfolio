import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => (
  <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur z-50 shadow-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
          &lt;Hardik /&gt;
        </div>
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "projects", "skills", "experience", "contact"].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors duration-200 ${
                activeSection === item ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden pb-4">
          {["home", "about", "projects", "skills", "experience", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left py-2 capitalize text-gray-600 hover:text-indigo-600"
            >
              {item}
            </button>
          ))}
        </nav>
      )}
    </div>
  </header>
);

const FadeInSection = ({ children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

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

export default Header;