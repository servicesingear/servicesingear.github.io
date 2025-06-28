import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AboutUs = () => {

  return (
    <div className="bg-black text-green-100 overflow-x-hidden">
      <HeroSection
        backgroundImage="/images/aboutus.png"
        headlines={[
          "Innovation drives us",
          "We Grow Together",
          "Think. Create. Evolve"
        ]}
        subtext="We’re a team of passionate individuals committed to building meaningful solutions and lasting relationships."
      />

      {/* Who We Are */}
      <motion.section
        className="bg-black text-green-100 pt-8 pb-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center ">
          <h2 className="text-4xl text-green-400 font-bold mb-6">Who We Are</h2>
          <p className="text-lg mb-4 text-justify">
            We're a young and ambitious team passionate about building thoughtful
            technology that empowers individuals and communities. Our foundation is
            rooted in curiosity, integrity, and a commitment to meaningful impact.
            While our journey has just begun, our vision is bold. We aim to shape
            the future with purposeful solutions and a strong sense of responsibility
            to our users, our partners, and the planet.
          </p>
        </div>
      </motion.section>

      {/* Mission + Vision */}
      <motion.section
        className="relative bg-gradient-to-br from-green-900 to-black text-white py-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center">
          <motion.div variants={slideInLeft}>
            <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
              <span className="text-green-400">🎯</span> Our Mission
            </h2>
            <p className="text-lg">
              To empower innovators and problem-solvers with digital tools that drive
              positive impact and sustainable growth.
            </p>
          </motion.div>

          <motion.div variants={slideInRight}>
            <h2 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
              <span className="text-green-400">🌍</span> Our Vision
            </h2>
            <p className="text-lg">
              A world where technology serves people, enhances collaboration, and
              inspires change.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Makes Us Different */}
      <motion.section
        className="bg-black text-green-100 py-24 px-6 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
      >
        <h2 className="text-4xl font-bold text-center text-green-400 mb-14 ">What Makes Us Different</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
          {[
            {
              icon: "🎨",
              title: "User-First Design",
              desc: "Every decision we make is rooted in empathy and simplicity.",
            },
            {
              icon: "⚡",
              title: "Agile & Adaptive",
              desc: "We move fast, learn quickly, and evolve with your needs.",
            },
            {
              icon: "🌱",
              title: "Sustainable Tech",
              desc: "We care about ethical development and long-term impact.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-green-950 p-8 rounded-2xl shadow-lg"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Road Ahead */}
      <motion.section
        className="bg-gradient-to-br from-black to-green-900 text-white py-24 px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">The Road Ahead</h2>
          <p className="text-lg mb-8">
            We're just getting started. Our aim is to build a future where digital
            products empower, connect, and elevate communities around the world.
          </p>
          <p className="text-green-300 font-semibold">
            We’re building with intention — and you’re invited to be part of it.
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="relative text-center text-white py-20 px-6 from-green-800 to-green-600"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-xl mx-auto backdrop-blur-sm bg-white/10 p-10 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-green-400 ">Join Us on This Journey</h2>
          <p className="mb-6 text-lg">
            We’re just getting started — and we’re looking for curious minds to build
            with us.
          </p>
          <Link
            to="/career"
            className="inline-block bg-black px-6 py-3 rounded-full text-green-200 hover:bg-green-100 hover:text-black transition"
          >
            Explore Careers
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
