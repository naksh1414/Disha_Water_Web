import { Users, Target, Heart, Award } from "lucide-react";
import Card from "../Common/Card";
import Header from "../Common/Header";

const About = () => {
  const teamMembers = [
    {
      name: "RAHUL GARG",
      role: "Director (Marketing & Planning)",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Has a marketing experience of about 12 Years in the field of Water and Waste Water Treatment ",
    },
    {
      name: "VIKAS GARG",
      role: "Director (Technical, Marketing & Operations)",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Has marketing experience of about 10 Years in diversified field with 05 Years in the field of  Water and Waste Water Treatment and also running a Construction Company.",
    },
    {
      name: "NIKHIL GARG",
      role: "Director (Technical & Operations)",
      image:
        "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Working experience of about 6 Years with L&T in the field of planning, designing & execution of the Water & Waste Water Treatment System.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Performance",
      description:
        " We are committed to provide our clients, the value for their money.",
    },
    {
      icon: Heart,
      title: "Trust",
      description:
        "We enjoy exceptionally high customer loyalty and get best marks for customer satisfaction. We are reliable, fair and honest. ",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Our dedicated team, works together to provide you only the BEST. ",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We constantly look for innovation that would serve our clients competitive advantage over them.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-br from-blue-800 to-teal-700 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/159533/lake-water-wave-mirroring-159533.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <Header className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl animate-slideInLeft">
            About Disha Water Treatments
          </Header>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-blue-100 md:text-2xl animate-slideInRight">
            DWT believes in the 'I OWE YOU' principle and work hard to uphold it
            while joining hands with you. One of the most important facts about
            DWT is that about 95% of the buyers that have approached us and have
            eventually turned into our permanent customers.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="animate-slideInLeft">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Established in 2005, under the banner of “DISHA ENTERPRISES”
                  (now changed to DISHA WATER TREATMENTS PVT. LTD.) has become
                  one of the leading company in the Water Treatment business in
                  very short span of just FIFTEEN years.
                </p>
                <p className="mb-6">
                  DISHA WATER TREATMENTS PVT. LTD. is an organisation which is
                  well equipped with latest high tech ideas. Our highly
                  dedicated Designing & Development engineers aims at providing
                  our clients with the high quality products which can be
                  customized to meet there requirement at their fullest
                  satisfaction.
                </p>
                <p>
                  DISHA (DWT) is a supplier of comprehensive range of Effluent
                  Treatment Plant, Sewage Treatment Plant, Water Treatment
                  Plants, Reverse Osmosis System, Water Softener etc. Apart from
                  this, we are also dealing in Chemicals which are used in above
                  mentioned Water Treatment Plants.
                </p>
              </div>
            </div>
            <div className="relative animate-slideInRight">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Water treatment facility"
                className="transition-transform duration-500 transform shadow-2xl rounded-xl hover:scale-105"
              />
              <div className="absolute p-6 bg-white shadow-lg -bottom-6 -right-6 rounded-xl animate-bounce">
                <div className="text-3xl font-bold text-blue-600">
                  {" "}
                  {new Date().getFullYear() - 2005}+
                </div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center animate-fadeInUp">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Core Values
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              These fundamental principles guide everything we do and shape our
              approach to delivering exceptional water treatment solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <Card hover className="p-6 text-center h-72 animate-fadeInUp">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-300 transform rounded-full bg-gradient-to-r from-blue-600 to-teal-600 hover:scale-110">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center animate-fadeInUp">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our experienced leaders bring decades of expertise in water
              treatment, environmental engineering, and business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                style={{ animationDelay: `${index * 0.2}s` }}
                className="overflow-hidden animate-fadeInUp"
              >
                <Card key={index} hover className="overflow-hidden">
                  <div className="overflow-hidden aspect-w-4 aspect-h-3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-64 transition-transform duration-500 transform hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="mb-1 text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mb-3 font-medium text-blue-600">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      {/* <section className="py-16 text-white lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center animate-fadeInUp">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Certifications & Recognition
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Our commitment to excellence has been recognized by industry
              leaders and regulatory bodies worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { title: "ISO 9001:2015", subtitle: "Quality Management" },
              { title: "ISO 14001:2015", subtitle: "Environmental Management" },
              { title: "EPA Certified", subtitle: "Environmental Protection" },
              {
                title: "Industry Leader",
                subtitle: "Water Treatment Excellence",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-transform duration-300 transform bg-white rounded-full bg-opacity-20 hover:scale-110">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="mb-2 font-semibold">{cert.title}</h3>
                <p className="text-sm text-blue-100">{cert.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
