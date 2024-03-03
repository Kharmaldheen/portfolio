import { motion } from "framer-motion";
// import { logoRotationVariant } from "../data/animationConfig";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <motion.h1
        className="block w-[75px] text-xl lg:text-3xl font-bold capitalize"
        width="75"
        height="50"
      >
        {`</Kay>`}
      </motion.h1>
    </NavLink>
    // <div>
    //   <div className="h-16 w-16 text-white">{`</Kay>`}</div>
    // </div>
  );
}

export default Logo;
