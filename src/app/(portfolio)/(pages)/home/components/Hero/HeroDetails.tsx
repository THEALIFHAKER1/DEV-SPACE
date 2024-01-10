import React from "react";
import { FaDatabase, FaJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";

const data = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Tailwind",
    icon: <BiLogoTailwindCss />,
  },
  {
    name: "PHP",
    icon: <FaPhp />,
  },
  {
    name: "Javascript",
    icon: <FaJs />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "Database",
    icon: <FaDatabase />,
  },
];
function HeroDetails() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center md:items-start md:text-start">
        <h1
          className="text-2xl font-bold"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          THEALIFHAKER1
        </h1>
        <p className="max-w-xs">
          MUHAMMAD ALIF DANIEL BIN MOHD HAIRUL HEZZELIN
        </p>
        <h1
          className="text-xl font-bold"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {"Fullstack Developer </>"}
        </h1>
        <div className="my-5 flex md:justify-start justify-center h-10 w-full flex-row space-x-2 overflow-x-auto">
          {data.map((item, id) => (
            <div
              key={id}
              className="flex h-10 w-10 items-center justify-between rounded border border-black bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroDetails;
