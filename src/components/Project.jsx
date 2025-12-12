/* eslint-disable react/prop-types */
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  github,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Project Card with Enhanced Border */}
      <div
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900/80 to-black backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Border - Visible at all times */}
        <div className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-br from-neutral-700/50 via-neutral-600/30 to-neutral-700/50 z-0" />

        {/* Animated Glow Border - Appears on hover */}
        <div className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-r from-primary/30 via-purple-500/20 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

        {/* Inner Content Container */}
        <div className="relative rounded-[calc(1.5rem-1.5px)] overflow-hidden bg-gradient-to-br from-neutral-900/90 to-black z-10">
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Image Section with Parallax Effect */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              style={{
                transform: isHovered
                  ? "scale(1.1) rotate(1deg)"
                  : "scale(1) rotate(0deg)",
              }}
            />

            {/* Live Preview Button */}
            <div className="absolute top-4 md:right-4 right-2 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-2 md:px-4 py-2 text-[10px] md:text-sm font-medium text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Live Demo</span>
                <svg
                  className="w-4 h-4"
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
              </a>
            </div>
            {/* Github button */}
            <div className="absolute top-4 md:left-4 left-2 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-2 md:px-4 py-2 text-[10px] md:text-sm font-medium text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Github Link</span>
                <svg
                  className="w-4 h-4"
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
              </a>
            </div>
          </div>

          {/* Content Section */}
          <div className="relative p-7">
            {/* Title with Gradient Text */}
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent">
              {title}
            </h3>

            {/* Description with animated underline */}
            <div className="relative mb-6">
              <p className="text-neutral-300 leading-relaxed line-clamp-2">
                {description}
              </p>
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-700" />
            </div>

            {/* Project Tags */}
            <div className="flex items-center gap-4 mb-6 text-sm text-neutral-400">
              <div className="flex items-center gap-1">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded-full bg-white backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-primary border border-primary/30 shadow-lg shadow-primary/10 transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button with Animation */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-primary via-primary/80 to-purple-600 px-6 py-3.5 text-white font-semibold transition-all duration-500 hover:shadow-xl hover:shadow-primary/30"
            >
              {/* Button Glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />

              {/* Button Content */}
              <span className="relative flex items-center justify-center gap-3">
                Explore Project
                <svg
                  className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full border border-primary/50 bg-primary/20 animate-pulse" />
          </div>
          <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden">
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full border border-purple-500/50 bg-purple-500/20 animate-pulse delay-300" />
          </div>
        </div>

        {/* Outer Corner Borders */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/30 rounded-tl-3xl z-10" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-primary/30 rounded-tr-3xl z-10" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/30 rounded-bl-3xl z-10" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/30 rounded-br-3xl z-10" />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
