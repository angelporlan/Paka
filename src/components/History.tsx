
import React, { useState, useEffect } from 'react';
import { Product } from '../types/nutrition';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { History as HistoryIcon, Trash2, Package } from 'lucide-react';

interface HistoryProps {
  onProductSelect: (product: Product) => void;
}

export const History: React.FC<HistoryProps> = ({ onProductSelect }) => {
  const [history, setHistory] = useState<Product[]>([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('nutriscan-history') || '[]');
    setHistory(savedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('nutriscan-history');
    setHistory([]);
  };

  const removeItem = (code: string) => {
    const newHistory = history.filter(product => product.code !== code);
    setHistory(newHistory);
    localStorage.setItem('nutriscan-history', JSON.stringify(newHistory));
  };

  if (history.length === 0) {
    return (
      <div className="bg-gradient-card rounded-2xl p-8 text-center border border-white/20">
        <Package size={48} className="mx-auto mb-4 text-gray-400" />
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sin historial</h3>
        <p className="text-gray-600">
          Los productos que escanees aparecerán aquí para acceso rápido
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
            <HistoryIcon size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Historial</h3>
            <p className="text-sm text-gray-600">{history.length} productos</p>
          </div>
        </div>
        
        <Button 
          onClick={clearHistory} 
          variant="outline" 
          size="sm"
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 size={16} className="mr-1" />
          Limpiar
        </Button>
      </div>

      <div className="space-y-3">
        {history.map((product) => (
          <Card 
            key={product.code} 
            className="p-4 cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02] border-0 bg-gradient-card"
            onClick={() => onProductSelect(product)}
          >
            <div className="flex items-center gap-4">
              {product.image_url ? (
                <img 
                  src={product.image_url} 
                  alt={product.product_name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Package size={20} className="text-gray-400" />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 truncate">
                  {product.product_name || 'Producto sin nombre'}
                </h4>
                <p className="text-sm text-gray-600 truncate">
                  {product.brands || 'Marca no disponible'}
                </p>
                <p className="text-xs text-gray-500 font-mono">
                  {product.code}
                </p>
              </div>

              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(product.code);
                }}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-red-500 hover:bg-red-50"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
