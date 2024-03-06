import React from 'react';

function Banner() {
  return (
    <div className="background-banner xl:py-[300px] xl:px-[350px] lg:py-[180px] lg:px-[180px] md:py-[180px] md:px-[180px] sm:py-[200px] sm:px-[180px] py-[200px] px-[15px]">
      <h1 className='xl:text-[65px] lg:text-[65px] md:text-[40px] sm:text-[28px] text[ 20px] font-bold leading-tight text-white'>Raining Offers For <br/> Hot Summer!</h1>
      <h5 className='xl:text-[25px] lg:text-[25px] md:text-[22px] sm:text-[20px] text[ 16px] font-bold leading-tight text-white py-6 '>25% Off On All Products</h5>
      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SHOP NOW</button>
      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm text-white font-medium text-gray-900 focus:outline-none bg-transparent border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">FIND MORE</button>
    </div>
  )
}

export default Banner