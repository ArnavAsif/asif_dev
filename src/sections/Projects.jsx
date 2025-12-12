import { useState } from "react";
import { motion } from "framer-motion";
import Project from "../components/Project";
import { myProjects } from "../constants";

const ITEMS_PER_LOAD = 6;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const showMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <section id="work" className="relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {/* Animated Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-12"
      >
        {myProjects.slice(0, visibleCount).map((project) => (
          <motion.div key={project.id} variants={item}>
            <Project {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      {visibleCount < myProjects.length && (
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={showMore}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 0px 30px rgba(0, 180, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative px-7 py-3 rounded-xl text-white font-medium overflow-hidden bg-gradient-to-r from-primary via-primary/80 to-purple-600 border border-neutral-700"
          >
            {/* Glow Background */}
            <motion.span
              className="absolute inset-0 bg-blue-600 opacity-20 blur-2xl"
              animate={{
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Button Text */}
            <span className="relative z-10">Show More Projects</span>
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Projects;
