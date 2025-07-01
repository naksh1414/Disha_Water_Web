import { Calendar, MapPin, Users, Droplets } from 'lucide-react';
import Card from '../Common/Card';
import { useState } from 'react';
import Header from '../Common/Header';
const PreviousWorks = () => {
  const [activeFilter, setActiveFilter] = useState('all');

const projects = [
  {
    id: 1,
    title: 'STP - Irrigation & Public Health',
    category: 'municipal',
    image: '/images/placeholder.jpg',
    description: 'Sewage Treatment Plant for public health and sanitation improvement.',
    client: 'Irrigation & Public Health',
    location: 'Dharamshala',
    date: 'Ongoing',
    capacity: '2.5 MLD',
    features: ['Sewage treatment', 'Public sector', 'Municipal utility']
  },
  {
    id: 2,
    title: 'STP - Irrigation & Public Health',
    category: 'municipal',
    image: '/images/placeholder.jpg',
    description: 'Medium capacity STP project in Himachal Pradesh.',
    client: 'Irrigation & Public Health',
    location: 'Hamirpur (HP)',
    date: 'Ongoing',
    capacity: '600 KLD',
    features: ['Municipal STP', 'Medium scale', 'Public health']
  },
  {
    id: 3,
    title: 'STP - Cantonment Board',
    category: 'municipal',
    image: '/images/placeholder.jpg',
    description: 'Sewage treatment plant for defense residential area.',
    client: 'Cantonment Board',
    location: 'Meerut',
    date: 'Ongoing',
    capacity: '700 KLD',
    features: ['Defense housing', 'Sewage purification', 'Effluent processing']
  },
  {
    id: 4,
    title: 'ETP - Nagar Nigam',
    category: 'municipal',
    image: '/images/placeholder.jpg',
    description: 'Effluent treatment plant handling large capacity waste.',
    client: 'Nagar Nigam',
    location: 'Aligarh',
    date: 'Completed',
    capacity: '800 KLD',
    features: ['Effluent treatment', 'Urban waste', 'High capacity']
  },
  {
    id: 5,
    title: 'WTP - DAV Public School',
    category: 'educational',
    image: '/images/placeholder.jpg',
    description: 'Water treatment system installed for school campuses.',
    client: 'DAV Public School',
    location: 'Noida',
    date: 'Completed',
    capacity: 'N/A',
    features: ['Safe drinking water', 'Educational institute', 'Water purification']
  },
  {
    id: 6,
    title: 'WTP - Sahara India Financial Corporation',
    category: 'corporate',
    image: '/images/placeholder.jpg',
    description: 'Water treatment project for large financial corporation.',
    client: 'Sahara India Financial Corporation',
    location: 'Noida',
    date: 'Completed',
    capacity: 'N/A',
    features: ['Corporate utility', 'Clean water supply', 'Office water needs']
  },
  {
    id: 7,
    title: 'WTP - Shanti Gopal Hospital',
    category: 'commercial',
    image: '/images/placeholder.jpg',
    description: 'Purification system for medical-grade water usage.',
    client: 'Shanti Gopal Hospital',
    location: 'Indirapuram, Ghaziabad',
    date: 'Completed',
    capacity: 'N/A',
    features: ['Medical standards', 'Ultra-pure water', 'Hospital compliance']
  },
  {
    id: 8,
    title: 'WTP - Ashok Memorial Public School',
    category: 'educational',
    image: '/images/placeholder.jpg',
    description: 'Water treatment plant installed for academic safety.',
    client: 'Ashok Memorial Public School',
    location: 'Faridabad',
    date: 'Completed',
    capacity: 'N/A',
    features: ['School safety', 'Clean water', 'Drinking water solution']
  },
  {
    id: 9,
    title: 'Water Distribution - UP Irrigation Department',
    category: 'municipal',
    image: '/images/placeholder.jpg',
    description: '5km pumping and water distribution network for irrigation.',
    client: 'UP Irrigation Department',
    location: 'Mahoba',
    date: 'Completed',
    capacity: 'N/A',
    features: ['Water network', 'Agriculture support', 'State infrastructure']
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
          <Header>
            Previous Works
          </Header>
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