import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import {
  Upload,
  FileText,
  CheckCircle,
  Download,
  Ruler,
  ClipboardCheck,
  Calculator,
  LayoutGrid,
  Shield,
  Clock3,
  Trophy
} from 'lucide-react';
import { Helmet } from "react-helmet";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const CarpentryMillwork = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>Carpentry, Millwork & Cabinetry Takeoffs | Paradise Estimating</title>
        <meta
          name="description"
          content="Expert carpentry, millwork & cabinetry takeoff services for contractors and builders. Fast, reliable estimates for residential and commercial projects."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Carpentry, Millwork & Cabinetry Takeoffs
              </span>
              <br />
              <span className="text-gray-800">Precise Measurements, Accurate Estimates</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Expert quantity takeoffs for all types of carpentry, millwork, and cabinetry — maximize accuracy and win more bids.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 shadow-lg">
                  Start Your 24-Hour Pilot Takeoff <Upload className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 border-blue-300 text-blue-700 hover:bg-blue-50">
                View Sample Report
              </Button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "24h", label: "Rush Service" },
              { value: "100%", label: "Bid-Win Guarantee" },
              { value: "12%", label: "Average Cost Savings" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
              >
                <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="text-blue-600">Services</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive takeoff services for all carpentry and millwork projects
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Ruler className="h-8 w-8 text-blue-600" />,
                title: "Quantity Takeoffs",
                description: "Accurate measurements for all woodwork and finishes"
              },
              {
                icon: <ClipboardCheck className="h-8 w-8 text-blue-600" />,
                title: "Bid-Ready Proposals",
                description: "Professional proposals ready for submission"
              },
              {
                icon: <Calculator className="h-8 w-8 text-blue-600" />,
                title: "Change Order Estimates",
                description: "Updated estimates for project changes"
              },
              {
                icon: <LayoutGrid className="h-8 w-8 text-blue-600" />,
                title: "BIM Integration",
                description: "Precise estimates from BIM models"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 ml-12">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-6">
              Our <span className="text-blue-600">Process</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your accurate takeoffs
            </motion.p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 to-blue-800 transform -translate-x-1/2"></div>
            
            {[
              {
                step: "01",
                title: "Submit Plans",
                description: "Upload your drawings via our secure portal",
                icon: <Upload className="h-6 w-6 text-white" />
              },
              {
                step: "02",
                title: "Receive Quote",
                description: "We'll review and provide pricing within 4 hours",
                icon: <FileText className="h-6 w-6 text-white" />
              },
              {
                step: "03",
                title: "Approval",
                description: "Confirm and we'll begin your takeoff",
                icon: <CheckCircle className="h-6 w-6 text-white" />
              },
              {
                step: "04",
                title: "Delivery",
                description: "Receive your comprehensive report",
                icon: <Download className="h-6 w-6 text-white" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="bg-blue-100 p-6 rounded-xl inline-flex items-center justify-center">
                  <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 px-4 bg-gray-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-6">
              What Makes Us <span className="text-blue-600">Different</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Trophy className="h-10 w-10 text-blue-600" />,
                title: "15+ Years Experience",
                description: "Deep expertise in carpentry and millwork estimating"
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-600" />,
                title: "Certified Estimators",
                description: "Industry-certified professionals ensuring quality"
              },
              {
                icon: <Clock3 className="h-10 w-10 text-blue-600" />,
                title: "24/7 Support",
                description: "Always available when you need us"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Upload your plans now and receive a detailed takeoff within 24 hours
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 shadow-lg">
                  Upload Your Plans <Upload className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 border-blue-300 text-blue-700 hover:bg-blue-50">
                View Sample Report <FileText className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default CarpentryMillwork;