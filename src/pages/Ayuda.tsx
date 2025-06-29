import React from 'react';

const Ayuda = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-3xl font-bold mb-4">Centro de ayuda</h1>
    <p className="text-lg text-gray-700 mb-8">¿Tienes dudas sobre el funcionamiento de NutriScan? Aquí encontrarás respuestas y recursos útiles.</p>
    <ul className="list-disc list-inside text-left max-w-xl mx-auto text-gray-600">
      <li>Guías de uso paso a paso</li>
      <li>Preguntas frecuentes</li>
      <li>Soporte técnico</li>
      <li>Contacto directo con el equipo</li>
    </ul>
  </div>
);

export default Ayuda; 