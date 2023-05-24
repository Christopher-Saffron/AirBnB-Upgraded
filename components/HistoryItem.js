import Image from 'next/image'
import React from 'react'

function HistoryItem({travel}) {
  return (
    <div className='flex border-2 gap-3 border-gray-300 bg-gray-50 h-fit shadow-md rounded-lg w-full p-2 cursor-pointer duration-200 ease-out hover:scale-[1.01] hover:bg-gray-100'>
        <div className='relative flex-grow max-w-[200px] h-32 rounded-md'>
            <Image src={travel.img} alt='' fill className='object-cover rounded-md' />
        </div>
        <div className='flex-grow border-l border-gray-300 px-3 h-32'>
            <p className='text-[#FD5B61] font-semibold italic text-lg pb-1 border-b border-gray-300'>{travel.placeName}</p>
            <p>Hosted by {travel.placeHost}</p>
            <p>From: {travel.dateStart.slice(0,10)}</p>
            <p>To: {travel.dateEnd.slice(0,10)}</p>
            {/* <p className='text-[#FD5B61] font-semibold italic text-sm'>Paid with: stripe</p> */}
        </div>
        <div className='self-end font-bold'>Total: {travel.fullPrice} PLN</div>
    </div>
  )
}

export default HistoryItem