import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="max-w-screen border-b-2 border-gray-100 justify-center ">
      <div className="max-w-6xl mx-auto flex justify-between  items-center py-6">
        <h3 className="text-xl">Brand Logo</h3>
        <nav className="links leading-4 space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/">Contact</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
