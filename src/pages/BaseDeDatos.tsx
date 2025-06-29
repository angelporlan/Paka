import React from 'react';
import { Database, TrendingUp, Globe, CheckCircle, Users, RefreshCw } from 'lucide-react';

const BaseDeDatos = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
          <Database className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Base de datos</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Nuestra base de datos contiene miles de productos alimenticios de todo el mundo, actualizada constantemente para ofrecerte la mejor información.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><TrendingUp className="w-5 h-5" /> Estadísticas</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><Database className="w-4 h-4 text-green-500" /> Más de 50,000 productos registrados</li>
          <li className="flex items-center gap-2"><RefreshCw className="w-4 h-4 text-blue-500" /> Actualizaciones diarias</li>
          <li className="flex items-center gap-2"><Users className="w-4 h-4 text-purple-500" /> Colaboración con Open Food Facts</li>
          <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Información precisa y verificada</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Fuentes de datos</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div className="border-l-4 border-green-500 pl-4">
            <strong className="flex items-center gap-2"><Globe className="w-4 h-4" /> Open Food Facts</strong>
            <p className="text-gray-600">Colaboramos con Open Food Facts, una base de datos abierta y colaborativa con información nutricional de productos de todo el mundo.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <strong className="flex items-center gap-2"><Users className="w-4 h-4" /> Contribuciones comunitarias</strong>
            <p className="text-gray-600">Nuestra base de datos se enriquece con las contribuciones de usuarios y colaboradores que verifican y añaden información de productos.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <strong className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Verificación de calidad</strong>
            <p className="text-gray-600">Toda la información pasa por un proceso de verificación para asegurar la precisión y fiabilidad de los datos nutricionales.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <strong className="flex items-center gap-2"><RefreshCw className="w-4 h-4" /> Actualizaciones continuas</strong>
            <p className="text-gray-600">Mantenemos la base de datos actualizada con nuevos productos y cambios en la información nutricional existente.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BaseDeDatos; 