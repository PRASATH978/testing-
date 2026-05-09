function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>

      <form className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-gray-800 rounded-xl"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 bg-gray-800 rounded-xl"
        />

        <textarea
          placeholder="Message"
          className="w-full p-4 bg-gray-800 rounded-xl h-40"
        />

        <button className="bg-blue-600 px-6 py-3 rounded-xl">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact