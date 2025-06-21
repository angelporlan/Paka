
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, CameraOff } from 'lucide-react';

interface ScannerControlsProps {
  isScanning: boolean;
  onStart: () => void;
  onStop: () => void;
}

export const ScannerControls: React.FC<ScannerControlsProps> = ({
  isScanning,
  onStart,
  onStop
}) => {
  if (!isScanning) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-gentle">
          <Camera size={32} className="text-white" />
        </div>
        <p className="text-gray-600 mb-4">Toca para activar la cámara y escanear</p>
        <Button onClick={onStart} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
          <Camera size={20} className="mr-2" />
          Activar escáner
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-2">
        <Button 
          onClick={onStop} 
          variant="outline" 
          className="flex-1"
        >
          <CameraOff size={20} className="mr-2" />
          Detener
        </Button>
      </div>
      
      <div className="bg-blue-50 rounded-xl p-4">
        <p className="text-sm text-blue-800 text-center">
          💡 Coloca el código de barras dentro del marco blanco y mantén la cámara estable
        </p>
      </div>
    </>
  );
};
