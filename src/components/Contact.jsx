import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16" data-aos="fade-down">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect!</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and exciting projects. 
                Whether you want to discuss a potential role, need help with a project, or just 
                want to connect, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-indigo-600 mr-4" />
                  <span className="text-gray-700">gondwalhardik22@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-indigo-600 mr-4" />
                  <span className="text-gray-700">Vadodara, Gujarat, India</span>
                </div>
              </div>

              <div className="flex space-x-6 mt-8">
                <a 
                  href="https://github.com/Hardik427" 
                  className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hardik-gondwal/" 
                  className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:gondwalhardik22@gmail.com" 
                  className="bg-fuchsia-600 text-white p-3 rounded-lg hover:bg-fuchsia-700 transition-colors duration-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50 p-8 rounded-2xl" data-aos="fade-left">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-fuchsia-700 transition-colors duration-200 font-semibold"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;