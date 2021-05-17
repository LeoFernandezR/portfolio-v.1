import React from 'react'
import { InlineIcon } from '@iconify/react-with-api'
import { useLocation } from '@reach/router'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { navbar, active } from './Navbar.module.scss'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className={navbar}>
      <AniLink
        swipe
        direction={pathname === '/contact' ? 'up' : 'right'}
        to='/'
        className={pathname === '/' ? active : ''}
      >
        <InlineIcon icon='ant-design:home-twotone' />
        Home
      </AniLink>
      <AniLink
        swipe
        direction={
          pathname === '/contact' ? 'up' : pathname === '/' ? 'left' : 'right'
        }
        to='/skills'
        className={pathname === '/skills' ? active : ''}
      >
        <InlineIcon icon='ant-design:code-twotone' />
        Skills
      </AniLink>
      <AniLink
        direction={pathname === '/contact' ? 'up' : 'left'}
        swipe
        to='/projects'
        className={pathname === '/projects' ? active : ''}
      >
        <InlineIcon icon='ant-design:folder-open-twotone' />
        Projects
      </AniLink>
    </nav>
  )
}

export default Navbar
