import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Chatbot from "@/components/Chatbot";
import { Store, CheckCircle, ShoppingBag, Building2, BarChart, Users, Clock, Shield } from "lucide-react";

const RetailConstruction = () => {
  return (
    <>
      <Helmet>
        <title>Retail Construction Estimating Services | Paradise Estimating</title>
        <meta
          name="description"
          content="Expert estimating services for retail construction projects. From shopping centers to standalone stores, we provide accurate cost estimates for all retail construction needs."
        />
      </Helmet>

      <div className="min-h-screen bg-[#f8f9fa]">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
          <div className="container mx-auto px-4 py-20 max-w-7xl relative z-10">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center mb-20"
            >
              <Store className="h-20 w-20 mx-auto mb-8 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
                Retail Construction Estimating
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Precise Cost Estimation for Retail & Commercial Projects
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4 max-w-7xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              <div className="space-y-8">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  Paradise Estimating delivers comprehensive cost estimation services for retail construction projects. 
                  From shopping centers to standalone stores, our expert team provides accurate estimates that account 
                  for all aspects of retail construction, ensuring your project stays on budget and meets its objectives.
                </p>

                <div className="bg-blue-50 rounded-xl p-10 shadow-lg border border-blue-100">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-800">Retail Project Types</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Shopping Centers & Malls</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Standalone Retail Stores</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Restaurant & Food Service Spaces</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-blue-50 rounded-xl p-10 shadow-lg border border-blue-100">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-800">Our Expertise</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Detailed cost breakdowns for all construction elements</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Specialized retail finish and fixture estimating</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">MEP systems cost analysis for retail environments</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-10 shadow-lg border border-blue-100">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-800">Quality Assurance</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our estimating process includes rigorous quality checks and industry benchmarking 
                    to ensure accurate, reliable cost estimates for your retail construction project. 
                    We stay current with market trends and retail-specific requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {[
                {
                  icon: <ShoppingBag className="h-8 w-8 mb-4 text-blue-600" />,
                  title: "Retail-Specific Estimating",
                  description: "Specialized cost estimation for retail environments and fixtures."
                },
                {
                  icon: <Building2 className="h-8 w-8 mb-4 text-blue-600" />,
                  title: "Tenant Improvements",
                  description: "Detailed estimates for retail space modifications and upgrades."
                },
                {
                  icon: <BarChart className="h-8 w-8 mb-4 text-blue-600" />,
                  title: "Value Engineering",
                  description: "Cost optimization solutions without compromising quality."
                },
                {
                  icon: <Users className="h-8 w-8 mb-4 text-blue-600" />,
                  title: "Stakeholder Coordination",
                  description: "Effective communication with all project stakeholders."
                },
                {
                  icon: <Clock className="h-8 w-8 mb-4 text-blue-600" />,
                  title: "Timeline Integration",
                  description: "Cost estimates aligned with project schedules."
                },
                {
                  icon: <Shield className="h-8 w-8 mb-4 text-blue-600" />,
                  title: "Risk Assessment",
                  description: "Comprehensive risk analysis and mitigation strategies."
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-blue-50 rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold mb-4 text-blue-800">{service.title}</h3>
                    <p className="text-gray-700 text-lg">{service.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-16 shadow-lg text-white"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Start Your Retail Project</h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-100">
                Ready to get accurate cost estimates for your retail construction project? 
                Contact us today for a detailed consultation.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-12 py-6 rounded-xl hover:scale-105 transition-transform duration-200">
                  Get Your Estimate
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
      <Chatbot />
    </>
  );
};

export default RetailConstruction; 