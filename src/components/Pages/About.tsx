import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';
import Card from '../Common/Card';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '20+ years in water treatment industry',
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Engineer',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Environmental Engineering Expert',
    },
    {
      name: 'Mike Chen',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Process Optimization Specialist',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards in water treatment solutions.',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We care deeply about environmental protection and providing clean water access to communities worldwide.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and deliver customized solutions.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously innovate and adopt cutting-edge technologies to improve our water treatment processes.',
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
            backgroundImage: 'url(https://images.pexels.com/photos/159533/lake-water-wave-mirroring-159533.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slideInLeft">
            About Disha Water Treatments
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-slideInRight">
            Transforming water treatment since 2008 with innovative solutions, 
            expert engineering, and unwavering commitment to clean water access.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Founded in 2008 by a team of passionate environmental engineers, Disha Water Treatments 
                  began with a simple yet powerful mission: to make clean, safe water accessible to 
                  everyone. What started as a small consulting firm has grown into a leading provider 
                  of comprehensive water treatment solutions.
                </p>
                <p className="mb-6">
                  Over the years, we've successfully completed more than 500 projects across 
                  residential, commercial, and industrial sectors. Our expertise spans from 
                  simple home water purifiers to complex municipal water treatment plants, 
                  always maintaining our commitment to quality and environmental sustainability.
                </p>
                <p>
                  Today, we continue to innovate and expand our services, incorporating the latest 
                  technologies in water treatment while never losing sight of our core values: 
                  excellence, integrity, and environmental stewardship.
                </p>
              </div>
            </div>
            <div className="relative animate-slideInRight">
              <img 
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Water treatment facility"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-bounce">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our approach 
              to delivering exceptional water treatment solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} hover className="p-6 text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leaders bring decades of expertise in water treatment, 
              environmental engineering, and business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} hover className="overflow-hidden animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders 
              and regulatory bodies worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'ISO 9001:2015', subtitle: 'Quality Management' },
              { title: 'ISO 14001:2015', subtitle: 'Environmental Management' },
              { title: 'EPA Certified', subtitle: 'Environmental Protection' },
              { title: 'Industry Leader', subtitle: 'Water Treatment Excellence' }
            ].map((cert, index) => (
              <div key={index} className="text-center animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-blue-100">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;