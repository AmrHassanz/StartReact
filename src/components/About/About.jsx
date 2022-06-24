import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .3 } }} id='about'>
                <div className='container text-center'>
                    <h2>ABOUT</h2>
                    <div className='d-flex justify-content-center align-items-center my-4'>
                        <div className='line line-white'></div>
                        <i className="fas fa-solid fa-star fa-2x"></i>
                        <div className='line line-white'></div>
                    </div>
                    <div className='row text-start'>
                        <div className='col-lg-4 offset-lg-2'>
                            <div>
                                <p className='lead px-3'>
                                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>

                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div>
                                <p className='lead px-3 ms-lg-3'>
                                    You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </>
    )
}
