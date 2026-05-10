import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="bg-dark text-light d-flex align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Left Side */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-info fs-4 mb-3">
              Hello, I'm
            </p>

            <h1 className="display-1 fw-bold mb-4">
              Prashanth <span className="text-info">R</span>
            </h1>

            <h2 className="display-6 text-secondary mb-4">
              Full Stack Developer
            </h2>

            <p className="text-secondary fs-5 lh-lg mb-5">
              I build modern, responsive, and scalable web
              applications using Django, React, REST APIs,
              and cloud deployment technologies.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-4 mb-5">

              <a
                href="/resume.pdf"
                download
                className="btn btn-info btn-lg px-4 py-3 fw-bold"
              >
                <FaDownload className="me-2" />
                Download Resume
              </a>

              <a
                href="#projects"
                className="btn btn-outline-info btn-lg px-4 py-3 fw-bold"
              >
                View Projects
              </a>

            </div>

            {/* Social Icons */}
            <div className="d-flex gap-4">

              <a
                href="https://github.com/PRASATH978"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light rounded-circle p-3"
              >
                <FaGithub className="fs-3" />
              </a>

              <a
                href="#"
                className="btn btn-outline-primary rounded-circle p-3"
              >
                <FaLinkedin className="fs-3" />
              </a>

              <a
                href="#"
                className="btn btn-outline-danger rounded-circle p-3"
              >
                <FaInstagram className="fs-3" />
              </a>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="col-lg-6 text-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="position-relative d-inline-block">

              {/* Glow */}
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle bg-info opacity-25"
                style={{
                  width: "350px",
                  height: "350px",
                  filter: "blur(60px)",
                  zIndex: 0,
                }}
              ></div>

              {/* Image Card */}
              <div
                className="bg-secondary p-4 rounded-5 shadow-lg position-relative"
                style={{ zIndex: 1 }}
              >
                <img
                  src="/hero.png"
                  alt="Profile"
                  className="img-fluid rounded-4"
                  style={{
                    width: "350px",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;