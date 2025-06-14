import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield,
  Building,
  FileText,
  Upload,
  Ruler,
  Calculator,
  ClipboardCheck,
  BarChart,
  HardHat,
  Wrench,
  Settings,
  Users,
  FileSpreadsheet,
  Briefcase,
  Building2,
  BrickWall,
  Home,
  Factory,
  School,
  Hospital,
  Check
} from 'lucide-react';

const MasonryTakeoff = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
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
                Precision Masonry Takeoffs
              </span>
              <br />
              <span className="text-gray-800">Built for Contractors</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              99.9% accurate material quantification for brick, block, stone and specialty masonry with 24-hour turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 shadow-lg">
                  Get Started <Upload className="ml-2 h-5 w-5" />
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
              { value: "99.9%", label: "Accuracy Rate" },
              { value: "24h", label: "Average Turnaround" },
              { value: "1,500+", label: "Projects Completed" },
              { value: "23%", label: "Waste Reduction" }
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Contractors Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional masonry estimating services that save time and reduce costs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Clock className="h-6 w-6 text-blue-600" />,
                title: "Fast Turnaround",
                description: "Estimates delivered in 24-48 hours"
              },
              {
                icon: <Calculator className="h-6 w-6 text-blue-600" />,
                title: "Affordable Rates",
                description: "Competitive pricing for all project sizes"
              },
              {
                icon: <ClipboardCheck className="h-6 w-6 text-blue-600" />,
                title: "Detailed Reports",
                description: "Material, labor, equipment breakdowns"
              },
              {
                icon: <Shield className="h-6 w-6 text-blue-600" />,
                title: "Expert Precision",
                description: "Dual-checked by senior estimators"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
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

      {/* Services Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Masonry Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed takeoffs for all masonry applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: <BrickWall className="h-6 w-6 text-blue-600" />,
                  title: "Unit Masonry",
                  items: ["Brick", "CMU blocks", "Glass units", "Decorative finishes"]
                },
                {
                  icon: <BrickWall className="h-6 w-6 text-blue-600" />,
                  title: "Structural Systems",
                  items: ["Veneer walls", "Load-bearing walls", "Reinforced masonry", "Anchorage systems"]
                }
              ].map((group, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-12">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Wrench className="h-6 w-6 text-blue-600" />,
                  title: "Accessories & Components",
                  items: ["Mortar & grout", "Flashing & weeps", "Insulation", "Scaffolding"]
                },
                {
                  icon: <Settings className="h-6 w-6 text-blue-600" />,
                  title: "Specialty Services",
                  items: ["Historic restoration", "Stucco/EIFS", "Stonework", "Precast concrete"]
                }
              ].map((group, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-12">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we deliver precise masonry estimates in 24 hours
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 top-0 h-full w-full">
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 -translate-x-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-blue-500 -translate-x-1/2 scale-y-0 origin-top" style={{ animation: "grow 1.5s ease-in-out forwards" }}></div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid lg:grid-cols-4 gap-8 relative z-10"
            >
              {[
                {
                  icon: <Upload className="h-8 w-8" />,
                  title: "Plan Submission",
                  description: "Upload your project plans through our secure platform"
                },
                {
                  icon: <Ruler className="h-8 w-8" />,
                  title: "Digital Measurement",
                  description: "Precise quantification using Bluebeam and PlanSwift"
                },
                {
                  icon: <Check className="h-8 w-8" />,
                  title: "Quality Verification",
                  description: "Dual-checked by senior estimators"
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Report Delivery",
                  description: "Receive comprehensive Excel or PDF reports"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInItem}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                      {step.icon}
                    </div>
                    <div className=" lg:block w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dual Check System */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6">Dual-Check Quality System</h2>
                <p className="text-gray-600 mb-6">
                  Every masonry takeoff undergoes rigorous verification by two independent estimators to ensure maximum accuracy before delivery.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Senior estimator review on every project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Pattern recognition for complex designs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Material-specific waste calculations</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Our Process
                </Button>
              </div>
              <div className="bg-blue-100 flex items-center justify-center p-8">
                <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200 w-full max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Ruler className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Sample Verification Report</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Initial Measurement</span>
                      <span className="font-medium">1,248 sq.ft.</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Verified Measurement</span>
                      <span className="font-medium">1,250 sq.ft.</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Variance</span>
                      <span className="font-medium text-blue-600">+0.16%</span>
                    </div>
                    <div className="pt-2 text-sm text-gray-500">
                      Typical variance under 0.5% across all projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by masonry professionals across all sectors
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: <Home className="h-6 w-6" />, name: "Residential" },
              { icon: <Building2 className="h-6 w-6" />, name: "Commercial" },
              { icon: <Factory className="h-6 w-6" />, name: "Industrial" },
              { icon: <Hospital className="h-6 w-6" />, name: "Institutional" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold">{industry.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our masonry takeoff services
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                question: "How accurate are your masonry takeoffs?",
                answer: "Our masonry takeoffs are 99.9% accurate, thanks to our detailed methodology and dual-check review system."
              },
              {
                question: "Can you handle complex patterns or custom designs?",
                answer: "Yes! We specialize in complex patterns and custom masonry designs including decorative bonds and specialty units."
              },
              {
                question: "What's included in the final report?",
                answer: "Material quantities, cost estimates, waste calculations, and project-specific details formatted to be project-ready."
              },
              {
                question: "Do you work with small contractors?",
                answer: "Absolutely! We treat every client with the same level of care whether residential or commercial projects."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-9">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Masonry Estimates?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get 99.9% accurate masonry takeoffs delivered in 24 hours and start winning more bids today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 shadow-lg">
                  Upload Plans Now <Upload className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-blue-700 hover:text-white px-8">
                Speak With an Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
  @keyframes grow {
    from { transform: translateX(-50%) scaleY(0); }
    to { transform: translateX(-50%) scaleY(1); }
  }
`}</style>
    </div>
  );
};

export default MasonryTakeoff;