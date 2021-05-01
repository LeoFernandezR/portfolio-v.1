import React from 'react'

import MovieVersus from '../../images/Projects/Movieversus.jpg'
import TodolistDrag from '../../images/Projects/Todolist.jpg'

import Project from '../Project/Project'

import { projects__wrapper } from './projects.module.scss'

const ProjectsArr = [
  {
    name: 'Movie versus Movie',
    picture: MovieVersus,
    repo: 'https://github.com/LeoFernandezR/movieversus',
    demo: 'https://movieversus.netlify.app/',
  },
  {
    name: 'Todolist Drag and Drop',
    picture: TodolistDrag,
    repo: 'https://github.com/LeoFernandezR/Todolist-DragAndDrop',
    demo: 'https://todolist-drag-and-drop.netlify.app/',
  },
]

const Projects = () => {
  return (
    <section>
      <div className={projects__wrapper}>
        {ProjectsArr.map(project => (
          <Project projectData={project} key={project.name} />
        ))}
      </div>
    </section>
  )
}

export default Projects
