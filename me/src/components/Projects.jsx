import acetrackImage from '../assets/acetrack.png';
import quickbitesImage from '../assets/quickbites.png';
import canteenImage from '../assets/canteen.png';
import pubmat1Image from '../assets/Pubmats/pubmat1.jpg';
import pubmat2Image from '../assets/Pubmats/pubmat2.jpg';
import pubmat3Image from '../assets/Pubmats/pubmat3.jpg';
import pubmat4Image from '../assets/Pubmats/pubmat4.jpg';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StarBackground from './StarBackground';

const Projects = () => {
  const projectsByCategory = {
    "Pubmats": [
      {
        id: 4,
        title: "𝐒𝐈𝐆𝐋𝐀𝐊𝐀𝐒 𝟐𝟎𝟐𝟓 – 𝟒-𝐏𝐄𝐀𝐓 𝐎𝐕𝐄𝐑𝐀𝐋𝐋 𝐂𝐇𝐀𝐌𝐏𝐈𝐎𝐍",
        subtitle: "Event Promotion",
        image: pubmat1Image,
        link: "https://www.facebook.com/share/p/16p39sFygs/",
        linkText: "View on Facebook",
        events: [
          "Celebrated the 4-peat overall championship for SIGLAKAS 2025.",
          "Designed for maximum visual impact and engagement."
        ]
      },
      {
        id: 5,
        title: "𝐃𝐚𝐯𝐚𝐨 𝐎𝐫𝐢𝐞𝐧𝐭𝐚𝐥 𝐒𝐭𝐚𝐭𝐞 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐢𝐬 𝐑𝐞𝐚𝐝𝐲 𝐭𝐨 𝐂𝐨𝐧𝐪𝐮𝐞𝐫 𝐭𝐡𝐞 𝐀𝐫𝐞𝐧𝐚!",
        subtitle: "Good Luck Message",
        image: pubmat2Image,
        link: "https://www.facebook.com/share/p/16hQkgaAva/",
        linkText: "View on Facebook",
        events: [
          "A motivational poster for the DOrSU Raptors.",
          "Wishing them the best for MASTS 2024."
        ]
      },
      {
        id: 6,
        title: "𝐒𝐨𝐚𝐫𝐢𝐧𝐠 𝐇𝐢𝐠𝐡: 𝐁𝐞𝐬𝐭 𝐖𝐢𝐬𝐡𝐞𝐬 𝐭𝐨 𝐭𝐡𝐞 𝐃𝐎𝐫𝐒𝐔 𝐑𝐚𝐩𝐭𝐨𝐫𝐬 𝐟𝐨𝐫 𝐌𝐀𝐒𝐓𝐒 𝟐𝟎𝟐𝟒!",
        subtitle: "Good Luck Message",
        image: pubmat3Image,
        link: "https://www.facebook.com/share/p/16p2EGEFPE/",
        linkText: "View on Facebook",
        events: [
          "A motivational poster for the DOrSU Raptors MLBB players."
        ]
      },
      {
        id: 7,
        title: "𝗣𝗿𝗲𝗹𝗶𝗺𝘀 𝘄𝗲𝗲𝗸 𝗻𝗮 𝘁𝗮, 𝗸𝗮-𝗔𝗖𝗘𝗦",
        subtitle: "Good Luck Message",
        image: pubmat4Image,
        link: "https://www.facebook.com/share/p/1BwAJ1qASf/",
        linkText: "View on Facebook",
        events: [
          "A motivational poster for the DOrSU Raptors MLBB players."
        ]
      }
    ],
    "Layout Shirts": [],
    "Website": [
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
    ],
    "Video": [],
  };

  const categoryOrder = ["Pubmats", "Layout Shirts", "Website", "Video"];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="projects" className="min-h-screen bg-black text-white relative overflow-hidden py-20">
      <StarBackground />
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

        <div className="space-y-16">
          {categoryOrder.map(category => (
            <div key={category}>
              <h3 className="text-3xl font-bold mb-8 text-orange-400">{category}</h3>
              {projectsByCategory[category].length > 0 ? (
                <div className="w-full">
                  <Slider {...sliderSettings} infinite={projectsByCategory[category].length > sliderSettings.slidesToShow}>
                    {projectsByCategory[category].map((project, index) => (
                      <div key={project.id} className="p-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-zinc-900/50 p-6 rounded-lg hover:bg-zinc-800/50 transition-all duration-300 h-full flex flex-col"
                          whileHover={{ y: -5 }}
                        >
                          <div className="mb-4">
                            <motion.img 
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-64 object-contain rounded-lg mb-4"
                            />
                            {project.link && (
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block hover:opacity-80 transition-opacity"
                              >
                                <div className="text-orange-400 text-sm flex items-center">
                                  <span>{project.linkText || 'Visit Website'}</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                              </a>
                            )}
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4 h-12">{project.subtitle}</p>
                            <ul className="space-y-2 text-sm">
                              {project.events.map((event, eventIndex) => (
                                <li key={eventIndex} className="flex items-start">
                                  <span className="text-orange-400 mr-2 mt-1">•</span>
                                  <span>{event}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : (
                <div className="flex items-center justify-center h-48 bg-zinc-900/50 rounded-lg">
                    <p className="text-gray-500">Projects for this category will be added soon.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;