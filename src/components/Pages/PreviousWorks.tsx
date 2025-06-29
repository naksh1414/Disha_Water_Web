import { Calendar, MapPin, Users, Droplets } from 'lucide-react';
import Card from '../Common/Card';
import { useState } from 'react';
const PreviousWorks = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Municipal Water Treatment Plant - Springfield',
      category: 'municipal',
      image: 'https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large-scale water treatment facility serving 250,000 residents with advanced filtration and purification systems.',
      client: 'Springfield City Council',
      location: 'Springfield, USA',
      date: '2023',
      capacity: '50 million gallons/day',
      features: ['Multi-stage filtration', 'UV disinfection', 'Automated monitoring', 'Energy-efficient design']
    },
    {
      id: 2,
      title: 'Industrial Wastewater Treatment - TechCorp',
      category: 'industrial',
      image: 'https://images.pexels.com/photos/433198/pexels-photo-433198.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom wastewater treatment solution for a major manufacturing facility with zero liquid discharge.',
      client: 'TechCorp Manufacturing',
      location: 'Detroit, USA',
      date: '2023',
      capacity: '2 million gallons/day',
      features: ['Chemical treatment', 'Biological processing', 'Water recycling', 'Sludge management']
    },
    {
      id: 3,
      title: 'Residential Complex Water System - Green Valley',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete water treatment and distribution system for a 500-unit residential development.',
      client: 'Green Valley Developers',
      location: 'Austin, USA',
      date: '2022',
      capacity: '1 million gallons/day',
      features: ['Centralized filtration', 'Smart metering', 'Pressure management', 'Quality monitoring']
    },
    {
      id: 4,
      title: 'Hospital Water Purification System',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-purity water system for critical medical applications including dialysis and laboratory use.',
      client: 'Regional Medical Center',
      location: 'Phoenix, USA',
      date: '2022',
      capacity: '500,000 gallons/day',
      features: ['Ultra-pure water', 'Redundant systems', 'Real-time monitoring', 'Compliance tracking']
    },
    {
      id: 5,
      title: 'Food Processing Plant Water Treatment',
      category: 'industrial',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Specialized water treatment system meeting strict food safety standards for beverage production.',
      client: 'Premium Beverages Inc.',
      location: 'California, USA',
      date: '2022',
      capacity: '3 million gallons/day',
      features: ['Food-grade materials', 'CIP systems', 'Taste & odor removal', 'Microbiological safety']
    },
    {
      id: 6,
      title: 'School District Water Purifiers',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Installation of water purification systems across 25 schools serving 15,000 students.',
      client: 'Metro School District',
      location: 'Denver, USA',
      date: '2021',
      capacity: '100,000 gallons/day',
      features: ['Lead removal', 'Chlorine reduction', 'Maintenance program', 'Safety compliance']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'municipal', name: 'Municipal' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50M+', label: 'Gallons Processed Daily' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-br from-blue-800 to-teal-700 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Previous Works
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-blue-100 md:text-2xl">
            Explore our portfolio of successful water treatment projects across 
            municipal, industrial, commercial, and residential sectors.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold text-blue-600 md:text-4xl">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card key={project.id} hover className="overflow-hidden">
                <div className="aspect-w-16 aspect-h-10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'municipal' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'industrial' ? 'bg-green-100 text-green-800' :
                      project.category === 'commercial' ? 'bg-purple-100 text-purple-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">{project.description}</p>
                  
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="flex-shrink-0 w-4 h-4 mr-2" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="flex-shrink-0 w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Droplets className="flex-shrink-0 w-4 h-4 mr-2" />
                      <span>{project.capacity}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="mb-2 text-sm font-medium text-gray-900">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs text-blue-700 rounded bg-blue-50"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied clients who have 
              experienced the quality of our water treatment solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex mb-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="italic text-gray-600">
                  "AquaPure Solutions delivered exactly what they promised. The water treatment 
                  plant has been operating flawlessly for over a year now."
                </p>
              </div>
              <div className="pt-4 border-t">
                <div className="font-medium text-gray-900">John Martinez</div>
                <div className="text-sm text-gray-500">City Manager, Springfield</div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex mb-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="italic text-gray-600">
                  "Professional service from start to finish. Their team was knowledgeable 
                  and the installation was completed on time and within budget."
                </p>
              </div>
              <div className="pt-4 border-t">
                <div className="font-medium text-gray-900">Sarah Chen</div>
                <div className="text-sm text-gray-500">Operations Manager, TechCorp</div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="mb-4">
                <div className="flex mb-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="italic text-gray-600">
                  "The water quality improvement has been remarkable. Our residents are 
                  extremely satisfied with the new purification system."
                </p>
              </div>
              <div className="pt-4 border-t">
                <div className="font-medium text-gray-900">Michael Johnson</div>
                <div className="text-sm text-gray-500">Property Manager, Green Valley</div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviousWorks;