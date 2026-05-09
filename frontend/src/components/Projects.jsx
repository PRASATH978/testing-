import axios from 'axios'
import { useEffect, useState } from 'react'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => {
        setProjects(response.data)
      })
  }, [])

  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-2xl overflow-hidden"
          >
            <img
              src={project.image}
              alt=""
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.description}
              </p>

              <div className="flex gap-4 mt-5">
                <a
                  href={project.github_link}
                  className="bg-gray-700 px-4 py-2 rounded-lg"
                >
                  GitHub
                </a>

                <a
                  href={project.live_link}
                  className="bg-blue-600 px-4 py-2 rounded-lg"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects