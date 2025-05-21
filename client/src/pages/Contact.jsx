import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaShieldAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus((prevState) => ({
      ...prevState,
      submitting: true,
    }));

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form and show success message
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setFormStatus({
        submitting: false,
        info: {
          error: false,
          msg: "Thank you for your message. I'll get back to you soon!",
        },
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        info: {
          error: true,
          msg: "Oops! Something went wrong. Please try again.",
        },
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="flex justify-center items-center space-x-3 mb-4">
            <FaShieldAlt className="text-blue-600 text-3xl sm:text-4xl" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Contact Me
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to
            discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <FaEnvelope className="mr-3 text-blue-600" />
              Contact Information
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  <FaEnvelope className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Email</h3>
                  <p className="text-sm text-gray-600">
                    Contact through professional networks
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-50 p-3 rounded-full">
                  <FaPhone className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Phone</h3>
                  <p className="text-sm text-gray-600">
                    Available during business hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-50 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700">Location</h3>
                  <p className="text-sm text-gray-600">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 bg-blue-50 p-4 rounded-lg">
              <p className="text-xs sm:text-sm text-blue-700 text-center">
                Prefer secure communication methods
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <FaPaperPlane className="mr-3 text-blue-600" />
                Send a Message
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Form Fields */}
                {[
                  {
                    name: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Your Name",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "your.email@example.com",
                  },
                  {
                    name: "subject",
                    label: "Subject",
                    type: "text",
                    placeholder: "Project Inquiry",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-gray-700 mb-2 text-sm"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2 text-sm"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Form Status Message */}
                {formStatus.info.msg && (
                  <div
                    className={`
                      p-3 rounded-lg text-center text-sm
                      ${
                        formStatus.info.error
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }
                    `}
                  >
                    {formStatus.info.msg}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`
                    w-full py-2 sm:py-3 rounded-lg text-white font-semibold transition-all duration-300
                    text-sm sm:text-base
                    ${
                      formStatus.submitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    }
                    flex items-center justify-center space-x-2
                  `}
                >
                  {formStatus.submitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
