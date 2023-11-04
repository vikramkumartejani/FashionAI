import React, { useEffect, useState } from 'react'
import './products.css'
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
            <div className='products-main-container'>
                  <Shirt />
                  <Pants />
                  <Shoes />
              </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Products


