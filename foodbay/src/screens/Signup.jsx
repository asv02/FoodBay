import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

    const [credentials, setcredentials] = useState({ name: "", password: "", location: "", email: "" })//default value.

    const handlechange = async (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value, [e.target.password]: e.target.password, [e.target.email]: e.target.value, [e.target.location]: e.target.value })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()//synthetic event.
        const response = await fetch("http://localhost:5000/api/auth/createuser",
            {//as method in /createuser is post.
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: credentials.name, password: credentials.password, email: credentials.email, location: credentials.location })
            });

        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter valid credentials.")
        }

    }
    return (
        <div>
            <form className='container' onSubmit={handlesubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name' value={credentials.name} className="form-control" onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' value={credentials.email} className="form-control" onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' value={credentials.password} className="form-control" onChange={handlechange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" name='location' value={credentials.location} className="form-control" onChange={handlechange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
            </form>
        </div>
    )
}
