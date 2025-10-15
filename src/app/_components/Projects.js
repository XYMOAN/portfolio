import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import Modals from './Modals/Modals';
import { isVideo } from '@/lib/utils';
import { projects } from './Data/MockData';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [projectDetails, setProjectDetails] = useState({})

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-2 sm:my-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -inset-0.5 bg-white/5 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glass card */}
              <div className="relative h-full backdrop-blur-xl bg-white/5 dark:bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                {/* Image section */}
                <div className="aspect-video bg-neutral-100 dark:bg-neutral-950/50 p-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      quality={75}
                      className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="space-y-4 shadow-m-pressed p-4 rounded-md">
                    <h3 className="font-semibold text-xl text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-white/10 dark:bg-white/5 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 rounded-full border border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-colors h-fit"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links section */}
                  <div className="pt-4 mt-auto border-t border-white/10 flex gap-4 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1"
                      >
                        View Project
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1"
                      >
                        GitHub
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </a>
                    )}
                    {project.details && (
                      <a
                        onClick={() => (setIsModalOpen(true), setProjectDetails(project))}
                        className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1"
                      >
                        View Project Details
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Modals isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} projectDetails={projectDetails} />
    </section>
  );
}

export default Projects;