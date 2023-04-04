import React from 'react'

const SEARCH_RESULTS = [
    {
        img: '/shibuyahotel.jpg',
        location: 'Shibuya',
        title: 'Dormy Inn Premium Shibuya Jingumae',
        description: 'Fantastic hotel in Shibuya area of Tokyo. The hotel is halfway between Shibuya crossing and Harajuku station and a great base for exploring Tokyo.',
        star: '4.2',
        price: '720 PLN / night',
        lat: '35.6673581',
        long: '139.6929497',
        google : "https://www.google.com/maps/place/Dormy+Inn+Premium+Shibuya+Jingumae/@35.6656193,139.698594,16z/data=!4m13!1m2!2m1!1sHotels!3m9!1s0x60188ca5ee5a8f99:0x7ea533fa28938f73!5m2!4m1!1i2!8m2!3d35.6657613!4d139.7023179!15sCgZIb3RlbHOSAR1qYXBhbmVzZV9zdHlsZV9idXNpbmVzc19ob3RlbOABAA!16s%2Fg%2F1hc3jpr5d",
    }
]


export async function getSearchResults() {
    return SEARCH_RESULTS
}