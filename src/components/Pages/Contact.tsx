import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Card from "../Common/Card";
import Button from "../Common/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          to_name: "Disha Water Treatments",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9899170571 ", "+91 9873355052"],
      description: "24/7 Emergency Support Available",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["rahulgarg365@yahoo.co.in"],
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      details: [
        "A – 4/5, Sector – 80, Phase – II",
        "Noida – 201305 (U.P.) (INDIA)",
      ],
      description: "Monday - Friday: 8AM - 6PM",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 5:00 PM"],
      description: "Emergency service available 24/7",
    },
  ];

  const services = [
    "Water Treatment Plants",
    "Sewage Treatment Plants",
    "Water Purifiers & Parts",
    "System Maintenance",
    "Consultation Services",
    "Other",
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
              "url(https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl animate-slideInLeft">
            Contact Us
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-blue-100 md:text-2xl animate-slideInRight">
            Ready to discuss your water treatment needs? Get in touch with our
            expert team for a free consultation and personalized solution.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="p-8 animate-slideInLeft">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="flex items-center p-4 mb-6 border border-green-200 rounded-lg bg-green-50 animate-fadeIn">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <div>
                    <h3 className="font-medium text-green-800">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-green-600">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 mb-6 border border-red-200 rounded-lg bg-red-50 animate-fadeIn">
                  <h3 className="font-medium text-red-800">
                    Error Sending Message
                  </h3>
                  <p className="text-sm text-red-600">
                    Please try again or contact us directly by phone.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-700"
                    >
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Please describe your water treatment needs or questions..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  icon={Send}
                  iconPosition="right"
                  className="w-full transition-transform duration-300 transform hover:scale-105"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-slideInRight">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Get in Touch
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                  Have questions about our water treatment solutions? Our expert
                  team is here to help. Contact us through any of the methods
                  below, and we'll respond promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 animate-fadeInUp">
                    <div
                      style={{ animationDelay: `${index * 0.1}s` }}
                      className="flex items-start"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 transition-transform duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 hover:scale-110">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="mb-1 text-gray-600">
                            {detail}
                          </p>
                        ))}
                        <p className="mt-2 text-sm text-gray-500">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="p-6 animate-fadeInUp">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Visit Our Office
                </h3>
                <div className="relative overflow-hidden transition-transform duration-300 transform rounded-lg hover:scale-105">
                  <iframe
                    title="Office Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3042603974366!2d77.40800687545773!3d28.618111375678035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff09d3f8b0d%3A0x94f8fc7d312b15ef!2sA-4%2F5%2C%20Phase%20II%2C%20Sector%2088%2C%20Noida%2C%20Uttar%20Pradesh%20201305%2C%20India!5e0!3m2!1sen!2sin!4v1720095022006!5m2!1sen!2sin"
                    width="100%"
                    height="256"
                    allowFullScreen={true}
                    loading="lazy"
                    className="w-full h-64 border-0"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center animate-fadeInUp">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Find quick answers to common questions about our services and
              processes.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                question: "How long does installation take?",
                answer:
                  "Installation time varies by system size and complexity. Residential systems typically take 1-2 days, while larger commercial or industrial systems may take several weeks.",
              },
              {
                question: "Do you provide maintenance services?",
                answer:
                  "Yes, we offer comprehensive maintenance packages including regular inspections, filter replacements, and 24/7 emergency support to ensure optimal system performance.",
              },
              {
                question: "What's included in a free consultation?",
                answer:
                  "Our free consultation includes water quality testing, needs assessment, system recommendations, and a detailed quote with no obligations.",
              },
              {
                question: "Do you offer financing options?",
                answer:
                  "Yes, we provide flexible financing options for both residential and commercial customers. Contact us to discuss payment plans that fit your budget.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6 animate-fadeInUp">
                <div style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
