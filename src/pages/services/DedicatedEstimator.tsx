import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  Settings,
  UserCheck,
  Briefcase,
  Building2,
  HardHat,
  Database,
  TrendingUp,
  Lightbulb,
  Calendar,
  AlertTriangle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const DedicatedEstimator = () => {
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

  const serviceFeatures = [
    { 
      icon: <UserCheck className="h-5 w-5" />, 
      title: "One-on-One Cost Planning",
      text: "Your dedicated estimator works closely with your team, understanding project nuances and scope changes in real time."
    },
    { 
      icon: <Calculator className="h-5 w-5" />, 
      title: "Accurate Takeoffs & Quantity Surveys",
      text: "Get precise material and labor takeoffs using the latest software and cost databases."
    },
    { 
      icon: <Clock className="h-5 w-5" />, 
      title: "Timely Bid Support",
      text: "We provide fast turnaround on estimates to help you meet tight deadlines and win competitive bids."
    },
    { 
      icon: <BarChart className="h-5 w-5" />, 
      title: "Cost Control Throughout the Lifecycle",
      text: "From conceptual budgeting to final bidding, our estimators ensure consistent construction budget analysis."
    }
  ];

  const professionalBenefits = [
    { icon: <Award className="h-5 w-5" />, text: "Industry-standard accuracy (98%+ on average)" },
    { icon: <FileCheck className="h-5 w-5" />, text: "ASTM & AACE compliant estimates" },
    { icon: <Database className="h-5 w-5" />, text: "Access to national pricing databases (RSMeans, Craftsman, etc.)" },
    { icon: <Settings className="h-5 w-5" />, text: "Scalable support for large and complex projects" },
    { icon: <FileText className="h-5 w-5" />, text: "Full integration with project management and accounting workflows" }
  ];

  const strategicBenefits = [
    { icon: <Lightbulb className="h-5 w-5" />, text: "Identify cost-saving opportunities" },
    { icon: <TrendingUp className="h-5 w-5" />, text: "Evaluate alternative materials or methods (value engineering)" },
    { icon: <Calendar className="h-5 w-5" />, text: "Forecast cash flow and project phasing" },
    { icon: <AlertTriangle className="h-5 w-5" />, text: "Avoid budget overruns and delays" }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: "98%+ Accuracy Rate",
      description: "Industry-standard accuracy backed by proven estimation processes"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-emerald-600" />,
      title: "Dedicated Professional",
      description: "One estimator assigned exclusively to your project"
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "ASTM-Compliant",
      description: "Following industry standards for consistency and reliability"
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: "Project-Focused",
      description: "Deep understanding of your specific project requirements"
    },
    {
      icon: <Settings className="h-8 w-8 text-emerald-600" />,
      title: "Latest Technology",
      description: "Using advanced software and cost databases for precision"
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "National Coverage",
      description: "Serving contractors and developers across the USA"
    }
  ];

  const whoWeServe = [
    {
      title: "General Contractors",
      description: "Dedicated estimator support for competitive bidding"
    },
    {
      title: "Developers",
      description: "Project-focused cost planning and budget control"
    },
    {
      title: "Architects",
      description: "Early concept stage cost validation"
    },
    {
      title: "Construction Managers",
      description: "Ongoing cost management and analysis"
    },
    {
      title: "Project Owners",
      description: "Full-time estimating partner for project success"
    }
  ];

  const projectTypes = [
    { icon: <Home className="text-emerald-600" />, title: "Residential", description: "Custom homes, multifamily, townhouses" },
    { icon: <Building className="text-emerald-600" />, title: "Commercial", description: "Office buildings, retail, hotels" },
    { icon: <Factory className="text-emerald-600" />, title: "Industrial", description: "Plants, distribution centers" },
    { icon: <School className="text-emerald-600" />, title: "Institutional", description: "Schools, healthcare facilities" },
    { icon: <Building2 className="text-emerald-600" />, title: "Mixed-Use", description: "Complex multi-purpose developments" }
  ];

  const processSteps = [
    {
      icon: <Upload className="text-emerald-600" />,
      title: "Project Assignment",
      description: "We assign a dedicated estimator to your project."
    },
    {
      icon: <Clock className="text-emerald-600" />,
      title: "Initial Consultation",
      description: "Understanding your project scope and requirements."
    },
    {
      icon: <Calculator className="text-emerald-600" />,
      title: "Estimate Development",
      description: "Your dedicated estimator prepares detailed cost analysis."
    },
    {
      icon: <FileCheck className="text-emerald-600" />,
      title: "Review & Refinement",
      description: "Collaborative review and adjustments as needed."
    },
    {
      icon: <Download className="text-emerald-600" />,
      title: "Ongoing Support",
      description: "Continuous cost management throughout the project."
    }
  ];

  const benefits = [
    "Win more projects with accurate bids",
    "Control budgets efficiently",
    "Reduce risk of cost overruns",
    "Streamline project workflows",
    "Access expert estimating resources"
  ];

  return (
    <>
      <Helmet>
        <title>Dedicated Construction Estimator Services | Paradise Estimating</title>
        <meta
          name="description"
          content="Get a dedicated construction estimator assigned exclusively to your project. Our professional estimators provide accurate, timely cost estimates to help you win more projects."
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
                Dedicated Construction Estimator Services
              </h1>
              <p className="text-xl text-white mb-8">
                Accurate. Reliable. Project-Ready.
              </p>
              <p className="text-lg text-white mb-8">
                At Paradise Estimating, our dedicated construction estimator services are designed to give contractors, developers, and architects a competitive edge with precision-focused cost planning. Whether you're in the early concept stage or finalizing your bid, our professional estimators provide detailed, accurate, and timely building cost estimation to help you win more projects and control budgets efficiently.
              </p>
              <div className="mt-8">
                <Button className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6">
                  <Link to="/contact">Schedule a Free Consultation →</Link>
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
                What is a Dedicated Construction Estimator?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A dedicated construction estimator is a project-focused professional solely committed to delivering detailed cost estimates tailored to your specific project. Unlike generic estimating services, our dedicated model ensures that an estimator is assigned exclusively to your job—understanding your scope, timelines, materials, and cost drivers in depth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Hire Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">
                Why Hire a Dedicated Construction Estimator from ParadiseEstimating?
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Our team acts as an extension of your company, bringing unmatched precision and deep industry insight. Here's how we deliver value:
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {serviceFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="bg-emerald-50 rounded-lg p-6 shadow-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-emerald-600 mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-emerald-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professional Benefits Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">
                Benefits of Working With a Professional Cost Estimator
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Choosing ParadiseEstimating means you're working with a professional cost estimator who delivers:
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {professionalBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="text-emerald-600">{benefit.icon}</div>
                    <span className="text-gray-700">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Analysis Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-8 text-center">
                Strategic Construction Budget Analysis
              </h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Our estimators go beyond takeoffs. We deliver insightful construction budget analysis to help you:
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {strategicBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInItem}
                    className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg shadow-sm"
                  >
                    <div className="text-emerald-600">{benefit.icon}</div>
                    <span className="text-gray-700">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trusted Consultant Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                Your Trusted Project Cost Consultant
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                As your project cost consultant, ParadiseEstimating supports smarter decision-making at every phase of construction. From design development to final procurement, we ensure your financial plan aligns with your construction goals—reducing risk and maximizing return on investment.
              </p>
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
                Need a Full-Time Estimating Partner?
              </h2>
              <p className="text-xl text-white mb-8">
                Whether you need short-term help or ongoing estimating support, our dedicated construction estimator can step in as your full-time estimating partner—remotely or integrated into your workflow. You get consistent quality, availability, and accountability without the cost of hiring in-house.
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6">
                <Link to="/contact">Contact Us Today →</Link>
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

export default DedicatedEstimator; 