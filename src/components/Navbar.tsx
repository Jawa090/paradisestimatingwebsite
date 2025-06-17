import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const quantityTakeoffLinks = [
    { name: 'Concrete Takeoff', path: '/services/concrete-takeoff' },
    { name: 'Masonry Takeoff', path: '/services/masonry-takeoff' },
    { name: 'Structural & Reinforcing Steel', path: '/services/structural-steel' },
    { name: 'Carpentry & Millwork', path: '/services/carpentry-millwork' },
    { name: 'Drywall & Insulation', path: '/services/drywall-insulation' },
    { name: 'Roofing & Waterproofing', path: '/services/roofing-waterproofing' },
    { name: 'Flooring', path: '/services/flooring-takeoff' },
    { name: 'Doors, Windows & Glazing', path: '/services/windows-glazing' },
    { name: 'MEP Systems', path: '/services/mep-systems' },
    { name: 'Sitework & Earthworks', path: '/services/sitework-earthworks' }
  ];

  const costEstimationLinks = [
    { name: 'Preliminary / Budget Estimates', path: '/services/preliminary-estimates' },
    { name: 'Detailed Estimates', path: '/services/detailed-estimates' },
    { name: 'Bid Estimates', path: '/services/bid-estimates' },
    { name: 'Conceptual Estimates', path: '/services/conceptual-estimates' },
    { name: ' Dedicated Estimator', path: '/services/dedicated-estimator' }
  ];

  const specializedLinks = [
    { name: 'CSI Trades Estimating', path: '/services/csi-trades-estimating' },
    { name: 'Renovation Estimating', path: '/services/renovation-estimating' },
    { name: 'Value Engineering', path: '/services/value-engineering' }
  ];

  const softwareLinks = [
    { name: 'On-Screen Takeoff (OST)', path: '/services/on-screen-takeoff' },
    { name: 'Bluebeam Revu', path: '/services/bluebeam-revu' },
    { name: 'Planswift', path: '/services/planswift-estimation' },
    { name: 'RSMeans Integration', path: '/services/rsmeans-integration' },
    { name: 'Excel Estimating Models', path: '/services/excel-estimating' },
    { name: 'CostX / Trimble / STACK', path: '/services/costx-trimble' },
    { name: 'ProEst / CoConstruct / Buildertrend', path: '/services/proest-buildertrend' }
  ];

  const documentationLinks = [
    { name: 'Bill of Quantities (BOQ)', path: '/services/bill-of-quantities' },
    { name: 'Material Cost Reports', path: '/services/material-cost-reports' },
    { name: 'Vendor Comparison Reports', path: '/services/vendor-comparison' },
    { name: 'Bid Package Preparation', path: '/services/bid-package-prep' },
    { name: 'Cost Breakdown Structure', path: '/services/cost-breakdown-structure' },
    { name: 'Historical Cost Database', path: '/services/historical-cost-database' }
  ];

  const projectSupportLinks = [
    { name: 'Scope Gap Analysis', path: '/services/scope-gap-analysis' },
    { name: 'Subcontractor Quote Review', path: '/services/subcontractor-quote-review' },
    { name: 'Estimate Validation', path: '/services/estimate-validation' },
    { name: 'Project Cost Benchmarking', path: '/services/cost-benchmarking' },
    { name: 'Cash Flow Forecasting', path: '/services/cash-flow-forecasting' }
  ];

  const constructionManagementLinks = [
    { name: 'Project Execution', path: '/services/project-execution' },
    { name: 'Planning & Scheduling', path: '/services/planning-scheduling' },
    { name: 'Site Supervision', path: '/services/site-supervision' },
    { name: 'Subcontractor Coordination', path: '/services/subcontractor-coordination' },
    { name: 'Technology & Innovation', path: '/services/technology-innovation' },
    { name: 'Safety & Compliance', path: '/services/safety-compliance' },
    { name: 'Financial & Legal', path: '/services/financial-legal' }
  ];

  const industriesWeServe = [
    { name: 'Public / Government Projects', path: '/services/government' },
    { name: 'Residential Projects', path: '/services/residential-construction' },
    { name: 'Commercial / Office Projects', path: '/services/commercial-construction' },
    { name: 'Retail / Merchandise Projects', path: '/services/retail-construction' },
    { name: 'Industrial / Warehousing Projects', path: '/services/industrial-construction' },
    { name: 'Turnkey / Design-Build / EPCM Projects', path: '/services/turnkey-design-build' }
  ];



  return (
    <>      
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/1598254f-67ec-42a0-bc7e-f7435098e398.png" 
              alt="Paradise Estimating Logo" 
              className="h-14 w-14 mr-2 transition-all duration-500 group-hover:scale-110 object-contain"
            />
            <span className={`text-2xl font-poppins font-bold ${isScrolled ? 'text-navy' : 'text-white'} transition-all duration-300 relative hidden sm:inline-block`}>
              <span className="inline-block overflow-hidden">
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300">P</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-[50ms]">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-100">r</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-150">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-200">d</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-250">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-300">s</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-350">e</span>
              </span>
              <span className="mx-1"></span>
              <span className="inline-block overflow-hidden">
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-400">E</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-450">s</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-500">t</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-550">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-600">m</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-650">a</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-700">t</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-750">i</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-800">n</span>
                <span className="transform inline-block hover:translate-y-[-2px] transition-transform duration-300 delay-850">g</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/') ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            
            {/* Services Mega Menu */}
         <DropdownMenu open={servicesMenuOpen} onOpenChange={setServicesMenuOpen}>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`${
                    isScrolled ? 'text-navy' : 'text-white'
                  } hover-underline-animation ${location.pathname.includes('/services') ? 'font-semibold' : ''} flex items-center cursor-pointer bg-transparent border-0 outline-none`}
                  onClick={() => {
                    navigate('/services');
                    setServicesMenuOpen(true);
                  }}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-[1000px] bg-white shadow-lg p-6">
                <div className="grid grid-cols-4 gap-6">
                  {/* Industries We Serve */}
                  <div>
                    <DropdownMenuLabel asChild className="text-navy font-bold mb-2 cursor-pointer">
                      <Link 
                        to="/services/industries" 
                        className="block hover:text-gold transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Industries We Serve
                      </Link>
                    </DropdownMenuLabel>
                    {industriesWeServe.map((service, index) => (
                      <DropdownMenuItem key={index} asChild className="p-0">
                        <Link 
                          to={service.path} 
                          className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-700 hover:text-navy"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  
                  {/* Quantity Takeoff Services */}
                  <div>
                    <DropdownMenuLabel asChild className="text-navy font-bold mb-2 cursor-pointer">
                      <Link 
                        to="/services/quantity-takeoff" 
                        className="block hover:text-gold transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Quantity Takeoff
                      </Link>
                    </DropdownMenuLabel>
                    {quantityTakeoffLinks.slice(0, 5).map((service, index) => (
                      <DropdownMenuItem key={index} asChild className="p-0">
                        <Link 
                          to={service.path} 
                          className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-700 hover:text-navy"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  
                  {/* Cost Estimation Services */}
                  <div>
                    <DropdownMenuLabel asChild className="text-navy font-bold mb-2 cursor-pointer">
                      <Link 
                        to="/services/cost-estimation" 
                        className="block hover:text-gold transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Cost Estimation
                      </Link>
                    </DropdownMenuLabel>
                    {costEstimationLinks.slice(0, 5).map((service, index) => (
                      <DropdownMenuItem key={index} asChild className="p-0">
                        <Link 
                          to={service.path} 
                          className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-700 hover:text-navy"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  
                  {/* Construction Management Services */}
                  <div>
                    <DropdownMenuLabel asChild className="text-navy font-bold mb-2 cursor-pointer">
                      <Link 
                        to="/services/construction-management" 
                        className="block hover:text-gold transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Construction Management
                      </Link>
                    </DropdownMenuLabel>
                    {constructionManagementLinks.slice(0, 5).map((service, index) => (
                      <DropdownMenuItem key={index} asChild className="p-0">
                        <Link 
                          to={service.path} 
                          className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-700 hover:text-navy"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Specialized Services */}
                  <div>
                    <DropdownMenuLabel asChild className="text-navy font-bold mb-2 cursor-pointer">
                      <Link 
                        to="/services/specialized-services" 
                        className="block hover:text-gold transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Specialized Services
                      </Link>
                    </DropdownMenuLabel>
                    {specializedLinks.slice(0, 5).map((service, index) => (
                      <DropdownMenuItem key={index} asChild className="p-0">
                        <Link 
                          to={service.path} 
                          className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-700 hover:text-navy"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Software-Based Services */}
                  <div>
                    <DropdownMenuLabel asChild className="text-navy font-bold mb-2 cursor-pointer">
                      <Link 
                        to="/services/software-services" 
                        className="block hover:text-gold transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Software Services
                      </Link>
                    </DropdownMenuLabel>
                    {softwareLinks.slice(0, 5).map((service, index) => (
                      <DropdownMenuItem key={index} asChild className="p-0">
                        <Link 
                          to={service.path} 
                          className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-700 hover:text-navy"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Documentation Services */}
                  <div>
                    <DropdownMenuLabel asChild className="text-navy font-bold mb-2 cursor-pointer">
                      <Link 
                        to="/services/documentation" 
                        className="block hover:text-gold transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Documentation
                      </Link>
                    </DropdownMenuLabel>
                    {documentationLinks.slice(0, 5).map((service, index) => (
                      <DropdownMenuItem key={index} asChild className="p-0">
                        <Link 
                          to={service.path} 
                          className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-700 hover:text-navy"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* Project Support Services */}
                  <div>
                    <DropdownMenuLabel asChild className="text-navy font-bold mb-2 cursor-pointer">
                      <Link 
                        to="/services/project-support" 
                        className="block hover:text-gold transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Project Support
                      </Link>
                    </DropdownMenuLabel>
                    {projectSupportLinks.slice(0, 5).map((service, index) => (
                      <DropdownMenuItem key={index} asChild className="p-0">
                        <Link 
                          to={service.path} 
                          className="block px-2 py-1 hover:bg-gray-100 text-sm text-gray-700 hover:text-navy"
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>

                  {/* View All Services */}
                  <div className="flex items-end">
                    <DropdownMenuItem asChild className="w-full">
                      <Link 
                        to="/services" 
                        className="inline-block w-full bg-navy text-white px-4 py-2 rounded-md hover:bg-navy/90 font-semibold text-center"
                      >
                        View All Services
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              to="/portfolio"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${location.pathname.includes('/portfolio') ? 'font-semibold' : ''}`}
            >
              Portfolio
            </Link>
            
            <Link
              to="/blog"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/blog') ? 'font-semibold' : ''}`}
            >
              Blog
            </Link>
            
            <Link
              to="/about"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/about') ? 'font-semibold' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/service-areas"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/service-areas') ? 'font-semibold' : ''}`}
            >
              Service Areas
            </Link>
            <Link
              to="/contact"
              className={`${
                isScrolled ? 'text-navy' : 'text-white'
              } hover-underline-animation ${isActive('/contact') ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
            <Button className="bg-gold hover:bg-white hover:text-gold text-white transition-colors duration-300">
              <Link to="/estimate-download">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className={`lg:hidden ${isScrolled ? 'text-navy' : 'text-white'}`} onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-6 flex flex-col space-y-4 animate-fade-in-down max-h-96 overflow-y-auto">
            <Link
              to="/"
              className={`text-navy py-2 ${isActive('/') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <details className="group">
              <summary className="text-navy py-2 cursor-pointer list-none flex justify-between items-center">
                <Link
                  to="/services"
                  className="flex-grow"
                >
                  Services
                </Link>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  to="/services/industries"
                  className="font-semibold text-gray-600 text-sm block hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries We Serve
                </Link>
                {industriesWeServe.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link 
                  to="/services/quantity-takeoff"
                  className="font-semibold text-gray-600 text-sm block hover:text-navy mt-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quantity Takeoff
                </Link>
                {quantityTakeoffLinks.slice(0, 5).map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link 
                  to="/services/cost-estimation"
                  className="font-semibold text-gray-600 text-sm mt-3 block hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cost Estimation
                </Link>
                {costEstimationLinks.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link 
                  to="/services/construction-management"
                  className="font-semibold text-gray-600 text-sm mt-3 block hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Construction Management
                </Link>
                {constructionManagementLinks.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link 
                  to="/services/specialized-services"
                  className="font-semibold text-gray-600 text-sm mt-3 block hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Specialized Services
                </Link>
                {specializedLinks.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link 
                  to="/services/software-services"
                  className="font-semibold text-gray-600 text-sm mt-3 block hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Software Services
                </Link>
                {softwareLinks.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link 
                  to="/services/documentation"
                  className="font-semibold text-gray-600 text-sm mt-3 block hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Documentation
                </Link>
                {documentationLinks.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link 
                  to="/services/project-support"
                  className="font-semibold text-gray-600 text-sm mt-3 block hover:text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Project Support
                </Link>
                {projectSupportLinks.slice(0, 4).map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="text-navy py-1 block text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="text-navy py-1 block font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Services →
                </Link>
              </div>
            </details>
            <Link
              to="/portfolio"
              className={`text-navy py-2 ${location.pathname.includes('/portfolio') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`text-navy py-2 ${isActive('/blog') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`text-navy py-2 ${isActive('/about') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/service-areas"
              className={`text-navy py-2 ${isActive('/service-areas') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Service Areas
            </Link>
            <Link
              to="/contact"
              className={`text-navy py-2 ${isActive('/contact') ? 'font-semibold' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-gold hover:bg-navy text-white w-full">
              <Link to="/estimate-download">Get a Quote</Link>
            </Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
