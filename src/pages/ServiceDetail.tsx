
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { allServices } from '@/data/newServices';
import { Button } from '@/components/ui/button';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = allServices.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-32 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
            <Link 
              to="/services" 
              className="inline-flex items-center bg-navy text-white px-6 py-3 rounded-md hover:bg-navy/90 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedServices = allServices.filter(s => 
    service.relatedServices.includes(s.id) && s.id !== service.id
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-navy">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('${service.bannerImage}')`,
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-6">
            <Link 
              to="/services" 
              className="inline-flex items-center text-white hover:text-gold transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="mr-4 text-white">
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gold hover:bg-white hover:text-gold text-white">
                <Link to="/contact" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Get Quote
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                <Link to="/contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Service Features</h2>
              <div className="space-y-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.processSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-1">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navy mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy mb-12 text-center">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <div key={relatedService.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 text-navy">
                      {relatedService.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-navy">{relatedService.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                  <Link 
                    to={`/services/${relatedService.id}`}
                    className="text-gold hover:text-navy font-semibold transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your {service.title.toLowerCase()} needs and get a customized solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Get a Quote
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

export default ServiceDetail;
