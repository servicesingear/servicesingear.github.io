// import { motion } from "framer-motion";
// import React from "react";
// import { Link } from "react-router-dom";
// import HeroSection from "./HeroSection";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const staggerContainer = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const fadeScale = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1 },
// };

// const slideInLeft = {
//   hidden: { opacity: 0, x: -40 },
//   visible: { opacity: 1, x: 0 },
// };

// const slideInRight = {
//   hidden: { opacity: 0, x: 40 },
//   visible: { opacity: 1, x: 0 },
// };

// // Training programs list
// const trainingPrograms = [
//   {
//     title: "Python Programming",
//     description: "Master Python for automation, data science, and backend development.",
//     icon: "🐍",
//   },
//   {
//     title: "Generative AI",
//     description: "Hands-on learning with LLMs, prompt engineering, and AI-powered apps.",
//     icon: "🤖",
//   },
//   {
//     title: "Robotics Engineering",
//     description: "Build and program robotics systems with ROS, sensors, and automation.",
//     icon: "🦾",
//   },
//   {
//     title: "Cloud & DevOps",
//     description: "Learn Docker, Kubernetes, CI/CD pipelines, and cloud deployments.",
//     icon: "☁️",
//   },
//   {
//     title: "Web Development",
//     description: "Become full-stack with React, Node.js, and scalable architecture.",
//     icon: "💻",
//   },
//   {
//     title: "AI & ML Basics",
//     description: "Kickstart your AI journey with ML algorithms and practical projects.",
//     icon: "🧠",
//   },
// ];

// const Training = () => {
//   return (
//     <div className="bg-black text-green-100 overflow-x-hidden">
//       {/* Hero Section */}
//       <HeroSection
//         backgroundImage="/images/learn.png"
//         headlines={[
//          "Real-world training.",
// "Learn new skills.",
// "Shape your future."
//         ]}
//         subtext="Join our specialized training programs designed for beginners and professionals to gain hands-on experience in the most in-demand technologies."
//       />

//       {/* Training Programs */}
//       <motion.section
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: false }}
//         className="px-4 sm:px-10 lg:px-20 pt-16 pb-12"
//       >
//         <motion.h2
//           variants={fadeInUp}
//           className="text-4xl font-bold mb-12 text-green-400 text-center"
//         >
//           Available Training Programs
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {trainingPrograms.map((program, index) => (
//             <motion.div
//               key={index}
//               variants={fadeScale}
//               className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-green-500 transition duration-300"
//             >
//               <div className="text-4xl mb-4">{program.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
//               <p className="text-gray-300 mb-4">{program.description}</p>
//               <Link
//                 to="/apply-training"
//                 className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-5 py-2 rounded-lg transition duration-300"
//               >
//                 Apply Now
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Why Join Our Training */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         variants={slideInLeft}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: false }}
//         className="px-4 sm:px-10 lg:px-20 pt-0 pb-16"
//       >
//         <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
//           Why Join Our Training?
//         </h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           {[
//             "Hands-on Projects",
//             "Expert Mentors",
//             "Flexible Schedule",
//             "Industry Certifications",
//           ].map((benefit, i) => (
//             <motion.div
//               key={i}
//               variants={fadeScale}
//               className="bg-gray-700 border border-green-500 rounded-xl p-6 font-medium hover:scale-105 transition"
//             >
//               {benefit}
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* CTA */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         variants={fadeInUp}
//         transition={{ duration: 1.0 }}
//         viewport={{ once: false }}
//         className="px-4 sm:px-10 lg:px-16 pt-0 pb-20 text-green-100"
//       >
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <motion.div variants={slideInLeft} className="space-y-6">
//             <h2 className="text-4xl font-extrabold leading-tight">
//               Ready to Start Learning?
//             </h2>
//             <p className="text-lg text-gray-400">
//               Apply now to join our training programs and gain the skills needed
//               to excel in AI, robotics, and software development.
//             </p>
//             <Link
//               to="/apply-training"
//               className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition duration-300"
//             >
//               Apply for Training
//             </Link>
//           </motion.div>

//           <motion.div variants={slideInRight} className="flex justify-center md:justify-end">
//             <img
//               src="/images/training.png"
//               alt="Training illustration"
//               className="h-64 object-contain"
//             />
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Training;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Training = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Header Section */}
      <section className="relative bg-gray-950 py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-green-400 mb-4">
            Python + Generative AI Training
          </h1>
          <p className="text-gray-300 text-lg">
            Learn from engineers who build real products. Gain dual expertise in
            Python and Generative AI — from coding fundamentals to building
            LLM-powered applications.
          </p>
          <div className="mt-8">
            <Link
              to="/apply-training"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 font-semibold transition"
            >
              Apply Now – ₹1999/-
            </Link>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeScale}>
          <img
            src="/images/training-hero.png"
            alt="Training illustration"
            className="rounded-2xl shadow-2xl border border-gray-800"
          />
        </motion.div>

        <motion.div variants={fadeScale}>
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Course Overview
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            This hands-on program covers everything from Python basics to
            advanced AI app development. You’ll code, experiment, and build
            real-world projects using Generative AI technologies like LLMs,
            prompt engineering, and API integration.
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>✅ 4-week intensive hybrid course</li>
            <li>✅ Learn from real product developers</li>
            <li>✅ Build deployable AI applications</li>
            <li>✅ Get certified after completion</li>
          </ul>
        </motion.div>
      </motion.section>

      {/* What You’ll Learn */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="bg-gray-950 py-20 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-green-400 mb-10">
          What You’ll Learn
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {[
            "Python fundamentals, data structures & automation",
            "Working with APIs and Flask for AI apps",
            "Understanding Generative AI & LLM architectures",
            "Prompt engineering for chatbots and content creation",
            "Building custom AI tools using OpenAI APIs",
            "Deploying AI models and apps to production",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeScale}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow hover:shadow-green-500 transition"
            >
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Course Structure / Curriculum */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-green-400">
          Course Structure
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { week: "Week 1", topic: "Python Foundations" },
            { week: "Week 2", topic: "Automation & APIs" },
            { week: "Week 3", topic: "Generative AI & Prompting" },
            { week: "Week 4", topic: "Project & Deployment" },
          ].map(({ week, topic }, i) => (
            <motion.div
              key={i}
              variants={fadeScale}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow hover:shadow-green-500 transition"
            >
              <h3 className="text-xl font-bold text-green-400 mb-2">{week}</h3>
              <p className="text-gray-300">{topic}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <section className="text-center bg-green-600 py-16">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Ready to Upskill?
        </h2>
        <p className="text-black/80 mb-8">
          Join the Python + Generative AI Training and start building intelligent
          systems today.
        </p>
        <Link
          to="/apply-training"
          className="px-10 py-3 bg-black text-green-400 font-semibold rounded-lg hover:bg-gray-900 transition"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
};

export default Training;
