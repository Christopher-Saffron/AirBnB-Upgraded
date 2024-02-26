import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type SmallCardProps = {
  img: string;
  id: string;
  location: string;
  distance: string;
};

function SmallCard({ img, id, location, distance }: SmallCardProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/place/${id}`);
      }}
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl transition duration-250 transform ease-out cursor-pointer hover:scale-105 hover:bg-gray-100"
    >
      <div className="relative h-16 w-16">
        <Image src={img} alt="" fill className="rounded-xl" sizes="64px" />
      </div>
      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
