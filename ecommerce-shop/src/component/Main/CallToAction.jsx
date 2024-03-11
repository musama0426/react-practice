import React from "react";
import { Link } from "react-router-dom";

function CallToAction() {
        return(
            <div className="xl:w-[80%] lg:w-[100%] md:w-[100%] sm:w-[100%] flex justify-center md:px-[60px] lg:px-[0] py-[50px]">
                <Link className="lg:text-[28px] md:text-[22px] sm:text-[18px] text-[16px] font-[500] text-black-600">SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</Link>
            </div>
        )
}

export default CallToAction;