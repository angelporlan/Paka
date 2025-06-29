import React from 'react';

const Caracteristicas = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-3xl font-bold mb-4">Características</h1>
    <p className="text-lg text-gray-700 mb-8">Descubre todas las funcionalidades y ventajas que ofrece NutriScan para mejorar tu alimentación.</p>
    <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-600">
      <li>Escaneo inteligente de códigos de barras</li>
      <li>Análisis nutricional detallado</li>
      <li>Puntuación personalizada según tus objetivos</li>
      <li>Historial local de productos</li>
      <li>Sin registro, sin publicidad</li>
    </ul>
  </div>
);

export default Caracteristicas; 