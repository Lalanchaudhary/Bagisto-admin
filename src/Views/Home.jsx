import React from 'react'
import Navbar from "../Component/Navbar"
import Sidebar from '../Component/Sidebar'
import Hero from '../Component/Hero'
function Home() {
  return (
    <div>
      <Navbar/>
      <div className='d-flex'>
      <Sidebar/>
      <Hero/>
      </div>
    </div>
  )
}

export default Home
