import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://prasath978.pythonanywhere.com/api/projects/")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section
      id="projects"
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
          My <span className="text-info">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="row g-4">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >

              <div className="card bg-secondary border-0 shadow-lg h-100 overflow-hidden">

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                {/* Content */}
                <div className="card-body d-flex flex-column">

                  <h3 className="card-title text-light fw-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="card-text text-light flex-grow-1">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="d-flex gap-3 mt-4">

                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark flex-fill"
                    >
                      <FaGithub className="me-2" />
                      GitHub
                    </a>

                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-info flex-fill"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;