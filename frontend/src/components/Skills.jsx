function Skills() {
  const skills = [
    'Python',
    'Django',
    'React',
    'Tailwind CSS',
    'AWS',
    'JavaScript'
  ]

  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 px-6 py-3 rounded-xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills