import React from "react";
import { motion } from "framer-motion";

// Animation preset
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  const educationData = [
    {
      level: "Bachelor of Technology (B.Tech) – Information Technology",
      institute: "PICT, Pune",
      year: "2023 – 2027",
      score: "CGPA: 9.66",
    },
    {
      level: "Higher Secondary Education (12th)",
      institute: "State Board",
      year: "2022",
      score: "Percentage: 88.83%",
    },
    {
      level: "Secondary Education (10th)",
      institute: "State Board",
      year: "2020",
      score: "Percentage: 99%",
    },
  ];

  return (
    <section className="w-full py-32 px-12 bg-transparent">

      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-24"
      >
        <h1 className="text-6xl font-bold text-neutral-900 tracking-wide">
          Education
        </h1>
        <p className="text-2xl text-neutral-600 mt-6 font-light leading-relaxed">
          My academic journey and achievements.
        </p>
      </motion.div>

      {/* Education Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {educationData.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            className="
              bg-white/60 backdrop-blur-lg shadow-lg rounded-2xl 
              border border-neutral-300 p-8 
              hover:shadow-2xl transition-all duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-3 leading-snug">
              {item.level}
            </h3>

            <p className="text-neutral-700 text-lg font-light mb-2">
              {item.institute}
            </p>

            <p className="text-neutral-500 text-sm mb-4">{item.year}</p>

            <p className="text-neutral-800 text-base font-medium">
              {item.score}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}