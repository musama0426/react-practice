import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";

function BelowFooter(){

    return(   
        <div className="w-[70%] m-auto py-[20px]">
            <div className="grid grid-cols-5 gap-5 py-5">
                <div className="col-span-4">
                    <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
                </div>
                <div className="col-span-1 border-t-1 border-slate-400">
                    <ul className="flex">
                        <li className="px-2 pl-0 text-[20px]"><FaFacebookF/></li>
                        <li className="px-2 text-[20px]"><FaYoutube /></li>
                        <li className="px-2 text-[20px]"><BsTwitterX /></li>
                        <li className="px-2 text-[20px]"><FaInstagram/></li>
                        <li className="px-2 text-[20px]"><SiGoogle/></li>
                    </ul>
                </div>
            </div>
        </div>
     )
}

export default BelowFooter