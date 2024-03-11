import { Fragment, useState } from "react";
import Logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import featureImage from "../../assets/image/product-m-jeans1.jpg";

export default function Navbar() {
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [opencart, setOpenCart] = useState(false);
  return (
    <Fragment>
      <div className="flex justify-between opcaity fixed w-full z-10 ">
        <div className="flex justify-between relative w-full py-7 px-7 ">
          <div className="flex items-center">
          <Link to={"/"}>
            <img
              className="h-auto max-w-xs bg-blend-multiply"
              src={Logo}
              alt=""
            />
            </Link>
            <div className="hidden lg:flex">
              <ul className="flex items-center">
                <li>
                  <Link
                    to={"/everything"}
                    className="px-4 text-[white] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                  >
                    EVERYTHING
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/women"}
                    className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                  >
                    WOMEN
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/men"}
                    className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                  >
                    MEN
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/accessories"}
                    className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                  >
                    ACCESSORIES
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center">
              <li className="hidden lg:flex">
                <Link
                  to={"/about"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  ABOUT
                </Link>
              </li>
              <li className="hidden lg:flex">
                <Link
                  to={"/contact"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  CONTACT US
                </Link>
              </li>
              <li className="flex items-center">
                <span className="px-2 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]">
                  $0.0
                </span>
                <button
                  onClick={()=>{setOpenCart(!opencart)}}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] flex relative"
                >
                  <BsCart />
                  <span className="absolute right-2 top-[-5px] text-black bg-white w-[15px] h-[15px] rounded-full flex justify-center items-center text-[10px]">
                    0
                  </span>
                </button>
              </li>
              <li className="relative show-menu">
                <button
                 
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  <IoPersonSharp />
                </button>
                <div className="dropdown-menu">
                <div className="inner-dropdown">
                  <ul>
                    <li>Logout</li>
                  </ul>
                </div>
                </div>
              </li>
              <li>
                <button onClick={()=>{setMenuDropdown(!menuDropdown)}} className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] lg:hidden flex">
                  <GiHamburgerMenu />
                </button>
              </li>
            </ul>
          </div>
          <div className={`absolute top-[100px] right-0 w-full bg-[#2d9fc3] ${menuDropdown == true ? "h-auto menuDropdown py-10" : "h-[0px] py-0 hidden"}`}>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to={"/"}
                  className="px-4 text-[white] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  EVERYTHING
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  WOMEN
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  MEN
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  ACCESSORIES
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`fixed bg-white w-[30%] h-[100vh] z-10 shadow-lg border-black border ${!opencart ? 'right-[-31%]' : 'right-0'} duration-1000 transition-all`}>
          <div className="flex justify-between items-center mx-3 mt-3 border-b border-slate-300 pb-3">
            <div>Shopping Cart</div>
            <div onClick={()=>{setOpenCart(false)}}><RxCross1 className="text-[20px] cursor-pointer"/></div>    
          </div>
          <div className="cart-items h-[78vh] overflow-y-auto ">
            <div className="flex justify-between items-center mt-10 ml-5 border-b pb-4">
              <div className="flex">
                <div>
                  <img src={featureImage} alt=""  className="w-[90px] h-[60px] object-cover"/>
                </div>
                <div className="ml-3">
                  <h5 className="block">Dark Brown Jeans</h5>
                  <span className="block pt-2 text-slate-500">1 × $150.00</span>
                </div>
              </div>
              <div className="mr-5 border rounded-full p-2"><RxCross1 className="text-[20px] cursor-pointer font[700]"/></div>    
            </div>
            <div className="flex justify-between items-center mt-7 ml-5">
              <div className="flex">
                <div>
                  <img src={featureImage} alt=""  className="w-[90px] h-[60px] object-cover"/>
                </div>
                <div className="ml-3">
                  <h5 className="block">Dark Brown Jeans</h5>
                  <span className="block pt-2 text-slate-500">1 × $150.00</span>
                </div>
              </div>
              <div className="mr-5 border rounded-full p-2"><RxCross1 className="text-[20px] cursor-pointer font[700]"/></div>    
            </div>
            <div className="flex justify-between items-center mt-7 ml-5">
              <div className="flex">
                <div>
                  <img src={featureImage} alt=""  className="w-[90px] h-[60px] object-cover"/>
                </div>
                <div className="ml-3">
                  <h5 className="block">Dark Brown Jeans</h5>
                  <span className="block pt-2 text-slate-500">1 × $150.00</span>
                </div>
              </div>
              <div className="mr-5 border rounded-full p-2"><RxCross1 className="text-[20px] cursor-pointer font[700]"/></div>    
            </div>
          </div> 
          <div className="pl-3 pr-3"> 
            <div className="flex justify-between items-center mx-3 mt-3 border-t border-b border-slate-300 pb-3">
              <div>Shopping Cart</div>
              <div>
                  <span className="block pt-2 text-slate-500">$150.00</span>
              </div>    
            </div>
            <button className="bg-cyan-600 text-white w-[100%] block pt-2 pb-2 mt-2 mb-2">View Cart</button>
            <button className="bg-cyan-600 text-white w-[100%] block pt-2 pb-2 mt-2 mb-2">Checkout</button>
          </div>
      </div>
      
    </Fragment>
  );
}
