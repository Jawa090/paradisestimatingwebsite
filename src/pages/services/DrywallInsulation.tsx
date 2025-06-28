import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { ArrowRight, Upload, FileText, Building2, Home, Layers, Package, Check, Clock, Zap, Ruler, FileInput, FileOutput, Thermometer, Volume2, FireExtinguisher, Droplets } from 'lucide-react';
import { Helmet } from "react-helmet";

const DrywallInsulation = () => {
  const features = [
    { icon: <Clock className="h-6 w-6" />, title: "Fast Turnaround", description: "Most projects completed within 24-48 hours" },
    { icon: <Zap className="h-6 w-6" />, title: "Cost-Saving Accuracy", description: "Precise estimates prevent over-ordering" },
    { icon: <Ruler className="h-6 w-6" />, title: "Software Compatibility", description: "Works with Planswift, Bluebeam, AutoCAD" },
    { icon: <FileOutput className="h-6 w-6" />, title: "Detailed Reports", description: "Includes sq. footage, materials & labor" },
    { icon: <Building2 className="h-6 w-6" />, title: "Industry Experience", description: "Residential to commercial projects" },
    { icon: <Check className="h-6 w-6" />, title: "Quality Guarantee", description: "Double-checked by senior estimators" }
  ];

  const processSteps = [
    { icon: <FileInput className="h-8 w-8" />, title: "Upload Your Plans", description: "Submit PDF, DWG, or Revit files" },
    { icon: <Ruler className="h-8 w-8" />, title: "We Analyze & Measure", description: "Precise quantification of all materials" },
    { icon: <FileOutput className="h-8 w-8" />, title: "Receive Your Report", description: "Formatted for your estimating software" }
  ];

  const drywallServices = [
    { icon: <FireExtinguisher className="h-5 w-5" />, text: "Fire-rated drywall (Type X)" },
    { icon: <Droplets className="h-5 w-5" />, text: "Moisture-resistant (green/blue board)" },
    { icon: <Volume2 className="h-5 w-5" />, text: "Soundproof drywall systems" },
    { icon: <Layers className="h-5 w-5" />, text: "Metal stud framing & track" }
  ];

  const insulationServices = [
    { icon: <Thermometer className="h-5 w-5" />, text: "Fiberglass batts (R-13 to R-38)" },
    { icon: <Zap className="h-5 w-5" />, text: "Spray foam (open/closed cell)" },
    { icon: <Package className="h-5 w-5" />, text: "Rigid foam boards (XPS, EPS, polyiso)" },
    { icon: <Volume2 className="h-5 w-5" />, text: "Mineral wool & acoustic insulation" }
  ];

  const faqs = [
    {
      question: "What's included in a drywall takeoff report?",
      answer: "Our reports detail gypsum board quantities, framing materials, joint compound, tape, and labor estimates with square footage breakdowns."
    },
    {
      question: "How do you calculate insulation requirements?",
      answer: "We analyze your project layout, required R-values per zone, and insulation type to generate precise material quantities."
    },
    {
      question: "Can you work with my estimating software?",
      answer: "Yes! We deliver reports compatible with Planswift, Bluebeam, AutoCAD, and most major estimating platforms."
    },
    {
      question: "What's your typical turnaround time?",
      answer: "Standard projects: 24-48 hours. Rush services available for same-day delivery (additional fees apply)."
    }
  ];

  const industries = [
    { icon: <Home className="h-8 w-8" />, title: "Residential Contractors", description: "Custom homes, renovations, multi-family" },
    { icon: <Building2 className="h-8 w-8" />, title: "Commercial Builders", description: "Office buildings, retail spaces" },
    { icon: <Layers className="h-8 w-8" />, title: "Insulation Subcontractors", description: "All insulation types" },
    { icon: <Package className="h-8 w-8" />, title: "Drywall Suppliers", description: "Bulk material quantification" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <Helmet>
        <title>Drywall and Insulation Takeoff Services for Commercial and Residential Projects</title>
        <meta
          name="description"
          content="Fast and accurate drywall and insulation takeoff to streamline your material ordering and budgeting."
        />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 leading-tight">
              Precision Drywall & Insulation Takeoffs
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              Eliminate guesswork with professional estimating services that save time and reduce material waste.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Get Your Free Sample Takeoff</h3>
              <p className="text-lg mb-6">See our detailed reporting format with no obligation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 shadow-md">
                    Upload Plans <Upload className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 border-blue-300 text-blue-700 hover:bg-blue-50">
                  View Sample <FileText className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Contractors Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by builders and suppliers for accurate, reliable material quantification
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <div className="text-blue-600">{feature.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Drywall Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Layers className="h-8 w-8 mr-3 text-blue-600" />
                    Drywall Takeoffs
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Comprehensive estimates for all drywall systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {drywallServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                          <div className="text-blue-600">{service.icon}</div>
                        </span>
                        <span>{service.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-medium mb-2 text-blue-800">Typical Project</h4>
                    <p className="text-sm text-blue-700">
                      <strong>2,500 sq.ft. residence:</strong> Includes drywall, metal framing, and finishing materials with labor estimates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Insulation Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Thermometer className="h-8 w-8 mr-3 text-blue-600" />
                    Insulation Takeoffs
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Energy-efficient solutions with precise material counts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {insulationServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                          <div className="text-blue-600">{service.icon}</div>
                        </span>
                        <span>{service.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-100">
                    <h4 className="font-medium mb-2 text-green-800">Sample Calculation</h4>
                    <p className="text-sm text-green-700">
                      <strong>R-30 Attic Insulation:</strong> 1,200 sq.ft. requires 40 bags of blown cellulose (30lb bags at 12" depth).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Simple 3-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get accurate takeoffs without the hassle
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"></div>
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className=" md:block absolute left-1/2 -translate-x-1/2 top-0 -mt-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <Card className="h-full text-center pt-10 md:pt-6 pb-8 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent>
                      <div className="flex justify-center mb-4">
                        <div className="bg-primary/10 p-4 rounded-full">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our takeoff services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-md transition-shadow border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by professionals across the construction industry
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-md transition-shadow border-gray-100">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Streamline Your Estimating?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Get precise drywall and insulation takeoffs delivered fast, so you can focus on building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 shadow-md">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 shadow-sm">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DrywallInsulation;