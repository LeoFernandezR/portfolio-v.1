import React from 'react'

import { contact, contact__form, contact__image } from './contact.module.scss'

import MailDeliver from '../../images/mail-deliver.svg'

const Contact = () => {
  return (
    <section className={contact}>
      <form className={contact__form}>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Message' cols='30' rows='10'></textarea>
        <button type='submit'>Submit</button>
      </form>
      <div className={contact__image}>
        <img src={MailDeliver} alt='Send Email Portfolio' />
      </div>
    </section>
  )
}

export default Contact
