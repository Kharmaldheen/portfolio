import { NavLink } from "react-router-dom";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";

export const NavLinks = () => {
  return (
    <>
      <NavLink className={activeStyleCallback} to="/">
        Home
      </NavLink>

      <NavLink className={activeStyleCallback} to="/about">
        About
      </NavLink>

      <NavLink className={activeStyleCallback} to="/skills">
        Skills
      </NavLink>

      <NavLink className={activeStyleCallback} to="/projects">
        Projects
      </NavLink>

      <NavLink className={activeStyleCallback} to="/contact">
        Contact
      </NavLink>
    </>
  );
};
