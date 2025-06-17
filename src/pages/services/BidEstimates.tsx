import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { DollarSign, Users, ClipboardCheck, Home, Building, Factory, School, Activity, Layers, Wrench, FileText, CheckCircle, Clock, BarChart, Database, Package, Phone, Mail, Upload } from 'lucide-react';

const BidEstimates = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-navy to-white">
      <Navbar />
      <Helmet>
        <title>Bid Estimating Services | Paradise Estimating</title>
        <meta name="description" content="Accurate, competitive construction bid estimates for contractors, developers, and builders. Win more projects with Paradise Estimating's precision bid estimating services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Construction Bid Estimating Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accurate Bid Estimates That Win Projects
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-xl shadow-lg p-8">
            <p className="text-gray-800 text-lg mb-4">
              At <span className="font-semibold text-navy">Paradise Estimating</span>, we specialize in delivering precise and competitive construction bid estimates that empower contractors, developers, and builders to win profitable projects.
            </p>
            <p className="text-gray-800 text-lg">
              Whether you're preparing for a lump sum bid, unit price proposal, or a design-build tender, our detailed estimates are designed to give you a competitive edge while maintaining accuracy, transparency, and cost control.
            </p>
            <div className="mt-6 text-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our construction bid estimating services are ideal for:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Users className="h-8 w-8 text-green-600 mx-auto" />, label: 'General Contractors' },
              { icon: <Wrench className="h-8 w-8 text-green-600 mx-auto" />, label: 'Subcontractors' },
              { icon: <Home className="h-8 w-8 text-green-600 mx-auto" />, label: 'Home Builders' },
              { icon: <Activity className="h-8 w-8 text-green-600 mx-auto" />, label: 'Remodeling Companies' },
              { icon: <Building className="h-8 w-8 text-green-600 mx-auto" />, label: 'Developers' },
              { icon: <ClipboardCheck className="h-8 w-8 text-green-600 mx-auto" />, label: 'Architects & Engineers' },
              { icon: <Package className="h-8 w-8 text-green-600 mx-auto" />, label: 'Construction Managers' },
              { icon: <Database className="h-8 w-8 text-green-600 mx-auto" />, label: 'Cost Consultants' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                {item.icon}
                <span className="mt-3 text-navy font-semibold text-center">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-navy mb-4">Ready to Win More Bids with Precision Estimates?</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Get a fast, reliable bid estimate today and see why contractors across the country trust Paradise Estimating. Your next winning bid starts here.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              <Link to="/contact">Request a Bid Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Bid Estimating Services Include</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive estimating solutions tailored to your project needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Layers className="h-6 w-6 text-green-600" />, title: 'Material Quantity Takeoffs', desc: 'Precise measurements for all construction materials' },
              { icon: <Users className="h-6 w-6 text-green-600" />, title: 'Labor & Equipment Costing', desc: 'Accurate labor hours and equipment requirements' },
              { icon: <ClipboardCheck className="h-6 w-6 text-green-600" />, title: 'Subcontractor Scope Analysis', desc: 'Clear delineation of subcontractor responsibilities' },
              { icon: <FileText className="h-6 w-6 text-green-600" />, title: 'Preliminary & Final Bid Estimates', desc: 'Both conceptual and detailed bid packages' },
              { icon: <DollarSign className="h-6 w-6 text-green-600" />, title: 'Budget Preparation', desc: 'Comprehensive budget development' },
              { icon: <BarChart className="h-6 w-6 text-green-600" />, title: 'Cost Control', desc: 'Ongoing cost monitoring solutions' },
              { icon: <Activity className="h-6 w-6 text-green-600" />, title: 'Value Engineering', desc: 'Cost-saving alternatives analysis' },
              { icon: <CheckCircle className="h-6 w-6 text-green-600" />, title: 'Bid Review Reports', desc: 'Competitive bid comparison analysis' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="mr-4 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Types of Projects We Estimate</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expertise across all construction sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Home className="h-8 w-8 text-green-600" />, 
                title: 'Residential Projects', 
                description: 'Paradise Estimating provides detailed bid estimates for residential construction, including single-family homes, multi-family units, and custom-built properties. We understand the unique challenges of residential builds and deliver precise estimates to support accurate budgeting and competitive bidding.'
              },
              { 
                icon: <Building className="h-8 w-8 text-green-600" />, 
                title: 'Commercial Construction', 
                description: 'Our team prepares accurate bid estimates for commercial projects such as office buildings, retail developments, shopping centers, warehouses, and hospitality facilities. We help commercial contractors win bids with detailed cost breakdowns tailored to project scope and timelines.'
              },
              { 
                icon: <Factory className="h-8 w-8 text-green-600" />, 
                title: 'Industrial Projects', 
                description: 'We offer specialized estimating services for industrial facilities including factories, manufacturing plants, and distribution centers. Our estimators account for structural systems, utilities, equipment installation, and other industrial requirements to ensure complete and reliable estimates.'
              },
              { 
                icon: <School className="h-8 w-8 text-green-600" />, 
                title: 'Institutional Construction', 
                description: 'Paradise Estimating supports public and private sector clients with estimates for schools, universities, hospitals, government offices, and other institutional buildings. We ensure compliance with regulatory requirements and construction standards specific to these sectors.'
              },
              { 
                icon: <Activity className="h-8 w-8 text-green-600" />, 
                title: 'Renovations & Remodels', 
                description: 'Whether you\'re upgrading interiors, expanding a facility, or performing structural retrofits, we provide comprehensive estimates for renovation and remodeling projects. Our services cover both residential and commercial renovations, ensuring you understand the full scope and cost from the start.'
              },
            ].map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold text-navy ml-3">{project.title}</h3>
                </div>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Paradise Estimating for Bid Estimates?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The competitive advantage you need for successful bidding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                icon: <CheckCircle className="h-8 w-8 text-green-600" />, 
                title: '98% Accuracy Rate', 
                desc: 'Trusted by contractors across the U.S. for precise and reliable estimating' 
              },
              { 
                icon: <BarChart className="h-8 w-8 text-green-600" />, 
                title: '12,000+ Projects Estimated', 
                desc: 'Proven track record across all construction sectors' 
              },
              { 
                icon: <ClipboardCheck className="h-8 w-8 text-green-600" />, 
                title: 'ASTM Standard Compliance', 
                desc: 'We adhere to industry-standard estimating protocols' 
              },
              { 
                icon: <Clock className="h-8 w-8 text-green-600" />, 
                title: 'Fast Turnaround Time', 
                desc: 'Estimates delivered within 24–72 hours based on project size' 
              },
              { 
                icon: <DollarSign className="h-8 w-8 text-green-600" />, 
                title: 'Affordable Pricing', 
                desc: 'Flexible packages that fit your budget, without compromising on quality' 
              },
              { 
                icon: <Package className="h-8 w-8 text-green-600" />, 
                title: 'Confidential & Secure', 
                desc: 'NDAs and data protection protocols in place for every project' 
              },
            ].map((item, idx) => (
              <div key={idx} className="flex bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="mr-4">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Tools Section */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Tools & Formats We Use</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-navy mb-4 flex items-center">
                  <Wrench className="h-6 w-6 text-green-600 mr-2" />
                  Software
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>PlanSwift</li>
                  <li>Bluebeam</li>
                  <li>RSMeans</li>
                  <li>Sage Estimating</li>
                  <li>OST</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-navy mb-4 flex items-center">
                  <FileText className="h-6 w-6 text-green-600 mr-2" />
                  Deliverables
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Excel spreadsheets</li>
                  <li>PDF reports</li>
                  <li>CSI MasterFormat estimates</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-navy mb-4 flex items-center">
                  <Package className="h-6 w-6 text-green-600 mr-2" />
                  Integration
                </h3>
                <p className="text-gray-700">
                  Estimates tailored to match your internal formats or bid submission requirements
                </p>
              </div>
            </div>
            
            {/* Process Section */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">The Process: From Drawings to Winning Bids</h2>
              <div className="space-y-6">
                {[
                  { 
                    icon: <Upload className="h-6 w-6 text-green-600" />, 
                    title: 'Share Drawings/Specs', 
                    desc: 'Upload your project plans, scope, and bid instructions' 
                  },
                  { 
                    icon: <ClipboardCheck className="h-6 w-6 text-green-600" />, 
                    title: 'Get a Quote', 
                    desc: 'We evaluate your requirements and provide a proposal with turnaround time' 
                  },
                  { 
                    icon: <FileText className="h-6 w-6 text-green-600" />, 
                    title: 'Receive the Estimate', 
                    desc: 'Detailed, well-organized bid estimate ready for submission' 
                  },
                  { 
                    icon: <CheckCircle className="h-6 w-6 text-green-600" />, 
                    title: 'Ongoing Support', 
                    desc: 'We assist with revisions, clarifications, and post-bid reviews as needed' 
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start bg-gray-50 rounded-lg p-6">
                    <div className="mr-4 mt-1">{step.icon}</div>
                    <div>
                      <h3 className="font-bold text-navy text-lg mb-1">{step.title}</h3>
                      <p className="text-gray-700">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Started with Paradise Estimating Today</h2>
          <p className="text-xl text-gray-200 mb-8">
            Let Paradise Estimating be your trusted partner in pre-construction success. Our accurate bid estimates help you compete confidently and land more profitable jobs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy text-lg px-8 py-4">
              <Link to="/contact">Upload Project Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default BidEstimates;