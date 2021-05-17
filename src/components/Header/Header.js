import * as React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import logo from '../../images/logo.svg'
import Navbar from '../Navbar/Navbar'

import { header, contact__btn, image__wrapper } from './header.module.scss'

const Header = () => (
  <header className={header}>
    <div className={image__wrapper}>
      <img src={logo} alt='Leonardo Fernandez Web Developer' />
    </div>
    <Navbar />
    <AniLink swipe direction='down' className={contact__btn} to='/contact'>
      Contact me!
    </AniLink>
  </header>
)

export default Header
