# NutriScan - Escáner Nutricional Inteligente

<div align="center">
  <img src="public/favicon.ico" alt="NutriScan Logo" width="100" height="100">
  <h3>Tu compañero para una alimentación más saludable</h3>
</div>

## 📱 ¿Qué es NutriScan?

NutriScan es una aplicación web moderna que te permite escanear códigos de barras de productos alimenticios para obtener información nutricional detallada de forma instantánea. Diseñada para ayudarte a tomar decisiones alimentarias más informadas y saludables.

## ✨ Características Principales

### 🔍 Escaneo Inteligente
- **Escaneo de códigos de barras**: Detecta automáticamente códigos EAN-13 con alta precisión
- **Búsqueda manual**: Introduce códigos de barras manualmente si el escaneo no funciona
- **OCR integrado**: Lee números impresos debajo del código de barras usando reconocimiento óptico
- **Modos de escaneo**: Alterna entre precisión y velocidad según tus necesidades

### 📊 Análisis Nutricional
- **Información detallada**: Calorías, proteínas, carbohidratos, grasas, vitaminas y minerales
- **Puntuación personalizada**: Evaluación nutricional basada en tus objetivos de salud
- **Historial local**: Guarda todos los productos escaneados para consultas futuras
- **Base de datos completa**: Acceso a millones de productos de todo el mundo

### 🛡️ Privacidad y Seguridad
- **Sin registro**: Usa la aplicación inmediatamente sin crear cuenta
- **Sin publicidad**: Experiencia limpia sin anuncios molestos
- **Datos locales**: Toda la información se guarda en tu dispositivo
- **Sin rastreo**: No recopilamos ni compartimos datos personales

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Camera API**: WebRTC para acceso a la cámara
- **OCR**: Tesseract.js para reconocimiento de texto
- **Data Source**: Open Food Facts API

## 🛠️ Instalación y Uso

### Requisitos Previos
- Node.js 18+ y npm
- Navegador moderno con soporte para WebRTC

### Instalación Local

```bash
# 1. Clona el repositorio
git clone <URL_DEL_REPOSITORIO>

# 2. Navega al directorio del proyecto
cd nutri-score-scanner-plus-main

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

### Uso de la Aplicación

1. **Permisos de cámara**: Al acceder por primera vez, permite el acceso a la cámara
2. **Escaneo**: Apunta la cámara al código de barras del producto
3. **Resultados**: Visualiza la información nutricional detallada
4. **Historial**: Consulta productos escaneados anteriormente
5. **Búsqueda manual**: Introduce códigos de barras si el escaneo falla

## 📱 Funcionalidades Avanzadas

### Modos de Escaneo
- **Modo Precisión**: Escaneo más lento pero más preciso
- **Modo Velocidad**: Escaneo rápido para uso diario

### OCR (Reconocimiento Óptico)
- Lee números impresos debajo del código de barras
- Útil cuando el código de barras está dañado o no se detecta
- Resultado mostrado en pantalla para verificación

### Validación de Códigos
- Verificación automática de códigos EAN-13
- Validación del dígito de control
- Filtrado de códigos inválidos o incorrectos

## 🌐 Páginas Informativas

La aplicación incluye páginas informativas completas:
- **Características**: Funcionalidades y ventajas de la app
- **Base de Datos**: Información sobre las fuentes de datos
- **Actualizaciones**: Últimas mejoras y próximas funcionalidades
- **Ayuda**: Guías de uso y soporte
- **FAQ**: Preguntas frecuentes
- **Comunidad**: Cómo participar y contribuir
- **Contacto**: Formulario de contacto
- **Privacidad**: Política de privacidad
- **Términos**: Términos de uso
- **Cookies**: Política de cookies
- **Licencias**: Información sobre licencias

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Puedes contribuir de varias maneras:

1. **Reportar bugs**: Usa el sistema de issues de GitHub
2. **Sugerir mejoras**: Propon nuevas funcionalidades
3. **Contribuir código**: Envía pull requests
4. **Mejorar la documentación**: Ayuda a mejorar este README

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **Open Food Facts**: Por proporcionar la base de datos nutricional
- **Comunidad de desarrolladores**: Por las librerías y herramientas utilizadas
- **Usuarios**: Por el feedback y sugerencias que mejoran la aplicación

## 📞 Contacto

¿Tienes preguntas o sugerencias? No dudes en contactarnos:
- **Email**: [tu-email@ejemplo.com]
- **GitHub**: [tu-usuario-github]
- **Formulario de contacto**: Disponible en la aplicación

---

<div align="center">
  <p>Hecho con ❤️ para una alimentación más saludable</p>
  <p>⭐ ¡Dale una estrella si te gusta el proyecto!</p>
</div>
