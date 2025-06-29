import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
import Button from '../Common/Button';
// import Card from '../Common/Card';

const Home = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Premium Quality',
      description: 'ISO certified water treatment solutions with guaranteed quality standards.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced engineers and technicians with 15+ years in water treatment.',
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Trusted by 500+ clients across residential, commercial, and industrial sectors.',
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Round-the-clock maintenance and support services for all our systems.',
    },
  ];

  const services = [
    {
      title: 'Water Treatment Plants',
      description: 'Complete industrial and municipal water treatment solutions.',
      image: 'https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Sewage Treatment Plants',
      description: 'Advanced sewage treatment systems for environmental compliance.',
      image: 'https://images.pexels.com/photos/433198/pexels-photo-433198.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Water Purifiers',
      description: 'Home and office water purification systems and replacement parts.',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative z-10 px-6 py-32 mx-auto text-center max-w-7xl">
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Pure Water Solutions for a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Better Tomorrow
            </span>
          </h1>
          <p className="max-w-3xl mx-auto mt-6 text-lg text-blue-100 sm:text-xl">
            Leading provider of water treatment systems, ensuring clean, safe water for homes and industries worldwide.
          </p>
          <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">
            <Link to="/services">
              <Button size="lg" icon={ArrowRight} iconPosition="right" className="transition-transform hover:scale-105">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-white transition-all border-white hover:bg-white hover:text-black hover:scale-105">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="px-6 mx-auto text-center max-w-7xl">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Why Choose Disha Water Treatments?
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-lg text-gray-600">
            Combining cutting-edge technology with decades of expertise to deliver exceptional water solutions.
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="p-6 transition-shadow bg-white shadow-md rounded-2xl hover:shadow-xl">
                <div className="flex items-center justify-center mx-auto mb-4 text-white rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-500">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="px-6 mx-auto text-center max-w-7xl">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Our Core Services</h2>
          <p className="max-w-2xl mx-auto mb-16 text-lg text-gray-600">
            From home purifiers to industrial-scale water systems, we’ve got you covered.
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="rounded-2xl shadow-lg overflow-hidden bg-white transition-transform hover:scale-[1.02]">
                <div className="overflow-hidden aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-56"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 group">
                    Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/services">
              <Button size="lg" className="transition-transform hover:scale-105">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 text-white bg-gradient-to-r from-blue-700 to-teal-600">
        <div className="grid grid-cols-2 gap-8 px-6 mx-auto text-center max-w-7xl md:grid-cols-4">
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '50+', label: 'Expert Team' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="mb-2 text-4xl font-extrabold">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center text-white bg-gray-900">
        <div className="max-w-4xl px-6 mx-auto">
          <h2 className="mb-4 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-gray-300">
            Contact us for a free consultation and explore how we can deliver the ideal water solution for you.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button size="lg" className="transition-transform hover:scale-105">Get Free Consultation</Button>
            </Link>
            <Link to="/previous-works">
              <Button variant="outline" size="lg" className="text-white transition-all border-white hover:bg-white hover:text-gray-900 hover:scale-105">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
