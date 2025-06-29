import React from 'react';
import { FileText, Shield, Users, AlertTriangle } from 'lucide-react';

const Terminos = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-full mb-4 shadow-lg">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Términos de uso</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Lee atentamente los términos y condiciones para el uso de NutriScan. Al usar nuestra aplicación, aceptas estos términos.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-3 flex items-center gap-2"><Shield className="w-5 h-5" /> Términos principales</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /> Uso responsable de la información</li>
          <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-orange-500" /> No se permite el uso comercial sin autorización</li>
          <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500" /> Respetar la propiedad intelectual</li>
          <li className="flex items-center gap-2"><FileText className="w-4 h-4 text-purple-500" /> Condiciones sujetas a cambios</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-blue-700 mb-3">Condiciones de uso</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div>
            <strong>Uso de la aplicación</strong>
            <p>NutriScan está diseñada para uso personal y educativo. Debes usar la información de manera responsable y no para fines comerciales sin autorización.</p>
          </div>
          <div>
            <strong>Propiedad intelectual</strong>
            <p>Todos los derechos de propiedad intelectual de NutriScan pertenecen a sus desarrolladores. No está permitida la reproducción o distribución sin permiso.</p>
          </div>
          <div>
            <strong>Limitación de responsabilidad</strong>
            <p>La información proporcionada es solo informativa. No nos hacemos responsables del uso que hagas de los datos nutricionales mostrados.</p>
          </div>
          <div>
            <strong>Modificaciones</strong>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados a través de la aplicación.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Terminos; 