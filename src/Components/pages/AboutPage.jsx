import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.7, duration: 0.7 } },
};

function AboutPage() {
  return (
    <motion.div
      className="text-white overflow-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold">about me.</h1>
      <div className="mt-14">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold">
          Abdullahi Kamaldeen
        </h2>
        <h3 className="text-base md:text-lg lg:text-xl italic">
          Front End Developer
        </h3>
      </div>
      <span className="text-gray-500 block mt-6">{`<p>`}</span>
      <br />
      <div className="flex flex-col gap-6 text-base md:text-lg lg:text-xl md:w-[80%] text-justify">
        <p>
          Hi, again! I am Abdullahi Kamaldeen. I{`'m`} a frontend developer with
          a passion for crafting elegant and responsive user interfaces
        </p>
        <p>
          I am always eager to learn new things and improve my skills. I thrive
          on the challenges that come with translating complex concepts into
          user-friendly experiences.
        </p>
        <p>
          Whether it is optimizing performance, ensuring cross-browser
          compatibility, or enhancing interactivity, I am dedicated to
          delivering seemless solutions that exceed user expectations.
        </p>
        <p>
          I am currently learning Nextjs and I {`can't`} wait to start working
          with it. When I{`'m`} not coding or learning new things, I am either
          sleeping 😴 or playing video games 🎮
        </p>
      </div>
      <br />
      <span className="text-gray-500">{`</p>`}</span>
    </motion.div>
  );
}

export default AboutPage;
