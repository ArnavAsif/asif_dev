import { motion } from "framer-motion";
import logo from "../../public/assets/asif.png";

const ImageSection = () => {
  return (
    <motion.div
      className="w-full flex justify-center px-4 sm:px-6 lg:px-8 md:pt-33 pt-4 relative z-10 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Outer Container */}
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -6,
          boxShadow: "0 0 45px rgba(255, 0, 255, 0.25)",
        }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#0f0f0f] rounded-3xl p-4 sm:p-6 lg:p-8 shadow-[0_0_30px_rgba(0,0,0,0.6)] max-w-[420px] w-full overflow-hidden"
      >
        {/* MERN Badge - Top Left */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-semibold shadow-md">
          {`{ MERN }`}
        </div>

        {/* Circular Glow Background */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-40 blur-2xl"></div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col items-center z-10"
        >
          <img
            src={logo}
            alt="Developer"
            className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full object-cover border-4 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          />

          {/* Name */}
          <h2 className="text-white text-2xl font-semibold mt-4">Md Asif</h2>

          {/* Role */}
          <p className="text-white/70 text-sm mt-2">MERN Stack Developer</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ImageSection;
