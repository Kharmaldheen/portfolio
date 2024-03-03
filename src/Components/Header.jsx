import Logo from "./UI/Logo";
import Nav from "./UI/Nav";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: { y: "-100vh" },
  visible: { y: 0, transition: { type: "spring", stiffness: 150 } },
};

function Header() {
  return (
    <motion.header
      className="sticky top-0 z-[1] mx-auto  flex w-full flex-wrap items-center justify-between border-b border-gray-100 bg-dark-background-body py-[2em] px-[2em] md:px-[2em] lg:px-[4em] font-sans font-bold uppercase text-white backdrop-blur-[100px] "
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <Logo />
      <Nav />
    </motion.header>
    // <header className="bg-black sticky top-0 z-[1] mx-auto w-full flex items-center justify-between flex-wrap ">
    //   <div className="h-16 w-16 text-white">{`</Kay>`}</div>
    //   <Nav />
    // </header>
  );
}

export default Header;
