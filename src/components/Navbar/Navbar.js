import { Link } from 'gatsby'
import React from 'react'
import { InlineIcon } from '@iconify/react-with-api'
import { useLocation } from '@reach/router'

import { navbar, active } from './Navbar.module.scss'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className={navbar}>
      <Link to='/' className={pathname === '/' ? active : ''}>
        <InlineIcon icon='ant-design:home-twotone' />
        Home
      </Link>
      <Link to='/skills' className={pathname === '/skills' ? active : ''}>
        <InlineIcon icon='ant-design:code-twotone' />
        Skills
      </Link>
      <Link to='/projects' className={pathname === '/projects' ? active : ''}>
        <InlineIcon icon='ant-design:folder-open-twotone' />
        Projects
      </Link>
    </nav>
  )
}

export default Navbar
