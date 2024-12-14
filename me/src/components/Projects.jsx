import acetrackImage from '../assets/acetrack.png';
import quickbitesImage from '../assets/quickbites.png';
import canteenImage from '../assets/canteen.png';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "AceTrack",
      subtitle: "QR Code Attendance System",
      image: acetrackImage,
      link: "https://acetrack.vercel.app/home",
      events: [
        "Efficient scanning and clear identification",
        "Seamless attendance management",
        "QR Code Precision",
        "Real-time tracking",
        "User-friendly interface"
      ]
    },
    {
      id: 2,
      title: "QuickBites",
      subtitle: "Food Ordering System",
      image: quickbitesImage,
      link: "https://quicky-bite-jnjc.vercel.app/login",
      events: [
        "User-friendly ordering interface",
        "Real-time order tracking",
        "Secure authentication system",
        "Responsive design",
        "Efficient order management"
      ]
    },
    {
      id: 3,
      title: "Campus Bite",
      subtitle: "University Canteen Management System",
      image: canteenImage,
      link: "https://final-cms.vercel.app/",
      events: [
        "Comprehensive food management system",
        "Real-time inventory tracking",
        "Multiple category management (Meals, Snacks, Drinks, Materials)",
        "Order deployment and history tracking",
        "Account management and reporting features"
      ]
    },
    // ... rest of your projects
  ];

  return (
    <div id="projects" className="min-h-screen bg-black text-white relative py-20">
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h3 className="text-xl mb-2">What I Have Done so Far</h3>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-orange-400 mx-auto mb-4"
          ></motion.div>
          <h2 className="text-5xl font-bold">Projects</h2>
        </motion.div>

        <div className="relative">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-orange-400"
          ></motion.div>

          {projectData.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              key={project.id} 
              className={`flex items-center mb-20 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`w-[45%] ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-zinc-900/50 p-6 rounded-lg hover:bg-zinc-800/50 transition-all duration-300"
                >
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 mb-4"
                  >
                    {project.subtitle}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-4"
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={project.image} 
                        alt={project.title}
                        className="w-full rounded-lg mb-2"
                      />
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="text-orange-400 text-sm flex items-center"
                      >
                        <span>Visit Website</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.div>
                    </a>
                  </motion.div>

                  <motion.ul 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    {project.events.map((event, eventIndex) => (
                      <motion.li 
                        key={eventIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + eventIndex * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="text-orange-400 mr-2">•</span>
                        {event}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>

              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-black"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;