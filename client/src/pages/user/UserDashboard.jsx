import React from 'react'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div className='container'>
      <h1 className="text-center">User Dashboard</h1>
      <div className="row">
        <div className="col-lg-5">
          <div className='container'>
            <form>
              <div class="mb-3">
                <button className='btn btn bg-secondary me-5'>Order</button>
                <Link className='btn btn bg-secondary' to='/addresspage'>Edite address</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-7">
          <div>
            <div className="card">
              <div className="card-body">
                <p className='fw-bold fs-6'>PRAGATI KUMARI</p>
                <p className='fw-bold fs-6'>8102260546</p>
                <p className='fw-bold fs-6'>Pragati54@gmail.com</p>
                <p className='fw-bold fs-6'>B.S.City sec 2/c Jharkhand 827001</p>
                <p><i class="fa-solid fa-pen-to-square"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard