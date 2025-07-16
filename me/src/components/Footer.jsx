import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiVite } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Built With</h3>
        <div className="flex justify-center items-center space-x-8 text-4xl">
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors">
            <SiVite />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <FaReact />
          </a>
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            <SiTailwindcss />
          </a>
        </div>
        <p className="mt-8 text-gray-500">&copy; {new Date().getFullYear()} Roberto M. Prisoris Jr. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
