import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem, SiteSettings } from '../types';
import { ProjectGalleryVisual } from './visuals/ProjectGalleryVisual';

interface ImageLightboxProps {
  isOpen?: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex?: number;
  initialIndex?: number;
  onIndexChange?: (index: number) => void;
  siteSettings?: SiteSettings;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen = true,
  onClose,
  items = [],
  currentIndex,
  initialIndex = 0,
  onIndexChange,
  siteSettings
}) => {
  const [internalIndex, setInternalIndex] = useState(() => {
    if (typeof currentIndex === 'number') return currentIndex;
    if (typeof initialIndex === 'number' && initialIndex >= 0 && initialIndex < items.length) return initialIndex;
    return 0;
  });

  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const activeIndex = typeof currentIndex === 'number' ? currentIndex : internalIndex;

  const setActiveIndex = useCallback((newIndex: number) => {
    if (items.length === 0) return;
    const bounded = (newIndex + items.length) % items.length;
    setInternalIndex(bounded);
    setIsZoomed(false);
    if (onIndexChange) {
      onIndexChange(bounded);
    }
  }, [items.length, onIndexChange]);

  // Sync initialIndex changes
  useEffect(() => {
    if (typeof initialIndex === 'number' && initialIndex >= 0 && initialIndex < items.length) {
      setInternalIndex(initialIndex);
      setIsZoomed(false);
    }
  }, [initialIndex, items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex(activeIndex - 1);
  }, [activeIndex, setActiveIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex(activeIndex + 1);
  }, [activeIndex, setActiveIndex]);

  // Keyboard navigation & lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isZoomed) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isZoomed || touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Ensure horizontal swipe is dominant and above threshold
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[activeIndex] || items[0];

  return (
    <AnimatePresence>
      <div 
        id="image-lightbox-modal"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 sm:backdrop-blur-xl p-2 sm:p-4 md:p-6 select-none"
        role="dialog"
        aria-modal="true"
        aria-label={`Image Lightbox - ${currentItem?.title || 'Preview'}`}
      >
        {/* Background Backdrop - Click outside image closes lightbox */}
        <div 
          className="absolute inset-0 bg-transparent cursor-pointer" 
          onClick={onClose}
          aria-label="Close Lightbox Backdrop"
        />

        {/* Top Control Bar */}
        <div className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 z-30 flex items-center justify-between pointer-events-none">
          {/* Item Counter Badge */}
          <div className="pointer-events-auto flex items-center gap-2">
            <span className="text-xs sm:text-sm text-[#ffbe1a] font-mono font-bold bg-[#10131d]/90 px-3.5 py-1.5 rounded-full border border-white/15 shadow-xl backdrop-blur-md">
              {activeIndex + 1} / {items.length}
            </span>
            {currentItem.layout && (
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                {currentItem.layout} view
              </span>
            )}
          </div>

          {/* Action Buttons: Zoom & Close */}
          <div className="pointer-events-auto flex items-center gap-2">
            {currentItem.image && (
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-[#10131d]/90 text-slate-300 hover:text-[#ffbe1a] hover:bg-white/10 border border-white/15 transition-all shadow-xl backdrop-blur-md flex items-center justify-center cursor-pointer active:scale-95"
                aria-label={isZoomed ? "Zoom out image" : "Zoom in image"}
              >
                {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-[#10131d]/90 text-white hover:text-black hover:bg-[#ffbe1a] border border-white/20 transition-all shadow-xl backdrop-blur-md flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Navigation Button (Desktop) */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 min-h-[48px] min-w-[48px] p-3 rounded-full bg-[#10131d]/90 text-white hover:bg-[#ffbe1a] hover:text-black border border-white/20 transition-all cursor-pointer shadow-2xl backdrop-blur-md hidden sm:flex items-center justify-center active:scale-90"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Navigation Button (Desktop) */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 min-h-[48px] min-w-[48px] p-3 rounded-full bg-[#10131d]/90 text-white hover:bg-[#ffbe1a] hover:text-black border border-white/20 transition-all cursor-pointer shadow-2xl backdrop-blur-md hidden sm:flex items-center justify-center active:scale-90"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Image Stage */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Visual Frame */}
          <div 
            className={`w-full rounded-2xl overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] bg-[#0c0e15] flex items-center justify-center transition-all duration-300 ${
              isZoomed ? 'overflow-auto max-h-[82vh] cursor-zoom-out' : 'max-h-[75vh]'
            }`}
            onClick={() => currentItem.image && setIsZoomed(!isZoomed)}
          >
            {currentItem.image ? (
              <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
                <img
                  src={currentItem.image}
                  alt={currentItem.alt || currentItem.title || "Project visual asset"}
                  className={`object-contain mx-auto transition-transform duration-300 ${
                    isZoomed 
                      ? 'scale-150 min-w-full max-h-none py-12' 
                      : 'max-h-[70vh] w-auto max-w-full'
                  }`}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            ) : (
              <div className="w-full h-[55vh] min-h-[360px] max-h-[650px] p-2 sm:p-4 flex items-center justify-center">
                <ProjectGalleryVisual
                  visualType={currentItem.visualType || 'brand-identity'}
                  title={currentItem.title}
                  siteSettings={siteSettings}
                />
              </div>
            )}
          </div>

          {/* Caption & Title Details */}
          <div className="mt-3 sm:mt-4 text-center px-4 max-w-2xl space-y-1">
            <h4 className="text-white font-bold text-base sm:text-lg font-['Outfit'] tracking-tight">
              {currentItem.title}
            </h4>
            {currentItem.caption && (
              <p className="text-xs sm:text-sm text-slate-300 font-['Plus_Jakarta_Sans'] leading-relaxed">
                {currentItem.caption}
              </p>
            )}
          </div>

          {/* Mobile Navigation Buttons Bar (Touch targets >= 44px) */}
          {items.length > 1 && (
            <div className="flex sm:hidden items-center justify-center gap-3 mt-3 w-full px-4">
              <button
                type="button"
                onClick={handlePrev}
                className="flex-1 min-h-[44px] py-2.5 px-4 rounded-xl bg-[#10131d] border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:bg-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-[#ffbe1a]" />
                <span>Previous</span>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 min-h-[44px] py-2.5 px-4 rounded-xl bg-[#ffbe1a] text-black font-bold text-xs flex items-center justify-center gap-1.5 active:bg-amber-400"
                aria-label="Next image"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

