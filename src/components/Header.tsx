
import React from 'react';
import { Scan, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="text-center lg:text-left mb-8 animate-fade-in">
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
        <div className="relative">
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Scan size={24} className="text-white lg:w-7 lg:h-7" />
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Sparkles size={12} className="text-white" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            NutriScan
          </h1>
          <p className="text-sm lg:text-base text-gray-600">Tu asistente nutricional inteligente</p>
        </div>
      </div>
      
      <div className="bg-gradient-card rounded-2xl p-4 lg:p-6 border border-white/20">
        <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
          Escanea cualquier producto alimentario y obtén un análisis nutricional 
          personalizado según tus objetivos de salud
        </p>
      </div>
    </div>
  );
};
