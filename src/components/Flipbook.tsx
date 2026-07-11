import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlipbookProps {
  pages: React.ReactNode[];
  aspectRatio?: number | null;
}

// Memoized Sheet component to prevent unnecessary re-renders of pages not being flipped
const Sheet = React.memo(({ 
  sheet, 
  index, 
  isFlipped, 
  isFlipping, 
  totalSheets, 
  onNext, 
  onPrev 
}: {
  sheet: { front: React.ReactNode, back: React.ReactNode },
  index: number,
  isFlipped: boolean,
  isFlipping: boolean,
  totalSheets: number,
  onNext: () => void,
  onPrev: () => void,
}) => {
  return (
    <div
      className="absolute top-0 left-1/2 w-1/2 h-full origin-left transition-transform duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)]"
      style={{
        transformStyle: 'preserve-3d',
        WebkitTransformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
        zIndex: isFlipping ? 50 : (isFlipped ? index + 1 : totalSheets - index),
      }}
    >
      {/* Front Face (Right side when closed) */}
      <div 
        className="absolute inset-0 bg-white overflow-hidden shadow-[-1px_0_15px_rgba(0,0,0,0.1)] border-l border-black/5 group cursor-pointer"
        style={{ 
          backfaceVisibility: 'hidden', 
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(0deg)'
        }}
        onDoubleClick={onNext}
      >
        {sheet.front}
        {/* Subtle spine shadow gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent w-16 left-0 pointer-events-none"></div>
        
        {/* Dynamic fold shadow/highlight during flip */}
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 35%, rgba(0,0,0,0.12) 45%, rgba(255,255,255,0.7) 50%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0.02) 65%, rgba(0,0,0,0) 100%)',
            backgroundSize: '300% 100%',
            backgroundPosition: isFlipped ? '100% 0' : '0% 0',
            transition: 'background-position 1s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s ease-in-out',
            opacity: isFlipping ? 1 : 0,
          }}
        ></div>

        {/* Hover interaction hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none"></div>
      </div>
      
      {/* Back Face (Left side when open) */}
      <div 
        className="absolute inset-0 bg-zinc-50 overflow-hidden shadow-[1px_0_15px_rgba(0,0,0,0.1)] border-r border-black/5 group cursor-pointer"
        style={{ 
          backfaceVisibility: 'hidden', 
          WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)' 
        }}
        onDoubleClick={onPrev}
      >
        {sheet.back}
        {/* Subtle spine shadow gradient (on the right because it's flipped) */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/15 via-transparent to-transparent w-16 right-0 left-auto pointer-events-none"></div>

        {/* Dynamic fold shadow/highlight during flip */}
        <div 
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 35%, rgba(0,0,0,0.12) 45%, rgba(255,255,255,0.7) 50%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0.02) 65%, rgba(0,0,0,0) 100%)',
            backgroundSize: '300% 100%',
            backgroundPosition: isFlipped ? '100% 0' : '0% 0',
            transition: 'background-position 1s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s ease-in-out',
            opacity: isFlipping ? 1 : 0,
          }}
        ></div>

        {/* Hover interaction hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
});

export default function Flipbook({ pages, aspectRatio }: FlipbookProps) {
  const [currentSheet, setCurrentSheet] = useState(0);
  const [flipping, setFlipping] = useState<number | null>(null);
  
  // A book has sheets. Each sheet has a front and back page.
  // We need an even number of pages to form complete sheets.
  const paddedPages = React.useMemo(() => {
    const arr = [...pages];
    if (arr.length % 2 !== 0) {
      arr.push(<div className="w-full h-full bg-white"></div>);
    }
    return arr;
  }, [pages]);
  
  const totalSheets = paddedPages.length / 2;

  const sheets = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalSheets; i++) {
      arr.push({
        front: paddedPages[i * 2],
        back: paddedPages[i * 2 + 1],
      });
    }
    return arr;
  }, [paddedPages, totalSheets]);

  // Intelligent Image Preloading
  React.useEffect(() => {
    const preloadImage = (page: React.ReactNode) => {
      if (React.isValidElement(page) && page.type === 'img' && page.props.src) {
        const img = new Image();
        img.src = page.props.src;
      }
    };

    // Preload next sheet
    if (currentSheet + 1 < totalSheets) {
      preloadImage(paddedPages[(currentSheet + 1) * 2]);
      preloadImage(paddedPages[(currentSheet + 1) * 2 + 1]);
    }
    
    // Preload previous sheet
    if (currentSheet - 1 >= 0) {
      preloadImage(paddedPages[(currentSheet - 1) * 2]);
      preloadImage(paddedPages[(currentSheet - 1) * 2 + 1]);
    }
  }, [currentSheet, totalSheets, paddedPages]);

  const next = useCallback(() => {
    if (currentSheet < totalSheets) {
      setFlipping(currentSheet);
      setCurrentSheet((prev) => prev + 1);
      setTimeout(() => setFlipping(null), 1000);
    }
  }, [currentSheet, totalSheets]);

  const prev = useCallback(() => {
    if (currentSheet > 0) {
      setFlipping(currentSheet - 1);
      setCurrentSheet((prev) => prev - 1);
      setTimeout(() => setFlipping(null), 1000);
    }
  }, [currentSheet]);

  // Determine container translation to keep the visible part of the book centered
  let translateX = "translate-x-0";
  if (currentSheet === 0) {
    // Cover only: move container left by 25% so the right half (cover) is centered
    translateX = "-translate-x-1/4";
  } else if (currentSheet === totalSheets) {
    // Back cover only: move container right by 25% so the left half is centered
    translateX = "translate-x-1/4";
  }

  // Render controls in a portal so they stay fixed on the screen, escaping zoom transforms
  const navControls = typeof document !== 'undefined' ? createPortal(
    <div className="fixed bottom-4 md:bottom-8 left-0 w-full flex flex-col items-center justify-center gap-2 md:gap-4 z-50 pointer-events-none">
      <div className="flex items-center justify-center gap-2 md:gap-6 text-zinc-600 pointer-events-auto">
        <button 
          onClick={prev} 
          disabled={currentSheet === 0} 
          className="p-2 md:p-4 rounded-full hover:bg-zinc-200/50 disabled:opacity-30 transition-all bg-white/80 shadow-sm backdrop-blur-sm active:scale-95 border border-zinc-200"
          aria-label="Página anterior"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <span className="font-sans text-[9px] md:text-xs tracking-widest uppercase bg-white/80 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm backdrop-blur-sm text-center min-w-[80px] md:min-w-[100px] border border-zinc-200">
          {currentSheet === 0 
            ? "Portada" 
            : currentSheet === totalSheets 
              ? "Contraportada" 
              : `Pág ${currentSheet * 2 - 1} - ${currentSheet * 2}`}
        </span>
        <button 
          onClick={next} 
          disabled={currentSheet === totalSheets} 
          className="p-2 md:p-4 rounded-full hover:bg-zinc-200/50 disabled:opacity-30 transition-all bg-white/80 shadow-sm backdrop-blur-sm active:scale-95 border border-zinc-200"
          aria-label="Siguiente página"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
      <p className="text-[8px] md:text-xs font-sans text-zinc-500 tracking-widest uppercase text-center px-3 md:px-4 bg-white/40 md:bg-white/60 py-1 md:py-1.5 rounded-full backdrop-blur-sm border border-zinc-200/50 pointer-events-auto">
        Haz doble clic en las hojas para interactuar
      </p>
    </div>,
    document.body
  ) : null;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-visible py-4 md:py-6">
      {navControls}
      {/* 3D Book Container */}
      <div 
        className="w-full max-w-[100vw] sm:max-w-[95vw] lg:max-w-[90vw] 2xl:max-w-[85vw] px-1 sm:px-2 md:px-8 flex-1 flex items-center"
        style={{ perspective: '4000px', WebkitPerspective: '4000px' }}
      >
        <div 
          className={`relative w-full transition-transform duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${translateX} ${!aspectRatio ? 'aspect-[1682/594]' : ''}`}
          style={aspectRatio ? { aspectRatio: `${aspectRatio}` } : undefined}
        >
          {sheets.map((sheet, index) => {
            // Render strictly: anterior (currentSheet - 1), actual (currentSheet), siguiente (currentSheet + 1)
            // To keep the animation exactly the same, we must also render the sheet underneath during the flip.
            let minIndex = currentSheet - 1;
            let maxIndex = currentSheet + 1;
            if (flipping !== null) {
              if (flipping < currentSheet) {
                // Flipping forward: keep the one behind the left side mounted
                minIndex = Math.min(minIndex, flipping - 1);
              } else {
                // Flipping backward: keep the one behind the right side mounted
                maxIndex = Math.max(maxIndex, flipping + 2);
              }
            }

            if (index < minIndex || index > maxIndex) return null;

            const isFlipped = index < currentSheet;
            const isFlipping = flipping === index;
            
            return (
              <Sheet 
                key={index}
                sheet={sheet}
                index={index}
                isFlipped={isFlipped}
                isFlipping={isFlipping}
                totalSheets={totalSheets}
                onNext={next}
                onPrev={prev}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
