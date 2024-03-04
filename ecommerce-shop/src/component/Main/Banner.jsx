import React from 'react';

function Banner() {
  return (
    <div className="background-banner py-[300px] px-[350px] ">
      <h1 className='text-[65px] font-bold leading-tight text-white'>Raining Offers For <br/> Hot Summer!</h1>
      <h5 className='text-[25px] font-bold leading-tight text-white py-6 '>25% Off On All Products</h5>
      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SHOP NOW</button>
      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm text-white font-medium text-gray-900 focus:outline-none bg-transparent border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">FIND MORE</button>
    </div>
  )
}

export default Banner