import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Caracteristicas from "./pages/Caracteristicas";
import BaseDeDatos from "./pages/BaseDeDatos";
import Actualizaciones from "./pages/Actualizaciones";
import Ayuda from "./pages/Ayuda";
import Contacto from "./pages/Contacto";
import FAQ from "./pages/FAQ";
import Comunidad from "./pages/Comunidad";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import Cookies from "./pages/Cookies";
import Licencias from "./pages/Licencias";

const queryClient = new QueryClient();

import AppHeader from "./components/AppHeader";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppHeader />
        <main className="min-h-[calc(100vh-72px)]">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/app" element={<Index />} />
            <Route path="/caracteristicas" element={<Caracteristicas />} />
            <Route path="/base-de-datos" element={<BaseDeDatos />} />
            <Route path="/actualizaciones" element={<Actualizaciones />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/comunidad" element={<Comunidad />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/licencias" element={<Licencias />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
