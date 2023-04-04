import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import React from 'react'
import { format } from 'date-fns'
import { getSearchResults } from '@/lib/getSearchResults'
import InfoCard from '@/components/InfoCard'
import MapComponent from '@/components/Map'

function Search({searchResults}) {
    const router = useRouter()
    const {location, startDate, endDate, guestNumber} = router.query
    // console.log(router.query)
    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
    const range = `${formattedStartDate} = ${formattedEndDate}`;

  return (
    <div>
        <Header  placeholder={`${location} | ${range} | ${guestNumber} guests`}  />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays for {guestNumber} number od guests</p>

                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of place </p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and beds</p>
                    <p className='button'>More filters</p>
                </div>

                <div className='flex flex-col'>
                    {searchResults.map(({img, location, title, description, star, price}, i) => (
                        <InfoCard img={img} location={location} title={title} description={description} star={star} price={price} key={i} />
                    ))}
                </div>
            </section>

            <section className='hidden xl:inline-flex xl:min-w-[600px]' >
                <MapComponent />
            </section>
        </main>

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