import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const maxLength = 40;
const clipStringLength = (string) => {
  const clippedString = string.slice(0, maxLength);
  return clippedString;
};

function SingleProject({ project }) {
  const [selectedProject, setSelectedProject] = useState({});

  return (
    <>
      <div
        className={`md:max-h-[300px] md:w-[450px] text-white flex flex-col gap-2 md:gap-4 md:opacity-75  md:hover:opacity-100 py-2 md:py-0 cursor-pointer h-full ${
          selectedProject.id ? "hidden" : "block"
        }`}
      >
        <img
          src={project.projectImg}
          className="md:h-[90%] md:w-[440px] rounded-lg cursor-pointe hover:border-[1px] hover:border-solid hover:boder-white"
          onClick={() => setSelectedProject(project)}
        />
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-lg md:text-xl">
              {project.projectName}
            </p>
            <p className=" md:text-lg text-base">
              Tech Stack: {clipStringLength(project.stack)}.....
            </p>
          </div>
          <button onClick={() => setSelectedProject(project)}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      {selectedProject.id && (
        <ProjectDetails
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}
    </>
  );
}

SingleProject.propTypes = null;

export default SingleProject;
