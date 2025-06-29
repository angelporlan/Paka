import React from 'react';
import { LifeBuoy, BookOpen, MessageCircle, Camera, Search, History } from 'lucide-react';

const Ayuda = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
          <LifeBuoy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Centro de ayuda</h1>
        <p className="text-gray-600 mb-2 max-w-xl">¿Tienes dudas sobre el funcionamiento de NutriScan? Aquí encontrarás respuestas y recursos útiles.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5" /> Recursos de ayuda</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-green-500" /> Guías de uso paso a paso</li>
          <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-blue-500" /> Preguntas frecuentes</li>
          <li className="flex items-center gap-2"><LifeBuoy className="w-4 h-4 text-purple-500" /> Soporte técnico</li>
          <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-orange-500" /> Contacto directo con el equipo</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Cómo usar NutriScan</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div className="border-l-4 border-green-500 pl-4">
            <strong className="flex items-center gap-2"><Camera className="w-4 h-4" /> Escanear productos</strong>
            <p className="text-gray-600">Apunta la cámara al código de barras del producto. Mantén el código dentro del marco de escaneo hasta que se detecte automáticamente.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <strong className="flex items-center gap-2"><Search className="w-4 h-4" /> Búsqueda manual</strong>
            <p className="text-gray-600">Si el escaneo no funciona, puedes introducir el código de barras manualmente en la sección de búsqueda.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <strong className="flex items-center gap-2"><History className="w-4 h-4" /> Historial de productos</strong>
            <p className="text-gray-600">Todos los productos escaneados se guardan en tu historial local para consultas futuras.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <strong className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> Obtener ayuda</strong>
            <p className="text-gray-600">Si tienes problemas, consulta las preguntas frecuentes o contacta con nuestro equipo de soporte.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Ayuda; 