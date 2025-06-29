import React from 'react';

const Actualizaciones = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-3xl font-bold mb-4">Actualizaciones</h1>
    <p className="text-lg text-gray-700 mb-8">Consulta las últimas novedades, mejoras y nuevas funciones que vamos incorporando a NutriScan.</p>
    <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-600">
      <li>Mejoras en el escaneo de códigos</li>
      <li>Nuevas métricas nutricionales</li>
      <li>Optimización de la interfaz</li>
      <li>Corrección de errores reportados por usuarios</li>
    </ul>
  </div>
);

export default Actualizaciones; 