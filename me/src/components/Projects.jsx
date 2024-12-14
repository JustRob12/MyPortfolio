import acetrackImage from '../assets/acetrack.png';
import quickbitesImage from '../assets/quickbites.png';
import canteenImage from '../assets/canteen.png'; // Add your canteen management system screenshot

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
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h3 className="text-xl mb-2">What I Have Done so Far</h3>
          <div className="w-12 h-1 bg-orange-400 mx-auto mb-4"></div>
          <h2 className="text-5xl font-bold">Projects</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-orange-400"></div>

          {projectData.map((project, index) => (
            <div key={project.id} className={`flex items-center mb-20 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}>
              <div className={`w-[45%] ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-zinc-900/50 p-6 rounded-lg hover:bg-zinc-800/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.subtitle}</p>
                  
                  <div className="mb-4">
                    <a href={project.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="block hover:opacity-80 transition-opacity">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full rounded-lg mb-2"
                      />
                      <div className="text-orange-400 text-sm flex items-center">
                        <span>Visit Website</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  </div>

                  <ul className="space-y-2">
                    {project.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-center">
                        <span className="text-orange-400 mr-2">•</span>
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-black"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;