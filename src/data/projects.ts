import { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Spendly",
    description:
      "A modern and elegant expense tracking application built with React, TypeScript, and Spring Boot. This tool empowers users to manage, categorize, and visualize their financial transactions with clarity and ease — all while following best practices in software design and architecture.",
    image: "/images/projects/spendly.png",
    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "JPA & Hibernate",
      "PostgreSQL",
      "SOLID Principles",
      "Abstraction",
      "JavaScript",
      "React",
      "Zustand",
      "Tailwind CSS",
      "Web Application"
    ],
    demo: "https://spendly-scsi.onrender.com/",
    github: "https://github.com/muskanchawla11/spendly",
    category: ["All", "Java"],
  },
  {
    id: 2,
    title: "FlowOps",
    description:
      "FlowOps is an intuitive AI workflow builder that empowers users to create, manage, and optimize workflows effortlessly. It’s designed for rapid prototyping of node-based LLM flows with dynamic inputs, outputs, and system logic — all rendered on a beautiful, responsive canvas.",
    image: "/images/projects/flow-ops.png",
    tags: ["AI", "React", "Node-Based", "Workflow", "React Flow", "Zustand", "Tailwind CSS", "Python", "FastAPI", "Web Application", "Atomic Design", "Abstraction"],
    demo: "https://flowops-hu9f.onrender.com/",
    github: "https://github.com/muskanchawla11/flowops",
    category: ["All", "Python"],
  }, {
    id: 4,
    title: "E-Sales",
    description:
      "A modern full-stack e-commerce platform built with React on the frontend and Express.js on the backend. This project demonstrates robust cart management, dynamic order summaries, seamless email notifications, and well-structured Express APIs.",
    image: "/images/projects/e-sales.png",
    tags: [
      "React",
      "Express",
      "MongoDb",
      "Node",
      "CORS",
      "REST API",
      "Material UI",
      "Framer Motion",
      "React Particles",
      "Responsive Design",
      "Context API",
      "SendGrid",
    ],
    demo: "https://e-sales.onrender.com/",
    github: "https://github.com/muskanchawla11/e-sales",
    category: ["All", "MERN"],
  },
    {
    id: 5,
    title: "Solar System",
    description:
      "3D Solar System simulation built with React, Three.js, and React-Three-Fiber. This project showcases a dynamic, interactive solar system model with realistic planetary movements and textures.",
    image: "/images/projects/solar-system.png",
    tags: ["React", "Three.js", "React-Three-Fibre", "Vite", "Tailwind CSS", "Space", "Javascript"],
    demo: "https://anshuman-solarsystem.netlify.app/",
    github: "https://github.com/muskanchawla11/solar-system",
    category: ["All"],
  },
  {
    id: 6,
    title: "Interview Master",
    description:
      "AI-powered Interview Question Generator that dynamically creates role-specific technical questions using CohereAI/OpenAI instruction model.",
    image: "/images/projects/interview-generator.png",
    tags: ["React", "Material UI", "Framer Motion", "React Particles", "CohereAI", "OpenAI", "Express", "CORS"],
    demo: "https://interview-master-9s7b.onrender.com/",
    github: "https://github.com/muskanchawla11/interview-generator",
    category: ["All", "MERN"],
  }
 ,
   {
    id: 8,
    title: "Movie Recommender",
    description:
      "A content-based movie recommender built with Python, basic NLP tools (CountVectorizer), and Scikit-learn. Combines genres and tags to compute cosine similarity and suggest similar movies with clean, fast logic.",
    image: "/images/projects/movie-recommender.png",
    tags: [
  "Python",
  "Machine Learning",
  "Pandas",
  "NumPy",
  "NLP",
  "Scikit-learn",
  "Cosine Similarity",
  "Count Vectorizer",
  "Jupyter Notebook",
  "Data Science",
]
,
    demo: "https://github.com/muskanchawla11/movie-recommender",
    github: "https://github.com/muskanchawla11/movie-recommender",
    category: ["All", "Python"],
  },
    {
    id: 9,
    title: "Forecastly",
    description:
      "A modern, responsive weather application built with React, leveraging the OpenWeatherMap API to deliver real-time weather updates.",
    image: "/images/projects/weather-app.png",
    tags: [
  "React",
  "openweathermap",
  "responsive-design",
  "Axios",
  "Luxon",
  "React-icons",
  "Javascript",
  "Frontend",
  "UI/UX",
  "Api-Integration",
  "Climate",
  "Web-app"
]
,
    demo: "https://anshuman-weather-app.netlify.app/",
    github: "https://github.com/muskanchawla11/forecastly",
    category: ["All", "MERN"],
  },
  {
    id: 11,
    title: "Real-Time Multiplayer Drawing & Guessing Platform",
    description:
      "A real-time multiplayer platform enabling synchronized drawing, live guessing, scoring, and room-based gameplay through WebSocket-driven event architecture. Features server-authoritative game state with room lifecycle control, player rotation, reconnect handling, and low-latency event synchronization — alongside secure authentication, payload validation, anti-spam throttling, and scalable multiplayer session workflows.",
    image: "/portfolio.png",
    tags: [
      "NestJS",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
      "JWT",
      "Redis",
      "Real-time",
      "Multiplayer",
      "Game State",
      "Authentication",
    ],
    demo: "#",
    github: "#",
    category: ["All", "Backend"],
  },
  {
    id: 12,
    title: "Containerized Deployment Automation Platform (Vercel Lite)",
    description:
      "A deployment automation platform supporting repository/ZIP ingestion, isolated builds, deployment lifecycle orchestration, and hosted static asset delivery. Built with asynchronous queue-based pipelines, worker processing, retry systems, timeout controls, Dockerized build isolation, artifact versioning, secure execution workflows, and rollback-ready deployment infrastructure.",
    image: "/portfolio.png",
    tags: [
      "NestJS",
      "Docker",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "Cloud Storage",
      "CI/CD",
      "Queue Processing",
      "Build Isolation",
      "Deployment",
    ],
    demo: "#",
    github: "#",
    category: ["All", "Backend"],
  },
];

export default projects;
