import React from 'react'
import { StarIcon, UserCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function Reviews({commentsArray}) {
  return (
    <div className='pt-3 px-5 mt-6 border-t border-gray-300'>
        <div className='flex items-center gap-3 font-semibold text-xl'>
            <StarIcon className='h-4' />
            <p>4.95</p>
            <p>19 reviews</p>
        </div>

        <div className='grid mt-3 grid-cols-2 gap-y-3 gap-x-12 text-sm'>
            <div className='flex justify-between'>
                <p>Cleanliness</p>
                <div className='flex gap-3 justify-end w-full items-center'>
                    <div className='relative  h-2 bg-gray-300 w-full max-w-[200px]'>
                        <div className='bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full' style={{width: '93%'}}/>
                    </div>
                    <p className='ml-4'>4.9</p>
                </div>
            </div>
            
            <div className='flex justify-between'>
                <p>Accuracy</p>
                <div className='flex gap-3 justify-end w-full items-center'>
                    <div className='relative  h-2 bg-gray-300 w-full max-w-[200px]'>
                        <div className='bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full' style={{width: '93%'}}/>
                    </div>
                    <p className='ml-4'>4.9</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <p>Communication</p>
                <div className='flex gap-3 justify-end w-full items-center'>
                    <div className='relative  h-2 bg-gray-300 w-full max-w-[200px]'>
                        <div className='bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full' style={{width: '93%'}}/>
                    </div>
                    <p className='ml-4'>4.9</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <p>Location</p>
                <div className='flex gap-3 justify-end w-full items-center'>
                    <div className='relative  h-2 bg-gray-300 w-full max-w-[200px]'>
                        <div className='bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full' style={{width: '93%'}}/>
                    </div>
                    <p className='ml-4'>4.9</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <p className='whitespace-nowrap'>Check-in</p>
                <div className='flex gap-3 justify-end w-full items-center'>
                    <div className='relative  h-2 bg-gray-300 w-full max-w-[200px]'>
                        <div className='bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full' style={{width: '93%'}}/>
                    </div>
                    <p className='ml-4'>4.9</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <p>Value</p>
                <div className='flex gap-3 justify-end w-full items-center'>
                    <div className='relative  h-2 bg-gray-300 w-full max-w-[200px]'>
                        <div className='bg-gray-900 absolute top-1/2 transform -translate-y-1/2 left-0 h-full' style={{width: '93%'}}/>
                    </div>
                    <p className='ml-4'>4.9</p>
                </div>
            </div>

        </div>
        <div className='grid grid-cols-2 gap-y-16 gap-x-3 my-6 h-fit'>
        {commentsArray.map((user,i) => (
            <div key={i} className=' w-full max-h-[200px]'>
                <div className='flex gap-3'>
                        <div className='h-12 w-12 relative'>
                            <Image src={user.picture.thumbnail} fill className='object-contain rounded-full' />
                        </div>
                    <div className=''>
                        <p>{user.name.first + ' ' + user.name.last}</p>
                        <p className='text-gray-500 text-sm'>{user.registered.date.slice(0,10)}</p>
                    </div>
                </div>
                <div className='px-2 mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non rutrum nulla. Curabitur ut libero dictum, lobortis urna in, rhoncus eros. Nam sodales, ligula vitae placerat interdum, ex massa placerat ligula, nec aliquam augue est in sem.
                </div>
            </div>
        ))}
            
        </div>
    </div>
  )
}

export default Reviews