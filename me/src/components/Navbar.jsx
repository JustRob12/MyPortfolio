import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 p-6 z-50">
      <div className="container mx-auto flex justify-end items-center">
        <ul className="flex space-x-12">
          <li><Link to="/" className="text-white hover:text-orange-400 text-xl">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-orange-400 text-xl">About Me</Link></li>
          <li><Link to="/portfolio" className="text-white hover:text-orange-400 text-xl">Portfolio</Link></li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;