import { useCycle, motion } from "framer-motion";
import { useEffect } from "react";
import { BiExpand } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiCollapse } from "react-icons/bi";

import { BiLogoGithub } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BiSolidBank } from "react-icons/bi";
import { BiCloudLightRain } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";

const handleEmailLinkClick = (emailAddress) => {
  // Create a mailto link
  const mailtoLink = `mailto:${emailAddress}`;

  // Open the default email client
  window.location.href = mailtoLink;
};

function ProjectDetails({ selectedProject, setSelectedProject }) {
  const [animation, cycleAnimation] = useCycle("60%", "100%");

  const {
    githubLink,
    id,
    projectDetails,
    projectImg,
    projectName,
    stack,
    websiteLink,
  } = selectedProject;

  useEffect(
    function () {
      window.history.pushState(
        null,
        "",
        `/projects/${selectedProject.projectName.split(" ").join("-")}`
      );

      return () => {
        window.history.pushState(null, "", "/projects");
      };
    },

    [selectedProject.projectName]
  );
  return (
    <div className=" overflow-y-scroll">
      {/* overlay */}
      <div className="z-40 w-[100%] absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] h-full"></div>

      <motion.div
        className={`bg-dark-background-body z-[50] text-white absolute top-0   w-full py-6 md:py-10 md:px-10 px-6 overflow-y-scroll h-full md:h-full  ${
          animation === "60%" && "md:w-[60%]"
        } ${
          animation === "100%" && "md:w-[100%]"
        }  flex flex-col gap-6 md:gap-16  md:p-8 transition-all duration-500  ${
          selectedProject.id ? "right-0" : "right-[-1200px]"
        }`}
      >
        {/* the top */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 md:gap-6">
            <p>
              {animation === "60%" ? (
                <BiExpand
                  className="text-2xl md:text-4xl font-bold hidden md:block cursor-pointer"
                  onClick={() => cycleAnimation()}
                />
              ) : (
                <BiCollapse
                  className="text-4xl font-bold hidden md:block cursor-pointer"
                  onClick={() => cycleAnimation()}
                />
              )}
            </p>
            <button className="block" onClick={() => setSelectedProject({})}>
              <BiX className="text-3xl md:text-4xl font-bold" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div>
              <a
                href="https://github.com/Kharmaldheen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="44"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={BiLogoGithub().props.children[0].props.d}
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>

            <div>
              <span
                onClick={() =>
                  handleEmailLinkClick("abdullahikamaldeen3@gmail.com")
                }
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="44"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={BiLogoGmail().props.children[0].props.d}
                    fill="#fff"
                  />
                </svg>
              </span>
            </div>

            <div>
              <a
                href="https://twitter.com/kamzykay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="44"
                  viewBox="0 0 24 24"
                >
                  <path
                    d={BiLogoTwitter().props.children[0].props.d}
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://linkedin.com/in/abdullahi-kamaldeen-b518a321a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="44"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* End of top */}

        {/* start of body */}
        <div
          className={`px-4 md:px-16 flex flex-col gap-10 md:gap-16 ${
            animation === "100%" && "mx-[400px]"
          }`}
        >
          <div>
            {projectName === "The Wild Aosis" && (
              <BiBriefcase className="text-4xl md:text-5xl" />
            )}
            {projectName === "The Bank App" && (
              <BiSolidBank className="text-4xl md:text-5xl" />
            )}
            {projectName === "The Weather app" && (
              <BiCloudLightRain className="text-4xl md:text-5xl" />
            )}
          </div>

          <h1 className="Capitalize text-3xl md:text-4xl font-bold">
            {projectName}
          </h1>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-4">
                <span>
                  <BiCodeAlt className="text-2xl md:text-3xl" />
                </span>
                <span className="text-lg md:text-xl text-gray-400">Stack:</span>
              </div>
              <p className="text-lg md:text-xl">{stack}</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <span>
                  <BiLogoGithub className="text-2xl md:text-3xl" />
                </span>
                <span className="text-lg md:text-xl text-gray-400">
                  Source:
                </span>
              </div>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline md:no-underline md:hover:underline text-lg md:text-xl"
              >
                Kharmaldheen
              </a>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <span>
                  <BiGlobe className="text-2xl md:text-3xl" />
                </span>
                <span className="text-lg md:text-xl text-gray-400">Demo:</span>
              </div>
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline md:no-underline md:hover:underline text-lg md:text-xl"
              >
                {projectName}
              </a>
            </div>
          </div>

          <span className="h-0.5 w-full bg-slate-400"></span>

          <div>
            <p className="text-lg md:text-xl leading-relaxed text-justify">
              {projectDetails}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

ProjectDetails.propTypes = null;

export default ProjectDetails;
