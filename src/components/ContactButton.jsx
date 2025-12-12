import { motion } from "motion/react";

const ContactButton = () => {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 35px rgba(186, 85, 255, 0.9)", // bright hover glow
      }}
      whileTap={{ scale: 0.95 }}
      className="
        relative flex items-center gap-1 px-8 py-3 
        text-white font-semibold rounded-xl 
        bg-[#BA55FF]
        shadow-[0_0_20px_rgba(186,85,255,0.6)]
        animate-glow-purple
    
      "
    >
      Contact Me
      <img src="assets/arrow-right.svg" alt="arrow" className="w-5" />
    </motion.a>
  );
};

export default ContactButton;
