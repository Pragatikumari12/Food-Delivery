import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='row justify-content-center'>
            <ddiv className="col-lg-6">
                <h1 className="text-center">Login</h1>
                <div className="card round-5 border-0 shadow">
                    <div className="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="Login" class="btn btn-secondary mb-3">Login</button>
                            <p>Donot have Account?<Link to="/singup">Singup</Link></p>
                        </form>
                    </div>
                </div>
            </ddiv>
        </div>
    )
}

export default Login