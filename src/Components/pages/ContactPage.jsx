import { BiLogoGithub } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
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

function ContactPage() {
  const handleEmailLinkClick = (emailAddress) => {
    // Create a mailto link
    const mailtoLink = `mailto:${emailAddress}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <motion.div
      className="text-white flex flex-col gap-10"
      variants={containerVariants}
      animate="visible"
      initial="hidden"
      exit="hidden"
    >
      <h1 className="font-bold text-2xl lg:text-6xl md:text-4x">contact.</h1>

      <p className="md:w-3/4 lg:text-xl md:text-lg text-base flex flex-col gap-2 md:gap-3 leading-relaxed md:leading-loose">
        <span className="text-gray-500 text-base md:text-lg block text-justify md:text-left">{`<p>`}</span>{" "}
        If you would like to get in touch, talk to me about a project
        collaboration or just say hi, you can reach out to me on any of these
        platforms
        <span className="text-gray-500 block text-base md:text-lg text-justify md:text-left">{`</p>`}</span>
      </p>

      <div className="flex flex-col gap-3 md:gap-6">
        <div className="flex items-center gap-5 md:gap-8">
          <span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-[44px] md:w-[30px] h-[38px] w-[24px]"
              viewBox="0 0 24 24"
              variants={svgVariants}
            >
              <motion.path
                d={BiLogoGithub().props.children[0].props.d}
                fill="#fff"
                variants={pathVariants}
              />
            </motion.svg>
          </span>
          <a
            href="https://github.com/Kharmaldheen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300 text-base md:text-xl"
          >
            Kharmaldheen
          </a>
        </div>

        <div className="flex items-center gap-5 md:gap-8">
          <span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-[44px] md:w-[30px] h-[38px] w-[24px]"
              viewBox="0 0 24 24"
              variants={svgVariants}
            >
              <motion.path
                d={BiLogoGmail().props.children[0].props.d}
                fill="#fff"
                variants={pathVariants}
              />
            </motion.svg>
          </span>
          <span
            onClick={() =>
              handleEmailLinkClick("abdullahikamaldeen3@gmail.com")
            }
            className="hover:underline transition-all duration-300 text-base md:text-xl cursor-pointer"
          >
            abdullahikamaldeen3@gmail.com
          </span>
        </div>

        <div className="flex items-center gap-5 md:gap-8">
          <span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-[44px] md:w-[30px] h-[38px] w-[24px]"
              viewBox="0 0 24 24"
              variants={svgVariants}
            >
              <motion.path
                d={BiLogoTwitter().props.children[0].props.d}
                fill="#fff"
                variants={pathVariants}
              />
            </motion.svg>
          </span>
          <a
            href="https://twitter.com/kamzykay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300 text-base md:text-xl "
          >
            Kamzykay
          </a>
        </div>

        <div className="flex items-center gap-5 md:gap-8">
          <span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-linkedin md:h-[44px] md:w-[30px] h-[38px] w-[24px]"
              viewBox="0 0 24 24"
              variants={svgVariants}
            >
              <motion.path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                variants={pathVariants}
              />
            </motion.svg>
          </span>
          <a
            href="https://linkedin.com/in/abdullahi-kamaldeen-b518a321a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all duration-300 text-base md:text-xl"
          >
            Abdullahi Kamaldeen
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
