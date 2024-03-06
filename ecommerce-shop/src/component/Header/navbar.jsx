import { Fragment, useState } from "react";
import Logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [menuDropdown, setMenuDropdown] = useState(false)
  return (
    <Fragment>
      <div className="flex justify-between opcaity fixed w-full z-10 ">
        <div className="flex justify-between relative w-full py-7 px-7 ">
          <div className="flex items-center">
            <img
              className="h-auto max-w-xs bg-blend-multiply"
              src={Logo}
              alt=""
            />
            <div className="hidden lg:flex">
              <ul className="flex items-center">
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
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center">
              <li className="hidden lg:flex">
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  ABOUT
                </Link>
              </li>
              <li className="hidden lg:flex">
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]"
                >
                  CONTACT US
                </Link>
              </li>
              <li className="flex items-center">
                <span className="px-2 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px]">
                  $0.0
                </span>
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] flex relative"
                >
                  <BsCart />
                  <span className="absolute right-2 top-[-5px] text-black bg-white w-[15px] h-[15px] rounded-full flex justify-center items-center text-[10px]">
                    0
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/"}
                  className="px-4 text-white lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] flex"
                >
                  <IoPersonSharp />
                </Link>
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
    </Fragment>
  );
}
