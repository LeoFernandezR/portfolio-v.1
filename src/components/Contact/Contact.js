import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from 'emailjs-com'

import {
  contact,
  contact__form,
  contact__image,
  input__wrapper,
  input__error,
} from './contact.module.scss'

import MailDeliver from '../../images/mail-deliver.svg'

console.log()

const Contact = () => {
  const onFormSubmit = (data, { setFieldValue, resetForm }) => {
    emailjs
      .send('gmail', 'basic_template', data, process.env.GATSBY_EMAILJS_USER_ID)
      .then(
        ({ status }) => {
          console.log(status)
          setFieldValue('success', true)
          setTimeout(() => resetForm(), 6000)
        },
        err => {
          setFieldValue('success', false)
          alert('Something went wrong, please try again!')
          console.error(err)
        }
      )
  }
  return (
    <section className={contact}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          'g-recaptcha-response': '',
          success: false,
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Full name field is required'),
          email: Yup.string()
            .email('Invalid email')
            .required('Email field is required'),
          message: Yup.string().required('Message field is required'),
          'g-recaptcha-response': Yup.string().required(
            'Robots are not welcome yet!'
          ),
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
                as='textarea'
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
            {values.name && values.email && values.message && (
              <div className={input__wrapper}>
                <Field
                  component={ReCAPTCHA}
                  as={ReCAPTCHA}
                  sitekey={process.env.GATSBY_RECAPTCHA_KEY}
                  name='g-recaptcha-response'
                  onChange={value =>
                    setFieldValue('g-recaptcha-response', value)
                  }
                />
              </div>
            )}
            {values.success && (
              <h4>
                Your message has been succesfully sent! I will get back to you
              </h4>
            )}

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
