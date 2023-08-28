import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to={"/"}>FoodBay</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to={"./"}>Home</Link>
              {/* ./login path routing is set to login page using routes so no reloading happens*/}
              <Link className="nav-link" to={"./login"}>Login</Link>
              <Link className="nav-link" to={"./Signup"}>Signup</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

