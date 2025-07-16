import m2Image from '../assets/me2.png';
import { FaArrowAltCircleDown, FaArrowUp, FaCamera, FaDailymotion } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { motion } from 'framer-motion';
import StarBackground from './StarBackground';

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      <StarBackground />
      {/* Animated dot pattern background */}
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

      <div className="container mx-auto px-4">
        {/* Animated Introduction Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl mb-2">Introduction</h3>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-orange-400 mb-4"
          ></motion.div>
          <h2 className="text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="flex items-start gap-20">
          {/* Animated Left side - Description */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl mt-10"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-300 mb-9"
            >
              I am a passionate Layout Artist, Motion Graphics Editor, and Video Editor with a keen eye for
              detail and a love for storytelling through visuals. My work spans capturing stunning
              images, creating engaging designs, and editing dynamic videos, all with the goal
              of delivering impactful and visually compelling content.
            </motion.p>

            {/* Animated Personal Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-zinc-900/50 p-8 rounded-lg"
            >
              <h3 className="text-orange-400 mb-2">My Name is</h3>
              <h2 className="text-3xl font-bold mb-6">Roberto M. Prisoris Jr.</h2>
　　 　 　 　
              <div className="space-y-4">
            
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="flex items-center gap-3"
                >
                  <i className="fas fa-map-marker-alt text-orange-400"></i>
                  <span>City of Mati, Davao Oriental</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated Right side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative -mt-40"
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              src={m2Image}
              alt="Profile"
              className="max-w-[800px] relative z-10"
            />
          </motion.div>
        </div>

        {/* Animated Skills Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-20 mt-20"
        >
          {[
            { icon: <MdOutlineDesignServices />, title: "Layout Artist" },
            { icon: <FaRegWindowMaximize />, title: "UI Designer" },
            { icon: <FaVideo />, title: "Video Editor" },
            { icon: <FaArrowUp />, title: "Motion Graphics" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-zinc-900/50 p-8 rounded-lg text-center group hover:bg-zinc-800/50 transition-all duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-5xl mb-4 text-orange-400 mx-auto flex justify-center"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl">{skill.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;