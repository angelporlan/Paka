
import React, { useState } from 'react';
import { Product } from '../types/nutrition';
import { fetchProductData } from '../utils/openFoodFacts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Barcode } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ManualInputProps {
  onProductFound: (product: Product) => void;
  onLoadingChange: (loading: boolean) => void;
}

export const ManualInput: React.FC<ManualInputProps> = ({ onProductFound, onLoadingChange }) => {
  const [barcode, setBarcode] = useState('');
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!barcode.trim()) {
      toast({
        title: "Código requerido",
        description: "Por favor ingresa un código de barras",
        variant: "destructive"
      });
      return;
    }

    onLoadingChange(true);
    
    try {
      const product = await fetchProductData(barcode.trim());
      if (product) {
        onProductFound(product);
        setBarcode('');
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
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-card rounded-2xl p-6 border border-white/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
          <Barcode size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Búsqueda manual</h3>
          <p className="text-sm text-gray-600">Introduce el código de barras</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="barcode" className="text-sm font-medium text-gray-700">
            Código de barras
          </label>
          <Input
            id="barcode"
            type="text"
            placeholder="Ej: 3017620422003"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            onKeyPress={handleKeyPress}
            className="text-center text-lg font-mono tracking-wider"
          />
        </div>

        <Button 
          onClick={handleSearch} 
          className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
          disabled={!barcode.trim()}
        >
          <Search size={20} className="mr-2" />
          Buscar producto
        </Button>

        <div className="bg-purple-50 rounded-xl p-4">
          <h4 className="font-medium text-purple-900 mb-2">💡 Consejos:</h4>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Los códigos suelen tener 8, 12 o 13 dígitos</li>
            <li>• Búscalo debajo del producto</li>
            <li>• También funciona con códigos UPC y EAN</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
