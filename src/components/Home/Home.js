import React from 'react'

import codeThinker from '../../images/code-thinker.svg'
import { home, presentation, presentation__image } from './home.module.scss'

const Home = () => {
  return (
    <section className={home}>
      <div className={presentation}>
        <h1>Leonardo Fernández</h1>
        <p>Front-end web developer</p>
      </div>
      <div className={presentation__image}>
        <img src={codeThinker} alt='React Web Developer' />
      </div>
    </section>
  )
}

export default Home
