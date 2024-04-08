import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

const CATEGORIES = [
  { category: "Cleanliness", value: 3.6 },
  { category: "Accuracy", value: 5.0 },
  { category: "Communication", value: 4.5 },
  { category: "Location", value: 3.9 },
  { category: "Check-in", value: 4.8 },
  { category: "Value", value: 4.1 },
];

function Reviews({ star, reviews, commentsArray }) {
  return (
    <div className="pt-3 px-5 mt-6 border-t border-gray-300">
      <div className="flex items-center gap-2  text-xl justify-center md:justify-start">
        <div className="flex items-center gap-2">
          <StarIcon className="h-4" />
          <p className="font-semibold">{star}</p>
        </div>
        <div className="bg-black h-1 w-1 rounded-full" />
        <p className="italic underline text-gray-500">{reviews} reviews</p>
      </div>

      <div className="grid mt-3 grid-cols-1 md:grid-cols-2 sm:px-3 md:px-0 gap-y-3 gap-x-12 text-sm">
        {CATEGORIES.map((item) => (
          <div className="flex justify-between" key={item.category}>
            <p className="min-w-[120px]">{item.category}</p>
            <div className="flex gap-3 justify-end w-full items-center">
              <div className="relative  h-2 bg-gray-300 w-full max-w-[180px] lg:max-w-[200px]">
                <div
                  className="bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full"
                  style={{ width: "85%" }}
                />
              </div>
              <p className="ml-4">{item.value}</p>
            </div>
          </div>
        ))}
        {/* <div className="flex justify-between">
          <p className="min-w-[120px]">Cleanliness</p>
          <div className="flex gap-3 justify-end w-full items-center">
            <div className="relative  h-2 bg-gray-300 w-full max-w-[180px] lg:max-w-[200px]">
              <div
                className="bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full"
                style={{ width: "85%" }}
              />
            </div>
            <p className="ml-4">4.3</p>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="min-w-[120px]">Accuracy</p>
          <div className="flex gap-3 justify-end w-full items-center">
            <div className="relative  h-2 bg-gray-300 w-full  max-w-[180px] lg:max-w-[200px]">
              <div
                className="bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full"
                style={{ width: "93%" }}
              />
            </div>
            <p className="ml-4">4.9</p>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="min-w-[120px]">Communication</p>
          <div className="flex gap-3 justify-end w-full items-center">
            <div className="relative  h-2 bg-gray-300 w-full  max-w-[180px] lg:max-w-[200px]">
              <div
                className="bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full"
                style={{ width: "99%" }}
              />
            </div>
            <p className="ml-4">5.0</p>
          </div>
        </div> */}

        {/* <div className="flex justify-between">
          <p className="min-w-[120px]">Location</p>
          <div className="flex gap-3 justify-end w-full items-center">
            <div className="relative  h-2 bg-gray-300 w-full  max-w-[180px] lg:max-w-[200px]">
              <div
                className="bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full"
                style={{ width: "93%" }}
              />
            </div>
            <p className="ml-4">4.9</p>
          </div>
        </div> */}

        {/* <div className="flex justify-between">
          <p className="whitespace-nowrap min-w-[120px]">Check-in</p>
          <div className="flex gap-3 justify-end w-full items-center">
            <div className="relative  h-2 bg-gray-300 w-full  max-w-[180px] lg:max-w-[200px]">
              <div
                className="bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full"
                style={{ width: "88%" }}
              />
            </div>
            <p className="ml-4">4.4</p>
          </div>
        </div> */}

        {/* <div className="flex justify-between">
          <p className="min-w-[120px]">Value</p>
          <div className="flex gap-3 justify-end w-full items-center">
            <div className="relative  h-2 bg-gray-300 w-full  max-w-[180px] lg:max-w-[200px]">
              <div
                className="bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full"
                style={{ width: "100%" }}
              />
            </div>
            <p className="ml-4">5.0</p>
          </div>
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-3 my-6 h-fit">
        {commentsArray.map((user, i) => (
          <div
            key={i}
            className=" w-full max-h-[200px] even:hidden md:even:block"
          >
            <div className="flex gap-3">
              <div className="h-12 w-12 relative">
                <Image
                  src={user.picture.thumbnail}
                  alt=""
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div className="">
                <p>{user.name.first + " " + user.name.last}</p>
                <p className="text-gray-500 text-sm">
                  {user.registered.date.slice(0, 10)}
                </p>
              </div>
            </div>
            <div className="px-2 mt-1 line-clamp-2 md:line-clamp-4 lg:line-clamp-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
              rutrum nulla. Curabitur ut libero dictum, lobortis urna in,
              rhoncus eros. Nam sodales, ligula vitae placerat interdum, ex
              massa placerat ligula, nec aliquam augue est in sem.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
