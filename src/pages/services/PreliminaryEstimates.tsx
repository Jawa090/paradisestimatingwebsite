import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Calculator,
  Clock,
  FileText,
  BarChart,
  CheckCircle,
  DollarSign,
  Award,
  Phone,
  Mail,
  MessageSquare,
  Upload,
  Download,
  Building,
  TrendingUp,
  ArrowRight,
  MapPin,
  ShieldCheck,
  Users,
  PieChart,
  Layers
} from 'lucide-react';

const PreliminaryEstimates: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
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

  const estimateTypes = [
    {
      type: "Rough Order of Magnitude (ROM)",
      accuracy: "-50% to +50%",
      useCase: "Initial feasibility and screening"
    },
    {
      type: "Ballpark Estimate",
      accuracy: "-30% to +30%",
      useCase: "Internal budgeting and early discussions"
    },
    {
      type: "Budget Estimate",
      accuracy: "-10% to +25%",
      useCase: "Pre-design validation and planning"
    },
    {
      type: "Definitive Estimate",
      accuracy: "-5% to +15%",
      useCase: "Construction-ready funding decisions"
    }
  ];

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Fast Turnaround",
      description: "Estimates delivered within 24 hours"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      title: "Special Offer",
      description: "30% off your first estimate + monthly subscription discounts"
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "Location-Specific",
      description: "Pricing using RSMeans, Craftsman, and proprietary data"
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Certified Experts",
      description: "AACE and AIQS credentialed estimators"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-green-600" />,
      title: "Dedicated Support",
      description: "Available via phone, email, or text"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Industry Trusted",
      description: "Serving professionals nationwide for 15+ years"
    }
  ];

  const processSteps = [
    {
      icon: <Upload className="h-6 w-6 text-green-600" />,
      title: "Upload Your Plans",
      description: "Submit architectural drawings, sketches, or area schedules via email or our upload portal."
    },
    {
      icon: <BarChart className="h-6 w-6 text-green-600" />,
      title: "Cost Model Development",
      description: "We match your project with comparable historical data from similar completed jobs."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Adjust for Location and Time",
      description: "We apply cost modifiers for regional labor, material pricing, inflation, and project timing."
    },
    {
      icon: <Download className="h-6 w-6 text-green-600" />,
      title: "Deliver Itemized Report",
      description: "A detailed Excel and PDF estimate is delivered within 24 hours."
    }
  ];

  const benefits = [
    "Securing bank loans or internal funding",
    "Communicating cost constraints with design teams",
    "Managing owner expectations early",
    "Avoiding future cost overruns or scope creep",
    "Comparing alternate design or construction methods"
  ];

  const trustFactors = [
    {
      icon: <PieChart className="h-6 w-6 text-green-600" />,
      title: "500+ Estimates Completed",
      description: "Across commercial, residential, retail, and institutional projects"
    },
    {
      icon: <Layers className="h-6 w-6 text-green-600" />,
      title: "All 50 States Covered",
      description: "Regionalized pricing available in all major U.S. markets"
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Industry Certified",
      description: "By AACE and AIQS with 15+ years experience"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Preliminary and Budget Estimating Services for Project Planning</title>
        <meta
          name="description"
          content="Early-stage construction cost estimates for budgeting, feasibility studies, and planning approvals."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-green-50 to-green-100 overflow-hidden">
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                  Accurate Preliminary Budget Estimates
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Preliminary Estimates for 30%, 60%, or 90% Drawings? We Deliver Fast, Reliable Solutions.
              </p>
              <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
                If you're working with incomplete plans, need a quick feasibility check, or are facing supplier delays, Paradise Estimating can help. Our preliminary estimates provide cost insights based on square footage pricing and historical data—empowering you to make informed decisions early in the design phase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 shadow-lg">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-8 border-green-300 text-green-700 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              {...fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Paradise Estimating?</h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
                <p>
                  With over 15 years of experience in the construction industry, we specialize in preparing early-stage cost estimates using advanced cost databases, proprietary models, and location-based adjustments. We serve general contractors, developers, architects, and construction managers across the United States.
                </p>
                <p>
                  Our estimates help streamline project planning, reduce risk, and improve your ability to secure client approvals and financing.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInItem}
                  className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-green-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-white p-2 rounded-full mr-4 border border-green-200">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Is Preliminary Estimate Section */}
        <section className="py-20 px-4 bg-green-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              {...fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What Is a Preliminary Estimate and Why Is It Important?</h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-4">
                <p>
                  A preliminary estimate—also called a feasibility or conceptual estimate—is a high-level cost analysis used in the early stages of a project before detailed designs are complete. These estimates help assess economic feasibility, inform design decisions, and allocate funding effectively.
                </p>
                <p>
                  They are typically based on historical project data, adjusted for factors such as time, location, size, and scope.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Estimate Types Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              {...fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Comparison of Estimate Types and Accuracy</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Paradise Estimating specializes in ROM, Ballpark, and Budget Estimates, ideal for conceptual and schematic phases.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-green-50">
                    <th className="p-4 text-left border border-green-100">Estimate Type</th>
                    <th className="p-4 text-left border border-green-100">Accuracy Range</th>
                    <th className="p-4 text-left border border-green-100">Primary Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  {estimateTypes.map((type, index) => (
                    <motion.tr 
                      key={index}
                      variants={fadeInItem}
                      className="hover:bg-green-50/50"
                    >
                      <td className="p-4 border border-green-100 font-medium">{type.type}</td>
                      <td className="p-4 border border-green-100">{type.accuracy}</td>
                      <td className="p-4 border border-green-100">{type.useCase}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-green-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              {...fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Estimating Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our process is designed to be efficient, accurate, and transparent.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInItem}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-green-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full text-green-600 mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              {...fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">What's Included in Our Preliminary Estimate?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our preliminary reports provide a clear breakdown of projected costs, tailored to your project's scope and phase.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeInItem}
                className="space-y-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Square footage pricing by major divisions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Quantity takeoffs for structural, architectural, and MEP systems</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Labor, materials, and equipment costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Linear and area measurements for rooms and components</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInItem}
                className="space-y-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Recommended contingency allocations</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Estimated schedule duration and labor hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Delivered in Excel and PDF formats</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Option to use our template or yours</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-green-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              {...fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">How Our Estimates Help You</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our preliminary construction budgets are built to support:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeInItem}
                className="bg-white p-8 rounded-xl shadow-sm border border-green-100"
              >
                <ul className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              {...fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Trusted by Industry Professionals Nationwide</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                With over 500 preliminary estimates completed across commercial, residential, retail, and institutional projects, Paradise Estimating supports clients across all 50 states. We bring proven methodologies and trusted data to every project.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6"
            >
              {trustFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  variants={fadeInItem}
                  className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-green-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-white p-2 rounded-full mr-4 border border-green-200">
                      {factor.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{factor.title}</h3>
                  </div>
                  <p className="text-gray-600">{factor.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-800">
          <div className="container mx-auto max-w-7xl text-center">
            <motion.div
              {...fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Call Now and Claim Discount On Your First Estimate</h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Contact us now to claim your 30% discount on your first estimate and learn about our monthly subscription discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 shadow-lg">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" /> Email Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PreliminaryEstimates;