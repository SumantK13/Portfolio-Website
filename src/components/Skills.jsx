import React from "react";
import { Code, Laptop, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const SkillCard = ({ icon: Icon, title, items, delay }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-10 border border-neutral-300
               hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-6">
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Icon className="text-neutral-700" size={36} />
      </motion.div>

      <h3 className="text-2xl font-semibold text-neutral-900">{title}</h3>
    </div>

    <ul className="text-neutral-700 space-y-3 font-light text-xl leading-relaxed">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="w-full py-32 px-12 bg-transparent">

      {/* Section Title */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-6xl font-bold text-neutral-900">Skills</h1>
        <p className="text-neutral-700 mt-6 text-2xl font-light leading-relaxed">
          Technologies and tools I work with to build clean and efficient applications.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <SkillCard
          icon={Code}
          title="Languages"
          delay={0.1}
          items={["JavaScript", "C++", "Java (Basics)", "SQL"]}
        />

        <SkillCard
          icon={Laptop}
          title="Frontend"
          delay={0.2}
          items={["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"]}
        />

        <SkillCard
          icon={Database}
          title="Backend"
          delay={0.3}
          items={["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"]}
        />

        <SkillCard
          icon={Wrench}
          title="Tools"
          delay={0.4}
          items={["Git & GitHub", "VS Code", "Postman", "Figma (Basics)"]}
        />

      </div>
    </section>
  );
};

export default Skills;