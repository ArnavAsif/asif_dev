/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
      onClick={(e) => {
        // Close modal when clicking on backdrop
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full rounded-t-2xl max-h-64 object-cover"
        />
        <div className="p-8">
          <h5 className="mb-4 text-3xl font-bold text-white">{title}</h5>
          <p className="mb-4 text-lg text-neutral-300">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 text-neutral-400">
              {subDesc}
            </p>
          ))}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <div key={tag.id} className="flex flex-col items-center">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover:scale-110 transition-transform"
                    title={tag.name}
                  />
                  <span className="mt-1 text-xs text-neutral-400">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-all bg-primary rounded-xl hover:bg-primary/80 hover:gap-3 hover:shadow-lg hover:shadow-primary/20"
            >
              View Project
              <img
                src="assets/arrow-up.svg"
                className="size-5 rotate-45"
                alt="Arrow"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
