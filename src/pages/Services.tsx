import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ServiceCard from '@/components/ServiceCard';
import { 
  quantityTakeoffServices,
  costEstimationServices,
  specializedServices,
  softwareBasedServices,
  documentationServices,
  projectSupportServices,
  constructionManagementServices
} from '@/data/newServices';
import { Calculator, FileText, Settings, Monitor, ClipboardList, Users, Building2 } from 'lucide-react';

const Services = () => {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

  // Function to check if an element is in the viewport
  const isInViewport = (element: Element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  // Handle scroll animations
  useEffect(() => {
    const handleScroll = () => {
      if (animatedElementsRef.current) {
        const elements = animatedElementsRef.current.querySelectorAll('.animate-on-scroll');
        
        elements.forEach((element) => {
          if (isInViewport(element)) {
            element.classList.add('show');
          }
        });
      }
    };

    // Initial check in case elements are already in viewport
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const serviceCategories = [
    {
      title: 'Construction Management',
      icon: <Building2 className="h-12 w-12" />,
      description: 'Professional construction management and project delivery services.',
      services: constructionManagementServices,
      color: 'indigo'
    },
    {
      title: 'Quantity Takeoff Services',
      icon: <Calculator className="h-12 w-12" />,
      description: 'Precise material quantity calculations for all construction elements.',
      services: quantityTakeoffServices,
      color: 'blue'
    },
    {
      title: 'Cost Estimation Services',
      icon: <FileText className="h-12 w-12" />,
      description: 'Comprehensive cost analysis and estimation services.',
      services: costEstimationServices,
      color: 'green'
    },
    {
      title: 'Specialized Estimating',
      icon: <Settings className="h-12 w-12" />,
      description: 'Industry-specific and specialized estimation services.',
      services: specializedServices,
      color: 'purple'
    },
    {
      title: 'Software-Based Services',
      icon: <Monitor className="h-12 w-12" />,
      description: 'Digital takeoff and estimation using advanced software.',
      services: softwareBasedServices,
      color: 'orange'
    },
    {
      title: 'Documentation & Reporting',
      icon: <ClipboardList className="h-12 w-12" />,
      description: 'Professional documentation and reporting services.',
      services: documentationServices,
      color: 'red'
    },
    {
      title: 'Project Support Services',
      icon: <Users className="h-12 w-12" />,
      description: 'Additional support services for project success.',
      services: projectSupportServices,
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      red: 'bg-red-50 border-red-200 text-red-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-50 border-gray-200 text-gray-800';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Construction Estimating Services</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              From quantity takeoffs to comprehensive project support, we deliver accurate and detailed 
              estimating services for construction projects of all types and sizes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service Categories Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Service Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We organize our comprehensive estimating services into six main categories, 
              each designed to meet specific project needs and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg border-2 ${getColorClasses(category.color)} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <p className="mb-4 opacity-80">{category.description}</p>
                <p className="text-sm font-semibold">{category.services.length} Services Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Services Sections */}
      <section className="py-20 bg-white" ref={animatedElementsRef}>
        <div className="container mx-auto px-6">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <div className="text-center mb-12 animate-on-scroll">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${getColorClasses(category.color)}`}>
                    {category.icon}
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{category.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={service.id} 
                    className="animate-on-scroll" 
                    style={{ transitionDelay: `${(serviceIndex % 4) * 100}ms` }}
                  >
                    <ServiceCard
                      title={service.title}
                      description={service.shortDescription}
                      icon={service.icon}
                      link={`/services/${service.id}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Proven Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure accurate and reliable estimates for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Project Analysis</h3>
              <p className="text-gray-600">
                Comprehensive review of project documents, plans, and requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Detailed Takeoff</h3>
              <p className="text-gray-600">
                Precise quantity calculations using advanced software and proven methods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Cost Development</h3>
              <p className="text-gray-600">
                Application of current market rates and comprehensive cost analysis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Final Delivery</h3>
              <p className="text-gray-600">
                Professional reports with detailed breakdowns and supporting documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Paradise Estimating?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise, technology, and commitment to accuracy make us the preferred choice for construction estimating.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full mx-auto flex items-center justify-center mb-4">
                <Calculator className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Precision & Accuracy</h3>
              <p className="text-gray-600">
                Our detailed approach and advanced software ensure accurate quantity takeoffs and cost estimates.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full mx-auto flex items-center justify-center mb-4">
                <Monitor className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Advanced Technology</h3>
              <p className="text-gray-600">
                We utilize industry-leading software and digital tools for efficient and precise estimating.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full mx-auto flex items-center justify-center mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">Expert Team</h3>
              <p className="text-gray-600">
                Our experienced estimators bring deep industry knowledge and professional expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and discover how our professional estimating services 
            can help your next construction project succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Get A Quote
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
