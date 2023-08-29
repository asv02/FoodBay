import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Carousal from '../components/Carousal'
export default function Home() {
 
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);
 
  return (
    <div>
     <div> <Navbar /></div>
     <div><Carousal/></div>
      <div className='m-3 d-flex'>
      
      </div>
      <Footer/>
    </div>
  )
}
