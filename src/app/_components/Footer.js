import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="py-10 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Xymon Darcen</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Full-Stack Web Developer based in the Philippines
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><Link href="/" className="hover:text-neutral-900 dark:hover:text-white">Home</Link></li>
              <li><Link href="/#about" className="hover:text-neutral-900 dark:hover:text-white">About</Link></li>
              <li><Link href="/#projects" className="hover:text-neutral-900 dark:hover:text-white">Projects</Link></li>
              <li><Link href="/#contact" className="hover:text-neutral-900 dark:hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white">LinkedIn</a></li>
              <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 dark:hover:text-white">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Xymon Darcen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
