import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";
import EstimateDownload from "./pages/EstimateDownload";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ServiceAreas from "./pages/ServiceAreas";
import QuantityTakeoff from "./pages/services/QuantityTakeoff";
import ConcreteTakeoff from "./pages/services/ConcreteTakeoff";
import MasonryTakeoff from "./pages/services/MasonryTakeoff";
import CarpentryMillwork from "./pages/services/CarpentryMillwork";
import DrywallInsulation from "./pages/services/DrywallInsulation";
import RoofingWaterproofing from "./pages/services/RoofingWaterproofing";
import FlooringTakeoffs from "./pages/services/FlooringTakeoffs";
import DoorsWindowsGlazing from "./pages/services/DoorsWindowsGlazing";
import Layout from '@/components/Layout';
import MEPSystems from "./pages/services/MEPSystems";
import StructuralSteel from "./pages/services/StructuralSteel";
import SiteworkEarthworks from "./pages/services/SiteworkEarthworks";
import CostEstimation from "./pages/services/CostEstimation";
import PreliminaryEstimates from "./pages/services/PreliminaryEstimates";
import DetailedEstimates from "./pages/services/DetailedEstimates";
import Industries from "./pages/services/Industries";
import Government from "./pages/services/government";
import ResidentialConstruction from "./pages/services/ResidentialConstruction";
import CommercialConstruction from "./pages/services/CommercialConstruction";
import RetailConstruction from "./pages/services/RetailConstruction";
import IndustrialConstruction from "./pages/services/IndustrialConstruction";
import TurnkeyDesignBuild from "./pages/services/TurnkeyDesignBuild";
import SpecializedServices from "./pages/services/SpecializedServices";
import CSITradesEstimating from "./pages/services/CSITradesEstimating";
import ValueEngineering from "./pages/services/ValueEngineering";
import RenovationEstimating from "./pages/services/RenovationEstimating";
import BidEstimates from "./pages/services/BidEstimates";
import ConceptualEstimates from "./pages/services/ConceptualEstimates";
import DedicatedEstimator from "./pages/services/DedicatedEstimator";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/industries" element={<Industries />} />
              <Route path="/services/government" element={<Government />} />
              <Route path="/services/residential-construction" element={<ResidentialConstruction />} />
              <Route path="/services/commercial-construction" element={<CommercialConstruction />} />
              <Route path="/services/retail-construction" element={<RetailConstruction />} />
              <Route path="/services/industrial-construction" element={<IndustrialConstruction />} />
              <Route path="/services/turnkey-design-build" element={<TurnkeyDesignBuild />} />
              <Route path="/services/specialized-services" element={<SpecializedServices />} />
              <Route path="/services/csi-trades-estimating" element={<CSITradesEstimating />} />
              <Route path="/services/value-engineering" element={<ValueEngineering />} />
              <Route path="/services/renovation-estimating" element={<RenovationEstimating />} />
              <Route path="/services/quantity-takeoff" element={<QuantityTakeoff />} />
              <Route path="/services/concrete-takeoff" element={<ConcreteTakeoff />} />
              <Route path="/services/masonry-takeoff" element={<MasonryTakeoff />} />
              <Route path="/services/structural-steel" element={<StructuralSteel />} />
              <Route path="/services/carpentry-millwork" element={<CarpentryMillwork />} />
              <Route path="/services/drywall-insulation" element={<DrywallInsulation />} />
              <Route path="/services/roofing-waterproofing" element={<RoofingWaterproofing />} />
              <Route path="/services/flooring-takeoffs" element={<FlooringTakeoffs />} />
              <Route path="/services/doors-windows-glazing" element={<DoorsWindowsGlazing />} />
              <Route path="/services/mep-systems" element={<MEPSystems />} />
              <Route path="/services/sitework-earthworks" element={<SiteworkEarthworks />} />
              <Route path="/services/cost-estimation" element={<CostEstimation />} />
              <Route path="/services/preliminary-estimates" element={<PreliminaryEstimates />} />
              <Route path="/services/detailed-estimates" element={<DetailedEstimates />} />
              <Route path="/services/bid-estimates" element={<BidEstimates />} />
              <Route path="/services/conceptual-estimates" element={<ConceptualEstimates />} />
              <Route path="/services/dedicated-estimator" element={<DedicatedEstimator />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:projectId" element={<PortfolioDetail />} />
              <Route path="/estimate-download" element={<EstimateDownload />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:postId" element={<BlogPost />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/service-areas/:stateId" element={<ServiceDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;


