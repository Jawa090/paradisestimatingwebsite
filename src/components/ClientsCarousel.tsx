
import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const ClientsCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      if (carouselRef.current) {
        const firstItem = carouselRef.current.children[0] as HTMLElement;
        
        if (!firstItem) return;
        
        const itemWidth = firstItem.offsetWidth + 20; // width + margin
        
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.offsetWidth - 10) {
          // Reset to start when reaching the end
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  // Sample client logos - these would typically be real client logos
  const clients = [
    { name: "ABC Construction", logo: "/client-1-color.jpg" },
    { name: "XYZ Developers", logo: "/client-2.jpg" },
    { name: "Metro Builders", logo: "client-4.jpg" },
    { name: "City Contractors", logo: "/client-5.jpg" },
    { name: "Elite Engineers", logo: "/client-6.jpg" },
    { name: "Global Construction", logo: "/client-7.jpg" },
    { name: "Landmark Projects", logo: "/client-8.jpg" },
    { name: "Premier Properties", logo: "/client-10.jpg" },
    { name: "Global Construction", logo: "/client-11.jpg" },
    { name: "Landmark Projects", logo: "/client-12.jpg" },
    { name: "Premier Properties", logo: "/client-13.jpg" },
      { name: "Landmark Projects", logo: "/client-14.jpg" },
    { name: "Premier Properties", logo: "/client-15.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to work with leading construction companies, developers, and contractors across the country.
          </p>
        </div>
        
        <div className="relative overflow-hidden py-6">
          {/* Gradient overlay on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          
          {/* Client logo carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-scroll scrollbar-hide"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-10 py-4">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-44 h-24 bg-white rounded-lg shadow-md flex items-center justify-center px-6 transition-transform hover:scale-105"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              
              {/* Duplicate the first few clients to create a seamless loop */}
              {clients.slice(0, 4).map((client, index) => (
                <div 
                  key={`repeat-${index}`} 
                  className="flex-shrink-0 w-44 h-24 bg-white rounded-lg shadow-md flex items-center justify-center px-6 transition-transform hover:scale-105"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlay on the right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
