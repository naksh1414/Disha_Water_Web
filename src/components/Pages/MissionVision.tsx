import React from 'react';
import { Target, Eye, Lightbulb, Users, Globe, Leaf } from 'lucide-react';
import Card from '../Common/Card';

const MissionVision = () => {
  const goals = [
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Provide clean water access to underserved communities through innovative and affordable solutions.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand our operations internationally to address water challenges in developing regions.',
    },
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'Minimize environmental impact through sustainable practices and eco-friendly technologies.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description: 'Lead the industry in research and development of next-generation water treatment technologies.',
    },
  ];

  const principles = [
    'Environmental sustainability in all operations',
    'Transparent and ethical business practices',
    'Continuous learning and professional development',
    'Community engagement and social responsibility',
    'Quality excellence without compromise',
    'Innovation-driven solution development',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-800 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Mission & Vision
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Driven by purpose, guided by vision, and committed to creating a world 
            where clean water is accessible to all.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  To provide innovative, sustainable, and reliable water treatment solutions 
                  that ensure access to clean, safe water for communities, industries, and 
                  individuals worldwide.
                </p>
                <p className="mb-6">
                  We are committed to leveraging cutting-edge technology, environmental best 
                  practices, and expert engineering to address the growing global water 
                  challenges while maintaining the highest standards of quality and service.
                </p>
                <p>
                  Through our comprehensive range of water treatment systems, from residential 
                  purifiers to large-scale industrial plants, we strive to make a positive 
                  impact on public health, environmental protection, and sustainable development.
                </p>
              </div>
            </Card>

            {/* Vision */}
            <Card className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  To be the global leader in water treatment innovation, creating a world 
                  where every person has access to clean, safe water, and where industrial 
                  processes operate in harmony with environmental sustainability.
                </p>
                <p className="mb-6">
                  We envision a future where advanced water treatment technologies are 
                  accessible, affordable, and environmentally responsible, contributing 
                  to healthier communities and a more sustainable planet.
                </p>
                <p>
                  By 2030, we aim to have positively impacted millions of lives through 
                  our water treatment solutions while setting new industry standards for 
                  innovation, sustainability, and social responsibility.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our roadmap to achieving our vision through focused initiatives 
              and measurable objectives that drive meaningful change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <goal.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{goal.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The fundamental beliefs that guide our decision-making and shape 
              our company culture every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="font-medium">{principle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We pledge to deliver exceptional water treatment solutions that not only meet 
              your immediate needs but also contribute to a sustainable future for generations 
              to come. Every project we undertake is guided by our mission, driven by our 
              vision, and executed with unwavering commitment to excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Quality Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-300">Customer Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
                <div className="text-gray-300">Commitment to Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;