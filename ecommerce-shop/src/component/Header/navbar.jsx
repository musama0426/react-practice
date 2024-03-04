import { Fragment } from 'react'
import Logo from '../../assets/image/logo.png'
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";


export default function Navbar() {
  return (
    <Fragment>
      <div className="flex justify-between opcaity fixed w-full py-7 px-7">
        <div className='flex items-center'>
          <img className='h-auto max-w-xs bg-blend-multiply' src={Logo} alt="" />
          <div>
            <ul className='flex items-center'>
              <li>
                <Link to={"/"} className='px-4 text-[white] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]'>EVERYTHING</Link>
              </li>
              <li>
                <Link to={"/"} className='px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]'>WOMEN</Link>
              </li>
              <li>
                <Link to={"/"} className='px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]'>MEN</Link>
              </li>
              <li>
                <Link to={"/"} className='px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]'>ACCESSORIES</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center'>
          <ul className='flex items-center'>
            <li>
              <Link to={"/"} className='px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]'>ABOUT</Link>
            </li>
            <li>
              <Link to={"/"} className='px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]'>CONTACT US</Link>
            </li>
            <li className='flex items-center'>
              <span className='px-2 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]'>$0.0</span>
              <Link to={"/"} className='px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] flex relative'>
                <BsCart />
                <span className='absolute right-2 top-[-5px] text-black bg-white w-[15px] h-[15px] rounded-full flex justify-center items-center text-[10px]'>0</span>
              </Link>
            </li>
            <li>
              <Link to={"/"} className='px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] flex'>
                <IoPersonSharp />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}
