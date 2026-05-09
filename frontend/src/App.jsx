import './App.css'

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h1>Prashanth</h1>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h2>Hello, I'm</h2>

          <h1>Prasath R</h1>

          <p>
            Full Stack Developer | Django | React
          </p>

<div className="hero-buttons">

  <a
    href="/resume.pdf"
    download
    className="primary-btn"
  >
    Download CV
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    className="secondary-btn"
  >
    View Resume
  </a>

</div>
        </div>
      </section>

      <section className="about">
        <h2>About Me</h2>

        <p>
          I build modern web applications using Django and React.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>

        <div className="skill-box">
          <span>Python</span>
          <span>Django</span>
          <span>React</span>
          <span>JavaScript</span>
          <span>AWS</span>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            Modern portfolio built using React and Django.
          </p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>

        <button>Send</button>
      </section>

    </div>
  )
}

export default App