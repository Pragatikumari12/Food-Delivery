import React from 'react'
import { Link } from 'react-router-dom'

const AddressPage = () => {
  return (
    <div className='container'>
        <h1 className="text-center">Address</h1>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Enter Name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="phone"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">House address1</label>
  <input type="address" class="form-control" id="exampleFormControlInput1" placeholder="House address1"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">House address2</label>
  <input type="address" class="form-control" id="exampleFormControlInput1" placeholder="House address2"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Postal code</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Postal code"/>
</div>
<Link className='btn btn-outline-danger'to='/payment'>Continue</Link>
    </div>
  )
}

export default AddressPage