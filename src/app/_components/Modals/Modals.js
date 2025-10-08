"use client";

import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { isVideo } from '@/lib/utils';

/**
 * Project Detail Modal component.
 * @param {object} props
 * @param {boolean} props.isModalOpen - State controlling modal visibility.
 * @param {function} props.setIsModalOpen - Function to close the modal.
 * @param {object} props.projectDetails - Project details object.
 */
const Modals = ({ isModalOpen, setIsModalOpen, projectDetails }) => {
  if (!isModalOpen) {
    return null;
  }

  const modalStyle = "fixed inset-0 z-[50] flex items-center justify-center p-4 backdrop-blur-sm bg-black/60 transition-opacity duration-300";
  const cardBodyStyle = "relative w-full max-w-6xl h-[90vh] overflow-hidden rounded-xl border border-white/[0.2] bg-black shadow-2xl shadow-emerald-500/10";

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  // Get content array, defaulting to empty array if not available
  const contentArray = projectDetails?.details?.content || [];
  const hasMultipleItems = contentArray.length > 1;

  return (
    <div className={modalStyle} onClick={handleOverlayClick}>
      <div className={cardBodyStyle}>
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/70 hover:text-white transition-colors duration-200 bg-white/5 hover:bg-white/10"
          aria-label="Close Modal"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="h-full overflow-y-auto p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6">
            {projectDetails?.title}
          </h1>
          <p className="text-sm uppercase tracking-widest text-neutral-400 mb-8">
            Tech Stack Used: {projectDetails?.tech?.map((tech, index) => (
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
              {projectDetails?.details?.overview}
            </p>

            {projectDetails?.details?.features && (
              <>
                <h2 className="text-2xl font-semibold text-white mt-8">Core Features</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {projectDetails?.details?.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {projectDetails?.details?.technical && (
              <>
                <h2 className="text-2xl font-semibold text-white mt-8">Technical Deep Dive</h2>
                <p className='text-justify'>
                  {projectDetails?.details?.technical}
                </p>
              </>
            )}

            {/* Dynamic Content Grid */}
            {contentArray.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-white mt-10 mb-6">Project Media</h2>
                <div className={`grid gap-6 ${
                  hasMultipleItems 
                    ? 'grid-cols-1 md:grid-cols-2' 
                    : 'grid-cols-1'
                }`}>
                  {contentArray.map((contentPath, index) => (
                    <div 
                      key={index} 
                      className={`bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 ${
                        hasMultipleItems ? 'h-64 md:h-80' : 'h-96'
                      }`}
                    >
                      {isVideo(contentPath) ? (
                        <video
                          className="w-full h-full object-cover"
                          controls
                          loop
                          preload="metadata"
                        >
                          <source src={contentPath} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={contentPath}
                            fill
                            quality={100}
                            alt={`${projectDetails?.title} - Image ${index + 1}`}
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {contentArray.length === 0 && (
              <div className="w-full h-64 bg-neutral-800 rounded-lg flex items-center justify-center border border-neutral-700 mt-10">
                <span className="text-neutral-500">No media available</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;