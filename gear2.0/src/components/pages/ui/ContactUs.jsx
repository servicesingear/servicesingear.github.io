import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

export default function ContactUs() {


  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    query: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://servicesingear-github-io.onrender.com/submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          position: "",
          query: "",
          description: "",
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-green-100 font-sans">
      <HeroSection
        backgroundImage="/images/contact.png"
        headlines={["Let’s connect now", "Here to help", "Answers start here"]}
        subtext="Have any questions or inquiries? Reach out to us for more information about our services and offerings."
      />

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 pb-4 pt-12"
      >
        {[
          {
            icon: "/images/phone.svg",
            title: "Phone",
            value: "+91 9502172867",
            desc: "Reach us anytime between 9am–6pm IST for quick assistance.",
          },
          {
            icon: "/images/email.svg",
            title: "Email",
            value: "support@servicesingear.com",
            desc: "Send us an email and we’ll reply within 24 hours.",
          },
          {
            icon: "/images/location.svg",
            title: "Remote Office",
            value: "We work remotely",
            desc: "No physical address — we operate entirely online.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-gray-900 p-6 rounded-xl shadow-md text-green-200 hover:shadow-lg transition text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="flex items-center justify-center gap-4 mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img src={card.icon} alt={card.title} className="w-16 h-16" />
            </motion.div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-green-300 mb-1">{card.value}</p>
            <p className="text-sm text-green-400">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Form & Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 py-12 pt-24 pb-12"
      >
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 space-y-4 mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="flex-1 p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="flex-1 p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
            />
            <input
              type="text"
              name="position"
              placeholder="Your Position"
              value={formData.position}
              onChange={handleChange}
              className="flex-1 p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
            />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
          />
          <input
            type="text"
            name="query"
            placeholder="Subject / Query"
            value={formData.query}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
          />
          <textarea
            name="description"
            placeholder="Message"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white placeholder-green-300 outline-none"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 hover:bg-green-800 transition duration-300 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2"
            >
              {loading && (
                <svg
                  className="w-5 h-5 animate-spin text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Image */}
        <div className="flex justify-center md:col-span-1 relative">
          <div className="absolute top-4 left-4 w-full max-w-[500px] h-full bg-gray-900 z-0"></div>
          <img
            src="/images/Contactus_sideimage.png"
            alt="Contact"
            className="w-full object-cover max-h-[500px] relative z-10"
          />
        </div>
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 pt-24 pb-8"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.39845519056!2d78.4747707!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9382ebd8b5b7%3A0x7227351e609aff75!2sHyderabad!5e0!3m2!1sen!2sin!4v1621238497934!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Map"
          className="rounded-xl"
        ></iframe>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-center py-12"
      >
        <h3 className="text-lg font-semibold">Follow us</h3>
        <div className="flex justify-center gap-6 mt-4 animate-pulse">
          {[
            { href: "https://facebook.com", icon: "facebook.svg" },
            { href: "https://twitter.com", icon: "twitter.svg" },
            // { href: "https://linkedin.com", icon: "youtube.svg" },
            {
              href: "https://www.instagram.com/gear_services/#",
              icon: "instagram.svg",
            },
            {
              href: "https://www.linkedin.com/company/servicesingear",
              icon: "linkedin.png",
            },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="text-green-300 hover:text-white"
            >
              <img
                src={`/images/${social.icon}`}
                alt="icon"
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
