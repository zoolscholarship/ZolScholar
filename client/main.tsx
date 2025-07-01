import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import ScholarshipsFullyFunded from "./pages/ScholarshipsFullyFunded";
import ScholarshipsAirfare from "./pages/ScholarshipsAirfare";
import ScholarshipsArab from "./pages/ScholarshipsArab";
import ScholarshipsForeign from "./pages/ScholarshipsForeign";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<Search />} />
          <Route
            path="/scholarships/fully-funded"
            element={<ScholarshipsFullyFunded />}
          />
          <Route
            path="/scholarships/airfare"
            element={<ScholarshipsAirfare />}
          />
          <Route path="/scholarships/arab" element={<ScholarshipsArab />} />
          <Route
            path="/scholarships/foreign"
            element={<ScholarshipsForeign />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
