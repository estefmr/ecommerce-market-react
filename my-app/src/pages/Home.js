import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img src='images/hotel-airbnb.jpg' className="img-fluid rounded-3 banner1" alt='x'/>
                <div className='main-banner-content position-absolute'>
                  <h4>Vinoculares</h4>
                  <h5>Lentes HD</h5>
                  <p>desde $50</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img src='images/hotel-airbnb.jpg' className="img-fluid rounded-3 banner1" alt='x'/>
                <div className='main-banner-content position-absolute'>
                  <h4>Vinoculares</h4>
                  <h5>Lentes HD</h5>
                  <p>desde $50</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </section>
    </>
  )
}

export default Home