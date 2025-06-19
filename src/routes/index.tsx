import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import QuantityTakeoff from '@/pages/services/QuantityTakeoff';
import CostEstimation from '@/pages/services/CostEstimation';
import DrywallInsulation from '@/pages/services/DrywallInsulation';
import RoofingWaterproofing from '@/pages/services/RoofingWaterproofing';
import FlooringTakeoffs from '@/pages/services/FlooringTakeoffs';
import DoorsWindowsGlazing from '@/pages/services/DoorsWindowsGlazing';
import MEPSystems from '@/pages/services/MEPSystems';
import StructuralSteel from '@/pages/services/StructuralSteel';
import SiteworkEarthworks from '@/pages/services/SiteworkEarthworks';
import PreliminaryEstimates from '@/pages/services/PreliminaryEstimates';
import CommercialConstruction from '@/pages/services/CommercialConstruction';
import ContractorsList from '@/pages/ContractorsList';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/quantity-takeoff" element={<QuantityTakeoff />} />
        <Route path="/services/cost-estimation" element={<CostEstimation />} />
        <Route path="/services/preliminary-estimates" element={<PreliminaryEstimates />} />
        <Route path="/services/drywall-insulation" element={<DrywallInsulation />} />
        <Route path="/services/roofing-waterproofing" element={<RoofingWaterproofing />} />
        <Route path="/services/flooring-takeoffs" element={<FlooringTakeoffs />} />
        <Route path="/services/doors-windows-glazing" element={<DoorsWindowsGlazing />} />
        <Route path="/services/mep-systems" element={<MEPSystems />} />
        <Route path="/services/structural-steel" element={<StructuralSteel />} />
        <Route path="/services/sitework-earthworks" element={<SiteworkEarthworks />} />
        <Route path="/services/commercial-construction" element={<CommercialConstruction />} />
      </Route>
      <Route path="/contractorslist" element={<ContractorsList />} />
    </Routes>
  );
};

export default AppRoutes; 