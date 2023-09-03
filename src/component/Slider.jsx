import React from 'react'
import { BiSolidLeftArrow,BiSolidRightArrow} from "react-icons/bi"
import image1 from '../img/image1.jpg';
function Slider() {
    const arrowStyle = 'flex justify-center items-center shadow-sm hover:cursor-pointer'
  return (
    <div className='h-[540px] bg-white flex items-center justify-between'>

      <div className={arrowStyle}>
       <BiSolidLeftArrow className='text-2xl'/>
      </div>

      <div className='wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg 
      border-[#c0c0c0] border-10px overflow-hidden relative bg-SkyBlue'>
        <div className='flex items-center justify-center h-[100%]'>
            <div className='image flex flex-1 justify-center items-center h-[100%]'>
                <img 
                className='h-[100%] object-cover '
                src={image1} alt="" />
            </div>
            <div className='flex flex-1 flex-col place-items-start justify-center ml-[19px] '>
              <h2 className='text-[40px]'>Hey! this is an awesome deal today</h2>
              <p className='text-[25px]'>Upto 50% off</p>
              <button className='btn'>Shop Now</button>
            </div>
        </div>
      </div>

      <div className={arrowStyle}>
        <BiSolidRightArrow className='text-2xl'/>
      </div>
    </div>
  )
}

export default Slider
