import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'

export default function Login() {
  let navigate=useNavigate();//for redirecting to any page after login.
  const [credentials, setcredentials] = useState({password: "",email: "" })//default value.

  const handlechange = async (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value})
  }

  const handlesubmit = async (e) => {
      e.preventDefault()//synthetic event.
      const response = await fetch("http://localhost:5000/api/auth/loginuser",//api/suth is from middleware.
          {//as method in /createuser is post.
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({  password: credentials.password, email: credentials.email})
          });

      const json = await response.json()
      console.log(json);

      if (!json.success) {
          alert("Enter valid credentials.")
      }
      if (json.success) {
        localStorage.setItem("authToken",json.authToken);//storing authToken in frontend
        // console.log(localStorage.getItem);
          navigate("/");//redirecting to home
      }
    
  }
  
  return (
    <div>
            <form className='container' onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' value={credentials.email} className="form-control" onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' value={credentials.password} className="form-control" onChange={handlechange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/Signup" className="m-3 btn btn-danger">I'm a user</Link>
            </form>
        </div>
  )
}
