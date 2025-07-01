import { CheckCircle, Settings, Wrench, Shield, Zap } from "lucide-react";
import Card from "../Common/Card";
import Button from "../Common/Button";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
const Services = () => {
  const mainServices = [
    "Mechanical Design",
    "Electricity & Instrumentation Design",
    "Basic / Detailed Engineering",
    "Procurement",
    "BOT (O) Projects",
    "Equipment Supply",
    "Site Supervision",
    "General Contracting",
    "Construction & Erection",
    "Electricity, Instrumentation & Control",
    "Start-up & Commissioning",
    "Operation & Maintenance",
    "Project Development",
    "Water Management Surveys",
    "R&D, Treatability & Pilot Plant Studies",
    "Design & Engineering",
    "Plant & Process Audits",
    "Project Management",
    "Inspection",
    "Erection & Commissioning",
    "Upgradation & Automation of Plant",
    "O&M Contracts",
    "Build-Own-Operate-Maintain/Transfer (BOO/T) Projects",
    "Operator Training",
    "Supply of Fabricated Components",
    "Environmental Management Systems & ISO 14000 Consultancy",
  ];

  const additionalServices = [
    {
      icon: Settings,
      title: "System Design & Engineering",
      description:
        "Custom water treatment system design tailored to your specific requirements and site conditions.",
    },
    {
      icon: Wrench,
      title: "Installation & Commissioning",
      description:
        "Professional installation and commissioning services ensuring optimal system performance.",
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "24/7 maintenance support and regular servicing to keep your systems running at peak efficiency.",
    },
    {
      icon: Zap,
      title: "System Upgrades",
      description:
        "Modernization and upgrade services to improve efficiency and extend system lifespan.",
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
              "url(https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <Header>Our Services</Header>

          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-blue-100 md:text-2xl">
            Comprehensive water treatment solutions designed to meet your
            specific needs, from residential purifiers to large-scale industrial
            systems.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Core Services
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our comprehensive range of water treatment solutions covers every
              aspect of water purification and management.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                hover
                className="flex items-center p-4 space-x-4"
              >
                <CheckCircle className="text-green-500" />
                <span className="text-sm font-medium text-gray-800">
                  {service}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Additional Services
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Comprehensive support services to ensure your water treatment
              systems operate at peak performance throughout their lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Process
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              From initial consultation to ongoing support, we follow a proven
              process that ensures successful project delivery every time.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Consultation & Assessment
              </h3>
              <p className="text-gray-600">
                We analyze your water quality, usage requirements, and site
                conditions to design the perfect solution.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-full">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Design & Installation
              </h3>
              <p className="text-gray-600">
                Our expert team designs, manufactures, and installs your water
                treatment system with precision.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Support & Maintenance
              </h3>
              <p className="text-gray-600">
                We provide ongoing maintenance, monitoring, and support to
                ensure optimal system performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-blue-100">
            Contact us today for a free consultation and let us help you find
            the perfect water treatment solution for your needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact">
              <Button
                size="lg"
                className="text-blue-600 bg-white hover:bg-gray-100"
              >
                Get Free Quote
              </Button>
            </Link>
            <Link to="/previous-works">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-blue-600"
              >
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
