import React from 'react';
import { FileCheck, Code, ExternalLink, Heart } from 'lucide-react';

const Licencias = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
          <FileCheck className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Licencias</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Consulta las licencias de uso de la aplicación y de los recursos utilizados en NutriScan.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><Code className="w-5 h-5" /> Licencias principales</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><FileCheck className="w-4 h-4 text-green-500" /> Licencia MIT para el código fuente</li>
          <li className="flex items-center gap-2"><ExternalLink className="w-4 h-4 text-blue-500" /> Recursos de terceros con licencia compatible</li>
          <li className="flex items-center gap-2"><Heart className="w-4 h-4 text-red-500" /> Reconocimientos y atribuciones</li>
          <li className="flex items-center gap-2"><FileCheck className="w-4 h-4 text-purple-500" /> Transparencia en el uso de recursos</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Recursos utilizados</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div>
            <strong>Open Food Facts</strong>
            <p>Base de datos nutricional bajo licencia Open Database License (ODbL). Agradecemos a la comunidad de Open Food Facts por su valioso trabajo.</p>
          </div>
          <div>
            <strong>Iconos y componentes</strong>
            <p>Utilizamos Lucide React para iconos (MIT License) y componentes de shadcn/ui (MIT License) para la interfaz de usuario.</p>
          </div>
          <div>
            <strong>Código fuente</strong>
            <p>NutriScan está desarrollado con React, TypeScript y Vite, todos bajo licencias de código abierto compatibles con MIT.</p>
          </div>
          <div>
            <strong>Contribuciones</strong>
            <p>Si deseas contribuir al proyecto, puedes hacerlo a través de GitHub. Todas las contribuciones son bienvenidas y respetadas.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Licencias; 