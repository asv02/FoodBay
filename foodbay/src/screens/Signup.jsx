import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

   const handlesubmit=async()=>{}

  return (
    <div className='container'>
    <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a User</Link>
</form>
    </div>
  )
}
