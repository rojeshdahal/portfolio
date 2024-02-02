import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="w-[100vw]">
      <div className="body flex h-[35rem] bg-slate-400 mt-2">
        <div className="left w-[50vw] flex flex-col justify-center items-center">
          <p className="text-3xl">Hello it&apos;s me</p>
          <h1 className="text-5xl">ROJESH BABU DAHAL</h1>
          <p className="text-lg text">
            And I am a Frontend developer and UI/UX designer
          </p>
          <button
            type="button"
            className="mt-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <NavLink
              to="/src/images/rojesh_babu_cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View my CV
            </NavLink>
          </button>
        </div>
        <div className="right ">
          <img
            src="/src/images/myimg.svg"
            alt=""
            className="myimg h-full w-full"
          />
        </div>
      </div>
      <div className="about">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
