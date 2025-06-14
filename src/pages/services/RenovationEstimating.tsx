import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home,
  Building2,
  Clock,
  Calculator,
  CheckCircle,
  DollarSign,
  Hammer,
  Wrench,
  Building,
  Store,
  LineChart,
  FileText,
  ArrowUpRight,
  Utensils,
  Droplets,
  History,
  LayoutDashboard,
  Users,
  Briefcase,
  ClipboardCheck,
  ListChecks,
  BarChart3
} from "lucide-react";

const RenovationEstimating = () => {
  const residentialServices = [
    {
      icon: <Utensils className="h-10 w-10 text-white" />,
      title: "Kitchen Renovation Estimates",
      description: "Detailed cost estimates for cabinets, countertops, appliances, and finishes - helping you plan your dream kitchen within budget."
    },
    {
      icon: <Droplets className="h-10 w-10 text-white" />,
      title: "Bathroom Remodel Estimating",
      description: "Comprehensive estimates covering plumbing, tile work, lighting, fixtures, and all finishing touches for your bathroom renovation."
    },
    {
      icon: <Home className="h-10 w-10 text-white" />,
      title: "Full-Home Remodels",
      description: "End-to-end estimating for complete home transformations, additions, and structural modifications."
    },
    {
      icon: <History className="h-10 w-10 text-white" />,
      title: "Historic Home Restoration",
      description: "Specialized cost consulting for historic preservation, period-appropriate materials, and restoration techniques."
    }
  ];

  const commercialServices = [
    {
      icon: <Building className="h-8 w-8 text-yellow-500" />,
      title: "Office Renovations",
      description: "Detailed estimates for office layout changes, finishes, and MEP system upgrades"
    },
    {
      icon: <Store className="h-8 w-8 text-yellow-500" />,
      title: "Retail & Storefront",
      description: "Cost analysis for retail space retrofits, rebranding, and expansion projects"
    },
    {
      icon: <Building2 className="h-8 w-8 text-yellow-500" />,
      title: "Tenant Improvements",
      description: "Comprehensive TI estimating for leased spaces and build-outs"
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-yellow-500" />,
      title: "Medical & Industrial",
      description: "Specialized estimates for medical office renovations and light industrial remodels"
    }
  ];

  const process = [
    {
      icon: <Calculator className="h-8 w-8 text-yellow-500" />,
      title: "Digital Takeoff",
      description: "Advanced software-based quantity takeoffs from your renovation plans"
    },
    {
      icon: <ListChecks className="h-8 w-8 text-yellow-500" />,
      title: "Line-Item Costing",
      description: "Detailed breakdown of materials, labor, and subcontractor costs"
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-yellow-500" />,
      title: "Code Compliance Review",
      description: "Assessment of regulatory requirements and associated costs"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
      title: "Value Engineering",
      description: "Cost optimization recommendations without compromising quality"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Renovation Cost Estimating Services | Paradise Estimating</title>
        <meta
          name="description"
          content="Expert renovation cost estimating services for residential and commercial projects. Get accurate remodeling estimates in 24 hours."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 p-4 rounded-full">
                  <Hammer className="h-16 w-16 text-yellow-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Accurate Renovation Cost Estimating
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 mb-8">
                Get precise home renovation estimates and commercial remodeling costs—delivered in 24 hours
              </p>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg mb-6">
                  At Paradise Estimating, we deliver expert renovation estimating services for both residential and commercial projects. Whether you're remodeling a kitchen or retrofitting a retail space, our cost estimates help you plan with confidence and win profitable jobs.
                </p>
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  <Link to="/contact" className="inline-flex items-center">
                    Get Your Custom Estimate
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center justify-center mb-8">
                <LineChart className="h-12 w-12 text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Struggling with Unpredictable Renovation Budgets?
                </h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-700 text-lg mb-6">
                  Over 80% of remodeling projects go over budget due to unforeseen costs and inaccurate projections. That's where we come in. Our renovation cost estimating experts provide highly accurate, detailed estimates for residential renovations, commercial remodels, and adaptive reuse projects—so you never overpay or underbid.
                </p>
                <p className="text-gray-700 text-lg">
                  We help property owners, investors, and contractors stay within budget and on schedule.
                </p>
              </div>
            </div>

            {/* Residential Services Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <Home className="h-10 w-10 text-yellow-500" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Home Renovation Estimator Services
                  </h2>
                </div>
                <p className="text-xl text-gray-600">Transform your home with clarity and cost control</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {residentialServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-yellow-400 p-6 flex items-center">
                      <div className="mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Services Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <Briefcase className="h-10 w-10 text-yellow-500" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    B2B Renovation Estimating
                  </h2>
                </div>
                <p className="text-xl text-gray-600">Plan smarter and build profitably</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {commercialServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold text-gray-900 ml-3">{service.title}</h3>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center space-x-3 mb-6">
                  <Clock className="h-10 w-10 text-yellow-500" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    How Our Renovation Estimating Process Works
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      {step.icon}
                      <h3 className="text-xl font-semibold text-gray-900 ml-3">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Paradise Estimating?
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start">
                  <CheckCircle className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry-Leading Accuracy</h3>
                    <p className="text-gray-600">Our renovation estimates are up to 98% accurate, based on real-time pricing databases and over 12,000 completed takeoffs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Speed That Wins Bids</h3>
                    <p className="text-gray-600">We deliver complete renovation cost estimates within 24–48 hours, helping you stay competitive.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">No fluff, no guesswork—just clear, itemized retrofit cost estimating and line-by-line clarity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Knowledge</h3>
                    <p className="text-gray-600">From adaptive reuse estimating to modern tenant improvements, our team understands the nuances of complex renovations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenovationEstimating; 