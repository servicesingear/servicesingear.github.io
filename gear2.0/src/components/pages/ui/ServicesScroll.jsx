import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ServicesScroll() {
  const serviceRowsRef = useRef(null);

  const scrollUp = () => {
    if (serviceRowsRef.current) {
      serviceRowsRef.current.scrollBy({ top: -150, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (serviceRowsRef.current) {
      serviceRowsRef.current.scrollBy({ top: 150, behavior: "smooth" });
    }
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

  const services = [
    {
      icon: "🔧",
      title: "Technical Support",
      desc: "We provide reliable technical support to ensure seamless operation, optimal performance, and timely maintenance, helping you maximize efficiency and minimize downtime.",
    },
    {
      icon: "🚀",
      title: "Innovation",
      desc: "We continuously innovate to develop cutting-edge solutions that enhance efficiency, drive sustainability, and shape the future of automation.",
    },
    {
      icon: "🔒",
      title: "Security",
      desc: "We implement robust security measures to protect systems, ensure data integrity, and safeguard operations against potential threats.",
    },
    {
      icon: "🛠️",
      title: "Maintenance",
      desc: "We provide proactive maintenance services to enhance reliability, extend system lifespan, and prevent operational disruptions.",
    },
    {
      icon: "💡",
      title: "Consulting",
      desc: "We offer expert consulting services to help businesses optimize automation, integrate sustainable technologies, and drive innovation effectively.",
    },
  ];

  return (
    <section id="service" className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="md:flex md:space-x-12">
          {/* Left Column */}
             <motion.div
                    initial="hidden"
              animate="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUpStagger}
            className="md:w-1/3 flex flex-col justify-center mb-10 md:mb-0"
          >
            <p className="text-green-400 uppercase tracking-wide mb-2 font-semibold">
              Innovating the Future
            </p>
            <h2 className="text-4xl font-bold mb-4">Our Robotics Services</h2>
            <p className="text-gray-300">
              We specialize in transforming industries with cutting-edge Gear
              solutions. Using Green Robotics in maintenance and consulting,
              our expertise is tailored to meet your unique needs.
            </p>
          </motion.div>

          {/* Right Column */}
          <div className="md:w-2/3 relative flex flex-col items-center space-y-3">
            {/* Up Arrow */}
            <motion.button
              onClick={scrollUp}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2 }}
              className="text-green-400 text-3xl hover:text-green-600 transition"
              aria-label="Scroll up"
            >
              ▲
            </motion.button>

            {/* Scrollable container */}
            <div
              ref={serviceRowsRef}
              className="h-80 overflow-y-auto w-full space-y-6 scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-700 px-3"
            >
              {services.map(({ icon, title, desc }, idx) => (
                <motion.div
                  key={idx}
                  className="flex space-x-4 bg-gray-800 rounded-lg p-5 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <div className="text-3xl flex-shrink-0">{icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{title}</h4>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Down Arrow */}
            <motion.button
              onClick={scrollDown}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.2 }}
              className="text-green-400 text-3xl hover:text-green-600 transition"
              aria-label="Scroll down"
            >
              ▼
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
