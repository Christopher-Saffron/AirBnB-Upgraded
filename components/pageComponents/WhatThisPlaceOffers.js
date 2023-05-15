import React from 'react'
import OFFERS from './OFFERS'

function WhatThisPlaceOffers({randomOffersArray}) {
  return (
    <div>
        <p className='text-2xl font-bold py-3 border-b border-gray-300'>What this place has to offer:</p>
        <ol className='list-disc grid-cols-2 gap-x-5 text-xl grid px-5 mt-5 w-fit mx-auto'>
            {randomOffersArray.map(num => (
                <li  key={num}>
                    {OFFERS[num]}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default WhatThisPlaceOffers