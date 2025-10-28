import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
import StatsShowcase from '@/components/StatsShowcase';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from "react-helmet";

const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Paradise Estimating – Your Trusted Construction Estimating Partner</title>
        <meta
          name="description"
          content="Learn more about Paradise Estimating, our mission, team, and why contractors choose us for accurate and efficient estimation services."
        />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          opacity: 0.15
        }} />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Paradise Estimating</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We are a team of experienced construction estimators dedicated to providing accurate and reliable cost estimates for your projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Showcase */}
      <StatsShowcase />
      
      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Paradise Estimating was founded in 2010 by a group of construction industry veterans who recognized the need for more accurate and reliable construction estimating services. With decades of combined experience in various construction disciplines, our founders set out to create a company that would deliver precise estimates while providing exceptional customer service.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we have grown from a small team working on local projects to a comprehensive estimating service provider working with clients across the country. Our commitment to accuracy, attention to detail, and client satisfaction has remained unwavering throughout our journey.
              </p>
              <p className="text-gray-700">
                Today, Paradise Estimating is proud to be a trusted partner for contractors, builders, developers, and construction companies of all sizes. We continue to evolve and adapt to the changing construction landscape, implementing new technologies and methodologies to deliver the best possible service to our clients.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1504307651254-35b1a7e39896?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Construction team" className="w-full h-auto" />
                <div className="absolute inset-0 bg-navy opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Paradise Estimating, we are guided by a clear mission and a strong set of core values that define who we are and how we work.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mission */}
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                Our mission is to provide construction professionals with accurate, detailed, and reliable cost estimates that enable them to plan, bid, and execute projects with confidence. We strive to be a trusted partner in our clients' success, delivering exceptional service and expertise that adds value to every project.
              </p>
            </div>
            
            {/* Values */}
            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-gold rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy">Our Core Values</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy/10 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-3 w-3 text-navy" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Accuracy</span>
                    <p className="text-gray-700 text-sm">We are committed to providing the most accurate estimates possible, consistently achieving 97% accuracy.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy/10 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-3 w-3 text-navy" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Integrity</span>
                    <p className="text-gray-700 text-sm">We conduct business with the highest ethical standards, transparency, and honesty.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy/10 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-3 w-3 text-navy" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Excellence</span>
                    <p className="text-gray-700 text-sm">We strive for excellence in everything we do, continuously improving our processes and expertise.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-navy/10 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-3 w-3 text-navy" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Responsiveness</span>
                    <p className="text-gray-700 text-sm">We respond promptly to client needs and consistently meet deadlines.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Our Team?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your project and learn how our team of estimating experts can help you succeed.
          </p>
          <Link to="/contact" className="inline-block bg-gold hover:bg-white hover:text-gold text-white text-lg px-8 py-3 rounded-md font-semibold transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </section>
      
      <Footer />
      <Chatbot />
    </div>;
};

export default About;