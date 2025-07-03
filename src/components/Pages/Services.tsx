import {
  Wrench,
  Activity,
  FileCode,
  ShoppingCart,
  Building2,
  PackageCheck,
  Eye,
  Briefcase,
  Hammer,
  Cpu,
  Rocket,
  LifeBuoy,
  FileText,
  SearchCheck,
  FlaskConical,
  PenTool,
  ScanSearch,
  LayoutDashboard,
  ShieldCheck,
  Construction,
  RefreshCw,
  FileCog,
  Settings,
  Users,
  ArchiveRestore,
  Leaf,
  Shield,
  Zap,
} from "lucide-react";

import Card from "../Common/Card";
import Button from "../Common/Button";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
const Services = () => {
  const mainServices = [
    {
      title: "Mechanical Design",
      description:
        "Custom mechanical solutions for treatment plants, ensuring durability and ease of maintenance.",
      icon: Wrench,
    },
    {
      title: "Electricity & Instrumentation Design",
      description:
        "Complete electrical layout and automation system design tailored for efficient plant operations.",
      icon: Activity,
    },
    {
      title: "Basic / Detailed Engineering",
      description:
        "From initial concept to full-scale execution with accurate drawings and technical specs.",
      icon: FileCode,
    },
    {
      title: "Procurement",
      description:
        "Reliable sourcing of quality components and equipment from trusted manufacturers.",
      icon: ShoppingCart,
    },
    {
      title: "BOT (O) Projects",
      description:
        "Build-Operate-Transfer projects for infrastructure development and management.",
      icon: Building2,
    },
    {
      title: "Equipment Supply",
      description:
        "Manufacture and supply of reliable water treatment components.",
      icon: PackageCheck,
    },
    {
      title: "Site Supervision",
      description:
        "Professional monitoring for installation and commissioning of treatment plants.",
      icon: Eye,
    },
    {
      title: "General Contracting",
      description:
        "Comprehensive turnkey solutions for civil, mechanical, and electrical works.",
      icon: Briefcase,
    },
    {
      title: "Construction & Erection",
      description:
        "Execution of infrastructure and system erection as per project specifications.",
      icon: Hammer,
    },
    {
      title: "Electricity, Instrumentation & Control",
      description:
        "Automation systems using PLC/SCADA with real-time data monitoring.",
      icon: Cpu,
    },
    {
      title: "Start-up & Commissioning",
      description:
        "Testing and fine-tuning of water systems for optimal performance.",
      icon: Rocket,
    },
    {
      title: "Operation & Maintenance",
      description:
        "Long-term system operation contracts ensuring performance and compliance.",
      icon: LifeBuoy,
    },
    {
      title: "Project Development",
      description:
        "Feasibility studies and technical planning from design to deployment.",
      icon: FileText,
    },
    {
      title: "Water Management Surveys",
      description:
        "Comprehensive analysis of water sources, usage, and conservation strategies.",
      icon: SearchCheck,
    },
    {
      title: "R&D, Treatability & Pilot Plant Studies",
      description:
        "Pilot-scale testing to validate and optimize treatment processes.",
      icon: FlaskConical,
    },
    {
      title: "Design & Engineering",
      description:
        "Precise system layout considering site constraints and requirements.",
      icon: PenTool,
    },
    {
      title: "Plant & Process Audits",
      description:
        "Detailed inspections to assess system efficiency and compliance.",
      icon: ScanSearch,
    },
    {
      title: "Project Management",
      description:
        "Coordinated delivery of engineering projects on-time and within budget.",
      icon: LayoutDashboard,
    },
    {
      title: "Inspection",
      description:
        "Thorough examination and testing for quality and safety standards.",
      icon: ShieldCheck,
    },
    {
      title: "Erection & Commissioning",
      description:
        "Installation, integration, and commissioning of treatment equipment.",
      icon: Construction,
    },
    {
      title: "Upgradation & Automation of Plant",
      description:
        "Modernizing systems with automation and energy-efficient technologies.",
      icon: RefreshCw,
    },
    {
      title: "O&M Contracts",
      description:
        "Maintenance and service-level agreements for plant performance.",
      icon: FileCog,
    },
    {
      title: "Build-Own-Operate-Maintain/Transfer (BOO/T) Projects",
      description:
        "Sustainable infrastructure models under long-term private management.",
      icon: Settings,
    },
    {
      title: "Operator Training",
      description: "Skill development programs for plant operators and staff.",
      icon: Users,
    },
    {
      title: "Supply of Fabricated Components",
      description:
        "Manufacture and delivery of custom-built mechanical components.",
      icon: ArchiveRestore,
    },
    {
      title: "Environmental Management Systems & ISO 14000 Consultancy",
      description:
        "Support for achieving ISO 14000 certification and EMS best practices.",
      icon: Leaf,
    },
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
                className="flex flex-col justify-between h-full p-6 text-center transition bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-teal-600">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-blue-700">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-20 bg-gray-50">
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
      <section className="py-16 lg:py-20">
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
