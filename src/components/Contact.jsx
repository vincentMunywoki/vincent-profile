import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import resume from "../assets/Vincent_Munywoki_Resume.pdf"; //  Import Resume

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          Contact Me.
        </h3>

        {/* Contact Information Section */}
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Mail className="text-white w-6 h-6" />
            <a
              href="mailto:emmanuelmakau90@gmail.com"
              className="text-white text-lg hover:underline"
            >
              vincentmunywoki12@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-white w-6 h-6" />
            <a
              href="tel:0793472960"
              className="text-white text-lg hover:underline"
            >
              0702463477
            </a>
          </div>
        </div>

        {/* Paragraph Section */}
        <div className="flex flex-col gap-6 mt-6">
          <div>
            <p className="text-white text-lg">
              As a junior full-stack developer, I am passionate about building
              modern, responsive applications. With a solid foundation in both
              frontend and backend development, I strive to create solutions
              that meet your business needs while ensuring scalability and
              efficiency.
            </p>
            <p className="text-white text-lg mt-4">
              While I currently have a basic understanding of Artificial
              Intelligence, I am committed to growing my expertise in this
              field. In the years to come, I hope to help businesses like yours
              integrate AI features that enhance productivity and drive
              innovation. Let’s work together to lay the groundwork for a
              tech-savvy future.
            </p>
          </div>
        </div>

        {/* LinkedIn and GitHub Links Section */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/vincent-munywoki-523a21252/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/vincentMunywoki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-900"
          >
            <FaGithub />
          </a>
          <a
            href={resume}
            download="Vincent_Munywoki_Resume.pdf"
            //className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            className="px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-600 transition duration-300"
          >
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
