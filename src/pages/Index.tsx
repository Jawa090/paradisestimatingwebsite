import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ServiceCard from '@/components/ServiceCard';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import WhyChooseUs from '@/components/WhyChooseUs';
import EstimateShowcase from '@/components/EstimateShowcase';
import StatsShowcase from '@/components/StatsShowcase';
import ClientsCarousel from '@/components/ClientsCarousel';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

import Portfolio from '@/components/Portfolio';
import { 
  Eye, FileDown, Building2, Calculator, FileText, Settings, Monitor, ClipboardList, Users,
  HardHat, UtilityPole, Construction, Container, PaintBucket, Hammer, Briefcase, Wrench,
  PackageOpen, Package2, PackageCheck, PackageSearch, PackagePlus, Package,
  CheckCircle2, Trophy, Shield, ArrowRight, ChevronDown, Clock, Plus, Minus, X
} from 'lucide-react';

const Index = () => {
  const animatedElementsRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showPopup, setShowPopup] = useState(true);

  // Animation logic for scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (animatedElementsRef.current) {
        const elements = animatedElementsRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            element.classList.add('show');
          }
        });
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    {
      id: 'construction-management',
      title: 'Construction Management',
      description: 'Professional construction management and project delivery services.',
      icon: <Building2 className="h-12 w-12" />,
      count: 7,
      color: 'indigo'
    },
    {
      id: 'quantity-takeoff',
      title: 'Quantity Takeoff Services',
      description: 'Precise material quantity calculations for all construction elements.',
      icon: <Calculator className="h-12 w-12" />,
      count: 10,
      color: 'blue'
    },
    {
      id: 'cost-estimation',
      title: 'Cost Estimation Services',
      description: 'Comprehensive cost analysis and estimation services.',
      icon: <FileText className="h-12 w-12" />,
      count: 8,
      color: 'green'
    },
    {
      id: 'specialized-estimating',
      title: 'Specialized Estimating',
      description: 'Industry-specific and specialized estimation services.',
      icon: <Settings className="h-12 w-12" />,
      count: 4,
      color: 'purple'
    },
    {
      id: 'software-based',
      title: 'Software-Based Services',
      description: 'Digital takeoff and estimation using advanced software.',
      icon: <Monitor className="h-12 w-12" />,
      count: 7,
      color: 'orange'
    },
    {
      id: 'documentation-reporting',
      title: 'Documentation & Reporting',
      description: 'Professional documentation and reporting services.',
      icon: <ClipboardList className="h-12 w-12" />,
      count: 6,
      color: 'red'
    },
    {
      id: 'project-support',
      title: 'Project Support Services',
      description: 'Additional support services for project success.',
      icon: <Users className="h-12 w-12" />,
      count: 5,
      color: 'teal'
    }
  ];

  return (
    <div ref={animatedElementsRef} className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`
            }}
          />
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 pt-32"
          >
            <div className="inline-block mb-10 px-6 py-2 bg-gold/20 rounded-full text-gold font-semibold">
              Precision Estimates Delivered Fast
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Stop Guessing, Start Winning with
              <br />
              <span className="text-gold">Paradise Construction Estimating Services</span>
              <span className="animate-ping">|</span>
            </h1>
            <p className="text-white text-lg mt-8 max-w-3xl mx-auto">
              Bid smarter, build better. With Paradise Estimating, you get trade-specific takeoffs, cost estimates, and damage claim reports in just 24–48 hours. Perfect for contractors, developers, and insurers aiming to win more projects with confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center bg-navy/50 backdrop-blur-sm rounded-xl p-4 border border-gold/20"
              >
                <CheckCircle2 className="h-6 w-6 text-gold mr-3" />
                <span className="text-lg font-semibold text-white">✓ 99% Accuracy Guarantee</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center justify-center bg-navy/50 backdrop-blur-sm rounded-xl p-4 border border-gold/20"
              >
                <Shield className="h-6 w-6 text-gold mr-3" />
                <span className="text-lg font-semibold text-white">✓ IRC-Certified Assessments</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center bg-navy/50 backdrop-blur-sm rounded-xl p-4 border border-gold/20"
              >
                <FileText className="h-6 w-6 text-gold mr-3" />
                <span className="text-lg font-semibold text-white">✓ Free Sample Reports</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
            >
              <Link to="/services">
                <Button size="lg" className="bg-gold hover:bg-white hover:text-gold text-navy text-lg px-8 py-6">
                  Explore Services
                </Button>
              </Link>
              <Link to="/upload-plan">
                <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                  Upload Plan
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 bg-navy/50 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-gold/20"
            >
              <div className="flex items-center justify-center gap-4 text-white">
                <Trophy className="h-6 w-6 text-gold" />
                <span className="text-xl font-semibold">Trusted by 2000+ Projects</span>
              </div>
              <p className="mt-4 text-white/80">
                We combine 15+ years of expertise with industry-leading tools like Planswift and Bluebeam, delivering unparalleled accuracy and insights.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Discount Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 relative shadow-2xl">
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-center">
                <div className="bg-gold text-navy text-2xl font-bold py-2 px-4 rounded-full inline-block mb-4">
                  30% OFF
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">
                  Special Offer!
                </h3>
                <p className="text-gray-600 mb-6">
                  Get 30% off your first 3 estimates. Limited time offer for new customers!
                </p>
                <Link to="/contact">
                  <Button 
                    onClick={() => setShowPopup(false)}
                    className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold px-8 py-3 w-full"
                  >
                    Claim Offer Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </section>
      
      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Trophy className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Precision That Wins Bids</h3>
              <p className="text-gray-600">Tired of losing bids due to delays or guesswork? Our estimates are tailored to give you the competitive edge.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Shield className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Insurance-Certified Expertise</h3>
              <p className="text-gray-600">Turn project roadblocks into resolutions with IRC-compliant damage reports trusted by insurers.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Settings className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Seamless Tech Integration</h3>
              <p className="text-gray-600">Your tools, our expertise. Effortlessly incorporate our estimates into your Planswift, Bluebeam, and Excel workflows.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Fix Costly Estimation Errors with Our Tailored Solutions</h2>
            <div className="space-y-6 text-lg">
              <p>Estimation errors can be costly and time-consuming, often leading to missed opportunities and project delays. At Paradise Estimating, we provide tailored solutions to tackle these issues head-on. If bid delays are costing you contracts, our rapid 24-hour estimate delivery ensures you never miss a chance to win.</p>
              <p>Insurers denying your claims? Our IRC-certified reports are trusted by major insurers, helping you secure quick settlements and avoid prolonged disputes. And if software tools are overwhelming you, we use industry-standard tools like Planswift and Bluebeam, ensuring a seamless integration without the steep learning curve.</p>
              <p>With our solutions, you'll spend less time troubleshooting and more time winning bids, ensuring your projects stay on track and within budget.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-navy mb-2">Upload Plans</h3>
              <p className="text-gray-600">Email or upload drawings</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-navy mb-2">Expert Analysis</h3>
              <p className="text-gray-600">Get trade-specific experts on your case</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-navy mb-2">Quality Check</h3>
              <p className="text-gray-600">Senior estimators double-check every detail</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold text-navy mb-2">Receive Estimate</h3>
              <p className="text-gray-600">Enjoy bid-ready docs within 24–48 hours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Paradise Estimating Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Paradise Estimating</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
              With decades of experience in the construction industry, our team delivers accurate and reliable estimating services tailored to your project needs. We take pride in helping our clients achieve success through precise cost analysis and planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-5xl font-bold text-gold mb-2">2000+</div>
              <div className="text-navy font-semibold text-xl">PROJECTS COMPLETED</div>
              <div className="h-1 w-20 bg-gold mx-auto my-4"></div>
              <p className="text-gray-600">Successfully delivered across multiple construction disciplines</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-5xl font-bold text-gold mb-2">20+</div>
              <div className="text-navy font-semibold text-xl">ESTIMATORS</div>
              <div className="h-1 w-20 bg-gold mx-auto my-4"></div>
              <p className="text-gray-600">Experienced professionals with specialized industry knowledge</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-5xl font-bold text-gold mb-2">85%</div>
              <div className="text-navy font-semibold text-xl">BID WINS</div>
              <div className="h-1 w-20 bg-gold mx-auto my-4"></div>
              <p className="text-gray-600">Helping our clients secure profitable contracts</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="text-5xl font-bold text-gold mb-2">2000+</div>
              <div className="text-navy font-semibold text-xl">HAPPY CUSTOMERS</div>
              <div className="h-1 w-20 bg-gold mx-auto my-4"></div>
              <p className="text-gray-600">Satisfaction and repeat business from our valued clients</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Stats Showcase Section */}
      <StatsShowcase />
      
      {/* Estimate Showcase Section */}
      <EstimateShowcase />

      {/* Comprehensive Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Professional Construction Estimating</h2>
            <p className="text-xl text-gray-600">Get Detailed, Accurate Estimates for Your Construction Projects with Our Professional Estimating Services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Material Takeoffs with Accurate Quantities</h3>
              <p className="text-gray-600">We provide a detailed list of all materials needed for your project, ensuring precise budgeting and procurement.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Detailed Cost Breakdowns by CSI Division</h3>
              <p className="text-gray-600">Our estimates are organized by the Construction Specifications Institute (CSI) divisions, making it easier to understand and manage costs across different phases.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Labor and Equipment Cost Estimation</h3>
              <p className="text-gray-600">We estimate labor and equipment requirements, factoring in rates, quantities, and expected durations to provide you with an accurate total cost.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-navy mb-4">Project Timeline and Phasing</h3>
              <p className="text-gray-600">Our estimates include clear recommendations for project phases and timelines, ensuring you stay on schedule from start to finish.</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Free Quote Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "What is a construction cost estimate?",
                a: "A construction cost estimate is a detailed calculation of the expected expenses for a construction project, including materials, labor, and overhead."
              },
              {
                q: "Why is accurate cost estimating important?",
                a: "Accurate cost estimating helps prevent budget overruns, ensures proper resource allocation, and contributes to project success by aligning financial planning with actual needs."
              },
              {
                q: "How long does it take to receive an estimate?",
                a: "Typically, it takes 3-5 business days to receive a detailed cost estimate, depending on the complexity of the project."
              },
              {
                q: "Will insurers accept your damage reports?",
                a: "Yes. Our IRC-certified formats ensure minimal disputes and are widely accepted by insurers for claims processing."
              },
              {
                q: "What types of projects do you provide estimates for?",
                a: "We provide estimates for a wide range of projects, including residential, commercial, industrial, and infrastructure construction."
              },
              {
                q: "Can you update the estimate if project requirements change?",
                a: "Yes, we can adjust the estimate as project specifications change, ensuring the updated costs reflect any new requirements or unforeseen circumstances."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-navy">{faq.q}</h3>
                  {openFaq === index ? (
                    <Minus className="h-6 w-6 text-gold" />
                  ) : (
                    <Plus className="h-6 w-6 text-gold" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <FileDown className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Free Revisions</h3>
              <p className="text-gray-600">We won't stop until you're satisfied</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Confidential and Secure</h3>
              <p className="text-gray-600">Your data is safe with us</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Clock className="h-12 w-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">15-Minute Response Guarantee</h3>
              <p className="text-gray-600">Need help? We're here around the clock</p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                Start Your Project Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={animatedElementsRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Estimating Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive estimating services across multiple construction disciplines. Our team of experts delivers accurate estimates for projects of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat, idx) => (
              <div
                key={cat.id}
                className="p-6 rounded-xl bg-white border-2 border-gold/20 text-navy hover:shadow-xl hover:border-gold transition-all duration-300 animate-on-scroll transform hover:-translate-y-1"
                style={{ transitionDelay: `${100 * (idx + 1)}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-gold">{cat.icon}</div>
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
                <p className="mb-4 text-gray-600">{cat.description}</p>
                <p className="text-sm font-semibold text-gold">{cat.count} Services Available</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-navy hover:bg-gold text-white font-bold text-lg px-8 py-6 flex items-center gap-2">
                <Eye size={18} />
                View All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                Get Instant Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <ClientsCarousel />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and quote. Our team is ready to help you with your next construction project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-6">
                Get A Quote
              </Button>
            </Link>
            <Link to="/upload-plan">
              <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold text-lg px-8 py-6 shadow-lg transform hover:scale-105 transition-all duration-300">
                Upload Your Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
