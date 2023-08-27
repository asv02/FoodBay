import React from 'react'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
     <div> <Navbar /></div>
      <div>
        <div class="card mt-3" style={{"width":"18rem","maxHeight":"360px"}}>
          <img src="." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
              <div className="container w-100">
                <select className='m-2 h-100 w-100 bg-success'>
                  {/* javascipt */}
                  { }
                </select>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
