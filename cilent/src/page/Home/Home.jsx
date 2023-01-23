import React from 'react'
import './Home.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGraduationCap } from 'react-icons/fc';
function Home() {
    return (
        <div className='hone'>
            <div className='section1'>
                <div className='section1_text'>
                    <h1>Learn From The Expert</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                    <button className='section1_btn'>ADMINSSION NOW</button>
                </div>

                <div className='section1_form'>
                    <h3>Sign Up</h3>
                    <div>
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
                            <Form className='form'>
                                <Field name="email" type="email" placeholder='Email Adress ' />
                                <ErrorMessage name="email" />

                                <Field name="firstName" type="text" placeholder='Pasword' />
                                <ErrorMessage name="firstName" />

                                <Field name="lastName" type="text" placeholder='Try Pasword ' />
                                <ErrorMessage name="lastName" />


                                <button type="submit" className='submit_btn'>SIGN UP</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <div className='section2_header'>
                    <h2>Our Programs</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
                </div>
                <div className='section2_header_img'>
                    <div className='section2_img'></div>
                    <div className='section2_text'>
                        <div>
                            <h2>We Are Excellent In Education</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                        </div>
                        <div className='section2_text_icon'>
                            <h3><FcGraduationCap /> 22,931 Yearly Graduates</h3>
                            <h3><FcGraduationCap /> 22,931 Yearly Graduates</h3>
                        </div>
                    </div>
                </div>
                <div className='section2_header_img'>
                    <div className='section2_text'>
                        <div>
                            <h2>We Are Excellent In Education</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
                        </div>
                        <div className='section2_text_icon'>
                            <h3><FcGraduationCap /> 22,931 Yearly Graduates</h3>
                            <h3><FcGraduationCap /> 22,931 Yearly Graduates</h3>
                        </div>
                    </div>
                    <div className='section2_img'></div>
                </div>
            </div>
            <div className='section3'>
                <div className='section2_header'>
                    <h2>Our Teachers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
                </div>
                <div className='section3_cards'>
                    <div className='section3_card' >
                        <img src="https://preview.colorlib.com/theme/oneschool/images/person_1.jpg.webp" alt="" />
                        <h3>Benjamin Stone</h3>
                        <p style={{ color: "grey", fontsize: '1rem ', margin: "0" }}>Physics Teacher</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
                    </div>
                    <div className='section3_card' >
                        <img src="https://preview.colorlib.com/theme/oneschool/images/person_1.jpg.webp" alt="" />
                        <h3>Benjamin Stone</h3>
                        <p style={{ color: "grey", fontsize: '1rem ', margin: "0" }}>Physics Teacher</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
                    </div>
                    <div className='section3_card' >
                        <img src="https://preview.colorlib.com/theme/oneschool/images/person_1.jpg.webp" alt="" />
                        <h3>Benjamin Stone</h3>
                        <p style={{ color: "grey", fontsize: '1rem ', margin: "0" }}>Physics Teacher</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
                    </div>
                </div>
            </div>
            <div className='section4'>
                <div className='section4_header'>
                    <h2>Message Us</h2>
                    <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>
                <div className='mesage'>
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
                        <Form className='form'>
                            <div className='names'>
                                <Field name="firstname" type="text" placeholder='First name ' />
                                <ErrorMessage name="firstname" />
                                <Field name="lastname" type="text" placeholder='Last name ' />
                                <ErrorMessage name="lastname" />
                            </div>
                            <Field name="subject" type="text" placeholder='Subject ' />
                            <ErrorMessage name="subject" />

                            <Field name="email" type="email" placeholder='Email' />
                            <ErrorMessage name="email" />

                            <Field name="message" type="text" placeholder='Write your message here.' />
                            <ErrorMessage name="message" />


                            <button type="submit" className='section4_btn'>Send Message</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div >
    )
}

export default Home