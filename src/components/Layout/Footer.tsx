import { Link } from "react-router-dom";
import {
  Droplets,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Disha Water Treatments</h3>
                <p className="text-sm text-gray-400">Pvt Ltd</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              Leading provider of water treatment solutions, sewage treatment
              plants, and water purification systems. Committed to delivering
              clean, safe water for communities and industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 transition-colors duration-200 hover:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 transition-colors duration-200 hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 transition-colors duration-200 hover:text-blue-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 transition-colors duration-200 hover:text-blue-400"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/previous-works"
                  className="text-gray-300 transition-colors duration-200 hover:text-blue-400"
                >
                  Previous Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Water Treatment Plants</li>
              <li>Sewage Treatment Plants</li>
              <li>Water Purifiers</li>
              <li>Filtration Systems</li>
              <li>Maintenance & Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+91 9899170571</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">
                  rahulgarg365@yahoo.co.in
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">
                  A 4/5, Sector 88, Phase II Noida 201305 U.P. INDIA
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © {currentYear} Disha Water Treatments Pvt Ltd. All rights
              reserved.
            </p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors duration-200 hover:text-blue-400"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 transition-colors duration-200 hover:text-blue-400"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
