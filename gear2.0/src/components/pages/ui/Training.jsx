import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
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

// Training programs list
const trainingPrograms = [
  {
    title: "Python Programming",
    description: "Master Python for automation, data science, and backend development.",
    icon: "🐍",
  },
  {
    title: "Generative AI",
    description: "Hands-on learning with LLMs, prompt engineering, and AI-powered apps.",
    icon: "🤖",
  },
  {
    title: "Robotics Engineering",
    description: "Build and program robotics systems with ROS, sensors, and automation.",
    icon: "🦾",
  },
  {
    title: "Cloud & DevOps",
    description: "Learn Docker, Kubernetes, CI/CD pipelines, and cloud deployments.",
    icon: "☁️",
  },
  {
    title: "Web Development",
    description: "Become full-stack with React, Node.js, and scalable architecture.",
    icon: "💻",
  },
  {
    title: "AI & ML Basics",
    description: "Kickstart your AI journey with ML algorithms and practical projects.",
    icon: "🧠",
  },
];

const Training = () => {
  return (
    <div className="bg-black text-green-100 font-sans">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/learn.png"
        headlines={[
         "Real-world training.",
"Learn new skills.",
"Shape your future."
        ]}
        subtext="Join our specialized training programs designed for beginners and professionals to gain hands-on experience in the most in-demand technologies."
      />

      {/* Training Programs */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="px-4 sm:px-10 lg:px-20 pt-16 pb-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-12 text-green-400 text-center"
        >
          Available Training Programs
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={index}
              variants={fadeScale}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-green-500 transition duration-300"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-300 mb-4">{program.description}</p>
              <Link
                to="/apply-training"
                className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2 rounded-lg transition duration-300"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Join Our Training */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={slideInLeft}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
        className="px-4 sm:px-10 lg:px-20 pt-0 pb-16"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
          Why Join Our Training?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            "Hands-on Projects",
            "Expert Mentors",
            "Flexible Schedule",
            "Industry Certifications",
          ].map((benefit, i) => (
            <motion.div
              key={i}
              variants={fadeScale}
              className="bg-gray-700 border border-green-500 rounded-xl p-6 font-medium hover:scale-105 transition"
            >
              {benefit}
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
        className="px-4 sm:px-10 lg:px-16 pt-0 pb-20 text-green-100"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div variants={slideInLeft} className="space-y-6">
            <h2 className="text-4xl font-extrabold leading-tight">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-gray-400">
              Apply now to join our training programs and gain the skills needed
              to excel in AI, robotics, and software development.
            </p>
            <Link
              to="/apply-training"
              className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition duration-300"
            >
              Apply for Training
            </Link>
          </motion.div>

          <motion.div variants={slideInRight} className="flex justify-center md:justify-end">
            <img
              src="/images/training.png"
              alt="Training illustration"
              className="h-64 object-contain"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Training;
