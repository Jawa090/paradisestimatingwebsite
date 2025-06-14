import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, FileText, CheckCircle, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Ruler, ClipboardCheck, Calculator, LayoutGrid } from "lucide-react";

// Enhanced animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const MEPSystems = () => {
  return (
    <>
      <Helmet>
        <title>MEP Systems Estimating Services | Paradise Estimating</title>
        <meta
          name="description"
          content="Expert MEP (Mechanical, Electrical, and Plumbing) estimating services with speed and reliability. Comprehensive takeoff and cost estimation services for contractors, architects, and developers."
        />
      </Helmet>

      <div className="bg-gradient-to-b from-gray-50 to-white">
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
                  MEP Systems Takeoff Services
                </span>
                <br />
                <span className="text-gray-800">For Mechanical, Electrical & Plumbing</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Expert MEP quantity takeoffs for contractors & suppliers — maximize accuracy and win more bids.
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
                  variants={fadeIn}
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
                Comprehensive MEP takeoff services for all project types
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Ruler className="h-8 w-8 text-blue-600" />,
                  title: "Quantity Takeoffs",
                  description: "Accurate measurements for all MEP systems"
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

        {/* Client Logos */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-12 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.p variants={fadeIn} className="text-center text-gray-500 uppercase text-sm font-semibold tracking-wider mb-8">
              Trusted by leading contractors and developers
            </motion.p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70">
              {[1, 2, 3, 4, 5].map((item) => (
                <motion.div 
                  key={item}
                  variants={fadeIn}
                  className="h-10"
                >
                  <div className="h-full w-32 bg-gray-200 rounded-md"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Value Proposition */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 bg-primary p-12 flex items-center">
                    <motion.div 
                      variants={scaleUp}
                      className="text-white"
                    >
                      <h2 className="text-3xl font-bold mb-6">Why MEP Estimating Matters</h2>
                      <p className="text-lg opacity-90 mb-6">
                        Mechanical, electrical, and plumbing systems typically account for <span className="font-bold">20-40%</span> of total construction costs. Precise estimating is crucial for project viability and profitability.
                      </p>
                      <div className="space-y-4">
                        {[
                          "Avoid costly change orders",
                          "Optimize material procurement",
                          "Improve bid competitiveness",
                          "Reduce project risks"
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-lg">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="md:w-1/2 p-12">
                    <motion.div variants={fadeIn}>
                      <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Differentiators</h3>
                      <div className="space-y-8">
                        {[
                          {
                            title: "Industry-Leading Accuracy",
                            desc: "±2% variance on average compared to final project costs",
                            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          },
                          {
                            title: "Rapid Turnaround",
                            desc: "48-hour standard delivery for most projects",
                            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          },
                          {
                            title: "BIM Integration",
                            desc: "Seamless collaboration with your BIM models",
                            icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          }
                        ].map((item, index) => (
                          <div key={index} className="flex">
                            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-gray-800">{item.title}</h4>
                              <p className="text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Comprehensive MEP Estimating Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Specialized estimating solutions for every aspect of your mechanical, electrical, and plumbing systems
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Electrical Estimating",
                    icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    color: "blue",
                    highlights: [
                      "Lighting systems & controls",
                      "Power distribution",
                      "Low voltage systems",
                      "Emergency power",
                      "Fire alarm systems"
                    ]
                  },
                  {
                    title: "Mechanical Estimating",
                    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                    color: "orange",
                    highlights: [
                      "HVAC systems",
                      "Ductwork & piping",
                      "Equipment & controls",
                      "Ventilation systems",
                      "Energy recovery"
                    ]
                  },
                  {
                    title: "Plumbing Estimating",
                    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                    color: "teal",
                    highlights: [
                      "Water supply systems",
                      "Drainage & waste",
                      "Plumbing fixtures",
                      "Gas piping systems",
                      "Storm water systems"
                    ]
                  }
                ].map((service, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                    whileHover={{ y: -10 }}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-${service.color}-500 hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="p-8">
                      <div className={`bg-${service.color}-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                        <svg className={`w-8 h-8 text-${service.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                      <ul className="space-y-3">
                        {service.highlights.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg className={`w-5 h-5 text-${service.color}-500 mr-3 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`bg-${service.color}-50 px-8 py-4 border-t border-${service.color}-100`}>
                      <a href="#" className={`text-${service.color}-600 font-semibold hover:text-${service.color}-700 flex items-center`}>
                        Learn more
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
                Simple steps to get your accurate MEP takeoffs
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

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Trusted by contractors and developers across North America
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    quote: "Paradise Estimating's MEP estimates have been consistently accurate across our commercial projects. Their attention to detail has saved us thousands in potential overruns.",
                    author: "Michael Chen",
                    title: "Project Manager, Commercial Developer",
                    rating: 5
                  },
                  {
                    quote: "The speed and precision of their electrical estimates help us submit competitive bids with confidence. We've won 3 major projects thanks to their work.",
                    author: "Sarah Johnson",
                    title: "Chief Estimator, Electrical Contractor",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeIn}
                    className="bg-gray-50 p-8 rounded-xl"
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-lg italic text-gray-700 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="bg-gray-300 w-12 h-12 rounded-full mr-4"></div>
                      <div>
                        <p className="font-bold text-gray-800">{testimonial.author}</p>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
                Upload your plans now and receive a detailed MEP takeoff within 24 hours
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
    </>
  );
};

export default MEPSystems;