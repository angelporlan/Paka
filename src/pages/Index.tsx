
import React, { useState } from 'react';
import { Header } from '../components/Header';
import { UserGoalSelector } from '../components/UserGoalSelector';
import { Scanner } from '../components/Scanner';
import { ManualInput } from '../components/ManualInput';
import { ProductDisplay } from '../components/ProductDisplay';
import { History } from '../components/History';
import { UserGoal, Product } from '../types/nutrition';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScanLine, Edit3, History as HistoryIcon } from 'lucide-react';

const Index = () => {
  const [userGoal, setUserGoal] = useState<UserGoal>('salud-general');
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleProductFound = (product: Product) => {
    setCurrentProduct(product);
    
    // Guardar en historial
    const history = JSON.parse(localStorage.getItem('nutriscan-history') || '[]');
    const newHistory = [product, ...history.filter((p: Product) => p.code !== product.code)].slice(0, 20);
    localStorage.setItem('nutriscan-history', JSON.stringify(newHistory));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Controls */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            <Header />
            
            <div className="lg:sticky lg:top-6">
              <UserGoalSelector 
                selectedGoal={userGoal} 
                onGoalChange={setUserGoal} 
              />

              <div className="mt-6">
                <Tabs defaultValue="scan" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-3 bg-white/50 backdrop-blur-sm">
                    <TabsTrigger value="scan" className="flex items-center gap-2 text-sm">
                      <ScanLine size={16} />
                      <span className="hidden sm:inline">Escanear</span>
                    </TabsTrigger>
                    <TabsTrigger value="manual" className="flex items-center gap-2 text-sm">
                      <Edit3 size={16} />
                      <span className="hidden sm:inline">Manual</span>
                    </TabsTrigger>
                    <TabsTrigger value="history" className="flex items-center gap-2 text-sm">
                      <HistoryIcon size={16} />
                      <span className="hidden sm:inline">Historial</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="scan">
                    <Scanner 
                      onProductFound={handleProductFound}
                      onLoadingChange={setIsLoading}
                    />
                  </TabsContent>

                  <TabsContent value="manual">
                    <ManualInput 
                      onProductFound={handleProductFound}
                      onLoadingChange={setIsLoading}
                    />
                  </TabsContent>

                  <TabsContent value="history">
                    <History 
                      onProductSelect={handleProductFound}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Right Panel - Product Display */}
          <div className="lg:col-span-7 xl:col-span-8">
            {currentProduct ? (
              <div className="lg:sticky lg:top-6">
                <ProductDisplay 
                  product={currentProduct} 
                  userGoal={userGoal}
                />
              </div>
            ) : (
              <div className="hidden lg:flex items-center justify-center h-96 bg-gradient-card rounded-2xl border border-white/20">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ScanLine size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Escanea un producto
                  </h3>
                  <p className="text-gray-600">
                    Los resultados del análisis nutricional aparecerán aquí
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 text-center animate-fade-in">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Buscando producto...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
