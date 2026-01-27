"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});

        // Reset success message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Feel free to reach out through the contact form
                or via any of the channels below.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors">
                    <Mail className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <a
                      href="mailto:arifulislam747630@gmail.com"
                      className="text-yellow-400 hover:underline text-sm"
                    >
                      arifulislam747630@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors">
                    <MapPin className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">
                      St. John's, Newfoundland, Canada
                    </p>
                  </div>
                </div>

                {/* Phone (Optional - remove if you don't want to share) */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20 group-hover:bg-yellow-400/20 transition-colors">
                    <Phone className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">
                      Available upon request
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ariful202291976"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20 hover:bg-yellow-400/20 hover:scale-110 transition-all"
                  >
                    <Github className="text-yellow-400" size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-ariful-islam-98094623b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20 hover:bg-yellow-400/20 hover:scale-110 transition-all"
                  >
                    <Linkedin className="text-yellow-400" size={24} />
                  </a>
                  <a
                    href="mailto:arifulislam747630@gmail.com"
                    className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20 hover:bg-yellow-400/20 hover:scale-110 transition-all"
                  >
                    <Mail className="text-yellow-400" size={24} />
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <div className="mt-8">
                <a
                  href="/ariful-resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded-lg hover:bg-yellow-400/20 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Name <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-neutral-900 border ${
                      errors.name ? "border-red-500" : "border-yellow-500/20"
                    } rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all text-white placeholder-gray-500`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Email <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-neutral-900 border ${
                      errors.email ? "border-red-500" : "border-yellow-500/20"
                    } rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all text-white placeholder-gray-500`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Subject <span className="text-yellow-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-neutral-900 border ${
                      errors.subject ? "border-red-500" : "border-yellow-500/20"
                    } rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all text-white placeholder-gray-500`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Message <span className="text-yellow-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-neutral-900 border ${
                      errors.message ? "border-red-500" : "border-yellow-500/20"
                    } rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-500`}
                    placeholder="Tell me about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-green-400 text-center flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 text-center flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Failed to send message. Please try again or email me
                      directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
