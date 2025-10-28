import { Link } from 'react-router-dom';
import { MapPin, Home, Search } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useMemo, useState } from 'react';

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
  const [query, setQuery] = useState('');

  const filteredAreas = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return serviceAreas;
    return serviceAreas.filter(a => a.state.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Construction Estimating Services Available Across the U.S.</title>
        <meta
          name="description"
          content="Discover the U.S. regions we serve with professional construction estimating services. Paradise Estimating provides accurate takeoff and cost estimation across all 50 states including New York, California, Texas, and more."
        />
      </Helmet>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-navy via-navy to-black text-white py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center mb-6">
            <Link
              to="/"
              className="flex items-center text-white/90 hover:text-white transition-colors duration-300"
            >
              <Home className="h-5 w-5 mr-2" />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Service Areas</h1>
          <p className="text-lg md:text-xl max-w-3xl text-white/90">
            We deliver professional construction estimating across the United States. Search your state below and get started.
          </p>
          <div className="mt-8 max-w-2xl">
            <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-3 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search state e.g., California"
                className="w-full px-3 py-3 outline-none text-navy placeholder-gray-500"
              />
            </div>
            <div className="mt-3 text-sm text-white/80">
              Showing <span className="font-semibold">{filteredAreas.length}</span> state{filteredAreas.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>

      {/* Service Areas Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAreas.map((area, index) => (
            <Link
              key={index}
              to={area.path}
              className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.state}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute top-3 right-3 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full shadow">Available</div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-gold mr-2" />
                  <h3 className="text-xl font-semibold text-navy">{area.state}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
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