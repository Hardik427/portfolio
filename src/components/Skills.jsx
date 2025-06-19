import React from 'react';
import { Code, Server, Database, Brain } from 'lucide-react';

const Skills = ({ FadeInSection }) => {
    const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      skills: ["C++", "JavaScript", "C", "Python", "SQL"]
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8 text-rose-600" />,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "EJS", "Responsive Design"]
    },
    {
      title: "Backend & Server",
      icon: <Server className="w-8 h-8 text-green-600" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Middleware", "API Integration"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-8 h-8 text-fuchsia-600" />,
      skills: ["MongoDB", "MySQL", "Database Design", "Aggregation", "Indexing"]
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="w-8 h-8 text-yellow-600" />,
      skills: ["Git", "GitHub", "VS Code", "Cloud Storage"]
    },
    {
      title: "CS Fundamentals & ML",
      icon: <Brain className="w-8 h-8 text-orange-600" />,
      skills: ["Data Structures", "Algorithms", "OS", "DBMS", "CN", "NumPy", "Pandas", "scikit-learn"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-white px-4 py-2 rounded-lg text-gray-700 text-center hover:bg-indigo-50 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Skills;
