import React from 'react'

const PaymentPage = () => {
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-lg-12 me-5 mb-3">
                    <h1 className="text-center">PaymentPage</h1>
                    <img height={200} src="https://entrackr.com/storage/2021/02/google-phonepe.jpg" alt="" />
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label fs-4">Name on card</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label fs-4">Account number</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="****-****-****-****" />
                    </div>
                    <div class="input-group mb-3">
                        <label for="exampleFormControlInput1" class="form-label fs-4">Exapiration Date</label>
                        <input type="number" class="form-control fs-5" placeholder="02/23" aria-label="02/23" />
                        <label for="exampleFormControlInput1" class="form-label fs-4">CVV</label>
                        <input type="" class="form-control  fs-5" placeholder="202" aria-label="202" />
                    </div>
                </div>
            </div>
            <button className=' btn bg-danger mt-3 text-light'>PayNow</button>
        </div>
    )
}
export default PaymentPage