import React from 'react';
import { motion } from "motion/react";

function Contact() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="contact">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to create something amazing.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border bg-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border bg-transparent min-h-[150px]"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
}

export default Contact;
