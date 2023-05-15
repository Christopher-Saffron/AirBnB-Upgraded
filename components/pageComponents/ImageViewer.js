import Image from 'next/image'
import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox';


function ImageViewer({img}) {

    const [isOpen, setIsOpen] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

  return (
    <div className=' h-[450px] mt-2 grid grid-cols-4 gap-3 w-full p-4'>
        <div onClick={() => {setImgSrc(img); setIsOpen(true)}} className='group  object-cover relative  overflow-hidden col-span-2 '>
            <Image src={img} alt='' fill className='object-cover rounded-l-xl ' />
            <div className='imageHolder-shadow ' />
        </div>
        <div className='flex-col gap-3 hidden md:flex'>
            <div onClick={() => {setImgSrc(img); setIsOpen(true)}}  className='group  object-cover relative  overflow-hidden col-span-2  flex-grow'>
                <Image src={img} alt='' fill className='object-cover  ' />
                <div  className='imageHolder-shadow ' />
            </div>
            <div onClick={() => {setImgSrc(img); setIsOpen(true)}}  className='group  object-cover relative  overflow-hidden col-span-2  flex-grow'>
                <Image src={img} alt='' fill className='object-cover  ' />
                <div className='imageHolder-shadow ' />
            </div>
        </div>
        <div className='  flex flex-col gap-3 col-span-2 md:col-span-1'>
            <div onClick={() => {setImgSrc(img); setIsOpen(true)}} className='group  object-cover relative  overflow-hidden col-span-2  flex-grow'>
                <Image src={img} alt='' fill className='object-cover rounded-tr-xl' />
                <div className='imageHolder-shadow ' />
            </div>
            <div onClick={() => {setImgSrc(img); setIsOpen(true)}} className='group  object-cover relative  overflow-hidden col-span-2 flex-grow'>
                <Image src={img} alt='' fill className='object-cover rounded-br-xl' />
                <div className='imageHolder-shadow ' />
            </div>
        </div>
        {isOpen && <Lightbox
            mainSrc={imgSrc}
            onCloseRequest={() => setIsOpen(false)}
        />}
    </div>
  )
}

export default ImageViewer