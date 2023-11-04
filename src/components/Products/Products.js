import React, {useEffect, useState} from 'react'
import './products.css'
import Navbar from '../Navbar/Navbar'
import Shoes from './Shoes'
import Shirt from './Shirt'
import Pants from './Pants'
import LoadingSpinner from '../LoadingSpinner.js'
const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
        <div>
              <Navbar /><div className='product-main-container'>
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
              </div></div>
        )}
      </div>
    </>
  )
}

export default Products


