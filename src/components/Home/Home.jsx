import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../../images/avatar/avataaars.svg';

export default function Home() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .3 } }} id='home' className='text-white'>
        <div className='container'>
          <div className='text-center d-flex align-items-center justify-content-center flex-column'>
            <img src={avatar} className='mb-4' alt="" />
            <h1 className='text-nowrap'>START REACT</h1>
            <div className='d-flex justify-content-center align-items-center my-4'>
              <div className='line line-white wra'></div>
              <i className="fas fa-solid fa-star fa-2x"></i>
              <div className='line line-white'></div>
            </div>
            <p className='mb-0 text-nowrap'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
