import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

import PageCheckerUpdate from "./Components/UI/PageCheckerUpdate";
import ProjectDetails from "./Components/features/ProjectDetails";

function Applayout() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="flex w-full md:h-[87.8vh] h-screen px-[2em] lg:px-[2em]  bg-dark-background-body md:items-center items-start font-sans">
        <PageCheckerUpdate />
        <main className="lg:w-[70%] lg:px-4 md:w-[65%] md:h-full w-full flex flex-col md:justify-center py-4 h-full overflow-y-visible ">
          <Outlet />
        </main>
      </div>

      {/* <AnimatePresence>
        <motion.div className="flex w-full md:h-[87.8vh] h-screen px-[2em] lg:px-[2em]  bg-dark-background-body md:items-center items-start font-sans">
          <PageCheckerUpdate />
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 2, delay: 0.2, ease: "linear" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 2, delay: 0.2, ease: "linear" },
            }}
            className="lg:w-[70%] lg:px-4 md:w-[65%] md:h-full w-full flex flex-col md:justify-center py-6 h-full overflow-y-scroll lg:overflow-hidden "
          >
            <Outlet />
          </motion.main>
        </motion.div>
      </AnimatePresence> */}
    </div>
  );
}

export default Applayout;
