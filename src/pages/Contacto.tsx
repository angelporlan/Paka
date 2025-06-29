import React, { useState } from 'react';
import { Mail, User, MessageCircle, CheckCircle } from 'lucide-react';

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 mx-auto">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full mb-4 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Contacto</h1>
          <p className="text-gray-600 mb-2">¿Tienes dudas, sugerencias o necesitas ayuda? Rellena el formulario o escríbenos a <a href="mailto:soporte@nutriscan.com" className="text-blue-600 underline">soporte@nutriscan.com</a></p>
        </div>
        {enviado ? (
          <div className="flex flex-col items-center py-12">
            <CheckCircle className="w-12 h-12 text-green-500 mb-4 animate-bounce" />
            <h2 className="text-xl font-semibold text-green-700 mb-2">¡Mensaje enviado!</h2>
            <p className="text-gray-600">Gracias por contactarnos. Te responderemos lo antes posible.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400 bg-gray-50">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="w-full bg-transparent outline-none text-gray-800"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400 bg-gray-50">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="w-full bg-transparent outline-none text-gray-800"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-start border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400 bg-gray-50">
              <MessageCircle className="w-5 h-5 text-gray-400 mr-2 mt-1" />
              <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                className="w-full bg-transparent outline-none text-gray-800 resize-none min-h-[80px]"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" /> Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contacto; 