import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Upload, 
  Check, 
  FileText,
  Home,
  Building,
  Factory,
  School,
  Landmark,
  Activity,
  Anchor,
  Layers,
  Ruler,
  HardHat,
  Wrench,
  Zap,
  Clock,
  DollarSign,
  Scale,
  TrendingUp,
  Calculator,
  ClipboardCheck,
  Leaf,
  Phone,
  Mail
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const CostEstimation = () => {
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

  const whyChooseUs = [
    {
      icon: <HardHat className="h-6 w-6 text-green-600" />,
      title: "Trade-Specialist Expertise",
      description: "Each estimator is a CSI division specialist—sitework, concrete, metals, MEP, millwork & cabinetry, and more."
    },
    {
      icon: <Scale className="h-6 w-6 text-green-600" />,
      title: "Standards-Driven Accuracy",
      description: "We follow AACE International and AIQS best-practice protocols for dependable quantities and pricing."
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Fast Turnarounds",
      description: "Most estimates delivered within 24–48 hours without sacrificing depth or detail."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: "Scalable Support",
      description: "Outsource a single bid or your entire estimating department—only pay for what you need."
    }
  ];

  const services = [
    {
      name: "Preliminary / Budget Estimates",
      icon: <Calculator className="h-6 w-6 text-green-600" />,
      description: "Early-stage ROM and Class 5–3 budgets that test feasibility and set cost parameters."
    },
    {
      name: "Detailed Estimates",
      icon: <ClipboardCheck className="h-6 w-6 text-green-600" />,
      description: "Comprehensive cost breakdowns with detailed quantities, unit pricing, and complete scope coverage."
    },
    {
      name: "Bid Estimates",
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      description: "Competitive bid preparation with detailed analysis of costs, markups, and bid strategy."
    },
    {
      name: "Conceptual Estimates",
      icon: <Layers className="h-6 w-6 text-green-600" />,
      description: "Early project phase estimates based on conceptual designs and historical data."
    },
    {
      name: "Labour & Equipment Analysis",
      icon: <Wrench className="h-6 w-6 text-green-600" />,
      description: "Detailed breakdown of labor costs, equipment requirements, and productivity rates."
    }
  ];

  const csiDivisions = [
    { number: "02", name: "Sitework & Earthwork", description: "excavation, grading, utilities" },
    { number: "03", name: "Concrete", description: "foundations, flatwork, tilt-up, precast" },
    { number: "04", name: "Masonry", description: "CMU, brick, stone" },
    { number: "05", name: "Metals", description: "structural steel, miscellaneous iron, rebar" },
    { number: "06", name: "Wood, Lumber, Millwork & Cabinetry", description: "rough carpentry, finish carpentry, custom casework" },
    { number: "07", name: "Thermal & Moisture Protection", description: "roofing, waterproofing, insulation, stucco" },
    { number: "08", name: "Openings", description: "doors, frames, hardware, windows, curtain wall" },
    { number: "09", name: "Finishes", description: "drywall, ceilings, painting, flooring, specialties" },
    { number: "10-14", name: "Specialties, Equipment & Furnishings", description: "" },
    { number: "21-23", name: "MEP", description: "fire suppression, plumbing, HVAC, electrical, low-voltage" }
  ];

  const projectTypes = [
    { icon: <Home className="h-6 w-6" />, name: "Residential", description: "Custom homes, multi-family, renovations" },
    { icon: <Building className="h-6 w-6" />, name: "Commercial", description: "Offices, retail, restaurants, hospitality" },
    { icon: <Factory className="h-6 w-6" />, name: "Industrial", description: "Warehouses, process plants, manufacturing" },
    { icon: <School className="h-6 w-6" />, name: "Institutional", description: "K-12, higher-ed, healthcare, public safety" },
    { icon: <Landmark className="h-6 w-6" />, name: "Civil & Infrastructure", description: "Roads, bridges, utilities, urban development" },
    { icon: <Activity className="h-6 w-6" />, name: "Sports & Entertainment", description: "Arenas, recreation centers, parks" },
    { icon: <Anchor className="h-6 w-6" />, name: "Marine & Mining", description: "Piers, bulkheads, mine facilities" },
    { icon: <Layers className="h-6 w-6" />, name: "Mixed-Use & High-Rise", description: "Developments" }
  ];

  const softwareTools = [
    "Planswift",
    "Bluebeam",
    "FastPIPE",
    "Trimble",
    "Xactimate",
    "Quest Estimating"
  ];

  const workflowSteps = [
    "Submit Drawings & Specs – Upload via our secure portal or email",
    "Receive Quote – We outline scope, turnaround, and lump-sum fee",
    "Estimate Preparation – Quantities, unit pricing, labor curves, mark-ups",
    "Delivery & Review – Organized Excel or native software file plus PDF marked-up drawings"
  ];

  const benefits = [
    {
      title: "Cost Savings",
      description: "No salaries, software licenses, or training overhead"
    },
    {
      title: "Speed & Capacity",
      description: "Bid more projects without burnout"
    },
    {
      title: "Third-Party Credibility",
      description: "Independent numbers add weight in lender & owner meetings"
    },
    {
      title: "Flexibility",
      description: "Scale up or down as project load fluctuates"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Helmet>
        <title>Construction Cost Estimating Services | Paradise Estimating</title>
        <meta name="description" content="Precise, reliable construction cost estimating services for projects of any size or complexity. Get accurate estimates tailored to your exact scope and timeline." />
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Construction Cost Estimation</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Professional preliminary and budget estimates to help you plan your construction projects effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <Calculator className="h-8 w-8 text-green-600 mr-4" />
                <h2 className="text-2xl font-bold text-navy">Preliminary / Budget Estimates</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Early-stage ROM and Class 5–3 budgets that test feasibility and set cost parameters. Our preliminary estimation service helps you make informed decisions during the planning phase.
              </p>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Conceptual cost modeling',
                    'Budget range development',
                    'Comparative analysis',
                    'Market factor adjustments',
                    'Feasibility assessments',
                    'Risk factor evaluation',
                    'Alternative concept costs',
                    'Funding requirement planning'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Our Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Project Overview',
                      description: 'We gather basic project information and requirements.'
                    },
                    {
                      title: 'Conceptual Analysis',
                      description: 'We develop cost models based on similar projects and market data.'
                    },
                    {
                      title: 'Range Development',
                      description: 'We establish cost ranges with appropriate contingencies.'
                    },
                    {
                      title: 'Budget Recommendations',
                      description: 'We provide budget recommendations for project planning.'
                    }
                  ].map((step, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-navy mb-2">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-navy mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: 'How accurate are preliminary estimates?',
                      answer: 'Preliminary estimates typically range from -25% to +50% accuracy, depending on available information.'
                    },
                    {
                      question: 'What information do you need for preliminary estimates?',
                      answer: 'We need basic project scope, size, location, quality level, and any available conceptual drawings.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-navy mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Link to="/contact" className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Started
                  </Link>
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  <Link to="/contact" className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default CostEstimation;