
import React, { useRef, forwardRef } from 'react';
import { ScannerFrame } from './ScannerFrame';

interface ScannerCameraProps {
  isScanning: boolean;
}

export const ScannerCamera = forwardRef<HTMLDivElement, ScannerCameraProps>(
  ({ isScanning }, ref) => {
    if (!isScanning) return null;

    return (
      <div 
        ref={ref} 
        id="interactive" 
        className="relative bg-black rounded-xl overflow-hidden"
        style={{ height: '300px' }}
      >
        <ScannerFrame />
      </div>
    );
  }
);

ScannerCamera.displayName = 'ScannerCamera';
