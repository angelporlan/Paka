import React from 'react';
import { ShieldCheck, Lock, EyeOff, UserCheck } from 'lucide-react';

const Privacidad = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
          <ShieldCheck className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Política de privacidad</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Tu privacidad es fundamental para nosotros. Consulta cómo protegemos tus datos y tu información personal en NutriScan.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><Lock className="w-5 h-5" /> Nuestros compromisos</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><EyeOff className="w-4 h-4 text-blue-500" /> No almacenamos datos personales</li>
          <li className="flex items-center gap-2"><UserCheck className="w-4 h-4 text-green-500" /> No compartimos información con terceros</li>
          <li className="flex items-center gap-2"><Lock className="w-4 h-4 text-purple-500" /> Solo se guarda el historial localmente en tu dispositivo</li>
          <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Transparencia y seguridad en todo momento</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Preguntas frecuentes sobre privacidad</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div>
            <strong>¿Qué datos recopila NutriScan?</strong>
            <p>NutriScan no recopila ni almacena datos personales. Toda la información de tus productos escaneados se guarda únicamente en tu dispositivo.</p>
          </div>
          <div>
            <strong>¿Se comparte mi información con terceros?</strong>
            <p>No. Nunca compartimos ni vendemos información a terceros. Tu privacidad es nuestra prioridad.</p>
          </div>
          <div>
            <strong>¿Puedo borrar mi historial?</strong>
            <p>Sí, puedes borrar tu historial de productos escaneados en cualquier momento desde la app.</p>
          </div>
          <div>
            <strong>¿La app utiliza cookies o rastreadores?</strong>
            <p>Solo usamos cookies técnicas para el funcionamiento básico. No rastreamos tu actividad ni mostramos publicidad personalizada.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Privacidad; 