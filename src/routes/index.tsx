import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import QuantityTakeoff from '@/pages/services/QuantityTakeoff';
import CostEstimation from '@/pages/services/CostEstimation';
import ConstructionManagement from '@/pages/services/ConstructionManagement';
import SoftwareServices from '@/pages/services/SoftwareServices';
import Documentation from '@/pages/services/Documentation';
import ProjectSupport from '@/pages/services/ProjectSupport';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/quantity-takeoff" element={<QuantityTakeoff />} />
        <Route path="/services/cost-estimation" element={<CostEstimation />} />
        <Route path="/services/construction-management" element={<ConstructionManagement />} />
        <Route path="/services/software-services" element={<SoftwareServices />} />
        <Route path="/services/documentation" element={<Documentation />} />
        <Route path="/services/project-support" element={<ProjectSupport />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes; 