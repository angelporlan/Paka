
import React from 'react';

export const ScannerFrame: React.FC = () => {
  return (
    <>
      {/* Marco de guía para el código de barras */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <div className="relative w-64 h-16">
          {/* Marco principal */}
          <div className="absolute inset-0 border-2 border-white rounded-lg shadow-lg"></div>
          
          {/* Esquinas decorativas */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-green-400 rounded-tl-lg"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-green-400 rounded-tr-lg"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-green-400 rounded-bl-lg"></div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-green-400 rounded-br-lg"></div>
          
          {/* Línea de escaneo animada */}
          <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-red-500 opacity-75 animate-pulse"></div>
          
          {/* Texto de guía */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-2 py-1 rounded whitespace-nowrap">
            Centra el código de barras
          </div>
        </div>
      </div>
      
      {/* Overlay semitransparente para destacar el área de escaneo */}
      <div className="absolute inset-0 bg-black/30 z-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-16 bg-transparent border-2 border-transparent rounded-lg shadow-inner" style={{ boxShadow: '0 0 0 9999px rgba(0,0,0,0.5)' }}></div>
      </div>
    </>
  );
};
