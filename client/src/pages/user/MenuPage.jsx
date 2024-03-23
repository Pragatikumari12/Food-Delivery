import React from 'react'
import { Link } from 'react-router-dom'

const MenuPage = () => {
    const a=[1,1,1,1,1,1,1]
    return (
        <div className='container'>
            <div className="row g-4">
                <h1 className="text-center">MenuPage</h1>
                {a.map((i) =>(
                    <div className="col-lg-3">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <img height={200} src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=sph" alt="" />
                            <h4 className="text-dark">Burger</h4>
                            <p className="text-secondary">Classic Nutrition</p>
                            <p>₹150 <samp className='text-danger'>40%off</samp>  <Link className='btn btn-outline-success' to="/cartpage">Add</Link> <Link className='btn btn-outline-success' to="/fooddetailpage">Detail</Link></p>
                        </div>
                    </div>
                </div>
                ))}         
            </div>
        </div>
    )
}

export default MenuPage