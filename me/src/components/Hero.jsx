import meImage from '../assets/me.png';
import { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const socialLinks = [
    {
      id: 1,
      name: 'Facebook',
      url: 'https://www.facebook.com/roberto.prisoris/',
      icon: <FaFacebook className="text-xl" />
    },
    {
      id: 2,
      name: 'Instagram',
      url: 'https://www.instagram.com/me_robbb/',
      icon: <FaInstagram className="text-xl" />
    },
    {
      id: 3,
      name: 'GitHub',
      url: 'https://github.com/JustRob12',
      icon: <FaGithub className="text-xl" />
    },
    {
      id: 4,
      name: 'TikTok',
      url: 'https://www.tiktok.com/@me_robbb',
      icon: <FaTiktok className="text-xl" />
    }
  ];

  return (
    <div id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Add dot pattern background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="container mx-auto px-4 min-h-screen relative">
        {/* Left side content */}
        <div className="absolute left-4 top-40 z-20">
          <h1 className="text-6xl font-bold">
            Prisoris
            <div className="w-12 h-1 bg-orange-400 my-2"></div>
            <span className="block text-4xl">Roberto</span>
          </h1>
          
          <div className="flex space-x-6 my-6">
            <a href="#" className="text-white hover:text-orange-400">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <i className="far fa-envelope text-xl"></i>
            </a>
            <a href="#" className="text-white hover:text-orange-400">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="border border-white px-8 py-2 rounded-full hover:bg-orange-400 hover:border-orange-400 transition-colors"
            >
              Contact Me
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-zinc-700 transition-colors"
                      role="menuitem"
                    >
                      <span className="mr-3">{link.icon}</span>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center image */}
        <div className="absolute left-1/2 top-32 transform -translate-x-80">
          <div className="relative">
            {/* White circle background */}
            <div className="absolute w-[500px] h-[500px] bg-white rounded-full left-1/2 transform -translate-x-1/2"></div>
            {/* Image */}
            <img
              src={meImage}
              alt="Profile"
              className="relative z-10 max-w-[450px]"
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="absolute right-10 top-40 z-20 text-right">
          <span className="text-orange-400 text-xl">MULTIMEDIA</span>
          <h2 className="text-[80px] font-bold mt-2 tracking-wider">DESIGNER</h2>
          <p className="mt-4 text-gray-300 max-w-md ml-auto">
            Combines graphic design, video, and interactive media to create visually 
            engaging content for digital platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;