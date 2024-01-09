import Image from 'next/image'
import React from 'react'

const Favorite = () => {
  return (
    <div id='favorite' className='mx-auto max-w-6xl mt-12 px-6'>
      <div className="relative ">
       <h1 className="text-4xl font-bold capitalize z-[9999] relative pl-6">Young&apos;s Favorite</h1>
        <div className="absolute bottom-0 left-[12rem]">
        <Image src={"/Vector 9.png"} width={128} height={71} alt="" className=" " />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-12 gap-y-6'>
        <div>
         <Image src="/Rectangle 50.png" width={417} height={287} alt='' />
         <div className='flex justify-between items-center mt-2'>
            <div>
              <h1 className=' font-bold'>Trending on instagram</h1>
              <a className='text-gray-500 font-semibold'>Explore Now!</a>
            </div>

            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="rotate(90 8 8)"><path fill="currentColor" fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/></g></svg>
            </button>
         </div>
        </div>
        
        
        <div>
         <Image src="/Rectangle 49.png" width={417} height={287} alt='' />
         <div className='flex justify-between items-center mt-2'>
            <div>
              <h1 className='font-bold'>Trending on instagram</h1>
              <a className='text-gray-500 font-semibold'>Explore Now!</a>
            </div>

            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="rotate(90 8 8)"><path fill="currentColor" fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/></g></svg>
            </button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Favorite