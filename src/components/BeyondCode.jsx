import React from "react";
import { motion } from "framer-motion";
import { Camera, Music, Drum, Youtube, Instagram } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function BeyondDev() {
  return (
    <section className="w-full py-32 px-12 bg-transparent">

      {/* Section heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center mb-24"
      >
        <h1 className="text-6xl font-bold text-neutral-900 tracking-wide">
          Beyond Coding
        </h1>
        <p className="text-2xl text-neutral-600 mt-6 font-light leading-relaxed">
          A little more about who I am outside the world of code.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col gap-32">

        {/* --------------------- 1️⃣ Photographer --------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <motion.div variants={fadeUp}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
            >
              <Camera size={36} className="text-neutral-900" />
              <h2 className="text-4xl font-semibold text-neutral-900">
                Photographer
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-neutral-700 leading-relaxed font-light mb-6"
              variants={fadeUp}
            >
              I love capturing small, subtle details of everyday life through mobile photography.
              I enjoy experimenting with both natural and artificial lighting to create unique moods
              in my shots.
            </motion.p>

            <motion.p
              className="text-lg text-neutral-700 leading-relaxed font-light mb-8"
              variants={fadeUp}
            >
              I share my best photographs on Instagram, where I document my creative journey.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="https://www.instagram.com/worldthroughmylens_sumant/"
              target="_blank"
              className="inline-flex items-center gap-3 text-neutral-900 hover:text-black font-medium text-lg transition"
            >
              <Instagram size={26} />
              View Photography Gallery
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.img
            src="/mobile.jpg"
            alt="Photography"
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

        {/* --------------------- 2️⃣ Pianist --------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Image */}
          <motion.img
            src="/piano.jpg"
            alt="Pianist"
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl order-last lg:order-first"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />

          {/* Text */}
          <motion.div variants={fadeUp}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
            >
              <Music size={36} className="text-neutral-900" />
              <h2 className="text-4xl font-semibold text-neutral-900">
                Pianist
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-neutral-700 leading-relaxed font-light mb-6"
              variants={fadeUp}
            >
              Piano is where I express the calmest version of myself. I enjoy playing emotional,
              soft, romantic pieces and sometimes upload covers on YouTube.
            </motion.p>

            <motion.p
              className="text-lg text-neutral-700 leading-relaxed font-light mb-8"
              variants={fadeUp}
            >
              I believe music helps balance creativity and logic — something that reflects in my coding too.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="https://www.youtube.com/@sumantkhalatkar6057"
              target="_blank"
              className="inline-flex items-center gap-3 text-neutral-900 hover:text-black font-medium text-lg transition"
            >
              <Youtube size={26} />
              Visit my YouTube Channel
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --------------------- 3️⃣ Tabla Player --------------------- */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <motion.div variants={fadeUp}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
            >
              <Drum size={36} className="text-neutral-900" />
              <h2 className="text-4xl font-semibold text-neutral-900">
                Tabla Player
              </h2>
            </motion.div>

            <motion.p
              className="text-lg text-neutral-700 leading-relaxed font-light mb-6"
              variants={fadeUp}
            >
              I have completed three formal examinations in classical tabla and enjoy performing
              rhythmic compositions.
            </motion.p>

            <motion.p
              className="text-lg text-neutral-700 leading-relaxed font-light"
              variants={fadeUp}
            >
              Tabla gives me a unique connection to classical Indian music and rhythm theory.
            </motion.p>
          </motion.div>

          {/* Image */}
          <motion.img
            src="/tabla.jpg"
            alt="Tabla"
            className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

      </div>
    </section>
  );
}