import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full top-0 p-6 z-50">
      <div className="container mx-auto flex justify-end items-center">
        <ul className="flex space-x-12">
          <li>
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-white hover:text-orange-400 text-xl cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-white hover:text-orange-400 text-xl cursor-pointer"
            >
              About Me
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-white hover:text-orange-400 text-xl cursor-pointer"
            >
              Portfolio
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;