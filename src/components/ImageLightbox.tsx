import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem, SiteSettings } from '../types';
import { ProjectGalleryVisual } from './visuals/ProjectGalleryVisual';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  siteSettings?: SiteSettings;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onIndexChange,
  siteSettings
}) => {
  const currentItem = items[currentIndex] || items[0];

  const handlePrev = useCallback(() => {
    onIndexChange(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length, onIndexChange]);

  const handleNext = useCallback(() => {
    onIndexChange(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox"
      >
        {/* Background overlay click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Top Control Bar */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
          <span className="text-xs text-neutral-400 font-mono bg-neutral-900/80 px-3 py-1.5 rounded-full border border-neutral-800">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-700 transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-[#e5a93c] hover:text-black border border-neutral-700 transition-all cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-neutral-900/80 text-white hover:bg-[#e5a93c] hover:text-black border border-neutral-700 transition-all cursor-pointer shadow-xl hidden sm:flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Main Content Area */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full max-h-[70vh] rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 flex items-center justify-center">
            {currentItem.image ? (
              <img
                src={currentItem.image}
                alt={currentItem.title || "Project visual"}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            ) : (
              <div className="w-full h-[55vh] min-h-[360px]">
                <ProjectGalleryVisual
                  visualType={currentItem.visualType || 'brand-identity'}
                  title={currentItem.title}
                  siteSettings={siteSettings}
                />
              </div>
            )}
          </div>

          {/* Caption & Title */}
          <div className="mt-4 text-center px-4 max-w-xl">
            <h4 className="text-white font-medium text-base sm:text-lg">{currentItem.title}</h4>
            {currentItem.caption && (
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">{currentItem.caption}</p>
            )}
          </div>

          {/* Mobile Bottom Navigation buttons */}
          {items.length > 1 && (
            <div className="flex sm:hidden items-center justify-center gap-4 mt-3">
              <button
                onClick={handlePrev}
                className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs flex items-center gap-1"
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
