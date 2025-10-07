"use client";

import React from 'react';
import { X } from 'lucide-react'; // Using lucide-react for a close icon
import Image from 'next/image';
import { isVideo } from '@/lib/utils';

/**
 * Project Detail Modal component.
 * @param {object} props
 * @param {boolean} props.isModalOpen - State controlling modal visibility.
 * @param {function} props.setIsModalOpen - Function to close the modal.
 */
const Modals = ({ isModalOpen, setIsModalOpen, projectDetails }) => {
  if (!isModalOpen) {
    return null;
  }

  // Common dark theme classes derived from Card3D: dark background, subtle border, white text
  const modalStyle = "fixed inset-0 z-[50] flex items-center justify-center p-4 backdrop-blur-sm bg-black/60 transition-opacity duration-300";
  const cardBodyStyle = "relative w-full max-w-4xl h-[90vh] overflow-hidden rounded-xl border border-white/[0.2] bg-black shadow-2xl shadow-emerald-500/10";

  // Close the modal when clicking outside of the content area
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={modalStyle} onClick={handleOverlayClick}>

      {/* Modal Content Box */}
      <div className={cardBodyStyle}>

        {/* Close Button (Fixed Top Right) */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/70 hover:text-white transition-colors duration-200 bg-white/5 hover:bg-white/10"
          aria-label="Close Modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Scrollable Content Area */}
        <div className="h-full overflow-y-auto p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6">
            {projectDetails?.title}
          </h1>
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-8">
            Technologies Used: {projectDetails?.tech?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 rounded-full mr-2"
              >
                {tech}
              </span>
            ))}
          </p>

          <div className="space-y-6 text-neutral-300">
            <h2 className="text-2xl font-semibold text-white mt-8">Project Overview</h2>
            <p>
              {projectDetails.details.overview}
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8">Core Features</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              {projectDetails?.details?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-white mt-8">Technical Deep Dive</h2>
            <p className='text-justify'>
              {projectDetails?.details?.technical}
            </p>

            {/* Mock Image Placeholder */}
            <div className="w-full h-64 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700 mt-10">
              {projectDetails.details.content ? (
                <>
                { isVideo(projectDetails.details.content) ? (
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                >
                  <source src={projectDetails.details.content} type={`video/mp4`} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={projectDetails.details.content}
                  width={100}
                  height={100}
                  quality={100}
                  alt={projectDetails.title}
                  className="w-full h-full object-contain rounded-xl dark:shadow-[0_0_12px_rgba(255,255,255,0.08)]"
                />
              )}</>
              ):(
              <>
                <span className="text-neutral-500">Error Loading Content</span>
              </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
