import { Code, Briefcase, GraduationCap, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const stats = [
    {
      icon: <Code size={22} />,
      value: "Backend",
      label: "Specialization",
      color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Briefcase size={22} />,
      value: "2+",
      label: "Projects Built",
      color:
        "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
    {
      icon: <GraduationCap size={22} />,
      value: "B.E. CSE",
      label: "Chitkara University",
      color:
        "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      icon: <HeartHandshake size={22} />,
      value: "2",
      label: "Industry Internships",
      color: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-0 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and my background"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
            ref={ref}
          >
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-200/30 dark:bg-primary-900/20 rounded-lg"></div>
            <div className="rounded-lg shadow-lg relative z-10 w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Photo coming soon
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Crafting Digital Experiences with Code & Creativity
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a backend-focused software engineer pursuing my B.E. in
              Computer Science at Chitkara University, Punjab. I specialize in
              building scalable, production-oriented systems with Node.js,
              NestJS, TypeScript, and PostgreSQL — with a strong focus on
              real-time architectures, secure APIs, and deployment-ready
              backend workflows.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              My passion lies in engineering reliable software systems and
              solving complex technical challenges. I enjoy strengthening core
              computer science fundamentals through data structures,
              algorithms, and system design — and applying them to build
              performant, asynchronous backend infrastructure that scales.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-soft"
                  custom={index}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={cardVariants}
                >
                  <div className={`p-2 rounded-lg mr-3 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
