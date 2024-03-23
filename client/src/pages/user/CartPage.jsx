import React from 'react'
import { Link } from 'react-router-dom'

const CartPage = () => {
    return (
        <div className='container'>
            <div className="row">
                <h1 className="text-center">CartPage</h1>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-5">
                                    <p className='fs-3 fw-bold'>Burger</p>
                                    <p className="fs-5 text-secondary">Calsic Nutrition</p>
                                    <p>₹150 <samp className='text-danger'>40%off</samp></p>
                                    <p className='fs-5 text-dark'>Quantity <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-secondary">-</button>
                                        <button type="button" class="btn btn-secondary" disabled>1</button>
                                        <button type="button" class="btn btn-secondary">+</button>
                                    </div></p>
                                    <button className='btn btn bg-danger text-light'>Remove</button>
                                </div>
                                <div className="col-lg-7">
                                    <img height={200} src="https://static.toiimg.com/thumb/75584113.cms?imgsize=1576247&width=800&height=800" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <p className="fs-5 fw-bold text-dark">Order Item</p>
                    <p className="fs-5 fw-bold text-dark">Delivery Charge</p>
                    <p className="fs-5 fw-bold text-dark">Total Price</p>
                </div>
                <div className="col-lg-7">
                    <p>1</p>
                    <p className="text-success">Free</p>
                    <p className="text-secondary">₹150.00</p>
                    <Link className='btn btn bg-danger text-light me-5'to="/addresspage">Address</Link>
                    <Link className='btn btn bg-danger text-light me-5'to="/payment">Placeorder</Link>
                </div>
                
            </div>
        </div>
    )
}

export default CartPage