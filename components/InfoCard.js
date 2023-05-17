import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function InfoCard({img, location, title, description, star, price, id, tags}) {
    const router = useRouter()
    const [liked, toggleLiked] = useState(false)

    useEffect(() => {
        if (sessionStorage.getItem('likedPlaces')) {
            const arr = sessionStorage.getItem('likedPlaces').split(',')
            if (arr.includes(id)) {
                toggleLiked(true)
                console.log('includes')
            }
        }
    }, [])
    
  return (
    <div onClick={() => router.push(`/place/${id}`)} className='flex bg-gray-100 rounded-lg mb-3 md:bg-none md:mb-0 flex-col md:flex-row py-2 md:py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t '>
        <div className='relative h-48 w-full md:h-52 md:w-80 flex-shrink-0'>
            <Image src={img} alt='' fill style={{objectFit: 'cover'}} className='rounded-lg md:rounded-2xl' />
        </div>
        <div className='flex flex-col flex-grow md:pl-5'>
            <div className='flex justify-between mt-2 md:mt-0'>
                <p className='italic text-gray-700 underline'>{location}</p>
                {liked ? <FilledHeartIcon className='h-7 w-7 text-red-500  heartAnim' /> : <HeartIcon className='h-7 w-7' />}
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2' />
            <p className='pt-2 text-sm text-gray-600 flex-grow line-clamp-2 md:line-clamp-3 lg:line-clamp-none'>{description}</p>
            <div className='flex gap-3 flex-wrap my-2'>
                {tags.map((tag, i) => (<div className='inline-flex rounded-lg text-xs text-white px-2 py-1 bg-red-300 bg-gradient-to-t from-red-700 to-red-300' key={i}>{tag}</div>))}
            </div>
            <div className='flex justify-between pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-400' />
                    {star}
                </p>
                <div>
                    <p className='text-lg font-semibold lg:text-2xl'>{price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard