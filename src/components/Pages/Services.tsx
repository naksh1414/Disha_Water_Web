import React from 'react';
import { CheckCircle, ArrowRight, Settings, Wrench, Shield, Zap } from 'lucide-react';
import Card from '../Common/Card';
import Button from '../Common/Button';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      title: 'Water Treatment Plants',
      description: 'Complete design, installation, and maintenance of industrial and municipal water treatment facilities.',
      image: 'https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Custom design and engineering',
        'Industrial-grade filtration systems',
        'Automated monitoring and control',
        'Energy-efficient operations',
        'Compliance with all regulations',
        'Ongoing maintenance support'
      ],
      applications: ['Municipal water supply', 'Industrial processes', 'Manufacturing facilities', 'Food and beverage industry']
    },
    {
      title: 'Sewage Treatment Plants',
      description: 'Advanced sewage treatment systems for environmental compliance and water recycling.',
      image: 'https://images.pexels.com/photos/433198/pexels-photo-433198.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Primary and secondary treatment',
        'Biological nutrient removal',
        'Sludge processing and disposal',
        'Odor control systems',
        'Effluent quality monitoring',
        'Environmental compliance'
      ],
      applications: ['Residential communities', 'Commercial complexes', 'Industrial facilities', 'Municipal systems']
    },
    {
      title: 'Water Purifiers & Parts',
      description: 'Home and office water purification systems with comprehensive parts and maintenance services.',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Multi-stage filtration',
        'UV sterilization',
        'RO membrane technology',
        'Mineral enhancement',
        'Smart monitoring systems',
        'Regular maintenance service'
      ],
      applications: ['Residential homes', 'Office buildings', 'Schools and hospitals', 'Retail establishments']
    }
  ];

  const additionalServices = [
    {
      icon: Settings,
      title: 'System Design & Engineering',
      description: 'Custom water treatment system design tailored to your specific requirements and site conditions.',
    },
    {
      icon: Wrench,
      title: 'Installation & Commissioning',
      description: 'Professional installation and commissioning services ensuring optimal system performance.',
    },
    {
      icon: Shield,
      title: 'Maintenance & Support',
      description: '24/7 maintenance support and regular servicing to keep your systems running at peak efficiency.',
    },
    {
      icon: Zap,
      title: 'System Upgrades',
      description: 'Modernization and upgrade services to improve efficiency and extend system lifespan.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-teal-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive water treatment solutions designed to meet your specific needs, 
            from residential purifiers to large-scale industrial systems.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of water treatment solutions covers every aspect 
              of water purification and management.
            </p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="rounded-xl shadow-2xl w-full h-80 object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((application, appIndex) => (
                        <span 
                          key={appIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {application}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button icon={ArrowRight} iconPosition="right">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure your water treatment systems 
              operate at peak performance throughout their lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing support, we follow a proven process 
              that ensures successful project delivery every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation & Assessment</h3>
              <p className="text-gray-600">We analyze your water quality, usage requirements, and site conditions to design the perfect solution.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Design & Installation</h3>
              <p className="text-gray-600">Our expert team designs, manufactures, and installs your water treatment system with precision.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Support & Maintenance</h3>
              <p className="text-gray-600">We provide ongoing maintenance, monitoring, and support to ensure optimal system performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you find 
            the perfect water treatment solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/previous-works">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;