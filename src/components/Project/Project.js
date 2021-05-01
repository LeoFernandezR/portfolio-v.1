import React from 'react'
import { InlineIcon } from '@iconify/react-with-api'
import {
  project,
  project__overlay,
  project__content,
  project__nav,
} from './project.module.scss'

const Project = ({ projectData: { name, picture, repo, demo } }) => {
  return (
    <div className={project}>
      <div className={project__overlay}>
        <div className={project__content}>
          <h2>{name}</h2>
          <nav className={project__nav}>
            <a href={repo}>
              <InlineIcon icon='simple-icons:github' /> Repository
            </a>
            <a href={demo}>
              <InlineIcon icon='carbon:link' /> Live Demo
            </a>
          </nav>
        </div>
      </div>
      <img src={picture} alt={name} />
    </div>
  )
}

export default Project
