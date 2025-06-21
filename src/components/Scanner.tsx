
import React, { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';
import { Product } from '../types/nutrition';
import { fetchProductData } from '../utils/openFoodFacts';
import { Scan } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ScannerCamera } from './ScannerCamera';
import { ScannerControls } from './ScannerControls';
import { PermissionError } from './PermissionError';

interface ScannerProps {
  onProductFound: (product: Product) => void;
  onLoadingChange: (loading: boolean) => void;
}

export const Scanner: React.FC<ScannerProps> = ({ onProductFound, onLoadingChange }) => {
  const scannerRef = useRef<HTMLDivElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const { toast } = useToast();

  const startScanner = async () => {
    try {
      // Solicitar permisos de cámara
      await navigator.mediaDevices.getUserMedia({ video: true });
      setHasPermission(true);
      
      if (!scannerRef.current) return;

      Quagga.init({
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: scannerRef.current,
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment"
          }
        },
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader"
          ]
        },
        locator: {
          patchSize: "medium",
          halfSample: true
        },
        numOfWorkers: 2,
        frequency: 10
      }, (err) => {
        if (err) {
          console.error('Error al inicializar el escáner:', err);
          toast({
            title: "Error de cámara",
            description: "No se pudo acceder a la cámara. Verifica los permisos.",
            variant: "destructive"
          });
          setHasPermission(false);
          return;
        }
        Quagga.start();
        setIsScanning(true);
      });

      Quagga.onDetected(async (result) => {
        const code = result.codeResult.code;
        console.log('Código detectado:', code);
        
        // Detener el escáner temporalmente
        Quagga.stop();
        setIsScanning(false);
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
          }
        } catch (error) {
          console.error('Error al buscar producto:', error);
          toast({
            title: "Error de conexión",
            description: "No se pudo obtener la información del producto.",
            variant: "destructive"
          });
        } finally {
          onLoadingChange(false);
        }
      });

    } catch (error) {
      console.error('Error al acceder a la cámara:', error);
      setHasPermission(false);
      toast({
        title: "Sin acceso a cámara",
        description: "Por favor, permite el acceso a la cámara para escanear códigos.",
        variant: "destructive"
      });
    }
  };

  const stopScanner = () => {
    Quagga.stop();
    setIsScanning(false);
  };

  useEffect(() => {
    return () => {
      if (isScanning) {
        Quagga.stop();
      }
    };
  }, [isScanning]);

  if (hasPermission === false) {
    return <PermissionError />;
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-card rounded-2xl p-6 border border-white/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Scan size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Escáner de código de barras</h3>
            <p className="text-sm text-gray-600">Apunta la cámara al código</p>
          </div>
        </div>

        <div className="space-y-4">
          <ScannerCamera ref={scannerRef} isScanning={isScanning} />
          <ScannerControls 
            isScanning={isScanning}
            onStart={startScanner}
            onStop={stopScanner}
          />
        </div>
      </div>
    </div>
  );
};
