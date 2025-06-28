import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { 
  Lightbulb, 
  ClipboardCheck, 
  Home, 
  Building, 
  Factory, 
  School, 
  Activity, 
  Layers, 
  Wrench, 
  FileText, 
  CheckCircle, 
  Clock, 
  BarChart, 
  Database, 
  Package, 
  Phone, 
  Mail, 
  TrendingUp, 
  Users,
  Calculator,
  Target,
  DollarSign,
  LineChart,
  Shield,
  Settings
} from 'lucide-react';

const whyChooseUsItems = [
  {
    icon: <Users className="h-8 w-8 text-green-600 mb-2" />,
    title: 'Proven Experience',
    desc: 'With decades of combined industry knowledge, our estimators bring a deep understanding of cost modeling across project types and markets.'
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-green-600 mb-2" />,
    title: 'Methodological Precision',
    desc: 'We apply proven estimation techniques, use leading software tools, and reference current cost databases to ensure accuracy.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-green-600 mb-2" />,
    title: 'Real-World Cost Awareness',
    desc: 'Our estimates reflect real market conditions, incorporating labor availability, material trends, code implications, and regional cost drivers.'
  },
  {
    icon: <Activity className="h-8 w-8 text-green-600 mb-2" />,
    title: 'Collaborative Approach',
    desc: 'We integrate closely with owners, architects, and engineers, ensuring that our estimates align with both design intent and financial constraints.'
  },
  {
    icon: <FileText className="h-8 w-8 text-green-600 mb-2" />,
    title: 'Full Transparency',
    desc: "You'll receive estimates backed by clear logic, documented assumptions, and open communication every step of the way."
  },
  {
    icon: <Clock className="h-8 w-8 text-green-600 mb-2" />,
    title: 'Reliable Turnaround',
    desc: 'Our streamlined process and dedicated team ensure timely delivery—so your project stays on schedule from the outset.'
  }
];

