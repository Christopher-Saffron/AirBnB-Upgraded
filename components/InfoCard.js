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
    <div onClick={() => router.push(`/place/${id}`)} className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t '>
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image src={img} alt='' fill style={{objectFit: 'cover'}} className='rounded-2xl' />
        </div>
        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
                <p>{location}</p>
                {liked ? <FilledHeartIcon className='h-7 w-7 text-red-500  heartAnim' /> : <HeartIcon className='h-7 w-7' />}
            </div>
            <h4 className='text-xl'>{title}</h4>
            <div className='border-b w-10 pt-2' />
            <p className='pt-2 text-sm text-gray-600 flex-grow'>{description}</p>
            <div className='flex gap-3 flex-wrap my-2'>
                {tags.map((tag, i) => (<div className='inline-flex rounded-lg text-xs text-white px-2 py-1 bg-red-300 bg-gradient-to-t from-red-700 to-red-300' key={i}>{tag}</div>))}
            </div>
            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-400' />
                    {star}
                </p>
                <div>
                    <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard