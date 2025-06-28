import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Building2, FileText, Settings, Clock, CheckCircle, DollarSign, BarChart2, Wrench } from 'lucide-react';

const CommercialConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Commercial Construction Estimating for Office and Retail Projects</title>
        <meta
          name="description"
          content="Reliable commercial estimating services for office buildings and retail developments. Improve budgeting and bidding success."
        />
      </Helmet>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Construction Estimating Services</h1>
            <p className="text-2xl text-gray-300 mb-6">Expert Commercial Estimating Solutions</p>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
              At Paradise Estimating, we understand that accurate commercial construction estimates are the foundation of profitable projects. 
              Our team of certified estimators combines decades of industry experience with cutting-edge technology to deliver precise, 
              comprehensive estimates that help you win more bids and maximize profitability.
            </p>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
              Ready to transform your bidding success? Contact us today for a free consultation and discover why leading contractors trust Paradise Estimating for their commercial projects.
            </p>
            <button className="bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get a Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Why Choose Paradise Estimating for Commercial Construction?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
                title: "Unmatched Accuracy & Detail",
                description: "Our commercial estimating specialists meticulously analyze every aspect of your project, from foundation to finish. We utilize advanced takeoff software and industry-leading databases to ensure every material, labor hour, and equipment cost is accounted for with precision."
              },
              {
                icon: <Building2 className="h-8 w-8 text-green-600" />,
                title: "Industry Expertise Across All Sectors",
                description: "With over 15 years of combined experience, our estimators have successfully handled projects ranging from small retail buildouts to multi-million dollar commercial complexes. We understand the unique challenges and requirements of different commercial sectors."
              },
              {
                icon: <Settings className="h-8 w-8 text-green-600" />,
                title: "Technology-Driven Solutions",
                description: "We leverage the latest estimating software and digital tools to streamline the estimation process while maintaining the highest levels of accuracy. Our technology stack includes industry standards like Planswift, Bluebeam, RS Means, and specialized commercial estimating platforms."
              },
              {
                icon: <Clock className="h-8 w-8 text-green-600" />,
                title: "Competitive Turnaround Times",
                description: "Time is money in commercial construction. Our efficient processes and dedicated team ensure you receive detailed estimates quickly, giving you more time to refine your bids and pursue additional opportunities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-bold text-navy ml-3">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Our Commercial Project Expertise</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            We provide comprehensive estimating services for a wide range of commercial construction projects:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retail & Shopping Centers",
                items: ["Shopping malls and plazas", "Standalone retail stores", "Restaurants and food service facilities", "Convenience stores and gas stations"]
              },
              {
                title: "Healthcare Facilities",
                items: ["Hospitals and medical centers", "Outpatient clinics", "Senior living facilities", "Specialized medical facilities"]
              },
              {
                title: "Educational Institutions",
                items: ["Schools and universities", "Training centers", "Libraries and research facilities", "Student housing complexes"]
              },
              {
                title: "Commercial / Office Projects",
                items: ["Office buildings and corporate headquarters", "Mixed-use towers and developments", "Technology parks and innovation centers", "Business complexes and coworking spaces"]
              },
              {
                title: "Industrial & Warehouse",
                items: ["Manufacturing facilities", "Distribution centers", "Cold storage facilities", "Logistics hubs"]
              },
              {
                title: "Hospitality & Entertainment",
                items: ["Hotels and resorts", "Entertainment venues", "Convention centers", "Sports facilities"]
              },
              {
                title: "Specialized Commercial",
                items: ["Data centers", "Financial institutions", "Religious buildings", "Automotive facilities"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-navy mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Comprehensive Commercial Estimating Services</h2>
          
          {/* Bid Preparation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-6">Bid Preparation & Competitive Analysis</h3>
            <p className="text-gray-700 mb-6">
              Transform your bidding strategy with our detailed bid estimates. We analyze project specifications, local market conditions, and competitor positioning to help you submit winning bids that maintain healthy profit margins.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-navy mb-4">What's Included:</h4>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Complete material takeoffs",
                  "Labor cost analysis",
                  "Equipment and subcontractor pricing",
                  "Overhead and profit calculations",
                  "Risk assessment and contingency planning"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Shell & Core and Fit-Out Estimating</h3>
              <p className="text-gray-700 mb-4">
                We provide distinct estimates for shell & core construction and tenant fit-out work, enabling developers and tenants to understand cost breakdowns clearly. This separation is crucial for mixed-use towers and office buildings where different stakeholders manage various construction phases.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Trade Package Breakdown & Coordination</h3>
              <p className="text-gray-700 mb-4">Our detailed trade package analysis covers all essential commercial office components:</p>
              <ul className="space-y-2">
                {[
                  "Partition systems and demising walls",
                  "HVAC systems and controls",
                  "Glazing and curtain wall systems",
                  "Electrical and low-voltage systems",
                  "Flooring and ceiling installations",
                  "Security and access control systems"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="h-8 w-8 text-green-600" />,
                title: "Investment Planning & Financial Analysis",
                description: "Support your investment decisions with our comprehensive preliminary and detailed cost estimates for multi-phase development projects, mixed-use commercial developments, technology park expansions, and office building repositioning projects."
              },
              {
                icon: <Wrench className="h-8 w-8 text-green-600" />,
                title: "Value Engineering Solutions",
                description: "Maximize value while controlling costs through our comprehensive value engineering analysis. We identify opportunities to optimize material selections, construction methods, and project sequencing without compromising quality or performance."
              },
              {
                icon: <DollarSign className="h-8 w-8 text-green-600" />,
                title: "Change Order Management",
                description: "Navigate project changes efficiently with our specialized change order management services. We track cost impacts across different project phases, ensuring accurate financial control throughout your development timeline."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-navy ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CSI Division Coverage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Complete CSI Division Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Division 00: Procurement and Contracting Requirements",
              "Division 01: General Requirements",
              "Division 02: Existing Conditions",
              "Division 03: Concrete",
              "Division 04: Masonry",
              "Division 05: Metals",
              "Division 06: Wood, Plastics, and Composites",
              "Division 07: Thermal and Moisture Protection",
              "Division 08: Openings",
              "Division 09: Finishes",
              "Division 10: Specialties",
              "Division 11: Equipment",
              "Division 12: Furnishings",
              "Division 13: Special Construction",
              "Division 14: Conveying Equipment",
              "Division 21-28: Fire Suppression, Plumbing, HVAC, Electrical, Electronic Safety & Security, Earthwork, Utilities, Transportation"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <p className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Advanced Technology & Software</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Takeoff Tools",
                items: ["Planswift for comprehensive quantity takeoffs", "Bluebeam for collaborative document management", "On-Screen Takeoff for precise measurements"]
              },
              {
                title: "Cost Databases",
                items: ["RS Means for reliable pricing data", "Regional cost databases for local accuracy", "Historical project data for trend analysis"]
              },
              {
                title: "Project Management",
                items: ["Cloud-based collaboration platforms", "Real-time project tracking", "Automated reporting systems"]
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-navy mb-4">{tech.title}</h3>
                <ul className="space-y-3">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Win More Commercial Bids?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't let inaccurate estimates cost you profitable projects. Partner with Paradise Estimating and experience the difference that professional, precise commercial construction estimating makes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Free Initial Consultation",
                description: "Discuss your project needs with our experts"
              },
              {
                title: "Quick Turnaround",
                description: "Most estimates delivered within 24-48 hours"
              },
              {
                title: "Competitive Pricing",
                description: "Transparent, value-based pricing structure"
              },
              {
                title: "Satisfaction Guarantee",
                description: "We stand behind every estimate we provide"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Schedule Your Free Consultation
            </button>
            <p className="mt-6 text-gray-300">
              Contact Paradise Estimating now to receive a no-obligation quote for your next commercial project.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default CommercialConstruction;