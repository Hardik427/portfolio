import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-indigo-900 via-fuchsia-900 to-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
          Hardik Gondwal
        </div>
        <p className="text-gray-300 mb-6">
          Building the future, one line of code at a time.
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/Hardik427" className="text-gray-300 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/hardik-gondwal/" className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:gondwalhardik22@gmail.com" className="text-gray-300 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">
            © 2024 Hardik Gondwal. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;