import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getSearchResults } from '@/lib/getSearchResults'
import { connectDatabase } from '@/lib/db.js';

function Search({accounts}) {
    const router = useRouter()
    // console.log(accounts)

  return (
    <div>
        <Header   />
        <main className='flex flex-col max-w-screen-2xl min-h-screen relative  mx-auto overflow-hidden'>
        {accounts.map((account) => (
            <div>account id: {account._id}</div>
        ))}
            
        </main>

        <Footer />
    </div>
  )
}

export default Search



export async function getServerSideProps() {
    const { client, db } = await connectDatabase();

    // Access the "accounts" collection
    const accHistoryCollection = await db.collection('acc_history');
    // Query documents from the collection
    const accHistory = await accHistoryCollection.find({}).toArray();

    // Serialize the _id field
  const serializedAcc = accHistory.map((account) => ({
    ...account,
    _id: account._id.toString(),
  }));
  
    // Close the MongoDB client connection
    await client.close();
  
    return {
      props: {
        accounts: serializedAcc, // Pass the accounts data to your page
      },
    };
}