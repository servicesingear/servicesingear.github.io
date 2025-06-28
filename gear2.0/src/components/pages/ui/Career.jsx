import React, { useState, useEffect } from "react";
import allJobs from "./Jobs"; // Adjust the path based on where your files are located
import { Typewriter } from "react-simple-typewriter";
import { ContinuousImageScroll } from "./ContinuousImageScroll.JSX";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";

const Career = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
 

  const handleSendClick = () => {
    setLoading(true);
    // Simulate loading for 2 seconds (as mailto opens immediately)
    setTimeout(() => {
      setLoading(false);
      // Here you can optionally show a "Thank you" message
    }, 5000);
  };
  const jobsPerPage = 4;

  const [filters, setFilters] = useState({
    fullTime: false,
    partTime: false,
    contract: false,
    intern: false,
    departments: [],
    workModels: [],
  });

  const departments = allJobs?.length
    ? [...new Set(allJobs.map((job) => job.department))]
    : [];
  const workModels = allJobs?.length
    ? [...new Set(allJobs.map((job) => job.work_model))]
    : [];

  const handleCheckboxChange = (field, value) => {
    setFilters((prev) => {
      const currentValues = prev[field];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [field]: newValues };
    });
    setCurrentPage(1);
  };

  const handleJobTypeChange = (type) => {
    setFilters((prev) => ({ ...prev, [type]: !prev[type] }));
    setCurrentPage(1);
  };

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const typeMatch =
      (!filters.fullTime &&
        !filters.partTime &&
        !filters.contract &&
        !filters.intern) ||
      (filters.fullTime && job.job_type === "Full Time") ||
      (filters.partTime && job.job_type === "Part Time") ||
      (filters.contract && job.job_type === "Contract") ||
      (filters.intern && job.job_type === "Intern");

    const departmentMatch =
      filters.departments.length === 0 ||
      filters.departments.includes(job.department);

    const workModelMatch =
      filters.workModels.length === 0 ||
      filters.workModels.includes(job.work_model);

    return matchesSearch && typeMatch && departmentMatch && workModelMatch;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const isFilterApplied = () => {
    const { fullTime, partTime, contract, intern, departments, workModels } =
      filters;
    return (
      fullTime ||
      partTime ||
      contract ||
      intern ||
      departments.length > 0 ||
      workModels.length > 0 ||
      search.trim() !== ""
    );
  };

  const benefits = [
    {
      title: "Flexible remote work options",
      desc: "We believe work should adapt to your life. Enjoy the freedom to work from anywhere, with flexible hours that support a healthy work-life balance.",
    },
    {
      title: "Innovative projects & technologies",
      desc: "Be part of cutting-edge initiatives using the latest tech stacks. You’ll contribute to impactful solutions that shape the future.",
    },
    {
      title: "Supportive, collaborative culture",
      desc: "We foster a people-first culture where every voice is valued. Learn, grow, and succeed in a team that genuinely supports each other.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-green-100 font-sans">
      {/* Hero Section */}

      <HeroSection
        backgroundImage="/images/job-hero-image.png"
        headlines={[
          "Grow with us",
          "Challenge sparks growth",
          "Innovate. Impact. Inspire",
        ]}
        subtext="We're always looking for passionate, driven individuals to grow with us. Explore open roles and build your future here."
      />

      {/* Why Us */}
      <section className="py-8 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-400 ">
          Why Work With Us?
        </h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">✓ {benefit.title}</h3>
              <p className="text-green-300 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6 max-w-7xl mx-auto md:flex gap-8">
        {/* Filter Sidebar */}
        <aside className="w-full md:w-1/3 mb-10 md:mb-0">
          <h2 className="text-2xl font-bold mb-6">Filter Jobs</h2>
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
          />

          <h4 className="text-lg font-semibold mt-4 mb-2 text-green-400">
            Job Type
          </h4>
          {["fullTime", "partTime", "contract", "intern"].map((type) => (
            <label key={type} className="block">
              <input
                type="checkbox"
                checked={filters[type]}
                onChange={() => handleJobTypeChange(type)}
                className="accent-green-500 mr-2"
              />
              {type.replace(/([A-Z])/g, " $1").trim()}
            </label>
          ))}

          <h4 className="text-lg font-semibold mt-4 mb-2 text-green-400">
            Department
          </h4>
          {departments.map((dept) => (
            <label key={dept} className="block">
              <input
                type="checkbox"
                checked={filters.departments.includes(dept)}
                onChange={() => handleCheckboxChange("departments", dept)}
                className="accent-green-500 mr-2"
              />
              {dept}
            </label>
          ))}

          <h4 className="text-lg font-semibold mt-4 mb-2 text-green-400">
            Work Model
          </h4>
          {workModels.map((model) => (
            <label key={model} className="block">
              <input
                type="checkbox"
                checked={filters.workModels.includes(model)}
                onChange={() => handleCheckboxChange("workModels", model)}
                className="accent-green-500 mr-2"
              />
              {model}
            </label>
          ))}
        </aside>

        {/* Job Listings */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Current Openings
          </h2>
          <div className="space-y-6">
            {currentJobs.length > 0 ? (
              currentJobs.map((job, index) => (
                <div
                  key={index}
                  className="border border-green-700 rounded-xl p-6 hover:bg-green-900/10 transition"
                >
                  <h3 className="text-xl font-semibold text-green-300">
                    {job.title.split(" – ")[0]}
                  </h3>
                  <p className="text-sm text-green-400">
                    {job.location} • {job.job_type}
                  </p>
                  <p className="mt-2 text-green-200">
                    {job.description || "No description available."}
                  </p>

                  <Link
                    to={`/careers/${job.id}`}
                    className="inline-block mt-4 px-4 py-2 text-sm bg-green-700 hover:bg-green-600 text-white rounded-md"
                  >
                    Apply Now
                  </Link>
                </div>
              ))
            ) : isFilterApplied() ? (
              <p className="text-green-400 text-center">
                No jobs found matching your filters.
              </p>
            ) : (
              <p className="text-green-400 text-center">
                No jobs available at the moment.
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-2 mt-8 text-green-200">
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Previous Page"
            >
              ←
            </button>

            {/* Page Numbers with ellipsis */}
            {[...Array(totalPages)].map((_, idx) => {
              const pageNum = idx + 1;

              if (
                pageNum === 1 ||
                pageNum === totalPages ||
                (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)
              ) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded flex items-center justify-center text-sm font-semibold
            ${
              pageNum === currentPage
                ? "bg-green-500 text-black"
                : "hover:bg-green-700"
            }
          `}
                  >
                    {pageNum}
                  </button>
                );
              } else if (
                pageNum === currentPage - 3 ||
                pageNum === currentPage + 3
              ) {
                // show ellipsis only once for skipped pages
                return (
                  <span key={pageNum} className="px-2 select-none">
                    ...
                  </span>
                );
              }
              return null;
            })}

            {/* Right Arrow */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Next Page"
            >
              →
            </button>
          </div>
        </div>
      </section>
      {/* Image scrolling */}
      <ContinuousImageScroll />

      {/* Contact / Application Prompt */}
      <motion.section
        className="text-center py-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Didn't find a matching role?
        </h2>
        <p className="mb-6 text-green-300">
          Send us your resume anyway — we’re always hiring great talent.
        </p>

        <button
          onClick={handleSendClick}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl transition flex items-center justify-center mx-auto"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
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
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Preparing your email...
            </>
          ) : (
            <a
              href={`mailto:hr@servicesingear.com?subject=Job Application – [Your Name]&body=Dear Hiring Team,%0D%0A%0D%0AI hope this message finds you well.%0D%0A%0D%0AI am writing to express my interest in potential opportunities at [Company Name].%0D%0A%0D%0AI bring experience in [mention your key area: e.g., frontend development, UI/UX design, project management], along with strong skills in technologies such as [e.g., React, Node.js, Figma, Agile methodologies].%0D%0A%0D%0AI've attached my resume for your review. I am excited about the opportunity to contribute to innovative projects and collaborate with a team that values creativity, impact, and growth.%0D%0A%0D%0AThank you for considering my application. I would welcome the chance to discuss how my background could benefit your team.%0D%0A%0D%0ABest regards,%0D%0A[Your Full Name]%0D%0A[LinkedIn or Portfolio URL]%0D%0A[Phone Number]`}
              className="w-full h-full block"
              onClick={(e) => e.stopPropagation()} // Prevent button click interference
            >
              Send Resume
            </a>
          )}
        </button>
      </motion.section>
    </div>
  );
};

export default Career;
