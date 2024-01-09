import React from 'react'

const AddEmail = () => {
  return (
    <div id='lifestyle' className='flex flex-col items-center justify-center bg-[#E5C643] py-12 mt-12 text-center capitalize'>
      <h1 className=' font-extrabold text-white text-2xl md:text-4xl max-w-xl'>Join Shopping community to get monthly promo</h1>
      <p className=' text-white font-medium my-2'>Type your email down below and be young wild generations</p>
      <form className='relative'>
       <input type="email" name="" id="" placeholder='Add your mail here!' className=" px-4 py-4 rounded-md w-[20rem]" />
       <button className='bg-black py-3 px-4  rounded-md text-white absolute top-[8%] right-1 font-semibold'>Send</button>
      </form>
    </div>
  )
}

export default AddEmail