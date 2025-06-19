import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
  {
    title: "Ecommerce-Website",
    description: "An e-commerce platform built with modern JavaScript technologies.",
    tech: ["MERN","Express JS","Node JS","Mongoose","JavaScript", "HTML", "CSS"],
    github: "https://github.com/Hardik427/Ecommerce-Website",
    demo: "",
    category: "web"
  },
  {
    title: "Hotel-Management-System",
    description: "C++ based console application to manage hotel operations.",
    tech: ["C++","OOPS","Data Structures","File Handling"],
    github: "https://github.com/Hardik427/Hotel-Management-System",
    demo: "",
    category: "desktop"
  },
  {
    title: "portfolio",
    description: "Personal portfolio website showcasing projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Lucide-react"],
    github: "https://github.com/Hardik427/portfolio",
    demo: "",
    category: "web"
  },
  {
    title: "Customer_churn_prediction",
    description: "Machine learning model to predict customer churn based on behavioral and transactional data.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "NumPy", "Jupyter Notebook", "Machine Learning","Keras", "TensorFlow","streamlit"],
    github: "https://github.com/Hardik427/Customer_churn_prediction",
    demo: "",
    category: "ml"
  },
  {
    title: "Iris-Flower-Classification-App",
    description: "ML classification project using the Iris dataset to predict flower species.",
    tech: ["Python", "Scikit-learn", "Matplotlib","TensorFlow", "Keras", "Streamlit", "Pandas", "NumPy"],
    github: "https://github.com/Hardik427/-Iris-Flower-Classification-App",
    demo: "",
    category: "ml"
  },
  {
    title: "Learnify-Education-Website",
    description: "An education-focused website providing tutoring resources.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Hardik427/Learnify-Education-Website",
    demo: "",
    category: "web"
  }
];


  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-indigo-100">
                      <Code className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex space-x-3">
                      <a 
                        href={project.github}
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        target="_blank" rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                          target="_blank" rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Projects;