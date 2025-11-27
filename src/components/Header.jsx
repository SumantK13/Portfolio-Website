import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="bg-transparent w-full min-h-screen flex items-center justify-center px-12 pt-24">

      <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-40">

          {/* LEFT: TEXT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-neutral-700 max-w-2xl text-center md:text-left"
          >
            <h1 className="font-bold text-6xl mb-10 text-neutral-900">About Me</h1>

            <p className="text-2xl leading-relaxed font-light">
              I'm{" "}
              <span className="font-medium text-neutral-900">
                Sumant Khalatkar
              </span>
              , a third-year Information Technology student at
              <span className="font-medium text-neutral-900"> PICT Pune</span>
              {" "}and an aspiring full-stack web developer. <br />
              I enjoy building clean, functional, and user-centric applications
              while continuously improving my skills in modern web technologies.
            </p>
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <motion.img
              src="/heroprofile.jpg"
              alt="Profile photo"
              className="w-96 h-96 rounded-full object-cover bg-gray-200 shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Header;