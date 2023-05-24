import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { getSearchResults } from '@/lib/getSearchResults'
import InfoCard from '@/components/InfoCard'
import MapComponent from '@/components/Map'

function Search({searchResults}) {
    const router = useRouter()
  return (
    <div>
        <Header   />
        success from {router.query?.from}
        <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
    const searchResults = await getSearchResults()

    return { props: {
        searchResults
    }}
}