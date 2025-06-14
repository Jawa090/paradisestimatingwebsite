import { Link } from 'react-router-dom';
import { Building2, Home, Factory, School, Landmark, Activity, Anchor, Layers, ArrowRight, Phone, Mail, Store, Workflow } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';

const Industries = () => {
  const industries = [
    {
      icon: <Landmark className="h-12 w-12 text-navy" />,
      title: "Public / Government Projects",
      description: "Expert cost estimation services for government buildings, public facilities, and infrastructure projects.",
      features: [
        "Government Buildings",
        "Public Infrastructure",
        "Educational Facilities",
        "Healthcare Facilities",
        "Municipal Buildings",
        "Public Safety Facilities"
      ],
      link: "/services/government"
    },
    {
      icon: <Home className="h-12 w-12 text-navy" />,
      title: "Residential Projects",
      description: "Comprehensive estimating services for residential construction, from single-family homes to multi-unit developments.",
      features: [
        "Single-Family Homes",
        "Multi-Family Developments",
        "Apartment Complexes",
        "Custom Home Building",
        "Residential Renovations",
        "Housing Communities"
      ],
      link: "/services/residential-construction"
    },
    {
      icon: <Building2 className="h-12 w-12 text-navy" />,
      title: "Commercial / Office Projects",
      description: "Specialized estimating services for commercial and office construction projects, from small offices to large corporate complexes.",
      features: [
        "Office Buildings",
        "Corporate Headquarters",
        "Business Parks",
        "Mixed-Use Developments",
        "Office Renovations",
        "Tenant Improvements"
      ],
      link: "/services/commercial-construction"
    },
    {
      icon: <Store className="h-12 w-12 text-navy" />,
      title: "Retail / Merchandise Projects",
      description: "Expert estimating services for retail rollouts and merchandise projects, from flagship stores to franchise locations.",
      features: [
        "Flagship Stores",
        "Franchise Rollouts",
        "Restaurant Construction",
        "Concept Stores",
        "Retail Renovations",
        "Brand Standards Compliance"
      ],
      link: "/services/retail-construction"
    },
    {
      icon: <Factory className="h-12 w-12 text-navy" />,
      title: "Industrial / Warehousing Projects",
      description: "Specialized cost estimation services for industrial facilities and warehouse construction projects.",
      features: [
        "Manufacturing Facilities",
        "Distribution Centers",
        "Warehouses",
        "Industrial Parks",
        "Storage Facilities",
        "Logistics Centers"
      ],
      link: "/services/industrial"
    },
    {
      icon: <Workflow className="h-12 w-12 text-navy" />,
      title: "Turnkey / Design-Build / EPCM Projects",
      description: "Comprehensive cost estimation services for turnkey, design-build, and EPCM (Engineering, Procurement, Construction Management) projects.",
      features: [
        "Turnkey Projects",
        "Design-Build Projects",
        "EPCM Projects",
        "Integrated Project Delivery",
        "Fast-Track Construction",
        "Project Management"
      ],
      link: "/services/design-build"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Comprehensive construction estimating services across diverse industries, delivering expertise tailored to your sector's unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Industry-Specific Construction Estimating Services</h2>
            <p className="text-gray-700 text-lg mb-8">
              At Paradise Estimating, we specialize in delivering accurate, fast, and reliable construction estimating services tailored to the needs of every industry. Whether you're bidding on a government-funded project or managing a fast-paced retail build-out, our team of certified estimators is equipped with the tools and knowledge to help you win more bids and complete your projects with confidence.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-navy mb-4">Precision Estimating for Every Construction Sector</h3>
            <p className="text-gray-700 mb-6">
              We don't believe in one-size-fits-all estimating. Each sector comes with its own codes, compliance issues, and design standards—and we account for all of them. With deep experience across diverse construction types, we provide the clarity and precision you need to quote competitively and plan effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Industries We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-navy">{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div className="space-y-2 mb-6">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={industry.link} className="text-green-600 font-medium flex items-center hover:text-green-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Industry Sections */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Landmark className="h-16 w-16 text-navy mb-4" />
                  <h3 className="text-2xl font-bold text-navy">Government & Public Sector Projects</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    Government-funded projects require a higher standard of documentation, precision, and compliance with regulations. Our public sector estimating services are designed to ensure adherence to prevailing wage standards, facilitate navigation of bid requirements, and guarantee full compliance with local, state, and federal guidelines.
                  </p>
                  <p className="text-gray-700 mb-4">
                    These projects typically involve intricate RFPs and complex scopes, making detailed takeoffs essential for maintaining competitiveness and avoiding underbidding. Our expertise extends to a wide range of project types, including educational institutions, public healthcare facilities, infrastructure upgrades, government buildings, public parks, and military installations.
                  </p>
                  <Link to="/services/government" className="text-green-600 font-medium flex items-center hover:text-green-700">
                    Learn More About Government Project Estimating <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Home className="h-16 w-16 text-navy mb-4" />
                  <h3 className="text-2xl font-bold text-navy">Residential Construction Projects</h3>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">From Custom Homes to Multi-Family Developments</h4>
                  <p className="text-gray-700 mb-4">
                    Whether you're a general contractor building custom homes or a developer overseeing multi-family projects, we provide complete residential estimating solutions. We cover everything from framing to finishes and renovations to ground-up construction.
                  </p>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Project Types:</h5>
                    <p className="text-gray-700">Custom homes, subdivisions, townhomes, multi-family units, renovations, additions.</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Why It Matters:</h5>
                    <p className="text-gray-700">Timely and accurate estimates reduce material waste, help secure financing, and ensure profitable project planning.</p>
                  </div>
                  <Link to="/services/residential-construction" className="text-green-600 font-medium flex items-center hover:text-green-700">
                    Learn More About Residential Project Estimating <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Building2 className="h-16 w-16 text-navy mb-4" />
                  <h3 className="text-2xl font-bold text-navy">Commercial & Office Projects</h3>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Detailed Estimating for Complex Commercial Builds</h4>
                  <p className="text-gray-700 mb-4">
                    Residential construction projects, including custom homes and multi-family developments, demand precise and comprehensive estimating solutions. Whether you are a general contractor managing custom home builds or a developer overseeing multi-family units, we provide end-to-end residential estimating services.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our expertise covers all aspects of construction, from framing and finishes to renovations and new builds. We specialize in a variety of project types, including custom homes, subdivisions, townhomes, multi-family units, renovations, and additions. Accurate and timely estimates are essential for minimizing material waste, securing financing, and ensuring effective project planning to maximize profitability.
                  </p>
                  <Link to="/services/commercial-construction" className="text-green-600 font-medium flex items-center hover:text-green-700">
                    Learn More About Commercial Project Estimating <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Store className="h-16 w-16 text-navy mb-4" />
                  <h3 className="text-2xl font-bold text-navy">Retail & Tenant Improvement Projects</h3>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Optimized Takeoffs for Functional, Attractive Retail Spaces</h4>
                  <p className="text-gray-700 mb-4">
                    Retail projects require a delicate balance of functionality, aesthetics, and timely delivery. We offer comprehensive estimating services tailored to the needs of retail spaces, including storefronts, lighting, interior fit-outs, signage, and specialty fixtures. These elements are crucial for creating attractive, customer-ready environments that align with your vision and operational goals.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our expertise spans a range of project types, including shopping malls, retail chains, restaurants, entertainment venues, and retail tenant improvements. In the fast-paced retail sector, precision and cost control are essential. Our team ensures you meet deadlines while maintaining design integrity and cost efficiency.
                  </p>
                  <Link to="/services/retail" className="text-green-600 font-medium flex items-center hover:text-green-700">
                    Learn More About Retail Project Estimating <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Factory className="h-16 w-16 text-navy mb-4" />
                  <h3 className="text-2xl font-bold text-navy">Industrial & Warehouse Projects</h3>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Accurate Estimates for Heavy-Duty and Large-Scale Projects</h4>
                  <p className="text-gray-700 mb-4">
                    Industrial construction projects, characterized by complex systems, expansive square footage, and stringent safety standards, demand highly accurate and detailed estimating. We provide comprehensive services for equipment installations, structural steel, utilities, and site work, ensuring precise cost projections for large-scale projects.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our expertise spans a variety of industrial projects, including distribution centers, factories, logistics hubs, cold storage facilities, and manufacturing plants. In such high-stakes environments, accuracy is essential when managing heavy equipment, MEP systems, and phased construction. Our team helps mitigate unexpected costs and maintains strict control over project expenses, ensuring successful project execution.
                  </p>
                  <Link to="/services/industrial" className="text-green-600 font-medium flex items-center hover:text-green-700">
                    Learn More About Industrial Project Estimating <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start mb-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <Workflow className="h-16 w-16 text-navy mb-4" />
                  <h3 className="text-2xl font-bold text-navy">Turnkey, Design-Build & EPCM Projects</h3>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Integrated Estimating for Streamlined Project Delivery</h4>
                  <p className="text-gray-700 mb-4">
                    We collaborate with design-build and EPCM (Engineering, Procurement, and Construction Management) teams to provide comprehensive early-phase budgeting and lifecycle estimating. Our integrated approach ensures smooth transitions from design to construction, allowing for more efficient project delivery.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We specialize in various project types, including design-build contracts, EPCM projects, industrial turnkey developments, and cross-sector delivery models. Integrated estimating is essential for real-time cost control, supporting value engineering and informed decision-making throughout the project lifecycle. This approach maximizes project efficiency, reduces risks, and ensures that projects stay within budget while maintaining quality.
                  </p>
                  <Link to="/services/design-build" className="text-green-600 font-medium flex items-center hover:text-green-700">
                    Learn More About Design-Build Project Estimating <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Why Choose Paradise Estimating?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Certified Industry Experts</h3>
              <p className="text-gray-700">
                Our estimators hold certifications in construction management and have years of hands-on experience across all major sectors. We speak your language, understand your specs, and deliver estimates that make sense in the field.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Fast 24–48 Hour Turnaround</h3>
              <p className="text-gray-700">
                Need a bid turned around fast? We've optimized our workflow to provide most estimates within 24 to 48 hours—without sacrificing accuracy. You'll always meet your deadlines.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Proven Accuracy & Reliability</h3>
              <p className="text-gray-700">
                We've supported thousands of successful bids with a reputation for consistency, transparency, and detail. Our clients trust our numbers because they win with them.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Advanced Estimating Technology</h3>
              <p className="text-gray-700">
                We use the latest software tools like Bluebeam, PlanSwift, and RSMeans to provide intelligent, real-time estimating data. Our digital takeoffs are accurate, scalable, and easy to review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Submit your plans online in just a few clicks and receive a personalized quote from our team—fast, easy, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link to="/contact" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-gray-100">
                <Link to="/contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Industries;