import React from 'react';
import { HelpCircle, DollarSign, User, Barcode, Shield } from 'lucide-react';

const FAQ = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Preguntas frecuentes (FAQ)</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Encuentra respuestas a las dudas más comunes sobre NutriScan.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><DollarSign className="w-5 h-5" /> Sobre la aplicación</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div className="border-l-4 border-green-500 pl-4">
            <strong>¿Es NutriScan gratuita?</strong>
            <p className="text-gray-600">Sí, NutriScan es 100% gratuita. No hay costos ocultos ni suscripciones premium.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <strong>¿Necesito registrarme?</strong>
            <p className="text-gray-600">No, puedes usar la app sin registro. No requerimos información personal.</p>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><Barcode className="w-5 h-5" /> Funcionalidades</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div className="border-l-4 border-purple-500 pl-4">
            <strong>¿Qué productos puedo escanear?</strong>
            <p className="text-gray-600">Cualquier producto con código de barras EAN-13. La base de datos incluye millones de productos.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <strong>¿Puedo buscar productos manualmente?</strong>
            <p className="text-gray-600">Sí, puedes introducir el código de barras manualmente si el escaneo no funciona.</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><Shield className="w-5 h-5" /> Privacidad y seguridad</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div className="border-l-4 border-red-500 pl-4">
            <strong>¿Mis datos están seguros?</strong>
            <p className="text-gray-600">Sí, no almacenamos información personal. Todo se guarda localmente en tu dispositivo.</p>
          </div>
          <div className="border-l-4 border-emerald-500 pl-4">
            <strong>¿Comparten mi información?</strong>
            <p className="text-gray-600">No, nunca compartimos ni vendemos información a terceros. Tu privacidad es nuestra prioridad.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FAQ; 