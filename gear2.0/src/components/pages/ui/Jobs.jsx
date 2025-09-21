const allJobs = [
  {
    id: 1,
    title: "Robotics Engineer",
    department: "Hardware Engineering",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Design and integrate core robotic systems for innovative applications."
  },
  {
    id: 2,
    title: "Mechanical Engineer",
    department: "Hardware Engineering",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Develop mechanical structures, actuators, and analyze dynamics."
  },
  {
    id: 3,
    title: "Electrical/Electronics Engineer",
    department: "Hardware Engineering",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Design circuits and develop PCBs for hardware projects."
  },
  {
    id: 4,
    title: "Embedded Systems Engineer",
    department: "Hardware Engineering",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Program microcontrollers and work with real-time operating systems."
  },
  {
    id: 5,
    title: "AI/ML Engineer",
    department: "Software Engineering",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Develop perception and learning systems using AI and machine learning."
  },
  {
    id: 6,
    title: "Computer Vision Engineer",
    department: "Software Engineering",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Work on image processing and object detection algorithms."
  },
  {
    id: 7,
    title: "Software Developer",
    department: "Software Engineering",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Build control systems, interfaces, and backend software solutions."
  },
  {
    id: 8,
    title: "ROS Developer",
    department: "Software Engineering",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Develop applications using the Robot Operating System (ROS)."
  },
  {
    id: 9,
    title: "Product Manager",
    department: "Product & Design",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Lead product roadmaps and prioritize development based on feedback."
  },
  {
    id: 10,
    title: "UI/UX Designer",
    department: "Product & Design",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Design user interfaces for software and hardware control panels."
  },
  {
    id: 11,
    title: "Industrial Designer",
    department: "Product & Design",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Create aesthetic and functional hardware designs."
  },
  {
    id: 12,
    title: "R&D Lead/Engineer",
    department: "Research & Innovation",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Prototype and develop cutting-edge solutions."
  },
  {
    id: 13,
    title: "Sensor Integration Expert",
    department: "Research & Innovation",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Integrate sensors like Lidar, ultrasonic, GPS, and others."
  },
  {
    id: 14,
    title: "Data Scientist",
    department: "Research & Innovation",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Analyze sensor data and develop fusion models."
  },
  {
    id: 15,
    title: "Manufacturing Engineer",
    department: "Manufacturing & Supply Chain",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Design products for manufacturability and assembly."
  },
  {
    id: 16,
    title: "Procurement/Sourcing Manager",
    department: "Manufacturing & Supply Chain",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Manage parts sourcing and vendor relationships."
  },
  {
    id: 17,
    title: "Supply Chain Manager",
    department: "Manufacturing & Supply Chain",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Oversee logistics, inventory, and distribution."
  },
  {
    id: 18,
    title: "Quality Assurance Engineer",
    department: "Manufacturing & Supply Chain",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Test hardware and software for quality and compliance."
  },
  {
    id: 19,
    title: "Field Service Technician",
    department: "Field & Customer Support",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Setup and troubleshoot onsite equipment."
  },
  {
    id: 20,
    title: "Technical Support Specialist",
    department: "Field & Customer Support",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Provide customer support and remote diagnostics."
  },
  {
    id: 21,
    title: "Documentation Specialist",
    department: "Field & Customer Support",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Create manuals, guides, and safety documentation."
  },
  {
    id: 22,
    title: "Sales Manager",
    department: "Sales, Marketing & Customer Success",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Develop B2B and B2C sales strategies."
  },
  {
    id: 23,
    title: "Marketing Manager",
    department: "Sales, Marketing & Customer Success",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Lead branding, campaigns, and events."
  },
  {
    id: 24,
    title: "Digital Marketer",
    department: "Sales, Marketing & Customer Success",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Handle SEO, social media, and advertising."
  },
  {
    id: 25,
    title: "Customer Success Manager",
    department: "Sales, Marketing & Customer Success",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Manage onboarding, retention, and feedback."
  },
  {
    id: 26,
    title: "HR Manager",
    department: "Operations & Administration",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Oversee hiring, culture, and compliance."
  },
  {
    id: 27,
    title: "Operations Manager",
    department: "Operations & Administration",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Manage facilities, vendors, and workflow optimization."
  },
  {
    id: 28,
    title: "Legal Advisor",
    department: "Operations & Administration",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Handle IP protection, contracts, and compliance."
  },
  {
    id: 29,
    title: "Finance & Accounts Executive",
    department: "Operations & Administration",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Manage billing, payroll, and audits."
  },
  {
    id: 30,
    title: "Administrative Assistant",
    department: "Operations & Administration",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Support scheduling, communication, and office tasks."
  },
  {
    id: 31,
    title: "DevOps Engineer",
    department: "IT & Security",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Maintain CI/CD pipelines and cloud infrastructure."
  },
  {
    id: 32,
    title: "Cybersecurity Specialist",
    department: "IT & Security",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Protect IP, data, and remote devices from threats."
  },
  {
    id: 33,
    title: "IT Support",
    department: "IT & Security",
    location: "Hyderabad",
    work_model: "WFH",
    job_type: "Intern",
    description: "Provide internal technical support and troubleshooting."
  }
];

export default allJobs;
