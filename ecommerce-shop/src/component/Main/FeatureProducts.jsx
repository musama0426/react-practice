import React from 'react';
import featureImage from "../../assets/image/product-m-jeans1.jpg";
import { FaRegStar } from "react-icons/fa6";
import featureblogImage from '../../assets/image/globe-free-img.png';

function FeatureProducts() {
    const featurePost = [1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10];
    const featureBlogs = [ 1, 2, 3 ,4];
  return (
    <div className='pt-[80px] pb-20'>
        <h3 className='text-[34px] font-[600] text-black relative border-down text-center'>Featured Products</h3>
        <div className='grid grid-cols-5 mt-[50px] gap-5 py-10'>
            {featurePost && featurePost.length > 0 &&
            featurePost.map((posts)=>{
                return(
                    <div className='featured-post relative py-5'>
                        <span className='bg-white rounded-full w-[50px] h-[30px] min-h-4 flex align-center justify-center absolute top-[30px] left-[10px] shadow text-gray-700 text-[14px] font-[400] px-4 py-1'>Sale!</span>
                        <img src={featureImage} alt="" />
                        <h5 className='pt-3 text-black-700 text-[16px] font-[600]'>Dark Brown Jeans</h5>
                        <p className='pt-3 text-gray-500'>Men</p>
                        <p className='pt-2'>$ 150.00</p>
                        <p className='flex pt-2'>
                            <button className='w-[20px] h-[20px] rounded-full bg-amber-900 mx-1 ml-0'></button>
                            <button className='w-[20px] h-[20px] rounded-full bg-slate-900 mx-1'></button>
                            <button className='w-[20px] h-[20px] rounded-full bg-yellow-700 mx-1'></button>
                        </p>
                        <p className='flex pt-3'><FaRegStar /> <FaRegStar /> <FaRegStar /><FaRegStar /><FaRegStar /></p>
                    </div>
                );
            })
            }
            
        </div>
        <div className='special-editions py-[120px] px-[100px]'>
            <h3 className='text-white font-[500] text-[24px]'>Limited Time Offer</h3>
            <h4 className='text-white font-[600] text-[40px]'>Special Edition</h4>
            <p className='text-white font-[400] text-[16px] pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <b className='text-white font-[700] text-[22px] block mb-5 mt-3'>Buy This T-shirt At 20% Discount, Use Code OFF20</b>
            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SHOP NOW</button>
        </div>
        <div className='grid grid-cols-4 mt-[50px] gap-5 py-10'>
        {featureBlogs && featureBlogs.length > 0 &&
            featureBlogs.map((blogItems)=>{
             return(
                <div className='flex justify-items-center flex-col items-center text-center'>
                    <img src={featureblogImage} alt="" />
                    <h5 className='pt-3 text-black-700 text-[16px] font-[600]'>Worldwide Shipping</h5>
                    <p className='pt-3 text-gray-500'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
             );
            })
         }
        </div>
           
    </div>
  )
}

export default FeatureProducts