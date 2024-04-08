import Image from "next/image";
import React from "react";

function Test() {
  return (
    <div className=" bg-black group">
      <div className="border border-red-500 w-full h-[600px] overflow-hidden">
        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen  bg-cover ">
          <Image
            src="/banner5.jpg"
            alt=""
            fill
            className=" ellipse ellipse6 object-cover absolute transition group-hover:rotate-0 duration-[2.5s]  origin-center rotate-[0deg]"
          />
          <Image
            src="/banner5.jpg"
            alt=""
            fill
            className=" ellipse ellipse5 object-cover absolute transition group-hover:rotate-0 duration-[2.5s]  origin-center rotate-[-80deg]"
          />
          <Image
            src="/banner5.jpg"
            alt=""
            fill
            className=" ellipse ellipse4 object-cover absolute transition group-hover:rotate-0 duration-[2.5s] group-in-range:border-red-500 origin-center rotate-[40deg]"
          />
          <Image
            src="/banner5.jpg"
            alt=""
            fill
            className=" ellipse ellipse3 object-cover absolute transition group-hover:rotate-0 duration-[2.5s]  origin-center rotate-[-50deg]"
          />
          <Image
            src="/banner5.jpg"
            alt=""
            fill
            className=" ellipse ellipse2 object-cover absolute transition group-hover:rotate-0 duration-[2.5s]  origin-center rotate-[60deg]"
          />
          <Image
            src="/banner5.jpg"
            alt=""
            fill
            className=" ellipse ellipse1 object-cover absolute transition group-hover:rotate-0 duration-[2.5s]  origin-center rotate-[-25deg]"
          />
        </div>
      </div>
    </div>
  );
}

export default Test;
