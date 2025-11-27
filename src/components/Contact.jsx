import React from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className="w-full py-32 px-12 bg-transparent">
      
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center mb-24"
      >
        <h1 className="text-6xl font-bold text-neutral-900 tracking-wide">
          Let's Connect
        </h1>
        <p className="text-2xl text-neutral-600 mt-6 font-light leading-relaxed">
          Whether you have an opportunity, a question, or just want to say hi —
          I’d love to hear from you.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.a
          href="mailto:smntkhalatkar@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-flex items-center gap-3 bg-neutral-900 text-white 
            px-10 py-5 rounded-full text-xl font-medium
            shadow-lg hover:shadow-2xl transition-all duration-300
          "
        >
          <Mail size={26} />
          Email Me
        </motion.a>

        {/* Social links */}
        <div className="flex justify-center gap-10 mt-14">

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/sumant.k_/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-neutral-800 hover:text-black transition text-lg"
          >
            <Instagram size={28} />
            Instagram
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/sumant-khalatkar-549899290/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-neutral-800 hover:text-black transition text-lg"
          >
            <Linkedin size={28} />
            LinkedIn
          </motion.a>

        </div>
      </motion.div>

    </section>
  );
}