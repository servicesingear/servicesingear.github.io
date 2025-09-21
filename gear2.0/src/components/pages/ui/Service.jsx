import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import React from "react";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};
const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const services = [
  {
    title: "Custom Robotics Development",
    description: "Intelligent robots tailored for industrial, logistics, and consumer applications.",
    icon: "🤖",
  },
  {
    title: "AI Model Training",
    description: "Predictive analytics with high-accuracy model training and deployment.",
    icon: "🧠",
  },
  {
    title: "Process Automation",
    description: "AI-driven automation for streamlined and efficient workflows.",
    icon: "📈",
  },
  {
    title: "Computer Vision",
    description: "Image recognition and visual intelligence for real-world integration.",
    icon: "🔍",
  },
  {
    title: "AI Chatbots",
    description: "Responsive, intelligent support systems to enhance customer experience.",
    icon: "🌐",
  },
];

const industries = [
  "Manufacturing & Industrial Automation",
  "Healthcare & Medical Diagnostics",
  "Retail & E-commerce Solutions",
  "Smart Logistics & Supply Chain",
  "Security & Surveillance",
];

const technologies = [
  "TensorFlow",
  "ROS (Robot Operating System)",
  "OpenCV",
  "PyTorch",
  "NVIDIA Jetson",
  "GPT APIs",
];

const caseStudies = [
  {
    title: "Smart Factory Automation",
    result:
      "Reduced error rates by 40% and improved output by 25% in 3 months.",
  },
  {
    title: "AI Chatbot for Healthcare",
    result: "Handled 70% of patient queries automatically with 95% accuracy.",
  },
];

const testimonials = [
  {
    name: "JS Infra Developers",
    feedback:
      "GEAR Gate's automated system makes vehicle entry fast and hassle-free. It's accurate, secure, and works seamlessly. Highly recommended!",
  },
  {
    name: "Green Home Enterprises",
    feedback:
      "AI-PR social media manager has made content posting effortless! It generates engaging images and text daily, keeping our accounts active and boosting engagement. A game-changer!",
  },
  {
    name: "Crux-AI",
    feedback:
      "The GEAR image generator creates stunning, tailored product visuals in seconds, making marketing faster, easier, and more effective.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-green-100 font-sans">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/service.png"
        headlines={[
          "Quality meets consistency.",
          "Powering future technology.",
          "Innovate with intelligence.",
        ]}
        subtext="We specialize in cutting-edge AI and robotics services to enhance operational efficiency, precision, and scalability for modern businesses."
      />

      {/* Services */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="px-4 sm:px-10 lg:px-20 py-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-12 text-green-400 text-center"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeScale}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-green-500 transition duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Industries */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="px-4 sm:px-10 lg:px-20 py-12"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
          Industries We Serve
        </h2>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              variants={fadeScale}
              className="bg-gray-700 border border-green-500 rounded-xl p-6 text-center text-lg font-medium hover:scale-105 transition"
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={slideInLeft}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="px-4 sm:px-10 lg:px-20 py-12"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-center">
          {technologies.map((tech, i) => (
            <motion.span
              key={i}
              variants={fadeScale}
              className="bg-gray-700 px-6 py-3 rounded-full border border-green-400 text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={slideInRight}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="px-4 sm:px-10 lg:px-20 py-12"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
          Case Studies
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
              <p className="text-gray-300">{cs.result}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 1.3 }}
        viewport={{ once: false }}
        className="px-4 sm:px-10 lg:px-20 py-12"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
          What Our Clients Say
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeScale}
              className="bg-gray-800 p-6 rounded-xl border border-green-600 shadow-md"
            >
              <p className="italic text-green-200 mb-4">“{t.feedback}”</p>
              <p className="font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 1.0 }}
        viewport={{ once: false }}
        className="px-4 sm:px-10 lg:px-16 py-12 text-green-100"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div variants={slideInLeft} className="space-y-6">
            <h2 className="text-4xl font-extrabold leading-tight">
              Ready to Automate Your Future?
            </h2>
            <p className="text-lg text-gray-400">
              Discover how our AI and robotics solutions can streamline your
              operations, reduce costs, and drive innovation in your
              organization.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            variants={slideInRight}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/images/robo.png"
              alt="AI robot"
              className="h-64 object-contain"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Service;
