import React from 'react';
import { RefreshCw, Camera, BarChart3, Palette, Bug, Star } from 'lucide-react';

const Actualizaciones = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
          <RefreshCw className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Actualizaciones</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Consulta las últimas novedades, mejoras y nuevas funciones que vamos incorporando a NutriScan.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><Star className="w-5 h-5" /> Últimas actualizaciones</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><Camera className="w-4 h-4 text-green-500" /> Mejoras en el escaneo de códigos</li>
          <li className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-blue-500" /> Nuevas métricas nutricionales</li>
          <li className="flex items-center gap-2"><Palette className="w-4 h-4 text-purple-500" /> Optimización de la interfaz</li>
          <li className="flex items-center gap-2"><Bug className="w-4 h-4 text-red-500" /> Corrección de errores reportados por usuarios</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Próximas mejoras</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div className="border-l-4 border-green-500 pl-4">
            <strong className="flex items-center gap-2"><Camera className="w-4 h-4" /> Escaneo mejorado</strong>
            <p className="text-gray-600">Estamos trabajando en mejorar la precisión del escaneo de códigos de barras y añadir soporte para más formatos.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <strong className="flex items-center gap-2"><BarChart3 className="w-4 h-4" /> Análisis nutricional avanzado</strong>
            <p className="text-gray-600">Próximamente podrás obtener análisis más detallados de la información nutricional de los productos.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <strong className="flex items-center gap-2"><Palette className="w-4 h-4" /> Nuevas funcionalidades</strong>
            <p className="text-gray-600">Estamos desarrollando nuevas características como listas de compras y recomendaciones personalizadas.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <strong className="flex items-center gap-2"><Star className="w-4 h-4" /> Mejoras de rendimiento</strong>
            <p className="text-gray-600">Optimizaciones continuas para hacer la aplicación más rápida y eficiente en todos los dispositivos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Actualizaciones; 