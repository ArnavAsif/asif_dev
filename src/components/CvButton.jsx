import { motion } from "motion/react";

const CvButton = () => {
  return (
    <motion.a
      href="/assets/cv.pdf"
      download="Asif_CV.pdf"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 35px rgba(0, 195, 255, 0.9)",
      }}
      whileTap={{ scale: 0.95 }}
      className="
        relative inline-block px-8 py-3 
        text-white font-semibold rounded-xl 
        bg-[#00AFFF]
        shadow-[0_0_20px_rgba(0,195,255,0.6)]
        animate-glow
      "
    >
      Download My Resume
    </motion.a>
  );
};

export default CvButton;
