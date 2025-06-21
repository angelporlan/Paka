import { Link } from 'react-router-dom';
import { ScanLine, Home, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AppHeader = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
            <ScanLine className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            NutriScan
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Inicio
          </Link>
          <Link to="/app" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Escanear Producto
          </Link>
          <Link to="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Beneficios
          </Link>
          <Link to="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/app">
              <ScanLine className="mr-2 h-4 w-4" />
              Empezar
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
            <span className="sr-only">Perfil</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
