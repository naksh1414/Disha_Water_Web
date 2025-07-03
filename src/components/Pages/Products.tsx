import { CheckCircle } from "lucide-react";
import Card from "../Common/Card";
import Button from "../Common/Button";
import { Link } from "react-router-dom";
import Header from "../Common/Header";
import BarScreen from "../../assets/Speco-Wastemaster-Screw-Screen.jpg";
import Lamella from "../../assets/Lamella.jpg";
import Filter from "../../assets/different-carbon-filters.webp";
import Membrane from "../../assets/membrane.webp";
import Dist from "../../assets/distillation.webp";
import Softner from "../../assets/softner.webp";
import Dion from "../../assets/deionizer.webp"
const productRange = [
  {
    category: "BAR SCREEN",
    description:
      "Screens designed to filter out large solids from raw wastewater at the initial treatment stage.",
    image: BarScreen,
    items: ["Step Screen", "Hole Screen", "Screw Screen"],
  },
  {
    category: "CLARIFIERS",
    description:
      "Used for sedimentation of solids, separating them from water by gravity in water treatment processes.",
    image: Lamella,
    items: [
      "Clarifloculator",
      "Lamella",
      "Reactivator",
      "High rate Solid Contact",
      "Precipitators",
      "Multidirectional Flow Clarifier",
    ],
  },
  {
    category: "FILTERS",
    description:
      "Various filters for removing fine particles, turbidity, and organic contaminants from water.",
    image: Filter,
    items: [
      "Gravity",
      "Pressure Sand",
      "Upflow",
      "Activated Carbon",
      "Continuous cleaning filter",
      "Monovalve",
      "Auto Valveless Gravity Filter",
    ],
  },
  {
    category: "MEMBRANE SEPARATION SYSTEMS",
    description:
      "Advanced membrane technologies for fine filtration and purification of water.",
    image: Membrane,
    items: ["Micron", "Ultra filtration", "Reverse Osmosis"],
  },
  {
    category: "DESALINATION SYSTEMS",
    description:
      "Systems designed to remove salt and other minerals from brackish and sea water.",
    image: Dist,
    items: ["Brackish & Sea Water"],
  },
  {
    category: "WATER SOFTENERS",
    description:
      "Treat hard water by removing calcium and magnesium using chemical and ion exchange methods.",
    image: Softner,
    items: ["Cold Lime", "Hot Lime/ Soda", "Base Exchanger"],
  },
  {
    category: "DEIONISERS",
    description:
      "Used to remove ionic impurities from water through ion exchange for ultra-pure applications.",
    image: Dion,
    items: [
      "Down Flow",
      "Up Flow",
      "Counter flow",
      "Split flow",
      "Two Bed",
      "Three Bed",
      "Four Bed",
      "Mixed Bed",
    ],
  },
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-br from-blue-600 to-cyan-500 lg:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <Header className="h-20">Our Product Range</Header>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-purple-100 md:text-2xl">
            Our extensive product range covers all aspects of water and
            wastewater treatment systems engineered for high performance.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-16 bg-gray-50 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Explore our complete set of products, each engineered for
              efficiency, durability, and environmental compliance.
            </p>
          </div>

          <div className="w-full">
            <div className="grid justify-center max-w-5xl gap-4 mx-auto md:grid-cols-3">
              {productRange.map((product, index) => (
                <Card
                  key={index}
                  hover
                  className="h-full p-6 space-y-4 bg-white shadow-lg rounded-2xl"
                >
                  <img
                    src={product.image}
                    alt={product.category}
                    className="object-contain w-full rounded-lg h-60"
                  />
                  <h3 className="text-xl font-semibold text-blue-600">
                    ❖ {product.category}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                  <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-green-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white lg:py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Need Help Choosing the Right Product?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-purple-100">
            Let our experts assist you in selecting the most suitable treatment
            system for your application.
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
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-cyan-800"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
