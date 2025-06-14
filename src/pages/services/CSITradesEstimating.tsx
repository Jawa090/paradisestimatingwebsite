import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Shovel, 
  Building2, 
  Construction, 
  Hammer, 
  Umbrella, 
  Wrench, 
  Zap,
  PaintBucket,
  CheckCircle,
  Clock,
  Database,
  BarChart,
  Building
} from "lucide-react";

const CSITradesEstimating = () => {
  const tradeCategories = [
    {
      icon: <Shovel className="h-12 w-12 text-white" />,
      title: "Sitework & Earthwork",
      description: "Site preparation and earthwork form the foundation of every successful construction project. We specialize in excavation, grading, utility installation, and site improvements.",
      trades: [
        "Excavation Contractors & Site Preparation",
        "Concrete & Asphalt Paving",
        "Utility Installation & Grading",
        "Landscaping & Hardscaping"
      ]
    },
    {
      icon: <Building2 className="h-12 w-12 text-white" />,
      title: "Structural & Foundation",
      description: "Comprehensive estimates for all aspects of structural construction, from deep foundations to complex steel erection.",
      trades: [
        "Concrete & Masonry Contractors",
        "Steel Erectors & Metal Building",
        "Reinforcing Steel & Precast Concrete",
        "Foundation & Form Contractors"
      ]
    },
    {
      icon: <Construction className="h-12 w-12 text-white" />,
      title: "Framing & Carpentry",
      description: "Detailed estimates for rough carpenters, finish carpenters, and cabinet makers who create custom solutions.",
      trades: [
        "Rough & Finish Carpenters",
        "Cabinet Makers & Millwork",
        "Stair Builders & Deck Construction",
        "Door, Window & Wood Flooring"
      ]
    },
    {
      icon: <Umbrella className="h-12 w-12 text-white" />,
      title: "Roofing & Waterproofing",
      description: "Expert estimates for all roofing systems and waterproofing solutions to protect buildings from the elements.",
      trades: [
        "Roofing & Sheet Metal Workers",
        "Waterproofing & Sealant Specialists",
        "Membrane & Specialty Roofing",
        "Gutter & Drainage Systems"
      ]
    },
    {
      icon: <Wrench className="h-12 w-12 text-white" />,
      title: "Mechanical Services",
      description: "Precise installation and cost planning for all mechanical systems in modern buildings.",
      trades: [
        "Master Plumbers & Contractors",
        "HVAC & Refrigeration",
        "Ductwork & Controls",
        "Boiler & Geothermal Systems"
      ]
    },
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Electrical Services",
      description: "Comprehensive estimates for modern electrical systems and specialized installations.",
      trades: [
        "Licensed Electricians & Contractors",
        "Industrial & Commercial Electrical",
        "Solar & Low Voltage Systems",
        "Security & Fire Alarm Systems"
      ]
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-white" />,
      title: "Interior Finishes",
      description: "Detailed estimates for all aspects of interior finishing and specialized installations.",
      trades: [
        "Flooring Contractors & Tile Setters",
        "Painting & Finishing Specialists",
        "Drywall & Acoustical Contractors",
        "Custom Interior Installation"
      ]
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-yellow-500" />,
      title: "Accurate Estimates",
      description: "Precise calculations based on current market rates"
    },
    {
      icon: <Clock className="h-8 w-8 text-yellow-500" />,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising quality"
    },
    {
      icon: <Database className="h-8 w-8 text-yellow-500" />,
      title: "Comprehensive Database",
      description: "Up-to-date pricing and labor rates"
    },
    {
      icon: <BarChart className="h-8 w-8 text-yellow-500" />,
      title: "Detailed Analysis",
      description: "In-depth cost breakdowns and reports"
    }
  ];

  return (
    <>
      <Helmet>
        <title>CSI Trades Estimating Services | Paradise Estimating</title>
        <meta
          name="description"
          content="Professional construction cost estimation for every trade. Comprehensive CSI trades estimating services covering all aspects of construction."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="bg-white/20 p-4 rounded-full">
                  <FileText className="h-16 w-16 text-yellow-600" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                CSI Trades Estimating Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 mb-8">
                Professional Construction Cost Estimation for Every Trade
              </p>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg">
                  At Paradise Estimating, our comprehensive CSI trades estimating services cover every aspect of construction, from initial site preparation to final finishes. We understand that successful construction projects require accurate construction cost estimating across all divisions, and our experienced team delivers the precision and reliability you need to bid competitively and win profitable work.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Experience Section with Benefits */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <p className="text-gray-700 text-lg mb-8">
                  With decades of combined experience in professional construction estimating, we provide detailed cost breakdowns that help contractors, subcontractors, and developers make informed decisions. Our estimates are based on current market conditions, local labor rates, and up-to-date material pricing, ensuring you have the most accurate information for your project planning and bidding process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trade Categories */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center space-x-3 mb-6">
                <Building className="h-10 w-10 text-yellow-500" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Complete Trade Coverage
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive services span across all construction disciplines, ensuring expert estimation for every aspect of your project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {tradeCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-yellow-400 p-6 flex items-center">
                    <div className="mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                        Key Trades:
                      </h4>
                      <ul className="space-y-2">
                        {category.trades.map((trade, tradeIndex) => (
                          <li key={tradeIndex} className="flex items-center text-gray-700">
                            <span className="text-yellow-500 mr-2">•</span>
                            {trade}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* All-Inclusive Section */}
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 p-3 rounded-full mr-4">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  All-Inclusive CSI Division Estimating
                </h2>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <p className="text-gray-800 text-lg mb-6">
                  Our estimating services go beyond simple material and labor calculations. We provide CSI MasterFormat estimating analysis that includes equipment costs, overhead factors, and risk assessment. Whether you're a general contractor coordinating multiple trades or a specialty contractor focused on one, Paradise Estimating delivers the detailed insight you need.
                </p>
                <p className="text-gray-800 text-lg">
                  Each estimate reflects trade-specific estimating realities like tools, skilled labor, and premium materials, ensuring our clients receive dependable construction trades estimation across all CSI divisions.
                </p>
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <div className="flex items-center justify-center mb-6">
                <Building2 className="h-10 w-10 text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Projects We Estimate
                </h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-700 text-lg mb-6">
                  Paradise Estimating supports a wide range of projects including commercial, residential, industrial, and institutional work. Whether your job requires general requirements estimating or specialized conveying systems estimating, we deliver precision and speed.
                </p>
                <p className="text-gray-700 text-lg">
                  Our expertise in CSI trades estimating stems from working across all CSI divisions and maintaining real-time cost databases. Every estimate includes a full building trades cost analysis—material, labor, equipment, and overhead.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FileText className="h-10 w-10 text-yellow-500" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get Started Today
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Whether your project involves a single CSI division or spans across multiple, Paradise Estimating provides reliable trade estimating services tailored to your needs. Reach out today and discover how our construction cost estimating solutions can help you bid smarter and win more profitable jobs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-8 py-6 h-auto">
                  Contact Our Estimating Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSITradesEstimating; 