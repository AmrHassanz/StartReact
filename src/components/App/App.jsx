import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Portfolio from '../Portfolio/Portfolio';

export default function App() {

  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])


  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/StartReact/' element={<Home />} />
          <Route path='home' element={<Home />}></Route>
          <Route path='protfolio' element={<Portfolio />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='*' element={<h1>404</h1>}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
