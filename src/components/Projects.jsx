import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MealSphere",
    description:
      "A smart meal management system for hostel students with menu display and RSVP-based food planning.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    image: "/Meal.png",
    github: "https://github.com/Meal-Sphere/MealSphere",
    website: "#",
  },
  {
    title: "Prescripto",
    description:
      "A Doctor's appointment booking website for patients to book, pay, cancel appointments.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "/prescripto.png",
    github: "https://github.com/SumantK13/prescripto",
    website: "#",
  },
  {
    title: "Curova",
    description:
      "A telemedicine app for rural people to check doctor availability and pharmacy stock to avoid unnecessary travel.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    image: "/curova.png",
    github: "https://github.com/SumantK13/Curova-health-connect",
    website: "https://curova-demo.com",
  },
];

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section className="w-full py-32 px-12 bg-transparent">

      {/* Section Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center mb-24"
      >
        <h1 className="text-6xl font-bold text-neutral-900 tracking-wide">
          Projects
        </h1>
        <p className="text-2xl text-neutral-600 mt-6 font-light leading-relaxed">
          A collection of what I've built so far.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="
              bg-white/60 backdrop-blur-md shadow-lg rounded-2xl 
              overflow-hidden border border-neutral-300 
              hover:shadow-2xl transition-all duration-300
            "
          >
            {/* Project image */}
            <div className="w-full h-56 bg-neutral-200 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                {project.title}
              </h3>

              <p className="text-neutral-700 text-lg mb-6 leading-relaxed font-light">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm bg-neutral-200/70 text-neutral-700 rounded-full border border-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5 mt-4">

                {/* GitHub */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-neutral-800 hover:text-black transition"
                >
                  <Github size={22} />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>

                {/* Live Website */}
                <motion.a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-neutral-800 hover:text-black transition"
                >
                  <ExternalLink size={22} />
                  <span className="text-sm font-medium">Live</span>
                </motion.a>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}