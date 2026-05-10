import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
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
          Contact <span className="text-info">Me</span>
        </motion.h2>

        <div className="row g-5 align-items-center">

          {/* Left Side */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="fw-bold mb-4">
              Let's Work Together
            </h3>

            <p className="text-secondary fs-5 lh-lg mb-4">
              Feel free to contact me for full stack development projects,
              internships, freelance work, or collaborations.
            </p>

            {/* Email */}
            <div className="d-flex align-items-center gap-3 mb-4">
              <FaEnvelope className="fs-1 text-info" />

              <div>
                <h5>Email</h5>

                <p className="text-secondary mb-0">
                  yourmail@gmail.com
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="d-flex gap-4 mt-4">

              <a
                href="https://github.com/PRASATH978"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info rounded-circle p-3"
              >
                <FaGithub className="fs-4" />
              </a>

              <a
                href="#"
                className="btn btn-outline-primary rounded-circle p-3"
              >
                <FaLinkedin className="fs-4" />
              </a>

              <a
                href="#"
                className="btn btn-outline-danger rounded-circle p-3"
              >
                <FaInstagram className="fs-4" />
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <form className="bg-secondary p-5 rounded-4 shadow-lg">

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control form-control-lg bg-dark text-light border-0"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control form-control-lg bg-dark text-light border-0"
                />
              </div>

              <div className="mb-4">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="form-control form-control-lg bg-dark text-light border-0"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-info btn-lg w-100 fw-bold"
              >
                Send Message
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;