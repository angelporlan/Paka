import React from 'react';
import { Users, MessageSquare, Calendar, Heart, Star, Share2 } from 'lucide-react';

const Comunidad = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
          <Users className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Comunidad</h1>
        <p className="text-gray-600 mb-2 max-w-xl">Únete a la comunidad de NutriScan para compartir experiencias, sugerencias y ayudar a otros usuarios.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-3 flex items-center gap-2"><MessageSquare className="w-5 h-5" /> Actividades de la comunidad</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
          <li className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-green-500" /> Foros de discusión</li>
          <li className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /> Grupos de usuarios</li>
          <li className="flex items-center gap-2"><Calendar className="w-4 h-4 text-purple-500" /> Eventos y retos saludables</li>
          <li className="flex items-center gap-2"><Heart className="w-4 h-4 text-red-500" /> Colaboraciones y voluntariado</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-green-700 mb-3">Cómo participar</h2>
        <div className="space-y-4 text-left text-gray-700">
          <div className="border-l-4 border-green-500 pl-4">
            <strong className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Comparte experiencias</strong>
            <p className="text-gray-600">Cuenta cómo NutriScan te ha ayudado a mejorar tus hábitos alimenticios y comparte tus descubrimientos con otros usuarios.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <strong className="flex items-center gap-2"><Star className="w-4 h-4" /> Sugiere mejoras</strong>
            <p className="text-gray-600">Ayúdanos a mejorar NutriScan compartiendo tus ideas y sugerencias para nuevas funcionalidades.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <strong className="flex items-center gap-2"><Share2 className="w-4 h-4" /> Ayuda a otros</strong>
            <p className="text-gray-600">Responde preguntas de otros usuarios y comparte consejos sobre nutrición y uso de la aplicación.</p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <strong className="flex items-center gap-2"><Heart className="w-4 h-4" /> Participa en eventos</strong>
            <p className="text-gray-600">Únete a nuestros retos saludables y eventos comunitarios para mantenerte motivado y conectado.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Comunidad; 