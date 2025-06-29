import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Clock,
  Star,
  Users,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  Play,
  Download,
  Globe,
  Database,
  Camera,
  Search,
  Sparkles,
  Eye,
  Lock,
  Wifi,
  Battery,
  Smartphone as PhoneIcon,
  Leaf,
  Activity,
  Brain,
  Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setIsVisible(true);
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Escaneo Inteligente",
      description: "Escanea códigos de barras con tu cámara o introduce el código manualmente",
      step: "01",
      highlight: "IA Avanzada"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análisis Nutricional",
      description: "Obtén información nutricional detallada de miles de productos",
      step: "02",
      highlight: "Base de datos global"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalización",
      description: "Adaptamos la puntuación según tus objetivos personales",
      step: "03",
      highlight: "Algoritmo personalizado"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mejora tu salud",
      description: "Toma decisiones informadas sobre tu alimentación",
      color: "from-red-100 to-pink-100"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Resultados instantáneos",
      description: "Análisis en tiempo real de cualquier producto",
      color: "from-yellow-100 to-orange-100"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sin registro requerido",
      description: "Comienza a usar la app inmediatamente",
      color: "from-blue-100 to-indigo-100"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Historial local",
      description: "Guarda tus productos escaneados automáticamente",
      color: "from-green-100 to-emerald-100"
    }
  ];

  const advancedFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "IA Nutricional",
      description: "Algoritmo inteligente que aprende de tus preferencias",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Seguimiento de Objetivos",
      description: "Monitorea tu progreso hacia tus metas de salud",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Recomendaciones",
      description: "Sugerencias personalizadas para mejorar tu dieta",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Análisis Rápido",
      description: "Resultados en menos de 2 segundos",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50K+", label: "Productos escaneados", icon: <Database className="w-6 h-6" />, color: "text-blue-600" },
    { number: "10K+", label: "Usuarios activos", icon: <Users className="w-6 h-6" />, color: "text-green-600" },
    { number: "4.8", label: "Valoración media", icon: <Star className="w-6 h-6" />, color: "text-yellow-600" },
    { number: "99%", label: "Precisión del análisis", icon: <Award className="w-6 h-6" />, color: "text-purple-600" }
  ];

  const testimonials = [
    {
      name: "María García",
      role: "Nutricionista",
      content: "NutriScan ha revolucionado la forma en que mis pacientes entienden la nutrición. Es una herramienta indispensable.",
      rating: 5,
      avatar: "MG",
      verified: true
    },
    {
      name: "Carlos Millán",
      role: "Deportista amateur",
      content: "Perfecto para controlar mi alimentación mientras entreno. La personalización por objetivos es genial.",
      rating: 5,
      avatar: "CM",
      verified: true
    },
    {
      name: "Ana López",
      role: "Mamá preocupada por la salud",
      content: "Ahora puedo tomar mejores decisiones para mi familia. La app es súper fácil de usar.",
      rating: 5,
      avatar: "AL",
      verified: true
    }
  ];

  const faqs = [
    {
      question: "¿Es realmente gratis?",
      answer: "Sí, NutriScan es 100% gratuito. No hay costos ocultos ni suscripciones premium."
    },
    {
      question: "¿Necesito crear una cuenta?",
      answer: "No, puedes usar la aplicación inmediatamente sin registro. Solo se guarda tu historial localmente en tu dispositivo."
    },
    {
      question: "¿Qué productos puedo escanear?",
      answer: "Puedes escanear cualquier producto con código de barras. Nuestra base de datos incluye miles de productos de todo el mundo."
    },
    {
      question: "¿Cómo funciona la puntuación personalizada?",
      answer: "La puntuación se adapta según tus objetivos (deportista, perder peso, salud general) evaluando diferentes aspectos nutricionales."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Absolutamente. No recopilamos información personal y todo se procesa localmente en tu dispositivo."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  100% Gratuito
                </Badge>
                <Badge variant="outline" className="border-blue-200 text-blue-700">
                  <Shield className="w-4 h-4 mr-2" />
                  Sin registro
                </Badge>
                <Badge variant="outline" className="border-purple-200 text-purple-700">
                  <Sparkles className="w-4 h-4 mr-2" />
                  IA Avanzada
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Escanea, evalúa y 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> mejora</span> tu alimentación
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Descubre la información nutricional de cualquier producto y recibe una puntuación personalizada según tus objetivos de salud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Link to="/app">
                    Comenzar ahora
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-2 hover:bg-gray-50 transition-all duration-300 group">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Ver demo
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600 font-medium">4.8/5</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">10K+</span> usuarios confían en nosotros
                </div>
              </div>
            </div>
            
            {/* Enhanced Phone Mockup */}
            <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-black text-white px-4 py-1 flex items-center justify-between text-xs">
                    <span>{currentTime}</span>
                    <div className="flex items-center space-x-1">
                      <Wifi className="w-3 h-3" />
                      <div className="flex space-x-0.5">
                        <div className="w-1 h-3 bg-white rounded-sm"></div>
                        <div className="w-1 h-3 bg-white rounded-sm"></div>
                        <div className="w-1 h-3 bg-white rounded-sm"></div>
                        <div className="w-1 h-3 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 h-16 flex items-center justify-between px-4">
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="w-6 h-6 text-white" />
                      <h3 className="text-white font-bold text-lg">NutriScan</h3>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full opacity-75"></div>
                      <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                      <div className="w-2 h-2 bg-white rounded-full opacity-25"></div>
                    </div>
                  </div>
                  
                  {/* Camera view */}
                  <div className="p-4 space-y-4">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-32 flex items-center justify-center relative overflow-hidden">
                      {/* Barcode background */}
                      <div className="absolute inset-0 bg-white opacity-90">
                        <div className="flex items-center justify-center h-full">
                          <div className="flex space-x-1">
                            {/* Barcode lines */}
                            <div className="w-1 h-20 bg-black"></div>
                            <div className="w-0.5 h-16 bg-black"></div>
                            <div className="w-2 h-24 bg-black"></div>
                            <div className="w-0.5 h-12 bg-black"></div>
                            <div className="w-1 h-20 bg-black"></div>
                            <div className="w-1.5 h-28 bg-black"></div>
                            <div className="w-0.5 h-14 bg-black"></div>
                            <div className="w-1 h-18 bg-black"></div>
                            <div className="w-2 h-22 bg-black"></div>
                            <div className="w-0.5 h-16 bg-black"></div>
                            <div className="w-1 h-20 bg-black"></div>
                            <div className="w-1.5 h-26 bg-black"></div>
                            <div className="w-0.5 h-12 bg-black"></div>
                            <div className="w-1 h-18 bg-black"></div>
                            <div className="w-2 h-24 bg-black"></div>
                            <div className="w-0.5 h-14 bg-black"></div>
                            <div className="w-1 h-20 bg-black"></div>
                            <div className="w-1.5 h-28 bg-black"></div>
                            <div className="w-0.5 h-16 bg-black"></div>
                            <div className="w-1 h-22 bg-black"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                      <div className="relative z-10 text-center">
                        <Camera className="w-8 h-8 text-white mx-auto mb-2 drop-shadow-lg" />
                        <div className="bg-black bg-opacity-70 rounded-lg px-3 py-1 inline-block">
                          <p className="text-xs text-white font-medium">Apunta al código de barras</p>
                        </div>
                      </div>
                      {/* Scanning animation */}
                      <div className="absolute inset-0 border-2 border-green-500 border-dashed rounded-lg animate-pulse"></div>
                      {/* Scanning line */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-green-500 animate-scan"></div>
                    </div>
                    
                    {/* Results */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-3 border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-green-700">Puntuación NutriScore</span>
                          <Badge variant="secondary" className="bg-green-200 text-green-800 text-xs">
                            Excelente
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-green-700">85/100</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                            ))}
                          </div>
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-100 rounded p-2">
                          <div className="text-xs text-gray-600">Calorías</div>
                          <div className="text-sm font-semibold">245 kcal</div>
                        </div>
                        <div className="bg-gray-100 rounded p-2">
                          <div className="text-xs text-gray-600">Proteínas</div>
                          <div className="text-sm font-semibold">12g</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="absolute top-1/2 -right-8 bg-purple-500 text-white p-2 rounded-full shadow-lg animate-pulse">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white p-2 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '2s' }}>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br from-gray-100 to-gray-200 ${stat.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tres simples pasos para transformar tu alimentación y mejorar tu salud
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                  {feature.step}
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 text-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="text-center mb-4">
                    <Badge variant="outline" className="mb-3 border-purple-200 text-purple-700">
                      {feature.highlight}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Características Avanzadas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnología de vanguardia para una experiencia nutricional superior
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className={`bg-gradient-to-br ${feature.gradient} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué usar NutriScan?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre todos los beneficios que hacen de NutriScan tu compañero perfecto para una alimentación saludable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-br ${benefit.color} text-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Descubre cómo NutriScan está transformando la forma en que las personas entienden la nutrición
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <Badge variant="secondary" className="bg-green-200 text-green-800 text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verificado
                    </Badge>
                  )}
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center font-bold text-white mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-80">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Adaptado a tus objetivos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recibe análisis personalizados según tu estilo de vida y metas de salud
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Deportista", 
                desc: "Prioriza proteínas y energía para optimizar tu rendimiento", 
                color: "from-orange-400 to-red-500",
                icon: <Target className="w-8 h-8" />
              },
              { 
                title: "Perder peso", 
                desc: "Controla calorías y azúcares para alcanzar tu meta", 
                color: "from-blue-400 to-purple-500",
                icon: <TrendingUp className="w-8 h-8" />
              },
              { 
                title: "Salud general", 
                desc: "Balance nutricional óptimo para el bienestar diario", 
                color: "from-green-400 to-teal-500",
                icon: <Heart className="w-8 h-8" />
              }
            ].map((goal, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${goal.color} rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {goal.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{goal.title}</h3>
                <p className="opacity-90 leading-relaxed">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Resolvemos tus dudas sobre NutriScan
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className={`overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {activeFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comienza tu viaje hacia una mejor alimentación
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya están transformando su salud con NutriScan. Es completamente gratis y no requiere registro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-12 py-4 rounded-full bg-white text-green-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Link to="/app">
                  Comenzar gratis ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-4 rounded-full border-2 border-white text-gray-800 hover:bg-white hover:text-green-600 transition-all duration-300 group">
                <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                App en desarrollo
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Disponible en todos los dispositivos • Sin costos ocultos
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">NutriScan</h3>
              <p className="text-gray-400 leading-relaxed">
                Tu compañero inteligente para una alimentación saludable. Transformamos la forma en que entiendes la nutrición.
              </p>
              <div className="flex space-x-4 mt-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Download className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Producto</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/app" className="hover:text-white transition-colors">Aplicación</Link></li>
                <li><Link to="/caracteristicas" className="hover:text-white transition-colors">Características</Link></li>
                <li><Link to="/base-de-datos" className="hover:text-white transition-colors">Base de datos</Link></li>
                <li><Link to="/actualizaciones" className="hover:text-white transition-colors">Actualizaciones</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Soporte</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/ayuda" className="hover:text-white transition-colors">Centro de ayuda</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/comunidad" className="hover:text-white transition-colors">Comunidad</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/privacidad" className="hover:text-white transition-colors">Política de privacidad</Link></li>
                <li><Link to="/terminos" className="hover:text-white transition-colors">Términos de uso</Link></li>
                <li><Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
                <li><Link to="/licencias" className="hover:text-white transition-colors">Licencias</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NutriScan. Todos los derechos reservados. Hecho con ❤️ para mejorar tu salud.</p>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(100px); }
          100% { transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-scan {
          animation: scan 2s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Landing;
