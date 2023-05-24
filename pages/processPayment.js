import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Account from '@/models/Account'
import Travel from '@/models/Travel'
import React, { useEffect, useState } from 'react'
import { getSearchResults } from '@/lib/getSearchResults'
import { connectDatabase } from '@/lib/db'
// import { connectDatabase } from '@/lib/db.js';

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
  const { client, db } = await connectDatabase();

  const travelsCollection = await db.collection('Travel')

  const travels = await travelsCollection.find({}).toArray();

  // console.log(travels)
  console.log(context.query)
  const newTravel = await new Travel(context.query)
  console.log(newTravel)

  newTravel.save({ timeout: 20000 });
  // Close the MongoDB client connection
  await client.close();

  return {
    props: {
    },
  };
}


// Access the "accounts" collection
  // const accHistoryCollection = await db.collection('acc_history');

  // // Query documents from the collection
  // const accHistory = await accHistoryCollection.find({}).toArray();
  // console.log(accHistory)

  // Serialize the _id field
// const serializedAcc = accHistory.map((account) => ({
//   ...account,
//   _id: account._id.toString(),
// }));
