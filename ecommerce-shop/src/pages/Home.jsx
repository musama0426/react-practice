import React, { Fragment, useEffect } from 'react'
import Banner from '../component/Main/Banner';
import Carosuel from '../component/Main/Carosuel';
import Products from '../component/Main/Products';
import FeatureProducts from '../component/Main/FeatureProducts';
import CallToAction from '../component/Main/CallToAction';
import Footer from '../component/Footer/Footer';
import BelowFooter from '../component/Footer/BelowFooter';

function Home() {

  return (
    <Fragment>
        <Banner/>
        <div className='sm:w-[70%] w-[100%] m-auto py-20 flex justify-center'>
            <Carosuel/>
        </div>
        <div className='sm:w-[70%] w-[100%] m-auto flex justify-center'>
            <Products/>
        </div>
        <div className='bg-slate-100'>
          <div className='sm:w-[70%] w-[100%] m-auto flex justify-center'>
            <FeatureProducts/>
          </div>
        </div>
        <div className='border-y-[1px] border-slate-300'>
          <CallToAction/>
        </div>
        <div className='xl:w-[70%] lg:w-[70%] md:w-[70%] sm:w-[70%] w-[100%] xl:m-auto lg:m-auto md:m-auto sm:m-auto'>
          <Footer/>
        </div>
        <div className='border-y-[1px] border-slate-300'>
          <BelowFooter/>
        </div>
    </Fragment>
  )
}

export default Home