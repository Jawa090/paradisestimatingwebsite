import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Eye, FileDown, Building2, Calculator, FileText, Settings, Monitor, ClipboardList, Users,
  HardHat, UtilityPole, Construction, Container, PaintBucket, Hammer, Briefcase, Wrench,
  PackageOpen, Package2, PackageCheck, PackageSearch, PackagePlus, Package,
  CheckCircle2, Trophy, Shield, ArrowRight, ChevronDown
} from 'lucide-react';
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
import Portfolio from '@/components/Portfolio';

const Home = () => {
  const animatedElementsRef = useRef<HTMLDivElement>(null);

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
            className="mb-8"
          >
            <div className="inline-block mb-6 px-6 py-2 bg-gold/20 rounded-full text-gold font-semibold">
              Precision Estimates Delivered Fast
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Stop Guessing, Start Winning with
              <br />
              <span className="text-gold">Paradise Construction Estimating Services</span>
              <span className="animate-ping">|</span>
            </h1>
            <p className="text-white text-lg mt-6 max-w-3xl mx-auto">
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
                <Button size="lg" className="bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-6">
                  Explore Services
                </Button>
              </Link>
              <Link to="/estimate-download">
                <Button size="lg" variant="outline" className="bg-transparent hover:bg-white text-white hover:text-navy border border-white text-lg px-8 py-6">
                  Download Sample
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

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gold" />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Trusted by 2000+ Projects</h2>
          <p className="text-lg mb-8">We combine 15+ years of expertise with industry-leading tools like Planswift and Bluebeam, delivering unparalleled accuracy and insights.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Precision That Wins Bids</h3>
              <p>Tired of losing bids due to delays or guesswork? Our estimates are tailored to give you the competitive edge.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Insurance-Certified Expertise</h3>
              <p>Turn project roadblocks into resolutions with IRC-compliant damage reports trusted by insurers.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Seamless Tech Integration</h3>
              <p>Your tools, our expertise. Effortlessly incorporate our estimates into your Planswift, Bluebeam, and Excel workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fix Costly Estimation Errors with Our Tailored Solutions</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">Estimation errors can be costly and time-consuming, often leading to missed opportunities and project delays. At Paradise Estimating, we provide tailored solutions to tackle these issues head-on.</p>
            <p className="text-lg mb-6">If bid delays are costing you contracts, our rapid 24-hour estimate delivery ensures you never miss a chance to win.</p>
            <p className="text-lg">Insurers denying your claims? Our IRC-certified reports are trusted by major insurers, helping you secure quick settlements and avoid prolonged disputes.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Upload Plans</h3>
              <p>Email or upload drawings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Expert Analysis</h3>
              <p>Get trade-specific experts on your case</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Quality Check</h3>
              <p>Senior estimators double-check every detail</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Receive Your Estimate</h3>
              <p>Enjoy bid-ready docs within 24–48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Construction Estimating</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">At Paradise Estimating, we provide precise and reliable estimates for all stages of your construction project. Our expert team ensures that your projects are fully supported with accurate data, helping you plan, budget, and execute with confidence.</p>
            
            <h3 className="text-2xl font-bold mb-6">Comprehensive Estimation Services</h3>
            <p className="text-lg mb-8">Our team offers a comprehensive suite of estimation services, covering everything from material takeoffs to complete project budgeting. By using industry-leading software like Planswift and Bluebeam, we ensure that all aspects of your project are accurately captured.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-2">Material Takeoffs with Accurate Quantities</h4>
                <p>We provide a detailed list of all materials needed for your project, ensuring precise budgeting and procurement.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Detailed Cost Breakdowns by CSI Division</h4>
                <p>Our estimates are organized by the Construction Specifications Institute (CSI) divisions, making it easier to understand and manage costs across different phases.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Labor and Equipment Cost Estimation</h4>
                <p>We estimate labor and equipment requirements, factoring in rates, quantities, and expected durations to provide you with an accurate total cost.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Project Timeline and Phasing Recommendations</h4>
                <p>Our estimates include clear recommendations for project phases and timelines, ensuring you stay on schedule from start to finish.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Site Preparation and Earthwork Analysis</h4>
                <p>We analyze site conditions to provide an accurate estimate for site preparation and earthwork, ensuring your project's foundation is properly accounted for.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;