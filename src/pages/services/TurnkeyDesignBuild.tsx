import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Chatbot from "@/components/Chatbot";
import {
  Workflow,
  CheckCircle,
  LayoutTemplate,
  DollarSign,
  Layers,
  Ruler,
  Package,
  Wallet
} from "lucide-react";

const services = [
  {
    title: "All-Stage Estimating",
    description: "We deliver cost estimates at every project stage, from conceptual design to final handover.",
    icon: LayoutTemplate,
  },
  {
    title: "Lump Sum Pricing",
    description: "Lump sum pricing with built-in risk provisions ensures budget confidence.",
    icon: DollarSign,
  },
  {
    title: "Cost Breakdown Structure",
    description: "Clear, organized cost allocations with a detailed CBS.",
    icon: Layers,
  },
  {
    title: "Design & Cost Review",
    description: "Ongoing collaboration with design teams for cost-effective solutions.",
    icon: Ruler,
  },
  {
    title: "Package Budgets",
    description: "Scope splits and package budgets to manage subcontractor pricing.",
    icon: Package,
  },
  {
    title: "Cash Flow Management",
    description: "Milestone-based payment tracking for smooth cash flow.",
    icon: Wallet,
  },
];

const TurnkeyDesignBuild = () => {
  return (
    <>
      <Helmet>
        <title>Turnkey & Design-Build Estimating Services | Paradise Estimating</title>
        <meta
          name="description"
          content="Expert estimating services for turnkey, design-build, and EPCM projects. Full lifecycle support from concept to completion with comprehensive cost management."
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
              <Workflow className="h-20 w-20 mx-auto mb-8 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
                Turnkey / Design-Build / EPCM Construction Estimating
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                End-to-End Estimating for Turnkey, Design-Build & EPCM Projects
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
                  Paradise Estimating provides full lifecycle estimating for Turnkey, Design-Build, 
                  and EPCM (Engineering, Procurement, and Construction Management) projects. From 
                  concept to completion, our expert team delivers accurate, detailed estimates to 
                  ensure financial control, optimize costs, and mitigate risks throughout the entire project.
                </p>

                <div className="bg-blue-50 rounded-xl p-10 shadow-lg border border-blue-100">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-800">Turnkey / Design-Build Projects</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">End-to-end construction contracts</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Integrated design-build solutions</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">EPCM projects involving complex, multi-disciplinary coordination</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-blue-50 rounded-xl p-10 shadow-lg border border-blue-100">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-800">Why Choose Paradise Estimating?</h2>
                  <ul className="space-y-6">
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Full Project Lifecycle Support: We offer estimating services from early design stages to final project delivery.</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Proven Risk Management: Our team identifies and mitigates potential risks early in the project.</span>
                    </li>
                    <li className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-lg text-gray-700">Collaborative Approach: We collaborate closely with design and construction teams to ensure costs are optimized.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-10 shadow-lg border border-blue-100">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-800">Risk Mitigation</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We emphasize proactive risk assessment and contingency planning in all our estimating services. 
                    By identifying potential risks early in the process, we help you prepare for unforeseen challenges, 
                    allowing for more accurate budgeting and minimizing the likelihood of cost overruns.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Grid with Icons */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-blue-50 rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                  >
                    <Icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">{service.title}</h3>
                    <p className="text-gray-700 text-lg">{service.description}</p>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-16 shadow-lg text-white"
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Get Started Today</h2>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-100">
                Contact us today to discuss how our turnkey, design-build, and EPCM estimating services 
                can provide clarity, control, and efficiency for your project.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-12 py-6 rounded-xl hover:scale-105 transition-transform duration-200">
                  Contact Us
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

export default TurnkeyDesignBuild;
