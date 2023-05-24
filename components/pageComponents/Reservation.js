import React, { useEffect, useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import { StarIcon, LightningBoltIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

function Reservation({info}) {
    const router = useRouter()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [guestNumber, setGuestNumber] = useState(1)
    const [total, setTotal] = useState(Number(info.price.replace('PLN / night', '')))
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const [calculatedInfo, setCalculatedInfo] = useState({
        howManyDays: 1,
        priceDays: info.price.replace('PLN / night', ''),
        cleaningFee: Math.floor((info.price.replace('PLN / night', '') / 100) * 12),
        airBnbService: Math.floor((info.price.replace('PLN / night', '') / 50) * 12),
        taxes: Math.floor((info.price.replace('PLN / night', '') / 50) * 10),
    })

    useEffect(() => {
        setCalculatedInfo(calculateDays(startDate, endDate))
    }, [endDate,startDate,guestNumber])


    function getNewTotal () {
        const newTotal = calculatedInfo.priceDays + calculatedInfo.cleaningFee + calculatedInfo.airBnbService + calculatedInfo.taxes

        setTotal(newTotal)
    }

    useEffect(() => {
        getNewTotal()
    }, [calculatedInfo,guestNumber])

    function handleSelect (ranges) {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    function calculateDays(startDate, endDate) {
        const oneDay = 24 * 60 * 60 * 1000;
        const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const end = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
        const daysNumber = Math.round(Math.abs((start - end) / oneDay)) + 1;
        const diffDays = {
            howManyDays: daysNumber,
            priceDays: (Number(info.price.replace('PLN / night', '')) * daysNumber) * guestNumber,
            cleaningFee: Math.floor((info.price.replace('PLN / night', '') / 100) * 12),
            airBnbService: Math.floor((info.price.replace('PLN / night', '') / 50) * 12),
            taxes: Math.floor((info.price.replace('PLN / night', '') / 50) * 10),
        }
        return diffDays;
    }

    function reserve () {
        if (calculatedInfo.howManyDays <= 0) return
        
        const start = startDate.toISOString().slice(0,10);
        const end = endDate.toISOString().slice(0,10);
        router.push({
            pathname: '/payment',
            query: {
                placeName:info.placeName,
                placeHost:info.placeHost,
                fullPrice: total,
                dateStart: start,
                dateEnd: end,
                img: info.img
            }
        })
    }

  return (  
    // UNTIL I FIND A BETTER WAY, WE WILL BE HIDING ONE SECTION OF THE DATA-PICKER WITH CSS
    <div className='border p-4 border-gray-300 shadow-xl w-fit mx-auto relative md:sticky md:top-32 rounded-md bg-white reservationBar'>
        <div className='flex justify-between mb-3'>
            <div>{info.price}</div>
            <div className='flex items-center'>
                <StarIcon className='h-4' />
                <span className='font-semibold'>{info.star} </span>
                <div className='bg-black h-1 w-1 rounded-full mx-3' />
                <span className='text-gray-700 underline italic'>{info.reviews} reviews</span>
            </div>
        </div>
        <DateRangePicker 
                        ranges={[selectionRange]} 
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                        showDateDisplay={true}
                        direction={'vertical'}
                        showMonthAndYearPickers={true}
                        showSelectionPreview={false}
        />
        <div className='bg-gray-100 p-2 rounded-md shadow-sm border border-gray-200'>
            Guests:
            <input className='bg-inherit pl-2 text-[#FD5B61] focus:outline-none' value={guestNumber} onChange={(e) => {setGuestNumber(e.target.value)}} maxLength={2} max={10} type='number' placeholder='1' />
        </div>
        <div onClick={reserve} className='mx-auto cursor-pointer duration-200 hover:scale-105 w-full px-3 text-center font-semibold text-2xl text-white rounded-md mt-4 py-3 bg-gradient-to-r from-[#FD5B61] to-pink-500'>
            Reserve
        </div>
        {/* <p className='italic text-center mt-3 text-gray-600'>You won't be charged yet</p> */}
        <div className='p-2 flex flex-col gap-3 border-b border-gray-300'>
            <div className='flex justify-between'>
                <p className='underline'>{info.price.replace('/ night', '')} x {calculatedInfo.howManyDays} {calculatedInfo.howManyDays === 1 ? 'night' : 'nights'}</p>
                <p>{calculatedInfo.priceDays} zł</p>
            </div>
            <div className='flex justify-between'>
                <p className='underline'>Cleaning fee</p>
                <p>{calculatedInfo.cleaningFee} zł</p>
            </div>
            <div className='flex justify-between'>
                <p className='underline'>Airbnb service fee</p>
                <p>{calculatedInfo.airBnbService} zł</p>
            </div>
            <div className='flex justify-between'>
                <p className='underline'>Taxes</p>
                <p>{calculatedInfo.taxes} zł</p>
            </div>
        </div>
        <div className='flex font-semibold justify-between p-2'>
            <p>Total</p>
            <p>{total} zł</p>
        </div>
    </div>
  )
}

export default Reservation