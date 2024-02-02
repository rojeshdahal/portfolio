import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2  w-[100vw] sticky">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold em em-grinning no-underline hover:text-white hover:no-underline">
          <NavLink to="/">My Portfolio</NavLink>
        </div>
        <div className="flex  w-full pt-2  md:justify-between md:w-1/2 ">
          <ul className="list-reset  flex-1 md:flex-none items-center">
            <li className="mr-3 inline-block py-2 px-4 text-gray-400 no-underline hover:text-gray-100">
              <Link smooth to="#about">
                About
              </Link>
            </li>
            <li className="mr-3 inline-block text-gray-400 no-underline hover:text-gray-100 hover:text-underline py-2 px-4">
              <Link smooth to="#education">
                Education
              </Link>
            </li>
            <li className="mr-3 inline-block text-gray-400 no-underline hover:text-gray-100 hover:text-underline py-2 px-4">
              <Link smooth to="#skills">
                Skills
              </Link>
            </li>
            <li className="mr-3 inline-block text-gray-400 no-underline hover:text-gray-100 hover:text-underline py-2 px-4">
              <Link smooth to="#projects">
                Projects
              </Link>
            </li>
            <li className="mr-3 inline-block text-gray-400 no-underline hover:text-gray-100 hover:text-underline py-2 px-4">
              <Link smooth to="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <div>
//   <div className="navbar fixed top-0 w-full flex h-[4rem] bg-zinc-600 items-center gap-x-96 ">
//     <div className="logo text-white start-0 ml-10 cursor-pointer">
//       <NavLink to="/home">Portfolio.</NavLink>
//     </div>
//     <div className="other justify-end">
//       <ul className="flex gap-x-6 text-white ">
//         <li className="cursor-pointer hover:underline ">
//           <Link smooth to="/home#about">
//             About
//           </Link>
//         </li>
//         <li className="cursor-pointer hover:underline ">
//           <Link smooth to="/home#education">
//             Education
//           </Link>
//         </li>
//         <li className="cursor-pointer hover:underline ">
//           <Link smooth to="/home#skills">
//             Skills
//           </Link>
//         </li>
//         <li className="cursor-pointer hover:underline ">
//           <Link smooth to="/home#projects">
//             Projects
//           </Link>
//         </li>
//         <li className="cursor-pointer hover:underline ">
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
