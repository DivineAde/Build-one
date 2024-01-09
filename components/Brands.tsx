import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div id='catelogue' className=' bg-[#EBD96B] w-full py-6 px-8 mt-12 flex items-center justify-between flex-wrap relative z-50'>
      <Image src={"/Rectangle 36.png"} width={119} height={71} alt='' className='' />
      <Image src={"/Rectangle 44.png"} width={151} height={53} alt='' />
      <Image src={"/Rectangle 38.png"} width={171} height={63} alt='' />
      <Image src={"/Rectangle 45.png"} width={236} height={71} alt='' />
      <Image src={"/Rectangle 43.png"} width={128} height={71} alt='' />
      <Image src={"/Rectangle 41.png"} width={167} height={64} alt='' />
    </div>
  )
}

export default Brands