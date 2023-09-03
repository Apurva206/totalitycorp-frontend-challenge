import React from 'react'
import {ApiCategories} from '../Api/CategoryApi';


function Categories() {
  return (
    <div className='flex justify-between items-center p-5'>
      {/* {
        ApiCategories.map((category, index)=>{
            return <Category item ={category} key={index} />
        })
      } */}
      {ApiCategories.map((category) => (
        <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative' key={category.title}>
          <img src={category.src} alt={category.title} />
          <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
          <h2 className='text-Dgrey font-medium text-[30px]'>{category.title}</h2>
          <button className='btn'>See More</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories;
