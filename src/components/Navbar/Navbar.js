import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}

export default Navbar
