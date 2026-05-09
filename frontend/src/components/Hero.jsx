import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold"
      >
       <h1 className="logo">Prasanth R</h1>
      </motion.h1>

      <p className="text-xl mt-5 text-gray-400">
        Django & React Developer
      </p>

      <button className="mt-8 px-8 py-3 bg-blue-600 rounded-xl">
        Download Resume
      </button>
    </section>
  )
}

export default Hero