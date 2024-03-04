import React, { Fragment } from 'react'
import Banner from '../component/Main/Banner';
import Carosuel from '../component/Main/Carosuel';
import Products from '../component/Main/Products';
import FeatureProducts from '../component/Main/FeatureProducts';

function Home() {
  return (
    <Fragment>
        <Banner/>
        <div className='w-[70%] m-auto py-20'>
            <Carosuel/>
        </div>
        <div className='w-[70%] m-auto flex justify-center'>
            <Products/>
        </div>
        <div className='bg-slate-100'>
          <div className='w-[70%] m-auto flex justify-center'>
            <FeatureProducts/>
          </div>
        </div>
    </Fragment>
  )
}

export default Home