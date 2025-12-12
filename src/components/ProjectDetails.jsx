/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useEffect } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  github,
  closeModal,
}) => {
  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black/75 transition-all"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <motion.div
        className="relative w-[95%] max-w-2xl mx-auto my-4 border border-white/10 
        shadow-md rounded-2xl bg-gradient-to-b from-midnight/95 to-navy/90"
        initial={{ opacity: 0, scale: 0.93, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 transition-all z-50"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Section */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-48 md:h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-8 max-h-[70vh] md:max-h-[60vh] overflow-y-auto">
          {/* Title */}
          <h5 className="mb-4 text-2xl md:text-3xl font-bold text-white">
            {title}
          </h5>

          {/* Description */}
          <p className="mb-4 text-neutral-300 text-base md:text-lg">
            {description}
          </p>

          {/* Sub Descriptions */}
          <div className="space-y-2 md:space-y-3 mb-6">
            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-sm md:text-base text-neutral-400">
                {subDesc}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h6 className="text-sm font-semibold text-neutral-400 mb-3">
              Tech Stack
            </h6>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex flex-col items-center min-w-[60px]"
                >
                  {tag.path ? (
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain bg-neutral-800/40 p-1"
                      title={tag.name}
                    />
                  ) : (
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-neutral-800/40 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-neutral-300">
                        {tag.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="mt-1 text-xs text-neutral-400 text-center truncate w-full px-1">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Live Link */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 font-medium text-white 
                bg-primary rounded-xl hover:bg-primary/80 transition-all flex-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span>Live Project</span>
              </a>

              {/* GitHub */}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 font-medium text-white 
                  bg-neutral-800/40 rounded-xl hover:bg-neutral-700/70 transition-all border border-neutral-700/40 flex-1"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.57v-2.23c-3.34.72-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.66-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23A10.94 10.94 0 0112 6.2c1.02.01 2.05.14 3.01.41 2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18a4.52 4.52 0 011.24 3.22c0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
