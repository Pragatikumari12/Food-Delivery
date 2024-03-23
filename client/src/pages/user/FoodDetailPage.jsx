import React from 'react'
import { Link } from 'react-router-dom'

const ProductDetailPage = () => {
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <h1 className="text-center">ProductDetail</h1>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div>
                <img height={200} src="https://realfood.tesco.com/media/images/Burger-31LGH-a296a356-020c-4969-86e8-d8c26139f83f-0-1400x919.jpg" alt="" />
                <h4>Burger King</h4>
                <p>4.5 rating<samp className='text-danger'>*****</samp></p>
                <p className="text-dark fs-5 fw-bold">Detail</p>
                <p className="text-secondary">The classic burger is an all-time BBQ favourite! This super easy burger recipe gives you delicious ...<samp className='text-danger'>Read more</samp></p>
                <p className="text-dark fs-5 fw-bold">Quantity <samp><div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-sm rounded-5 shadow-sm btn-outline-secondary px-2">-</button>
                  <button type="button" class="btn btn-sm rounded-0 shadow-sm btn-outline-secondary mx-2" disabled>1</button>
                  <button type="button" class="btn btn-sm rounded-5 shadow-sm btn-outline-secondary px-2">+</button>
                </div></samp></p>
                <p className="text-dark">Total Price  <samp className='text-danger'>₹150.00</samp></p>
                <Link className='btn btn-outline-success me-3' to="/cartpage">Add to card</Link>
                <Link className='btn btn-outline-success' to='/payment'>Place order</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage