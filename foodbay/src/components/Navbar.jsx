import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const handleLogout=()=>{
    //when click on logout we should delete authToken
    localStorage.removeItem("authToken");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to={"/"}>FoodBay</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link className="nav-link active fs-3" aria-current="page" to={"./"}>Home</Link>
              </li>
              {/* Now to know that a user is logined we will use authToken */}
              {(localStorage.getItem("authToken")) ?
                <li className='nav-item'>
                  <Link className="nav-link active fs-3" aria-current="page" to={"./"}>My Orders</Link>
                </li> : ""
              }
            </ul>
            {!(localStorage.getItem("authToken")) ?
              /* ./login path routing is set to login page using routes so no reloading happens*/
              <div className='d-flex'>
                <Link className="btn bg-white text-success mx-1" to={"./login"}>Login</Link>
                <Link className="btn bg-white text-success mx-1" to={"./Signup"}>Signup</Link>
              </div>
              :
              <div>
                <Link className="btn bg-white text-success mx-1" to={"./login"}>My Cart</Link>
                <Link className="btn bg-white text-danger mx-1" to={"./login"} onClick={handleLogout}>LogOut</Link></div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

