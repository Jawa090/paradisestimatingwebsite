import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calculator,
  Clock,
  CheckCircle,
  FileText,
  Users,
  ArrowRight,
  Phone,
  Mail,
  ClipboardList,
  BarChart,
  Shield,
  Target,
  Building,
  Home,
  Factory,
  School,
  Wrench,
  Upload,
  Download,
  Check,
  DollarSign,
  Award,
  Globe,
  FileCheck,
  Settings
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const DetailedEstimates = () => {
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

  const reportItems = [
    { icon: <ClipboardList className="h-5 w-5" />, text: "Itemized Material Takeoffs (with quantity, unit price & total cost)" },
    { icon: <Users className="h-5 w-5" />, text: "Labor Hours and Rates by Trade" },
    { icon: <Wrench className="h-5 w-5" />, text: "Equipment Costs (owned or rented)" },
    { icon: <FileCheck className="h-5 w-5" />, text: "Subcontractor Allowances (if applicable)" },
    { icon: <DollarSign className="h-5 w-5" />, text: "Markups for Overhead & Profit" },
    { icon: <Shield className="h-5 w-5" />, text: "Contingency & Escalation Calculations" },
    { icon: <FileText className="h-5 w-5" />, text: "Cost Codes (CSI MasterFormat or client-specific)" },
    { icon: <BarChart className="h-5 w-5" />, text: "Trade-by-Trade Cost Breakdown" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Scope Clarifications & Assumptions" },
    { icon: <Clock className="h-5 w-5" />, text: "Delivery Timeline Based on Project Schedule" }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: "98% Accuracy Rate",
      description: "Backed by a proven estimation process and 12,000+ completed takeoffs"
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-600" />,
      title: "Fast Turnaround",
      description: "Receive your detailed estimate within 24–48 hours (depending on scope)"
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "ASTM-Compliant Estimates",
      description: "We follow industry-standard practices for consistency and reliability"
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: "Tailored to Your Needs",
      description: "Estimates built specifically for bidding, budgeting, value engineering, or change orders"
    },
    {
      icon: <Settings className="h-8 w-8 text-emerald-600" />,
      title: "Software-Driven Precision",
      description: "We use Bluebeam, Planswift, RSMeans, CostWorks, and Excel for efficient estimating"
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "National Coverage",
      description: "Serving contractors and developers across the USA"
    }
  ];

  const whoWeServe = [
    {
      title: "General Contractors & Construction Managers",
      description: "Bid-ready cost breakdowns for competitive tenders"
    },
    {
      title: "Subcontractors & Trades",
      description: "Trade-specific cost visibility to secure more jobs"
    },
    {
      title: "Developers & Owners",
      description: "Full budget forecasts to validate contractor quotes"
    },
    {
      title: "Architects & Engineers",
      description: "Pre-design cost validation to inform design decisions"
    },
    {
      title: "Cost Consultants",
      description: "Outsource detailed takeoffs and pricing with accuracy assurance"
    }
  ];

  const projectTypes = [
    { icon: <Home className="text-emerald-600" />, title: "Residential", description: "Custom homes, multifamily, townhouses" },
    { icon: <Building className="text-emerald-600" />, title: "Commercial", description: "Office buildings, retail, hotels, warehouses" },
    { icon: <Factory className="text-emerald-600" />, title: "Industrial", description: "Plants, distribution centers, infrastructure" },
    { icon: <School className="text-emerald-600" />, title: "Institutional", description: "Schools, healthcare, public works" },
    { icon: <Wrench className="text-emerald-600" />, title: "Renovations & Remodels", description: "Interior and structural upgrades" }
  ];

  const processSteps = [
    {
      icon: <Upload className="text-emerald-600" />,
      title: "Submit Drawings & Scope",
      description: "Upload your architectural/engineering plans and scope of work."
    },
    {
      icon: <Clock className="text-emerald-600" />,
      title: "Receive Quote & Timeline",
      description: "We'll provide a quote and estimated delivery time."
    },
    {
      icon: <Calculator className="text-emerald-600" />,
      title: "Estimate Development",
      description: "Our team prepares and reviews a full itemized estimate."
    },
    {
      icon: <FileCheck className="text-emerald-600" />,
      title: "Client Review & Revisions",
      description: "We revise as needed based on your feedback."
    },
    {
      icon: <Download className="text-emerald-600" />,
      title: "Final Delivery",
      description: "You receive your detailed estimate in Excel, PDF, or your preferred format."
    }
  ];

  const benefits = [
    "Avoid budget overruns and change orders",
    "Improve bid accuracy and win rates",
    "Strengthen client trust with documented costs",
    "Ensure proper funding and resource planning",
    "Reduce disputes during construction"
  ];

  return (
    <>
      <Helmet>
        <title>Detailed Construction Estimate Services | Paradise Estimating</title>
        <meta
          name="description"
          content="Get accurate, itemized construction estimates that drive project success. Our detailed estimates provide complete cost transparency across every project phase."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-emerald-50">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-emerald-600">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Detailed Construction Estimate Services
              </h1>
              <p className="text-xl text-white mb-8">
                Accurate, Itemized Estimates That Drive Project Success
              </p>
              <p className="text-lg text-white mb-8">
                At Paradise Estimating, we specialize in delivering detailed construction estimates that provide complete cost transparency and precision across every project phase. Whether you're a general contractor, subcontractor, developer, or architect, our itemized cost breakdowns help you plan smarter, bid with confidence, and avoid costly surprises.
              </p>
              <div className="mt-8">
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6">
                  <Link to="/contact">Request a Free Quote Today →</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                What Is a Detailed Construction Estimate?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A detailed estimate is a comprehensive cost analysis that breaks down each component of a construction project. From materials and labor to equipment and overhead, we quantify and price every line item based on real-time data, industry standards, and project scope.
              </p>
              <p className="text-xl font-semibold text-emerald-700">
                Stop guessing and start building with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">
                What's Included in Our Detailed Estimate Reports?
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Our reports are structured to align with your scope of work, drawings, and specifications. Each estimate includes:
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {reportItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="text-emerald-600">{item.icon}</div>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4">
                  <Link to="/contact">Get a Line-by-Line Estimate →</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">
                Why Choose Paradise Estimating for Detailed Estimates?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="bg-emerald-50 rounded-lg p-6 shadow-sm"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4">
                  <Link to="/contact">Schedule Your Free Consultation →</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">
                Who We Serve
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {whoWeServe.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="text-xl font-bold text-emerald-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4">
                  <Link to="/contact">Talk to an Expert Estimator Now →</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Types Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">
                Types of Projects We Estimate
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {projectTypes.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="bg-emerald-50 rounded-lg p-6 shadow-sm"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">
                Our Process: How It Works
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="bg-white rounded-lg p-6 text-center shadow-sm"
                  >
                    <div className="mb-4 flex justify-center">{step.icon}</div>
                    <h3 className="text-lg font-bold text-emerald-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button className="bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4">
                  <Link to="/contact">Upload Your Plans →</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12 text-center">
                Benefits of a Detailed Estimate
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="bg-emerald-50 rounded-lg p-6 shadow-sm flex items-center space-x-3"
                  >
                    <Check className="text-emerald-600 h-5 w-5 flex-shrink-0" />
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Started with Paradise Estimating
              </h2>
              <p className="text-xl text-white mb-8">
                Whether you're preparing for a project bid, assessing feasibility, or controlling costs, our detailed estimating services give you the data-driven insights to move forward with confidence.
              </p>
              <p className="text-2xl font-semibold text-white mb-8">Let's build smarter, together.</p>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6">
                <Link to="/contact">Contact Paradise Estimating Today →</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
        <Chatbot />
      </div>
    </>
  );
};

export default DetailedEstimates;