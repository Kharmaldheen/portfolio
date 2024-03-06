import { motion } from "framer-motion";

import { useProjects } from "../../services/useFetchProjects";
import Loader from "../UI/Loader";
import SingleProject from "../features/SingleProject";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.7, duration: 0.7 } },
};

function ProjectPage() {
  const { projects, isLoading, error } = useProjects();
  console.log(projects);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-col gap-6 md:gap-10 md:overflow-auto lg:overflow-hidden pb-40"
    >
      <h1 className="font-bold lg:text-7xl md:text-4xl text-3xl text-white">
        Projects
      </h1>
      {isLoading && <Loader />}

      {error && (
        <div>
          <p className="font-medium text-lg md:text-2xl text-white">
            ❌❌ {error.message}........
          </p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {projects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default ProjectPage;
