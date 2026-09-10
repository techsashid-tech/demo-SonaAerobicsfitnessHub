import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  RotateCw, 
  Pause, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X 
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gymData';
import { ThemeMode, GalleryItem } from '../types';

interface ThreeDGalleryProps {
  theme: ThemeMode;
}

export const ThreeDGallery: React.FC<ThreeDGalleryProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  // Drag handling state
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const currentAngleRef = useRef<number>(0);

  const totalItems = GALLERY_ITEMS.length;
  const anglePerItem = 360 / totalItems;
  const radius = 340; // distance in 3D Z space for desktop, scaled down on mobile

  // Idle slow auto-rotation
  useEffect(() => {
    let animationFrameId: number;

    const rotate = () => {
      if (isAutoRotating && !isHovered && !isDraggingRef.current) {
        setRotationAngle((prev) => {
          const next = (prev + 0.25) % 360;
          currentAngleRef.current = next;
          return next;
        });
      }
      animationFrameId = requestAnimationFrame(rotate);
    };

    animationFrameId = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoRotating, isHovered]);

  // Touch and Mouse Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    const sensitivity = 0.35;
    const newAngle = currentAngleRef.current + deltaX * sensitivity;
    setRotationAngle(newAngle);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    currentAngleRef.current = rotationAngle;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleNext = () => {
    setRotationAngle((prev) => {
      const next = prev - anglePerItem;
      currentAngleRef.current = next;
      return next;
    });
  };

  const handlePrev = () => {
    setRotationAngle((prev) => {
      const next = prev + anglePerItem;
      currentAngleRef.current = next;
      return next;
    });
  };

  return (
    <section
      id="gallery"
      className={`py-24 sm:py-32 relative overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#08080C] text-slate-100' : 'bg-white text-slate-800'
      }`}
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Signature 3D Interactive Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight">
            Trending 3D Rotating{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-400 to-rose-300">
              Visual Arena
            </span>
          </h2>
          <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Experience the vibrant pulse of Sona Aerobics & Fitness Hub. Drag horizontally to rotate through our studio moments, classes, and uplifting community.
          </p>
        </div>

        {/* Interactive 3D Perspective Stage */}
        <div
          className="relative w-full max-w-4xl mx-auto h-[460px] sm:h-[500px] flex items-center justify-center select-none cursor-grab active:cursor-grabbing perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {/* 3D Rotating Ring */}
          <div
            className="relative w-64 h-80 sm:w-72 sm:h-96 transform-style-3d transition-transform duration-100 ease-out"
            style={{
              transform: `rotateY(${rotationAngle}deg)`,
            }}
          >
            {GALLERY_ITEMS.map((item, index) => {
              const itemAngle = index * anglePerItem;
              return (
                <div
                  key={item.id}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-rose-400/30 group transition-shadow duration-300 backface-hidden"
                  style={{
                    transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.65)',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(item);
                  }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Card Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-500/80 text-white inline-block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold font-heading line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3D Gallery Controls Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous 3D item"
            className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 hover:border-rose-500 hover:text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className="px-5 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-700 text-xs font-bold text-slate-300 hover:text-white flex items-center gap-2 cursor-pointer"
          >
            {isAutoRotating ? (
              <>
                <Pause className="w-4 h-4 text-rose-400" />
                <span>Pause Rotation</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-rose-400" />
                <span>Auto-Rotate</span>
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            aria-label="Next 3D item"
            className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 hover:border-rose-500 hover:text-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-500 mt-3 font-medium">
          💡 Tip: Click on any card for full resolution view, or drag with mouse/finger to spin the 3D cylinder.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full rounded-3xl overflow-hidden bg-[#121218] border border-rose-500/30 p-2 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-rose-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover rounded-2xl"
            />

            <div className="p-4 sm:p-6 text-left">
              <span className="text-xs uppercase font-bold text-rose-400">
                {selectedImage.category}
              </span>
              <h3 className="text-xl font-bold font-heading mt-1">{selectedImage.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
