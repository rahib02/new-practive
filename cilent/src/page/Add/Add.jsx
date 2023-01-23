import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Add.css'
function Add() {
    return (
        <div className='add'>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '' }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className='add_form'>
                    <Field name="firstname" type="text" placeholder='First name ' />

                    <Field name="lastname" type="text" placeholder='Last name ' />


                    <Field name="subject" type="text" placeholder='Subject ' />


                    <Field name="email" type="email" placeholder='Email' />

                    <Field name="message" type="text" placeholder='Write your message here.' />

                    <button type="submit" className='add_btn'>Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Add