import React from 'react'
import { Icon } from '@iconify/react-with-api'

import SkillsArr from './skills.json'
import { skill__list, skill__item } from './skills.module.scss'

const Skills = () => {
  return (
    <section>
      <ul className={skill__list}>
        {SkillsArr.map(skill => (
          <li key={skill.id} className={skill__item}>
            <Icon icon={skill.icon}></Icon>
            <p>{skill.title}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
