import React from 'react'
import { motion } from "motion/react";

function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "TailwindCSS", "MongoDB"
  ];

  return (
    <section className="px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A passionate Full Stack Developer based in the Philippines, dedicated to creating
            elegant solutions to complex problems. With a strong foundation in both front-end
            and back-end development, I bring ideas to life through clean, efficient code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">What I Do</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>🚀 Full Stack Web Development</li>
              <li>💻 Custom Software Solutions</li>
              <li>🎨 UI/UX Implementation</li>
              <li>📱 Responsive Web Design</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition-opacity"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About