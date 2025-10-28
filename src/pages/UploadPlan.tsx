import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { 
  Upload, FileText, CheckCircle2, Clock, Shield, 
  Building2, Calculator, Phone, Mail, X, Plus
} from 'lucide-react';

const UploadPlan = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    location: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    description: ''
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { formData, files });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 mt-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upload Your <span className="text-gold">Construction Plans</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get accurate estimates in 24-48 hours. Upload your plans and project details to receive a professional cost analysis from our expert estimators.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center bg-navy/50 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                <Clock className="h-6 w-6 text-gold mr-3" />
                <span className="font-semibold">24-48 Hour Delivery</span>
              </div>
              <div className="flex items-center justify-center bg-navy/50 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                <Shield className="h-6 w-6 text-gold mr-3" />
                <span className="font-semibold">Secure & Confidential</span>
              </div>
              <div className="flex items-center justify-center bg-navy/50 backdrop-blur-sm rounded-xl p-4 border border-gold/20">
                <CheckCircle2 className="h-6 w-6 text-gold mr-3" />
                <span className="font-semibold">99% Accuracy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upload Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* File Upload Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <Upload className="h-6 w-6 mr-3 text-gold" />
                  Upload Your Plans
                </h2>
                
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    dragActive ? 'border-gold bg-gold/10' : 'border-gray-300 hover:border-gold'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="h-12 w-12 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    Drag & drop your files here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    or click to browse files
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.dwg,.jpg,.jpeg,.png,.tiff"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block bg-gold hover:bg-yellow-400 text-navy font-semibold px-6 py-3 rounded-lg cursor-pointer transition-colors"
                  >
                    Browse Files
                  </label>
                  <p className="text-sm text-gray-500 mt-4">
                    Supported formats: PDF, DWG, JPG, PNG, TIFF (Max 50MB per file)
                  </p>
                </div>

                {/* Uploaded Files */}
                {files.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold text-navy mb-4">Uploaded Files ({files.length})</h4>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-gold mr-3" />
                            <span className="text-navy font-medium">{file.name}</span>
                            <span className="text-gray-500 ml-2">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <Building2 className="h-6 w-6 mr-3 text-gold" />
                  Project Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Project Name *</label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="Enter project name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="renovation">Renovation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="City, State"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                    >
                      <option value="">Select timeline</option>
                      <option value="rush">Rush (24 hours)</option>
                      <option value="standard">Standard (48 hours)</option>
                      <option value="detailed">Detailed (3-5 days)</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-navy font-semibold mb-2">Estimated Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-500k">$100,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="over-1m">Over $1,000,000</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-gold" />
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Full Name *</label>
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
                    <label className="block text-navy font-semibold mb-2">Email Address *</label>
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
                  
                  <div>
                    <label className="block text-navy font-semibold mb-2">Phone Number</label>
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
                    <label className="block text-navy font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="Company name"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-navy font-semibold mb-2">Project Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:outline-none"
                      placeholder="Provide any additional details about your project..."
                    />
                  </div>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-navy font-bold text-lg px-12 py-4 shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Submit for Estimate
                </Button>
                <p className="text-gray-600 mt-4">
                  You'll receive a confirmation email within 15 minutes and your estimate within 24-48 hours.
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold text-navy mb-2">Upload & Submit</h3>
              <p className="text-gray-600">Upload your plans and project details</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold text-navy mb-2">Expert Review</h3>
              <p className="text-gray-600">Our estimators analyze your project</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold text-navy mb-2">Quality Check</h3>
              <p className="text-gray-600">Senior estimators verify accuracy</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold text-navy mb-2">Delivery</h3>
              <p className="text-gray-600">Receive your detailed estimate</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UploadPlan;