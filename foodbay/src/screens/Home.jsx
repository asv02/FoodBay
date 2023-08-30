import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
export default function Home() {

  const [search, setsearch] = useState("")
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/data/foodData", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      }
    });
    response = await response.json();//response[0]=food_items,response[1]=food_category.
    console.log(response);
    setfooditem(response[0]);
    setfoodcat(response[1]);
  }

  useEffect(() => {
    loaddata();
  }, [])//run after loading.

  return (
    <div>
      <div> <Navbar /></div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "fill !important" }}>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ "zIndex": "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                value={search} onChange={(e)=>{setsearch(e.target.value)}}
                />
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/50*50/?burger" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/50*50/?drink" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
              {/* filter is used to dull the images */}
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/50*50/?barbeque" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className='container'>
        {
          foodcat !== [] ?
            foodcat.map((data) => {
              return (

                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                  <hr />
                  {
                    fooditem !== [] ?                                                        // this and consition is for search functionality
                      fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((filterItems) => {
                        return (
                          <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                            <Cards foodname={filterItems.name}
                              options={filterItems.options[0]}
                              imgsrc={filterItems.img}
                            />
                          </div>
                        )
                      }
                      ) : <div></div>
                  }
                </div>
              )
            })
            :
            ""
        }
      </div>
      <Footer />
    </div>
  )
}
