import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';
import { Product } from '../types/nutrition';
import { fetchProductData } from '../utils/openFoodFacts';
import { Scan, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { PermissionError } from './PermissionError';
import { cn } from '@/lib/utils';

interface ScannerProps {
  onProductFound: (product: Product) => void;
  onLoadingChange: (loading: boolean) => void;
}

export const Scanner: React.FC<ScannerProps> = ({ onProductFound, onLoadingChange }) => {
  const scannerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const { toast } = useToast();

  const initQuagga = async () => {
    if (!scannerRef.current) return;

    try {
      // Configurar el stream de video
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      setHasPermission(true);

      // Inicializar Quagga
      await new Promise<void>((resolve, reject) => {
        Quagga.init({
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: scannerRef.current || undefined,
            constraints: {
              width: { min: 640 },
              height: { min: 480 },
              aspectRatio: { ideal: 1.7777777778 },
              facingMode: facingMode
            },
          },
          decoder: {
            readers: [
              "ean_reader",
              "ean_8_reader",
              "code_128_reader",
              "code_39_reader",
              "upc_reader",
              "upc_e_reader"
            ]
          },
          locate: true,
          numOfWorkers: navigator.hardwareConcurrency || 4,
          frequency: 10,
          debug: {
            drawBoundingBox: true,
            showFrequency: false,
            drawScanline: true,
            showPattern: true
          },
          multiple: false
        }, (err) => {
          if (err) {
            console.error('Error al inicializar Quagga:', err);
            reject(err);
            return;
          }
          resolve();
        });
      });

      Quagga.start();
      setIsScanning(true);

      Quagga.onDetected(handleBarcodeDetected);

    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
      setHasPermission(false);
      toast({
        title: "Error de cámara",
        description: "No se pudo acceder a la cámara. Verifica los permisos.",
        variant: "destructive"
      });
    }
  };

  const handleBarcodeDetected = async (result: any) => {
    const code = result.codeResult.code;
    console.log('Código detectado:', code);
    
    // Detener el escáner temporalmente
    stopScanner();
    onLoadingChange(true);

    try {
      const product = await fetchProductData(code);
      if (product) {
        onProductFound(product);
        toast({
          title: "¡Producto encontrado!",
          description: `${product.product_name || 'Producto sin nombre'}`,
        });
      } else {
        toast({
          title: "Producto no encontrado",
          description: "Este código no está en nuestra base de datos.",
          variant: "destructive"
        });
        // Reiniciar el escáner si no se encontró el producto
        setTimeout(() => {
          startScanner();
        }, 2000);
      }
    } catch (error) {
      console.error('Error al buscar producto:', error);
      toast({
        title: "Error",
        description: "Ocurrió un error al buscar el producto. Intenta de nuevo.",
        variant: "destructive"
      });
      // Reiniciar el escáner en caso de error
      setTimeout(() => {
        startScanner();
      }, 2000);
    } finally {
      onLoadingChange(false);
    }
  };

  const startScanner = async () => {
    try {
      await initQuagga();
    } catch (error) {
      console.error('Error al iniciar el escáner:', error);
    }
  };

  const stopScanner = () => {
    try {
      Quagga.offDetected(handleBarcodeDetected);
      Quagga.stop();
      
      // Detener el stream de video
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
      
      setIsScanning(false);
    } catch (error) {
      console.error('Error al detener el escáner:', error);
    }
  };

  const toggleCamera = async () => {
    stopScanner();
    setFacingMode(prev => prev === 'environment' ? 'user' : 'environment');
    // Pequeño retraso para asegurar que la cámara anterior se haya liberado
    setTimeout(startScanner, 500);
  };

  useEffect(() => {
    return () => {
      stopScanner();
    };
  }, []);

  useEffect(() => {
    if (isScanning) {
      startScanner();
    }
    return () => {
      if (isScanning) {
        stopScanner();
      }
    };
  }, [facingMode]);

  return (
    <div className="space-y-4">
      <div className={cn("relative w-full bg-black rounded-lg overflow-hidden", { hidden: !isScanning })}>
        <div 
          ref={scannerRef} 
          className="relative w-full h-64 md:h-80"
        >
          {/* Vista previa de la cámara */}
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted
          />
          
          {/* Overlay de escaneo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-64 h-64 border-2 border-emerald-400 rounded-lg">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-emerald-400 rounded-br-lg" />
            </div>
          </div>
          
          {hasPermission === false && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-4">
              <PermissionError onRetry={startScanner} />
            </div>
          )}
        </div>
        
        <div className="p-4 bg-gray-900/80 text-white text-sm">
          {isScanning ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span>Escaneando código de barras...</span>
            </div>
          ) : (
            <p className="text-center">Coloca el código de barras dentro del marco</p>
          )}
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <Button
          onClick={isScanning ? stopScanner : startScanner}
          className="w-full max-w-xs"
          variant={isScanning ? "destructive" : "default"}
        >
          {isScanning ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Detener
            </>
          ) : (
            <>
              <Scan size={16} className="mr-2" />
              {hasPermission === false ? 'Reintentar' : 'Iniciar escaneo'}
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
