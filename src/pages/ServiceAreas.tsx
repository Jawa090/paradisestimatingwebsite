import { Link } from 'react-router-dom';
import { MapPin, Home } from 'lucide-react';

const serviceAreas = [
  {
    state: 'New York',
    path: '/service-areas/new-york',
    description: 'Comprehensive construction estimation services across New York state.',
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    state: 'California',
    path: '/service-areas/california',
    description: 'Expert estimation services for projects throughout California.',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    state: 'Texas',
    path: '/service-areas/texas',
    description: 'Reliable construction estimation across the Lone Star State.',
    image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    state: 'Florida',
    path: '/service-areas/florida',
    description: 'Professional estimation services for Florida construction projects.',
    image: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    state: 'Illinois',
    path: '/service-areas/illinois',
    description: 'Detailed construction estimation services in Illinois.',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    state: 'Pennsylvania',
    path: '/service-areas/pennsylvania',
    description: 'Comprehensive estimation solutions for Pennsylvania projects.',
    image: 'https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    state: 'Georgia',
    path: '/service-areas/georgia',
    description: 'Expert construction estimation throughout Georgia.',
    image: 'https://images.unsplash.com/photo-1575916167835-51cc0f1e4e73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    state: 'North Carolina',
    path: '/service-areas/north-carolina',
    description: 'Professional estimation services across North Carolina.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    state: 'Ohio',
    path: '/service-areas/ohio',
    description: 'Reliable construction estimation services in Ohio.',
    image: 'https://images.unsplash.com/photo-1572205821737-10a2dd11fde8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const ServiceAreas = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-navy text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link
              to="/"
              className="flex items-center text-white hover:text-gold transition-colors duration-300"
            >
              <Home className="h-5 w-5 mr-2" />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Service Areas</h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Providing expert construction estimation services across major states in the United States
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Service Areas Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <Link
              key={index}
              to={area.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.state}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-40 group-hover:bg-opacity-30 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-gold mr-2" />
                  <h3 className="text-xl font-semibold text-navy">{area.state}</h3>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Estimation Services in Your Area?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services and how we can help with your construction project.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-white hover:text-gold text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas; 