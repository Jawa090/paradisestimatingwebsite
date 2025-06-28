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
  Construction,
  Wrench,
  Settings,
  Users,
  FileSpreadsheet,
  Briefcase,
  Building2,
  Factory,
  Hammer,
  Warehouse,
  HardHat,
  Check,
  Scale
} from 'lucide-react';
import { Helmet } from "react-helmet";

const StructuralSteel = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>Steel Takeoff Services for Structural and Reinforcing Steel Projects</title>
        <meta
          name="description"
          content="Accurate rebar and structural steel takeoff for commercial and residential projects."
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
                Structural Steel Takeoff Services
              </span>
              <br />
              <span className="text-gray-800">With Bid-Win Guarantee</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
              Precision structural steel quantification for contractors & fabricators — slash waste and secure bids with margin-protecting estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/estimate">
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
              { value: "20+", label: "Years Experience" },
              { value: "24h", label: "Rush Service" },
              { value: "100%", label: "Bid-Win Guarantee" },
              { value: "15%", label: "Average Cost Savings" }
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

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Structural Steel Estimating Expertise</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-5xl mx-auto">
              Specialized services tailored for contractors, fabricators, and developers in the steel construction industry.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl border border-gray-200"
          >
            <p className="text-lg text-gray-700 mb-6">
              At Paradise Estimating, we specialize in structural steel takeoff and steel estimation services that help contractors, fabricators, erectors, and developers secure accurate, reliable, and margin-protecting estimates. With over 20 years of experience, our experts ensure that every takeoff is comprehensive and tailored to your unique project needs, guaranteeing you get the most precise material and labor cost estimates available.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're working on a small-scale commercial building or a large industrial facility, our steel estimation services are designed to help you save time, reduce waste, and secure your next bid with confidence.
            </p>
            <div className="mt-8 text-center">
              <Link to="/estimate">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your 24-Hour Pilot Takeoff Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Service Capabilities for Steel Estimation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From structural framing to specialty components, we provide accurate takeoffs for all types of projects
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
                  icon: <Construction className="h-6 w-6 text-blue-600" />,
                  title: "Structural Framing Systems",
                  description: "We provide precise takeoffs for all major framing components, such as beams, columns, and connections. Our team ensures each element is accurately measured and quantified, preventing costly errors and reworks during the fabrication and erection phases.",
                  items: ["Beams & Columns", "Connection Details", "Base Plates", "Bracing Systems"]
                },
                {
                  icon: <Hammer className="h-6 w-6 text-blue-600" />,
                  title: "Light Gauge & Secondary Elements",
                  description: "Our estimates also include secondary elements like decking, joists, studs, and other light-gauge components. We optimize material use and help you get the most out of your steel supply, reducing waste and improving overall project efficiency.",
                  items: ["Metal Decking", "Steel Joists", "Metal Studs", "Support Systems"]
                }
              ].map((group, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 pl-12">{group.description}</p>
                  <ul className="space-y-2 pl-12">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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
                  title: "Specialty Components",
                  description: "For more complex components like anchor bolts, staircases, and custom fabrications, our team provides specialized takeoff services to ensure every detail is accounted for. This level of precision allows for smooth fabrication and erection.",
                  items: ["Anchor Bolts", "Steel Stairs", "Custom Fabrications", "Architectural Steel"]
                },
                {
                  icon: <FileSpreadsheet className="h-6 w-6 text-blue-600" />,
                  title: "Material & Labor Reporting",
                  description: "Our material schedules, waste analysis, and erection labor estimates give you clear insights into what your project will require. These detailed reports help streamline your project's execution and ensure optimal use of resources.",
                  items: ["Material Schedules", "Waste Analysis", "Labor Estimates", "Cost Breakdowns"]
                }
              ].map((group, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 pl-12">{group.description}</p>
                  <ul className="space-y-2 pl-12">
                    {group.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Proven Steel Estimation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A 5-step workflow designed to ensure accuracy, compliance, and efficiency
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
              className="grid lg:grid-cols-5 gap-8 relative z-10"
            >
              {[
                {
                  icon: <Upload className="h-8 w-8" />,
                  title: "Digital Plan Processing",
                  description: "We accept all major digital formats, including DWG, RVT, and PDF, ensuring we can work seamlessly with your existing project plans."
                },
                {
                  icon: <Ruler className="h-8 w-8" />,
                  title: "Accurate Measurement + Expert Validation",
                  description: "Our team performs a meticulous review of the plans, ensuring every measurement is spot-on and cross-checked."
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Compliance Checks",
                  description: "Every estimate is checked to ensure compliance with AISC and IBC standards, essential for regulatory approval."
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Report Delivery",
                  description: "We deliver detailed takeoff reports in Excel, XML, or customized formats, making them easy to integrate into your workflow."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Post-Bid Support",
                  description: "Our RFI support ensures that any questions or clarifications are handled promptly, reducing chances of delays."
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

      {/* Technology Section */}
      <section className="py-20 px-4">
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
                <h2 className="text-3xl font-bold mb-6">Advanced Technology & Expert Validation</h2>
                <p className="text-gray-600 mb-6">
                  We integrate cutting-edge software with seasoned expertise to deliver unmatched precision in steel estimation.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Early error detection with specialized tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>3-tier quality assurance process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Integration with Tekla, SDS/2, and FabSuite</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Error-Detection: Our team uses specialized tools to detect errors early</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>3-Tier QA Process: Multi-step quality assurance including BIM validation</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Our Technology
                </Button>
              </div>
              <div className="bg-gray-100 flex items-center justify-center p-8">
                <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200 w-full max-w-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <Scale className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Quality Metrics</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Accuracy Rate</span>
                      <span className="font-medium">99.8%</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Average Time Savings</span>
                      <span className="font-medium">40 hours/project</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-medium text-green-600">15%</span>
                    </div>
                    <div className="pt-2 text-sm text-gray-500">
                      Based on data from over 1,000 completed projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Sector-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored steel estimation services for diverse construction sectors
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { 
                icon: <Building2 className="h-6 w-6" />, 
                name: "Commercial", 
                desc: "Office buildings & retail spaces",
                details: "From office buildings to retail spaces, we provide highly detailed estimates for structural steel framing, decking, and other key components."
              },
              { 
                icon: <Factory className="h-6 w-6" />, 
                name: "Industrial", 
                desc: "Factories & warehouses",
                details: "In the industrial sector, we focus on large-scale projects such as factories, warehouses, and power plants."
              },
              { 
                icon: <Building2 className="h-6 w-6" />, 
                name: "Infrastructure", 
                desc: "Bridges & towers",
                details: "For complex infrastructure projects like bridges and towers, we provide precise steel takeoffs that ensure safety and compliance."
              },
              { 
                icon: <Warehouse className="h-6 w-6" />, 
                name: "Specialized", 
                desc: "Seismic retrofits & technical",
                details: "We specialize in seismic retrofits and other highly technical projects that require deep engineering understanding."
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-600">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.desc}</p>
                <p className="text-gray-500 text-sm">{industry.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Assurance Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Client Assurance and Support Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing peace of mind with our Bid-Win Guarantee, rush service options, and flexible pricing models.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Check className="h-6 w-6" />,
                title: "Bid-Win Precision Guarantee",
                description: "If our estimates result in a lost bid, we offer a refund. We are dedicated to ensuring our estimates are as accurate as possible to help you win your bids."
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Rush Service Capability",
                description: "Need an estimate quickly? We offer 24-hour rush services to meet your tight deadlines without compromising on the quality or accuracy of the estimate."
              },
              {
                icon: <Calculator className="h-6 w-6" />,
                title: "Flexible Pricing",
                description: "We offer flexible pricing models, including per-project pricing or retainer options, to suit your business needs and project requirements."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInItem}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
              >
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common inquiries about our steel estimation services
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
                question: "How do you handle missing details in drawings?",
                answer: "Our team flags missing or unclear details during validation and ensures that any gaps are addressed through RFIs before proceeding."
              },
              {
                question: "How are drawing revisions handled mid-estimate?",
                answer: "We quickly incorporate revisions and update material and labor quantities to reflect changes, ensuring estimate accuracy throughout."
              },
              {
                question: "Can you provide region-specific labor rates?",
                answer: "Yes, we customize labor rates based on your project's location to provide accurate, region-specific estimates."
              },
              {
                question: "Do you offer assembly-level takeoffs?",
                answer: "Yes, we provide detailed assembly-level takeoffs that break down complex steel systems into manageable components."
              },
              {
                question: "What's included in RFI support?",
                answer: "Our RFI support includes answering questions and resolving issues related to the estimate, materials, or project scope, ensuring clarity and preventing delays."
              },
              {
                question: "How quickly can you deliver an estimate?",
                answer: "For standard projects, we typically deliver within 3-5 business days. We also offer 24-hour rush services for urgent projects."
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
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Steel Estimates?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get precise steel takeoffs with our Bid-Win Guarantee and start saving on your next project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/estimate">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 shadow-lg">
                  Start Your Pilot Takeoff <Upload className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-blue-700 hover:text-white px-8">
                Schedule Consultation
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

export default StructuralSteel;