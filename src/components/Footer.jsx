import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 py-10 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-4"
      >
        <h3 className="text-xl font-semibold tracking-wide">Get In Touch</h3>
        <p className="text-neutral-400 max-w-md">
          Feel free to reach out for collaborations, opportunities, or just to say hello.
        </p>

        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/sumant-khalatkar-549899290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:smntkhalatkar@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
          <a
            href="https://github.com/sumantk13"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>

        <div className="w-full h-[1px] bg-neutral-700 mt-6"></div>

        <p className="text-neutral-500 text-sm mt-4">
          © {new Date().getFullYear()} Sumant Khalatkar. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}