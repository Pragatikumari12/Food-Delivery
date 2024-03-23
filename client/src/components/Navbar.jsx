import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>    
          <form className="d-flex w-50" role="search">
            <input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className='btn btn bg-secondary ms-3 text-light' to="/userdashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <button className='btn btn bg-secondary ms-3 text-light'><i class="fa-solid fa-cart-shopping fa-lg"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div >
  )
}
export default Navbar