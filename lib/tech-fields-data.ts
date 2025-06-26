export interface TechField {
  id: string
  title: string
  description: string
  salary: string
  color: string
  detailedDescription: string
  skills: string[]
  jobRoles: string[]
  salaryRange: {
    entry: string
    mid: string
    senior: string
  }
  growthProspects: string
  learningPath: string[]
}

export const techFieldsData: TechField[] = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Building intelligent systems capable of learning and making decisions",
    salary: "₹25.2 LPA",
    color: "bg-blue-50 border-blue-200",
    detailedDescription:
      "AI and ML involve creating systems that can learn, reason, and make decisions without explicit programming. This field combines computer science, mathematics, and domain expertise to build intelligent applications.",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Deep Learning",
      "Neural Networks",
      "Statistics",
      "Linear Algebra",
    ],
    jobRoles: ["ML Engineer", "Data Scientist", "AI Researcher", "Computer Vision Engineer", "NLP Engineer"],
    salaryRange: {
      entry: "₹8-15 LPA",
      mid: "₹15-30 LPA",
      senior: "₹30-60 LPA",
    },
    growthProspects: "Extremely high demand with 40% year-over-year growth expected",
    learningPath: [
      "Mathematics & Statistics",
      "Python Programming",
      "Machine Learning Basics",
      "Deep Learning",
      "Specialized Areas (NLP, Computer Vision)",
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Extracting insights and knowledge from structured and unstructured data",
    salary: "₹19.8 LPA",
    color: "bg-green-50 border-green-200",
    detailedDescription:
      "Data Science combines statistical analysis, machine learning, and domain expertise to extract meaningful insights from data to drive business decisions.",
    skills: ["Python", "R", "SQL", "Pandas", "NumPy", "Matplotlib", "Tableau", "Statistics", "Data Visualization"],
    jobRoles: [
      "Data Scientist",
      "Data Analyst",
      "Business Intelligence Analyst",
      "Quantitative Analyst",
      "Research Scientist",
    ],
    salaryRange: {
      entry: "₹6-12 LPA",
      mid: "₹12-25 LPA",
      senior: "₹25-45 LPA",
    },
    growthProspects: "High demand across all industries with 35% growth expected",
    learningPath: [
      "Statistics & Mathematics",
      "Programming (Python/R)",
      "Data Analysis",
      "Machine Learning",
      "Domain Specialization",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Creating and maintaining websites and web applications",
    salary: "₹12.5 LPA",
    color: "bg-purple-50 border-purple-200",
    detailedDescription:
      "Web development involves building websites and web applications using various programming languages, frameworks, and tools to create user-friendly digital experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Git", "Responsive Design", "REST APIs"],
    jobRoles: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Designer", "DevOps Engineer"],
    salaryRange: {
      entry: "₹3-8 LPA",
      mid: "₹8-18 LPA",
      senior: "₹18-35 LPA",
    },
    growthProspects: "Steady growth with increasing demand for modern web applications",
    learningPath: ["HTML/CSS Basics", "JavaScript", "Frontend Framework", "Backend Development", "Database Management"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Designing user interfaces and experiences for digital products",
    salary: "₹14.3 LPA",
    color: "bg-pink-50 border-pink-200",
    detailedDescription:
      "UI/UX Design focuses on creating intuitive, accessible, and visually appealing digital interfaces that provide excellent user experiences.",
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Prototyping",
      "User Research",
      "Wireframing",
      "Design Systems",
      "Usability Testing",
    ],
    jobRoles: ["UI Designer", "UX Designer", "Product Designer", "Interaction Designer", "Design Researcher"],
    salaryRange: {
      entry: "₹4-10 LPA",
      mid: "₹10-20 LPA",
      senior: "₹20-40 LPA",
    },
    growthProspects: "Growing demand as companies focus on user experience",
    learningPath: ["Design Principles", "Design Tools", "User Research", "Prototyping", "Portfolio Development"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protecting systems, networks, and data from digital attacks",
    salary: "₹18.7 LPA",
    color: "bg-red-50 border-red-200",
    detailedDescription:
      "Cybersecurity involves protecting digital assets, networks, and systems from cyber threats through various security measures and protocols.",
    skills: [
      "Network Security",
      "Ethical Hacking",
      "Penetration Testing",
      "Security Frameworks",
      "Risk Assessment",
      "Incident Response",
    ],
    jobRoles: ["Security Analyst", "Ethical Hacker", "Security Consultant", "CISO", "Incident Response Specialist"],
    salaryRange: {
      entry: "₹5-12 LPA",
      mid: "₹12-25 LPA",
      senior: "₹25-50 LPA",
    },
    growthProspects: "Critical demand with shortage of skilled professionals",
    learningPath: [
      "Networking Basics",
      "Security Fundamentals",
      "Ethical Hacking",
      "Security Certifications",
      "Specialized Areas",
    ],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description: "Delivering computing services over the internet (the cloud)",
    salary: "₹17.5 LPA",
    color: "bg-cyan-50 border-cyan-200",
    detailedDescription:
      "Cloud computing involves designing, implementing, and managing cloud-based solutions and infrastructure for scalable and efficient computing.",
    skills: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "DevOps", "Infrastructure as Code", "Serverless"],
    jobRoles: [
      "Cloud Architect",
      "DevOps Engineer",
      "Cloud Engineer",
      "Solutions Architect",
      "Site Reliability Engineer",
    ],
    salaryRange: {
      entry: "₹6-14 LPA",
      mid: "₹14-28 LPA",
      senior: "₹28-55 LPA",
    },
    growthProspects: "Rapid growth as companies migrate to cloud",
    learningPath: [
      "Cloud Fundamentals",
      "Platform Specialization",
      "DevOps Tools",
      "Architecture Design",
      "Certifications",
    ],
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Building distributed, decentralized, and secure record-keeping systems",
    salary: "₹16.2 LPA",
    color: "bg-orange-50 border-orange-200",
    detailedDescription:
      "Blockchain technology involves creating decentralized systems and applications using distributed ledger technology for secure and transparent transactions.",
    skills: ["Solidity", "Web3", "Smart Contracts", "Ethereum", "Cryptography", "DeFi", "NFTs", "Consensus Algorithms"],
    jobRoles: [
      "Blockchain Developer",
      "Smart Contract Developer",
      "Blockchain Architect",
      "DeFi Developer",
      "Crypto Analyst",
    ],
    salaryRange: {
      entry: "₹5-12 LPA",
      mid: "₹12-22 LPA",
      senior: "₹22-40 LPA",
    },
    growthProspects: "Emerging field with high potential in finance and beyond",
    learningPath: [
      "Blockchain Basics",
      "Programming Languages",
      "Smart Contracts",
      "Platform Specialization",
      "Real Projects",
    ],
  },
  {
    id: "iot",
    title: "Internet of Things (IoT)",
    description: "Connecting physical objects to the internet for data exchange",
    salary: "₹15.8 LPA",
    color: "bg-indigo-50 border-indigo-200",
    detailedDescription:
      "IoT involves connecting physical devices to the internet to collect data, monitor systems, and enable smart automation across various industries.",
    skills: [
      "Embedded Systems",
      "Arduino",
      "Raspberry Pi",
      "Sensors",
      "Wireless Communication",
      "Edge Computing",
      "Data Analytics",
    ],
    jobRoles: [
      "IoT Developer",
      "Embedded Systems Engineer",
      "IoT Architect",
      "Hardware Engineer",
      "IoT Solutions Consultant",
    ],
    salaryRange: {
      entry: "₹4-10 LPA",
      mid: "₹10-20 LPA",
      senior: "₹20-35 LPA",
    },
    growthProspects: "Growing rapidly with smart city and industry 4.0 initiatives",
    learningPath: ["Electronics Basics", "Programming", "Networking", "Cloud Integration", "Industry Applications"],
  },
  {
    id: "product-management",
    title: "Product Management",
    description: "Leading the development and launch of tech products",
    salary: "₹22.1 LPA",
    color: "bg-yellow-50 border-yellow-200",
    detailedDescription:
      "Product management involves defining product strategy, working with cross-functional teams, and ensuring successful product development and launch.",
    skills: [
      "Product Strategy",
      "Market Research",
      "User Analytics",
      "Agile/Scrum",
      "Roadmap Planning",
      "Stakeholder Management",
    ],
    jobRoles: ["Product Manager", "Senior Product Manager", "Product Owner", "VP of Product", "Chief Product Officer"],
    salaryRange: {
      entry: "₹8-15 LPA",
      mid: "₹15-30 LPA",
      senior: "₹30-60 LPA",
    },
    growthProspects: "High demand as companies focus on product-led growth",
    learningPath: [
      "Business Fundamentals",
      "Technical Understanding",
      "User Research",
      "Analytics",
      "Leadership Skills",
    ],
  },
  {
    id: "non-coding",
    title: "Non-Coding Tech Jobs",
    description: "Technology roles that don't require programming skills",
    salary: "₹13.5 LPA",
    color: "bg-gray-50 border-gray-200",
    detailedDescription:
      "Non-coding tech roles focus on the business, creative, and strategic aspects of technology without requiring extensive programming knowledge.",
    skills: [
      "Project Management",
      "Technical Writing",
      "Digital Marketing",
      "Sales",
      "Customer Success",
      "Quality Assurance",
    ],
    jobRoles: [
      "Technical Writer",
      "Project Manager",
      "QA Tester",
      "Tech Sales",
      "Customer Success Manager",
      "Business Analyst",
    ],
    salaryRange: {
      entry: "₹3-8 LPA",
      mid: "₹8-18 LPA",
      senior: "₹18-30 LPA",
    },
    growthProspects: "Steady demand across all tech companies",
    learningPath: [
      "Domain Knowledge",
      "Communication Skills",
      "Tool Proficiency",
      "Industry Understanding",
      "Specialization",
    ],
  },
]
