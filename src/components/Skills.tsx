import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 size={22} />,
      color:
        "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      skills: ["JavaScript (ES6+)", "TypeScript", "SQL"],
    },
    {
      title: "Backend Development",
      icon: <Server size={22} />,
      color:
        "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      skills: [
        "Node.js",
        "NestJS",
        "REST APIs",
        "WebSockets",
        "JWT Authentication",
        "API Security",
      ],
    },
    {
      title: "Databases & Caching",
      icon: <Database size={22} />,
      color:
        "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      skills: [
        "PostgreSQL",
        "Redis",
        "Database Design",
        "Query Optimization",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={22} />,
      color:
        "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
      skills: ["Docker", "Git", "GitHub", "Postman", "CI/CD Basics"],
    },
    {
      title: "Core Concepts",
      icon: <Brain size={22} />,
      color:
        "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "System Design",
        "Scalability",
        "Asynchronous Architecture",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6
                hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all duration-300 shadow-sm
                hover:shadow-md dark:shadow-gray-900/20 dark:hover:shadow-gray-900/30"
            >
              <div className="flex items-center mb-4">
                <div className={`p-2 rounded-lg mr-3 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
