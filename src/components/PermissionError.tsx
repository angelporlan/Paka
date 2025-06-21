
import React from 'react';
import { Button } from '@/components/ui/button';
import { CameraOff } from 'lucide-react';

interface PermissionErrorProps {
  onRetry: () => void;
}

export const PermissionError: React.FC<PermissionErrorProps> = ({ onRetry }) => {
  return (
    <div className="bg-gradient-card rounded-2xl p-8 text-center border border-white/20">
      <CameraOff size={48} className="mx-auto mb-4 text-gray-400" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Cámara no disponible</h3>
      <p className="text-gray-600 mb-4">
        Para escanear códigos necesitamos acceso a tu cámara. 
        Por favor, permite el acceso y recarga la página.
      </p>
      <Button onClick={onRetry} variant="outline">
        Intentar de nuevo
      </Button>
    </div>
  );
};
