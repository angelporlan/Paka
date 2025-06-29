import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 px-2">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 mx-auto text-center">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-full mb-4 shadow-lg">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-2 text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mb-2">¡Oops! Página no encontrada</p>
          <p className="text-gray-500 mb-6">La página que buscas no existe o ha sido movida.</p>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Home className="w-5 h-5" />
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
