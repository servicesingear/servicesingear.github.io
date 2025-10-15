import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const ApplyTraining = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // ✅ added phone
    // course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://servicesingear-github-io.onrender.com/apply-training", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // includes phone now
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        className="w-full max-w-2xl bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
          Apply for Training
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Fill in the form below to apply for Python, Generative AI, training programs.
        </p>

        {submitted ? (
          <div className="text-center text-green-400 font-semibold">
            ✅ Thank you! Your application has been submitted.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Phone Number</label> {/* ✅ phone input */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* <div>
              <label className="block text-sm mb-2">Select Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Choose a Course --</option>
                <option value="Python Programming">🐍 Python Programming</option>
                <option value="Generative AI">🤖 Generative AI</option>
                <option value="Robotics">🦾 Robotics</option>
                <option value="Cloud & DevOps">☁️ Cloud & DevOps</option>
                <option value="Web Development">💻 Web Development</option>
                <option value="AI & ML Basics">🧠 AI & ML Basics</option>
              </select>
            </div> */}

            <div>
              <label className="block text-sm mb-2">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                loading ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:bg-green-500"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ApplyTraining;
