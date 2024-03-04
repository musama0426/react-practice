import React from "react";
import CArdImg from "../../assets/image/women-fashion-free-img.jpg";

function Products() {
  const array = [1, 2, 3];
  return (
    <div className="grid grid-cols-3 gap-5 mb-6 mb-[80px]">
      {array && array.length > 0 &&
        array.map((item) => {
          return (
            <div className="product-image-1 w-[400px] h-[500px] bgg-opacity flex align-center justify-end flex-col realtive px-5 pb-5">
              <img
                className="absolute top-0 left-0 w-full h-full z-[-5]"
                src={CArdImg}
                alt=""
              />
              <h3 className="text-white text-[24px] font-medium pb-3">20% Off On Tank Tops</h3>
              <p className="text-white text-[16px] font-medium pb-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                quaerat vitae quo illum blanditiis itaque.
              </p>
              <button
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-200 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                SHOP NOW
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Products;
