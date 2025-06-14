import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart2, 
  Clock, 
  Shield, 
  Wrench,
  Building,
  Users,
  Home,
  PenTool,
  FileText,
  Upload,
  CheckCircle2,
  Trophy,
  Clock3,
  Ruler,
  Layout,
  HardHat,
  DollarSign,
  ClipboardCheck
} from 'lucide-react';

const QuantityTakeoff = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-28 px-4 bg-gradient-to-br from-primary/5 via-white to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Precision <span className="text-primary">Quantity Takeoff</span> Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Accurate material and labor quantification delivered with unmatched speed to keep your projects on budget and schedule.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-8 py-4 border-2 border-gray-300 hover:border-primary hover:text-primary">
                Request Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Years Experience", icon: <Trophy className="h-8 w-8 text-primary" /> },
              { value: "2,500+", label: "Projects Completed", icon: <ClipboardCheck className="h-8 w-8 text-primary" /> },
              { value: "98%", label: "Client Satisfaction", icon: <CheckCircle2 className="h-8 w-8 text-primary" /> },
              { value: "24-48h", label: "Average Turnaround", icon: <Clock3 className="h-8 w-8 text-primary" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Why Accurate Takeoffs Matter</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Material costs account for 40-60% of total project expenses. Precise quantity takeoffs are the foundation of successful project budgeting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cost Control",
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                description: "Prevent budget overruns with accurate material quantification",
                benefits: [
                  "Eliminate waste from over-ordering",
                  "Avoid costly last-minute purchases",
                  "Optimize cash flow"
                ]
              },
              {
                title: "Bid Accuracy",
                icon: <FileText className="h-10 w-10 text-primary" />,
                description: "Win more contracts with precise, competitive bids",
                benefits: [
                  "Reduce under-bidding risks",
                  "Increase profit margins",
                  "Build client trust"
                ]
              },
              {
                title: "Project Efficiency",
                icon: <HardHat className="h-10 w-10 text-primary" />,
                description: "Streamline your construction process",
                benefits: [
                  "Accurate scheduling",
                  "Reduced material handling",
                  "Minimized delays"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Comprehensive Takeoff Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We cover all CSI divisions with specialized expertise in each trade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Trades",
                icon: <Layout className="h-10 w-10 text-primary" />,
                items: [
                  "Site Work Takeoff",
                  "Masonry Takeoff",
                  "Concrete Takeoff",
                  "Drywall Takeoff",
                  "Painting Takeoff",
                  "Door/Window Takeoff"
                ]
              },
              {
                title: "Enclosure Systems",
                icon: <Home className="h-10 w-10 text-primary" />,
                items: [
                  "Roofing Takeoff",
                  "Lumber Takeoff",
                  "Millwork Takeoff",
                  "Cabinet Takeoff",
                  "Insulation Takeoff"
                ]
              },
              {
                title: "MEP Specialties",
                icon: <Wrench className="h-10 w-10 text-primary" />,
                items: [
                  "HVAC Takeoff",
                  "Plumbing Takeoff",
                  "Electrical Takeoff",
                  "Mechanical Takeoff",
                  "Structural Steel Takeoff"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 hover:border-primary/30 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start pl-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Tailored Solutions for Every Professional</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Customized quantity takeoff services designed for your specific role in the construction process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="h-10 w-10 text-primary" />,
                title: "Developers",
                description: "Minimize financial risk with accurate feasibility estimates",
                color: "bg-blue-100 text-blue-800"
              },
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "General Contractors",
                description: "Eliminate bid uncertainty with precise takeoffs",
                color: "bg-green-100 text-green-800"
              },
              {
                icon: <Wrench className="h-10 w-10 text-primary" />,
                title: "Subcontractors",
                description: "Bid faster and win more projects",
                color: "bg-orange-100 text-orange-800"
              },
              {
                icon: <Home className="h-10 w-10 text-primary" />,
                title: "Homeowners",
                description: "Avoid contractor markup surprises",
                color: "bg-purple-100 text-purple-800"
              },
              {
                icon: <PenTool className="h-10 w-10 text-primary" />,
                title: "Architects",
                description: "Design confidently within budget constraints",
                color: "bg-red-100 text-red-800"
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Vendors",
                description: "Maximize sales with precise material quantities",
                color: "bg-teal-100 text-teal-800"
              }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mr-4">
                      {client.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{client.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{client.description}</p>
                  <ul className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Sample benefit {i} for {client.title.toLowerCase()}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`px-6 py-3 ${client.color} text-sm font-medium`}>
                  Customized solutions available
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Streamlined Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Simple steps to get your accurate quantity takeoffs quickly and efficiently.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-blue-600 transform -translate-x-1/2"></div>
            
            {[
              {
                step: "01",
                title: "Submit Your Plans",
                description: "Upload drawings via our secure portal or email",
                icon: <Upload className="h-8 w-8 text-white" />
              },
              {
                step: "02",
                title: "Receive Quote",
                description: "We review and provide a detailed quote within 4 hours",
                icon: <FileText className="h-8 w-8 text-white" />
              },
              {
                step: "03",
                title: "Approval & Payment",
                description: "Confirm the scope and make secure payment",
                icon: <DollarSign className="h-8 w-8 text-white" />
              },
              {
                step: "04",
                title: "Takeoff in Progress",
                description: "Our experts perform detailed quantification",
                icon: <Ruler className="h-8 w-8 text-white" />
              },
              {
                step: "05",
                title: "Delivery",
                description: "Receive your comprehensive takeoff report",
                icon: <CheckCircle className="h-8 w-8 text-white" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 h-full">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-primary/10 p-6 rounded-xl inline-flex items-center justify-center">
                    <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Accurate Takeoffs?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get started today and receive 15% off your first project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-8 py-4">
                  Request Free Quote
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Typically respond within 1 business hour
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantityTakeoff;