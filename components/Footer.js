import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 md:px-32 px-6 py-4 md:py-14 text-center bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How HavirBnB works</p>
            <p>News</p>
            <p>Investors</p>
            <p>HavirBnB Premium</p>
            <p>HavirBnB Deluxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>Not a real website</p>
            <p>My portfolio</p>
            <p>Needed something</p>
            <p>Like that</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Vercel</p>
            <p>Presents</p>
            <p>Best App Hosting</p>
            <p>On this side</p>
            <p>Of the WEB</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Check my BLOG</p>
            <p>Check my Portfolio</p>
            <p>Thank You</p>
        </div>
    </div>
  )
}

export default Footer