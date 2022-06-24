import React from 'react'

export default function AnimatedRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='home' element={<Home />}></Route>
      <Route path='protfolio' element={<Portfolio />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='*' element={<h1>404</h1>}></Route>
    </Routes>
  )
}
