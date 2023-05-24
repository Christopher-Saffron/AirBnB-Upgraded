import React from 'react'

function FooterPage() {
  return (
    <div className='border-t border-gray-300 mt-5 bg-gray-50 text-gray-800 '>
        <div className='max-w-screen-xl mx-auto text-sm lg:text-base grid text-center lg:text-left px-5 justify-items-center lg:px-0 grid-cols-2 gap-y-6  lg:grid-cols-4 py-5'>
            <div className='flex flex-col gap-1 cursor-pointer'>
                <p className='mb-1 font-semibold'>Support</p>
                <p>Help Center</p>
                <p>AirCover</p>
                <p>Supporting people with disabilities</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Report a neighborhood concern</p>
            </div>
            <div className='flex flex-col gap-1 cursor-pointer'>
                <p className='mb-1 font-semibold'>Community</p>
                <p>Havirbnb.org: disaster relief housing</p>
                <p>Combating discrimination</p>
            </div>
            <div className='flex flex-col gap-1 cursor-pointer'>
                <p className='mb-1 font-semibold'>Hosting</p>
                <p>Havirbnb your home</p>
                <p>AirCover for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
                <p>Airbnb-friendly apartments</p>
            </div>
            <div className='flex flex-col gap-1 cursor-pointer'>
                <p className='mb-1 font-semibold'>Havirbnb</p>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Gift cards</p>
            </div>
        </div>
        <div className='w-full text-center italic text-gray-600 py-3 text-sm border-t border-gray-300'>
            <p>This website is fake. However the places shown, do exist.</p>
            <p>Made by Christopher 'Havir' Saffron</p>
            <a className='text-sky-500 underline' href='https://bloghavir.vercel.app/' target='_blank'>Visit my blog</a>
        </div>
    </div>
  )
}

export default FooterPage