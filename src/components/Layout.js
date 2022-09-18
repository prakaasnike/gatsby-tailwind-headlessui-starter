import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto py-6">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
