
import React from 'react';
import { Product, UserGoal } from '../types/nutrition';
import { analyzeNutrition } from '../utils/nutritionAnalyzer';
import { Card } from '@/components/ui/card';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Package, 
  Zap, 
  Beef, 
  Wheat, 
  Droplets, 
  ShieldCheck, 
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface NutritionItem {
  label: string;
  value: number | undefined;
  unit: string;
  displayValue?: string;
  icon: React.FC<{ className?: string }>;
  color: string;
}

interface ProductDisplayProps {
  product: Product;
  userGoal: UserGoal;
}

export const ProductDisplay: React.FC<ProductDisplayProps> = ({ product, userGoal }) => {
  const analysis = analyzeNutrition(product, userGoal);
  const nutriments = product.nutriments;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-excellent-600';
    if (score >= 60) return 'text-good-600';
    if (score >= 40) return 'text-average-600';
    return 'text-poor-600';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'from-excellent-500 to-excellent-600';
    if (score >= 60) return 'from-good-500 to-good-600';
    if (score >= 40) return 'from-average-500 to-average-600';
    return 'from-poor-500 to-poor-600';
  };

  const energyKcal = nutriments.energy_100g ? nutriments.energy_100g / 4.184 : undefined;

  const nutritionItems: NutritionItem[] = [
    { 
      label: 'Energía', 
      value: nutriments.energy_100g,
      unit: '',
      displayValue: nutriments.energy_100g ? 
        `${Math.round(nutriments.energy_100g)} kJ / ${Math.round(energyKcal!)} kcal` : 'N/D',
      icon: ({ className }) => <Zap className={className} />,
      color: 'text-orange-600' 
    },
    { 
      label: 'Proteínas', 
      value: nutriments.proteins_100g, 
      unit: 'g', 
      icon: ({ className }) => <Beef className={className} />,
      color: 'text-red-600' 
    },
    { 
      label: 'Carbohidratos', 
      value: nutriments.carbohydrates_100g, 
      unit: 'g', 
      icon: ({ className }) => <Wheat className={className} />,
      color: 'text-yellow-600' 
    },
    { 
      label: 'Grasas', 
      value: nutriments.fat_100g, 
      unit: 'g', 
      icon: ({ className }) => <Droplets className={className} />,
      color: 'text-blue-600' 
    },
    { 
      label: 'Azúcares', 
      value: nutriments.sugars_100g, 
      unit: 'g', 
      icon: ({ className }) => <Droplets className={className} />,
      color: 'text-pink-600' 
    },
    { 
      label: 'Grasas saturadas', 
      value: nutriments['saturated-fat_100g'], 
      unit: 'g', 
      icon: ({ className }) => <Droplets className={className} strokeWidth={3} />,
      color: 'text-purple-600' 
    },
    { 
      label: 'Sal', 
      value: nutriments.salt_100g, 
      unit: 'g', 
      icon: ({ className }) => <ShieldCheck className={className} />,
      color: 'text-gray-600' 
    },
    { 
      label: 'Aditivos', 
      value: product.additives_n,
      unit: '',
      displayValue: product.additives_n ? `${product.additives_n} ${product.additives_n === 1 ? 'aditivo' : 'aditivos'}` : 'Sin aditivos',
      icon: ({ className }) => <Package className={className} />,
      color: 'text-indigo-600'
    }
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Cabecera del producto */}
      <Card className="p-6 border-0 bg-gradient-card">
        <div className="flex items-start gap-4">
          {product.image_url ? (
            <img 
              src={product.image_url} 
              alt={product.product_name}
              className="w-20 h-20 object-cover rounded-xl shadow-md"
            />
          ) : (
            <div className="w-20 h-20 bg-gray-200 rounded-xl flex items-center justify-center">
              <Package size={32} className="text-gray-400" />
            </div>
          )}
          
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {product.product_name || 'Producto sin nombre'}
            </h2>
            {product.brands && (
              <p className="text-gray-600 mb-2">{product.brands}</p>
            )}
            <Badge variant="outline" className="text-xs font-mono">
              {product.code}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Puntuación nutricional */}
      <Card className="p-6 border-0 bg-gradient-card">
        <div className="text-center mb-6">
          <div className={`text-6xl font-bold mb-2 bg-gradient-to-r ${getScoreBackground(analysis.score)} bg-clip-text text-transparent`}>
            {analysis.score}
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className={`text-2xl font-bold px-4 py-2 rounded-xl bg-gradient-to-r ${getScoreBackground(analysis.score)} text-white`}>
              {analysis.grade}
            </div>
          </div>
          <Progress value={analysis.score} className="h-3 mb-4" />
          <p className="text-gray-600 text-sm">
            Puntuación para objetivo: <strong>
              {userGoal === 'deportista' ? 'Deportista' : 
               userGoal === 'perder-peso' ? 'Perder peso' : 
               'Salud general'}
            </strong>
          </p>
        </div>

        <div className="bg-white/50 rounded-xl p-4 mb-4">
          <p className="text-gray-700 text-center text-sm leading-relaxed">
            {analysis.recommendation}
          </p>
        </div>
      </Card>

      

      <Card className="p-6 border-0 bg-gradient-card mb-4">
        <Collapsible>
          <CollapsibleTrigger className="w-full text-left">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Ingredientes
              </h3>
              <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3">
            <div className="bg-white/50 rounded-lg p-4">
              <p className="text-gray-700 whitespace-pre-line">
                {product.ingredients_text_es || product.ingredients_text || 'No hay información de ingredientes disponible'}
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>

      {/* Información nutricional */}
      <Card className="p-6 border-0 bg-gradient-card">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Información nutricional (por 100g)
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {nutritionItems.map((item) => {
            const Icon = item.icon;
            const value = item.value;
            
            return (
              <div key={item.label} className="bg-white/50 rounded-xl p-4 text-center">
                <Icon className={`mx-auto mb-2 w-5 h-5 ${item.color}`} />
                <div className="text-lg font-bold text-gray-900">
                  {item.displayValue || (value !== undefined ? `${value.toFixed(1)}${item.unit}` : 'N/D')}
                </div>
                <div className="text-xs text-gray-600">{item.label}</div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Análisis detallado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Puntos positivos */}
        {analysis.positives.length > 0 && (
          <Card className="p-4 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle size={20} className="text-green-600" />
              <h4 className="font-semibold text-green-800">Puntos positivos</h4>
            </div>
            <ul className="space-y-2">
              {analysis.positives.map((positive, index) => (
                <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>{positive}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Puntos negativos */}
        {analysis.negatives.length > 0 && (
          <Card className="p-4 border-0 bg-gradient-to-br from-red-50 to-pink-50">
            <div className="flex items-center gap-2 mb-3">
              <XCircle size={20} className="text-red-600" />
              <h4 className="font-semibold text-red-800">Puntos a considerar</h4>
            </div>
            <ul className="space-y-2">
              {analysis.negatives.map((negative, index) => (
                <li key={index} className="text-sm text-red-700 flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span>{negative}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </div>
  );
};
