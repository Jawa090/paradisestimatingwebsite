import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, User, Building2, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Your <span className="text-gold">Free Estimate?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get accurate construction estimates in 24-48 hours. Our expert team is ready to help you with your next project.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us Now</p>
                    <p className="text-gold">+1 (234) 567-8900</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gold">info@paradiseestimating.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/upload-plan">
                  <Button size="lg" className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold px-8 py-3">
                    Upload Plans
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy px-8 py-3">
                    View All Services
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-navy mb-6 text-center">
                Get Your Free Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy font-semibold mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy font-semibold mb-2">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">
                      <Building2 className="inline h-4 w-4 mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-navy font-semibold mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="quantity-takeoff">Quantity Takeoff</option>
                    <option value="cost-estimation">Cost Estimation</option>
                    <option value="construction-management">Construction Management</option>
                    <option value="specialized-estimating">Specialized Estimating</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-navy font-semibold mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold py-3 text-lg"
                >
                  Get Free Quote Now
                </Button>
                
                <p className="text-center text-sm text-gray-600">
                  We'll respond within 15 minutes during business hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;