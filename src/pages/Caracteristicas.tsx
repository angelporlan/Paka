import React from 'react';
import { Zap, Camera, BarChart3, Target, History, Shield, EyeOff } from 'lucide-react';

const Caracteristicas = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Características</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Descubre todas las funcionalidades y ventajas que ofrece NutriScan para mejorar tu alimentación.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><Camera className="w-5 h-5" /> Funcionalidades principales</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><Camera className="w-4 h-4 text-green-500" /> Escaneo inteligente de códigos de barras</li>
          <li className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-blue-500" /> Análisis nutricional detallado</li>
          <li className="flex items-center gap-2"><Target className="w-4 h-4 text-purple-500" /> Puntuación personalizada según tus objetivos</li>
          <li className="flex items-center gap-2"><History className="w-4 h-4 text-orange-500" /> Historial local de productos</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Ventajas</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div className="border-l-4 border-green-500 pl-4">
            <strong className="flex items-center gap-2"><EyeOff className="w-4 h-4" /> Sin registro, sin publicidad</strong>
            <p className="text-gray-600">Usa NutriScan inmediatamente sin necesidad de crear una cuenta. No mostramos publicidad ni rastreamos tu actividad.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <strong className="flex items-center gap-2"><Shield className="w-4 h-4" /> Privacidad garantizada</strong>
            <p className="text-gray-600">Toda la información se guarda localmente en tu dispositivo. No compartimos datos con terceros.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <strong className="flex items-center gap-2"><Zap className="w-4 h-4" /> Fácil de usar</strong>
            <p className="text-gray-600">Interfaz intuitiva y rápida. Escanea productos en segundos y obtén información nutricional instantánea.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <strong className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Base de datos completa</strong>
            <p className="text-gray-600">Accede a información nutricional de millones de productos de todo el mundo, actualizada constantemente.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Caracteristicas; 