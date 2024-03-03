import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// import { useAnimation } from "framer-motion";

const pageContainerVariants = {
  hidden: { y: "-100vh" },
  visible: { y: 0, transition: { delay: 0.5, duration: 0.7 } },
  exit: { y: "100vh" },
};

function PageCheckerUpdate() {
  const [activePageNumber, setActivePageNumber] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (location.pathname === "/") setActivePageNumber(0);
      if (location.pathname === "/about") setActivePageNumber(1);
      if (location.pathname === "/skills") setActivePageNumber(2);
      if (location.pathname === "/projects") setActivePageNumber(3);
      if (location.pathname === "/contact") setActivePageNumber(4);
    },
    [location.pathname]
  );

  const targetedPages = ["home", "about", "skills", "projects", "contact"];

  const handlePageCick = (e) => {
    const rawtargetPage = e.target.innerText;
    const targetPage = rawtargetPage.slice(4);
    if (!targetedPages.includes(targetPage)) return;

    if (targetPage === "home") navigate("/");
    else navigate(`/${targetPage}`);
  };

  return (
    <div className="bg-dark-background-body p-[2em] hidden md:flex gap-12 md:gap-4 lg:gap-12 md:w-[35%] lg:[30] overflow-hidden">
      <div className="flex flex-col gap-5 items-center relative">
        <p className="bg-gray-700 w-[0.125rem] lg:w-[1px] h-[4.8125rem] lg:h-[8.5625rem]  text-center"></p>
        <motion.p
          className="text-white text-bold rounded-full px-8 py-7 border-[1px] border-gray-700 text-xl"
          variants={pageContainerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          0{activePageNumber}
        </motion.p>
        <p className="bg-gray-700 w-[0.125rem] lg:w-[1px] h-[4.8125rem] lg:h-[8.5625rem]  text-center"></p>
      </div>
      {/* <div className="flex flex-col gap-5 items-center relative">
        <p className="bg-gray-700 w-[0.125rem] lg:w-[1px] h-[4.8125rem] lg:h-[8.5625rem]  text-center"></p>
        <p className="text-white text-bold rounded-full px-6 py-5 border-[1px] border-gray-700 text-lg">
          0{activePageNumber}
        </p>
        <p className="bg-gray-700 w-[0.125rem] lg:w-[1px] h-[4.8125rem] lg:h-[8.5625rem]  text-center"></p>
      </div> */}

      <div
        className="flex flex-col gap-14 md:gap-8 lg:gap-14 text-gray-500 text-base md:text-base lg:text-2xl"
        onClick={handlePageCick}
      >
        <p
          className={`${activePageNumber === 0 && "text-white"} cursor-pointer`}
        >
          0. #home
        </p>
        <p
          className={`${activePageNumber === 1 && "text-white"} cursor-pointer`}
        >
          1. #about
        </p>
        <p
          className={`${activePageNumber === 2 && "text-white"} cursor-pointer`}
        >
          2. #skills
        </p>
        <p
          className={`${activePageNumber === 3 && "text-white"} cursor-pointer`}
        >
          3. #projects
        </p>
        <p
          className={`${activePageNumber === 4 && "text-white"} cursor-pointer`}
        >
          4. #contact
        </p>
      </div>
    </div>
  );
}

export default PageCheckerUpdate;
