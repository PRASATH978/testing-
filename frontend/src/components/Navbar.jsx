function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-lg py-3">
      <div className="container">

        {/* Logo */}
        <a
          className="navbar-brand fw-bold fs-2"
          href="#home"
        >
          Prashanth R
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-4 fs-5 fw-medium">

            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;