import React from 'react'
import { motion } from "motion/react";
import { skills } from './Data/MockData';
import { GlowingEffect } from '@/components/ui/glowing-effect';

function About() {

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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4"
        >
          <h3 className="text-3xl font-semibold">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="bg-neutral-900 border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                  <div className="relative flex flex-1 flex-col gap-3">
                    <div className="w-fit rounded-lg border border-gray-600 p-2">
                      {skill.title}
                    </div>
                    <div className="flex flex-wrap gap-2 p-4 rounded-xl overflow-hidden">
                      {skill.stack.map((stack, stackKey) => (
                        <span
                          key={stackKey}
                          className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm"
                          style={{
                            boxShadow: `
                                inset 0 1px 4px rgba(255, 255, 255, 0.5),
                                inset 0 -2px 4px rgba(0, 0, 0, 0.3),
                                inset 0 0 8px rgba(255, 255, 255, 0.2),
                                0 1px 2px rgba(0, 0, 0, 0.1)
                              `
                          }}
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </motion.div>
    </section>
  )
}

export default About