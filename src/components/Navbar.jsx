import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full bg-neutral-600/80 backdrop-blur-lg z-50 border-b border-neutral-300 shadow-sm"
    >
      <div className="relative max-w-7xl mx-auto px-12 py-4 flex items-center">

        {/* Centered Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="absolute left-1/2 -translate-x-1/2 tracking-[3px] text-white text-2xl"
        >
          SUMANT KHALATKAR
        </motion.h1>

        {/* Right icons */}
        <motion.div
          className="ml-auto flex items-center gap-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {[
            { Icon: Github, link: "https://github.com/sumantk13" },
            { Icon: Linkedin, link: "https://linkedin.com/in/sumant-khalatkar-549899290/" },
            { Icon: Mail, link: "mailto:smntkhalatkar@gmail.com" }
          ].map(({ Icon, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, scale: 0.7 },
                show: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-2.5 rounded-full hover:bg-white/70 transition"
            >
              <Icon size={22} className="text-neutral-800" />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </motion.nav>
  );
}