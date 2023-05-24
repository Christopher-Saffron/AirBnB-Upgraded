import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Account from '@/models/Account'
import Travel from '@/models/Travel'
import React, { useEffect, useState } from 'react'
import { getSearchResults } from '@/lib/getSearchResults'
import { getSession, useSession } from "next-auth/react"
function ProcessPayment() {
    const router = useRouter()
    // console.log(router.query)
  return (
    <div className='min-h-screen'>
        <Header   />
        <main className='flex flex-col max-w-screen-xl relative  mx-auto overflow-hidden'>
            <div className='fixed items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className='relative pb-2'>
                <ul className="loader mx-auto">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
              </div>
              <p className='pt-16 italic font-semibold text-xl processing'>Processing</p>
            </div>
            
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default ProcessPayment

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const email = session?.user?.email || '' // Use optional chaining to access the email property

  console.log(context)

  try {
    const res = await fetch('http://localhost:3000/api/travel/new', {
      method: 'POST',
      body: JSON.stringify({
        ...context.query,
        email: email,
      }),
    })

    // Handle the response from the fetch request if needed
  } catch (err) {
    console.log(err)
  }

  return {
    props: {},
  }
}