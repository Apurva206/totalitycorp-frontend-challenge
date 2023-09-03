import React from 'react';

const CategoryPage = () => {
  return <div>  
      <div className='flex flex-col p-5'>
          <h1 className='text-[30px]'>Cloth's</h1>
          <div className='flex items-center justify-between mt-3'>
              <div className='flex mobile:flex-col'>
                  <p>Filter by</p> 
                  <select className='ml-3 border-2 border-silver mobile:ml-0'>
                      <option selected disabled>Size</option>
                      <option>Small(S)</option>
                      <option>Medium(M)</option>
                      <option>Large(L)</option>
                      <option>Extra Large(XL)</option>
                  </select>
                  <select className='ml-3 border-2 border-silver mobile:ml-0'>
                      <option selected disabled>Color</option>
                      <option>Red</option>
                      <option>Yellow</option>
                      <option>Blue</option>
                      <option>Green</option>
                  </select>
              </div>
              <div className='flex mobile:flex-col mobile:items-end'>
                  <p>Sort by</p>
              <select className='ml-3 border-2 border-silver'>
                      <option selected >Relevance</option>
                      <option>Popularity</option>
                      <option>Price Low-to-High</option>
                      <option>Price High-to-Low</option>
                      <option>Discount</option>
                  </select>
              </div>
          </div>
      </div>
     
  </div>;
};

export default CategoryPage;