import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-4 px-6 md:py-12 md:px-24 flex flex-col md:flex-row justify-between gap-y-6'>
      <div>
        <h1 className=' font-bold text-3xl text-white'>Fashion</h1>
        <p className='py-2 max-w-xs text-[#8E8E8E]'>Complete your style with awesome clothes from us</p>
        
        <div className='flex gap-2'>
        <button className='bg-[#EBD96B] p-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg>
        </button>
        <button className='bg-[#EBD96B] p-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
        </button>
        <button className='bg-[#EBD96B] p-2 rounded-xl'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"/></svg>
        </button>
        <button className='bg-[#EBD96B] p-2 rounded-xl'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
        </button>
        </div>
      </div>

      <div className='flex justify-between w-full md:w-1/2 '>
        <ul>
          <li className='text-white'>Company</li>
          <li className='text-[#8E8E8E]'>About</li>
          <li className='text-[#8E8E8E]'>Contact us</li>
          <li className='text-[#8E8E8E]'>Support</li>
          <li className='text-[#8E8E8E]'>Careers</li>
        </ul>

        <ul>
          <li className='text-white'>Quick Link</li>
          <li className='text-[#8E8E8E]'>Share Location</li>
          <li className='text-[#8E8E8E]'>Orders Tracking</li>
          <li className='text-[#8E8E8E]'>Soze Guide</li>
          <li className='text-[#8E8E8E]'>FAQs</li>
        </ul>

        <ul>
          <li className='text-white'>Legal</li>
          <li className='text-[#8E8E8E]'>Terms and Conditions</li>
          <li className='text-[#8E8E8E]'>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer