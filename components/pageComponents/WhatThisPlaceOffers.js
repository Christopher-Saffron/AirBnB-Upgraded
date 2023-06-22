import React from "react";
import OFFERS from "./OFFERS";

function WhatThisPlaceOffers({ randomOffersArray }) {
  return (
    <div className="hidden md:block">
      <p className="text-2xl font-bold py-3 border-b border-gray-300">
        What this place has to offer:
      </p>
      <ol className="list-disc gap-x-5 text-xl grid px-8 md:px-5 mt-3 w-fit md:mx-auto grid-cols-1 md:grid-cols-2">
        {randomOffersArray.map((num) => (
          <li key={num}>{OFFERS[num]}</li>
        ))}
      </ol>
    </div>
  );
}

export default WhatThisPlaceOffers;
