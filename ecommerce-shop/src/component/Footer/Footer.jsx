import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Footer(){

    return(
        <Fragment>
            <div className="grid grid-cols-5 gap-5 py-5">
                <div className="col-span-2">
                    <div>
                        <img className="mb-[50px]" src="" alt="Logo" />
                        <p className="text-[20px] font-medium text-black">The best look anytime, anywhere.</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                        <ul>
                            <li className="mb-[25px] text-[20px] font-[300] text-black">
                                <b>For Her</b>
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Women Jeans</Link>
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Tops and Shirts</Link>
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Women Jackets</Link>     
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Heels and Flats</Link>     
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Women Accessories</Link>     
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1">
                    <div>
                        <ul>
                            <li className="mb-[25px] text-[20px] font-[300] text-black">
                                <b>For Him</b>
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Men Jeans</Link>
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Men Shirts</Link>
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Women Jackets</Link>     
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Men Shoes</Link>     
                            </li>
                            <li className="py-1.5 text-gray-500">
                                <Link>Women Accessories</Link>     
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-1"> 
                    <div>
                        <ul>
                            <li className="mb-[25px] text-[20px] font-[300] text-black">
                                <b>Subscribe</b>
                            </li>
                            <li className="py-1.5">
                                <form class="">
                                    <div class="mb-4">
                                        <input class="shadow appearance-none border border-slate-400 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email address,,,"/>
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4">
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer