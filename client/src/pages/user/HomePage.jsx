import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const a=[1,1,1,1]
  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img height={200} width={300} src="https://static.toiimg.com/thumb/75584113.cms?imgsize=1576247&width=800&height=800" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img height={200} width={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwX5iG88ZpCKu8_9PVrsqV2JaB6JO3HdhLHoG_nLzbKLPn6CKSGYmzbsN8tJJUnFifRkc&usqp=CAU" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img height={200} width={300} src="https://i0.wp.com/lifecurrentsblog.com/wp-content/uploads/2020/04/MG_0103.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h1>All Product</h1>
      {/* Most popular */}
      <h1>Most Popular</h1>
      <div className="row">
        {a.map((i) =>(
          <div className="col">
          <div className="card">
            <div className="card-body">
              <Link to='/menupage'><img height={200} src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710115200&semt=sph" alt="" /></Link>
              <h4 className="text-dark">Burger</h4>
              <p className="text-secondary">Classic Nutrition</p>
              <p>₹150 <samp className='text-danger'>40%off</samp></p>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  )
}
export default HomePage