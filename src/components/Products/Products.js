import React from 'react'
import './products.css'
import Navbar from '../Navbar/Navbar'
import Shoes from './Shoes'
import Shirt from './Shirt'
import Pants from './Pants'
const Products = () => {
  return (
    <>
      <Navbar />
      <div className='product-main-container'>
        <div className='product-container'>
          <div>
            <h3>Shirts:</h3>
            <Shirt />
          </div>
          <div>
            <h3>Pants</h3>
            <Pants />
          </div>
          <div>
            <h3>Shoes:</h3>
            <Shoes />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products