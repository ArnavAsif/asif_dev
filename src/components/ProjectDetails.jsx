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
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <motion.div
        className="relative w-[95%] max-w-2xl mx-auto my-4 border shadow-lg rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Close Button - Fixed for mobile */}
        <button
          onClick={closeModal}
          className="fixed md:absolute top-4 right-4 p-3 rounded-full bg-black/80 backdrop-blur-md hover:bg-gray-700/80 z-50 transition-all"
          aria-label="Close modal"
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
            className="w-full h-48 md:h-64 object-cover rounded-t-2xl"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent rounded-t-2xl" />
        </div>

        {/* Content Section */}
        <div className="p-5 md:p-8 max-h-[70vh] md:max-h-[60vh] overflow-y-auto">
          {/* Title */}
          <h5 className="mb-3 md:mb-4 text-2xl md:text-3xl font-bold text-white">
            {title}
          </h5>

          {/* Description */}
          <p className="mb-4 text-base md:text-lg text-neutral-300">
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

          {/* Tech Stack Tags */}
          <div className="mb-6 md:mb-8">
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
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-contain bg-neutral-800/50 p-1"
                      title={tag.name}
                    />
                  ) : (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center">
                      <span className="text-xs font-medium text-neutral-300">
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

          {/* Links Section */}
          <div className="pt-4 md:pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {/* Live Project Link */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 font-medium text-white bg-primary rounded-xl hover:bg-primary/80 transition-all hover:shadow-lg hover:shadow-primary/20 flex-1 text-center"
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

              {/* GitHub Link - Only show if github prop exists */}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 font-medium text-white bg-neutral-800/50 rounded-xl hover:bg-neutral-700 transition-all border border-neutral-700/50 flex-1 text-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              )}

              {/* Close Button for mobile - Secondary option */}
              <button
                onClick={closeModal}
                className="flex items-center justify-center gap-2 px-5 py-3 font-medium text-white bg-neutral-800/30 rounded-xl hover:bg-neutral-700/50 transition-all border border-neutral-700/30 sm:hidden"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
