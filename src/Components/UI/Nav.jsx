import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  mobileNavContainerVariant,
  mobileNavExitProps,
  mobileNavListVariant,
} from "../data/animationConfig";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end  text-white">
        <div className="hidden  md:flex justify-end gap-12 md:gap-6 lg:gap-12">
          <NavLinks />
        </div>

        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full flex flex-col items-center md:hidden"
            // className="flex flex-col items-center basis-full text-white"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/" className={activeStyleCallback}>
                Home
              </NavLink>
            </motion.div>

            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/about" className={activeStyleCallback}>
                About
              </NavLink>
            </motion.div>

            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/skills" className={activeStyleCallback}>
                Skills
              </NavLink>
            </motion.div>

            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/projects" className={activeStyleCallback}>
                Projects
              </NavLink>
            </motion.div>

            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/contact" className={activeStyleCallback}>
                Contact
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
