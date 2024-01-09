import Image from "next/image";
import React from "react";

const Arrivals = () => {
  return (
    <div id="fashion" className="mx-auto max-w-6xl mt-12">
      <div className="relative ">
       <h1 className="text-4xl font-bold capitalize z-[9999] ml-6 relative">New arrivals</h1>
        <div className="absolute top-1/2 left-[7rem]">
        <Image src={"/Vector 9.png"} width={128} height={71} alt="" className=" " />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mt-12">
        <div className="">
          <Image
            src={"/Rectangle 20.png"}
            width={484}
            height={704}
            className="w-[21rem] h-[28rem]"
            alt=""
          />
          <div className="flex items-center justify-between">
            <div className="mt-4">
            <h2 className="font-bold capitalize text-black">Hoodies & Sweetshirt</h2>
            <a className="text-gray-500 font-semibold">Explore now</a>
            </div>

            <div className=" cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="rotate(90 8 8)"><path fill="currentColor" fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/></g></svg>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/Rectangle 21.png"}
            width={484}
            height={704}
            className="w-[342px] h-[452px]"
            alt=""
          />
          <div className="flex items-center justify-between">
            <div className="mt-4">
            <h2 className="font-bold capitalize text-black">Hoodies & Sweetshirt</h2>
            <a className=" text-gray-500 font-semibold">Explore now</a>
            </div>

            <div className=" cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="rotate(90 8 8)"><path fill="currentColor" fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/></g></svg>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/Rectangle 22.png"}
            width={490}
            height={704}
            className="w-[342px] h-[452px]"
            alt=""
          />
          <div className="flex items-center justify-between">
            <div className="mt-4">
            <h2 className="font-bold capitalize text-black">Hoodies & Sweetshirt</h2>
            <a className="text-gray-500 font-semibold">Explore now</a>
            </div>

            <div className=" cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g transform="rotate(90 8 8)"><path fill="currentColor" fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/></g></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrivals;
