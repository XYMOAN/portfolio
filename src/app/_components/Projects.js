import React from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import { LampContainer } from '@/components/ui/lamp';

function Projects() {
  const projects = [
    {
      title: "Tri-Sakay",
      description: "tanga",
      tech: ["Next.js", "MongoDB", "TailwindCSS"],
      image: "/assets/trisakay_actual.mp4",
      link: "#",
      github: "#"
    },
    {
      title: "Tri-Sakay",
      description: "tanga",
      tech: ["Next.js", "MongoDB", "TailwindCSS"],
      image: "/assets/me.png",
      link: "#",
      github: "#"
    },
  ];

  const isVideo = (path) => {
    return path.endsWith('.mp4') || path.endsWith('.mov') || path.endsWith('.webm');
  };

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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-neutral-100 dark:bg-neutral-800">
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
                  <Image 
                    src={project.image}
                    width={100}
                    height={100} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
                  <a
                    href={project.link}
                    className="text-sm font-medium hover:underline"
                  >
                    View Project →
                  </a>
                  <a
                    href={project.github}
                    className="text-sm font-medium hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
