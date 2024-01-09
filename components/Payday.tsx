import Image from "next/image";



const Payday = () => {
  return (
    <div className="bg-[#F9DF56] mt-12 flex flex-col md:flex-row items-center gap-1 p-6">
      <div className="w-full md:w-1/2">
       <Image src={"/image_12-removebg-preview.png"} width={505} height={494} alt="" />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className=" text-[4rem] font-extrabold leading-tight"><span className=" bg-white px-2">PAYDAY</span> <br /> SALE NOW</h1>
        <p className=" max-w-xs text-lg font-semibold">Spend minimal of $100 get %30 off voucher code for your next purchase</p>

        <p className=" font-extrabold">1 June - 20 June 2023</p>
        
        <p className="font-medium ">*Terms & Conditions apply</p>
        
        <button className="bg-black py-2 px-4 text-white mt-2 rounded-md">
           Shop now
        </button>
      </div>
    </div>
  )
}

export default Payday;