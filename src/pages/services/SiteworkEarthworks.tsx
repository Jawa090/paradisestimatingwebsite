import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Upload, 
  Ruler, 
  Check, 
  FileText, 
  Shovel, 
  Truck, 
  Mountain, 
  Construction, 
  Droplet,
  Map,
  Satellite,
  Leaf,
  Wrench,
  Zap,
  Layers
} from 'lucide-react';

const SiteworkEarthworks: React.FC = () => {
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

  const services = [
    {
      name: 'Sitework Estimating',
      icon: <Construction className="h-6 w-6 text-blue-600" />,
      items: [
        'Clearing & Grubbing',
        'Site Demolition',
        'Erosion Control',
        'Temporary Utilities',
        'Site Drainage',
        'Paving & Surfacing'
      ]
    },
    {
      name: 'Earthworks Estimating',
      icon: <Mountain className="h-6 w-6 text-blue-600" />,
      items: [
        'Cut/Fill Calculations',
        'Mass Excavation',
        'Trenching & Backfill',
        'Soil Stabilization',
        'Rock Removal',
        'Compaction Testing'
      ]
    },
    {
      name: 'Landscaping Estimating',
      icon: <Leaf className="h-6 w-6 text-blue-600" />,
      items: [
        'Hardscape Installation',
        'Irrigation Systems',
        'Planting & Sodding',
        'Retaining Walls',
        'Outdoor Lighting',
        'Amenity Installation'
      ]
    },
    {
      name: 'Utilities Estimating',
      icon: <Wrench className="h-6 w-6 text-blue-600" />,
      items: [
        'Underground Electrical',
        'Water/Sewer Lines',
        'Gas Line Routing',
        'Stormwater Systems',
        'Telecommunication Conduits',
        'Utility Trenching'
      ]
    }
  ];

  const technologyAdvantages = [
    {
      icon: <Satellite className="h-8 w-8 text-blue-600" />,
      title: 'Trimble Earthworks Integration',
      description: "State-of-the-art technology for precise, reliable estimates."
    },
    {
      icon: <Map className="h-8 w-8 text-blue-600" />,
      title: 'Drone Survey Data Processing',
      description: "Fast, accurate aerial data for your earthworks project."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: 'GIS Mapping',
      description: "Advanced terrain analysis for accurate site planning and cost predictions."
    },
    {
      icon: <Layers className="h-8 w-8 text-blue-600" />,
      title: 'BIM Integration',
      description: "Utility conflict detection in 3D to avoid disruptions."
    },
    {
      icon: <Droplet className="h-8 w-8 text-blue-600" />,
      title: 'Xeriscaping Optimization',
      description: "Special pricing for water-efficient landscapes."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Trenchless Technology',
      description: "Innovative methods to reduce excavation costs and time."
    }
  ];

  const valueProps = [
    {
      icon: <Truck className="h-6 w-6 text-blue-600" />,
      title: "Avoid Costly Over-Excavation",
      description: "GPS-based takeoffs ensure precise earthworks calculations, reducing waste and unnecessary expenses."
    },
    {
      icon: <Mountain className="h-6 w-6 text-blue-600" />,
      title: "Region-Specific Pricing",
      description: "We specialize in soil analysis to account for local soil conditions (clay, sand, bedrock), keeping your project within budget."
    },
    {
      icon: <Construction className="h-6 w-6 text-blue-600" />,
      title: "Equipment Cost Forecasting",
      description: "From bulldozers to graders, we offer detailed equipment cost analysis, helping you plan effectively for every stage of earthworks."
    },
    {
      icon: <Leaf className="h-6 w-6 text-blue-600" />,
      title: "Seasonal Planting Considerations",
      description: "Optimize plant selection and irrigation to align with your project's budget and environmental needs."
    },
    {
      icon: <Droplet className="h-6 w-6 text-blue-600" />,
      title: "Stormwater Management",
      description: "Comprehensive solutions for effective water drainage and retention systems."
    },
    {
      icon: <Check className="h-6 w-6 text-blue-600" />,
      title: "Coordinated Estimates",
      description: "Avoid costly delays and conflicts between landscaping and utilities with our integrated approach."
    }
  ];

  const stats = [
    { value: "98%", label: "Accuracy Rate" },
    { value: "48h", label: "Average Turnaround" },
    { value: "500+", label: "Projects Completed" },
    { value: "25%", label: "Cost Savings" }
  ];

  const specializedCapabilities = [
    "Xeriscaping Cost Optimization: Solutions for cost-effective, sustainable landscaping.",
    "BIM Integration: Utility conflict detection in 3D to avoid disruptions.",
    "Trenchless Technology Pricing: Innovative methods to reduce excavation costs and time.",
    "Seasonal Planting Cost Factors: Accurate pricing based on seasonal variations.",
    "Utility Depth Coordination: Precise routing reduces costs and avoids future conflicts.",
    "Irrigation Zoning: Smart planning for water efficiency and cost savings."
  ];

  return (
    <>
      <Helmet>
        <title>Precision Sitework & Earthworks Cost Estimating | Paradise Estimating</title>
        <meta name="description" content="Comprehensive sitework, earthworks, landscaping and utilities estimating services with GPS-based takeoffs, region-specific pricing, and equipment cost forecasting." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                  Precision Sitework & Earthworks
                </span>
                <br />
                <span className="text-gray-800">Cost Estimating Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive sitework and earthworks estimating services with cutting-edge technology for precise, cost-effective takeoffs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 shadow-lg">
                    Get Started <Upload className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 border-blue-300 text-blue-700 hover:bg-blue-50">
                  View Sample Report
                </Button>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInItem}
                  className="bg-white p-6 rounded-xl shadow-sm text-center border border-blue-100"
                >
                  <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Precision Sitework & Earthworks Cost Estimating</h2>
              <div className="max-w-5xl mx-auto text-lg text-gray-700 text-left space-y-4">
                <p>
                  At Paradise Estimating, we offer comprehensive sitework and earthworks estimating services to help ensure your construction project gets off to a solid start. Our team uses cutting-edge estimating technology to provide precise, cost-effective takeoffs for site grading, excavation, and foundation phases of your build.
                </p>
                <p>
                  With our accurate, professional estimates, you can avoid costly delays and unforeseen issues.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-blue-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Comprehensive Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert estimating services for all aspects of sitework, earthworks, landscaping and utilities
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInItem}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                  </div>
                  <ul className="grid gap-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <Check className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Unique Value Proposition</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why choose our sitework and earthworks estimating services
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  variants={fadeInItem}
                  className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100"
                >
                  <div className="bg-white p-3 rounded-full w-fit mb-4 border border-blue-200">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{prop.title}</h3>
                  <p className="text-gray-600">{prop.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 px-4 bg-blue-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Technology Advantage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge tools for precise earthworks and utilities estimation
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {technologyAdvantages.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={fadeInItem}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100"
                >
                  <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{tech.title}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Specialized Capabilities */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Specialized Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced features that set our services apart
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                variants={fadeInItem}
                className="bg-blue-50 rounded-xl p-8 border border-blue-100"
              >
                <ul className="grid md:grid-cols-2 gap-4">
                  {specializedCapabilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Landscaping & Utilities Section */}
        <section className="py-20 px-4 bg-blue-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Landscaping & Utilities Estimating Services</h2>
              <div className="max-w-5xl mx-auto text-lg text-gray-700 text-left space-y-4">
                <p>
                  Our landscaping and utilities estimating services are designed to ensure both the beauty and functionality of your development. From hardscape installation and irrigation systems to stormwater management and utility trenching, we provide comprehensive, accurate estimates that cover both surface landscaping and essential underground infrastructure.
                </p>
                <p>
                  We deliver coordinated estimates to prevent conflicts between landscaping elements and utility installations, ensuring smooth project execution from start to finish.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 mt-12"
            >
              <motion.div
                variants={fadeInItem}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100"
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Service Integration Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Coordinated Estimates</h4>
                      <p className="text-gray-600">Avoid costly delays and conflicts between landscaping and utilities.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Seasonal Planting Considerations</h4>
                      <p className="text-gray-600">Optimize plant selection and irrigation to align with your project's budget and environmental needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Xeriscaping Optimization</h4>
                      <p className="text-gray-600">Special pricing for water-efficient landscapes, helping you meet sustainability goals within budget.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInItem}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-blue-100"
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Visual Demonstrations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Before/After Landscaping Cost Comparisons</h4>
                      <p className="text-gray-600">Real-world examples illustrating cost-saving improvements.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Utility Depth Coordination Diagrams</h4>
                      <p className="text-gray-600">Visuals showing how precise utility routing reduces costs and avoids future conflicts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Irrigation Zoning Cost Breakdown</h4>
                      <p className="text-gray-600">Illustrating savings through smart irrigation planning and zoning.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto max-w-7xl text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-white">Stop Guessing Ground Conditions</h2>
              <p className="text-xl text-blue-100 mb-8">Get engineered estimates backed by cutting-edge technology</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 shadow-lg">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white/10">
                  Instant Chat Quote
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SiteworkEarthworks;