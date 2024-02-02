// import { FaArrowRightLong } from "react-icons/fa6";

import { HashLink } from "react-router-hash-link";

function About() {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center p-10 bg-gray-200  mt-3"
    >
      <div className="w-[80vw] md:w-1/2">
        <h2 className="text-3xl font-semibold mb-4">About Me </h2>

        <p className="text-gray-700 text-base">
          Hello, I am Rojesh Babu Dahal, a passionate learner in the realms of
          Frontend Development and UI/UX Design. Currently pursuing BSc.CSIT at
          Patan Multiple Campus, I immerse myself in the dynamic world of web
          development using React and craft visually stunning designs with Figma
          for an optimal user experience.
        </p>
      </div>
      <div className="w-[80vw] md:w-1/2 text-left">
        <div>
          <h3 className="text-xl font-bold mb-2 mt-6">More Information</h3>
          <p className="text-gray-700 text-base mb-4">
            I am deeply passionate about learning and consistently strive to
            enhance my skills in the ever-evolving field of technology. Excited
            to demonstrate my abilities, I approach each opportunity with
            enthusiasm, showcasing my dedication to growth and innovation.
          </p>
          <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 z font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            <HashLink smooth to="#contact">
              Contact Me
            </HashLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;

{
  /* <div>
<div id="about" className="about bg-slate-500 flex h-auto mt-2">
  <div className="text text-7xl w-[50%] flex items-center justify-center">
    About <br />
    Me
    <div className="icon ml-10">
      <FaArrowRightLong />
    </div>
  </div>
  <div className="content flex flex-col w-[50%] items-center justify-center text-xl m-10">
    <div className="text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
      molestias saepe eaque velit dolore, architecto doloribus, aliquid
      officiis, cumque ullam adipisci. Ullam minima ipsum amet quaerat
      reprehenderit dolorem aliquid. Neque? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Vero exercitationem harum quae natus
      hic iure, nam provident pariatur atque commodi voluptatibus,
      distinctio tempora? Maiores nostrum possimus officiis mollitia fuga
      eaque in, blanditiis consectetur ipsam molestias.
    </div>
    <div className="button text-lg">
      <button className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-1 px-4 mt-8 rounded-2xl">
        Contact Me
      </button>
    </div>
  </div>
</div>
</div> */
}
