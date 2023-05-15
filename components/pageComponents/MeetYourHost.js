import Image from 'next/image'
import React from 'react'
import { faker } from '@faker-js/faker';

function MeetYourHost({person, }) {
  return (
    <div className='text-gray-800'>
        <p className=' text-2xl font-bold my-6'>Meet your host</p>
        <div className='border border-gray-200 rounded-3xl bg-slate-100 w-full min-h-[900px] flex flex-col py-10 items-center'>
            <div className='bg-white rounded-xl  shadow-xl relative py-4 w-2/4 max-w-[250px]'>
                <div className=' h-28 w-28 relative mx-auto'>
                    <Image src={person.avatarUrl} alt={person.hostName} fill className='object-contain rounded-full' />
                </div>
                <p className='text-4xl font-bold font-mono text-center pt-3'>{person.hostName}</p>
                <p className='italic text-center text-gray-500'>Superhost</p>
            </div>
            <div className=' mb-2 max-w-[300px] w-full flex flex-col gap-2 mt-5'>
                <div className=' flex flex-row items-start min-h-[30px]'>
                    <Image src='/school.svg' className='inline-block mt-1' width={30} height={30} alt='' />
                    <div className='ml-3'>
                        <span>Where I went to school: </span>
                        <span>University of Oxford</span>
                    </div>
                </div>
                <div className=' flex flex-row items-start min-h-[30px]'>
                    <Image src='/work.svg' className='inline-block mt-1' width={25} height={30} alt='' />
                    <div className='ml-3'>
                        <span>My work: </span>
                        <span>{person.jobTitle}</span>
                    </div>
                </div>
                <div className=' flex flex-row items-start min-h-[30px]'>
                    <Image src='/skill.svg' className='inline-block mt-1' width={25} height={30} alt='' />
                    <div className='ml-3'>
                        <span>Most useless skill: </span>
                        <span>Cooking 1 minute rice in 59 seconds </span>
                    </div>
                </div>
                <div className=' flex flex-row items-start min-h-[30px]'>
                    <Image src='/paw.svg' className='inline-block mt-1' width={25} height={30} alt='' />
                    <div className='ml-3'>
                        <span>Pets: </span>
                        <span>None</span>
                    </div>
                </div>
                <div className=' flex flex-row items-start min-h-[30px]'>
                    <Image src='/mail-icon.svg' className='inline-block mt-1' width={25} height={30} alt='' />
                    <div className='ml-3'>
                        <span>Email: </span>
                        <span>{person.email}</span>
                    </div>
                </div>
            </div>
            <div className='text-center w-full max-w-[300px] py-6 border-y border-gray-300 text-xl mx-auto'>
                {person.bio.charAt(0).toUpperCase() + person.bio.slice(1)}
            </div>
            <div className='py-6 cursor-pointer underline italic text-center w-full max-w-[300px] text-xl border-b border-gray-300'>
                Read more {'>>>'}
            </div>
            <div className='bg-slate-700 text-white font-bold rounded-lg cursor-pointer px-4 py-4 my-3 shadow-lg'>
                Message Host
            </div>
        </div>
    </div>
  )
}

export default MeetYourHost