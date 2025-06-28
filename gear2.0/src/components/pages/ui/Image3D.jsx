// HeroSection.jsx
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className=" min-h-screen flex items-center justify-center text-white ">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="video/main_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-6 space-y-6 "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold leading-tight">
          Powering <span className="text-green-400">Innovation </span>
          with AI, Robotics & IT
        </h1>
        <p className="text-lg text-gray-300">
          From intelligent automation to digital transformation, we turn your green ideas into scalable tech.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/services"  className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-white">
            Explore Services
          </Link>
          <Link to="/contact" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 font-semibold">
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
