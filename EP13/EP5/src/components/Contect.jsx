import React from 'react'
import { useEffect } from 'react'



const Contect = () => {
  return (
    <>
    <h1 className='text-center font-bold m-2 p-2'>Contect Page</h1>

    <form className='flex flex-col items-center justify-center  p-4 w-6/12 m-auto'>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='contactNumber'>
        Contact Number
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
        id='contactNumber'
        type='text'
        placeholder='Enter contact number'
      />
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
        Message
      </label>
      <textarea
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
        id='message'
        type='text'
        placeholder='Enter message'
      />
      <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded' type='submit'>
        Submit
      </button>
    </form>

     
    </>
    
  )
}

export default Contect