import React from 'react';

const FAQ = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-3xl font-bold mb-4">Preguntas frecuentes (FAQ)</h1>
    <p className="text-lg text-gray-700 mb-8">Encuentra respuestas a las dudas más comunes sobre NutriScan.</p>
    <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-600">
      <li>¿Es NutriScan gratuita? <span className="text-gray-500">Sí, 100% gratuita.</span></li>
      <li>¿Necesito registrarme? <span className="text-gray-500">No, puedes usar la app sin registro.</span></li>
      <li>¿Qué productos puedo escanear? <span className="text-gray-500">Cualquier producto con código de barras.</span></li>
      <li>¿Mis datos están seguros? <span className="text-gray-500">Sí, no almacenamos información personal.</span></li>
    </ul>
  </div>
);

export default FAQ; 