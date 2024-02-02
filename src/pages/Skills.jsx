const Skills = () => {
  return (
    <div id="skills" className="container mx-auto px-4 my-6">
      <h2 className="text-3xl font-semibold text-center py-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-full gap-10">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">Programming Languages</h3>
            <p className="text-gray-700 text-base">
              Python, C, C++, JavaScript
            </p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div className="mb-4">
            <h3 className="font-bold text-xl mb-2">Web Development</h3>
            <p className="text-gray-700 text-base">
              HTML, CSS, JavaScript, React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// <div id="skills" className=" bg-gray-400 mt-2">
//   <h1 className="text-4xl font-bold text-center pt-10">My Skills</h1>
//   <div className="flex py-6 items-center justify-center gap-x-32">
//     <div className="left">
//       HTML <br />
//       CSS <br />
//       JavaScript <br />
//       Tailwind <br />
//     </div>
//     <div className="right">
//       React <br />
//       MySQL <br />
//       git
//     </div>
//   </div>
// </div>
