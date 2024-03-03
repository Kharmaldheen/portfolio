import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoFirebase } from "react-icons/bi";

import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";

import { BiLogoFigma } from "react-icons/bi";
import { FiFramer } from "react-icons/fi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.7, duration: 0.7, when: "beforeChildren" },
  },
};

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

function SkillsPage() {
  return (
    <motion.div
      className="text-white flex flex-col gap-10 md:gap-10 lg:gap-9"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1 className="font-bold lg:text-7xl md:text-4xl text-3xl">Skills.</h1>

      <p className="text-lg md:text-xl flex flex-col gap-2">
        <span className="text-gray-500 ">{"<p>"}</span>
        Here are some of the technologies I’ve been working with recently:{" "}
        <span className="text-gray-500">{`</p>`}</span>
      </p>

      <div className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-lg md:text-xl">
        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={BiLogoJavascript().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          Javascript
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={BiLogoHtml5().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          HTML5
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={BiLogoCss3().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          CSS3
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={FiFramer().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          Framer
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "#fff", transform: "msFilter" }}
            variants={svgVariants}
          >
            <motion.circle
              cx="12"
              cy="11.245"
              r="1.785"
              path={pathVariants}
            ></motion.circle>
            <motion.path
              d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"
              variants={pathVariants}
            ></motion.path>
            <motion.path
              d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"
              variants={pathVariants}
            ></motion.path>
            <motion.path
              d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"
              variants={pathVariants}
            ></motion.path>
            <motion.path
              d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"
              variants={pathVariants}
            ></motion.path>
          </motion.svg>
          React
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={BiLogoTailwindCss().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          TailwindCSS
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={BiLogoSass().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          SaSS
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={BiLogoGithub().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          Github
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={BiLogoGit().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          Git
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "#fff", transform: "msFilter" }}
            variants={svgVariants}
          >
            <motion.path
              d="M15.661 15.549a1.315 1.315 0 0 0 1.185-1.386 1.363 1.363 0 0 0-1.35-1.302h-.048a1.352 1.352 0 0 0-1.303 1.397c.024.379.179.687.391.911-.827 1.609-2.07 2.794-3.954 3.788-1.266.663-2.604.912-3.905.734-1.089-.153-1.94-.64-2.463-1.421-.78-1.185-.852-2.462-.201-3.74a5.597 5.597 0 0 1 1.658-1.931 7.88 7.88 0 0 1-.331-1.218c-3.506 2.51-3.148 5.942-2.084 7.564.794 1.184 2.415 1.941 4.19 1.941.474 0 .972-.035 1.457-.154 3.077-.592 5.409-2.438 6.747-5.16l.011-.023z"
              variants={pathVariants}
            ></motion.path>
            <motion.path
              d="M19.887 12.589c-1.834-2.154-4.533-3.337-7.611-3.337h-.403c-.2-.438-.661-.711-1.183-.711h-.036c-.744 0-1.325.64-1.301 1.385.023.71.627 1.302 1.35 1.302h.059a1.332 1.332 0 0 0 1.183-.828h.439c1.824 0 3.551.532 5.126 1.574 1.206.792 2.072 1.834 2.557 3.077.425 1.019.402 2.013-.035 2.843-.675 1.302-1.812 1.988-3.314 1.988-.947 0-1.871-.296-2.345-.509-.283.235-.758.626-1.102.863 1.042.473 2.096.746 3.113.746 2.309 0 4.023-1.302 4.676-2.557.709-1.422.651-3.813-1.161-5.859l-.012.023z"
              variants={pathVariants}
            ></motion.path>
            <motion.path
              d="M7.647 15.975c.023.71.626 1.302 1.35 1.302h.048a1.334 1.334 0 0 0 1.302-1.397c0-.71-.616-1.301-1.338-1.301h-.048c-.048 0-.118 0-.178.022-.982-1.657-1.397-3.434-1.242-5.349.094-1.445.567-2.7 1.42-3.742.71-.888 2.048-1.326 2.96-1.35 2.556-.048 3.622 3.138 3.704 4.404l1.184.354C16.536 5.036 14.122 3 11.813 3 9.647 3 7.647 4.574 6.842 6.884c-1.102 3.077-.379 6.036.971 8.404-.118.154-.189.426-.166.687z"
              variants={pathVariants}
            ></motion.path>
          </motion.svg>
          Redux
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            variants={svgVariants}
          >
            <motion.path
              d={BiLogoFigma().props.children[0].props.d}
              fill="#fff"
              variants={pathVariants}
            />
          </motion.svg>
          Figma
        </p>

        <p className="flex items-center gap-2">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            variants={svgVariants}
            width="24"
            height="24"
          >
            <motion.path
              d="M3.08378 15.25C1.42044 15.25 0.483971 13.3378 1.5038 12.0237L10.2099 0.806317C10.794 0.053716 11.9999 0.466765 11.9999 1.41944V8.74999H20.9159C22.5793 8.74999 23.5157 10.6622 22.4959 11.9762L13.7898 23.1937C13.2057 23.9463 11.9999 23.5332 11.9999 22.5805V15.25H3.08378Z"
              variants={pathVariants}
            ></motion.path>
          </motion.svg>
          Supabase
        </p>
      </div>
    </motion.div>
  );
}

export default SkillsPage;
