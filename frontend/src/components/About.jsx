import { motion } from "framer-motion";
import { FaReact, FaPython, FaAws } from "react-icons/fa";
import { SiDjango } from "react-icons/si";

function About() {
  return (
    <section
      id="about"
      className="py-5 bg-dark text-light"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="display-4 fw-bold text-center mb-5"
        >
          About <span className="text-info">Me</span>
        </motion.h2>

        <div className="row align-items-center g-5">

          {/* Left Content */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="fw-bold mb-4">
              Full Stack Developer
            </h3>

            <p className="text-secondary fs-5 lh-lg">
              I am a passionate Full Stack Developer with experience in
              building modern web applications using Django, React,
              REST APIs, and cloud deployment platforms.
            </p>

            <p className="text-secondary lh-lg">
              I enjoy creating scalable backend systems,
              responsive frontend interfaces, and professional
              full-stack projects including e-commerce websites,
              portfolio platforms, gaming systems, and task
              management applications.
            </p>

            <p className="text-secondary lh-lg">
              I have experience with GitHub, AWS hosting,
              PythonAnywhere, API integration, and modern UI/UX
              development.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="row g-4">

              <div className="col-md-6">
                <div className="card bg-secondary text-light border-0 shadow-lg h-100 text-center p-4">
                  <FaReact className="display-3 text-info mb-3 mx-auto" />
                  <h4>React</h4>
                  <p className="text-light">
                    Modern responsive frontend development.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card bg-secondary text-light border-0 shadow-lg h-100 text-center p-4">
                  <SiDjango className="display-3 text-success mb-3 mx-auto" />
                  <h4>Django</h4>
                  <p className="text-light">
                    Powerful backend & REST API development.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card bg-secondary text-light border-0 shadow-lg h-100 text-center p-4">
                  <FaPython className="display-3 text-warning mb-3 mx-auto" />
                  <h4>Python</h4>
                  <p className="text-light">
                    Scalable backend programming and automation.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card bg-secondary text-light border-0 shadow-lg h-100 text-center p-4">
                  <FaAws className="display-3 text-warning mb-3 mx-auto" />
                  <h4>AWS</h4>
                  <p className="text-light">
                    Hosting and deployment experience.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;