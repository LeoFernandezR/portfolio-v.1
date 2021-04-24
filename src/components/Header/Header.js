import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from '../Navbar/Navbar'
import { header, contact__btn } from './header.module.scss'

const Header = () => (
  <header className={header}>
    <h1>Lf</h1>
    <Navbar />
    <Link className={contact__btn} to='/contact'>
      Contact
    </Link>
  </header>
)

export default Header
