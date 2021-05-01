import React from 'react'
import { Icon } from '@iconify/react-with-api'

import { footer, footer__nav } from './footer.module.scss'

const social = [
  {
    id: 0,
    name: 'Github',
    link: 'https://github.com/leofernandezr',
    icon: 'simple-icons:github',
  },
  {
    id: 1,
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/leonardo-fernandezr/',
    icon: 'simple-icons:linkedin',
  },
  {
    id: 2,
    name: 'Email',
    link: 'leonardo.fernandez1402@gmail.com',
    icon: 'simple-icons:gmail',
  },
]

const Footer = () => {
  return (
    <footer className={footer}>
      <div>
        <p>
          © All rights are reserved | {new Date().getFullYear()} | Leonardo
          Fernández
        </p>
      </div>
      <nav className={footer__nav}>
        {social.map(item => (
          <a
            href={item.link}
            aria-label={item.name}
            key={item.id}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icon icon={item.icon} />
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default Footer
