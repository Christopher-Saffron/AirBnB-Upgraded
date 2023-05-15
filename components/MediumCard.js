import Image from 'next/image'
import React from 'react'

function MediumCard({img, title, searchWithTag}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out' onClick={() => {searchWithTag(title)}}>
      <div className='relative h-80 w-80'>
        <Image src={img} alt='' fill className='rounded-lg'  style={{objectFit:"cover"}} />
      </div>
          <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard