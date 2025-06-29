import React from 'react';

const Contacto = () => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-3xl font-bold mb-4">Contacto</h1>
    <p className="text-lg text-gray-700 mb-8">¿Quieres ponerte en contacto con nosotros? Rellena el siguiente formulario o escríbenos a soporte@nutriscan.com</p>
    <form className="max-w-md mx-auto space-y-4">
      <input type="text" placeholder="Nombre" className="w-full border rounded p-2" />
      <input type="email" placeholder="Correo electrónico" className="w-full border rounded p-2" />
      <textarea placeholder="Tu mensaje" className="w-full border rounded p-2" rows={4}></textarea>
      <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">Enviar</button>
    </form>
  </div>
);

export default Contacto; 