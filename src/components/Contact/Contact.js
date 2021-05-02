import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs from 'emailjs-com'

import {
  contact,
  contact__form,
  contact__image,
  input__wrapper,
  input__error,
} from './contact.module.scss'

import MailDeliver from '../../images/mail-deliver.svg'

const Contact = () => {
  const onFormSubmit = (data, things) => {
    console.log('data', data)
    console.log('thingies', things)
  }
  return (
    <section className={contact}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          success: false,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Full name field is required'),
          email: Yup.string()
            .email('Invalid email')
            .required('Email field is required'),
          message: Yup.string().required('Message field is required'),
        })}
        onSubmit={onFormSubmit}
      >
        {({ values, touched, errors, setFieldValue, isSubmitting }) => (
          <Form className={contact__form}>
            <div className={input__wrapper}>
              <Field
                component='input'
                type='text'
                id='name'
                name='name'
                aria-label='name'
                placeholder='Full name*'
                className={touched.name && errors.name ? input__error : ''}
              />
              <ErrorMessage component='span' name='name' />
            </div>
            <div className={input__wrapper}>
              <Field
                component='input'
                type='email'
                id='email'
                name='email'
                aria-label='email'
                placeholder='Email*'
                className={touched.email && errors.email ? input__error : ''}
              />
              <ErrorMessage component='span' name='email' />
            </div>
            <div className={input__wrapper}>
              <Field
                component='textarea'
                type='text'
                id='message'
                name='message'
                aria-label='message'
                placeholder='Message*'
                rows='8'
                className={
                  touched.message && errors.message ? input__error : ''
                }
              />
              <ErrorMessage component='span' name='message' />
            </div>

            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div className={contact__image}>
        <img draggable={false} src={MailDeliver} alt='Send Email Portfolio' />
      </div>
    </section>
  )
}

export default Contact
