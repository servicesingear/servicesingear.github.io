import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import productsList from "./ProductsList";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";
import StatsCounter from "./StatsCounter";
import ServicesScroll from "./ServicesScroll";
import Image3D from "./Image3D";
import LoadingScreen from "./LoadingScreen"; // import loading screen

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i = 1) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const slideInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: (i = 1) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const slideInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: (i = 1) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const fadeUpStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const Home = () => {
  // const [loading, setLoading] = useState(true);



  const services = [
    {
      title: "AI & Machine Learning",
      desc: "Custom AI solutions including chatbots, predictive analytics, and automation tools.",
      icon: "🤖",
    },
    {
      title: "Robotics Engineering",
      desc: "Design and build robotics systems for manufacturing, automation, and sustainability.",
      icon: "🦾",
    },
    {
      title: "IT & Web Development",
      desc: "Full-stack development of scalable websites, apps, and cloud infrastructure.",
      icon: "💻",
    },
    {
      title: "Consulting & Support",
      desc: "Expert advice to optimize your tech stack, improve workflows, and maintain your systems.",
      icon: "🧩",
    },
  ];

  // if (loading) return <LoadingScreen />;

  return (
    <div className="bg-black text-green-400 min-h-screen font-sans overflow-hidden">
      <Image3D />
   

      {/* Why Us */}
      <section className="relative z-10 py-32 px-6 text-center bg-black">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {[
            ["🌱 Sustainable by Design", "Every solution is eco-conscious."],
            [
              "🧠 AI, Robotics & IT Experts",
              "Smart systems built for real-world performance.",
            ],
            [
              "🤝 Fully Collaborative",
              "We work closely with you step-by-step.",
            ],
            ["⚡ Fast Prototyping", "From concept to product — quickly."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              className="border-l-4 pl-4 border-green-500"
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              variants={i % 2 === 0 ? slideInLeft : slideInRight}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-green-200">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
        className="bg-black text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">Our Process</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔍",
                title: "Discover",
                desc: "We begin by understanding your challenges...",
              },
              {
                icon: "🧠",
                title: "Design",
                desc: "We craft intelligent architectures...",
              },
              {
                icon: "🛠️",
                title: "Build",
                desc: "Our cross-functional teams bring your vision...",
              },
              {
                icon: "🚀",
                title: "Deploy",
                desc: "We deliver production-ready solutions...",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={zoomIn}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-green-500 transition duration-300"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  {title}
                </h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


     
      {/* 
    <section className="text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl text-center mb-14 font-bold tracking-wide text-green-400">
          Our Services
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="flex space-x-6 p-6 bg-gray-800 rounded-lg border border-green-600 hover:border-green-400 transition cursor-pointer shadow-lg"
            >
              <div className="text-5xl flex items-center">{icon}</div>
              <div>
                <h2 className="text-xl font-bold mb-1">{title}</h2>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}

      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 relative">
          {/* Left Side (Vertically and Horizontally Centered) */}
         <div
            className="md:w-1/3 flex items-center justify-center text-center md:text-left"
          >
            <motion.div
          initial="hidden"
    animate="visible"
    viewport={{ once: false, amount: 0.3 }}
    variants={fadeUpStagger} className="md:sticky top-32">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Our Products
              </h2>
              <p className="text-gray-300">
                From smart robotics to AI tools, chatbots, and enterprise
                websites — we engineer powerful solutions that drive automation,
                intelligence, and innovation.
              </p>
            
            
          </motion.div>
          </div>

          {/* Right Side: Infinite Scroll with Pause on Hover */}
          <div className="md:w-2/3 overflow-hidden relative group">
            <div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {[...productsList, ...productsList].map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="min-w-[250px] max-w-[250px] mx-3 bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  custom={index}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold text-primary">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{product.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* 
     
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-400 mb-12">
            Apply for Training
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Want to upskill in cutting-edge technologies? We offer hands-on
            training programs designed to help you master real-world skills in
            Python, Generative AI, Robotics, and more.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🐍",
                title: "Python Programming",
                desc: "Master Python for data analysis, automation, and full-stack projects.",
              },
              {
                icon: "🤖",
                title: "Generative AI",
                desc: "Learn to build GenAI apps with LLMs, prompt engineering, and fine-tuning.",
              },
              {
                icon: "🦾",
                title: "Robotics",
                desc: "Get hands-on with robotics programming, sensors, and automation systems.",
              },
              {
                icon: "☁️",
                title: "Cloud & DevOps",
                desc: "Understand CI/CD pipelines, Docker, Kubernetes, and cloud deployment.",
              },
              {
                icon: "💻",
                title: "Web Development",
                desc: "Build scalable websites and apps with React, Node.js, and modern stacks.",
              },
              {
                icon: "🧠",
                title: "AI & ML Basics",
                desc: "Start your journey into machine learning with practical projects.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeUpStagger}
                custom={i + 1}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-green-500 transition duration-300"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  {title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{desc}</p>
                <Link
                  to="/apply-training"
                  className="inline-block px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition font-semibold"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      

{/* Training Section – Fresh Design */}
<section className="bg-black text-white py-28">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Side: Highlight Box */}
    <div className="bg-gradient-to-tr from-green-700 to-green-500 rounded-3xl p-10 shadow-2xl flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-4">Level Up Your Skills</h2>
      <p className="text-gray-100 mb-6">
        We build innovative products — and now you can learn how we do it. Join our **Python + Generative AI** training program and gain hands-on experience with real-world projects.
      </p>
      <p className="text-lg font-semibold mb-6 text-white/90">Price: ₹1999/-</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/apply-training"
          className="px-6 py-3 bg-black text-green-400 font-semibold rounded-lg hover:bg-white hover:text-black transition text-center"
        >
          Apply Now
        </Link>
        {/* <Link
          to="/training"
          className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-center"
        >
          More Details
        </Link> */}
      </div>
    </div>

    {/* Right Side: Feature Highlights */}
    <div className="grid grid-cols-1 gap-6">
      {[
        {
          title: "Hands-On Python Projects",
          desc: "Learn by doing, from coding exercises to complete real-world projects.",
          icon: "🐍",
        },
        {
          title: "Generative AI Mastery",
          desc: "Build AI apps, explore prompt engineering, and work with LLMs.",
          icon: "🤖",
        },
        {
          title: "Expert Mentorship",
          desc: "Guidance from professionals who build products daily.",
          icon: "🧑‍💻",
        },
      ].map(({ title, desc, icon }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          className="bg-gray-900 rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:shadow-green-500 transition"
        >
          <div className="text-4xl">{icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-1">{title}</h3>
            <p className="text-gray-300 text-sm">{desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <FAQ />
      <motion.section
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 text-center"
        style={{ backgroundImage: "url('/images/contact_HomePage.png')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="bg-black/60 absolute inset-0 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Mission to Shape the Future
          </h2>
          <p className="mb-6 text-white/90">
            Be part of a team that’s engineering sustainable innovations and
            intelligent solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/products"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Products
            </Link>
            <Link
              to="/career"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
            >
              Join Us
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
