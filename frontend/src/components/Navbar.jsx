function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 sticky top-0">
      <h1 className="text-2xl font-bold">Prasath R</h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar