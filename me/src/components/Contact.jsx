const Projects = () => {
    return (
      <div id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Project 1" className="w-full" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Project 1</h3>
                <p className="text-gray-600">Description of project 1</p>
              </div>
            </div>
  
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Project 2" className="w-full" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Project 2</h3>
                <p className="text-gray-600">Description of project 2</p>
              </div>
            </div>
  
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/300x200" alt="Project 3" className="w-full" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Project 3</h3>
                <p className="text-gray-600">Description of project 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;