import React from 'react'
import {ApiTopProduct} from '../Api/TopProductsApi';
import { AiOutlineSearch,AiOutlineShoppingCart,AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Product() {
    const iconStyle = 'h-[20px] w-[40px] rounded-full bg-white flex items-center justify-center m-4 hover:bg-SlateGrey hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'
  return (
    <div className='p-5 flex flex-wrap items-center justify-center'>
      {ApiTopProduct.map((product, index) => (
        <div className='flex items-center justify-center flex-1 min-w-[350px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative'key={index}>
          <img src={product.src} alt={`Product ${index + 1}`} />
          <div className='flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100'>
          <AiOutlineShoppingCart className={iconStyle}/>
          <Link to="/product">
              <AiOutlineSearch className={iconStyle} />
            </Link>
          <AiOutlineHeart className={iconStyle}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product
