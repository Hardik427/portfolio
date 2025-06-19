import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16" data-aos="fade-down">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Education & Background</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a Computer Science undergraduate at Sardar Vallabhbhai National Institute of Technology, Surat, 
              with a CGPA of 8.09. I specialize in full-stack web development and have worked extensively with 
              technologies like React, Node.js, MongoDB, and Express. I also enjoy exploring AI/ML through hands-on projects 
              involving Python, scikit-learn, and more.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I’ve been a Junior Developer at GDSC and a finalist at multiple hackathons including MindBend and GWOC. 
              I strive to blend strong CS fundamentals with real-world application, whether through backend logic or intuitive UI.
            </p>
            <h4 className="text-lg font-semibold text-fuchsia-600 mb-4">Current Goals:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                Preparing for placements and internships
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                Building impactful MERN stack and AI projects
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                Deepening core CS fundamentals (DSA, OS, CN)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                Actively contributing to open-source communities
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-fuchsia-50 p-8 rounded-2xl" data-aos="fade-left">
            <h4 className="text-lg font-semibold text-indigo-600 mb-6">Tech Stack</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Languages & Libraries</h5>
                <p className="text-gray-700 text-sm">C++, JavaScript, Python, SQL, NumPy, Pandas</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Frontend</h5>
                <p className="text-gray-700 text-sm">React.js, Tailwind CSS, Bootstrap, HTML5, CSS3</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Backend</h5>
                <p className="text-gray-700 text-sm">Node.js, Express.js, EJS, JWT Auth</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Database</h5>
                <p className="text-gray-700 text-sm">MongoDB, MySQL, Database Design</p>
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-2">Tools & Dev</h5>
                <p className="text-gray-700 text-sm">Git, GitHub, VS Code, Postman, Docker (learning)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
