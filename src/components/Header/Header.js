import * as React from 'react'
import { Link } from 'gatsby'

import logo from '../../images/logo.svg'
import Navbar from '../Navbar/Navbar'

import { header, contact__btn, image__wrapper } from './header.module.scss'

const Header = () => (
  <header className={header}>
    <div className={image__wrapper}>
      <img src={logo} alt='Leonardo Fernandez Web Developer' />
    </div>
    <Navbar />
    <Link className={contact__btn} to='/contact'>
      Contact me!
    </Link>
  </header>
)

export default Header
