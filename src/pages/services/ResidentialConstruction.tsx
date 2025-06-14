import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaBuilding, FaCity, FaChartLine, FaClock, FaCloud, FaChevronRight, FaMapMarkerAlt, FaUsers, FaTools, FaDollarSign, FaFileAlt, FaCalendarAlt, FaClipboardCheck } from 'react-icons/fa';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Button } from '@/components/ui/button';

const ResidentialConstruction = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <FaHome className="w-12 h-12 text-green-600" />,
      title: "Detached Homes",
      description: "Custom cost models for luxury finishes and site-specific variables. We account for architectural uniqueness, premium materials, and regional cost fluctuations."
    },
    {
      icon: <FaBuilding className="w-12 h-12 text-green-600" />,
      title: "Apartments",
      description: "High-density unit costing with economies of scale optimization. Our models capture volume-driven cost efficiencies, from shared services to modular build strategies."
    },
    {
      icon: <FaCity className="w-12 h-12 text-green-600" />,
      title: "Townhouses",
      description: "Repetitive element takeoffs for fast-track developments. We streamline costs for repetitive layouts, reducing errors and turnaround time."
    },
    {
      icon: <FaUsers className="w-12 h-12 text-green-600" />,
      title: "Housing Estates",
      description: "Phased budgeting for large-scale community builds. Our phased cost planning supports funding rounds and progressive release strategies."
    }
  ];

  const features = [
    {
      icon: <FaChartLine className="w-8 h-8 text-green-600" />,
      title: "98% Estimate Accuracy Guarantee",
      description: "Industry-leading precision backed by our guarantee"
    },
    {
      icon: <FaClock className="w-8 h-8 text-green-600" />,
      title: "24-Hour Turnaround",
      description: "Fast response for urgent bids without compromising quality"
    },
    {
      icon: <FaCloud className="w-8 h-8 text-green-600" />,
      title: "Cloud-Based Collaboration",
      description: "Real-time updates and shared access for project teams"
    }
  ];

  const solutions = [
    {
      icon: <FaDollarSign className="w-8 h-8 text-green-600" />,
      title: "Conceptual Costing",
      description: "Secure financing faster with feasibility studies tailored to lender requirements."
    },
    {
      icon: <FaTools className="w-8 h-8 text-green-600" />,
      title: "Detailed Trade Take-offs",
      description: "Eliminate material waste with AI-powered quantity surveys for every trade."
    },
    {
      icon: <FaFileAlt className="w-8 h-8 text-green-600" />,
      title: "Developer Budgeting",
      description: "Protect profit margins with real-time cost vs. sales price tracking."
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8 text-green-600" />,
      title: "Material Scheduling",
      description: "Just-in-time delivery planning to reduce storage costs by up to 30%."
    },
    {
      icon: <FaClipboardCheck className="w-8 h-8 text-green-600" />,
      title: "Tender Pricing Support",
      description: "Win more bids with subcontractor-ready pricing packages."
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8 text-green-600" />,
      title: "Variation Estimating",
      description: "Avoid change-order disputes with instant impact assessments."
    }
  ];

  const benefits = [
    "Tech Advantage: Drone-based site scans + AI cost forecasting",
    "Industry Cred: Licensed Quantity Surveyors with 100+ years combined experience",
    "Collaborative Approach: We work as an extension of your team",
    "National Reach: Serving developers in all 50 states",
    "Speed + Detail: 24-hour turnarounds without compromising detail"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Residential Construction Estimating Services | Paradise Estimating</title>
        <meta name="description" content="Expert residential construction estimating services for detached homes, apartments, townhouses, and housing estates. 98% accuracy guarantee and 24-hour turnaround." />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Residential Construction Estimating Services</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Did you know that 70% of residential construction projects exceed their budgets due to inaccurate estimating? At Paradise Estimating, we've built our reputation by delivering high-precision residential estimating services that empower developers to build smarter, faster, and more profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Residential Project Expertise</h2>
            <p className="text-gray-700 text-lg mb-8">
              Trusted by Top Developers for 15+ Years. From coast to coast, developers trust Paradise Estimating to deliver scalable and tailored cost insights for all types of residential projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">What Sets Us Apart</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">End-to-End Estimating Solutions</h2>
          <p className="text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            At Paradise Estimating, we don't just provide numbers—we provide clarity. Our full-spectrum residential estimating services are designed to support developers at every stage of the project lifecycle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-2 rounded-lg mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy">{solution.title}</h3>
                </div>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Why Builders Choose Paradise</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-4xl mx-auto">
              Unlike outdated per-square-foot models, our trade-specific databases reflect real-time material and labor costs in all 50 states. We customize each estimate based on actual trade rates, regional labor costs, and supplier pricing trends.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-navy mb-6">What Makes Us the Preferred Estimator for Developers:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <FaChevronRight className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-navy mb-8">Who We Work With</h2>
          <p className="text-gray-700 mb-8">
            Whether you're developing a single infill property or launching a 500-lot master-planned community, we adapt our delivery to meet your project needs.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-4 rounded-lg">Property developers</div>
            <div className="bg-gray-50 p-4 rounded-lg">Home builders</div>
            <div className="bg-gray-50 p-4 rounded-lg">Construction managers</div>
            <div className="bg-gray-50 p-4 rounded-lg">Real estate investment firms</div>
            <div className="bg-gray-50 p-4 rounded-lg">Owner-builders</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6">Ready to Build With Confidence?</h2>
            <p className="text-gray-700 mb-8">
              Get a precise estimate for your next residential project and experience the Paradise Estimating difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Link to="/contact" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  Get Your Estimate
                </Link>
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-gray-100">
                <Link to="/contact" className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Our Team
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

export default ResidentialConstruction;