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
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-l"
            >
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-950 p-2">
                {isVideo(project.image) ? (
                  <video
                    className="w-full h-full object-cover"
                    controls
                    loop
                  >
                    <source src={project.image} type={`video/mp4`} />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      quality={100}
                      className="object-cover rounded-xl dark:shadow-[0_0_12px_rgba(255,255,255,0.08)]"
                    />
                  </div>

                )}
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-semibold text-xl">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-sm font-medium hover:underline cursor-pointer"
                    >
                      View Project →
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline cursor-pointer"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.details && (
                    <a
                      onClick={() => (setIsModalOpen(true), setProjectDetails(project))}
                      className="text-sm font-medium hover:underline cursor-pointer"
                    >
                      View Project Details →
                    </a>
                  )}
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
