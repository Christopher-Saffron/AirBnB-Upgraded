import React from "react";
import TAGS from "./TAGS";
import Image from "next/image";
function AdditionalTags({ flex, num }) {
  return (
    <div
      className={`flex text-gray-500 flex-${flex} gap-3  ${
        flex === "row" ? "justify-center" : ""
      }`}
    >
      {flex === "col" ? (
        <>
          {num.map((tag, i) => {
            return (
              <div
                key={i}
                className="flex  gap-3    rounded-xl px-4 py-2 first-of-type:mt-6"
              >
                <div className="relative h-6 w-6">
                  <Image
                    src={TAGS[tag].icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-black font-semibold">
                    {TAGS[tag].tagName}
                  </p>
                  <p className="text-sm mt-2">{TAGS[tag].tagDescription}</p>
                </div>
              </div>
            );
          })}
        </>
      ) : flex === "row" ? (
        <>
          {num.map((tag, i) => {
            return (
              <div
                key={i}
                className="flex text-sm flex-grow w-full gap-3 justify-center items-center border border-gray-300 rounded-xl px-2 py-2 md:py-4 md:px-4"
              >
                <div className="relative h-6 w-6">
                  <Image
                    src={TAGS[tag].icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span>{TAGS[tag].tagName}</span>
              </div>
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdditionalTags;
