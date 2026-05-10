import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      name: "Python",
      icon: <FaPython className="text-warning" />,
      level: 90,
    },
    {
      name: "Django",
      icon: <SiDjango className="text-success" />,
      level: 88,
    },
    {
      name: "React",
      icon: <FaReact className="text-info" />,
      level: 85,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-warning" />,
      level: 82,
    },
    {
      name: "AWS",
      icon: <FaAws className="text-warning" />,
      level: 75,
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-danger" />,
      level: 95,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-primary" />,
      level: 90,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-info" />,
      level: 70,
    },
    {
      name: "GitHub",
      icon: <FaGitAlt className="text-danger" />,
      level: 85,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-dark text-light py-5"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="display-4 fw-bold text-center mb-5"
        >
          My <span className="text-info">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="row g-4">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >

              <div className="card bg-secondary border-0 shadow-lg h-100 p-4">

                {/* Top */}
                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div className="d-flex align-items-center gap-3">

                    <div className="display-5">
                      {skill.icon}
                    </div>

                    <h3 className="h4 text-light mb-0">
                      {skill.name}
                    </h3>

                  </div>

                  <span className="text-info fw-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress */}
                <div className="progress bg-dark" style={{ height: "12px" }}>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{ duration: 1 }}
                    className="progress-bar bg-info"
                  ></motion.div>

                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;