import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "Hackathon",
      title: "Code Kraft Mindbend",
      organization: "Mindbend SVNIT",
      date: "2025",
      description: "Got 1st place in a coding hackathon, solving complex problems under time constraints.The event involved multiple rounds of coding challenges, where I showcased my problem-solving skills and ability to work under pressure."
    },
    {
      type: "Hackathon",
      title: "Web-A-Thon",
      organization: "MINDBEND SVNIT",
      date: "2024",
      description: "Finalist in a web development hackathon, creating innovative solutions using modern web technologies. The project focused on building a responsive and user-friendly web application that addressed real-world problems."
    },
    // {
    //   type: "Course",
    //   title: "Machine Learning Specialization",
    //   organization: "Coursera - Stanford University",
    //   date: "2023",
    //   description: "Completed comprehensive ML course covering supervised learning, neural networks, and practical applications."
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Experience & Achievements</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <Award className="w-6 h-6 text-indigo-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{exp.date}</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

      </div>
    </section>
  );
};

export default Experience;