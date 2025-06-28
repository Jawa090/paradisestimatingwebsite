import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Settings, 
  BarChart, 
  Clock, 
  CheckCircle, 
  Building2, 
  LineChart,
  Lightbulb,
  Wrench,
  Calculator,
  Users,
  FileText,
  ArrowUpRight,
  Target,
  GitBranch,
  Building,
  Factory,
  Home,
  Hospital,
  Search,
  ListChecks,
  BarChart3,
  Handshake,
  DollarSign,
  TrendingUp
} from "lucide-react";

const ValueEngineering = () => {
  const capabilities = [
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Design-Phase Value Engineering",
      description: "We collaborate with design teams early in the process to identify cost-saving opportunities before they are embedded into construction documents. This early intervention is where cost optimization consulting yields the highest ROI."
    },
    {
      icon: <Calculator className="h-10 w-10 text-white" />,
      title: "Life Cycle Cost Analysis",
      description: "Our experts perform detailed assessments of operational, maintenance, and long-term costs, enabling clients to make informed decisions that deliver savings throughout the facility's life span."
    },
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: "Cost Reduction Strategy & Implementation",
      description: "Using detailed cost-benefit analysis, we evaluate construction alternatives, perform functional decomposition, and offer substitute systems and materials that provide equivalent or enhanced value at a reduced cost."
    },
    {
      icon: <Wrench className="h-10 w-10 text-white" />,
      title: "Constructability & Efficiency Reviews",
      description: "We analyze your project's drawings and specifications to identify field challenges, inefficiencies, and sequencing issues, offering solutions that improve on-site productivity and reduce potential rework."
    },
    {
      icon: <GitBranch className="h-10 w-10 text-white" />,
      title: "Alternative Systems & Material Evaluation",
      description: "We explore feasible alternatives to conventional materials and systems, presenting construction cost optimization strategies tailored to your schedule, budget, and performance objectives."
    }
  ];

  const industries = [
    {
      icon: <Building className="h-8 w-8 text-yellow-500" />,
      title: "Commercial Construction",
      description: "Office complexes, retail developments, and mixed-use spaces"
    },
    {
      icon: <Home className="h-8 w-8 text-yellow-500" />,
      title: "Residential Projects",
      description: "Multifamily developments, townhomes, and high-end custom homes"
    },
    {
      icon: <Hospital className="h-8 w-8 text-yellow-500" />,
      title: "Healthcare & Institutional",
      description: "Hospitals, schools, and municipal infrastructure"
    },
    {
      icon: <Factory className="h-8 w-8 text-yellow-500" />,
      title: "Industrial & Utility",
      description: "Manufacturing plants, warehouses, and energy systems"
    }
  ];

  const approach = [
    {
      icon: <Search className="h-8 w-8 text-yellow-500" />,
      title: "Project Assessment",
      description: "We conduct a comprehensive review of project plans, scope, and cost drivers."
    },
    {
      icon: <ListChecks className="h-8 w-8 text-yellow-500" />,
      title: "Function & Cost Analysis",
      description: "Each building system and component is evaluated to determine its necessity, cost-efficiency, and alternatives."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
      title: "Presentation of Recommendations",
      description: "Our team delivers a detailed report outlining proposed changes, cost savings, and impacts on design, timeline, and performance."
    },
    {
      icon: <Handshake className="h-8 w-8 text-yellow-500" />,
      title: "Client Review & Decision Support",
      description: "We assist in evaluating the trade-offs and support implementation through cost validation and coordination with your project team."
    }
  ];

  const impacts = [
    {
      icon: <DollarSign className="h-8 w-8 text-yellow-500" />,
      title: "Lower Construction Costs",
      description: "Clients typically save between 10%–25% through design optimization and material substitution."
    },
    {
      icon: <Wrench className="h-8 w-8 text-yellow-500" />,
      title: "Improved Constructability",
      description: "Fewer RFIs, smoother workflows, and reduced rework during construction."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-yellow-500" />,
      title: "Better Lifecycle Outcomes",
      description: "Reduced operational and maintenance costs, energy efficiency gains, and extended service life of materials and systems."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Value Engineering Services for Cost-Effective Construction Solutions</title>
        <meta
          name="description"
          content="Maximize value and minimize cost with professional value engineering services."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 p-4 rounded-full">
                  <Settings className="h-16 w-16 text-yellow-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Value Engineering Services for Construction
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 mb-8">
                Strategic Cost Optimization without Compromising Design or Performance
              </p>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg">
                  At Paradise Estimating, we specialize in delivering expert-led value engineering services that help developers, architects, and contractors reduce costs, enhance performance, and optimize building efficiency — all while preserving the integrity of your project's design. With a deep understanding of construction economics and practical field experience, our team of qualified consultants provides actionable recommendations that result in measurable cost savings.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* What Is Value Engineering Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center justify-center mb-8">
                <LineChart className="h-12 w-12 text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">
                  What Is Value Engineering in Construction?
                </h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-700 text-lg mb-6">
                  Value Engineering (VE) is a disciplined, systematic methodology used to improve the value of a construction project by analyzing its functions and identifying cost-effective alternatives. The goal is to reduce unnecessary costs while maintaining — or improving — the required performance, quality, and safety.
                </p>
                <p className="text-gray-700 text-lg">
                  At Paradise Estimating, we apply this process through a rigorous evaluation of systems, materials, and methods, ensuring that every dollar spent contributes meaningfully to the project's overall value.
                </p>
              </div>
            </div>

            {/* Capabilities Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <Wrench className="h-10 w-10 text-yellow-500" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Value Engineering Capabilities
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-yellow-400 p-6 flex items-center">
                      <div className="mr-4">
                        {capability.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center justify-center mb-8">
                <CheckCircle className="h-12 w-12 text-white mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Why Choose Paradise Estimating?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Building2 className="h-8 w-8 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold">Expertise Across Project Types</h3>
                  </div>
                  <p className="text-gray-700">With over 12,000 successfully completed estimates, we bring unmatched industry insight to every engagement.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <BarChart className="h-8 w-8 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold">Proven Cost Optimization</h3>
                  </div>
                  <p className="text-gray-700">Our clients regularly achieve 10%–20% in cost savings through strategic value engineering initiatives.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold">Certified Professionals</h3>
                  </div>
                  <p className="text-gray-700">Our team includes experienced cost engineers and value engineering consultants trained in industry standards.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold">Transparent Process</h3>
                  </div>
                  <p className="text-gray-700">We work closely with all stakeholders to ensure practical and cost-effective recommendations.</p>
                </div>
              </div>
            </div>

            {/* Industries Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <Factory className="h-10 w-10 text-yellow-500" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Industries We Serve
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <GitBranch className="h-10 w-10 text-yellow-500" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    A Structured Approach to Cost Optimization
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {approach.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-yellow-100 p-4 rounded-full mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-xl shadow-lg p-8 mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <TrendingUp className="h-10 w-10 text-white" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    The Measurable Impact of Value Engineering
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {impacts.map((impact, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      {impact.icon}
                      <h3 className="text-xl font-semibold ml-3">{impact.title}</h3>
                    </div>
                    <p className="text-gray-700">{impact.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <ArrowUpRight className="h-10 w-10 text-yellow-500" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Start Saving Today with a Tailored Value Engineering Consultation
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                If your project requires smarter budgeting, greater efficiency, or a second look at material or system selection, let our expert team help you realize real, quantifiable savings.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-8 py-6 h-auto">
                  Contact Our Value Engineering Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValueEngineering; 