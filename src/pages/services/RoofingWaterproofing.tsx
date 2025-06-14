import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Upload, 
  FileText, 
  Building2, 
  Home, 
  Layers, 
  Package, 
  Shield, 
  Droplet,
  Ruler,
  Clock,
  CheckCircle,
  BarChart2,
  HardHat,
  Download,
  ChevronRight
} from 'lucide-react';

const RoofingWaterproofing = () => {
  const faqs = [
    {
      question: "How do you ensure accuracy in your takeoffs?",
      answer: "Our estimators follow strict quantity surveying practices and double-review each takeoff to deliver 98%+ accuracy."
    },
    {
      question: "Can you handle rush projects with tight deadlines?",
      answer: "Yes. We offer a 24-hour rush service to help you meet last-minute deadlines without sacrificing quality."
    },
    {
      question: "What formats do you deliver your takeoffs in?",
      answer: "Excel, PDF, and custom formats tailored to your workflow."
    },
    {
      question: "What types of projects do you support?",
      answer: "We estimate residential, commercial, and industrial roofing and waterproofing projects of all sizes."
    },
    {
      question: "Do you include labor and waste in your estimates?",
      answer: "Yes. Our reports include precise labor calculations and waste factors based on material and job complexity."
    },
    {
      question: "Can I review a sample before ordering?",
      answer: "Yes. You can download a sample takeoff to see our format and detail."
    },
    {
      question: "Do you work with general contractors and developers?",
      answer: "Absolutely. We support GCs, developers, and design professionals in addition to specialty contractors."
    },
    {
      question: "What file types can I upload?",
      answer: "We accept PDF, DWG, and Revit files for maximum flexibility."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-28 px-4 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Precision <span className="text-blue-600">Roofing & Waterproofing</span> Estimates
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Trusted by 500+ contractors nationwide to save time, reduce errors, and win more projects with fast, accurate takeoffs.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4">Get Your First Takeoff 10% Off</h3>
              <p className="text-lg mb-6">Upload your plans for a free, no-obligation estimate.</p>
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Upload Plans <Upload className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "24-48h", label: "Average Turnaround", icon: <Clock className="h-8 w-8 text-blue-600" /> },
              { value: "98%", label: "Accuracy Guarantee", icon: <CheckCircle className="h-8 w-8 text-blue-600" /> },
              { value: "500+", label: "Contractors Served", icon: <HardHat className="h-8 w-8 text-blue-600" /> },
              { value: "0%", label: "Change Order Risk", icon: <Shield className="h-8 w-8 text-blue-600" /> }
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

      {/* Roofing Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Comprehensive Roofing Estimating</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Precise takeoffs for all roofing systems and materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial Roofing",
                icon: <Building2 className="h-10 w-10 text-blue-600" />,
                items: [
                  "Membrane systems (TPO, EPDM, PVC)",
                  "Built-up roofing (BUR) systems",
                  "Metal roofing quantification",
                  "Roof insulation calculations",
                  "Flashing & edge metal details"
                ]
              },
              {
                title: "Residential Roofing",
                icon: <Home className="h-10 w-10 text-blue-600" />,
                items: [
                  "Asphalt shingle measurements",
                  "Tile & slate roofing",
                  "Metal roofing systems",
                  "Synthetic roofing materials",
                  "Gutter & downspout systems"
                ]
              },
              {
                title: "Industrial Roofing",
                icon: <Layers className="h-10 w-10 text-blue-600" />,
                items: [
                  "Chemical-resistant coatings",
                  "HVAC penetrations",
                  "Solar-ready roof systems",
                  "High-temperature membranes",
                  "Walkway & safety systems"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start pl-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waterproofing Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Waterproofing Estimating Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Detailed takeoffs for all waterproofing applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Foundation Waterproofing",
                icon: <Droplet className="h-10 w-10 text-blue-600" />,
                items: [
                  "Liquid-applied membranes",
                  "Sheet membrane systems",
                  "Drainage board calculations",
                  "Protection course quantification",
                  "Crack injection systems"
                ]
              },
              {
                title: "Balcony & Terrace",
                icon: <Home className="h-10 w-10 text-blue-600" />,
                items: [
                  "Sloped waterproofing systems",
                  "Pedestrian traffic coatings",
                  "Drainage system layouts",
                  "Expansion joint details",
                  "Surface protection layers"
                ]
              },
              {
                title: "Below-Grade Systems",
                icon: <Layers className="h-10 w-10 text-blue-600" />,
                items: [
                  "Bentonite waterproofing",
                  "Composite membrane systems",
                  "Positive-side applications",
                  "Negative-side applications",
                  "Blindside waterproofing"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600">{service.title}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start pl-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Who We Serve</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Customized estimating solutions for every professional.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Roofing Contractors",
                description: "Precise material & labor calculations"
              },
              {
                icon: <Droplet className="h-8 w-8 text-blue-600" />,
                title: "Waterproofing Specialists",
                description: "System-specific takeoffs"
              },
              {
                icon: <Building2 className="h-8 w-8 text-blue-600" />,
                title: "General Contractors",
                description: "Complete bid packages"
              },
              {
                icon: <Layers className="h-8 w-8 text-blue-600" />,
                title: "Developers",
                description: "Budgeting & feasibility studies"
              }
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{client.title}</h3>
                <p className="text-gray-600">{client.description}</p>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Simple Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get accurate takeoffs in just a few easy steps.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 to-blue-800 transform -translate-x-1/2"></div>
            
            {[
              {
                step: "01",
                title: "Submit Plans",
                description: "Upload your drawings via our secure portal",
                icon: <Upload className="h-6 w-6 text-white" />
              },
              {
                step: "02",
                title: "Receive Quote",
                description: "We'll review and provide pricing within 4 hours",
                icon: <FileText className="h-6 w-6 text-white" />
              },
              {
                step: "03",
                title: "Approval",
                description: "Confirm and we'll begin your takeoff",
                icon: <CheckCircle className="h-6 w-6 text-white" />
              },
              {
                step: "04",
                title: "Delivery",
                description: "Receive your comprehensive report",
                icon: <Download className="h-6 w-6 text-white" />
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
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="bg-blue-100 p-6 rounded-xl inline-flex items-center justify-center">
                  <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-12 text-center"
          >
            <FileText className="h-14 w-14 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Free Sample Report</h2>
            <p className="text-xl text-gray-600 mb-8">
              Download a sample roofing takeoff to see our level of detail and accuracy.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="/sample-roofing-takeoff.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Sample Report
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Your questions — answered</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-3 text-gray-800">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Accurate Estimates?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Start winning more bids with our precise roofing and waterproofing takeoffs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary px-8 py-4">
                  Speak With an Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoofingWaterproofing;