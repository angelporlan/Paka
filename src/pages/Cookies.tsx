import React from 'react';
import { Cookie, Settings, EyeOff, Trash2 } from 'lucide-react';

const Cookies = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-4 rounded-full mb-4 shadow-lg">
          <Cookie className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Política de cookies</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Descubre cómo y por qué utilizamos cookies en NutriScan. Tu privacidad es nuestra prioridad.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-orange-700 mb-3 flex items-center gap-2"><Settings className="w-5 h-5" /> Tipos de cookies</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><Cookie className="w-4 h-4 text-orange-500" /> Solo usamos cookies técnicas</li>
          <li className="flex items-center gap-2"><EyeOff className="w-4 h-4 text-blue-500" /> No rastreamos tu actividad</li>
          <li className="flex items-center gap-2"><Settings className="w-4 h-4 text-green-500" /> Sin publicidad personalizada</li>
          <li className="flex items-center gap-2"><Trash2 className="w-4 h-4 text-red-500" /> Puedes borrar las cookies en cualquier momento</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-orange-700 mb-3">Gestión de cookies</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div>
            <strong>Cookies técnicas</strong>
            <p>Utilizamos cookies técnicas para el funcionamiento básico de la aplicación, como recordar tus preferencias de idioma y configuración.</p>
          </div>
          <div>
            <strong>Sin rastreo</strong>
            <p>No utilizamos cookies de rastreo ni analíticas que puedan identificar tu comportamiento o preferencias personales.</p>
          </div>
          <div>
            <strong>Control total</strong>
            <p>Puedes gestionar y eliminar las cookies desde la configuración de tu navegador en cualquier momento.</p>
          </div>
          <div>
            <strong>Transparencia</strong>
            <p>Te informamos de manera clara sobre qué cookies utilizamos y por qué, sin ocultar información importante.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cookies; 