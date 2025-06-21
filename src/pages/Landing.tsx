
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Scan, 
  Target, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  BarChart3,
  Heart,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Escaneo Inteligente",
      description: "Escanea códigos de barras con tu cámara o introduce el código manualmente"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análisis Nutricional",
      description: "Obtén información nutricional detallada de miles de productos"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalización",
      description: "Adaptamos la puntuación según tus objetivos personales"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mejora tu salud",
      description: "Toma decisiones informadas sobre tu alimentación"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Resultados instantáneos",
      description: "Análisis en tiempo real de cualquier producto"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sin registro requerido",
      description: "Comienza a usar la app inmediatamente"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Historial local",
      description: "Guarda tus productos escaneados automáticamente"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                100% Gratuito
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Escanea, evalúa y 
                <span className="text-green-600"> mejora</span> tu alimentación
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubre la información nutricional de cualquier producto y recibe una puntuación personalizada según tus objetivos de salud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4 rounded-full">
                  <Link to="/app">
                    Comenzar ahora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full">
                  Ver demo
                </Button>
              </div>
            </div>
            
            {/* Phone Mockup */}
            <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="bg-green-600 h-20 flex items-center justify-center">
                    <h3 className="text-white font-bold text-lg">NutriScan</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                      <Scan className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="bg-green-100 rounded p-2">
                        <div className="text-xs text-green-700">Puntuación: 85/100</div>
                      </div>
                      <div className="bg-gray-100 rounded h-4"></div>
                      <div className="bg-gray-100 rounded h-4 w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse-gentle">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse-gentle" style={{ animationDelay: '1s' }}>
                <BarChart3 className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Tres simples pasos para mejorar tu alimentación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center group hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-green-100 text-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué usar NutriScan?
            </h2>
            <p className="text-xl text-gray-600">
              Descubre todos los beneficios de nuestra aplicación
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Adaptado a tus objetivos
            </h2>
            <p className="text-xl opacity-90">
              Recibe análisis personalizados según tu estilo de vida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Deportista", desc: "Prioriza proteínas y energía", color: "from-orange-400 to-red-500" },
              { title: "Perder peso", desc: "Controla calorías y azúcares", color: "from-blue-400 to-purple-500" },
              { title: "Salud general", desc: "Balance nutricional óptimo", color: "from-green-400 to-teal-500" }
            ].map((goal, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${goal.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Smartphone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
                <p className="opacity-90">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comienza tu viaje hacia una mejor alimentación
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete a miles de usuarios que ya mejoran su salud con NutriScan
            </p>
            <Button asChild size="lg" className="text-lg px-12 py-4 rounded-full">
              <Link to="/app">
                Comenzar gratis ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NutriScan</h3>
              <p className="text-gray-400">
                Tu compañero inteligente para una alimentación saludable.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/app" className="hover:text-white transition-colors">Aplicación</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Precios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Ayuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NutriScan. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
