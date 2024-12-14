import meImage from '../assets/me.png';
import { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
      {/* Background dots with fade-in animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      ></motion.div>

      <div className="container mx-auto px-4 min-h-screen relative">
        {/* Left side content with slide-in animation */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-4 top-40 z-20"
        >
          <h1 className="text-6xl font-bold">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Prisoris
            </motion.span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-12 h-1 bg-orange-400 my-2"
            ></motion.div>
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="block text-4xl"
            >
              Roberto
            </motion.span>
          </h1>
          
          {/* Social icons with stagger animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-6 my-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
            ))}
          </motion.div>

          {/* Contact button with hover animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="border border-white px-8 py-2 rounded-full hover:bg-orange-400 hover:border-orange-400 transition-colors"
            >
              Contact Me
            </motion.button>
            
            {/* Dropdown Menu with fade animation */}
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5"
              >
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
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Center image with fade-in and float animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-10 top-32 transform -translate-x-40"
        >
          <div className="relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute w-[500px] h-[500px] bg-white rounded-full left-1/2 transform -translate-x-1/2"
            ></motion.div>
            <motion.img
              animate={{ 
                y: [0, -10, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
              src={meImage}
              alt="Profile"
              className="relative left-60 z-20 max-w-[450px]"
            />
          </div>
        </motion.div>

        {/* Right side content with slide-in animation */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute right-10 top-40 z-20 text-right"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-orange-400 text-xl"
          >
            MULTIMEDIA
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[80px] font-bold mt-2 tracking-wider"
          >
            DESIGNER
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-gray-300 max-w-md ml-auto"
          >
            Combines graphic design, video, and interactive media to create visually 
            engaging content for digital platforms.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;