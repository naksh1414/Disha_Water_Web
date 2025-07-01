import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Mission & Vision", path: "/mission-vision" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Previous Works", path: "/previous-works" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 transition-all duration-300 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 group-hover:scale-105">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-gray-800">
                Disha Water Treatments
              </h1>
              <p className="text-xs text-gray-500">Pvt Ltd</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 text-sm font-medium text-gray-700 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive(item.path)
                    ? "bg-white text-blue-600 shadow-sm"
                    : "hover:text-blue-600 hover:bg-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Optional CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-full hover:bg-gray-700">
                Get In Touch →
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-all rounded-md hover:bg-white hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="pb-4 mt-2 border-t border-gray-200 lg:hidden">
            <nav className="flex flex-col pt-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? "bg-white text-blue-600"
                      : "text-gray-700 hover:bg-white hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-gray-800 rounded-full"
              >
                Explore →
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
