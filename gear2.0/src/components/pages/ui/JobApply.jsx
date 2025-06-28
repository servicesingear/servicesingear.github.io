import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import jobs from "./Jobs";
import { Typewriter } from "react-simple-typewriter";

const JobApply = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id || j.id === Number(id));
  const fileInputRef = useRef(null);
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    coverLetter: "",
    resume: null,
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });

  if (!job)
    return (
      <div className="text-center p-12 text-red-500 font-semibold text-xl">
        Job not found (id: {id})
      </div>
    );

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });
    payload.append("jobTitle", job.title);

    try {
      const response = await fetch(
        "https://servicesingear-github-io.onrender.com/apply-job",
        {
          method: "POST",
          body: payload,
        }
      );

      if (!response.ok) throw new Error("Failed to submit application.");

      const data = await response.json();
      setStatus({ loading: false, message: data.message, error: false });

      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        skills: "",
        coverLetter: "",
        resume: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (err) {
      setStatus({
        loading: false,
        message: "Submission failed. Please try again.",
        error: true,
      });
    }
  };

  return (
    <div className="bg-black text-green-100 font-sans">
      {/* Hero Section */}
      <section className="text-center h-[300px] md:h-[400px] py-24 md:py-32 bg-green-700 text-white relative overflow-hidden mb-12">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/applyhero.png)", // Your background image
            backgroundSize: "cover", // Ensures the image covers the section
            backgroundPosition: "center", // Centers the image
            height: "100%", // Make sure it covers the full height of the section
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
            <Typewriter
              words={[
                "Your future starts",

                "Apply. Advance. Achieve",

                "Talent meets opportunity",
              ]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-base sm:text-sm md:text-lg max-w-xl mx-auto text-gray-300">
            We're always looking for passionate, driven individuals to grow with
            us. Explore open roles and build your future here.
          </p>
        </div>
      </section>

      {/* Apply Section */}
      <section className="bg-black py-12 px-6 pb-24 text-green-100">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-green-300 mb-6">
            Apply for {job.title}
          </h3>

          <p className="mb-4 text-green-400">
            Fill in your details below to apply. Make sure to upload your
            updated resume and briefly describe why you’re a great fit for this
            role.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
              className="w-full p-4 bg-zinc-800 border border-green-600 rounded-md placeholder-green-500 text-green-100"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full p-4 bg-zinc-800 border border-green-600 rounded-md placeholder-green-500 text-green-100"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-4 bg-zinc-800 border border-green-600 rounded-md placeholder-green-500 text-green-100"
            />
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience in Years"
              min="0"
              required
              className="w-full p-4 bg-zinc-800 border border-green-600 rounded-md placeholder-green-500 text-green-100"
            />
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Your Key Skills"
              required
              className="w-full p-4 bg-zinc-800 border border-green-600 rounded-md placeholder-green-500 text-green-100"
            />
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Short message (Cover Letter)"
              rows={4}
              className="w-full p-4 bg-zinc-800 border border-green-600 rounded-md placeholder-green-500 text-green-100 resize-none"
            />
            <div>
              <label className="block text-green-300 mb-1">Upload Resume</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                ref={fileInputRef}
                className="w-full p-3 bg-zinc-800 border border-green-600 rounded-md text-green-200 cursor-pointer"
              />
            </div>
            <button
              type="submit"
              disabled={status.loading}
              className="bg-green-600 hover:bg-green-700 w-full py-4 rounded-md font-semibold text-white transition"
            >
              {status.loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>
      {status.message && (
        <>
          {/* Popup Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="bg-black text-white border border-white px-10 py-8 rounded-2xl shadow-2xl w-[90%] max-w-xl text-center backdrop-blur-md">
              <h2
                className={`text-2xl font-bold mb-4 ${
                  status.error ? "text-red-400" : "text-green-400"
                }`}
              >
                {status.error
                  ? "Oops! Something Went Wrong"
                  : "🎉 Application Submitted Successfully"}
              </h2>

              <p className="text-lg mb-4">
                {status.error ? (
                  <>
                    We encountered an issue while submitting your application.
                    <br />
                    Please check your internet connection or try again later.
                  </>
                ) : (
                  <>
                    Thank you for applying for the <strong>{job.title}</strong>{" "}
                    position!
                    <br />
                    Our team will review your application and contact you if
                    you’re shortlisted.
                  </>
                )}
              </p>

              <button
                onClick={() =>
                  setStatus({ loading: false, message: "", error: false })
                }
                className="mt-2 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
              >
                Close
              </button>
            </div>
          </motion.div>

          {/* Blurred Background Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
            onClick={() =>
              setStatus({ loading: false, message: "", error: false })
            }
          />
        </>
      )}
    </div>
  );
};

export default JobApply;
