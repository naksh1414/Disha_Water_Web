import { Target, Eye, Lightbulb, Users, Globe, Leaf } from "lucide-react";
import Card from "../Common/Card";
import Header from "../Common/Header";
const MissionVision = () => {
  const goals = [
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Provide clean water access to underserved communities through innovative and affordable solutions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Expand our operations internationally to address water challenges in developing regions.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description:
        "Minimize environmental impact through sustainable practices and eco-friendly technologies.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description:
        "Lead the industry in research and development of next-generation water treatment technologies.",
    },
  ];

  const principles = [
    "Environmental sustainability in all operations",
    "Transparent and ethical business practices",
    "Continuous learning and professional development",
    "Community engagement and social responsibility",
    "Quality excellence without compromise",
    "Innovation-driven solution development",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-br from-teal-800 via-blue-800 to-blue-900 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <Header>Our Mission & Vision</Header>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-blue-100 md:text-2xl">
            Driven by purpose, guided by vision, and committed to creating a
            world where clean water is accessible to all.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Mission */}
            <Card className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 mr-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  Our Mission
                </h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  To provide innovative, sustainable, and reliable water
                  treatment solutions that ensure access to clean, safe water
                  for communities, industries, and individuals worldwide.
                </p>
                <p className="mb-6">
                  We are committed to leveraging cutting-edge technology,
                  environmental best practices, and expert engineering to
                  address the growing global water challenges while maintaining
                  the highest standards of quality and service.
                </p>
                <p>
                  Through our comprehensive range of water treatment systems,
                  from residential purifiers to large-scale industrial plants,
                  we strive to make a positive impact on public health,
                  environmental protection, and sustainable development.
                </p>
              </div>
            </Card>

            {/* Vision */}
            <Card className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 mr-4 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                  Our Vision
                </h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  To be the global leader in water treatment innovation,
                  creating a world where every person has access to clean, safe
                  water, and where industrial processes operate in harmony with
                  environmental sustainability.
                </p>
                <p className="mb-6">
                  We envision a future where advanced water treatment
                  technologies are accessible, affordable, and environmentally
                  responsible, contributing to healthier communities and a more
                  sustainable planet.
                </p>
                <p>
                  By 2030, we aim to have positively impacted millions of lives
                  through our water treatment solutions while setting new
                  industry standards for innovation, sustainability, and social
                  responsibility.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Strategic Goals
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our roadmap to achieving our vision through focused initiatives
              and measurable objectives that drive meaningful change.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {goals.map((goal, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600">
                  <goal.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {goal.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {goal.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 text-white lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Core Principles
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              The fundamental beliefs that guide our decision-making and shape
              our company culture every day.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 bg-white rounded-lg bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20"
              >
                <div className="flex items-center">
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-4 bg-white rounded-full bg-opacity-20">
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
      {/* <section className="py-16 text-white bg-gray-900 lg:py-24">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Header >
              Our Commitment to You
            </Header>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              We pledge to deliver exceptional water treatment solutions that
              not only meet your immediate needs but also contribute to a
              sustainable future for generations to come. Every project we
              undertake is guided by our mission, driven by our vision, and
              executed with unwavering commitment to excellence.
            </p>
            <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
              <div className="text-center">
                <Header>
                  100%
                </Header>
                <div className="text-gray-300">Quality Guarantee</div>
              </div>
              <div className="text-center">
                <Header>
                  24/7
                </Header>
                <div className="text-gray-300">Customer Support</div>
              </div>
              <div className="text-center">
                <Header>∞</Header>
                <div className="text-gray-300">Commitment to Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default MissionVision;
