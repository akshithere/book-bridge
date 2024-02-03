import React from 'react'

const Store = () => {
  return (
    <div>
      <header className='w-full pt-16 md:p-0'>
        <ul className='w-full flex justify-evenly text-3xl font-outfit mt-3 md:mt-1 text-center '>
          <li className='pb-1 w-1/2 border-r-2 h-full border-b-4 border-b-blue-500'>Sell</li>
          <li className='pb-1 w-1/2 border-l-2 border-b-4'>Rent</li>
        </ul>
      </header>
    </div>
  )
}

export default Store
