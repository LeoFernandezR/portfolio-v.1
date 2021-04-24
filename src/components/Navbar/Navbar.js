import { Link } from 'gatsby'
import React from 'react'

import { navbar } from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={navbar}>
      <Link to='/'>Home</Link>
      <Link to='/skills'>Skills</Link>
      <Link to='/projects'>Projects</Link>
    </nav>
  )
}

export default Navbar
