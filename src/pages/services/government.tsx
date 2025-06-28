import { Link } from 'react-router-dom';
import { School, Building2, Hospital, Construction, ArrowRight, Phone, Mail, FileCheck, Clock, Shield, Calculator, BarChart2, Layers, FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';
import { Helmet } from "react-helmet";

const Government = () => {
  const services = [
    {
      icon: <Calculator className="h-12 w-12 text-navy" />,
      title: "Budget Estimates Aligned with Government Cost Limits",
      description: "We develop reliable budget estimates that align with funding ceilings set by public agencies. This ensures financial feasibility and helps secure approvals in the early planning stages."
    },
    {
      icon: <Clock className="h-12 w-12 text-navy" />,
      title: "Multi-Stage Cost Planning (SD, DD, CD, Pre-Tender)",
      description: "From Schematic Design (SD) through to Construction Documents (CD), we prepare detailed cost plans for each design stage. Our progressive estimates allow for controlled design development, risk identification, and strategic budget allocation."
    },
    {
      icon: <FileCheck className="h-12 w-12 text-navy" />,
      title: "Bills of Quantities (BOQ) & Tender Documentation",
      description: "Our BOQs and tender documentation comply fully with public procurement standards. We produce structured, transparent documents to support competitive tendering, evaluation fairness, and contractor accountability."
    },
    {
      icon: <Shield className="h-12 w-12 text-navy" />,
      title: "Variation Estimates & Valuations for Audit Compliance",
      description: "Change is inevitable in construction. We provide clear, justified variation estimates and interim valuations that meet audit trails and reporting standards required by government oversight bodies."
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-navy" />,
      title: "Life Cycle Cost Analysis (CAPEX + OPEX Focus)",
      description: "Beyond initial construction costs, we offer comprehensive lifecycle cost analysis, accounting for both capital expenditures (CAPEX) and long-term operating costs (OPEX). This ensures public assets are not just affordable to build, but also economical to maintain."
    },
    {
      icon: <Layers className="h-12 w-12 text-navy" />,
      title: "Schedule of Rates (SOR) for Framework Contracts",
      description: "We prepare custom Schedules of Rates (SOR) tailored to framework and term contracts, enabling standardized pricing, faster procurement, and consistent cost control across long-term public projects."
    }
  ];

  const projectTypes = [
    {
      icon: <School className="h-16 w-16 text-navy" />,
      title: "School Construction Estimating",
      description: "We deliver education-sector estimates that support smart capital planning and regulatory compliance. From schools to universities, our takeoffs account for multi-use spaces, accessibility, and safety systems—all within tight public budgets."
    },
    {
      icon: <Hospital className="h-16 w-16 text-navy" />,
      title: "Hospital & Healthcare Facility Estimating",
      description: "Healthcare projects require highly detailed estimating due to their complex systems and code requirements. Our estimates cover everything from medical gas lines to infection control zones, ensuring cost clarity from schematic design to bid."
    },
    {
      icon: <Building2 className="h-16 w-16 text-navy" />,
      title: "Municipal & Government Building Estimating",
      description: "Whether it's a city hall, fire station, or courthouse, we provide precise cost data for public-use buildings. Our estimates meet procurement transparency standards and are backed by complete documentation ready for public review or audit."
    },
    {
      icon: <Construction className="h-16 w-16 text-navy" />,
      title: "Infrastructure & Civil Works Estimating",
      description: "We prepare reliable, detailed estimates for infrastructure projects, including roads, bridges, transit systems, and utilities. Our civil estimates include traffic control, excavation, paving, and drainage, all grounded in current DOT pricing and construction practices."
    }
  ];

  const trustPoints = [
    {
      title: "Public-Sector Expertise",
      description: "Our team has extensive experience working with government agencies, understanding their unique requirements and compliance standards."
    },
    {
      title: "Data-Driven Accuracy",
      description: "We use the latest cost databases and estimating software to ensure our numbers are precise and up-to-date with current market conditions."
    },
    {
      title: "Fast Turnarounds",
      description: "We meet tight government deadlines without compromising on quality, with most estimates delivered within 24-48 hours."
    },
    {
      title: "Confidentiality Assured",
      description: "We maintain strict security protocols with secure file handling and NDAs to protect sensitive project information."
    },
    {
      title: "End-to-End Support",
      description: "From initial design through post-award adjustments, we provide continuous estimating support throughout your project lifecycle."
    },
    {
      title: "Transparent Documentation",
      description: "Our estimates come with clear, detailed documentation that stands up to public scrutiny and audit requirements."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Construction Estimating Services for Public and Government Projects</title>
        <meta
          name="description"
          content="Get accurate cost estimates for public and government construction projects. Trusted by contractors, architects, and agencies."
        />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Government Construction Estimating Services</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              At Paradise Estimating, we specialize in precise and compliant estimating services for public sector construction projects. With deep experience in government-funded initiatives, we understand the strict protocols, budgetary constraints, and transparency standards required for successful delivery of schools, hospitals, municipal buildings, and infrastructure developments.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Government Estimating Services</h2>
            <p className="text-gray-700 text-lg mb-8">
              We offer a full range of services designed specifically for the public sector, ensuring compliance, accuracy, and long-term value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-white p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Project-Specific Estimating Expertise</h2>
          
          <div className="space-y-8">
            {projectTypes.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="bg-gray-100 p-4 rounded-lg mb-4 md:mb-0 md:mr-6">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy mb-2">{project.title}</h3>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Why Contractors & Agencies Trust Paradise Estimating</h2>
            <p className="text-gray-700 text-lg mb-8">
              Paradise Estimating offers deep public-sector expertise with accurate, data-driven estimates and fast turnarounds. We ensure full confidentiality through secure file handling and NDAs, providing end-to-end support from design to post-award adjustments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-navy mb-4">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Ready to Deliver on Your Next Public Project?</h2>
            <p className="text-gray-700 mb-8">
              Whether you're bidding on a new school, managing costs on a hospital renovation, or overseeing infrastructure upgrades, Paradise Estimating provides the dependable estimating support you need. Our government construction estimating services ensure compliance, transparency, and cost certainty from concept to completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link to="/contact" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us Today
                </Link>
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-gray-100">
                <Link to="/contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Request a Quote
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

export default Government;