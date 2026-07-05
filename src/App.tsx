import React from 'react';
import Flipbook from './components/Flipbook';
import { dossierPages } from './data/pages';
import { ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function App() {
  return (
    <div className="h-screen w-screen bg-[#ecece9] flex flex-col font-sans text-zinc-900 selection:bg-zinc-800 selection:text-zinc-100 overflow-hidden relative">
      {/* Ambient background texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0.05) 100%)' }}
      ></div>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-4 md:p-6 z-20 flex flex-col md:flex-row justify-between items-center md:items-start gap-2 pointer-events-none">
        <h1 className="font-serif text-lg md:text-xl tracking-widest text-zinc-800 uppercase pointer-events-auto mt-2 md:mt-0">PORTAFOLIO</h1>
      </header>

      {/* Main Content with Zoom */}
      <main className="w-full h-full flex-1 relative z-10">
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={10}
          centerOnInit={true}
          wheel={{ step: 0.1 }}
          doubleClick={{ disabled: true }}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Zoom Controls */}
              <div className="absolute bottom-6 md:bottom-12 right-1/2 translate-x-1/2 md:translate-x-0 md:right-12 z-50 flex items-center gap-2 bg-white/80 md:bg-white/60 p-2 rounded-full shadow-lg backdrop-blur-md border border-white/50">
                <button 
                  onClick={() => zoomOut()} 
                  className="p-2 md:p-3 hover:bg-white rounded-full transition-colors active:scale-95"
                  aria-label="Alejar"
                >
                  <ZoomOut size={20} className="text-zinc-700" />
                </button>
                <button 
                  onClick={() => resetTransform()} 
                  className="p-2 md:p-3 hover:bg-white rounded-full transition-colors active:scale-95"
                  aria-label="Ajustar"
                >
                  <Maximize size={20} className="text-zinc-700" />
                </button>
                <button 
                  onClick={() => zoomIn()} 
                  className="p-2 md:p-3 hover:bg-white rounded-full transition-colors active:scale-95"
                  aria-label="Acercar"
                >
                  <ZoomIn size={20} className="text-zinc-700" />
                </button>
              </div>

              <TransformComponent 
                wrapperClass="!w-full !h-full" 
                contentClass="!w-full !h-full flex items-center justify-center"
              >
                <Flipbook 
                  key="default-flipbook"
                  pages={dossierPages} 
                  aspectRatio={null} 
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </main>
    </div>
  );
}