const ConceptualEstimates = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-navy to-white">
      <Navbar />
      <Helmet>
        <title>Conceptual Construction Estimating for Early-Stage Designs</title>
        <meta
          name="description"
          content="High-level cost estimates based on conceptual drawings and project scope."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Conceptual Estimating Services</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Accurate Cost Forecasting from Vision to Reality
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Accurate Cost Forecasting from Vision to Reality</h2>
            <p className="text-gray-700 mb-6">
              At <span className="font-semibold text-navy">Paradise Estimating</span>, we specialize in delivering reliable conceptual estimating services that empower owners, developers, architects, and contractors to make sound financial decisions early in the project lifecycle. Our expert team converts your initial ideas into data-backed cost forecasts enabling you to move forward confidently with realistic budgets and well-informed planning.
            </p>
            <div className="text-center mt-6">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
                <Link to="/contact">Contact us now for a free consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Conceptual Estimating? */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-navy mb-4">What is Conceptual Estimating?</h2>
          <p className="text-gray-700 mb-6">
            Conceptual estimating is the process of generating preliminary cost assessments based on limited design information during the early planning or pre-design phases. These estimates are essential for guiding high-level decisions and ensuring financial alignment before detailed drawings or specifications are developed.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-navy mb-4 flex items-center">
                <Target className="h-6 w-6 text-green-600 mr-2" />
                Our conceptual estimates enable you to:
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Establish realistic preliminary budgets
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Assess project feasibility and secure financing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Make go/no-go decisions with confidence
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Evaluate design alternatives from a cost perspective
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Plan proactively for contingencies and cost control
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-navy mb-4 flex items-center">
                <Calculator className="h-6 w-6 text-green-600 mr-2" />
                Need a quick, accurate cost forecast for your project concept?
              </h3>
              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 w-full">
                <Link to="/contact">Contact us now for a free consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Conceptual Estimating Services */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Our Conceptual Estimating Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-navy mb-2 flex items-center">
                <Calculator className="h-6 w-6 text-green-600 mr-2" />
                Pre-Design Cost Analysis
              </h3>
              <p className="text-gray-700">We develop early-phase cost models using sketches, concepts, and basic program requirements. Our estimates are grounded in historical data, market trends, and benchmarking to ensure credibility.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-navy mb-2 flex items-center">
                <Target className="h-6 w-6 text-green-600 mr-2" />
                Feasibility Studies
              </h3>
              <p className="text-gray-700">We evaluate project viability by comparing estimated costs against available funding, while identifying major cost drivers and recommending value engineering opportunities.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-navy mb-2 flex items-center">
                <DollarSign className="h-6 w-6 text-green-600 mr-2" />
                Budget Development
              </h3>
              <p className="text-gray-700">Our team prepares detailed budget structures that include hard and soft costs—covering construction, permitting, design fees, site development, and contingency allowances.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-navy mb-2 flex items-center">
                <LineChart className="h-6 w-6 text-green-600 mr-2" />
                Design Option Cost Comparisons
              </h3>
              <p className="text-gray-700">When considering multiple design schemes, we provide side-by-side cost comparisons to help you select the most cost-effective and value-driven alternative.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-navy mb-2 flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-2" />
                Cost Risk Analysis
              </h3>
              <p className="text-gray-700">We assess cost uncertainties, scope gaps, and escalation risks, offering strategic recommendations for mitigating financial exposure.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-navy mb-2 flex items-center">
                <Settings className="h-6 w-6 text-green-600 mr-2" />
                Value Engineering Support
              </h3>
              <p className="text-gray-700">We assist in identifying materials, systems, and design modifications that lower costs without compromising performance, function, or quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                <Building className="h-6 w-6 text-green-600 mr-2" />
                Commercial Construction
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Corporate offices and mixed-use buildings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Retail stores and shopping centers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Warehouses and logistics facilities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Hospitals, clinics, and medical buildings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Educational institutions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Hotels, resorts, and entertainment venues
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                <Home className="h-6 w-6 text-green-600 mr-2" />
                Residential Development
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Single-family homes and custom residences
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Multi-family and apartment complexes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Luxury housing developments
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Renovations, remodels, and additions
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                <Layers className="h-6 w-6 text-green-600 mr-2" />
                Infrastructure & Civil Projects
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Transportation hubs and roadways
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Water, sewer, and utility infrastructure
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Public and municipal works
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Site development and grading
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                <Lightbulb className="h-6 w-6 text-green-600 mr-2" />
                Specialized & Emerging Sectors
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Historic preservation and adaptive reuse
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Sustainable/LEED-certified projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Laboratories and cleanrooms
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Data centers and technology facilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Estimating Process */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Our Estimating Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: '1. Project Discovery',
                desc: 'We begin with a detailed consultation to understand your goals, vision, scope, and constraints.',
                icon: <Target className="h-8 w-8 text-green-600 mb-2" />
              },
              { 
                step: '2. Data Collection',
                desc: 'Our team gathers available design inputs, programmatic requirements, and site-specific details.',
                icon: <Database className="h-8 w-8 text-green-600 mb-2" />
              },
              { 
                step: '3. Market Analysis',
                desc: 'We assess current material prices, labor rates, and regional cost fluctuations relevant to your location.',
                icon: <LineChart className="h-8 w-8 text-green-600 mb-2" />
              },
              { 
                step: '4. Estimate Development',
                desc: 'Using industry-standard tools and cost databases, we build a detailed and structured conceptual estimate.',
                icon: <Calculator className="h-8 w-8 text-green-600 mb-2" />
              },
              { 
                step: '5. Review & Refinement',
                desc: 'We walk you through the estimate, validate assumptions, and incorporate feedback as designs evolve.',
                icon: <ClipboardCheck className="h-8 w-8 text-green-600 mb-2" />
              },
              { 
                step: '6. Comprehensive Reporting',
                desc: 'Final deliverables include detailed line-item breakdowns, assumptions, exclusions, escalation projections, and risk considerations.',
                icon: <FileText className="h-8 w-8 text-green-600 mb-2" />
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 flex flex-col items-center text-center">
                {item.icon}
                <h3 className="font-bold text-navy mb-2">{item.step}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Why Choose Paradise Estimating?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {whyChooseUsItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md">
                {item.icon}
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-center text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate Accuracy Classifications */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Estimate Accuracy Classifications</h2>
          <p className="text-gray-700 mb-6 text-center">
            We provide conceptual estimates aligned with industry-recognized AACE (Association for the Advancement of Cost Engineering) classifications:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center">
              <div className="bg-navy text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">5</span>
              </div>
              <h3 className="font-bold text-navy mb-2">Class 5 (±50%)</h3>
              <p className="text-gray-700 text-center">Early concept; used for high-level feasibility and rough budgeting</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center">
              <div className="bg-navy text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-bold text-navy mb-2">Class 4 (±30%)</h3>
              <p className="text-gray-700 text-center">Based on schematic designs; suitable for early funding and design direction</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center">
              <div className="bg-navy text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-navy mb-2">Class 3 (±20%)</h3>
              <p className="text-gray-700 text-center">Derived from design development documents; ideal for refining project scope and cost validation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start with Confidence</h2>
          <p className="text-lg text-gray-200 mb-8">
            Turn uncertainty into clarity with our professional conceptual estimating services. Whether you're planning a new development or evaluating a potential investment, Paradise Estimating delivers the financial insight you need to proceed with confidence.
          </p>
          <div className="mb-8">
            <span className="block text-white font-semibold mb-4">What We Offer:</span>
            <ul className="text-gray-200 space-y-2">
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                Free initial project consultation
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                Customized service proposals
              </li>
              <li className="flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                Flexible engagement options (one-time estimates or ongoing consulting)
              </li>
            </ul>
          </div>
          <div className="space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
              <Link to="/contact">Start your project on solid ground</Link>
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4">
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default ConceptualEstimates; 