import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Settings, FileText, Ruler, CheckCircle, Clock, Building2 } from "lucide-react";

const SpecializedServices = () => {
  return (
    <>
      <Helmet>
        <title>Specialized Estimating Services | Paradise Estimating</title>
        <meta
          name="description"
          content="Expert specialized estimating services with precision and expertise. CSI trades estimating, renovation cost estimating, and value engineering solutions."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section with vibrant yellow gradient */}
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Specialized Estimating Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 mb-8">
                Precision. Expertise. Results.
              </p>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <p className="text-gray-700 text-lg">
                  When your project demands more than standard estimating, Paradise Estimating delivers specialized solutions that set industry benchmarks. Our certified professionals combine cutting-edge technology with deep construction expertise to provide unmatched accuracy for complex projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* CSI Trades Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-400 p-4 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">CSI Trades Estimating Services</h2>
                  <p className="text-gray-600">
                    Master every aspect of your construction project with our comprehensive CSI MasterFormat-compliant cost estimating. From foundation to finish, we deliver precise material takeoff and labor analysis across all 50 building divisions.
                  </p>
                </div>
              </div>

              {/* Renovation Cost Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-400 p-4 flex items-center justify-center">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Renovation Cost Estimating</h2>
                  <p className="text-gray-600">
                    Transform challenging remodeling projects into profitable ventures. Our renovation estimating specialists excel at navigating unknown conditions, historic building requirements, and complex construction phasing.
                  </p>
                </div>
              </div>

              {/* Value Engineering Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-400 p-4 flex items-center justify-center">
                  <Settings className="h-12 w-12 text-white" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Value Engineering</h2>
                  <p className="text-gray-600">
                    Unlock hidden project value with our proven construction cost reduction strategies. Our systematic cost analysis approach consistently delivers 15-35% project cost savings while maintaining quality standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-xl shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Industry Leaders Choose Paradise Estimating
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                  <CheckCircle className="h-10 w-10 text-yellow-500 mb-4" />
                  <p className="text-gray-800 font-semibold">Certified Estimating Professionals</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                  <Settings className="h-10 w-10 text-yellow-500 mb-4" />
                  <p className="text-gray-800 font-semibold">Advanced Digital Technology</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                  <Ruler className="h-10 w-10 text-yellow-500 mb-4" />
                  <p className="text-gray-800 font-semibold">Proven Track Record</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
                  <Clock className="h-10 w-10 text-yellow-500 mb-4" />
                  <p className="text-gray-800 font-semibold">24-48 Hour Turnaround</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact our cost estimating specialists today for professional construction estimating services.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg px-8 py-6 h-auto">
                  Contact Our Specialists
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecializedServices; 