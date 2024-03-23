import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios';

const Singup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: ""})
  const handelSubmit = async (e) =>{
    e.preventDefault()
    try {
      const res = await axios.post("",user)
      console.log(res);
      if(res.status===201){
        console.log("user singup sucessfully");
        setUser({name: "", email:"", password:""})
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='row justify-content-center'>
      <div className="col-lg-6">
        <h1 className="text-center mb-3">Singup</h1>
        <div className="card round-5 border-0 shadow">
          <div className="card-body">
            <form onSubmit={handelSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Enter Name</label>
                <input type="name" className="form-control" value={user.name} onChange={(e) => setUser({ ...user,name: e.target.value })} />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Email Id</label>
                <input type="email" className="form-control" value={user.email} onChange={(e) => setUser({ ...user,email: e.target.value })} />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={user.password} onChange={(e) => setUser({ ...user,password: e.target.value })} />
              </div>
              <button type="submit" className="btn btn-secondary mb-3">Submit</button>
              <p>Have Account?<Link to="/login">Login</Link></p>
            </form>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Singup