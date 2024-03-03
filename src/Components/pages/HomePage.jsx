import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },

  // exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

function HomePage() {
  const navigate = useNavigate();

  const downloadCVPdf = () => {
    const filePath = "/ABDULLAHI KAMALDEEN OLALEKAN_CV.pdf";

    saveAs(filePath, "AbdullahiKamaldeen_CV.pdf");
  };
  return (
    <motion.div
      className="text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I am Abdullahi Kamaldeen (kay)
      </h1>
      <p className="text-left mt-8 text-2xl md:text-3xl bg-gradient-to-r text-transparent from-white via-text-secondary to-primary-color bg-clip-text font-bold">{`</Frontend Developer>`}</p>

      <p className="md:w-[80%] w-full text-white mt-8 text-base md:text-xl text-justify">
        <span className="text-gray-500">{`<p>`}</span> <br />
        Developer by day, gamer by leisure 🎮. With a passion for design and an
        obsession for pixel perfection, I specialize in creating elegant,
        user-friendly websites, and responsive user interfaces. Always eager to
        learn and explore the evolving landscape of web development <br />
        <span className="text-gray-500">{`</p>`}</span>
      </p>

      <p className="mt-8 italic text-gray-200 text-base md:text-lg">
        {`Do you dream of a seamless online presence? Because that's how you get a
        website developer. - Code Enthusiast`}
      </p>

      <div className="flex gap-3 md:gap-4">
        <motion.button
          onClick={() => navigate("/contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 bg-primary-color text-white p-2 md:p-4 rounded-lg transition-all duration-300 hover:bg-transparent hover:border-[1px] hover:border-primary-color "
        >
          Contact me
        </motion.button>

        <motion.button
          onClick={downloadCVPdf}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 bg-primary-color text-white p-2 md:p-4 rounded-lg transition-all duration-300 hover:bg-transparent hover:border-[1px] hover:border-primary-color "
        >
          Download CV
        </motion.button>
      </div>
    </motion.div>
  );
}

export default HomePage;
