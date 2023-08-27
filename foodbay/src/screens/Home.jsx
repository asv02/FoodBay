import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Carousal from '../components/Carousal'
export default function Home() {
  return (
    <div>
     <div> <Navbar /></div>
     <div><Carousal/></div>
      <div className='m-3 d-flex'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <Footer/>
    </div>
  )
}
