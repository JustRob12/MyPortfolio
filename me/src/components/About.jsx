import m2Image from '../assets/me2.png';
import { FaCamera } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-black text-white relative py-20">
      {/* Add dot pattern background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="container mx-auto px-4">
        {/* Introduction Header */}
        <div className="mb-12">
          <h3 className="text-xl mb-2">Introduction</h3>
          <div className="w-12 h-1 bg-orange-400 mb-4"></div>
          <h2 className="text-5xl font-bold">About Me</h2>
        </div>

        <div className="flex items-start gap-20">
          {/* Left side - Description */}
          <div className="max-w-xl mt-20">
            <p className="text-gray-300 mb-12">
              I am a passionate Photographer, Layout Artist, and Video Editor with a keen eye for
              detail and a love for storytelling through visuals. My work spans capturing stunning
              images, creating engaging designs, and editing dynamic videos, all with the goal
              of delivering impactful and visually compelling content.
            </p>

            {/* Personal Info */}
            <div className="bg-zinc-900/50 p-8 rounded-lg">
              <h3 className="text-orange-400 mb-2">My Name is</h3>
              <h2 className="text-3xl font-bold mb-6">Roberto M. Prisoris Jr.</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <i className="far fa-calendar text-orange-400"></i>
                  <span>October 12, 2003</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-orange-400"></i>
                  <span>City of Mati, Davao Oriental</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative -mt-40">
            <img
              src={m2Image}
              alt="Profile"
              className="max-w-[800px] relative z-10"
            />
          </div>
        </div>

        {/* Skills Icons */}
        <div className="grid grid-cols-4 gap-6 mt-20">
          <div className="bg-zinc-900/50 p-8 rounded-lg text-center group hover:bg-zinc-800/50 transition-all duration-300">
            <div className="text-5xl mb-4 text-orange-400 mx-auto flex justify-center">
              <FaCamera />
            </div>
            <h3 className="text-xl">Photographer</h3>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-lg text-center group hover:bg-zinc-800/50 transition-all duration-300">
            <div className="text-5xl mb-4 text-orange-400 mx-auto flex justify-center">
              <MdOutlineDesignServices />
            </div>
            <h3 className="text-xl">Layout Artist</h3>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-lg text-center group hover:bg-zinc-800/50 transition-all duration-300">
            <div className="text-5xl mb-4 text-orange-400 mx-auto flex justify-center">
              <FaRegWindowMaximize />
            </div>
            <h3 className="text-xl">UI Designer</h3>
          </div>
          <div className="bg-zinc-900/50 p-8 rounded-lg text-center group hover:bg-zinc-800/50 transition-all duration-300">
            <div className="text-5xl mb-4 text-orange-400 mx-auto flex justify-center">
              <FaVideo />
            </div>
            <h3 className="text-xl">Video Editor</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;