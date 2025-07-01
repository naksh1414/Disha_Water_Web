import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Zap,
  Droplets,
  Waves,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "../Common/Link";
import Button from "../Common/Button2";
import { FadeInSection } from "../Common/FadeInSection";
const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "ISO Certified Quality",
      description:
        "Premium water treatment solutions meeting international quality standards with rigorous testing protocols.",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Expert Engineering Team",
      description:
        "Seasoned professionals with 15+ years of specialized experience in advanced water treatment technologies.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Award,
      title: "Industry Excellence",
      description:
        "Recognized leader serving 500+ satisfied clients across residential, commercial, and industrial sectors.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: Zap,
      title: "24/7 Premium Support",
      description:
        "Comprehensive round-the-clock maintenance and technical support for all our advanced systems.",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const services = [
    {
      title: "Industrial Water Treatment",
      description:
        "Comprehensive water treatment plants for industrial and municipal applications with cutting-edge technology.",
      image:
        "https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=800",
      accent: "cyan",
    },
    {
      title: "Advanced Sewage Treatment",
      description:
        "State-of-the-art sewage treatment systems ensuring environmental compliance and sustainability.",
      image:
        "https://images.pexels.com/photos/433198/pexels-photo-433198.jpeg?auto=compress&cs=tinysrgb&w=800",
      accent: "blue",
    },
    {
      title: "Premium Water Purifiers",
      description:
        "High-performance home and office purification systems with genuine replacement components.",
      image:
        "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800",
      accent: "teal",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: CheckCircle },
    { number: "15+", label: "Years Excellence", icon: Award },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "24/7", label: "Support Promise", icon: Zap },
  ];

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <FadeInSection direction="left" className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-32 h-32 rounded-full top-10 left-10 bg-cyan-200 blur-xl"></div>
          <div className="absolute w-48 h-48 bg-blue-200 rounded-full top-32 right-20 blur-2xl"></div>
          <div className="absolute w-40 h-40 bg-teal-200 rounded-full bottom-20 left-32 blur-xl"></div>
        </div>

        <div className="relative px-6 py-20 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 border rounded-full shadow-lg bg-white/70 backdrop-blur-sm border-cyan-200/50">
                <Droplets className="w-4 h-4 mr-2 text-cyan-500" />
                <span className="text-sm font-medium text-slate-700">
                  India's Premier Water Treatment Experts
                </span>
                <Sparkles className="w-4 h-4 ml-2 text-cyan-400" />
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
                  <span className="block mb-2 text-slate-800">
                    Transforming
                  </span>
                  <span className="block mb-2 text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
                    Water.
                  </span>
                  <span className="block text-3xl font-semibold text-slate-700 lg:text-4xl">
                    Sustaining Life. Engineering Excellence.
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="max-w-lg text-lg leading-relaxed text-slate-600">
                Pioneering advanced water treatment technologies with
                ISO-certified solutions, expert engineering, and unwavering
                commitment to environmental sustainability.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <button className="inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 shadow-lg group bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl hover:shadow-xl hover:scale-105">
                  <Zap className="w-5 h-5 mr-2" />
                  Discover Solutions
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <Link to="/contact">
                  <button className="inline-flex items-center px-8 py-4 font-semibold transition-all duration-300 border shadow-lg bg-white/80 backdrop-blur-sm text-slate-700 rounded-2xl border-cyan-200 hover:shadow-xl hover:bg-white">
                    <Users className="w-5 h-5 mr-2 text-cyan-500" />
                    Expert Consultation
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Waves className="text-white w-7 h-7" />,
                  title: "Pure Treatment",
                  desc: "Advanced filtration systems for crystal clear results",
                  gradient: "from-cyan-400 to-teal-500",
                  bg: "from-cyan-50 to-teal-50",
                },
                {
                  icon: <Shield className="text-white w-7 h-7" />,
                  title: "Reliable Support",
                  desc: "24/7 maintenance and emergency response",
                  gradient: "from-blue-400 to-indigo-500",
                  bg: "from-blue-50 to-indigo-50",
                },
                {
                  icon: <Users className="text-white w-7 h-7" />,
                  title: "Expert Team",
                  desc: "Certified professionals with proven expertise",
                  gradient: "from-teal-400 to-cyan-500",
                  bg: "from-teal-50 to-cyan-50",
                },
                {
                  icon: <Zap className="text-white w-7 h-7" />,
                  title: "Fast Install",
                  desc: "Quick deployment with minimal disruption",
                  gradient: "from-sky-400 to-blue-500",
                  bg: "from-sky-50 to-blue-50",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-gradient-to-br ${item.bg} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50 backdrop-blur-sm`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white/80"
            />
          </svg>
        </div>
      </FadeInSection>

      {/* Features Section */}
      <FadeInSection direction="right" className="relative px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-6 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
                Why Choose
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
                Disha Water Treatments?
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600">
              Combining cutting-edge technology with decades of expertise to
              deliver exceptional water solutions that exceed industry
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-8 transition-all duration-500 border shadow-lg group bg-white/70 backdrop-blur-sm rounded-3xl hover:shadow-2xl hover:-translate-y-2 border-white/50"
              >
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-r group-hover:opacity-5 rounded-3xl from-cyan-500 to-blue-500"></div>

                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-800">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Services Section */}
      <FadeInSection direction="left" className="relative px-8 py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-6 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
                Our Premium
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
                Service Portfolio
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600">
              From residential purifiers to industrial-scale treatment plants,
              we deliver comprehensive water solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-3xl hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full transition-transform duration-700 h-60 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-100"></div>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold transition-colors duration-300 text-slate-800 group-hover:text-cyan-700">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className={`inline-flex items-center text-${service.accent}-600 hover:text-${service.accent}-800 font-semibold group/link`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services">
              <Button size="lg" className="shadow-2xl hover:scale-105">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* Stats Section */}
      <FadeInSection direction="right" className="relative px-8 py-20 overflow-hidden text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Proven Track Record of Excellence
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-cyan-100">
              Numbers that speak for our commitment to quality and customer
              satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transition-transform duration-300 group hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-2 transition-transform duration-300 rounded-2xl bg-white/20 backdrop-blur-sm group-hover:scale-110">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="mb-2 text-2xl font-bold transition-transform duration-300 md:text-3xl group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="font-md medium text- text-cyan-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection direction="left" className="relative px-8 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold md:text-5xl">
              <span className="text-transparent bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text">
                Ready to Transform
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
                Your Water Systems?
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-slate-600">
              Connect with our water treatment experts today and discover how
              Disha Water Treatment can revolutionize your water infrastructure
              with sustainable, cutting-edge solutions.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row">
              <Link to="/contact">
                <Button size="lg" className="shadow-xl group hover:scale-105">
                  <Users className="w-5 h-5 mr-2" />
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/previous-works">
                <Button variant="outline" size="lg" className="hover:scale-105">
                  <Award className="w-5 h-5 mr-2" />
                  View Our Portfolio
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-10 md:grid-cols-3">
              <div className="flex items-center justify-center p-6 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl">
                <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                <span className="font-semibold text-slate-700">
                  Free Site Assessment
                </span>
              </div>
              <div className="flex items-center justify-center p-6 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl">
                <Shield className="w-6 h-6 mr-3 text-blue-600" />
                <span className="font-semibold text-slate-700">
                  Lifetime Support Guarantee
                </span>
              </div>
              <div className="flex items-center justify-center p-6 shadow-lg bg-white/70 backdrop-blur-sm rounded-2xl">
                <Zap className="w-6 h-6 mr-3 text-purple-600" />
                <span className="font-semibold text-slate-700">
                  24/7 Emergency Service
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Home;
