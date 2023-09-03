import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  const style = 'text-[14px] cursor-pointer ml-[25px] font-bold';

  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex flex-wrap md:flex-nowrap justify-between items-center">
        <div className="left flex flex-1 mb-2 md:mb-0">
        <div className="language cursor-pointer text-[20px] mb-2 md:mb-0 md:text-[20px] md:ml-[10px]">
            En
        </div>
          <div className="searchInput flex border-[2px] border-solid border-#D3D3D3 rounded-md items-center ml-[10px] p-[5px] focus-within:border-SlateGrey transition-all">
            <input className="input outline-none" type="text" />
            <AiOutlineSearch />
          </div>
        </div>

        <div className="center flex-1 text-center mb-2 md:mb-0">
          <div className="logo font-bold text-lg">Summer Collection</div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <div className={style + ' mb-2 md:mb-0'}>
            <Link to="/">Home</Link>
          </div>
          <div className={style + ' mb-2 md:mb-0'}>
            <Link to="/register">Register</Link>
          </div>
          <div className={style + ' mb-2 md:mb-0'}>
            <Link to="/login">Login</Link>
          </div>
          <Link to="/cart">
          <AiOutlineShoppingCart className="text-2xl cursor-pointer ml-[25px]" />
            </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
