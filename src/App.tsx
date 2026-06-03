import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Automatisations from "./pages/Automatisations.tsx";
import APropos from "./pages/APropos.tsx";
import Developpement from "./pages/Developpement.tsx";
import Devis from "./pages/Devis.tsx";
import FAQ from "./pages/FAQ.tsx";
import Formations from "./pages/Formations.tsx";
import IA from "./pages/IA.tsx";
import Infrastructure from "./pages/Infrastructure.tsx";
import Index from "./pages/Index.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import NotFound from "./pages/NotFound.tsx";
import Offres from "./pages/Offres.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Realisations from "./pages/Realisations.tsx";
import Services from "./pages/Services.tsx";
import ServicesInfo from "./pages/ServicesInfo.tsx";
import Outils from "./pages/Outils.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/ia" element={<IA />} />
          <Route path="/outils" element={<Outils />} />
          <Route path="/developpement" element={<Developpement />} />
          <Route path="/automatisations" element={<Automatisations />} />
          <Route path="/services-info" element={<ServicesInfo />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisations/:slug" element={<ProjectDetail />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
