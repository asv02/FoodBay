import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Cart from '../screens/Cart'
import Modal from '../Modal'
import { useCart } from './ContextReducer';

export default function Navbar() {

  let data=useCart();//to find length of state to show it on badge.

  //used to view cart-related to createPortal in Modal.js.
  const [cartView, setcartView] = useState(false)


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
                  <Link className="nav-link active fs-3" aria-current="page" to={"./myorder"}>My Orders</Link>
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
                <div className="btn bg-white text-success mx-1" onClick={()=>{setcartView(true)}}>
                  My Cart {" "}
                  <Badge pill bg='danger'>{data.length}</Badge>
                  </div>

                  {cartView?<Modal onClose={()=>{setcartView(false)}}>
                    <Cart></Cart>
                  </Modal>:""}{/*cartView*/}

                <Link className="btn bg-white text-danger mx-1" to={"./login"} onClick={handleLogout}>LogOut</Link></div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

