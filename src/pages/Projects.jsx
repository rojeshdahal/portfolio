const Projects = () => {
  return (
    <div id="projects" className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center py-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <img
            src="/src/images/Screenshot (226).jpg"
            alt="Project 1"
            className="w-full h-64 rounded mb-4"
          />
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">Ecommerce Website</h3>
            <p className="text-gray-700 text-base">
              It encompasses fundamental features of an eCommerce website,
              including a product catalog, seamless add-to-cart functionality,
              and user-friendly login/signup options.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <img
            src="/src/images/textutils.webp"
            alt="Project 2"
            className="w-full h-64 rounded mb-4"
          />
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">TextUtils</h3>
            <p className="text-gray-700 text-base">
              It converts given text to uppercase or lowercase. Features like
              dark mode is supported.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
