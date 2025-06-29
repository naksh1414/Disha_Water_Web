import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Card from '../Common/Card';
import Button from '../Common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_name: 'Disha Water Treatments',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: '24/7 Emergency Support Available'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@dishawater.com', 'support@dishawater.com'],
      description: 'We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Water Street', 'Suite 100, City, State 12345'],
      description: 'Monday - Friday: 8AM - 6PM'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      description: 'Emergency service available 24/7'
    }
  ];

  const services = [
    'Water Treatment Plants',
    'Sewage Treatment Plants',
    'Water Purifiers & Parts',
    'System Maintenance',
    'Consultation Services',
    'Other'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-teal-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slideInLeft">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-slideInRight">
            Ready to discuss your water treatment needs? Get in touch with our expert team 
            for a free consultation and personalized solution.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 animate-slideInLeft">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fadeIn">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <h3 className="text-green-800 font-medium">Message Sent Successfully!</h3>
                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeIn">
                  <h3 className="text-red-800 font-medium">Error Sending Message</h3>
                  <p className="text-red-600 text-sm">Please try again or contact us directly by phone.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Please describe your water treatment needs or questions..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  icon={Send} 
                  iconPosition="right"
                  className="w-full transform hover:scale-105 transition-transform duration-300"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-slideInRight">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Have questions about our water treatment solutions? Our expert team is here to help. 
                  Contact us through any of the methods below, and we'll respond promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start">
                      <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="p-6 animate-fadeInUp">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Visit Our Office</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Water Street, City, State 12345</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does installation take?',
                answer: 'Installation time varies by system size and complexity. Residential systems typically take 1-2 days, while larger commercial or industrial systems may take several weeks.'
              },
              {
                question: 'Do you provide maintenance services?',
                answer: 'Yes, we offer comprehensive maintenance packages including regular inspections, filter replacements, and 24/7 emergency support to ensure optimal system performance.'
              },
              {
                question: "What's included in a free consultation?",
                answer: 'Our free consultation includes water quality testing, needs assessment, system recommendations, and a detailed quote with no obligations.'
              },
              {
                question: 'Do you offer financing options?',
                answer: 'Yes, we provide flexible financing options for both residential and commercial customers. Contact us to discuss payment plans that fit your budget.'
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;