import React from "react";
import backgroundImage from "../public/Rectangle 2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#E7E6E6] h-[110vh] md:h-[80vh] mx-auto max-w-7xl rounded-none md:rounded-3xl px-8 py-8 flex flex-col md:flex-row items-center w-full">
      <div className="w-full md:w-1/2 mx-12 my-12">
        <h1 className="font-extrabold text-6xl uppercase w-2 leading-[4rem]">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white relative inline-block">
            <span className="relative text-black">Let&apos;s</span>
          </span>
          us explore
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#EBD96B] relative inline-block">
            <span className="relative text-black">Unique</span>
          </span>{" "}
          clothes.
        </h1>
        <p className="pt-4 font-semibold">Live for influential and innovative fashion</p>

        <span className="flex items-center gap-2 pt-2">
          <Image src="/Vector 9.png" width={100} height={50} alt="" />
          <a>
            <button className="bg-black py-2 px-4 text-white rounded-md">Shop now</button>
          </a>
        </span>
      </div>

      <div className="w-full md:w-1/2">
        <Image
          src="/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-removebg-preview 1.png"
          width={871}
          height={784}
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Hero;
