import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { Helmet } from "react-helmet";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    bestDescribes: '',
    projectType: '',
    monthlyBids: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare form data
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('companyName', formData.companyName);
    data.append('bestDescribes', formData.bestDescribes);
    data.append('projectType', formData.projectType);
    data.append('monthlyBids', formData.monthlyBids);
    data.append('message', formData.message);
    if (selectedFile) {
      data.append('plan', selectedFile);
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        bestDescribes: '',
        projectType: '',
        monthlyBids: '',
        message: '',
      });
      setSelectedFile(null);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Paradise Estimating for Expert Cost Estimation and Takeoff Services</title>
        <meta
          name="description"
          content="Get in touch with us for a quote, consultation, or more information on our construction estimating services. Fast response and professional support guaranteed."
        />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              opacity: 0.15
            }}
          />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about our estimating services? Reach out to our team for more information or to request a quote.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Two Column Layout */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
            {/* Form Section - Left */}
            <div className="lg:w-3/5 w-full">
              {/* Orange Banner */}
              <div className="bg-gradient-to-r from-gold to-yellow-400 px-8 py-4 text-navy">
                <h1 className="text-2xl font-bold uppercase">Upload Plans Today</h1>
                <p className="text-lg font-semibold">Save 50% on First 3 Estimates</p>
              </div>

              {/* Form Card */}
              <div className="bg-white p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email in one row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Enter Your Name"
                    />
                  </div>
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="email"
                      name="email"
                        type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Email Address"
                    />
                  </div>
                </div>
                
                  {/* Phone/Mobile and Company Name in one row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone/Mobile</label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  
                  {/* What Best Describes You? and Project Type in one row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bestDescribes" className="block text-sm font-medium text-gray-700 mb-1">What Best Describes You?</label>
                      <select
                        id="bestDescribes"
                        name="bestDescribes"
                        value={formData.bestDescribes}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                      >
                        <option value="">- Select -</option>
                        <option value="Contractor">Contractor</option>
                        <option value="Developer">Developer</option>
                        <option value="Architect">Architect</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Builder">Builder</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Which project type you are looking to bid on?</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                      >
                        <option value="">- Select -</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Infrastructure">Infrastructure</option>
                        <option value="Renovation">Renovation</option>
                      </select>
                    </div>
                  </div>

                  {/* Monthly Bids */}
                  <div>
                    <label htmlFor="monthlyBids" className="block text-sm font-medium text-gray-700 mb-1">How many bids do you want to submit per month?</label>
                    <select
                      id="monthlyBids"
                      name="monthlyBids"
                      value={formData.monthlyBids}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">- Select -</option>
                      <option value="1-5">1-5 Bids</option>
                      <option value="6-10">6-10 Bids</option>
                      <option value="11-20">11-20 Bids</option>
                      <option value="20+">20+ Bids</option>
                    </select>
                </div>
                
                  {/* File Upload */}
                <div>
                    <label htmlFor="plan-upload" className="block text-sm font-medium text-gray-700 mb-1">File Upload</label>
                    <label className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                      <Button type="button" className="bg-navy hover:bg-gold text-white px-4 py-2">
                        Choose File
                      </Button>
                      <span className="text-sm text-gray-600">
                        {selectedFile ? selectedFile.name : 'No file chosen'}
                      </span>
                    <input
                      id="plan-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" 
                      />
                    </label>
                  </div>

                  {/* Describe Your Project */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Describe your project</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Please describe your project details..."
                    />
                    </div>

                  {/* Submit Button */}
                  <div>
                  <Button 
                      className="w-full bg-navy hover:bg-gold text-white font-bold text-lg py-6"
                    disabled={isSubmitting}
                    type="submit"
                  >
                      {isSubmitting ? 'Submitting...' : 'Submit Form'}
                  </Button>
                </div>
              </form>
              </div>
            </div>
            
            {/* Contact Info Section - Right */}
            <div className="lg:w-2/5 w-full">
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-navy mb-3">Address :</h3>
                  <p className="text-gray-700">896 Bay Ridge Avenue, Brooklyn, NY 11220</p>
                  </div>
                  
                {/* Contact */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-navy mb-3">Contact :</h3>
                  <p className="text-gray-700">info@paradiseestimating.com</p>
                  <p className="text-gray-700">+1 (718) 719-6171</p>
                  </div>
                  
                {/* Working Hours */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-navy mb-3">Working Hours :</h3>
                  <p className="text-gray-700 mb-2">Mon - Fri: 9 AM - 5 PM</p>
                  <p className="text-gray-700 text-sm">Saturday & Sunday: Closed<br />(You can email/call us on weekends as well for any urgency)</p>
                  </div>
                  
                {/* Service Description */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 leading-relaxed">
                    Reach out to us today by filling out the contact form, and we'll provide you with a detailed quote—including pricing and turnaround time—within just 5 minutes. If you have additional questions, one of our representatives will be in touch within 24 hours to explore how we can collaborate.
                  </p>
              </div>
              
                {/* Slogan */}
                <div className="bg-gradient-to-r from-gold to-yellow-400 p-6 rounded-lg shadow-md">
                  <p className="text-navy font-bold text-lg">
                    Say goodbye to long waits and delays. We deliver on schedule, every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Find Us</h2>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl h-96">
            {/* Google Maps embed */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1620305280574!5m2!1sen!2sca"
              className="absolute inset-0 w-full h-full border-0"
              style={{ filter: "contrast(1.2) opacity(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paradise Estimating Office Location"
              aria-label="Paradise Estimating Office Location on Google Maps"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
